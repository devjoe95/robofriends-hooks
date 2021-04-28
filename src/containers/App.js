import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { requestRobots, setSearchField } from "../actions";

function App({
  searchField,
  onSearchChange,
  loading,
  error,
  robots,
  fetchingRobots,
}) {
  useEffect(() => {
    fetchingRobots();
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return loading ? (
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
  return {
    searchField: state.searchRobots.searchField,
    loading: state.requestRobots.loading,
    error: state.requestRobots.error,
    robots: state.requestRobots.robots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    fetchingRobots: () => requestRobots(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
