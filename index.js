function searchWord() {
    let word = document.getElementById("wordInput").value;
    let wordTitle = document.getElementById("wordTitle");
    let wordDefinition = document.getElementById("wordDefinition");

    if (word.trim() === "") {
        alert("Please enter a word");
        return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
            wordTitle.innerText = data[0].word;
            wordDefinition.innerText = data[0].meanings[0].definitions[0].definition;
        })
        .catch(() => {
            wordTitle.innerText = "Word not found";
            wordDefinition.innerText = "Please try another word.";
        });
}
