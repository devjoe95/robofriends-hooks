import React from "react";
import { IRobot } from "../containers/App";

const Card = ({ user }: { user: IRobot }) => {
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${user.id}?size=200x200`} />
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Card;
