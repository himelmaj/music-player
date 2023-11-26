import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function ArtistsCard({ artists }) {
  const navigate = useNavigate();

  return (
    <section>
      <motion.ul
        className="md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-3 grid"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {artists.map((artist, index) => (
          <motion.li
            key={index}
            onClick={() => navigate(`/artist/${artist.id}`)}
            className="hover:cursor-pointer rounded-lg text-center justify-between items-center"
            variants={item}
          >
            <h3 className="font-bold text-xl my-5">{artist.name}</h3>
            <img src={artist.img} alt={artist.name} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
