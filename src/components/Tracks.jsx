import TableHeader from "./TableHeader";
import Track from "./Track";
import songs from "../mocks/songs.json";

export default function Tracks({
  playing,
  setPlaying,
  selectedHowl,
  setSelectedHowl,
}) {
  return (
    <div className="w-full mx-auto px-4py-2">
      <TableHeader />
      {songs.map((song, index) => {
        return (
          <Track
            key={index}
            song={song}
            selectedHowl={selectedHowl}
            setSelectedHowl={setSelectedHowl}
            setPlaying={setPlaying}
            playing={playing}
            isFirstSong={index === 0}
          />
        );
      })}
    </div>
  );
}
