export const UPDATE_GAME = 'UPDATE_GAME';

//typescript: interface for payload
interface Game {
    board: string[];
    player: boolean;
}

//typescript: interface for redux's state
interface GameStateType {
    board: string[];
    player: boolean;
}

//typescript: interface for redux's action
interface UpdateGameActionType {
    type: typeof UPDATE_GAME;
    payload: Game
}

export type UpdateGameType = UpdateGameActionType