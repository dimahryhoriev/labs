/* TASK: Chessboard
    Write a program that creates a string representing an 8x8 grid, 
    in which lines are separated by newline characters. 
    At each position, there is either a space or a #. 
    The result should be a chessboard.
    
    Passing this string to console.log should show something like this:
    
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # #
    
    When you are done, make the board size variable so that 
    it can create boards of any size.
*/

let boardSize = 0;

function board(boardSize) {
    const white = '#';
    const black = ' ';
    let row = '';
    let rowCounter = 1;
    let columnCounter = 1;

    function rawDraw(even, odd) {
        if (boardSize > 1) {
            for (rowCounter; rowCounter <= boardSize; rowCounter++) {
                if (rowCounter % 2 == 0) {
                    row += even;
                } else {
                    row += odd;
                }
            }
            console.log(row);
        }
    }

    for (columnCounter; columnCounter <= boardSize; columnCounter++) {
        if (columnCounter % 2 == 0) {
            rawDraw(black, white);
        } else {
            rawDraw(white, black);
        }
    }
}

board(6)