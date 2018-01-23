/*
CONSIGNE

1/ A l'aide du plugin jQuery http://easyautocomplete.com/ :
    - Afficher un champ de saisie qui affiche une liste de pays lorsque l'on tape des caractères
    
2/ A l'aide du plugin jQuery https://fengyuanchen.github.io/datepicker/ :
    - Afficher un champ de saisie qui affiche un calendrier lorsque l'on clique dessus
*/

/*=====================Pays=====================*/

var options = {

  url: "resources/countries.json",

  getValue: "name",

  list: {	
    match: {
      enabled: true
    }
  },

  theme: "square"
};

$("#countries").easyAutocomplete(options);


/*=====================Date=====================*/



