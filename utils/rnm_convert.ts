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
    "CLÉMENTINE Corse cdt": {category: "en:clementines", price_per: "KILOGRAM", organic: false},
    "CLÉMENTINE France biologique": {category: "en:clementines", price_per: "KILOGRAM", organic: true},

    "CAROTTE France lavée biologique": {category: "en:carrots", price_per: "KILOGRAM", organic: true},
    "CAROTTE France lavée vrac": {category: "en:carrots", price_per: "KILOGRAM", organic: false},
    "COURGETTE longue verte France biologique": {category: "en:zucchini", price_per: "KILOGRAM", organic: true},
    "COURGETTE longue verte France vrac": {category: "en:zucchini", price_per: "KILOGRAM", organic: false},
    "CONCOMBRE France biologique (la pièce)": {category: "en:cucumbers", price_per: "UNIT", organic: true},
    "CONCOMBRE France (la pièce)": {category: "en:cucumbers", price_per: "UNIT", organic: false},
    "TOMATE ronde ou ronde grappe France biologique": {category: "en:tomatoes", price_per: "KILOGRAM", organic: true},
    "TOMATE ronde rouge France 57-67 ou 67-82mm vrac": {category: "en:tomatoes", price_per: "KILOGRAM", organic: false},
    "POIREAU France entier vrac": {category: "en:leeks", price_per: "KILOGRAM", organic: false},
    "POIREAU France entier biologique": {category: "en:leeks", price_per: "KILOGRAM", organic: true},
    "AIL blanc sec France biologique": {category: "en:garlic", price_per: "KILOGRAM", organic: true},
    "AIL blanc sec France vrac": {category: "en:garlic", price_per: "KILOGRAM", organic: false},
    "OIGNON jaune France filet 1kg": {category: "en:onions", price_per: "KILOGRAM", organic: false},
    "OIGNON jaune France biologique": {category: "en:onions", price_per: "KILOGRAM", organic: true},
    
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

    // AIL blanc sec France 50-70 ou 60-80mm filet 3 têtes (le filet) 	3.39 	-0.07 	2.69 	4.29
    // AIL blanc sec hors Fr. vrac 	11.03 	+0.79 	  	 
    // ARTICHAUT Globuleux France (la pièce) 	2.67 	+0.48 	1.99 	2.99
    // AUBERGINE violette France biologique cdt 2 (le cdt 2) 	3.52 	-0.02 	  	 
    // AUBERGINE violette France vrac 	3.53 	-0.33 	2.69 	3.99
    // AUBERGINE violette hors Fr. biologique 	6.40 	  	  	 
    // AUBERGINE violette hors Fr. biologique cdt 2 (le cdt 2) 	3.00 	-0.17 	2.49 	3.59
    // AUBERGINE violette hors Fr. vrac 	3.33 	-0.43 	2.49 	3.99
    // AVOCAT hors Fr. biologique (la pièce) 	1.77 	+0.02 	1.50 	2.25
    // AVOCAT hors Fr. filet (la pièce) 	0.83 	= 	0.76 	0.99
    // AVOCAT hors Fr. vrac (la pièce) 	1.45 	+0.04 	1.19 	1.80
    // CAROTTE France lavée biologique 	2.27 	-0.03 	1.86 	2.66
    // CAROTTE France lavée sachet 1,5 kg 	1.81 	+0.07 	1.33 	2.19
    // CAROTTE France lavée sachet 2kg 	1.25 	+0.01 	1.00 	1.50
    // CAROTTE France lavée vrac 	1.78 	-0.01 	1.15 	2.29
    // CHICORÉE frisée France (la pièce) 	3.13 	+0.02 	2.50 	3.59
    // CHOU FLEUR France (la pièce) 	3.02 	-1.07 	1.99 	3.99
    // CONCOMBRE France (la pièce) 	1.44 	+0.12 	1.12 	1.75
    // CONCOMBRE France biologique (la pièce) 	1.96 	-0.07 	1.59 	2.49
    // CONCOMBRE hors Fr. (la pièce) 	1.22 	-0.13 	0.99 	1.49
    // CONCOMBRE hors Fr. biologique (la pièce) 	1.64 	-0.11 	1.49 	1.99
    // COURGE Potimarron France (la pièce) 	2.33 	+0.13 	1.49 	2.99
    // COURGE Potimarron France biologique (la pièce) 	2.81 	+0.10 	2.49 	3.50
    // COURGETTE longue verte France biologique 	4.81 	+0.38 	3.29 	7.10
    // COURGETTE longue verte France vrac 	3.74 	-0.24 	2.79 	4.49
    // COURGETTE longue verte hors Fr. biologique 	5.51 	+0.32 	4.65 	7.80
    // COURGETTE longue verte hors Fr. filet 1kg 	3.33 	-0.15 	2.99 	3.99
    // COURGETTE longue verte hors Fr. vrac 	3.13 	-0.85 	1.49 	4.49
    // ENDIVE France sachet 1kg 	4.03 	+0.06 	1.89 	4.99
    // ENDIVE France vrac 	5.02 	+0.18 	4.49 	5.99
    // LAITUE Batavia France (la pièce) 	1.27 	+0.01 	1.09 	1.50
    // LAITUE Feuille de chêne France (la pièce) 	1.32 	+0.02 	1.10 	1.59
    // LAITUE pommée France (la pièce) 	1.31 	= 	1.09 	1.50
    // POIREAU France entier botte 1kg 	2.34 	-0.07 	1.99 	2.99
    // POIVRON carré France biologique cdt 2 (le cdt 2) 	3.76 	+0.07 	3.49 	3.99
    // POIVRON carré hors Fr. biologique cdt 2 (le cdt 2) 	2.54 	-0.02 	2.00 	3.49
    // POIVRON rouge carré France vrac 	4.22 	-0.15 	3.49 	4.99
    // POIVRON rouge carré hors Fr. vrac 	4.19 	+0.08 	3.49 	4.99
    // POIVRON vert carré France vrac 	4.10 	+0.06 	3.49 	4.99
    // POIVRON vert carré hors Fr. vrac 	3.98 	-0.28 	2.99 	4.99
    // POMME DE TERRE de conservation France lavée sac 10kg 	0.84 	  	  	 
    // POMME DE TERRE de conservation France lavée sac 5kg 	1.01 	+0.06 	0.80 	1.30
    // POMME DE TERRE de conservation France vrac 	2.20 	-0.03 	1.59 	3.29
    // POMME DE TERRE four, frites ou purée de conservation France filet 2,5kg 	1.47 	-0.01 	1.10 	2.00
    // POMME DE TERRE France biologique 	2.56 	+0.10 	2.00 	3.00
    // POMME DE TERRE vapeur ou rissolée de conservation France filet 2,5kg 	1.38 	-0.20 	0.76 	1.92
    // TOMATE cerise allongée rouge France barq.250g 	8.09 	+0.68 	6.36 	11.16
    // TOMATE cerise allongée rouge hors Fr. barq.250g 	3.96 	-0.01 	3.96 	3.96
    // TOMATE cerise France biologique 	11.36 	+0.36 	7.45 	13.96
    // TOMATE cerise hors Fr. biologique 	8.67 	-0.25 	  	 
    // TOMATE cocktail France barq.500g 	5.97 	+0.12 	3.98 	6.98
    // TOMATE côtelée rouge France vrac 	3.93 	-0.46 	2.59 	4.99
    // TOMATE ronde ou ronde grappe France biologique 	6.19 	+0.10 	4.98 	7.78
    // TOMATE ronde rouge Espagne filet 1kg 	2.52 	+0.17 	1.89 	2.99
    // TOMATE ronde rouge France 57-67 ou 67-82mm vrac 	3.84 	+0.27 	2.65 	4.49
    // TOMATE ronde rouge France 77-82 ou 82-102mm vrac 	3.86 	+0.41 	2.95 	4.99
    // TOMATE ronde rouge France filet 1kg 	2.09 	+0.01 	1.89 	2.50
    // TOMATE ronde rouge France grappe vrac 	3.20 	-0.05 	2.59 	3.99
    // TOMATE ronde rouge Maroc filet 1kg 	2.23 	+0.04 	1.89 	2.69
}