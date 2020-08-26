const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const genetareMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "what is the name of your repo?",
  },
  {
    type: "input",
    name: "Github",
    message: "what is your github username?",
  },
  {
    type: "input",
    name: "Github",
    message: "what is your github username?",
  },
  {
    type: "input",
    name: "Github",
    message: "what is your github username?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", genetareMarkdown(answers));
  });
};

// function call to initialize program
init();
