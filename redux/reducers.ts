import { combineReducers } from 'redux'
import * as types from './redux/types'
import { gameReducer } from './reducers/game'

// COMBINED REDUCERS
const reducers = {
    game: gameReducer
}

export default combineReducers(reducers)
