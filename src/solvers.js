/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  
  var board = new Board({n : n});
  var piecesRemaining = n;
  var solution = [];


  function findOneSolution (board, piecesRemaining, currentColumn) {
    var boardPeek = board.rows();

    if (board.hasAnyRooksConflicts()) {
      return;
    } else if (piecesRemaining === 0) {
        var oneSolution = [];
        for (var i = 0; i < n; i++) {
          var row = board.get(i);
          var newRow = [];
          for (var k = 0; k < n; k++) {
            newRow.push(row[k]);
          }
          oneSolution.push(newRow);
        }
        solution.push(oneSolution);
    } else if (solution.length < 1) {
      var row = 0;
      var column = currentColumn;
      for (row; row < n; row++) {
        board.togglePiece(row, column);
        findOneSolution(board, piecesRemaining-1, column+1);
        board.togglePiece(row, column);
      }
    }
  }

  findOneSolution(board, n, 0);
  console.log(solution[0]);
  return solution[0];
};


window.countNRooksSolutions = function(n) {
  
  var board = new Board({n : n});
  var piecesRemaining = n;
  var solution = 0;


  function findOneSolution (board, piecesRemaining, currentColumn) {
    var boardPeek = board.rows();

    if (board.hasAnyRooksConflicts()) {
      return;
    } else if (piecesRemaining === 0) {
        solution++;
    } else {
      var row = 0;
      var column = currentColumn;
      for (row; row < n; row++) {
        board.togglePiece(row, column);
        findOneSolution(board, piecesRemaining-1, column+1);
        board.togglePiece(row, column);
      }

    }

  }

  findOneSolution(board, n, 0);
  console.log('number of solutions for ' + n + ': ' + solution);
  return solution;
};

window.findNQueensSolution = function(n) {
  if (n === 2) {
    return [[0,0],[0,0]];
  } else if (n === 3) {
    return [[0,0,0],[0,0,0],[0,0,0]];
  }

  var board = new Board({n : n});
  var piecesRemaining = n;
  var solution = [];


  function findOneSolution (board, piecesRemaining, currentColumn) {
    var boardPeek = board.rows();

    if (board.hasAnyQueensConflicts()) {
      return;
    } else if (piecesRemaining === 0) {
        var oneSolution = [];
        for (var i = 0; i < n; i++) {
          var row = board.get(i);
          var newRow = [];
          for (var k = 0; k < n; k++) {
            newRow.push(row[k]);
          }
          oneSolution.push(newRow);
        }
        solution.push(oneSolution);
    } else if (solution.length < 1) {
      var row = 0;
      var column = currentColumn;
      for (row; row < n; row++) {
        board.togglePiece(row, column);
        findOneSolution(board, piecesRemaining-1, column+1);
        board.togglePiece(row, column);
      }
    }
  }

  findOneSolution(board, n, 0);
  console.log(solution[0]);
  return solution[0];
};

window.countNQueensSolutions = function(n) {
  var board = new Board({n : n});
  var piecesRemaining = n;
  var solution = 0;


  function findOneSolution (board, piecesRemaining, currentColumn) {
    var boardPeek = board.rows();

    if (board.hasAnyQueensConflicts()) {
      return;
    } else if (piecesRemaining === 0) {
        solution++;
    } else {
      var row = 0;
      var column = currentColumn;
      for (row; row < n; row++) {
        board.togglePiece(row, column);
        findOneSolution(board, piecesRemaining-1, column+1);
        board.togglePiece(row, column);
      }

    }

  }

  findOneSolution(board, n, 0);
  return solution;
};
