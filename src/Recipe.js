import React from "react";
import style from "./recipe.module.css"

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul className={style.list}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>Calories: {Math.round(calories)}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
}

export default Recipe;
