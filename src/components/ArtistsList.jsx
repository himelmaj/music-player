import artists from "../mocks/artists.json";
import { ArtistsCard } from "./ArtistsCard";
import { SearchBar } from "./SearchBar";
export function ArtistsList() {
  return (
    <main className="mx-5 my-20">
      <SearchBar/>
      <section className="md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-3 grid">
        {artists.map((artist) => (
          <ArtistsCard key={artist.id} artist={artist} />
        ))}
      </section>
    </main>
  );
}
