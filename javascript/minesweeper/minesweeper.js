export const annotate = (board) => {
  let zeroBoard = getZeroBoard(board);
  let mines = getMines(zeroBoard);
  let coords = getAllCoords(zeroBoard, mines);
  let updatedBoard = updateBoard(zeroBoard, coords);
  let result = updatedBoard.map((el) => el.join("").replace(/0/g, ' '));
  return result;
};

/** Returns copy of the board with all spaces replaced by 0 */
const getZeroBoard = function(board) {
  let zeroBoard = [];
  for (let line of board) {
    let row = line.split('');
    row = row.map((char) => {
      if (char === ' ') {
        return 0;
      } else {
        return char;
      }
    });
    zeroBoard.push(row);
  }
  return zeroBoard;
};

/** Returns array of objects containing coordinates of all mines on the board */
const getMines = function(board) {
  let mines = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === '*') {
        mines.push({ y: row, x: col });
      }
    }
  }
  return mines;
};

/** Returns array of coordinates of all adjacent fields for all mines */
const getAllCoords = function(board, mines) {
  let coords = [];
  mines.forEach((mine) => coords.push(...getCoordsOfMine(board, mine)));
  return coords;
}

/** Returns array of coordinates of all adjacent fields for a mine */
const getCoordsOfMine = function(board, mine) {
  let coordsToUpdate = [];
  let allXs = [-1, 0, 1].map((el) => el + mine.x);
  let allYs = [-1, 0, 1].map((el) => el + mine.y);
  allXs = allXs.filter((el) => el >= 0 && el < board[0].length);
  allYs = allYs.filter((el) => el >= 0 && el < board.length);
  allYs.forEach((y) => {
    allXs.forEach((x) => {
      coordsToUpdate.push({ y: y, x: x });
    });
  });
  return coordsToUpdate;
};

/** Returns board with incremented fields surrounding mines */
const updateBoard = function(board, coords) {
  coords.forEach((coord) => {
    if (board[coord.y][coord.x] !== '*') {
      board[coord.y][coord.x] += 1;
    }
  });
  return board;
};