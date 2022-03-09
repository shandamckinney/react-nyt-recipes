import React from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function RecipeList() {
  const [recipes, setRecipes] = React.useState([]);
  const [form, setForm] = React.useState({
    name: "",
    author: "",
    yield: "",
    time: "",
    description: "",
    tags: "",
    rating: "",
    ratingAverage: "",
    ingredients: "",
    steps: "",
    isEasy: false,
    image: "",
  });

  React.useEffect(() => {
    axios
      .get("https://nyt-recipe-backend.herokuapp.com/api/recipes")
      .then((res) => {
        if (res.data) {
          setRecipes(res.data);
          console.log(recipes);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  function handleChange(event) {
    console.log(event);
    const { name, value, type, checked } = event.target;
    setForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(form);
  }

  function addTodo() {
    if (form) {
      axios
        .post("https://nyt-recipe-backend.herokuapp.com/api/recipes", {
          name: form.name,
          author: form.author,
          yield: form.yield,
          time: form.time,
          description: form.description,
          tags: form.tags,
          rating: form.rating,
          ingredients: form.ingredients,
          steps: form.steps,
          isEasy: form.isEasy,
          image: form.image ? form.image : "",
        })
        .then(function (response) {
          console.log(response);
          toggle();
          setForm((prevState) => {
            return {
              name: "",
              author: "",
              yield: "",
              time: "",
              description: "",
              tags: "",
              rating: "",
              ratingAverage: "",
              ingredients: "",
              steps: "",
              isEasy: false,
              image: "",
            };
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("input field required");
    }
  }

  function deleteRecipe(recipe) {
    console.log(recipe);
    axios
      .delete(`api/recipes/${recipe._id}`, {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const recipeElements =
    recipes.length &&
    recipes.map((rec) => <Recipe recipe={rec} key={rec._id} />);

  const recipeModal = (
    <div>
      <h4>Add a Recipe</h4>
      <div className="recipe-form">
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={form.name}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={handleChange}
          name="author"
          value={form.author}
        />
        <input
          type="number"
          placeholder="Yield"
          onChange={handleChange}
          name="yield"
          value={form.yield}
        />
        <input
          type="text"
          placeholder="Time"
          onChange={handleChange}
          name="time"
          value={form.time}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={handleChange}
          name="description"
          value={form.description}
        />
        <input
          type="text"
          placeholder="Tags"
          onChange={handleChange}
          name="tags"
          value={form.tags}
        />
        <input
          type="text"
          placeholder="Rating"
          onChange={handleChange}
          name="rating"
          value={form.rating}
        />
        <input
          type="text"
          placeholder="Ingredients"
          onChange={handleChange}
          name="ingredients"
          value={form.ingredients}
        />
        <input
          type="text"
          placeholder="Steps"
          onChange={handleChange}
          name="steps"
          value={form.steps}
        />
        <div>
          <input
            type="checkbox"
            id="isEasy"
            checked={form.isEasy}
            onChange={handleChange}
            name="isEasy"
          />
          <label htmlFor="isFriendly">Is this easy?</label>
        </div>

        <button onClick={addTodo}>add todo</button>
      </div>
    </div>
  );

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);

  return (
    <div>
      <h4>List of Recipes</h4>
      {recipeElements}
      <div>
        <Button color="danger" onClick={toggle}>
          Click me to open Modal
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Sample Modal Title</ModalHeader>
          <ModalBody>{recipeModal}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Okay
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
