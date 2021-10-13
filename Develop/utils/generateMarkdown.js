// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-success.svg)";
  } else if (license === "APACHE 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "APACHE 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `[License: MIT](${renderLicenseLink(license)})`;
  } else if (license === "APACHE 2.0") {
    return `[License: APACHE 2.0](${renderLicenseLink(license)})`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.fileName}

  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.projectDescription}

## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contribution Guidelines](#contribution-guidelines)\n
  [Tests](#tests)\n
  [License](#license)\n
  [Questions](#questions)\n

## Installation
  ${data.installation}

## Usage
${data.usageDescription}

## Contribution Guidelines
  ${data.contributionGuidelines}

## Tests
  ${data.tests}

## License
  ${renderLicenseSection(data.license)}
## Questions
  If you have any questions regarding my project you can contact me at my email: ${
    data.email
  } or visit my github at https://github.com/${data.githubUserName}
`;
}

module.exports = generateMarkdown;
