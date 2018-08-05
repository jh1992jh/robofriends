import React, { Component, Fragment } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import FavoriteRobots from './components/FavoriteRobots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      favoriteRobots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  onAddFavoriteRobot = robot => {
    !this.state.favoriteRobots.includes(robot) &&
      this.setState({
        favoriteRobots: [...this.state.favoriteRobots, robot]
      });
  };

  onDeleteFavoriteRobot = favoriteRobot => {
    const { favoriteRobots } = this.state;

    this.setState({
      favoriteRobots: favoriteRobots.filter(robot => robot !== favoriteRobot)
    });
  };

  render() {
    const { favoriteRobots } = this.state;
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <Fragment>
          <div className="header">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
          </div>
          <Scroll>
            <CardList
              robots={filteredRobots}
              onAddFavoriteRobot={this.onAddFavoriteRobot}
            />
          </Scroll>
          <FavoriteRobots
            favoriteRobots={favoriteRobots}
            onDeleteFavoriteRobot={this.onDeleteFavoriteRobot}
          />
        </Fragment>
      );
    }
  }
}

export default App;
