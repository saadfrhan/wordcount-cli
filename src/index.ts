#!/usr/bin/env node

import inquirer from 'inquirer';
import inquirerPrompt from 'inquirer-autocomplete-prompt';
import { countWords } from './word_count.js';
import chalkAnimation from "chalk-animation";

inquirer.registerPrompt('autocomplete', inquirerPrompt);

const sleep = (ms: number = 2000) => new Promise(resolve => setTimeout(resolve, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow('Welcome!');
  await sleep();
  rainbowTitle.stop();
}

async function main() {
  await inquirer.prompt([{
    type: 'autocomplete',
    message: 'Please enter text:',
    name: 'text',
    source: countWords,
    searchText: 'Counting...'
  }]);
  console.log('Thanks for using this Word Counter CLI.')
}

await welcome();
await main();
