import ButtonIcon from '../../components/ButtonIcon';
import Navbar from '../../components/Navbar';
import mainImage from '../../assets/images/main-image.jpg';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disnponíveis no
              mercado.
            </p>
            <ButtonIcon />
          </div>

          <div className="home-image-container">
            <img src={mainImage} alt="Imagem principal" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
