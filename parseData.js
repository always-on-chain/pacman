
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

  return parsedData;
}

module.exports.parseData = parseData;