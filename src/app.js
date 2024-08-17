/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const paloCarta = ["♦", "♥", "♠", "♣"];
  const valorCarta = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const paloAleatorio = paloCarta[Math.floor(Math.random() * paloCarta.length)];
  const valorAleatorio =
    valorCarta[Math.floor(Math.random() * valorCarta.length)];
  if (paloAleatorio == "♥") {
    document.querySelector(".paloCard1").innerHTML = paloAleatorio;
    document.querySelector(".paloCard2").innerHTML = paloAleatorio;
    document.querySelector(".paloCard1").style.color = "red";
    document.querySelector(".paloCard2").style.color = "red";
  } else {
    document.querySelector(".paloCard1").innerHTML = paloAleatorio;
    document.querySelector(".paloCard2").innerHTML = paloAleatorio;
  }
  document.querySelector(".valorCard").innerHTML = valorAleatorio;
};
