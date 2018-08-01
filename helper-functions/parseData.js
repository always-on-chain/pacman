
function parseWalls(walls) {
  var parsedWalls = [];
  walls.forEach((walls) => {
    var coordinates = walls.split(' ');
    var x = parseInt(coordinates[0]);
    var y = parseInt(coordinates[1]);
    parsedWalls.push([x, y]);
  })
  return parsedWalls;
}

function checkInitialPosAndWallsBounds(dimensions, initialPos, walls) {
  var x = initialPos[0];
  var y = initialPos[1];
  var dimensionX = dimensions[0]
  var dimensionY = dimensions[1];

  if (x >= dimensionX || x < 0 || y >= dimensionY || y < 0) {
    console.log('Initial coordinates position is out of bounds');
    return true;
  }

  for (var i = 0; i < walls.length; i++) {
    var wallX = walls[i][0];
    var wallY = walls[i][1];

    if (wallX >= dimensionX || wallX < 0 || wallY >= dimensionY || wallY < 0) {
      console.log('Wall cooridinates are out of bounds');
      return true;
    }
  }

  return false;
}

function handleAdditionalSpaces(data) {
  //error handle for edge case where there are additional spaces or if there are combined inputs in one file
  if (data.includes('')) {
    console.log('Please put inputs in seperate files or remove spaces after last line in txt file');
    return true;
  }
  return false;
}

function parseData(data) {
  var parsedData = {};
  var splitData = data.split('\n');

  parsedData.dimensions = splitData[0].split(' ')
  parsedData.initialPos = splitData[1].split(' ');
  parsedData.path = splitData[2].split(' ')[0];
  parsedData.walls = parseWalls(splitData.slice(3));

  //convert strings into numbers
  parsedData.dimensions[0] = parseInt(parsedData.dimensions[0]);
  parsedData.dimensions[1] = parseInt(parsedData.dimensions[1]);
  parsedData.initialPos[0] = parseInt(parsedData.initialPos[0]);
  parsedData.initialPos[1] = parseInt(parsedData.initialPos[1]);

  if (handleAdditionalSpaces(splitData)) {
    return false;
  }
  if (checkInitialPosAndWallsBounds(parsedData.dimensions, parsedData.initialPos, parsedData.walls)) {
    return false;
  }

  return parsedData;

}

module.exports.parseData = parseData;