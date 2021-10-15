// function run(one, two, three) { let obj = { num1: 4, num2: 5, num3: 6, func: function () { return one * two * three * this.num1 * this.num2 * this.num3 } }; console.log(obj.func()); console.log(one * obj.num1); console.log(two * obj.num2); console.log(three * obj.num3); }

// let obj = {
//     Ibrohim: "Ibrohim Turaboyev"
// }
// let obj2 = {
//     Ibrohim: "Ibrohim Turaboyev 2"
// }
// console.log(obj2["Ibrohim"])

const html = document.getElementById("result") //! id orqali html elementni topish
const html2 = document.getElementsByClassName("result") //! Classname orqali html elementlarni topish
const html3 = document.querySelector("#result") //! id va classname orqali bitta elementni topish
const allElements = document.querySelectorAll("#result") //! id va classname orqali barcha elementlarni topish
// html.innerHTML = "Ibrohim Turaboyev"

function salom() {
    html.innerHTML = "Ibrohim Turaboyev"
}