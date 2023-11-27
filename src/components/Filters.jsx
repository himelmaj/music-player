import { SearchBar } from "./SearchBar";
import { useId } from "react";

export function Filters({ onChange }) {
  const genreId = useId();

  const handleChangeGenre = (event) => {
    onChange((prevState) => ({
      ...prevState,
      genre: event.target.value,
    }));
  };

  const handleChangeSearch = (value) => {
    onChange((prevState) => ({
      ...prevState,
      search: value,
    }));
  };

  
  return (
    <section className="container flex flex-wrap justify-between mx-auto p-4 mb-20">
      <div className="flex items-center justify-center">
        <select
          id={genreId}
          className="text-md py-2 px-4 bg-transparent border-0 border-b-2 border-gray-200
           appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none
            focus:ring-0 focus:border-gray-200 peer"
          onChange={handleChangeGenre}
        >
          <option value="all">All</option>
          <option value="reggaeton">Reggaeton</option>
          <option value="electronic music">Electronic Music</option>
          <option value="rap">Rap</option>
          <option value="rock">Rock</option>
        </select>
      </div>
      <SearchBar onChange={handleChangeSearch} />
    </section>
  );
}
