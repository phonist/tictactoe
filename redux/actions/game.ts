import { Game } from '../types/interface/game';
import { UpdateGameType, UPDATE_GAME } from '../types/game';

export const updateGame = (game: Game) : UpdateGameType => ({
    type: UPDATE_GAME,
    payload: game
});