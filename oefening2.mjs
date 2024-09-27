import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let minGetal = 6;
let maxGetal = 20;

let getal = parseFloat(await userInput.question('Geef een getal in: '));

if (getal > minGetal && getal < maxGetal) {
  console.log(getal + ' ligt tussen ' + minGetal + ' en ' + maxGetal + ' .');
} else {
  console.log(getal + ' ligt niet tussen ' + minGetal + ' en ' + maxGetal);
}

process.exit();
