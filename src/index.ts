#!/usr/bin/env node

import inquirer from 'inquirer';
import inquirerPrompt from 'inquirer-autocomplete-prompt';
import { countWords } from './word_count.js';

inquirer.registerPrompt('autocomplete', inquirerPrompt);

(async () => {
  await inquirer.prompt([{
    type: 'autocomplete',
    message: 'Please enter text:',
    name: 'text',
    source: countWords,
    searchText: 'Counting...',
  }]);
  console.log('Thanks for using this Word Counter CLI.')
})();
