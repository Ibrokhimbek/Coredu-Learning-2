let car = {
    caption: "Tiko",
    color: "Pink",
    tires: 4,
    number: "01A134BB",
    fullDescription: function (ism, familiya, otchestva, yosh) {
        return "My name is " + ism + ". My car's color is " + this.color + ". It has " + this.tires + " tires and its number is " + this.number + ". My surname is "+familiya+" "+otchestva+". I'm "+yosh+" years old"
    }
}
// const caption = "My car is "+car.caption+"."

const run = function (name, surname, fatherName, age) {
   const result = car.fullDescription(name, surname, fatherName, age)
   console.log(result);
}