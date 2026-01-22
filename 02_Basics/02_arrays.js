const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);                        // change in original array

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros);     // creates new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);
