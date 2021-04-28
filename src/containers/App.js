import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { setSearchField } from "../actions";

function App({ searchField, onSearchChange }) {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
    // console.log(count)
  }, []); // if you add count, only run if count changes.

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { searchField: state.searchRobots.searchField };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
