import React from "react";

export default function NavTabs() {
  return (
    <nav>
      <ul>
        <li>
          <strong>Jayden Cowleys Portfolio</strong>
        </li>
      </ul>
      <ul>
        <li class="nav-button">
          <a href="#about-me"> About Me</a>
        </li>
        <li class="nav-button">
          <a href="#website-development">Website Developement</a>
        </li>
        <li class="nav-button">
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
