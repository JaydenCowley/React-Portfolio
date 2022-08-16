import React from "react";

export default function PortCard(props) {
  // create a component to accept props to render a Portfolio card
  return (
    <div className="bubble">
      <a href={props.href} target="_blank">
        {props.title}
      </a>
      <img href={props.img}></img>
    </div>
  );
}
