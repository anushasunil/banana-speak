var inputText = document.querySelector("#input-box");
var btnTranslate = document.querySelector("#translate");
var outputText = document.querySelector("#output-box")

btnTranslate.addEventListener("click", function clickHandler()
{
    console.log(inputText.value);
    url = "https://api.funtranslations.com/translate/minion.json?text=" + inputText;
    
    fetch(url)
        .then((response) => {
        var json = response.json;
        outputText.innerText = json.translated;

    });
});
