
import { rnmToCategory } from '@/utils/rnm_convert';
import { seasonIndex } from '@/utils/season_index';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import { parse } from 'node-html-parser';

type PriceApi = {
  id: number,
  // product_id: null,
  location_id: number,
  proof_id: number,
  // product: null,
  location: [Object],
  proof: [Object],
  // product_code: null,
  // product_name: null,
  category_tag: string,
  labels_tags: [string] | null, // [ "en:organic" ]
  origins_tags: [string], // [ "en:france" ]
  price: number,
  price_is_discounted: boolean,
  price_without_discount: null,
  price_per: 'KILOGRAM' | 'UNIT',
  currency: string, // EUR
  location_osm_id: number,
  location_osm_type: string, // 'WAY',
  date: string, //'2024-10-03',
  owner: string,
  created: string, // '2024-10-03T11:04:09.969779Z',
  updated: string, // '2024-10-03T11:04:10.540425Z'
}
type PricesApi = {
  items: PriceApi[]
}
type Stat = {
    price_per: "KILOGRAM" | "UNIT",
    organic: {
      average_price: number,
      total_price?: number,
      number_of_prices?: number,
      name?: string,
    },
    regular: {
      average_price: number,
      total_price?: number,
      number_of_prices?: number,
      name?: string,
    },
    source?: string
}
type RnmStats = {
  [category: string] : Stat
}
type PriceStat = {
  category_tag: string,
  category_name: string,
  emoji: string,
  open_price: Stat
  rnm: Stat
}
const fetchCategoryStat = async (category_tag: string) => {
  const res = await fetch(`https://prices.openfoodfacts.org/api/v1/prices?app_name=leprixdescarottes&page=1&size=50&order_by=-date&category_tag=${category_tag}&origins_tags__contains=en:france&currency=EUR`)
  const prices : PricesApi = await res.json()
  let priceStat : Stat = {
    price_per: prices.items[0]?.price_per || "KILOGRAM",
    organic: {
      average_price: 0,
      total_price: 0,
      number_of_prices: 0
    },
    regular: {
      average_price: 0,
      total_price: 0,
      number_of_prices: 0
    }
  }
  for (let i = 0; i < prices.items.length; i++) {
    const price = prices.items[i]
    if (price.price_per != priceStat.price_per || price.price_is_discounted) {
      // Skip prices not matching Stat price per & discounted
      continue
    }
    if (price.labels_tags?.includes("en:organic")) {
      priceStat.organic.number_of_prices! +=1
      priceStat.organic.total_price! += price.price
    } else {
      priceStat.regular.number_of_prices! +=1
      priceStat.regular.total_price! += price.price
    }
  }
  priceStat.organic.average_price = (priceStat.organic.total_price! / priceStat.organic.number_of_prices!) || 0
  priceStat.regular.average_price = (priceStat.regular.total_price! / priceStat.regular.number_of_prices!) || 0
  return priceStat
}

const parseRnmResponse = async (url: string) => {
  let rnmStats : RnmStats = {}
  const res = await fetch(url)
  const rnmHtml = await res.text()
  const root = parse(rnmHtml);
  const rows = root.querySelectorAll('tr')
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]
    const a = row.querySelector("a")
    const strong = row.querySelector("strong")
    if (a && strong){
      const name = a.text.trim()
      const price = parseFloat(strong.text.trim())
      const rnmCategoryInfo = rnmToCategory[name]
      if (rnmCategoryInfo) {
        if (!rnmStats[rnmCategoryInfo.category]) {
          rnmStats[rnmCategoryInfo.category] = {
            price_per: rnmCategoryInfo.price_per,
            regular: {average_price: 0},
            organic: {average_price: 0},
            source: url
          }
        }
        if (rnmCategoryInfo.organic) {
          rnmStats[rnmCategoryInfo.category].organic.average_price = price
          rnmStats[rnmCategoryInfo.category].organic.name = name
        } else {
          rnmStats[rnmCategoryInfo.category].regular.average_price = price
          rnmStats[rnmCategoryInfo.category].regular.name = name
        }
        
      }
    }
  }
  return rnmStats
}
const fetchRnmStats = async () => {
  let rnmStats = await parseRnmResponse("https://rnm.franceagrimer.fr/prix?M2503:MARCHE")
  rnmStats = Object.assign({}, rnmStats, await parseRnmResponse("https://rnm.franceagrimer.fr/prix?M2502:MARCHE"))
  return rnmStats
}

const getPriceStat = async (rnmStats: RnmStats, category_tag: string, category_name: string, emoji: string) => {
  const priceStat : PriceStat = {
    category_tag: category_tag,
    category_name: category_name,
    emoji: emoji,
    rnm: rnmStats[category_tag] || {
      regular: {average_price: 0},
      organic: {average_price: 0},
    },
    open_price: await fetchCategoryStat(category_tag)
  }
  return priceStat
}
export const getStaticProps = (async (context) => {
  const rnmStats = await fetchRnmStats()
  let pricesStats : PriceStat[] = []
  for (let category of seasonIndex["may"]) {
    pricesStats.push(await getPriceStat(rnmStats, category.category, category.name, category.icon))
  }
  return { props: { prices: pricesStats, lastUpdate: new Date().toLocaleDateString("fr-FR") } }
}) satisfies GetStaticProps<{
  prices: PriceStat[],
  lastUpdate: string
}>

