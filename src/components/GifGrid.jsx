import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import { MensajeCargando } from './MensajeCargando';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  let mensaje;

  if (isLoading) {
    mensaje = <MensajeCargando />;
  } //Condicional para mostrar el mensaje de cartgando mientras este cargando

  return (
    <>
      <h3>{category}</h3>

      {mensaje}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
