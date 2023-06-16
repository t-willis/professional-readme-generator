// TODO: Include packages needed for this application\
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");
const prompt = inquirer.createPromptModule();

prompt(questions).then((answers) => {
    const md = generateMarkdown(answers);
    console.log(answers);
    fs.writeFileSync('READMEgen.md', md);
});

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
