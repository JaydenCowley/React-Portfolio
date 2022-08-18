import React from "react";
import PortfolioData from "./PortfolioData";

export default function PortCard(props) {
  // create a component to accept props to render a Portfolio card
  return (
      <div className="website_bubbles">

    <article className="bubble">
      <a href={props.href} target="_blank">
        {props.title}
      </a>
      <img src={props.img}></img>
    </article>
      </div>
  );
}