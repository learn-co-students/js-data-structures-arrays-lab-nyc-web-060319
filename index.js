// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
    drivers.push(driver);
}

function destructivelyPrependDriver(driver) {
    drivers.unshift(driver);

}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(driver) {
    let newArray = drivers.slice();
    newArray.push(driver);
    return newArray; 
}

function prependDriver(driver) {
    let newArray = drivers.slice();
    newArray.unshift(driver);
    return newArray;
}

function removeLastDriver() {
    let newArray = drivers.slice();
    newArray.pop();
    return newArray;
}

function removeFirstDriver() {
    let newArray = drivers.slice();
    newArray.shift();
    return newArray;
}