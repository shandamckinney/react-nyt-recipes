import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  console.log("id ", id);
  const [recipe, setRecipe] = React.useState();
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

  const history = useNavigate();
  const url = `https://nyt-recipe-backend.herokuapp.com/api/recipe/${id}`;
  console.log("url ", url);
  const fakeDescription =
    "Im baby coloring book VHS williamsburg, iPhone vegan art party artisan slow-carb you probably havent heard of them vexillologist kinfolk. Tilde distillery vice gentrify gluten-free cold-pressed humblebrag cardigan poke cloud bread copper mug normcore. Crucifix sartorial raw denim, meh pop-up hell of iPhone jean shorts direct trade prism snackwave hot chicken biodiesel 8-bit. Flexitarian copper mug pok pok twee etsy fingerstache trust fund dreamcatcher ugh gluten-free air plant waistcoat kickstarter mlkshk authentic. Yuccie 90s roof party selfies, salvia butcher letterpress PBR&B ugh fashion axe bicycle rights vape adaptogen. Raclette jean shorts +1, affogato poke disrupt sriracha succulents. Chia polaroid food truck enamel pin, iceland ramps vexillologist fam farm-to-table chartreuse taxidermy tofu affogato ethical pop-up.";

  React.useEffect(() => {
    axios.get(url).then((res) => {
      if (res.data) {
        console.log(res);
        setRecipe(res.data);
        setForm(res.data);
      }
    });
  }, []);

  const toggle = () => setModal(!modal);
  // Modal open state
  const [modal, setModal] = React.useState(false);

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

  function editRecipe() {
    if (form) {
      console.log(form);
      axios
        .post(
          `https://nyt-recipe-backend.herokuapp.com/api/recipe/edit/${id}`,
          {
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
          }
        )
        .then(function (response) {
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
          resetPage();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function deleteRecipe(recipe) {
    console.log(recipe);
    axios
      .delete(`api/recipes/${recipe._id}`, {})
      .then(function (response) {
        if (!!response) {
          redirect();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function redirect() {
    history("/all-recipes");
  }

  function resetPage() {
    axios
      .get(`https://nyt-recipe-backend.herokuapp.com/api/recipe/${id}`)
      .then((res) => {
        if (res.data) {
          console.log(res);
          setRecipe(res.data);
          setForm(res.data);
        }
      });
  }
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
      </div>
    </div>
  );

  //console.log(recipe);
  return (
    <div className="recipe-details">
      {recipe && (
        <div>
          <div className="recipe-header">
            <p className="recipe-rating">Easy</p>
            <h1>{recipe.name}</h1>
            <p className="recipe-author">
              By <span>{recipe.author}</span>
            </p>
          </div>
          <div className="recipe-deets">
            <div className="d-flex">
              <h4>YIELD</h4>
              <p>{recipe.yield} servings</p>
            </div>
            <div className="d-flex">
              <h4>TIME </h4>
              <p> {recipe.time ? recipe.time : "30"} minutes</p>
            </div>
          </div>

          {/* Recipe img and description */}
          <div className="d-flex first-look">
            <div className="recipe-description">
              <p>{recipe.description ? recipe.description : fakeDescription}</p>
            </div>
            <div className="recipe-thumbnail">
              <img className="pic-full-width" src={recipe.image} alt="" />
            </div>
          </div>

          {/* Recipe Tags */}
          <div className="d-flex tags-reviews">
            <div className="recipe-tags d-flex">
              <p>{recipe.tags}</p>
            </div>
            <div className="reviews-ratings">
              {recipe.rating ? recipe.rating : "4.5/5 out of 6,404 ratings"}
            </div>
          </div>

          {/* ingredients and prep */}
          <div className="recipe-body">
            <div className="recipe-ingredients">
              <h4>Ingredients</h4>
              <p className="ingredients">{recipe.ingredients}</p>
            </div>
            <div className="recipe-prep">
              <h4>Preparation</h4>
              {recipe.steps}
            </div>
          </div>
        </div>
      )}
      <Button color="danger" onClick={toggle}>
        Edit this Reecipe
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Sample Modal Title</ModalHeader>
        <ModalBody>{recipeModal}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editRecipe}>
            Okay
          </Button>
        </ModalFooter>
      </Modal>

      <button onClick={deleteRecipe}>Delete Recipe</button>
    </div>
  );
}
