// require the inquirer package
const inquirer = require('inquirer');

// require the fs package
const fs = require('fs');

// require the shape.js file
const { Square, Circle, Triangle } = require('./lib/shape.js');

// function to create the logo based on the user's answers
function createLogo(name, answers) {
    // empty string to hold the logo svg file code
    let logo = "";
    
    // creates logo based on the shape chosen by the user
    let userAnswers;
    if (answers.shape === "Square") {
        userAnswers = new Square();
        // adds the svg code to logo if square was chosen
        logo += `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="45" fill="${answers.textColor}">${answers.text}</text></svg>`;
    } else if (answers.shape === "Circle") {
        userAnswers = new Circle();
        // adds the svg code to logo if circle was chosen
        logo += `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="120" r="75" fill="${answers.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="45" fill="${answers.textColor}">${answers.text}</text></svg>`;
    } else {
        userAnswers = new Triangle();
        // adds the svg code to logo if triangle was chosen
        logo += `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/><text x="150" y="130" text-anchor="middle" font-size="45" fill="${answers.textColor}">${answers.text}</text></svg>`;
    }   

    // writes the logo  svg string to the file
    fs.writeFile(name, logo, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });

}
// function to ask the user questions for their logo
function userPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please give 3 characters for the name of the logo',
                validate: function (value) {
                    if (value.length === 3) {
                        return true;
                    } else {
                        return 'Please enter 3 characters';
                    }
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter what color you would like the text to be',
                validate: function (value) {
                    if (value.length > 0) {
                        return true;
                    } else {
                        return 'Please enter a color';
                    }
                }
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please choose a shape',
                choices: ['Square', 'Circle', 'Triangle']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter the color you would like the shape to be',
                validate: function (value) {
                    if (value.length > 0) {
                        return true;
                    } else {
                        return 'Please enter a color';
                    }
                }
            }
        ])
        .then((answers) => {
            createLogo('logo.svg', answers);
        });
}

userPrompt();
