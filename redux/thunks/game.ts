import { Dispatch } from 'redux'
import { updateGame } from '../actions/game'
import { UpdateGameType } from '../types/game'

export const attemptClick = (params:any) => async (dispatch : Dispatch<UpdateGameType>) => {
    const squaresClone = [...params.squares];
    if(params.squares[params.i] !== null) {
        return;
    }
    squaresClone[params.i] = params.xIsNext ? 'X' : 'O'
    dispatch(updateGame(squaresClone, params.xIsNext));
}