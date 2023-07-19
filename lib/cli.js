const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

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
        switch (shapeType) {
          case "circle":
            shape = new Circle();
            break;
        }
      });
  }
}
