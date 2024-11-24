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
  ]
};