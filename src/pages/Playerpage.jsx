
import Header from "../components/Header";
import Tracks from "../components/Tracks";

import { useState } from "react";
export function Playerpage() {
  const [selectedHowl, setSelectedHowl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <Header
        playing={isPlaying}
        setPlaying={setIsPlaying}
        selectedHowl={selectedHowl}
      />
      <Tracks
        playing={isPlaying}
        setPlaying={setIsPlaying}
        selectedHowl={selectedHowl}
        setSelectedHowl={setSelectedHowl}
      />
    </>
  );
}
