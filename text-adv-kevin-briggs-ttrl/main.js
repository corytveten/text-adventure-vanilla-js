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
    },
    battle: {
        title: 'The Bloody Battle for Catistan',
        story: "It's Avarice the Angry Aardvark, he looks angry.",
        choices: [
            {
                choice: "Attack him with a sword.",
                destination: "sword"
            },
            {
                choice: "Attack him with a candlestick.",
                destination: 'candlestick'
            }
        ]
    },
    goHome: {
        title: "Back at Home",
        story: "You find yourself back in the comfort of your own home. Don't worry about it, someone else will take care of the problems in Catistan. No need to feel guilty.",
        image: 'video_game.png',
        defaultDestination: 'attack',
        buttonText: "Let's try this again"
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("start-button");
    const input = document.getElementById("name-input");
    const content = document.getElementById("content")
    button.addEventListener('click', renderScene)
})

function renderScene() {
    let text = "Next";
    let image = "";
    if (story[story.currentScene].image) {
        image = `<img></img>`
    }
    if (story[story.currentScene].buttonText) {
        text = story[story.currentScene].buttonText
    }
    content.innerHTML = 
    `
        <h1>${story[story.currentScene].title}</h1>
        <p>${story[story.currentScene].story}</p>
        ${image}
        ${getInputs()}
        <button id="submit-button">${text}</button>
    `
    if (story[story.currentScene].image) {
        console.log('image')
        document.querySelector('img').src = `./img/${story[story.currentScene].image}`
    }
    const button = document.getElementById("submit-button");
    button.addEventListener('click', ()=> {
        getInputValue()
    })
}

function getInputValue() {
    const inputs = document.querySelectorAll('input[type="radio"]');
    for (let i=0; i<inputs.length; i++) {
        if (inputs[i].checked) {
            story.currentScene = inputs[i].getAttribute('data-destination')
            renderScene();
            return;
        }
    }
    story.currentScene = story[story.currentScene].defaultDestination
    renderScene()
}

function getInputs() {
    let input = ""
    if (!story[story.currentScene].choices) {
        return ""
    }
    for(let i=0; i<story[story.currentScene].choices.length; i++) {
        input += `
            <div>
                <input data-destination=${story[story.currentScene].choices[i].destination} id = "radio${i}" type="radio" name="choices"/>
                <label for="radio${i}">${story[story.currentScene].choices[i].choice}</label>
            </div>
        `
    }
    return input;
}
