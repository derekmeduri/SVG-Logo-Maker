//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const { error } = require("console");
const { markAsUntransferable } = require("worker_threads");

//array of questions for user input
const questions = [
  {
    type: "input",
    name: "text",
    message: "Please enter up to three (3) letters for your logo text.",
    validate: (response) => {
      if (response.length > 3) {
        console.log(
          "Text must be three (3) characters or less. Please try again!"
        );
        return;
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
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
    name: "shapeColor",
    message:
      "Please enter a color or a hexidecimal number for your shape's fill/background color.",
  },
];

function generateLogo(text, textColor, shape, shapeColor) {
  var userShape;
  if (shape === "Circle") {
    userShape = new Circle(text, textColor, shapeColor);
  } else if (shape === "Triangle") {
    userShape = new Triangle(text, textColor, shapeColor);
  } else if (shape === "Square") {
    userShape = new Square(text, textColor, shapeColor);
  }
}
// function writeToFile(fileName, ) {
//   return fs.writeFileSync(fileName, data,  {
//     if (error) {
//       return console.log(error);
//     }
//     console.log("Generated logo.svg");
//   });
// }
const fileName = "logo.svg";

inquirer
  .prompt(questions)
  .then((response) => {
    console.log("Creating SVG Logo");
    console.log(response);
    fs.writeFileSync(fileName, generateLogo({ ...response }), (error) => {
      if (error) {
        console.log(error);
      }
    });
  })
  .catch((error) => {
    console.error(`Error ${error}`);
  });
