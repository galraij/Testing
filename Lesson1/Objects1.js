let car = {
    color: "red",
    numWheels: 8,
    isFancy: false
}

if (car.isFancy) {
    console.log("The " + car.color + " car has " + car.numWheels + " wheels. It is fancy!")
} else {
    console.log("The " + car.color + " car has " + car.numWheels + " wheels. It is not fancy!")
}




let object = {
    item: "bag",
    toBeginning: true,
    items: ["chair, table, bottle"]
}

if (!object.toBeginning) {
    object.items.push(object.item)
} else {
    object.items.unshift(object.item)
}
console.log(object.items)




const human = {
    age: 0,
    babyName: "Goojibear"
}


human.babyName = "Moses"

console.log(human)




let apple = {
    color: "red",
    name: "apple"
}

let cheese = {
    color: "yellow",
    name: "cheese"
}

let foods = [apple, cheese]

console.log(foods[0].name)
console.log(foods[0].color)




const bag = {
    weight: 10,
    owner: "Larissa",
    items: [                   // an array with objects in it!
        { item: "Pen", count: 2 },
        { item: "Bottle", count: 1 },
        { item: "Book", count: 3 }
    ]
}

console.log(bag.items[0].item)

let person = {
    firstName: "Dopple",
    lastName: "Ganger"
}

let p = person
p.firstName = "Chappy"

console.log(p)
console.log(person)

