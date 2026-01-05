let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if (performance === "stellar") {
    salary += stellarBonus
    console.log(salary)

} else if (performance === "good") {
    salary += goodBonus
    console.log(salary)
} else { console.log("no raise") }
