import { Dispatch } from 'redux'
import { updateGame } from '../actions/game'
import { UpdateGameType } from '../types/game'

export const attemptClick = (i:number, squares:string[], xIsNext:boolean) => async (dispatch : Dispatch<UpdateGameType>) => {
    const squaresClone = [...squares];
    if(squares[i] !== null) {
        return;
    }
    squaresClone[i] = xIsNext ? 'X' : 'O'
    let params = {
        board: squaresClone,
        player: xIsNext
    }
    dispatch(updateGame(params));
}