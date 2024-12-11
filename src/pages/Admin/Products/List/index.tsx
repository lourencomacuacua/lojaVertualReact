import { Link } from 'react-router-dom';
import './styles.css';
import ProductCrudCard from '../ProductCrudCard';
import { useCallback, useEffect, useState } from 'react';
import { SpringPage } from '../../../../types/vendor/spring';
import { Product } from '../../../../types/product';
import { requestBackend } from '../../../../util/requests';
import { AxiosRequestConfig } from 'axios';
import Pagination from '../../../../components/Pagination';
type ControlComponentsData = {
  activePage: number;
};
const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [controlComponentsDate, setControlComponentsDate] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsDate({ activePage: pageNumber });
  };

  const getProducts = useCallback(() => {
    const confing: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: controlComponentsDate.activePage,
        size: 3,
      },
    };
    requestBackend(confing).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsDate]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-white btn-crud-add">
            ADICIONAR
          </button>
        </Link>

        <div className="base-card product-filter-container">Search bar</div>
      </div>
      <div className="row">
        {page?.content.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-12">
            <ProductCrudCard product={product} onDelete={getProducts} />
          </div>
        ))}
      </div>

      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default List;
