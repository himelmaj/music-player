import { BsSpotify, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { Howler } from "howler";
import { useState, useEffect } from "react";

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

export default function Header({ playing, setPlaying, selectedHowl }) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleVolume = (e) => {
    Howler.volume(parseInt(e.target.value, 10) / 100);
  };

  const handlePlay = () => {
    if (!selectedHowl) return;
    if (playing) {
      selectedHowl.pause();
      setPlaying(false);
    } else {
      selectedHowl.play();
      setPlaying(true);
    }
  };

  const handleProgressChange = (e) => {
    const newPosition = parseInt(e.target.value, 10) / 100;
    setProgress(newPosition);
    selectedHowl.seek(selectedHowl.duration() * newPosition);
  };

  useEffect(() => {
    const updateProgress = () => {
      if (selectedHowl && selectedHowl.playing()) {
        setProgress(selectedHowl.seek() / selectedHowl.duration());
        setCurrentTime(selectedHowl.seek());
        setDuration(selectedHowl.duration());
      }
    };

    const progressInterval = setInterval(updateProgress, 1000);

    return () => clearInterval(progressInterval);
  }, [selectedHowl]);
  return (
    <div className="bg-black w-full p-4 flex flex-wrap items-center justify-between">
      <div className="flex items-center">
        <BsSpotify className="text-white" size="30px" />
        <h1 className="text-white ml-2 font-bold text-2xl hidden md:inline">Ñusic 🥲</h1>
      </div>
      <div className="flex flex-wrap items-center">
        <span className="text-white mx-2">{formatTime(currentTime)}</span>
        {formatTime(duration) !== "Infinity:NaN" && (
          <>
            <input
              type="range"
              max="100"
              value={progress * 100}
              onChange={handleProgressChange}
              className="appearance-none cursor-pointer w-50 md:w-80 h-2 bg-gradient-to-r from-orange-500 via-orange-500 to-gray-500 rounded-full opacity-70 transition-opacity duration-200 hover:opacity-100 mx-4 sm:mx-"
            />
            <span className="text-white mr-4">{formatTime(duration)}</span>
          </>
        )}
        <input
          type="range"
          max="100"
          defaultValue="100"
          onChange={handleVolume}
          className="appearance-none cursor-pointer w-40 h-2 bg-gradient-to-r from-green-500 via-green-500 to-gray-500 rounded-full opacity-70 transition-opacity duration-200 hover:opacity-100"
        />
        <button
          className="text-white p-2 bg-green-500 rounded-full ml-4"
          onClick={handlePlay}
        >
          {playing ? <BsPauseFill size="25px" /> : <BsPlayFill size="25px" />}
        </button>
      </div>
    </div>
  );
}
