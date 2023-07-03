import generateName from 'sillyname';
import superheroes from 'superheroes';

var sillyName = generateName(); 
console.log(sillyName);

var mySuperheroName = superheroes.random();
console.log(`my name is ${mySuperheroName}`);
