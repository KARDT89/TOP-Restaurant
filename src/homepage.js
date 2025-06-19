function homepage(){
    const content = document.getElementById("content")
    content.innerHTML = ""

    content.innerHTML = `
    <div class="container">
        <h1>Resturent menu</h1>
        <div class="block block-1">
            <img src="./cheers.png" alt="cheers" width="200px">
            <p class="block-1-text">Welcome to our hoppy haven, where every sip tells a story! From crisp lagers to bold IPAs, we serve the finest brews to quench your thirst and lift your spirits. Pair your pint with sizzling bar bites and hearty meals, crafted to complement every flavor profile. Whether you're here to unwind after work or kick off the weekend with friends, we raise a glass to good times, great food, and unforgettable memories. Cheers to beer lovers everywhere!</p>
        </div>
        <div class="block block-2">
            <h2>Hours</h2>
            <ul>
                <li>Sunday: 8am - 12am</li>
                <li>Monday: 10am - 11pm</li>
                <li>Tuesday: 10am - 11pm</li>
                <li>Wednesday: 10am - 11pm</li>
                <li>Thursday: 10am - 11pm</li>
                <li>Friday: 10am - 11pm</li>
                <li>Saturday: 10am - 11pm</li>
            </ul>
        </div>
        <div class="block block-3">
            <h3>Locations</h3>
            <p>123 Forest Drive, Forestville, Maine</p>
        </div>
    </div>
    `
}

export default homepage
