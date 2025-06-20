import homepage from "./homepage" 
import "./globals.css"
import menu from "./menu";
import About from "./about";

const homeBtn = document.getElementById("home")
const menuBtn = document.getElementById("menu")
const aboutBtn = document.getElementById("about")

document.addEventListener("DOMContentLoaded", (event) => {
  homepage()
});

homeBtn.addEventListener("click", () => {
    homepage()
})

menuBtn.addEventListener("click", () => {
  menu()
})

aboutBtn.addEventListener("click", () => {
  About()
})