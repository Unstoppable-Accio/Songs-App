import React from "react";
// import songData from "../data/songData";
import {selectSongs} from "../redux/actions/songsAction";
import {useDispatch, useSelector} from "react-redux";


const DisplaySongs = () => {
    const songData = useSelector((state) => state.songList);

    const dispatch = useDispatch();
   
    return(
        <div>
            <h1>List of Songs</h1>
            <div style={{width: "30%"}}>
            {
                songData.map((song, index) => (
                    <h3 onClick={()=>dispatch(selectSongs(song))}
                    key={song.id} style={{border:"1px solid green"}}>{song.name}</h3>
                ))
            }
            </div>
        </div>
    )
}

export default DisplaySongs;