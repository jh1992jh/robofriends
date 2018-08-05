import React from 'react';
import Card from './Card';

const CardList = ({ robots, onAddFavoriteRobot }) => {
  return (
    <div className="tc">
      {robots.map((robot, i) => {
        return (
          <Card key={i} robot={robot} onAddFavoriteRobot={onAddFavoriteRobot} />
        );
      })}
    </div>
  );
};

export default CardList;
