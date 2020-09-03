
let name="Search a character in string"
console.log("Character is at position=",name.indexOf("h"))


let sec=prompt("Minutes::")
console.log("Minutes",sec,"are equal to",sec*60,"seconds")

let games = ["warzone", "valorent", "COD", "CS"];
console.log("Index is==",games.indexOf("CS"));


console.log("Elements containing 'a' in them are==")
for (let i = 0; i < games.length; i++) {
    if (games[i].includes('a')) {
    console.log(games[i])
    }
    
}    

let car = ["maserati", "tesla", "dodge", "camero"]
console.log("Original array is=")
console.log(car)
console.log("Reversed array is=")
console.log(car.reverse())

