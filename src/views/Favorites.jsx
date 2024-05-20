import { useContext } from 'react';
import { PaisajesContext } from '../context/PaisajesContext';
import IconHeart from '../components/IconHeart';

const Favorites = () => {
  const { paisajes } = useContext(PaisajesContext);

  const favoritos = paisajes.filter(paisaje => paisaje.isFavorite);

  return (
    <>
    <h1>Natural Pic</h1>
    <div className="gallery grid-columns-5 p-3">
      {favoritos.map((paisaje, i) => (
        <div
          className="photo"
          style={{ backgroundImage: `url(${paisaje.src.tiny})` }}
          key={i}
        >
          <IconHeart filled={paisaje.isFavorite} />
          <p>{paisaje.alt}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Favorites;