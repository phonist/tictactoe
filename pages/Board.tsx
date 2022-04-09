import React, { useState } from 'react';
import Square from './Square';
import { attemptClick } from '../redux/thunks/game';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../redux/store';
import { Box, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

function Board() {
    const dispatch = useDispatch();
    const squares = useSelector((state:AppState) => state.game.board);
    const xIsNext = useSelector((state:AppState) => state.game.player);

    const handleClick = (i: number) => {
        dispatch(attemptClick(i, squares, xIsNext));
    }

    const renderSquare = (i: number) => {
        return <Square 
        value={squares[i]} 
        onClick={() => {
            handleClick(i) } }
        />
    }
    const winner = calculateWinner(squares as string[]);
    let status;
    if(winner){
        status = 'Winner: ' + winner;
    }
    else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
        <Grid container spacing={0} direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={12}>
                <Typography variant='h6' align='center'>{status}</Typography>
            </Grid>
            <Grid item xs={4}>
                {renderSquare(0)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(1)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(2)}
            </Grid>

            <Grid item xs={4}>
                {renderSquare(3)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(4)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(5)}
            </Grid>

            <Grid item xs={4}>
                {renderSquare(6)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(7)}
            </Grid>
            <Grid item xs={4}>
                {renderSquare(8)}
            </Grid>
        </Grid>
    );

}

export default Board;

function calculateWinner(squares:string[]) {
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