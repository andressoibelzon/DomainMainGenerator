/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let com = ["com", "us"];

  let pronounRandom = pronoun[Math.floor(Math.random() * 1) + 0];
  console.log();

  return (document.getElementById("text").innerHTML = pronounRandom);
  console.log("Hello Rigo from the console!");
};

// Math.random() * (max - min) + min;
