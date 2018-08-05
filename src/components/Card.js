import React from 'react';

const Card = ({ robot, onAddFavoriteRobot }) => {
  const { id, name, email } = robot;
  return (
    <div className=" tc bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <button
          className="addToFavorites"
          onClick={() => onAddFavoriteRobot(robot)}
        >
          Add to favorites
        </button>
      </div>
    </div>
  );
};

export default Card;
