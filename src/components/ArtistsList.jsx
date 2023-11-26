import { useState } from "react";
import artists from "../mocks/artists.json";
import { ArtistsCard } from "./ArtistsCard";
import { HeaderArtists } from "./HeaderArtists";

function useFilters() {
  const [filters, setFilters] = useState({
    genre: "all",
    search: "",
  });

  const filteredArtists = (artists) => {
    return artists.filter((artist) => {
      const genreCondition =
        filters.genre === "all" ||
        artist.genre.toUpperCase() === filters.genre.toUpperCase();

      const searchCondition =
        filters.search === "" ||
        artist.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        artist.songs.some((song) =>
          song.name.toLowerCase().includes(filters.search.toLowerCase())
        );

      return genreCondition && searchCondition;
    });
  };

  return {
    filteredArtists,
    setFilters,
  };
}

export function ArtistsList() {
  const { filteredArtists, setFilters } = useFilters();

  const filteredArtistsList = filteredArtists(artists);
  return (
    <main className="mx-5 my-20">
      <HeaderArtists changeFilters={setFilters} />
      <ArtistsCard artists={filteredArtistsList} />
    </main>
  );
}
