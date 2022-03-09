import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = React.useState();

  const fakeDescription =
    "Im baby coloring book VHS williamsburg, iPhone vegan art party artisan slow-carb you probably havent heard of them vexillologist kinfolk. Tilde distillery vice gentrify gluten-free cold-pressed humblebrag cardigan poke cloud bread copper mug normcore. Crucifix sartorial raw denim, meh pop-up hell of iPhone jean shorts direct trade prism snackwave hot chicken biodiesel 8-bit. Flexitarian copper mug pok pok twee etsy fingerstache trust fund dreamcatcher ugh gluten-free air plant waistcoat kickstarter mlkshk authentic. Yuccie 90s roof party selfies, salvia butcher letterpress PBR&B ugh fashion axe bicycle rights vape adaptogen. Raclette jean shorts +1, affogato poke disrupt sriracha succulents. Chia polaroid food truck enamel pin, iceland ramps vexillologist fam farm-to-table chartreuse taxidermy tofu affogato ethical pop-up.";

  React.useEffect(() => {
    axios.get(
      "https://nyt-recipe-backend.herokuapp.com/api/items/:id",
      (req, res) => {
        console.log(res);
        const itemId = req.params.id;
        const item = res.find((_item) => _item.id === itemId);

        if (item) {
          res.json(item);
        } else {
          res.json({ message: `item ${itemId} doesn't exist` });
        }
      }
    );
  }, []);

  console.log(recipe);
  return (
    <div className="recipe-details">
      {recipe && (
        <div>
          <div className="recipe-header">
            <p className="recipe-rating">Easy</p>
            <h1>{recipe.name}</h1>
            <p className="recipe-author">
              By <span>{recipe.credits[0].name}</span>
            </p>
          </div>
          <div className="recipe-deets">
            <div className="d-flex">
              <h4>YIELD</h4>
              <p>{recipe.num_servings} servings</p>
            </div>
            <div className="d-flex">
              <h4>TIME </h4>
              <p>
                {" "}
                {recipe.total_time_minutes
                  ? recipe.total_time_minutes
                  : "30"}{" "}
                minutes
              </p>
            </div>
          </div>

          {/* Recipe img and description */}
          <div className="d-flex first-look">
            <div className="recipe-description">
              <p>{recipe.description ? recipe.description : fakeDescription}</p>
            </div>
            <div className="recipe-thumbnail">
              <img
                className="pic-full-width"
                src={recipe.thumbnail_url}
                alt=""
              />
            </div>
          </div>

          {/* Recipe Tags */}
          <div className="d-flex tags-reviews">
            <div className="recipe-tags d-flex">
              {recipe.tags.map((x, index) => (
                <p>
                  {x.display_name}
                  {index < recipe.tags.length - 1 ? <span>,</span> : ""}
                </p>
              ))}
            </div>
            <div className="reviews-ratings">
              {recipe.user_ratings.score
                ? recipe.user_ratings.score
                : "4.5/5 out of 6,404 ratings"}
            </div>
          </div>

          {/* ingredients and prep */}
          <div className="recipe-body">
            <div className="recipe-ingredients">
              <h4>Ingredients</h4>
              {recipe.sections[0].components.map((x) => (
                <p className="ingredients">{x.ingredient.name}</p>
              ))}
            </div>
            <div className="recipe-prep">
              <h4>Preparation</h4>
              {recipe.instructions.map((x) => (
                <div>
                  <h5>Step {x.position}</h5>
                  <p>{x.display_text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
