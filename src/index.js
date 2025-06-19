import homepage from "./homepage" 

const home = document.getElementById("home")

document.addEventListener("DOMContentLoaded", (event) => {
  homepage()
});

home.addEventListener("click", () => {
    homepage()
})
