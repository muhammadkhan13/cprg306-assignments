'use client';

import { useState } from "react";
import { useEffect } from "react";

//Initialized fetchMealIdeas as an asyncronous function based on API functions shown in class material and examples
async function fetchMealIdeas(ingredient) {
    //I don't know if this makes a difference, but instead of hard-coding the url into the fetch field when trying to get a response from the API I made it into a variable
    //It's cleaner for me to look at and makes it easier to read the code when looking for errors
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    //Error handler that tries to get a response from the API based on the url provided
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        //Based on the example output, the response of the meals list would detect and respond accordingly if no matching meals were found
        //So, if there is no matching data retrieved from the API, it returns an empty list
        //During rendering, it will check if the list is empty
        //I added this same behavior to when the program catches an error
        //I don't remember if catch error statements need to return a value but I programmed it into that section just in case
        if (!data.meals) {
            return [];
        }

        //Once meal data has been obtained, it uses the mapping function to return a list of all matching meal items using the characteristics described in the assignment instructions
        return data.meals.map(meal =>({ idMeal: meal.idMeal, strMeal: meal.strMeal, strMealThumb: strMealThumb,}));
    } catch (error) {
        console.error("Error in fetching process:", error);
        return[];
    }
}

export function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas() {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(...mealData);
    };

    useEffect(() => { loadMealIdeas(); }, [ingredient]);

    return (
        <div>
          <h1>Meal Ideas with {ingredient}</h1>
          <ul>{meals.length > 0 ? (
              meals.map(meal => (
                <li key={meal.idMeal}>
                  <h3>{meal.strMeal}</h3>
                </li>
              ))) : (<li>No meals found for this ingredient.</li>)}
          </ul>
        </div>
      );
}