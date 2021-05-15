// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

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

// function appendDriver(name) {
//   const drivers2 = drivers.slice()
//   drivers2.push(name)
//   return drivers2
// }
function appendDriver(name) {
  return [...drivers,name]
}

// function prependDriver(name) {
//   const drivers2 = drivers.slice()
//   drivers2.unshift(name)
//   return drivers2
// }
function prependDriver(name) {
  return [name,...drivers]
}

function removeLastDriver() {
  return drivers.slice(0,drivers.length - 1)
}

function removeFirstDriver() {
  return drivers.slice(1)
}