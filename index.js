//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter up to 3 letters.",
  },
  {
    type: "input",
    name: "text color",
    message:
      "Please enter a color or a hexidecimal number for your text color.",
  },
  {
    type: "checkbox",
    name: "shape",
    message: "Please select a shape from the following:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shape color",
    message:
      "Please enter a color or a hexidecimal number for your shape color.",
  },
];

//write a README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

//initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Generated logo.svg");
    writeToFile("./Examples/logo.svg", generateMarkdown({ ...responses }));
  });
}

//calling app
init();
