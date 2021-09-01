// const searchFoodByName = async () => {
//     const serachInput = document.getElementById('search-input');
//     const seracahValue = serachInput.value;
//     if (seracahValue != '') {
//         // clear data 
//         serachInput.value = "";
//         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${seracahValue}`;
//         // load data
//         // fetch(url)
//         //     .then(res => res.json())
//         //     .then(data => displaySearchResult(data.meals))
//         const res = await fetch(url);
//         const data = await res.json();
//         displaySearchResult(data.meals);

//     }
// }
const searchFoodByName = () => {
    const serachInput = document.getElementById('search-input');
    const seracahValue = serachInput.value;
    if (seracahValue != '') {
        // clear data 
        serachInput.value = "";
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${seracahValue}`;
        // load data
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
    }
}
//search result section
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML='';
    searchResult.textContent = '';
    meals.forEach(meal => {
        // console.log(meals)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadMealDetails(${meal.idMeal})" class="card" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}
// const loadMealDetails = async mealId => {
//     console.log(mealId);
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     DisplayDetails(data.meals[0]);
// }
const loadMealDetails = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            DisplayDetails(data.meals[0]);

        })
}
const DisplayDetails = (meals) => {
    console.log(meals.strMealThumb);
    const detaiilsField = document.getElementById('food-details');
    detaiilsField.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <div class="card-header text-center">
        <h5 class="card-title"> Recent search: <br> ${meals.strMeal}</h5>
    </div>
    <div class="card-body">
        
        <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
        <p class="card-text">${meals.strInstructions.slice(0, 200)}</p>
        
    </div>
    <div class="card-footer text-muted">
    <a target="_blank" href="${meals.strYoutube}" class="btn btn-primary text-center">Watch recipe</a>
    </div>
    `;
    detaiilsField.appendChild(div);
}