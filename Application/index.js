// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.log(err) : console.log('README.md File Generated!')
    );
}
// Function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: "What is the title of your project?",
    },
    {
      type: 'input',
      name: 'description',
      message: "What is the purpose of this project; what problem does it solve?",
    },
    {
      type: 'input',
      name: 'installation',
      message: "What are the steps to installing your project?",
    },
    {
      type: 'input',
      name: 'usage',
      message: "How is your application used?",
    },
    {
      type: 'input',
      name: 'contributing',
      message: "Who contributed to this project?",
    },
    {
      type: 'input',
      name: 'tests',
      message: "How can users test this application?",
    },
    {
      type: 'list',
      message: "Which license will you use for this project?",
      name: 'license',
      choices: ['Apache 2.0 License', 'GNU GPL v3', 'The MIT License'],
    },
    {
      type: 'input',
      name: 'username',
      message: "What is your GitHub username?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your email address?",
    },
  ])
  .then((data) => {
    // call to function that takes data and formats it for the markdown file named 'README'
    writeToFile('README.md', data);
  });
}

// Function call to initialize app
init();
