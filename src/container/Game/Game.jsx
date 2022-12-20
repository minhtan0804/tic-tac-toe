import { useState } from "react";
import { calcWinner } from "../../rule";
import Board from "../Board/Board";
import { WinnerGame, Wrapper, Team, TeamO, TeamX, ScoreTable } from "./gameStyle";

const Game = () => {
    const size = 10;
    const [board, setBoard] = useState(Array(size).fill(Array(size).fill(null)));
    const [activeUser, setActiveUser] = useState('X');
    const [isWinner, setIsWinner] = useState(false);
    const [xPoint, setXPoint] = useState(0);
    const [oPoint, setOPoint] = useState(0);
    console.log(`Board: `, board);

    const handleClick = (indexI, indexJ) => {
        if (board[indexI][indexJ]) return;
        if (isWinner) return;

        const _board = JSON.parse(JSON.stringify(board));
        _board[indexI][indexJ] = activeUser;
        console.log(`_board: ${_board}`);
        
        const winner = calcWinner(_board, indexI, indexJ);
        if (winner) {
            setIsWinner(winner);
        }
        
        if (!winner) {
        setActiveUser(activeUser === 'X' ? 'O' : 'X');
        }
        
        setBoard(_board);
        console.log(_board[indexI][indexJ]);
    };
    const handleResetGame = () => {
        setBoard(Array(size).fill(Array(size).fill(null)));
        setActiveUser('X')
        setIsWinner(false);
    };
    const hasWinner = () => {
        if (isWinner()) {
            return activeUser === 'X' ? setXPoint(prev => prev + 1) : setOPoint(prev => prev + 1);
        }
    }
    console.log(`X Point: ${xPoint}`);
    return (
        <Wrapper>
               <Team>
                    <TeamX>Player 1(X)</TeamX>

                    <ScoreTable onChange={hasWinner}>{xPoint} : {oPoint}</ScoreTable>

                    <TeamO>Player 2(O)</TeamO>
               </Team> 

            <Board
                cells={board}
                onClick={handleClick}
            >
            </Board>
            {isWinner && <WinnerGame >Winner is {activeUser}</WinnerGame>}
            <button onClick={handleResetGame}>Reset game?</button>
        </Wrapper>
    );
};

export default Game;