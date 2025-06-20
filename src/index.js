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

// Create a new footer element
const footerElement = document.createElement('footer');

// Add content to the footer
footerElement.innerHTML = '<p>&copy; 2025 TheOdinProject Resturent Page. Made with ❤️ by <span id="dt89">DT89</span></p>';

// Append the footer to the body of the document
document.body.appendChild(footerElement);