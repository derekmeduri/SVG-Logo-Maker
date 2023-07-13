//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const { Triangle, Circle, Square } = require("./lib/shapes");
const { error } = require("console");

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
  inquirer
    .prompt(questions)
    .then((response) => {
      const text = response.text;
      const textColor = response.textcolor;
      const shape = response.shape;
      const shapeColor = response.shapeColor;

      generateLogo(text, textColor, shape, shapeColor);
    })
    .catch((err) => console.log(err));

  function generateLogo(text, textColor, shape, shapeColor) {
    if (shape === "Triangle") {
      const Triangle = new Triangle(text, textColor, shapeColor);
      return fs.writeFile("logo.svg", Triangle.render(), (err) => {
        if (err) {
          console.info(err);
        } else {
          console.log("Generated logo.svg");
        }
      });
    }

    if (shape === "Circle") {
      const Circle = new Circle(text, textColor, shapeColor);
      return fs.writeFile("logo.svg", Circle.render(), (err) => {
        if (err) {
          console.info(err);
        } else {
          console.log("Generated logo.svg");
        }
      });
    }

    if (shape === "Square") {
      const Square = new Square(text, textColor, shapeColor);
      return fs.writeFile("logo.svg", Square.render(), (err) => {
        if (err) {
          console.info(err);
        } else {
          console.log("Generated logo.svg");
        }
      });
    }
  }
}

//calling app
init();
