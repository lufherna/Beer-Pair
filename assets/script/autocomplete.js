$(function() {
  var beers = [
    "Ale",
    "Lager",
    "Pilsner",
    "Porter",
    "Stout",
    "Wheat"
      ];
  $("#beerSearch").autocomplete({
      source: beers
    });
  });