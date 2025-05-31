const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_heros = [...marvel_heros, ...dc_heros] //concatenate
console.log(all_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(2) // flat upto specified depth
console.log(real_array);

// console.log(Array.isArray("Yash"))
// console.log(Array.from("Yash")) //convert into array
console.log(Array.from({name:"yash"}));  //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

// study isarray,from,of





