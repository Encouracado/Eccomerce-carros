import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import  {Carousel}  from 'react-responsive-carousel';

//
// import { Container } from './styles';

const CarouselComponents: React.FC = () => {
  return (
      <Carousel showArrows={true} className="h-2" >
           <div  >
              <img src="../../../assets/errorwebpack.png"  />
              <p className="legend">Veloster Tunado</p>
          </div>
          <div  >
              <img src="../../../assets/veloster_tunado.jpg"  />
              <p className="legend">Veloster Tunado</p>
          </div>
          <div>
              <img src="../../../assets/veloster_azul.jpg" />
              <p className="legend">Veloster Azul</p>
          </div>
          <div>
              <img src="../../../assets/veloster_vermelho.jpg"  />
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src="../../../assets/veloster_branco.jpg" />
              <p className="legend">Legend 1</p>
          </div>
      </Carousel>
  );
}

export default CarouselComponents;