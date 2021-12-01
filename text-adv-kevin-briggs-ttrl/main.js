const story = {
    currentScene: "attack",
    attack: {
        title: "Chapter 1",
        story: `Once upon a time, the village of Catistan lived in peace. But one day, it was attacked bu Avarice the Angry Aardvark. The Premier of Catistan said, "There's only one person who can save us, !`,
        choices: [
            {
                choice: "Yes, I'm ready to accept!",
                destination: "battle"
            },
            {
                choice: "No, I'd rather play video games.",
                destination: 'goHome'
            }
        ]
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("start-button");
    const input = document.getElementById("name-input");
    const content = document.getElementById("content")
    button.addEventListener('click', renderScene)
})

function renderScene() {
    content.innerHTML = 
    `
        <h1>${story[story.currentScene].title}</h1>
        <p>${story[story.currentScene].story}</p>
        ${getInputs()}
        <button id="submit-button">Go Forth!</button>
    `

    const button = document.getElementById("submit-button");
    button.addEventListener('click', ()=> {
        getInputValue()
    })
}

function getInputValue() {
    const inputs = document.querySelectorAll('input[type="radio"]');
    for (let i=0; i<inputs.length; i++) {
        if (inputs[i].checked) {
            console.log(inputs[i])
        }
    }
}

function getInputs() {
    let input = ""
    for(let i=0; i<story[story.currentScene].choices.length; i++) {
        input += `
            <div>
                <input id = "radio${i}" type="radio" name="choices"/>
                <label for="radio${i}">${story[story.currentScene].choices[i].choice}</label>
            </div>
        `
    }
    return input;
}
