// document.getElementById("count").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new cou

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let savedEntry = count + " - "
    saveEl.textContent += savedEntry
    countEl.textContent = 0
    count = 0
}

