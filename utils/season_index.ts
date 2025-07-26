type CategoryIndex = {
    category: string
    name: string
    icon: string
}
export const seasonIndex : {[name:string]:CategoryIndex[]} = {
  "october": [
    {category: "en:carrots", name: "Carottes", icon: '🥕'},
    {category: "en:zucchini", name: "Courgettes", icon: '🥒'},
    // // {category: "en:beet", name: "Betterave", icon: '🟣'},
    // // {category: "en:endives", name: "Endives", icon: '☘'},
    {category: "en:cucumbers", name: "Concombres", icon: '🥒'},
    {category: "en:leeks", name: "Poireaux", icon: '🥬'},
    {category: "en:onions", name: "Oignons", icon: '🧅'},
    {category: "en:garlic", name: "Ail", icon: '🧄'},
    {category: "en:tomatoes", name: "Tomates", icon: '🍅'},
    {category: "en:apples", name: "Pommes", icon: '🍎'},
    // // {category: "en:citrus", name: "Citron", icon: '🍋'},
    {category: "en:grapes", name: "Raisins", icon: '🍇'},
    {category: "en:pears", name: "Poires", icon: '🍐'},
    {category: "en:clementines", name: "Clémentines", icon: '🍊'},
  ],
  "december": [
    {category: "en:carrots", name: "Carottes", icon: '🥕'},
    {category: "en:beet", name: "Betterave", icon: '🟣'},
    {category: "en:leeks", name: "Poireaux", icon: '🥬'},
    {category: "en:garlic", name: "Ail", icon: '🧄'},
    {category: "en:endives", name: "Endives", icon: '☘'},
    {category: "en:cauliflowers", name: "Chou-fleur", icon: '🥦'},
    {category: "en:cucumbers", name: "Concombres", icon: '🥒'},
    {category: "en:red-kuri-squash", name: "Potimarron", icon: '🎃'},
    {category: "en:pumpkins", name: "Citrouille", icon: '🎃'},
    {category: "en:onions", name: "Oignons", icon: '🧅'},
    {category: "en:potatoes", name: "Patates", icon: '🥔'},
    {category: "en:turnip", name: "Navets", icon: '🌱'},
    {category: "en:parsnip", name: "Panais", icon: '🍠'},
    {category: "en:tomatoes", name: "Tomates", icon: '🍅'},
    {category: "en:bananas", name: "Bananes", icon: '🍌'},
    {category: "en:clementines", name: "Clémentines", icon: '🍊'},
    {category: "en:pears", name: "Poires", icon: '🍐'},
    {category: "en:apples", name: "Pommes", icon: '🍏'},
    {category: "en:gala-apples", name: "Pommes Gala", icon: '🍎'},
    {category: "en:golden-delicious-apples", name: "Pommes Golden", icon: '🍏'},
  ],
  "may": [
    {category: "en:garlic", name: "Ail", icon: '🧄'},
    {category: "en:artichoke", name: "Artichauts", icon: '🥦'},
    {category: "en:asparagus", name: "Asperges", icon: '🌿'},
    {category: "en:eggplant", name: "Aubergines", icon: '🍆'},
    {category: "en:beet", name: "Betterave", icon: '🟣'},
    {category: "en:carrots", name: "Carottes", icon: '🥕'},
    {category: "en:cauliflowers", name: "Chou-fleur", icon: '🥦'},
    {category: "en:cucumbers", name: "Concombres", icon: '🥒'},
    {category: "en:zucchini", name: "Courgettes", icon: '🥒'},
    {category: "en:spinach", name: "Épinards", icon: '🥬'},
    {category: "en:lettuce", name: "Laitue", icon: '🥗'},
    {category: "en:turnip", name: "Navets", icon: '🌱'},
    {category: "en:onions", name: "Oignons", icon: '🧅'},
    {category: "en:potatoes", name: "Patates", icon: '🥔'},
    {category: "en:radishes", name: "Radis", icon: '🌱'},
    {category: "en:cherries", name: "Cerises", icon: '🍒'},
    {category: "en:strawberries", name: "Fraises", icon: '🍓'},
    {category: "en:grapefruits", name: "Pamplemousses", icon: '🍊'},
    {category: "en:tomatoes", name: "Tomates", icon: '🍅'},
    {category: "en:cherry-tomatoes", name: "Tomates Cerises", icon: '🍅'},
    // rhubarb
    {category: "en:apples", name: "Pommes", icon: '🍏'},
    {category: "en:gala-apples", name: "Pommes Gala", icon: '🍎'},
    {category: "en:golden-delicious-apples", name: "Pommes Golden", icon: '🍏'},
  ],
  "july": [
    {category: "en:garlic", name: "Ail", icon: '🧄'},
    {category: "en:artichoke", name: "Artichauts", icon: '🥦'},
    {category: "en:asparagus", name: "Asperges", icon: '🌿'},
    {category: "en:eggplant", name: "Aubergines", icon: '🍆'},
    {category: "en:beet", name: "Betterave", icon: '🟣'}, // no match rnm
    {category: "en:broccoli", name: "Brocoli", icon: '🥦'}, // no match rnm
    {category: "en:carrots", name: "Carottes", icon: '🥕'},
    {category: "en:cucumbers", name: "Concombres", icon: '🥒'},
    {category: "en:zucchini", name: "Courgettes", icon: '🥒'},
    {category: "en:spinach", name: "Épinards", icon: '🥬'}, // no match rnm
    {category: "en:lettuce", name: "Laitue", icon: '🥗'},
    {category: "en:onions", name: "Oignons", icon: '🧅'},
    {category: "en:potatoes", name: "Patates", icon: '🥔'},
    {category: "en:radishes", name: "Radis", icon: '🌱'}, // no match rnm

    {category: "en:apricots", name: "Abricots", icon: '🍑'},
    // amandes
    {category: "en:cherries", name: "Cerises", icon: '🍒'},
    {category: "en:strawberries", name: "Fraises", icon: '🍓'},
    {category: "en:raspberries", name: "Framboises", icon: '🍓'},
    {category: "en:redcurrants", name: "Groseilles", icon: '🍓'}, // no match rnm
    {category: "en:melons", name: "Melons", icon: '🍈'},
    {category: "en:blueberries", name: "Myrtilles", icon: '🫐'}, // no match rnm
    {category: "en:nectarines", name: "Nectarines", icon: '🍑'},
    {category: "en:watermelons", name: "Pasteques", icon: '🍉'},// no match rnm
    {category: "en:peaches", name: "Pêches", icon: '🍑'},
    {category: "en:pears", name: "Poires", icon: '🍐'},
    {category: "en:plums", name: "Prunes", icon: '🍑'},
    {category: "en:tomatoes", name: "Tomates", icon: '🍅'},
    {category: "en:cherry-tomatoes", name: "Tomates Cerises", icon: '🍅'},
    // rhubarb
    {category: "en:apples", name: "Pommes", icon: '🍏'},
    {category: "en:gala-apples", name: "Pommes Gala", icon: '🍎'},
    {category: "en:golden-delicious-apples", name: "Pommes Golden", icon: '🍏'},
  ]
};