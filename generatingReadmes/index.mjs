import inquirer from "inquirer";
import fs from "fs/promises";

let { description, license, usage } = await inquirer
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
            name: 'license',
            message: "What license do you want?",
            choices: ['Apache 2.0', 'MIT', 'Pearl', 'GNU GPLv3',],
            filter(val) {
                return val.toLowerCase();
            },
        },
    ]);

let readMeTxt =
    `
# Test

## License
${licenseGenerator(license)}
`

fs.writeFile("README.md", readMeTxt)


function licenseGenerator(license) {
    if (license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else {
        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
    }

}