// Write your solution here!
var drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
} 

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
    var newDrivers = drivers.slice();
    newDrivers.push(name);
    return newDrivers;
}

function prependDriver(name){
    var newDrivers = drivers.slice();
    newDrivers.unshift(name);
    return newDrivers;
}

function removeLastDriver(){
    return drivers.slice(0, drivers.length -1);
}

function removeFirstDriver(){
    return drivers.slice(1, drivers.length);
}