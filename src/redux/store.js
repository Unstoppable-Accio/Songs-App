import { createStore, combineReducers } from "redux";
import songsReducer from "./reducer/songsReducer";
import songListReducer from "./reducer/SongListReducer";

const rootReducer = combineReducers({
    selectedSong: songsReducer,
    songList: songListReducer
})


const store = createStore(rootReducer);

export default store;


// dispatch(selectSongs(song))  
// dispatch(
//  {type: SELECTED_SONGS, payload: song})

//  currentSelectedSongs= songsReducer(prevalue, {type: SELECTED_SONGS, payload: song})) 