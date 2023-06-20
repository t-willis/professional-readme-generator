// Required packages for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");
const prompt = inquirer.createPromptModule();

// Inquirer prompt to pull questions.js and use user input to generate markdown, then write that to a .md file
prompt(questions).then((answers) => {
    const md = generateMarkdown(answers);
    console.log(answers);
    fs.writeFileSync('READMEgen.md', md);
});
