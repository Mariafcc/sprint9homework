// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Github}
  # ${data.email}
  # ${data.url}
  # ${data.title}
  # ${data.description}
  # ${data.license}
  # ${data.intstall}
  # ${data.test}
  # ${data.questions}
  # ${data.contributing}
  
  
`;
}

module.exports = generateMarkdown;
