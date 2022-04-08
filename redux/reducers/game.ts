import { UPDATE_GAME } from "../types/game";

const initialState = {
    board: new Array(9).fill(null),
    player: true
}

export const gameReducer = (state = initialState, action) => {
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