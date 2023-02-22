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

        // create the README content
        let readmeContent = '';
        readmeContent += `# ${response.title}\n\n`;
        if (response.description) {
            readmeContent += `## Description\n\n${response.description}\n\n`;
        }
        readmeContent += `## Table of Contents\n\n${tableOfContents}\n\n`;
        if (response.installation) {
            readmeContent += `## Installation\n\n${response.installation}\n\n`;
        }
        if (response.usage) {
            readmeContent += `## Usage\n\n${response.usage}\n\n`;
        }
        if (response.contributing) {
            readmeContent += `## Contributing\n\n${response.contributing}\n\n`;
        }
        if (response.tests) {
            readmeContent += `## Tests\n\n${response.tests}\n\n`;
        }
        if (response.tests) {
            readmeContent += `## Questions\n\n${response.questions}\n\n`;
        }
        if (licenseBadge) {
            readmeContent += `## License\n\n${licenseBadge}\n\n`;
        }
        fs.writeFile("README.md", readmeContent)
    });
