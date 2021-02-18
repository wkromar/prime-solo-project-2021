import React from "react";
import { useHistory } from "react-router-dom";

function FavoritesPageButton() {
  const history = useHistory();

  return (
    <button
      className="btn"
      onClick={() => {
        history.push("/favorites");
      }}
    >
      Favorites
    </button>
  );
}

export default FavoritesPageButton;
