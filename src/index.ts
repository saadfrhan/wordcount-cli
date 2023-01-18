import inquirer from 'inquirer';
import inquirerPrompt from 'inquirer-autocomplete-prompt';
import { countWords } from './word_count.js';
import chalkAnimation from "chalk-animation";

inquirer.registerPrompt('autocomplete', inquirerPrompt);

const sleep = (ms: number = 2000) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const rainbowTitle = chalkAnimation.rainbow('Welcome to the ATM!');
  await sleep();
  rainbowTitle.stop();
  await inquirer.prompt([{
    type: 'autocomplete',
    message: 'Please enter text:',
    name: 'text',
    source: countWords,
    searchText: 'Counting...'
  }]);
  console.log('Thanks for using this Word Counter CLI.')
})();