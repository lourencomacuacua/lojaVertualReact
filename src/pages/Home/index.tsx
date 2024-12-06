import ButtonIcon from '../../components/ButtonIcon';
import Navbar from '../../components/Navbar';
import mainImage from '../../assets/images/main-image.jpg';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disnponíveis no
              mercado.
            </p>
          </div>
          <Link to="/products">
            <ButtonIcon />
          </Link>
        </div>

        <div className="home-image-container">
          <img src={mainImage} alt="Imagem principal" />
        </div>
      </div>
    </div>
  );
};

export default Home;
