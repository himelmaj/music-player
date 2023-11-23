import { IoSearchSharp } from "react-icons/io5";

export function SearchBar() {
  return (
    <section className="container mx-auto p-4 mb-20">
      <div className="flex items-center space-x-4">
        <input
          className="w-full py-2 px-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-gray-700 outline-none"
          id="search"
          placeholder="Search songs, albums, artists..."
          type="search"
        />
        <button className="rounded-lg">
          <IoSearchSharp className="w-10 h-10" style={{color: "white"}}/>
        </button>
      </div>
    </section>
  );
}
