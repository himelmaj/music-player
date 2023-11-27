import { useEffect, useState } from "react";
import { Howl } from "howler";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";


export default function Track({
  radio,
  selectedHowl,
  setSelectedHowl,
  setPlaying,
  playing,
  isFirstSong,
}) {
  const [howl, setHowl] = useState(null);

  useEffect(() => {
    const newHowl = new Howl({
      src: [radio.src],
      loop: false,
      autoplay: false,
      html5: true,
      volume: 0.5,
    });

    setHowl(newHowl);

    isFirstSong && setSelectedHowl(newHowl);
  }, [radio]);

  const handlePlay = () => {
    if (howl.playing()) {
      howl.pause();
      setPlaying(false);
      return;
    }

    selectedHowl.playing() && selectedHowl.pause();

    setPlaying(true);
    howl.play();
    setSelectedHowl(howl);
  };
  return (
    <div
      className={`grid grid-cols-12 mx-auto px-4 py-2 rounded-sm hover:bg-zinc-800 cursor-pointer ${
        playing && selectedHowl === howl && "bg-zinc-800"
      }`}
      onClick={handlePlay}
    >
      <div className="col-span-1 flex items-center">
        {selectedHowl === howl && playing ? (
          <BsPauseFill size="20px" />
        ) : (
          <BsPlayFill size="20px" />
        )}
        <img
          src={radio.img}
          alt="album cover"
          className="md:w-[40px] md:h-[40px] ml-2 hidden md:inline"
        />
      </div>
      <div className="col-span-5 flex flex-col items-start justify-center">
        <span className="text-white font-bold">{radio.title}</span>
      </div>

      <div className="col-span-5 flex flex-col items-start justify-center">
        <span className="text-gray-400">{radio.artist}</span>
      </div>

      <div className="col-span-1 flex flex-col items-start justify-center">
        <span className="text-gray-400">{radio.duration}</span>
      </div>
    </div>
  );
}
