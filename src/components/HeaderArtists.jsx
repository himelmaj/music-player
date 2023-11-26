import { Filters } from "./Filters.jsx";
export function HeaderArtists({ changeFilters }) {
  return <Filters onChange={changeFilters} />;
}
