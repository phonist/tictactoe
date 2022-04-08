import { UPDATE_GAME } from '../types/game';

export const updateGame = (board, player) => ({
    type: UPDATE_GAME,
    payload: {
        board,
        player
    }
});