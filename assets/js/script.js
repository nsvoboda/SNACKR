$(function () {

    var userInputEl = document.querySelector("#REPLACE"); // Enter HTML element ID or class for the user input
    var TEST_ONLY_VAR = "Apples, flour"; // FOR TESTING ONLY
    // Spoonacular API Key
    var spoonApiKey = "4eb1b45b7edb4a658a39c27390eaebe2"
    // Spoonacular URL with the variables holding the key and user input appened
   
   var ingredients = $('#ingredient-search').val();

    var fetchSpoonData = function (ingredients) {
        let spoonApiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=4eb1b45b7edb4a658a39c27390eaebe2&ingredients=${ingredients}`

        fetch(spoonApiUrl)
            .then(data => data.json())
            .then(data => { 
                console.log(data);
                recipeResults(data);
            });

    //shows a list of the search history
    var showSearchHistory = function (recipeResults) {
        var historyList = "";
        for (var i = 0; i > recipeResults.length; i++) {
            historyList = `<li> ${recipeResults[i]} </li>`
        }
        ingredients.innerHTML = historyList;
    };


    //displays the results of the recipe search
    var displayResults = function(recipeResults) {
        var recipeList = ""
        for (var i = 0; i > recipeResults.length; i++) {
            recipeList = `<li> ${recipeResults[i].title} </li>`
        }
        ingredients.innerHTML = recipeList;
    };

    $("#burritos").on("click", function(event){
        event.preventDefault();
        //grab the text
        var searchText = $("#ingredient-search").val().trim();
        fetchSpoonData(searchText);
        showSearchHistory();
    });

    fetchSpoonData(recipeResults);




});