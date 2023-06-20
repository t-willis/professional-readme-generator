// Object to pull corresponding .svg file and link for license badges
const liscList = {
  Apache: ["Apache_2.0-blue.svg", "https://opensource.org/licenses/Apache-2.0"],
  Boost: ["Boost_1.0-lightblue.svg", "https://www.boost.org/LICENSE_1_0.txt"],
  GNU: ["GPLv3-blue.svg", "https://www.gnu.org/licenses/gpl-3.0"],
  MIT: ["MIT-yellow.svg", "https://opensource.org/licenses/MIT"],
  Mozilla: ["MPL_2.0-brightgreen.svg", "https://opensource.org/licenses/MPL-2.0"],
  WTFPL: ["WTFPL-brightgreen.svg", "http://www.wtfpl.net/about/"],
};

// Function to return license badge or empty string
function renderLicenseBadge(license) {
  return license !== "none" ? `[![License](https://img.shields.io/badge/License-${liscList[license][0]})](${liscList[license][1]})` : "";
}

// Function to return license link or empty string
function renderLicenseLink(license) {
  return license !== "none" ? `[${license}](${liscList[license][1]})` : "";
}

// function to print license section of README or empty string
function renderLicenseSection(license) {
  return license !== "none"
    ? `## License
    
This application is available under the ${renderLicenseLink(license)} license. Please see license documentation for more information.
    
---`
    : "";
}

// Function to generate md for README
function generateMarkdown(data) {
  return `# ${data.projTitle}

  ${renderLicenseBadge(data.projLisc)}

  ## Description

  ${data.projDesc}

  
  ---
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ---
  
  ## Installation
  ${data.projInst}
  
  
  ---
  
  ## Usage
  ${data.projUsage}
  
  ---
  
  ## Contribution
  ${data.projContr}
  
  ---
  
  ## Tests
  ${data.projTests}
  
  ---
  
  ## Questions
  GitHub: ${data.projGitH}

  Email: ${data.projEmail}
  
  ---

  ${renderLicenseSection(data.projLisc)}

`;
}

module.exports = generateMarkdown;
