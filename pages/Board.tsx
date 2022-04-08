import React, { useState } from 'react';
import Square from './Square';
import { attemptClick } from '../redux/thunks/game';
import { useSelector, useDispatch } from 'react-redux';

function Board() {
    const dispatch = useDispatch();
    const squares = useSelector(state => state.game.board);
    const xIsNext = useSelector(state => state.game.player);

    const handleClick = (i: number) => {
        dispatch(attemptClick({ i, squares, xIsNext }));
    }

    const renderSquare = (i: number) => {
        return <Square 
        value={squares[i]} 
        onClick={() => {
            handleClick(i) } }
        />
    }
    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = 'Winner: ' + winner;
    }
    else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );

}

export default Board;

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 5, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}