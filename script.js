var allMeals = [];

function connect(){

    var search = document.getElementById("searchTerm").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

    var displayArea = document.getElementById("displayArea");

    var statusMessage = document.getElementById("statusMessage");

    var showAllBtn = document.getElementById("showAllBtn");

    allMeals = [];
    fetch(url)
    .then(res => res.json())
    .then(data => {

        if (data.meals == null){
            statusMessage.innerHTML = `<div class="alert alert-info d-inline-block">No meals found for "${search}".</div>`;
            return;
        }

        allMeals = data.meals;
        show(allMeals.slice(0, 5));

        if (allMeals.length > 5){
            showAllBtn.classList.remove("d-none");
        }

    });

}

function showAll(){
    show(allMeals.slice(5));
    document.getElementById("showAllBtn").classList.add("d-none");
}

function show(meals){

    var displayArea = document.getElementById("displayArea");
    for (var i = 0; i < meals.length; i++){

        var newDiv = document.createElement("div");
        newDiv.classList.add("col-12", "col-sm-6", "col-lg-4", "col-xl-3");


        newDiv.innerHTML =` <div class="card h-100 shadow-sm innerStyle">
                            <img src="${meals[i].strMealThumb}" class="card-img-top" alt="${meals[i].strMeal}">
                            <div class="card-body">




                            </div>








                            </div>

        
        
        
        
        
        
        
        
        
        `;






    }













}