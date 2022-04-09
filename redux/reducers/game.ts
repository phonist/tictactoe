import { UPDATE_GAME, GameStateType, UpdateGameType } from "../types/game";

const initialState: GameStateType = {
    board: new Array(9).fill(null),
    player: true
}

export const gameReducer = (
    state = initialState, 
    action: UpdateGameType
): GameStateType => {
    switch (action.type) {
        case UPDATE_GAME:
            return {
                ...state,
                board: action.payload.board,
                player: action.payload.player ? false : true
            }
        default:
            return state;
    }
}