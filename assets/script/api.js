//GLOBAL
//user var
var userLocation = 0;
var distance = 0;

// variables to store recipe name and ID from first AJAX response
var recipeName = [];
var recipeID = [];

// beers object to store beer category names and their values
var beers = {
  ale: ["burger"],
  ales: ["burger"],
  lager: ["grilled"],
  lagers: ["grilled"],
  pilsner: ["salmon"],
  pilsners: ["salmon"],
  porter: ["barbecue"],
  porters: ["barbecue"],
  stout: ["roasted"],
  stouts: ["roasted"],
  wheat: ["salad"],
  wheats: ["salad"]
};
// http://www.epicurious.com/archive/drinking/beer/beerpairings (Where pairing come from)

jQuery(document).ready(function($) {
  $(".hidden").hide();

  $(".showMore").click(function() {
    console.log("Clicked Show More");

    google.maps.event.trigger(map, 'resize');

    $(".hidden").toggle("slow");
  });

  $("#searchResults").hide();

  $("#searchButton").click(function() {
    //console.log("Clicked Search Button");
    $("#searchResults").show();
    $(".hidden").show();
  });

  $("#searchButton").on("click", function(e) {

    e.preventDefault();

    var userInput = $("#beerSearch").val().trim();
    var lowercase = userInput.toLowerCase();

    // if the user inputs a beer category that is listed in the beers object, then..
    if (lowercase in beers) {

      // check for localStorage
      if (window.localStorage.getItem(recipeID)) {
        responseID = window.localStorage.getItem(recipeID);
        responseName = window.localStorage.setItem(recipeName);

      } else {

        for (var i = 0; i < beers[lowercase].length; i++) {
          var parms = $.param({
            key: "c1eba169fa258cb61bf0d070a92abbeb",
            format: "json",
            q: beers[lowercase][i],

          });

          var queryURL = "https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?" + parms;
          $.ajax({
            url: queryURL,
            //dataType: 'JSON',
            method: "GET",
            success: function(data) {

            }
          }).done(function(response) {

            //JSON.parse string to become object
            var res = JSON.parse(response);
            console.log(res);

            res.recipes.length = 5;

            for (var i = 0; i < res.recipes.length; i++) {

              recipeID.push(res.recipes[i].recipe_id);
              console.log(recipeID);
              var recipeIDs = window.localStorage.setItem('recipeID', recipeID);

              recipeName.push(res.recipes[i].title);
              console.log(recipeName);
              var recipeNames = window.localStorage.setItem('recipeName', recipeName);

              $("#recipe1").html(recipeName[0]);
              $("#recipe2").html(recipeName[1]);
              $("#recipe3").html(recipeName[2]);
              $("#recipe4").html(recipeName[3]);
              $("#recipe5").html(recipeName[4]);

            } // end of res.recipes.length for loop
          }) // end of first .done
        } // end of beers[userInput].length for loop
      } // end of else localStorage

    } else {
      console.error('Invalid selection:', userInput);
    }

  }); // end of on button click

  $("#recipe1").on("click", function() {
    console.log("recipeID[0]", recipeID[0]);
    var parms1 = $.param({
      key: "c1eba169fa258cb61bf0d070a92abbeb",
      format: "json",
      rId: recipeID[0],
    });
    var queryURL1 = "https://cors-anywhere.herokuapp.com/https://food2fork.com/api/get?" + parms1;
    $.ajax({
      url: queryURL1,
      //dataType: 'JSON',
      method: "GET",
      success: function(data1) {

      }
    }).done(function(response1) {

      //JSON.parse
      var res1 = JSON.parse(response1);
      console.log(res1);

      var ingredients = res1.recipe.ingredients;
      var title = res1.recipe.title;
      var sourceURL = res1.recipe.source_url;
      var imageURL = res1.recipe.image_url;
      var siteURL = res1.recipe.publisher_url;

      function makeUL() {
        // create the list element
        var list = document.createElement('ul');
        for (var i = 0; i < ingredients.length; i++) {
          // create list item
          var item = document.createElement('li');
          // set its contents
          item.appendChild(document.createTextNode(ingredients[i]));
          //append it to the list
          list.appendChild(item);
        } // end of for loops for ingredients list
        // return the constructed list
        return list;
      } // end of make unordered list function

      for (var i = 0; i < ingredients[i].length; ingredients[i]++) {
        $("#ingredients").html(makeUL(ingredients[i]));
      }

      $("#recipeTitle").html(title);
      $("#sourceURL").html('<a href=' + '"' + sourceURL + '"' + ' target="_blank"' + '>' + siteURL + '</a>');
      console.log("url5", sourceURL);
      $("#foodimage").html('<img src=' + imageURL + ' width="100%"' + '>');
      console.log("image1", imageURL);
    });
console.log(siteURL);
  }); // end of recipe1 click

  $("#recipe2").on("click", function() {
    console.log("recipeID[1]", recipeID[1]);
    var parms1 = $.param({
      key: "c1eba169fa258cb61bf0d070a92abbeb",
      format: "json",
      rId: recipeID[1],
    });
    var queryURL1 = "https://cors-anywhere.herokuapp.com/https://food2fork.com/api/get?" + parms1;
    $.ajax({
      url: queryURL1,
      //dataType: 'JSON',
      method: "GET",
      success: function(data1) {

      }
    }).done(function(response1) {

      //JSON.parse
      var res1 = JSON.parse(response1);
      console.log(res1);

      var ingredients = res1.recipe.ingredients;
      var title = res1.recipe.title;
      var sourceURL = res1.recipe.source_url;
      var imageURL = res1.recipe.image_url;
      var siteURL = res1.recipe.publisher_url;

      function makeUL() {
        // create the list element
        var list = document.createElement('ul');
        for (var i = 0; i < ingredients.length; i++) {
          // create list item
          var item = document.createElement('li');
          // set its contents
          item.appendChild(document.createTextNode(ingredients[i]));
          //append it to the list
          list.appendChild(item);
        } // end of for loops for ingredients list
        // return the constructed list
        return list;
      } // end of make unordered list function

      for (var i = 0; i < ingredients[i].length; ingredients[i]++) {
        $("#ingredients").html(makeUL(ingredients[i]));
      }

      $("#recipeTitle").html(title);
      $("#sourceURL").html('<a href=' + '"' + sourceURL + '"' + ' target="_blank"' + '>' + siteURL + '</a>');
      console.log("url5", sourceURL);
      $("#foodimage").html('<img src=' + imageURL + ' width="100%"' + '>');
      console.log("image2", imageURL);
    });
console.log(siteURL);
  }); // end of recipe2 click 

  $("#recipe3").on("click", function() {
    console.log("recipeID[2]", recipeID[2]);
    var parms1 = $.param({
      key: "c1eba169fa258cb61bf0d070a92abbeb",
      format: "json",
      rId: recipeID[2],
    });
    var queryURL1 = "https://cors-anywhere.herokuapp.com/https://food2fork.com/api/get?" + parms1;
    $.ajax({
      url: queryURL1,
      //dataType: 'JSON',
      method: "GET",
      success: function(data1) {

      }
    }).done(function(response1) {

      //JSON.parse
      var res1 = JSON.parse(response1);
      console.log(res1);

      var ingredients = res1.recipe.ingredients;
      var title = res1.recipe.title;
      var sourceURL = res1.recipe.source_url;
      var imageURL = res1.recipe.image_url;
      var siteURL = res1.recipe.publisher_url;

      function makeUL() {
        // create the list element
        var list = document.createElement('ul');
        for (var i = 0; i < ingredients.length; i++) {
          // create list item
          var item = document.createElement('li');
          // set its contents
          item.appendChild(document.createTextNode(ingredients[i]));
          //append it to the list
          list.appendChild(item);
        } // end of for loops for ingredients list
        // return the constructed list
        return list;
      } // end of make unordered list function

      for (var i = 0; i < ingredients[i].length; ingredients[i]++) {
        $("#ingredients").html(makeUL(ingredients[i]));
      }

      $("#recipeTitle").html(title);
      $("#sourceURL").html('<a href=' + '"' + sourceURL + '"' + ' target="_blank"' + '>' + siteURL + '</a>');
      console.log("url5", sourceURL);
      $("#foodimage").html('<img src=' + imageURL + ' width="100%"' + '>');
      console.log("image3", imageURL);
    });
console.log(siteURL);
  }); // end of recipe3 click 

  $("#recipe4").on("click", function() {
    console.log("recipeID[3]", recipeID[3]);
    var parms1 = $.param({
      key: "c1eba169fa258cb61bf0d070a92abbeb",
      format: "json",
      rId: recipeID[3],
    });
    var queryURL1 = "https://cors-anywhere.herokuapp.com/https://food2fork.com/api/get?" + parms1;
    $.ajax({
      url: queryURL1,
      //dataType: 'JSON',
      method: "GET",
      success: function(data1) {

      }
    }).done(function(response1) {

      //JSON.parse
      var res1 = JSON.parse(response1);
      console.log(res1);

      var ingredients = res1.recipe.ingredients;
      var title = res1.recipe.title;
      var sourceURL = res1.recipe.source_url;
      var imageURL = res1.recipe.image_url;
      var siteURL = res1.recipe.publisher_url;

      function makeUL() {
        // create the list element
        var list = document.createElement('ul');
        for (var i = 0; i < ingredients.length; i++) {
          // create list item
          var item = document.createElement('li');
          // set its contents
          item.appendChild(document.createTextNode(ingredients[i]));
          //append it to the list
          list.appendChild(item);
        } // end of for loops for ingredients list
        // return the constructed list
        return list;
      } // end of make unordered list function

      for (var i = 0; i < ingredients[i].length; ingredients[i]++) {
        $("#ingredients").html(makeUL(ingredients[i]));
      }

      $("#recipeTitle").html(title);
      $("#sourceURL").html('<a href=' + '"' + sourceURL + '"' + ' target="_blank"' + '>' + siteURL + '</a>');
      console.log("url5", sourceURL);
      $("#foodimage").html('<img src=' + imageURL + ' width="100%"' + '>');
      console.log("image4", imageURL);
    });
  }); // end of recipe4 click 

  $("#recipe5").on("click", function() {
    console.log("recipeID[4]", recipeID[4]);
    var parms1 = $.param({
      key: "c1eba169fa258cb61bf0d070a92abbeb",
      format: "json",
      rId: recipeID[4],
    });
    var queryURL1 = "https://cors-anywhere.herokuapp.com/https://food2fork.com/api/get?" + parms1;
    $.ajax({
      url: queryURL1,
      //dataType: 'JSON',
      method: "GET",
      success: function(data1) {

      }
    }).done(function(response1) {

      //JSON.parse
      var res1 = JSON.parse(response1);
      console.log(res1);

      var ingredients = res1.recipe.ingredients;
      var title = res1.recipe.title;
      var sourceURL = res1.recipe.source_url;
      var imageURL = res1.recipe.image_url;
      var siteURL = res1.recipe.publisher_url;

      function makeUL() {
        // create the list element
        var list = document.createElement('ul');
        for (var i = 0; i < ingredients.length; i++) {
          // create list item
          var item = document.createElement('li');
          // set its contents
          item.appendChild(document.createTextNode(ingredients[i]));
          //append it to the list
          list.appendChild(item);
        } // end of for loops for ingredients list
        // return the constructed list
        return list;
      } // end of make unordered list function

      for (var i = 0; i < ingredients[i].length; ingredients[i]++) {
        $("#ingredients").html(makeUL(ingredients[i]));
      }

      $("#recipeTitle").html(title);
      $("#sourceURL").html('<a href=' + '"' + sourceURL + '"' + ' target="_blank"' + '>' + siteURL + '</a>');
      console.log("url5", sourceURL);
      $("#foodimage").html('<img src=' + imageURL + ' width="100%"' + '>');
      console.log("image5", imageURL);
    });
  }); // end of recipe5 click 

}); // end of document ready