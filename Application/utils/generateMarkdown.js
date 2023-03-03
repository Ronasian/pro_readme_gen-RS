// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0 License") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'The MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "") {
    return ['[License](#license)', "<a name='license'>"];
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  } else {
    return `## License\nThis project is licensed under ${license} - see the LICENSE.md file for details`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return "# " + data.title + " • " + renderLicenseBadge(data.license) + "\n\n" +
  "## Description\n" + data.description + "\n\n" +
  "## Table of Contents\n" + '[Installation](#install)' + '\n\n' +  '[Usage](#use)' + '\n\n' + '[Credits](#creds)' + '\n\n' + '[Tests](#test)' + '\n\n' + renderLicenseLink(data.license)[0] + '\n\n' + '[Questions](#ques)\n\n' +
  "<a name='install'>\n\n" +
  "## Installation\n" + data.installation + "\n\n" +
  "<a name='use'>\n\n" +
  "## Usage\n" + data.usage + "\n\n" +
  "<a name='creds'>\n\n" +
  "## Credits\n" + data.contributing + "\n\n" +
  "<a name='test'>\n\n" +
  "## Tests\n" + data.tests + "\n\n" +
  renderLicenseLink(data.licnese)[1] + "\n\n" +
  renderLicenseSection(data.license) + "\n\n" +
  "<a name='ques'>\n\n" +
  "## Questions\n" + `Link to my GitHub: https://github.com/${data.username}`+ "\n\n" + 
  `For additional questions about this application, email me at ${data.email}`
}

module.exports = generateMarkdown;
