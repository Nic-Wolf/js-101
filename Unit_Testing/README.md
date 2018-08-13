# Unit Testing with Jasmine
###### Author: [Nic Wolf](https://github.com/Nic-Wolf)

## Design
We will be implementing unit tests within a basic web application. Our tests should not only be relevant to the technical architecture of the application, but also double as a form of reliable system documentation.

## Getting Started
### Quick Start Installation
* Clone the **quick-start** branch: `$ git clone https://github.com/Nic-Wolf/js-101/tree/quick-start`
* Navigate inside the Unit_Testing folder: `$ cd ~/js-101/Unit_Testing`
* Install dependencies: `$ npm install`

### Ground-Up Installation (The Hard Way)
*This process is used to simulate the steps you must take to apply unit testing to a project that was not built with unit testing initially.*
#### Setup
* Clone the **sans-test** branch a new project: `$ git clone https://github.com/Nic-Wolf/js-101/tree/sans-test`
* Navigate inside the Unit_Testing folder: `$ cd ~/js-101/Unit_Testing`
* Install Jasmine: `$ npm install --save-dev jasmine`
* Initialize Jasmine: `$ jasmine init`
##### Choices!
*We will need a way to view our tests. We can do this several ways:*
* Use only the console output: 
    * Install Jasmine globally: `$ npm install -g jasmine`
    * Execute tests according to specs: `jasmine spec/**/*spec.js`
* Use a package like Karma:
    * Install Karma to the project: `$ npm install --save-dev karma`
    * Install Karma CLI globally: `$ npm install -g karma-cli`
    * Execute tests: `$ karma start`
* Use a spec runner to view changes
    * Create an HTML file within the spec folder for test display.
    * Locate the jasmine-core libraries and stylings in the node_modules/jasmine directory
    * Apply the jasmine-core libraries and stylings to the HTML
    * Create a .spec.ts file within the spec folder
    * Add the .spec.ts file to the HTML
    * ... or just use the provided html file :)