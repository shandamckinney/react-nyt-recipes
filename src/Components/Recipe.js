import React from "react";
import { Link } from "react-router-dom";

export default function Recipe(props) {
  return (
    <Link to={`/${props.recipe.id}`}>
      <div className="recipe">
        <h2 className="recipe-title">{props.recipe.name}</h2>
        <img className="recipe-img" src={props.recipe.thumbnail_url} alt="" />

        <div className="tags">
          {props.recipe.tags.some((x) => x.name == "under_30_minutes") && (
            <p className="no-margin-bottom">One pot!</p>
          )}
          <p className="no-margin-bottom">
            {props.recipe.total_time_tier.display_tier
              ? props.recipe.total_time_tier.display_tier
              : ""}
          </p>
        </div>
      </div>
    </Link>
  );
}
