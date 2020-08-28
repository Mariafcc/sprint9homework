const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const genetareMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Github",
    message: "what is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "what is your email?",
  },
  {
    type: "input",
    name: "url",
    message: "what is the URL to your project?",
  },
  {
    type: "input",
    name: "title",
    message: "what is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "please write a short description of your project",
  },
  {
    type: `list: [ "mit", new inquirer.Separator(), "gpl", new inquirer.Separator(), "	isc" ]`,
    name: "license",
    message: "what kind of license should your project have?",
  },
  {
    type: "input",
    name: "install",
    message: "what command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "test",
    message: "what comman should ve run to run tests?",
  },
  {
    type: "input",
    name: "questions",
    message: "what does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "what does the user need to know about contributing to the repo?",
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
