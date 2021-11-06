const name = document.querySelector("#name")
const array = []
function bos() {
    console.log(name.value)
    array.push(name.value)
    console.log(array);
    document.querySelector("#result").innerHTML = array
}

function choose() {
    const randomNumber = Math.floor(Math.random() * array.length)
    const isAvailable = array[randomNumber] == undefined ? "Mavjud emas" : array[randomNumber]
    document.querySelector("#omadliRaqam").innerHTML = "Omadli raqam: "+ isAvailable
    array.splice(randomNumber, 1)
    document.querySelector("#result").innerHTML = array
}