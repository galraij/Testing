let myStuff = ["iPhone", "Computer", "Bottle"]
console.log(myStuff[1])



let plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
let lastIndex = plants.length - 1

console.log("The first plant is " + plants[0] + ", and the last one is " + plants[lastIndex])

plants.push(plants[0])
plants.unshift(plants[lastIndex])

console.log(plants)

let nature = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
let removeElements = nature.splice(0, nature.length - 1)
console.log(nature)
