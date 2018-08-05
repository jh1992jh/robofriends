import React from 'react';

const FavoriteRobot = ({ favoriteRobot, onDeleteFavoriteRobot }) => {
  const { id, name, email } = favoriteRobot;
  return (
    <div className=" tc bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5 favoriteRobot">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <button
          className="addToFavorites"
          onClick={() => onDeleteFavoriteRobot(favoriteRobot)}
        >
          Delete Favorite
        </button>
      </div>
    </div>
  );
};

export default FavoriteRobot;
