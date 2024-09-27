import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let maand = await userInput.question('Geef een maand in: ');

switch (maand) {
  case 'januari':
    console.log('Januari heeft 31 dagen. ');
    break;
  case 'februari':
    console.log('Februari heeft 28 of 29 dagen. ');
    break;
  case 'maart':
    console.log('Maart heeft 31 dagen. ');
    break;
  case 'april':
    console.log('April heeft 30 dagen. ');
    break;
  case 'mei':
    console.log('Mei heeft 31 dagen. ');
    break;
  case 'juni':
    console.log('Juni heeft 30 dagen. ');
    break;
  case 'juli':
    console.log('Juli heeft 31 dagen. ');
    break;
  case 'augustus':
    console.log('Augustus heeft 31 dagen. ');
    break;
  case 'september':
    console.log('September heeft 30 dagen. ');
    break;
  case 'oktober':
    console.log('Oktober heeft 31 dagen. ');
    break;
  case 'november':
    console.log('November heeft 30 dagen. ');
    break;
  case 'december':
    console.log('December heeft 31 dagen. ');
    break;
  default:
}
process.exit();