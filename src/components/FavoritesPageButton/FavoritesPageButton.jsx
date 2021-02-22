import React from "react";
import { useHistory } from "react-router-dom";
import favoritesImg from "../../images/favorites.jpg";

function FavoritesPageButton() {
  const history = useHistory();

  return (
    <div className="btn-wrapper">
      <button
        className="loginBtn btn_sizeSm"
        onClick={() => {
          history.push("/favorites");
        }}
      >
        Favorites
      </button>
    </div>
  );
}

export default FavoritesPageButton;
