// function badgeChange(license) {
//   return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`;
// }

function badgeChange(license) {
  const mit = `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  const isc = `[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  const mozilla = `[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

  if (license === "MIT") {
    return mit;
  } else if (license === "ISC") {
    return isc;
  } else {
    return mozilla;
  }
}

// function licenseDisplay(license) {
//   return `https://opensource.org/licenses/${license}`;
// }

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Github
   ${data.Github}

  ## Email
   ${data.email}

  ## URL
  ${data.url}

  ## Title
  ${data.title}

  ## Description
  ${data.description}

  ## License
  ${data.license} <br />
  ${badgeChange(data.license)} 
  

  ## Install
  ${data.intstall}

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}

  ## Contributing
  ${data.contributing}
  
  
`;
}
// ${licenseDisplay(data.license)}
module.exports = generateMarkdown;
