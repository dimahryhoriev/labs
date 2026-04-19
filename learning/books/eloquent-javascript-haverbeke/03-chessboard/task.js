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

    if (boardSize > 1) {
        for (let counter = 1; counter <= boardSize; counter++) {
            if (counter % 2 == 0) {
                console.log(black);
            } else {
                console.log(white);
            }
        }
    }
}

board(3)