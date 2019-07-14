// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
    drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift(name);
}



function appendDriver(name) {
    let r_val = drivers.slice();  // just r_val = drivers changes drivers too!
    r_val.push(name);
    console.log("Drivers! ", drivers);
    console.log("R-val!! ", r_val);
    return r_val;
}

function prependDriver(name) {
    let r_val = drivers.slice();
    r_val.unshift(name);
    console.log(r_val)
    return r_val;

}

function removeLastDriver() {
    let r_val = drivers.slice();
    r_val.pop();
    console.log(r_val)
    return r_val;
}

function removeFirstDriver() {
    let r_val = drivers.slice();
    r_val.shift();
    console.log(r_val)
    return r_val;
}