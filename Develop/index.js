// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "fileName",
    message: "What is your project's titile?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Enter a description of your project.",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "",
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
    message: "TBD",
  },
  {
    type: "input",
    name: "tests",
    message: "TBD",
  },
  {
    type: "list",
    message: "Choose a license",
    name: "license",
    choices: ["MIT", "GNU GPLv3"],
  },
  {
    type: "input",
    name: "githubUserName",
    message: "Enter ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email for a point of contact. ",
  },

];

// TODO: Create a function to write README file
function writeToFile({fileName, projectDescription, usageDescription,installation,contributionGuidelines, tests, license, githubUserName, email, data}) {
  const READMEFile = 
 `# ${fileName}

  ## Description
    ${projectDescription}
  ## Table of Contents
    Usage
    Installation
    Contribution Guidelines
    Tests
    License
    Questions
  ## Usage
  ${usageDescription}
  ## Installation
    ${installation}
  ## Contribution Guidelines
    ${contributionGuidelines}
  ## Tests
    ${tests}
  
  ## License
    ${license}
  ## Questions
    https://github.com/${githubUserName}
    If you have anuy questions regarding my project you can contact me at ${email}
    
  `;
  // fs.writeFile("README.md', generateREADME)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
