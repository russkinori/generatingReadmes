import inquirer from "inquirer";
import fs from "fs/promises";

let { description, license, usage } = await inquirer
    .prompt([

        {
            type: 'input',
            name: 'description',
            message: "Write a description?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Ouline the usage?",
        },
        {
            type: 'list',
            name: 'license',
            message: "What license do you want?",
            choices: ['Apache', 'MIT', 'Pearl'],
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