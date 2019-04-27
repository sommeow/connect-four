
/*------ constants ------*/
const COLORS = {
  '1': 'hotpink',
  '-1': 'yellow',
  '0': 'white'
};

/*------ app's state (variables) ------*/
var board, winner, turn; 

/*------ cached element references ------*/
const msgEl = document.getElementById('msg');

/*------ event listener ------*/
document.getElementById('col-markers')
  .addEventListener('click', handleClick);

/*------ functions ------*/

init();

function handleClick(evt) {
    const marker = evt.target;
    const colIdx = parseInt(marker.id.replace('col', ''));
    if (isNaN(colIdx)) return;
    const rowIdx = board[colIdx].indexOf(0);
    if (rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    winner = getWinner();
    turn *= -1;
    render();
}

function getWinner() {
    let winner = null;
    for (let colIdx = 0; colIdx < board.length; colIdx++) {
        winner = checkCol(colIdx);
        if (winner) break;
    }
    return winner;
}

function checkCol(colIdx) {
    return null; 
}

function render() {
// display the board
board.forEach(function(colArr, colIdx) {
    // update col markers
    const marker = document.getElementById(`col${colIdx}`);
    marker.style.borderTopColor = colArr.includes(0) ? 'grey' : 'honeydew';
  colArr.forEach(function(cell, rowIdx) {
    // Access the correct div in the section
    const div = document.getElementById(`c${colIdx}r${rowIdx}`);
    div.style.backgroundColor = COLORS[cell];
  });
});



//display message
if (winner) {
    if (winner === 'T') {
      msgEl.textContent = "It's a Tie!";
    } else {

    }
  } else {
    msgEl.textContent = `${COLORS[turn].toUpperCase()}'s Turn`;
  }
}


function init() {
    board = [
        [0, 0, 0, 0 ,0 , 0], // column 1
        [0, 0, 0, 0 ,0 , 0], // column 2
        [0, 0, 0, 0 ,0 , 0], // column 3
        [0, 0, 0, 0 ,0 , 0], // column 4
        [0, 0, 0, 0 ,0 , 0], // column 5
        [0, 0, 0, 0 ,0 , 0], // column 6
        [0, 0, 0, 0 ,0 , 0], // column 7
    ];
    winner = null;
    turn = 1;
    render();
}
