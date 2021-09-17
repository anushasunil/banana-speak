var inputText = document.querySelector("#input-box");
var btnTranslate = document.querySelector("#translate");
var outputText = document.querySelector("#output-box");
var errorMessage = document.querySelector(".error-message")

var api = "https://api.funtranslations.com/translate/minion.json";

function fetchUrl(inputValue) {
    return api + "?text=" + inputValue;
}

function errorHandling() {
    errorMessage.innerText = "server frown 😣";
}

function clickHandler() {
    let input = inputText.value;
    console.log(fetchUrl(input))
    fetch(fetchUrl(input))
        .then((response) => response.json())
        .then((json) => {
            let finalOutput = json.contents.translated;
            outputText.innerText = finalOutput;
        })
        .catch(errorHandling)

}

btnTranslate.addEventListener("click", clickHandler);