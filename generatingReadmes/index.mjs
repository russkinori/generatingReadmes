import inquirer from "inquirer";
import fs from "fs/promises";

// License badges
const licenseBadge = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    'GPLv3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'Pearl': 'https://img.shields.io/badge/License-Perl-0298c3.svg',
    'BSD 3': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
};

// Prompt for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
]).then(response => {
    // Generate README content
    const readmeContent = `
# ${response.title}

![License](${licenseBadge[response.license]})

## Description

${response.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${response.installation}

## Usage

${response.usage}

## Contributing

${response.contributing}

## Tests

${response.tests}

## License

This project is licensed under the ${response.license} license. See the [LICENSE](LICENSE) file for details.

## Questions

If you have any questions or suggestions, please feel free to contact me at ${response.email}. You can also follow me on GitHub at [${response.github}](https://github.com/${response.github}).
  `;

    // Write README file
    fs.writeFile('README.md', readmeContent, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file generated successfully!');
        }
    });
}).catch(error => {
    console.error(error);
});
