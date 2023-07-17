//packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

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

//initialize app
inquirer
  .prompt(questions)
  .then((response) => {
    const text = response.text;
    const textColor = response.textcolor;
    const shape = response.shape;
    const shapeColor = response.shapeColor;
    console.log(shape);
    generateLogo(text, textColor, shape, shapeColor);
  })
  .catch((err) => console.log(err));

function generateLogo(text, textColor, shape, shapeColor) {
  if (shape === "Triangle") {
    const triangle = new Triangle(text, textColor, shapeColor);
    console.log(triangle);
    return fs.writeFile("logo.svg", Triangle.render(), (err) => {
      if (err) {
        console.info(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  }

  if (shape === "Circle") {
    const circle = new Circle(text, textColor, shapeColor);
    console.log(circle);
    return fs.writeFile("logo.svg", Circle.render(), (err) => {
      if (err) {
        console.info(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  }

  if (shape === "Square") {
    const square = new Square(text, textColor, shapeColor);
    console.log(square);
    return fs.writeFile("logo.svg", Square.render(), (err) => {
      if (err) {
        console.info(err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  }
}
