import inquirer from "inquirer";
import fs from "fs/promises";

await inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter a description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Please enter usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please enter contribution guidelines:',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Please enter test instructions:',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'list',
            message: 'Please choose a license for your project:',
            name: 'license',
            choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC'],
        },
    ])
    .then((response) => {
        // create the Table of Contents
        let tableOfContents = '';
        if (response.description) {
            tableOfContents += '* [Description](#description)\n';
        }
        if (response.installation) {
            tableOfContents += '* [Installation](#installation)\n';
        }
        if (response.usage) {
            tableOfContents += '* [Usage](#usage)\n';
        }
        if (response.contributing) {
            tableOfContents += '* [Contributing](#contributing)\n';
        }
        if (response.tests) {
            tableOfContents += '* [Tests](#tests)\n';
        }
        if (response.questions) {
            tableOfContents += '* [Questions](#questions)\n';
        }
        tableOfContents += '* [License](#license)\n';

        // create the badge for the chosen license
        let licenseBadge = '';
        switch (response.license) {
            case 'MIT':
                licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
                break;
            case 'GNU GPLv3':
                licenseBadge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
                break;
            case 'Apache 2.0':
                licenseBadge = '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
                break;
            case 'ISC':
                licenseBadge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
                break;
            default:
                break;
        }

        let readMeTxt =
            `
# Title

## Description

## Table of Contents

## Installation

## Usage

## License
${licenseGenerator(license)}

## Contributing

## Tests

## Questions
`

        fs.writeFile("README.md", readMeTxt)


        function licenseGenerator(license) {
            if (license === "Apache") {
                return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            } else if (license === "MIT") {
                return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            } else if (license === "Pearl") {
                return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
            } else if (license === "GNU") {
                return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
            }

        }