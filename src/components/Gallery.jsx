import { PaisajesContext } from '../context/PaisajesContext';
import { useContext } from 'react';
import IconHeart from './IconHeart';

const Gallery = () => {
  const { paisajes, setPaisajes } = useContext(PaisajesContext);

  const agregarFavorito = (id) => {
    const paisajesActualizados = paisajes.map(paisaje => {
      if (paisaje.id === id) {
        return {
          ...paisaje, isFavorite: !paisaje.isFavorite
        };
      }
      return paisaje;
    });

    setPaisajes(paisajesActualizados);
  };

  const paisajesValidos = paisajes.filter(paisaje => paisaje && paisaje.src && paisaje.src.tiny);

  return (
    <div className="gallery grid-columns-5 p-3">
      {paisajesValidos.map((paisaje, i) => (
        <div
          onClick={() => agregarFavorito(paisaje.id)}
          className="photo"
          style={{ backgroundImage: `url(${paisaje.src.tiny})` }}
          key={i}
        >
          <IconHeart filled={paisaje.isFavorite} />
          <p>{paisaje.alt}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
