import { useParams } from "react-router-dom";
import { ContactWithArtist } from "../components/ContactWithArtist";
import { Navigation } from "../components/Navigation";

import artists from "../mocks/artists.json";

export function Artistpage() {
  const params = useParams();
  const artist = artists[params.id - 1];
  return (<>
        <Navigation />

      <main className="mt-20 flex flex-col">
      <h2 className="text-7xl md:text-9xl font-bold z-10">{artist.name}</h2>
      <section className="grid md:grid-cols-2 mr-10 z-0">
        <img src={artist.img} alt="" className="" />
        <div className="flex flex-col ml-5 mt-5">
          <h4 className="font-bold text-3xl mb-4 text-red-200">
            Information about the artist
          </h4>
          <p>{artist.description}</p>
          <div className="flex flex-wrap mt-4">
            <h5 className="text-2xl font-bold mr-10 mb-2">Songs</h5>
            {artist.songs.map((song) => (
              <a
                key={song.name}
                className="text-2xl font-bold mr-10 mb-2 text-orange-200"
                href={song.link}
              >
                {song.name}
              </a>
            ))}
          </div>
          <ContactWithArtist />
        </div>
      </section>
    </main>
  </>

  );
}
