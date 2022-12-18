/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   let pronoun = ["the", "our"];
//   let adj = ["great", "big"];
//   let noun = ["jogger", "racoon"];
//   let com = ["com", "us"];

//   let pronounRandom = pronoun[Math.floor(Math.random() * 2) + 0];
//   let adjRandom = adj[Math.floor(Math.random() * 2) + 0];
//   let nounRandom = noun[Math.floor(Math.random() * 2) + 0];
//   let comRandom = com[Math.floor(Math.random() * 2) + 0];

//   let randomNames = pronounRandom + adjRandom + nounRandom + "." + comRandom;

//   return (document.getElementById("text").innerHTML = randomNames);
// };

//
window.onload = function() {
  //write your code here
  document.querySelector("#text").innerHTML = "Ver en Consola";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "us"];
  let domains = [".com", ".net", ".us"];

  pronoun.forEach(itPron => {
    adj.forEach(itAdj => {
      noun.forEach(itNoun => {
        domains.forEach(itDom => {
          return console.log(itPron + itAdj + itNoun + itDom);
        });
      });
    });
  });
};
