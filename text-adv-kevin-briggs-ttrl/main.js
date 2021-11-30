const story = {
    attack: {
        title: "Chapter 1",
        story: `Once upon a time, the village of Catistan lived in peace. But one day, it was attacked bu Avarice the Angry Aardvark. The Premier of Catistan said, "There's only one person who can save us, !`,
        choices: [
            {
                choice: "Yes, I'm ready to accept!",
            },
            {
                choice: "No, I'd rather play video games."
            }
        ]
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("start-button");
    const input = document.getElementById("name-input");
    const content = document.getElementById("content")
    button.addEventListener('click', () => {
        content.innerHTML = 
        `
            <h1>${story.attack.title}</h1>
            <p>${story.attack.story}</p>
            ${getInputs()}
            <button>Go Forth!</button>
        `
    })
})

function getInputs() {
    let input = ""
    for(let i=0; i<story.attack.choices.length; i++) {
        input += `
            <div>
                <input id = "radio${i}" type="radio" name="choices"/>
                <label for="radio${i}">${story.attack.choices[i].choice}</label>
            </div>
        `
    }
    return input;
}
