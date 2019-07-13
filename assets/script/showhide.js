//GLOBAL
$(document).ready(function() {

  $(".hidden").hide();

  $(".showMore").click(function() {
      console.log("Clicked showMore");
    $(".hidden" ).toggle("slow");    
  });

  $("#searchResults").hide();

	$("#searchButton").click(function() {

      console.log("Clicked searchButton");
		$("#searchResults").show("slow");
    $(".ui-helper-hidden-accessible").hide();

  });

  $("#recipeResults").hide();

$("#clickRecipe1, #clickRecipe2, #clickRecipe3, #clickRecipe4, #clickRecipe5").on("click",
      function() {
        console.log("Clicked", this.id);
    $("#recipeResults").show("slow");

  });

	$("#reset").click(function(){
    location.reload();
      console.log("Clicked reload");
	});

//END GLOBAL
});

