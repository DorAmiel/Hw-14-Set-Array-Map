//EX1

let emailSet = new Set()

emailSet.add("aaa@gmail.com")
emailSet.add("bbb@gmail.com")
emailSet.add("aaa@gmail.com")
emailSet.add("ccc@gmail.com")
emailSet.add("ddd@gmail.com")
emailSet.add("fff@gmail.com")
emailSet.add("moishe@gmail.com")

const showEmailSetSize = () => console.log(emailSet.size)

const showEmailSetElements = () => {
    for (element of emailSet) {
        console.log(element)
    }
}
const checkEmail = () => {
    for (element of emailSet) {
        if (element === "moishe@gmail.com") {
            alert(`${element} is already here.`)
        }
    }
}

//EX1

//EX2

let userNameSet = new Set()

const activatePropmt = () => {
    for (let i = 0; i < 5; i++) {
        let userNameInput = prompt("Insert UserName:")
        userNameSet.add(userNameInput)
    }
}

const showUserNameSetSize = () => console.log(userNameSet.size)

const showUserNameSetElements = () => {
    for (element of userNameSet) {
        console.log(element)
    }
}

//EX2

//EX3

let idToProdcut = new Map()

idToProdcut.set(1, "Apple")
idToProdcut.set(2, "Banana")
idToProdcut.set(3, "Kiwi")
idToProdcut.set(4, "Pineapple")
idToProdcut.set(5, "Watermelon")


const showProductKeys = () => {
    for (const key of idToProdcut.keys()) {
        console.log(key)
    }
}

const showProductValues = () => {
    for (const value of idToProdcut.values()) {
        console.log(value)
    }
}

const showProductKeysAndValues = () => {
    for (const [key, value] of idToProdcut.entries()) {
        console.log(`The Number of ${key} is ${value}`)
    }
}

const checkKey7 = () => {

    if (idToProdcut.has(7)) {
        alert("7 Is Here")
    } else {
        alert("7 Is Missing!")
    }
}

const checkKey3 = () => {
    let checkThree = idToProdcut.get(3)
    if (checkThree === undefined) {
        alert("3 is missing")
    } else {
        alert(`3 Represents: ${checkThree}`)
    }

}

//EX3

//EX4

let ex4NumbersArray = []

for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    ex4NumbersArray.push(randomNumber)
}
// console.log(`The Array is: ${ex4NumbersArray}`)

const showArrayEx4 = () => {
    for (element of ex4NumbersArray) {
        console.log(element)
    }
}

const showFirstEvenNumber = () => {
    let firstEvenNumber
    firstEvenNumber = ex4NumbersArray.find(num => num % 2 === 0)
    if (firstEvenNumber) {
        console.log(`The first even number is: ${firstEvenNumber}`)
    } else {
        console.log(`There is no even numbers`)
    }
}

const showFirstGreaterThan50 = () => {
    let firstGreaterThan50
    firstGreaterThan50 = ex4NumbersArray.find((num) => num > 50)
    if (firstGreaterThan50) {
        console.log(`The First Number that is greater than 50 is: ${firstGreaterThan50}`)
    } else {
        console.log("No Number Greater Than 50!")
    }

}

const showOddNumbers = () => {
    let allOddNumbers
    allOddNumbers = ex4NumbersArray.filter(num => num % 2)
    console.log(`The Following numbers are odd: ${allOddNumbers}`)

}

const showAllGreaterThan50 = () => {
    let allGreaterThan50
    allGreaterThan50 = ex4NumbersArray.filter(num => num > 50)
    console.log(`The Following Numbers are bigger than 50: ${allGreaterThan50}`)
}

const showFirstGreaterThan50Index = () => {
    let greaterThan50index
    greaterThan50index = ex4NumbersArray.findIndex(num => num > 50)
    greaterThan50 = ex4NumbersArray.find(num1 => num1 > 50)
    console.log(`Number ${greaterThan50} is at the index: ${greaterThan50index}`)
}

const showOddOrEven = () => {
    for (element of ex4NumbersArray) {
        if (element % 2 === 0) {
            console.log(`${element} is even`)
        } else {
            console.log(`${element} is odd`)
        }
    }
}

const showMinimalNumber = () => {
    let minimalNumber = Math.min(...ex4NumbersArray)
    console.log(`The Minimal Number is: ${minimalNumber}`)
}

const showMaximalNumber = () => {
    let maximalNumber = Math.max(...ex4NumbersArray)
    console.log(`The Maximal Number is: ${maximalNumber}`)
}

//EX4

//EX5

let ex5Array = []
let xAndYObject = {}
for (let i = 0; i < 5; i++) {

    let randomNumberX = Math.floor(Math.random() * 101);
    let randomNumberY = Math.floor(Math.random() * 101);
    xAndYObject = {
            x: randomNumberX,
            y: randomNumberY
        }
        // xAndYObject.x = randomNumberX
        // xAndYObject.y = randomNumberY
    ex5Array.push(xAndYObject)
}
console.log(ex5Array)



const showArrayEx5 = () => {
    for (const element of ex5Array) {
        console.log(element)
    }
}

const showXGreaterThanY = () => {
    for (const element of ex5Array) {
        if (element.x > element.y) {
            console.log(element)
            break
        }
    }
}

const showYGreaterThan50 = () => {
    for (const element of ex5Array) {
        if (element.y > 50) {
            console.log(element.y)
            break
        }
    }
}

const showAllOddX = () => {
    let oddX
    oddX = ex5Array.filter(element => element.x % 2 === 1)
    console.log(oddX)
}

const showAllYGreaterThan50 = () => {
    let yGreat50
    yGreat50 = ex5Array.filter(element => element.y > 50)
    console.log(yGreat50)
}

const showFirstXGreaterThan50Index = () => {
    let x50Index
    x50Index = ex5Array.findIndex(element => element.x > 50)
    console.log(x50Index)
}

const showDistanceFrom0 = () => {
    for (const element of ex5Array) {
        console.log(`X Is ${element.x} CM from the 0`)
        console.log(`Y Is ${element.y} CM from the 0`)
    }
}

// let newArray = []
// const showMinimalX = () => {
//     for (const element of ex5Array) {
//         let minX
//         minX = Math.min(element.x)
//         console.log(minX)
//     }
// }