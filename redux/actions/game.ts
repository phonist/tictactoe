import { UpdateGameActionType, UPDATE_GAME } from '../types/game';

export const updateGame = (board, player) : UpdateGameActionType => ({
    type: UPDATE_GAME,
    payload: {
        game: {
            board,
            player
        }
    }
});