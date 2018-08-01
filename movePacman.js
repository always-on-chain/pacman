

function movePacman(coins, data, board) {
  var res = [];
  var path = data.path;
  var yLength = data.dimensions[1] - 1;
  var x = data.initialPos[0];
  var y = yLength - data.initialPos[1];

  board[y][x]= 'X';
  console.log(board)

  for (var i = 0; i < path.length; i++) {
    if (path[i] === 'N' && y - 1 >= 0  && board[y - 1][x] !== 1) {
      y--;
    } else if (path[i] === 'S' && y + 1 < board.length && board[y + 1][x] !== 1) {
      y++;
    } else if (path[i] === 'E' &&  x + 1 < board[0].length && board[y][x + 1] !== 1) {
      x++;
    } else if (path[i] === 'W' && x - 1 >= 0 && board[y][x - 1] !== 1) {
      x--;
    }

    if (board[y][x] === 0) {
      coins++;
      board[y][x] = 'X'
    }
  }

  res.push(x, yLength - y, coins);
  return res;
}

module.exports.movePacman = movePacman;