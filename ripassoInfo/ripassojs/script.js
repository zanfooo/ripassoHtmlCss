let variabile = "ciao";

console.log(variabile.replace("BUONGIORNO").concat(" oggi è una bella giornata").toUpperCase());  //stiamo concatenando (chaininig) dei metodi
//console.log(variabile + "oggi è una bella giornata");

/*let mycolours = ["bianco", "rosso", "nero", "verde", "oro"];

mycolours.forEach(element, index => {
    console.log(element.toUpperCase().concat(" "+index));
});
*/

const mycolours = ["bianco", "rosso", "nero", "verde", "oro"];
mycolours.forEach((e,i) => 
{
    console.log("colore: "+ e.toUpperCase()+ " indice: "+ i);
})

// funzioni di callback inline
const numeri = [1.5, 3.88, 2, 1.30, 1.20, 2.15];

const numeri2 = numeri.filter(numeri => numeri>=2);

numeri2.forEach((e, i) =>
{
    console.log("numero: " + i + " = " + numeri2[i]);
})

/*const numeri3 = [1, 2, 3, 4];
const numeri4 = numeri3.map(Math.sqrt);
console.log(numeri4);
*/

const numeri3 = [1, 2, 3, 4];
console.log(numeri3.map(numeri => numeri*numeri));

const array = [5, 10, 15, 20, 25, 30];
console.log(array.reduce((accumulatore, num)=> accumulatore + num, 0)); //riduce l array in un numero
console.log(array.reduce((accumulatore, num)=> accumulatore + num, -5));
console.log(array.reduce((accumulatore, num)=> accumulatore * num, -5));