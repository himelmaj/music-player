import { IoSearchSharp } from "react-icons/io5";

export function SearchBar({ onChange }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        className="w-full py-2 px-4 border-0 border-b-2 focus:border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-400 outline-none bg-transparent"
        id="search"
        placeholder="Search songs, albums, artists..."
        type="search"
        onChange={handleInputChange}
      />
      <IoSearchSharp className="w-6 h-6" />
    </div>
  );
}
