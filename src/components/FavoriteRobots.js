import React, { Component, Fragment } from 'react';
import FavoriteRobot from './FavoriteRobot';
import ToggleRPC from '../modal/ToggleRPC';
import Modal from '../modal/Modal';

class FavoriteRobots extends Component {
  render() {
    const { favoriteRobots, onDeleteFavoriteRobot } = this.props;
    let outputFavoriteRobots;
    if (favoriteRobots.length === 0) {
      outputFavoriteRobots = <h3>You don't have any favorite robots yet</h3>;
    } else {
      outputFavoriteRobots = favoriteRobots.map((favoriteRobot, i) => (
        <FavoriteRobot
          key={i}
          favoriteRobot={favoriteRobot}
          onDeleteFavoriteRobot={onDeleteFavoriteRobot}
        />
      ));
    }
    return (
      <div className="favoriteRobots">
        <ToggleRPC>
          {({ on, toggle }) => (
            <Fragment>
              <button className="favoritesBtn" onClick={toggle}>
                Favorite Robots <span>{favoriteRobots.length}</span>
              </button>
              <Modal on={on} toggle={toggle}>
                <div className="favoriteRobotsModal">
                  {outputFavoriteRobots}
                </div>
              </Modal>
            </Fragment>
          )}
        </ToggleRPC>
      </div>
    );
  }
}

export default FavoriteRobots;
