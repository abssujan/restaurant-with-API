// fectch api
const restaurantThumnil = (seacrh) => {
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${seacrh}`
    fetch(url)
    .then(res => res.json())
    .then(data => loadRestaurantDetails(data.meals))
}

const loadRestaurantDetails = (meal) => {
    const restaurantDetails = document.getElementById('restaurant-details');
    console.log(meal)
    restaurantDetails.innerHTML = ``
    meal.forEach( meals => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
      <div onclick = "loadMealDeatails(${meals.idMeal})" class="card">
        <img src=" ${meals.strMealThumb} " class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${meals.strMeal}</h5>
        <p class="card-text">${(meals.strInstructions).slice(0,200)}</p>
        </div>
      </div>
        `;
        restaurantDetails.appendChild(createDiv)
    })
}

const searchWithName = () => {
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    restaurantThumnil(searchValue)
    searchInput.value = ``;
}

const loadMealDeatails = (idMeal) => {
 const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
 fetch(url)
 .then(res => res.json())
 .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = (meal) => {
  const mealDetailsContainer = document.getElementById('meals-details');
  mealDetailsContainer.innerHTML = ``;
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('card');
  containerDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${(meal.strInstructions).slice(0,200)}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  `;
  mealDetailsContainer.appendChild(containerDiv)
}
restaurantThumnil('')