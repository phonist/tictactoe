import { Game } from './interface/game'

export const UPDATE_GAME = 'UPDATE_GAME';

//typescript: interface for redux's state
interface GameStateTypeAction {
    board: string[];
    player: boolean;
}

export type GameStateType = GameStateTypeAction

//typescript: interface for redux's action
interface UpdateGameActionType {
    type: typeof UPDATE_GAME;
    payload: Game
}

export type UpdateGameType = UpdateGameActionType