// EX1

let p1 = {
    name: "Gal",
    age: 38,
    city: "Yerucham"
}

let p2 = {
    name: "Reut",
    age: 38,
    city: "Jerusalem"
}

if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log(p1.name + " Wanted to date " + p2.name)
    } else {
        console.log(p1.name + " Wanted to date " + p2.name + " but couldn't")
    }
} else {
    console.log("can't date")
}

//EX2

let obj1 = {
    name: "Gal",
    age: 37
}

let obj2 = {
    name: "Reut",
    age: 38
}

let myList = [obj1, obj2]

console.log(myList)

obj2.age = 39

console.log(myList)

myList.splice(1, 1)

console.log(myList)

//EX3

let obj3 = {
    name: "Yossi",
    age: 40
}

let obj4 = {
    name: "Daniella",
    age: 43
}

let myList2 = [obj3, obj4]

myList = [myList, myList2]

console.log(myList)

//EX4

let book1 = {
    title: "The little prince",
    author: "gal"
}

let book2 = {
    title: "the little mermaid",
    author: "disney"
}

let library = {
    books: [book1, book2]
}

console.log(library)

