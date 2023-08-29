import { SELECTED_SONGS } from "./actionTypes";


export const selectSongs = (songs) => {
    return {
        type: SELECTED_SONGS,
        payload: songs
    }
}