import React from "react";
import Filter from "./Filter";
import Hero from "./Hero";
import Recipe from "./Recipe";

export default function Body(props) {
  const recipeElements = props.recipes.map((recipe) => (
    <Recipe recipe={recipe} />
  ));

  return (
    <div>
      <Hero />
      <h1 className="inspiration">Need Inspiration?</h1>
      <Filter filterSelected={props.filterRecipes} />
      {props.recipes.length > 0 ? (
        <div className="recipe-grid">{recipeElements}</div>
      ) : (
        <p className="no-recipes">
          No recipes were found.
          <span onClick={props.resetRecipes}> Try Again?</span>
        </p>
      )}
    </div>
  );
}
