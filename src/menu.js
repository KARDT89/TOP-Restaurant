import "./menu.css"

const menu = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const container = document.createElement("div");
  container.classList.add("container");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Resturent Menu";

  const beerMenu = [
    "<b>Classic Lager</b> – <i>Crisp, golden, and refreshing</i> <span style='float:right;'>₹199</span>",
    "<b>Bro Code</b> – <i>For the Brozzzzzzzzzzzzzzzzzzzzzzz</i> <span style='float:right;'>₹190</span>",
    "<b>Wheat Beer</b> – <i>Light-bodied with hints of orange & clove</i> <span style='float:right;'>₹229</span>",
    "<b>Dark Stout</b> – <i>Rich coffee & chocolate notes</i> <span style='float:right;'>₹269</span>",
    "<b>Belgian Tripel</b> – <i>Fruity, strong, and dangerously smooth</i> <span style='float:right;'>₹299</span>",
    "<b>Beer Bucket (5 Pints)</b> – <i>Mix & match your favorites</i> <span style='float:right;'>₹899</span>",
    "<b>Beer & Wings Combo</b> – <i>Choice of beer + spicy wings</i> <span style='float:right;'>₹399</span>",
    "<b>Kick</b> – <i>Vanilla ice cream topped with stoutzzzzzz</i> <span style='float:right;'>₹150</span>",
    "<b>Non-Alcoholic Beer</b> – <i>All taste, no buzz</i> <span style='float:right;'>₹149</span>",
  ];
  const block1 = document.createElement("div");
  block1.classList.add("block", "block-4");
  const ul = document.createElement("ul");
  ul.classList.add("beer-menu")
  beerMenu.forEach((beer) => {
    const li = document.createElement("li");
    li.innerHTML = beer;
    ul.appendChild(li);
  });
  block1.appendChild(ul)

  container.appendChild(h1)
  container.appendChild(block1)
  content.appendChild(container)
};

export default menu;
