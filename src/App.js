import React from "react";
import "./App.css";
import Body from "./Components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import RecipeDetail from "./Components/RecipeDetail";
import Navigation from "./Components/Navigation";

export default function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [recipeCopy, setRecipeCopy] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key":
            "3eda0bbd97msh60a04f4e64d7443p15e1bejsnd5b5eb2351e1",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.results);
        setRecipeCopy(data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function filterRecipes(event, filterValue) {
    resetRecipes();
    setRecipes((prevState) => {
      return prevState.filter((x) =>
        x.topics.some((x) => x.slug == filterValue)
      );
    });
  }

  function resetRecipes() {
    setRecipes(recipeCopy);
  }

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Body
              recipes={recipes}
              resetRecipes={resetRecipes}
              filterRecipes={filterRecipes}
            />
          }
        />
        <Route path="/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}
