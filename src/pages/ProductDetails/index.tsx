import ProductImage from '../../assets/images/product.jpg';
import ArrowIcon from '../../assets/images/arrow.svg';
import ProductPrice from '../../components/ProductPrice';
import './styles.css';
const ProductDetails = () => {
  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <div className="goback-container">
          <img src={ArrowIcon} alt="Icon de voltar" />
          <h2>Voltar</h2>
        </div>

        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img src={ProductImage} alt="Imagem de produto" />
            </div>

            <div className="name-price-container">
              <h1>Nome do produto</h1>
              <ProductPrice price={2345.67} />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                eveniet exercitationem consequuntur eius est dolor similique
                excepturi recusandae doloribus, consequatur reiciendis
                repudiandae veniam error nam! Dolor commodi aperiam quo eius!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
