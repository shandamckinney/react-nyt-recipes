import React from "react";
import { Link } from "react-router-dom";

export default function Recipe(props) {
  return (
    <Link to={`/${props.recipe._id}`}>
      <div className="recipe">
        <img className="recipe-img" src={props.recipe.image} alt="" />
        <div className="recipe-card-bottom">
          <h2 className="recipe-title">{props.recipe.name}</h2>
          <p className="recipe-author-small">{props.recipe.author}</p>

          <div className="tags">
            {props.recipe.time} minutes
            <p className="no-margin-bottom card-tags">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
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
