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