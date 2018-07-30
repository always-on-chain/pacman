

function movePacman(coins, data, board) {
  var res = [];
  var path = data.path;
  var yLength = data.dimensions[1] - 1;
  var x = data.initialPos[0];
  var y = data.initialPos[1];

  for (var i = 0; i < path.length; i++) {
    if (path[i] === 'N' && board[y - 1][x] !== 1 && y - 1 >= 0) {
      y--;
    } else if (path[i] === 'S' && board[y + 1][x] !== 1 && y + 1 < board.length) {
      y++;
    } else if (path[i] === 'E' && board[y][x + 1] !== 1 && x + 1 < board[0].length) {
      x++;
    } else if (path[i] === 'W' && board[y][x - 1] !== 1 && x - 1 >= 0) {
      x--;
    }

    if (board[y][x] === 0) {
      coins++;
      board[y][x] = 'X'
    }
  }

  res.push(x, yLength, coins);
  return res;
}

module.exports.movePacman = movePacman;