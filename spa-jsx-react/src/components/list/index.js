import React from "react";
import data from "../../data/data.json";
import ListItem from "../listItem";

function List(props) {
  return (
    <ul>
      {props.data.map((person, index) => {
        return <ListItem key={index} data={person} />;
      })}
    </ul>
  );
}

export default List;
