// requiring the shape.js file so that we can test the functions
const { Square, Circle, Triangle } = require('./shape');
// Describing the test for the shape.js file
describe('test shape', () => {
    describe('test square', () => {
        describe('test properties', () => {
// Testing to see if class Square works correctly
            test('should return the correct properties', () => {
                const square = new Square();
                square.setShapeColor('black');
                square.setTextColor('white');
                square.setText('SQR');
                expect(square.shapeColor).toEqual('black');
                expect(square.textColor).toEqual('white');
                expect(square.text).toEqual('SQR')
            })
        })
// Testing the render method for the square class
        describe('test methods', () => {
            test('it should return the correct method', () => {
                const square = new Square();
                square.setShapeColor('black');
                square.setTextColor('white');
                square.setText('SQR');
                expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${square.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="45" fill="${square.textColor}">${square.text}</text></svg>`)
            })
        })
    })
// Testing to see if the circle class works correctly
    describe('test ciricle', () => {
        describe('test properties', () => {
            test('should return the correct properties', () => {
                const circle = new Circle();
                circle.setShapeColor('black');
                circle.setTextColor('white');
                circle.setText('CLC');
                expect(circle.shapeColor).toEqual('black');
                expect(circle.textColor).toEqual('white');
                expect(circle.text).toEqual('CLC')
            })
        })
// Testing the render method for the circle class
        describe('test methods', () => {
            test('it should return the correct method', () => {
                const circle = new Circle();
                circle.setShapeColor('black');
                circle.setTextColor('white');
                circle.setText('CLC');
                expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="120" r="75" fill="${circle.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="45" fill="${circle.textColor}">${circle.text}</text></svg>`)
            })
        })
    })
// Testing to see if the triangle class works correctly
    describe('test triangle', () => {
        describe('test properties', () => {
            test('should return the correct properties', () => {
                const triangle = new Triangle();
                triangle.setShapeColor('black');
                triangle.setTextColor('white');
                triangle.setText('TRI');
                expect(triangle.shapeColor).toEqual('black');
                expect(triangle.textColor).toEqual('white');
                expect(triangle.text).toEqual('TRI')
            })

        })
// Testing the render method for the triangle class
        describe('test methods', () => {
            test('it should return the correct method', () => {
                const triangle = new Triangle();
                triangle.setShapeColor('black');
                triangle.setTextColor('white');
                triangle.setText('TRI');
                expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="45" fill="${triangle.textColor}">${triangle.text}</text></svg>`)
            })

        })

    })
})