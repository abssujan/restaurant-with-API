// fectch api
const restaurantThumnil = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => loadRestaurantDetails(data.meals))
}

const loadRestaurantDetails = (meal) => {
    const restaurantDetails = document.getElementById('restaurant-details');
    console.log(meal)
    meal.forEach( meals => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
      <div class="card">
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

restaurantThumnil()