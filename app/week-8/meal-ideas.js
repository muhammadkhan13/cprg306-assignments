'use client';

import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.meals) {
            return [];
        }

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