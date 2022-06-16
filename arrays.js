/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];

backpack.push(`lightsaber`, `robe`, `food`);

//console.log(backpack);

let belt = backpack.shift();

backpack.splice(1, 0, 'coat');

let satchel = [];

satchel.unshift(`flint` , `blanket` , `toothbrush`);

backpack.push(satchel.slice(0,satchel.length));

console.log(belt);
console.log(backpack);
console.log(satchel);
