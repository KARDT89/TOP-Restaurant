import cheers from "../public/cheers.png"

function homepage(){
    const content = document.getElementById("content")
    content.innerHTML = ""
    const container = document.createElement("div");
    container.classList.add("container");

    // content.innerHTML = `
    // <div class="container">
    //     <h1>Resturent menu</h1>
    //     <div class="block block-1">
    //         <img src="./cheers.png" alt="cheers" width="200px">
    //         <p class="block-1-text">Welcome to our hoppy haven, where every sip tells a story! From crisp lagers to bold IPAs, we serve the finest brews to quench your thirst and lift your spirits. Pair your pint with sizzling bar bites and hearty meals, crafted to complement every flavor profile. Whether you're here to unwind after work or kick off the weekend with friends, we raise a glass to good times, great food, and unforgettable memories. Cheers to beer lovers everywhere!</p>
    //     </div>
    //     <div class="block block-2">
    //         <h2>Hours</h2>
    //         <ul>
    //             <li>Sunday: 8am - 12am</li>
    //             <li>Monday: 10am - 11pm</li>
    //             <li>Tuesday: 10am - 11pm</li>
    //             <li>Wednesday: 10am - 11pm</li>
    //             <li>Thursday: 10am - 11pm</li>
    //             <li>Friday: 10am - 11pm</li>
    //             <li>Saturday: 10am - 11pm</li>
    //         </ul>
    //     </div>
    //     <div class="block block-3">
    //         <h3>Locations</h3>
    //         <p>123 Forest Drive, Forestville, Maine</p>
    //     </div>
    // </div>
    // `

    const h1 = document.createElement("h1")
    h1.innerHTML = "Resturent Menu"

    const block1 = document.createElement("div")
    block1.classList.add("block","block-1")
    const image = document.createElement("img")
    image.src = cheers
    image.width = "200"
    const paragraph = document.createElement("p")
    paragraph.classList.add("block-1-text")
    paragraph.innerHTML = "Welcome to our hoppy haven, where every sip tells a story! From crisp lagers to bold IPAs, we serve the finest brews to quench your thirst and lift your spirits. Pair your pint with sizzling bar bites and hearty meals, crafted to complement every flavor profile. Whether you're here to unwind after work or kick off the weekend with friends, we raise a glass to good times, great food, and unforgettable memories. Cheers to beer lovers everywhere!"
    block1.appendChild(image)
    block1.appendChild(paragraph)
    
    const block2 = document.createElement("div")
    block2.classList.add("block","block-2")
    const h2 = document.createElement("h2")
    h2.innerText = "Hours"
    const hours = [
        "Sunday: 8am - 12am",
        "Monday: 10am - 11pm",
        "Tuesday: 10am - 11pm",
        "Wednesday: 10am - 11pm",
        "Thursday: 10am - 11pm",
        "Friday: 10am - 11pm",
        "Saturday: 10am - 11pm"
    ];
    const ul = document.createElement("ul")
    hours.forEach((day)=>{
        const li = document.createElement("li")
        li.innerText = day    
        ul.appendChild(li)    
    })
    block2.appendChild(h2)
    block2.appendChild(ul)

    const block3 = document.createElement("div")
    block3.classList.add("block","block-3")
    const h3 = document.createElement("h3")
    h3.innerText = "Locations"
    const location = document.createElement("p")
    location.innerText = "123 Forest Drive, Forestville, Maine"
    block3.appendChild(h3)
    block3.appendChild(location)

    container.appendChild(h1)
    container.appendChild(block1)
    container.appendChild(block2)
    container.appendChild(block3)
    content.appendChild(container)

}

export default homepage
