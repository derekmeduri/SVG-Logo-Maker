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
    message: "Please enter up to three (3) letters for your logo text.",
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
      "Please enter a color or a hexidecimal number for your shape's fill/background color.",
  },
];

//initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const text = response.text;
    const textColor = response.textcolor;
    const shape = response.shape;
    const shapeColor = response.shapeColor;
  });
}

//calling app
init();
