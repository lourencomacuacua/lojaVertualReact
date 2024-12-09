import ButtonIcon from '../../components/ButtonIcon';
import Navbar from '../../components/Navbar';
import mainImage from '../../assets/images/main-image.jpg';
import './styles.css';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../util/requests';

const Home = () => {
  return (
    <div className="home-container">
      <h1>{isAuthenticated() ? 'Autenticado' : 'Não autenticado'}</h1>
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disnponíveis no
              mercado.
            </p>
          </div>
          <div>
            <Link to="/products">
              <ButtonIcon text="Inicie agora a sua busca" />
            </Link>
          </div>
        </div>

        <div className="home-image-container">
          <img src={mainImage} alt="Imagem principal" />
        </div>
      </div>
    </div>
  );
};

export default Home;
