var userInputEl = document.querySelector("#REPLACE"); // Enter HTML element ID or class for the user input
var TEST_ONLY_VAR = "Apples, flour"; // FOR TESTING ONLY
// Spoonacular API Key
var spoonApiKey = "4eb1b45b7edb4a658a39c27390eaebe2"
// Spoonacular URL with the variables holding the key and user input appened
var spoonApiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + spoonApiKey + "&ingredients="+ TEST_ONLY_VAR +"&number=2"


var fetchSpoonData = function(){
    fetch(spoonApiUrl).then(function(response){
        console.log(response);
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
            })
        }
    });
}

fetchSpoonData();

// Rob's magic formula

// var bodyFat = getElementById('body-fat').value;
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