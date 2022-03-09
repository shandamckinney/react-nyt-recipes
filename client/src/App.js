import React from "react";
import "./App.css";
import Body from "./Components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import RecipeDetail from "./Components/RecipeDetail";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import GroceryList from "./Components/GroceryList";
import SavedRecipes from "./Components/SavedRecipes";
import axios from "axios";
import RecipeList from "./Components/RecipeList";

export default function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [recipeCopy, setRecipeCopy] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/recipes")
      .then((res) => {
        if (res.data) {
          setRecipes(res.data);
        }
      })
      .catch((err) => console.log(err));
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
        <Route path="/grocery-list" element={<GroceryList />} />
        <Route path="/saved-recipes" element={<SavedRecipes />} />
        <Route path="/all-recipes" element={<RecipeList />} />
      </Routes>
      <Footer />
    </div>
  );
}
