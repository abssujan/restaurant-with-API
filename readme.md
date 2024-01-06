# Restaurant Search App

This JavaScript code is a simple application that allows users to search for meal details using the [TheMealDB API](https://www.themealdb.com/api.php). The application fetches data from the API based on user input, displays a list of restaurant thumbnails, and provides the option to view detailed information about a selected meal.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Functions](#functions)
- [Contributing](#contributing)

## Features

1. **Search Functionality:** Users can input a search term to find meals based on the provided name.
2. **Thumbnail Display:** The application displays restaurant thumbnails along with basic information about each meal.
3. **Detailed View:** Users can click on a restaurant thumbnail to view detailed information about a specific meal.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
   ```bash
   git clone https://github.com/your-username/restaurant-search-app.git
   ```

2. Open the project directory in your preferred code editor.

3. Open the `index.html` file in a web browser to launch the application.

## Usage

1. Open the application in your web browser.

2. Enter a meal name in the search input field.

3. Press the search button or hit Enter to fetch and display relevant restaurant thumbnails.

4. Click on a restaurant thumbnail to view detailed information about the selected meal.

## Functions

### `restaurantThumnil(search)`

- Fetches meal data from TheMealDB API based on the provided search term.
- Calls the `loadRestaurantDetails` function to display restaurant thumbnails.

### `loadRestaurantDetails(meals)`

- Displays restaurant thumbnails along with basic information.
- Clicking on a thumbnail triggers the `loadMealDeatails` function.

### `searchWithName()`

- Gets the user input from the search input field.
- Calls the `restaurantThumnil` function with the provided search term.

### `loadMealDeatails(idMeal)`

- Fetches detailed information about a specific meal based on the meal ID.
- Calls the `displayMealDetails` function to present the details.

### `displayMealDetails(meal)`

- Displays detailed information about a meal, including an image, title, and instructions.

## Contributing

Contributions to improve and enhance the application are welcome. Please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