function PriceCard({price}: {price: PriceStat}) {
  return (
    <div className="card" style={{maxWidth: "350px"}}>
      
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <span style={{fontSize: 36}}>{price.emoji}</span>
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{price.category_name}</p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item" style={{flexGrow: 0}}>
          <div className="tooltip">
            <a href={"https://prices.openfoodfacts.org/products/" + price.category_tag}>
              <img src="/static/openprices.svg" alt="Open Prices" style={{maxWidth: "20px", height: "20px", verticalAlign: "middle"}}/> 
            </a>
            <span className="tooltiptext">Source: Open Prices</span>
          </div>
        </div>
        <div className="card-footer-item">
          <div className="tooltip">
            <span className="footer-price">{price.open_price.regular.average_price.toFixed(2)} € / {price.open_price.price_per === "KILOGRAM"? "kg" : "u"}</span>
            <span className="tooltiptext">Calculé à partir de {price.open_price.regular.number_of_prices} prix</span>
          </div>
        </div>
        <div className="card-footer-item">
          <img src="/static/organic.svg" alt="Bio" style={{height: "17px", paddingRight: "7px"}}/> 
          <div className="tooltip">
            <span className="footer-price">{price.open_price.organic.average_price.toFixed(2)} € / {price.open_price.price_per === "KILOGRAM"? "kg" : "u"}</span>
            <span className="tooltiptext">Calculé à partir de {price.open_price.organic.number_of_prices} prix</span>
          </div>
        </div>
      </footer>
      <footer className="card-footer">
        <div className="card-footer-item" style={{flexGrow: 0}}>
          <div className="tooltip">
            <a href={price.rnm.source}>
              <img src="/static/rnm.png" alt="RNM" style={{maxWidth: "20px"}}/> 
            </a>
            <span className="tooltiptext">Source: RNM france agrimer</span>
          </div>
        </div>
        <div className="card-footer-item">
          <div className="tooltip">
            <span className="footer-price">{price.rnm.regular.average_price.toFixed(2)} € / {price.rnm.price_per === "KILOGRAM"? "kg" : "u"}</span>
            <span className="tooltiptext">{price.rnm.regular.name ? "Produit utilisé: " + price.rnm.regular.name : "Produit non trouvé"}</span>
          </div>
        </div>
        <div className="card-footer-item">
          <img src="/static/organic.svg" alt="Bio" style={{height: "17px", paddingRight: "7px"}}/> 
          <div className="tooltip">
            <span className="footer-price">{price.rnm.organic.average_price.toFixed(2)} € / {price.rnm.price_per === "KILOGRAM"? "kg" : "u"}</span>
            <span className="tooltiptext">{price.rnm.organic.name ? "Produit utilisé: " + price.rnm.organic.name : "Produit non trouvé"}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default function Home({
  prices,
  lastUpdate
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
        <meta name="application-name" content="Le prix des carottes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Le prix des carottes" />
        <meta name="description" content="Un index à jour des prix des fruits et legumes de saison" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/static/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://leprixdescarottes.fr" />
        <meta name="twitter:title" content="Le prix des carottes" />
        <meta name="twitter:description" content="Un index à jour des prix des fruits et legumes de saison" />
        <meta name="twitter:image" content="https://leprixdescarottes.fr/static/android-chrome-192x192.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Le prix des carottes" />
        <meta property="og:description" content="Un index à jour des prix des fruits et legumes de saison" />
        <meta property="og:site_name" content="Le prix des carottes" />
        <meta property="og:url" content="https://leprixdescarottes.fr" />
        <meta property="og:image" content="https://leprixdescarottes.fr/static/apple-touch-icon.png" />

        <title>Le prix des carottes</title>
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="title">
            Le prix des carottes 🥕
          </h1>
          <p className="subtitle">
            Un index à jour des prix des fruits et legumes de saison.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {prices.map(price => <div className="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet is-full-mobile" key={price.category_tag}><PriceCard price={price}></PriceCard></div>)}
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Mis à jour le {lastUpdate}. 
          </p>
          <p>
            Construit à partir des données d'
            <a href="https://prices.openfoodfacts.org/">Open Prices <img src="/static/openprices.svg" alt="Open Prices" style={{maxWidth: "20px", height: "20px", verticalAlign: "middle"}}/></a> et 
            des bulletins <a href="https://rnm.franceagrimer.fr/prix?M2503:MARCHE">fruits</a> et <a href="https://rnm.franceagrimer.fr/prix?M2502:MARCHE">légumes</a> de <a href="https://rnm.franceagrimer.fr">France Agrimer <img src="/static/rnm.png" alt="RNM" style={{maxWidth: "20px"}}/></a>.
          </p>
          <p>
            Code disponible en <a href="https://github.com/TTalex/leprixdescarottes/">open source</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}