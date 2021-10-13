// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "fileName",
    message: "What is your project's title?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Enter a description of your project.",
  },
  {
    type: "input",
    name: "usageDescription",
    message: "Describe how to use your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe how to install your project.",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Enter your contribution guidelines",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide instruction on how to test your app ",
  },
  {
    type: "list",
    message: "Choose a license",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "NONE"],
  },
  {
    type: "input",
    name: "githubUserName",
    message: "Enter github username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email for a point of contact. ",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    console.log(error);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    // console.log(data)
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
