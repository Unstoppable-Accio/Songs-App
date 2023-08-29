import { SELECTED_SONGS } from "../actions/actionTypes";

const initialState = {}

const songsReducer = (state = initialState, action) => {
        switch (action.type) {
            case SELECTED_SONGS: return  action.payload
            default: return state
        }
}

//songsReducer(prevalue, {type: SELECTED_SONGS, payload: song}))

export default songsReducer;