import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { requestRobots, setSearchField } from "../actions";

export interface IRobot {
  email: string;
  id: number;
  name: string;
}

interface IAppProps {
  searchField: string;
  onSearchChange: any;
  loading: boolean;
  error?: any;
  robots: Array<IRobot>;
  fetchingRobots: any;
}

function App(props: IAppProps): JSX.Element {
  useEffect(() => {
    props.fetchingRobots();
  }, []);

  const filteredRobots: Array<IRobot> = props.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
  });

  return props.loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={props.onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    searchField: state.searchRobots.searchField,
    loading: state.requestRobots.loading,
    error: state.requestRobots.error,
    robots: state.requestRobots.robots,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) =>
      dispatch(setSearchField(event.target.value)),
    fetchingRobots: () => dispatch(requestRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
