//SVG class
class SVG {
  constructor() {
    this.shapeElement = "";
    this.textElement = "";
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement} ${this.textElement} </svg>`;
  }
  //set svg text
  setText(message, color) {
    if (message.length > 3) {
      throw new Error("Text cannot exceed three (3) characters.");
    }
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  }
  //set svg shape
  setShape(shape) {
    this.shapeElement = shape.render();
  }
}
//export to use in cli
module.exports = SVG;
