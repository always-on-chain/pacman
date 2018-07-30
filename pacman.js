/**
 * Write a file docstring here
 * 
 * Author: Your Name
 */


/**
 * Use the function below to format your input/output arguments. Be sure not to change the order of the elements in the output array. 
 * Remember that code organization is very important to us, so we encourage the use of helper functions/separate files as you see fit.
 * Input:
 *      1. inputFile (String) = contains the name of a text file you need to read that is in the same directory, includes the ".txt" extension
 *         (ie. "input.txt")
 * Output:
 *      1. array containing the final x position of Pacman, final y position of Pacman, and total number of 
 *         coins collected in that order (ie. [finalXPos, finalYPos, coinsCollected])
 */

var fs = require('fs');
var data = require('./parseData');
var build = require('./buildBoard');
var move = require('./movePacman');
var input = './input.txt';

function pacman(inputFile) {
  var coins = 0;
  var rawData = fs.readFileSync(inputFile).toString();
  var parsedData = data.parseData(rawData);
  var board = build.buildBoard(parsedData);
  var res = move.movePacman(coins, parsedData, board);
  var finalXPos = res[0];
  var finalYPos = res[1];
  var coinsCollected = res[2];

  console.log(finalXPos,finalYPos, coinsCollected);
  return [finalXPos, finalYPos, coinsCollected];
}

pacman(input);