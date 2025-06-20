const About = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const container = document.createElement("div");
  container.classList.add("container");

  const h1 = document.createElement("h1");
  h1.innerHTML = "About Us";

  const block1 = document.createElement("div");
  block1.classList.add("block", "block-5");

  const p = document.createElement("p")
  p.innerHTML = ` Welcome to <strong>Beer89</strong> — your cozy neighborhood spot for handcrafted brews and hearty bites.
    Whether you're a fan of bold IPAs, smooth stouts, or just in for a good time with friends, we’ve got the perfect pint waiting for you.`

     const p2 = document.createElement("p")
  p2.innerHTML = ` We pride ourselves on sourcing local ingredients, supporting small breweries, and creating an atmosphere where everyone feels at home. Come for the beer, stay for the vibe!`


    block1.appendChild(p)
    block1.appendChild(p2)
    container.appendChild(h1)
    container.appendChild(block1)
    content.appendChild(container)

    

}

export default About