import React from "react";
import data from "../../data/data.json";
import ListItem from "../listItem";

function List(props) {
  return (
    <ul>
      {props.person.map((person, index) => {
        return <ListItem key={index} data={person} />;
      })}
    </ul>
  );
}

export default List;
