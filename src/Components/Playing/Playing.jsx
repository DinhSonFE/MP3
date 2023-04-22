import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { context } from "../../App";
import "./Playing.css";
const Playing = ({ urlSong }) => {
  const { setPlayingSong, setIdSong } = useContext(context);
  // ! handle song playing
  const handlePlaySong = () => {
    setPlayingSong(true);
  };
  const handlePauseSong = () => {
    setPlayingSong(false);
  };
  // ! handle next and previous song
  const handleClickNext = () => {
    setIdSong((id) => id + 1);
  };
  const handleClickPrevious = () => {
    setIdSong((id) => id - 1);
  };
  return (
    <div>
      <AudioPlayer
        src={urlSong?.url}
        onPlay={handlePlaySong}
        onPause={handlePauseSong}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
};

export default Playing;
