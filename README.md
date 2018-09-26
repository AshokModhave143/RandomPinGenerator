# Random PIN codes generator

This libray is generating random PIN codes (short sequence of numbers) that often used as a passcode for bank cards.

# Features!

  - Library exports the function which on call returns batch of 1000 random unique PIN codes
  - Each PIN is unique
  - PIN is of 4-digit long
  - Two consecutive digits of each PIN are not same
  - Three consecutive digits are not incremental


### Tech

Random PIN generator uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [mocha] - testing library
* [babel-register] - To support ES6 compiler features

### Installation

Random PIN Generator requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and run the function.

```sh
$ cd RandomPinGenrator
$ npm install -d
$ npm run start
```
Run the test cases
```sh
$ npm run test
```

