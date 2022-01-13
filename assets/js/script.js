var spoonApiKey = "apiKey=4eb1b45b7edb4a658a39c27390eaebe2"

var spoonApiUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=4eb1b45b7edb4a658a39c27390eaebe2&ingredients=apples,+flour,+sugar&number=2"

var callSpoon = function(){
    fetch(spoonApiUrl).then(function(response){
        console.log(response);
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
            })
        }
    });
}

callSpoon();

