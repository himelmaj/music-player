import { useNavigate } from "react-router-dom";

export function ArtistsCard({ artist }) {
    const navigate = useNavigate();
  return (
    <article className="hover:cursor-pointer rounded-lg text-center justify-between items-center"
        onClick={() => navigate(`/artist/${artist.id}`)}
    >
      <h4 className="font-bold text-xl mb-5">{artist.name}</h4>
      <img src={artist.img} alt="" />
    </article>
  );
}
