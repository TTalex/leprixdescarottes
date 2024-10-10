type RnmToCategoryInfo = {
    category: string,
    price_per: "KILOGRAM" | "UNIT"
    organic: boolean
}
export const rnmToCategory : {[name:string]:RnmToCategoryInfo} = {
    "POIRE Conférence France vrac": {category: "en:pears", price_per: "KILOGRAM", organic: false},
    "POIRE France biologique": {category: "en:pears", price_per: "KILOGRAM", organic: true},
    "POMME Bicolore France biologique": {category: "en:apples", price_per: "KILOGRAM", organic: true},
    "POMME Gala France +170g vrac": {category: "en:apples", price_per: "KILOGRAM", organic: false},
    "RAISIN blanc Chasselas sans label France vrac": {category: "en:grapes", price_per: "KILOGRAM", organic: false},
    "RAISIN blanc France biologique": {category: "en:grapes", price_per: "KILOGRAM", organic: true},

    "CAROTTE France lavée biologique": {category: "en:carrots", price_per: "KILOGRAM", organic: true},
    "CAROTTE France lavée vrac": {category: "en:carrots", price_per: "KILOGRAM", organic: false},
    "COURGETTE longue verte France biologique": {category: "en:zucchini", price_per: "KILOGRAM", organic: true},
    "COURGETTE longue verte France vrac": {category: "en:zucchini", price_per: "KILOGRAM", organic: false},
    "CONCOMBRE France biologique (la pièce)": {category: "en:cucumbers", price_per: "UNIT", organic: true},
    "CONCOMBRE France (la pièce)": {category: "en:cucumbers", price_per: "UNIT", organic: false},
    "TOMATE ronde ou ronde grappe France biologique": {category: "en:tomatoes", price_per: "KILOGRAM", organic: true},
    "TOMATE ronde rouge France 57-67 ou 67-82mm vrac": {category: "en:tomatoes", price_per: "KILOGRAM", organic: false},
    
    // ANANAS standard (hors Victoria) (la pièce) 2.32
    // BANANE Afrique vrac 1.59
    // BANANE Amérique vrac 1.72
    // BANANE France vrac 1.91
    // BANANE hors Fr. biologique 2.34
    // BANANE hors Fr. biologique 5 fruits (les 5 fruits) 2.03
    // FRAMBOISE France barq.125g 25.65
    // FRAMBOISE hors Fr. barq.125g 22.85
    // MARRON CHATAIGNE France vrac 9.15
    // NOIX AOP Grenoble sac 1kg 7.23
    // NOIX AOP Grenoble sachet 500g 7.64
    // NOIX France biologique 8.11
    // NOIX sans label France vrac 5.72
    // ORANGE hors Fr. biologique 5.67
    // ORANGE hors Fr. biologique cdt 4 (le cdt 4) 5.09
    // ORANGE hors Fr. vrac 3.05
    // POIRE Conférence hors Fr. vrac 3.37
    // POIRE France biologique cdt 4 (le cdt 4) 3.16
    // POIRE Guyot ou Limonera France vrac 3.33
    // POIRE Rochas hors Fr. vrac 3.57
    // POIRE Williams verte France vrac 3.37
    // POMME Bicolore France biologique cdt 4 (le cdt 4) 2.85
    // POMME Bicolore France biologique cdt 6 (le cdt 6) 3.80
    // POMME Bicolore France sachet 1.57
    // POMME Gala France 136/180g vrac 2.01
    // POMME Golden France +170g vrac 2.65
    // POMME Golden France biologique cdt 4 (le cdt 4) 2.76
    // POMME Golden France biologique cdt 6 (le cdt 6) 3.77
    // POMME Golden France sachet 1.82
    // POMME Granny smith France +170g vrac 2.82
    // POMME Reinette grise du Canada France 136/180g vrac 3.03
    // POMME Reinette grise du Canada France +170g vrac 3.28
    // PRUNE bleue Président France vrac 3.78
    // PRUNE jaune autre ou inconnue France vrac 4.21
    // PRUNE jaune T-C Sun France vrac 4.01
    // PRUNE rouge-bleue France barq. 3.50
    // PRUNE rouge France vrac 4.04
    // PRUNE verte autre ou inconnue France vrac 5.52
    // PRUNE verte Reine-Claude de Bavay France barq. 6.68
    // PRUNE verte Reine-Claude de Bavay France vrac 5.09
    // RAISIN blanc Chasselas AOP Moissac France barq. 6.47
    // RAISIN blanc Chasselas AOP Moissac France vrac 4.59
    // RAISIN blanc hors Fr. biologique 6.68
    // RAISIN blanc Idéal ou Italia hors Fr. vrac 3.49
    // RAISIN blanc Vittoria hors Fr. vrac 3.47
    // RAISIN noir France biologique 8.03
    // RAISIN noir Lavallée France vrac 4.00
    // RAISIN noir Muscat Hambourg AOP Ventoux France barq. 7.87
    // RAISIN noir Muscat Hambourg sans label France barq. 6.18
    // RAISIN noir Muscat Hambourg sans label France vrac 4.45
}