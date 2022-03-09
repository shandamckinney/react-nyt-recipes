import React from "react";
import Filter from "./Filter";
import Hero from "./Hero";
import Recipe from "./Recipe";

export default function Body(props) {
  console.log(props.recipes);
  const recipeElements =
    props.recipes.length &&
    props.recipes.map((recipe) => <Recipe recipe={recipe} key={recipe._id} />);

  function scrollForwardSlider() {
    let scroller = document.getElementById("scroller");
    scroller.scrollBy(250, 0);
  }

  function scrollBackSlider() {
    let scroller = document.getElementById("scroller");
    scroller.scrollBy(-250, 0);
  }

  return (
    <div>
      <Hero />
      <div className="suggestions">
        <h1 className="inspiration">Shanda's Suggestions</h1>
        <h3 className="pinell-times">
          Recipes selected throught the week by Shanda Pinell, food editor of
          The Pinell Times.
        </h3>
        {/* <Filter filterSelected={props.filterRecipes} /> */}
        {props.recipes.length > 0 ? (
          <div className="d-flex">
            <button className="left-scroll" onClick={scrollBackSlider}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
              </svg>
            </button>
            <div className="recipe-grid" id="scroller">
              {recipeElements}
            </div>
            <button className="right-scroll" onClick={scrollForwardSlider}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </button>
          </div>
        ) : (
          <p className="no-recipes">
            Loading...
            <span onClick={props.resetRecipes}> Try Again?</span>
          </p>
        )}
      </div>
    </div>
  );
}
