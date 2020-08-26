// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.Github}
  
`;
}

module.exports = generateMarkdown;
