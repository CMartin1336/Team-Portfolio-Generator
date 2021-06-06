const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];

function startApp() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What role are you filling out?",
        choices: ["Manager", "Engineer", "Intern", "No other members"]
      },
      {
        type: "input",
        name: "id",
        message: "What is their ID number?"
      },
      {
        type: "input",
        name: "email",
        message: "What is their email?"
      },
    ])
    .then(val => {
      if (val.role === "Manager") {
        console.log("You are adding a manager")
      };
      if (val.role === "Engineer") {
        console.log("You are adding a engineer")
      };
      if (val.role === "Intern") {
        console.log("You are adding a intern")
      };
      if (val.role === "No other members") {
        console.log("You are finished")
      };
    });
};

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
};

module.exports = Employee;
