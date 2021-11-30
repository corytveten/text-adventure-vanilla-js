document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("start-button");
    const input = document.getElementById("name-input");
    const content = document.getElementById("content")
    button.addEventListener('click', () => {
        content.innerHTML = 
        `
            <h1>Chapter 2</h1>
            <p>Once upon a time, the village of Catistan lived in peace. But one day, it was attacked bu Avarice the Angry Aardvark. The Premier of Catistan said, "There's only one person who can save us, ${input.value}!"</p>
        `
    })
})
