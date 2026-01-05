//EX1

let names = ["Gal", "Yossi", "Moran", "Natan"];
let ages = [37, 34, 32, 25];

let count = names.length - 1;


while (count >= 0) {
    console.log(names[count] + " is " + ages[count] + " years old.");
    count = count - 1;
}

//EX2

let numbers = [1, 35, 37, 40, 100]

let sum = 0
let added = numbers.length - 1

while (added >= 0) {
    sum += (numbers[added]);
    added = added - 1;
}

console.log(sum)

//EX3

let average = sum / numbers.length

console.log(average)

//EX4 + EX5

let nums = [];
let countEx4 = 1;
let oddNums = [];

while (countEx4 <= 100) {
    nums.push(countEx4);

    if (countEx4 % 2 != 0) { oddNums.push(countEx4) }

    countEx4++
}

console.log(nums)
console.log(oddNums)

//EX6

let numsEx6 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

let indexEx6 = 0;

while (indexEx6 <= numsEx6.length - 1) {
    if (numsEx6[indexEx6] === 709) { console.log(indexEx6) }
    indexEx6++
}


//EX7

const namesEx7 = ["Ashley", "Donovan", "Lucas"];
const agesEx7 = [23, 47, 18];
let peopleEx7 = {
    name: [],
    age: []
}

let indexEx7 = 0;

while (indexEx7 <= namesEx7.length - 1) {
    peopleEx7.name.push(peopleEx7.name[indexEx7] = namesEx7[indexEx7]);
    peopleEx7.age.push(peopleEx7.age[indexEx7] = agesEx7[indexEx7]);
    indexEx7 += 1;
}

console.log(peopleEx7);


//EX8

