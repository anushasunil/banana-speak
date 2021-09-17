var inputText = document.querySelector("#input-box");
var btnTranslate = document.querySelector("#translate");
var outputText = document.querySelector("#output-box");var errorMessage = document.querySelector(".error-message")


btnTranslate.addEventListener("click", function clickHandler()
{
    console.log(inputText.value);
    // url = "https://api.funtranslations.com/translate/minion.json?text=" + inputText.value;

    url = "https://api.funtranslations.com/translate/shakespeare.json?text=" + inputText.value

    fetch(url)
    .then((response) =>
        response.json())
    .then(function outputTextHandler(json){
        console.log(json);
        outputText.innerText = json.contents.translated;
    })
    .catch(errorHandling())
});

function errorHandling(error)
{
    errorMessage.innerText = "server frown 😣";
}