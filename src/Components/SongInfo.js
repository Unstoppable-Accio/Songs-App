import React from "react";
import {useSelector} from "react-redux";


const SongInfo = () => {
    const selectedSongs = useSelector(state => state.selectedSong)

    console.log("song",selectedSongs)
    
    return(
        <div>
            <h1>Song Info</h1>
            {
                selectedSongs&&(
                    <div>
                        <p>{selectedSongs.name}</p>
                        <p>{selectedSongs.duration}</p>
                        <p>{selectedSongs.artist}</p>
                        <p>{selectedSongs.album}</p>
                        </div>
                )
                   
            }
        </div>
    )
}

export default SongInfo;


// {
//     (info) =>{

//     }
// }