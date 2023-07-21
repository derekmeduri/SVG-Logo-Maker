//required libraries
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const SVG = require("./svg");

class CLI {
  run() {
    return inquirer
      .prompt([
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
          name: "shapeType",
          message: "Please select a shape from the following:",
          choices: ["Circle", "Triangle", "Square"],
        },
        {
          type: "input",
          name: "shapeColor",
          message:
            "Please enter a color or a hexidecimal number for your shape's fill/background color.",
        },
      ])
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        //switch statement to determine shapetype
        //tutoring with TA sam cordova
        switch (shapeType) {
          case "Triangle":
            shape = new Triangle();
            //exits switch statement
            break;
          case "Square":
            shape = new Square();
            break;
          //need a default
          default:
            shape = new Circle();
            break;
        }
        //setting shape color
        shape.setColor(shapeColor);
        //using SVG class to create new svg
        const svg = new SVG();
        //setting text, textcolor and shape from selections above
        svg.setText(text, textColor);
        svg.setShape(shape);
        console.log(svg);
        //write svg to file
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error! Please try again.");
      });
  }
}

module.exports = CLI;
