$(function () {

    const userInputEl = document.querySelector("#ingredient-search"); // Enter HTML element ID or class for the user input
    const resultsFieldEl = document.querySelector("#search-results-section");
    const saveBtnEl = document.querySelector("#save-btn");
    const clearBtnEl = document.querySelector("#clear-btn");
    // Spoonacular API Key
    var spoonApiKey = "4eb1b45b7edb4a658a39c27390eaebe2"
    // Spoonacular URL with the variables holding the key and user input appened

    var fetchSpoonData = function (ingredients) {
        let spoonApiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${spoonApiKey}&ingredients=${ingredients}&metaInformation=true`

        fetch(spoonApiUrl).then(function(response){
            console.log(response);
            response.json().then(function(data) {
                displayResults(data);
            })
        });
    }
    // event listener searches api when clicked
    $("#burritos").on("click", function(event){
        event.preventDefault();
        //grab the text
        var searchText = $(userInputEl).val().trim();
        fetchSpoonData(searchText);
    });

        // document elements below
        const item1 = document.querySelector("#day1");
        const item2 = document.querySelector("#day2");
        const item3 = document.querySelector("#day3");
        const item4 = document.querySelector("#day4");
        const item5 = document.querySelector("#day5");
        const item6 = document.querySelector("#day6");
        const item7 = document.querySelector("#day7");
    
    // function displays recipies
    var displayResults = function(data) {
        console.log(data);
        var title = [];
        var images = [];
        var i = 0;
        var arrayLength = data.length;
        while(i<arrayLength){
            title[i] = data[i]["title"];
            images[i] = data[i]["image"];
            i++;
        }
        var e = 0;
        while(e<arrayLength){
            var newDiv = document.createElement("div");
            var newImg = document.createElement("img");
            var newText = document.createElement("p");

            $(resultsFieldEl).append(newDiv);
            $(newDiv).append(newImg);
            $(newDiv).append(newText);


            $(newDiv).addClass('card card-custom');
            $(newImg).attr('src', images[e]);
            $(newImg).addClass('card-section')
            $(newText).text(title[e]);
            $(newText).addClass('card-section draggable');
            $(newText).attr('draggable', 'true');
            e++;
        }
        makeDraggable();
    }
    
    // function makes recipes draggable
    var makeDraggable = function(){
        const draggables = document.querySelectorAll(".draggable");
        const draggableContainers = document.querySelectorAll(".card-section-custom");
        
        draggables.forEach(draggable => {
            draggable.addEventListener("dragstart", () => {
                draggable.classList.add("selected");
            })
        })

        draggableContainers.forEach(containers => {
            containers.addEventListener("dragover", e => {
                e.preventDefault();
                const draggable = document.querySelector(".selected");
                containers.appendChild(draggable);
                $(draggables).removeClass("selected");
            })
        })

    }
    // function gets items in local storage
    $(item1).text(localStorage.getItem('sunday'));
    $(item2).text(localStorage.getItem('monday'));
    $(item3).text(localStorage.getItem('tuesday'));
    $(item4).text(localStorage.getItem('wendesday'));
    $(item5).text(localStorage.getItem('thursday'));
    $(item6).text(localStorage.getItem('friday'));
    $(item7).text(localStorage.getItem('saturday'));



<<<<<<< HEAD
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
=======
    // event listener sets inputs to client storage
    $(saveBtnEl).on('click', function(){
        localStorage.setItem('sunday', $(item1).text());
        localStorage.setItem('monday', $(item2).text());
        localStorage.setItem('tuesday', $(item3).text());
        localStorage.setItem('wendesday', $(item4).text());
        localStorage.setItem('thursday', $(item5).text());
        localStorage.setItem('friday', $(item6).text());
        localStorage.setItem('saturday', $(item7).text());
    });
    // event listener clears client storage items
    $(clearBtnEl).on('click', function(){
        localStorage.setItem('sunday', "");
        localStorage.setItem('monday', "");
        localStorage.setItem('tuesday', "");
        localStorage.setItem('wendesday', "");
        localStorage.setItem('thursday', "");
        localStorage.setItem('friday', "");
        localStorage.setItem('saturday', "");
        alert("Refresh the page for changes to reflect...")
    });
});
>>>>>>> 44e9e335ff3f0cd68dc0f829a6309408e033ac3d
