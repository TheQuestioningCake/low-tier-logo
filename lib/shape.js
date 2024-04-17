class Shape {
    constructor() {
        this.shapeColor = ""
        this.text = ""
        this.textColor = ""
    }

    setShapeColor(color) {
        this.shapeColor = color;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    setText(text) {
        this.text = text;
    }
}

class Square extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="45" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="120" r="75" fill="${this.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="45" fill="${this.textColor}">${this.text}</text></svg>`
    }

}

class Triangle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="45" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = {
    Square,
    Circle,
    Triangle
}