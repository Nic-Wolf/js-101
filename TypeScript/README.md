# TypeScript Basics
###### Author: [Nic Wolf](https://github.com/Nic-Wolf)

## Design
This is to act as a simple example of using typescript with a small getter app to log out values from the web API, JSONPlaceholder. 

## Setup
* Navigate into this folder: `$ cd ~/js-101/TypeScript`
* Global install for typescript and ts-node (convenience tool): `$ npm install -g typescript ts-node`
* Initialize the project `$ npm init -y`
* Initialize TypeScript Configuration: `$ tsc --init`
* Configure execution scripts:
    ```
    "scripts": {
        "start": "node server/server",
        "build": "tsc -p . ",
        "test": "TBA"
    }