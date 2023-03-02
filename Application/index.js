// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const prompts = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.log(err) : console.log('Success!')
    );
}
// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "Enter the project's title",
    },
    {
      type: 'input',
      name: 'description',
      message: "Enter the project's description",
    },
    {
      type: 'input',
      name: 'installation',
      message: "Enter the project's installation instructions",
    },
    {
      type: 'input',
      name: 'usage',
      message: "Enter the project's usage information",
    },
    {
      type: 'input',
      name: 'contributing',
      message: "Enter the project's contribution guidelines",
    },
    {
      type: 'input',
      name: 'tests',
      message: "Enter the project's test instructions",
    },
    {
      type: 'list',
      message: "Choose a license for your application",
      name: 'license',
      choices: ['option1', 'option2', 'option3', 'option4'],
    },
    {
      type: 'input',
      name: 'username',
      message: "Enter your Github username",
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter your email address",
    },
  ])
  .then((data) => {
    writeToFile('README.md', data);
  });
}

// Function call to initialize app
init();
