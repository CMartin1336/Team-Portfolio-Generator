const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = (answers) =>
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Portfolio Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
</head>

<body style="background-color: #8bb193;">
    <nav class="navbar navbar-dark" style="background-color: #4a4a4a;">
        <div class="container-fluid">
            <p class="navbar-brand mx-auto" href="#">
                <img src="./assets/images/logo.png" alt="" width="85" height="28" class="d-inline-block align-text-top">
                Team Portfolio
            </p>
        </div>
    </nav>
    <div class="row row-cols-1 row-cols-md-3 g-4 p-2 justify-content-center">
        <div class="col">
          <div class="card text-white" style="background-color: #4a4a4a;">
            <div class="card-body">
              <h5 class="card-title">${answers.name}</h5>
              <p class="card-text">${answers.role}</p>
              <p>${answers.id}</p>
              <p>${answers.email}</p>
              <p>${answers.office}</p>
              <p>${answers.github}</p>
              <p>${answers.school}</p>
            </div>
          </div>
        </div>
        <!-- append full div here from class col  -->
      </div>
</body>
<footer class="text-center text-white" style="background-color: #4a4a4a;">
    <p>Designed Using Bootstrap by Christian Martin</p>
</footer>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the projects name?',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHtml(answers);
    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html for the Team Portfolio!')
    );
  });