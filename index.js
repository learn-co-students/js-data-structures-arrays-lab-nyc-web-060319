let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name)
}

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

function appendDriver(name) {
  let newArray = drivers.slice()
  newArray.push(name)
  return newArray
}

function  prependDriver(name) {
  let newArray = drivers.slice()
  newArray.unshift(name)
  return newArray
}

function removeLastDriver() {
  let newArray = drivers.slice()
  newArray.pop(name)
  return newArray
}

function removeFirstDriver() {
  return drivers.slice(1)
}
