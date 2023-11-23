import { NavLink } from "react-router-dom";
import { TiHome } from "react-icons/ti";

export function Navigation() {
  return (
    <nav className="flex flex-wrap justify-between items-center my-5 mx-4 md:mx-8 lg:mx-16 xl:mx-32 font-bold">
      <NavLink className="flex items-center" to={"/"}>
        <TiHome size={30} className="text-white" />
      </NavLink>
      <NavLink className="my-2 md:my-0" to={"/artists"}>
        <h3 className="text-white">Artists</h3>
      </NavLink>
      {/* <NavLink className="my-2 md:my-0" to={"/playlists"}>
        <h3 className="text-white">Playlists</h3>
      </NavLink> */}
    </nav>
  );
}
