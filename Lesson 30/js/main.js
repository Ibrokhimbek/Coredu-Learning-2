const resultDiv = document.querySelector("#result")

function typing(symbols) {
    resultDiv.innerHTML += symbols
}

function cls() {
    resultDiv.innerHTML = ""
}

function result() {
    try {
        resultDiv.innerHTML = eval(resultDiv.innerHTML) == Infinity ? "Cheksiz" : eval(resultDiv.innerHTML)
    }catch(err) {
        resultDiv.innerHTML = "Idiotsan"
    }
}

function back() {
    resultDiv.innerHTML = resultDiv.innerHTML.substring(0, resultDiv.innerHTML.length-1)
}