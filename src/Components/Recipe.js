import React from "react";
import { Link } from "react-router-dom";

export default function Recipe(props) {
  return (
    <Link to={`/${props.recipe.id}`}>
      <div className="recipe">
        <img className="recipe-img" src={props.recipe.thumbnail_url} alt="" />
        <div className="recipe-card-bottom">
          <h2 className="recipe-title">{props.recipe.name}</h2>

          <div className="tags">
            {props.recipe.tags.some((x) => x.name == "under_30_minutes") && (
              <p className="no-margin-bottom card-tags">30 minutes</p>
            )}
            <p className="no-margin-bottom card-tags">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path d="M5 0v24l7-6 7 6v-24h-14zm1 1h12v20.827l-6-5.144-6 5.144v-20.827z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
