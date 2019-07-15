// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push("Ralph");
}

function destructivelyPrependDriver(name){
    drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(name){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift();
}

function appendDriver(name){
   let newArray = [...drivers, name];
   return newArray;
}

function prependDriver(name){
    let newArray = [name, ...drivers];
    return newArray;
}

function removeLastDriver(){
    let newArray = drivers.slice(0, drivers.length-1);
    return newArray;
}

function removeFirstDriver(){
    let newArray = drivers.slice(1);
    return newArray;
}