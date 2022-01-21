$(function () {

    var userInputEl = document.querySelector("#REPLACE"); // Enter HTML element ID or class for the user input
    var TEST_ONLY_VAR = "Apples, flour"; // FOR TESTING ONLY
    // Spoonacular API Key
    var spoonApiKey = "4eb1b45b7edb4a658a39c27390eaebe2"
    // Spoonacular URL with the variables holding the key and user input appened
   
   var ingredients = $('#ingredient-search').val();

    var fetchSpoonData = function (ingredients) {
        let spoonApiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=4eb1b45b7edb4a658a39c27390eaebe2&ingredients=${ingredients}`

        fetch(spoonApiUrl).then(function(response){
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            })
        });
    }

    

    var displayResults = function(recipeResults) {
        recipeResults.title
        recipeResults.image
    }

    $("#burritos").on("click", function(event){
        event.preventDefault();
        //grab the text
        var searchText = $("#ingredient-search").val().trim();
        fetchSpoonData(searchText);
        displayResults()
    })






});

fetchSpoonData();

// Max daily deficit calculator

// var bodyFat = document.getElementById('body-fat').value;
// var bodyFatCals = bodyFat x 3500;
// var goalFatCals = goalFat x 3500;
// var maxDeficit = bodyFat x 31;
// var goalFat = getElementById('goal-weight').value;
// daysUntil = 0;

// while(bodyFatCals > goalFatCals) {
//    bodyFatCals = bodyFatCals - maxDeficit;
//    daysUntil++;
// };
// document.getElementId('days-until').value = daysUntil.value;
