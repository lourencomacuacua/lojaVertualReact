import { Link } from 'react-router-dom';
import './styles.css';
const List = () => {
  return (
    <>
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>

        <div className="base-card product-filter-container">Search bar</div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-12"></div>
      </div>
    </>
  );
};
export default List;
