import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../types/product';
import './styles.css';
import { SpringPage } from '../../types/vendor/spring';
import axios from 'axios';
import { AxiosParams } from '../../types/vendor/axios';
import { BASE_URL } from '../../util/requests';
const Catalog = () => {
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };
    axios(params).then((response) => {
      setPage(response.data);
      console.log(page);
    });
  }, []);
  return (
    <div className="container my-4 catalog-container">
      <div className="row catalogo-title-container">
        <h1>Catálogo de produtos</h1>
      </div>

      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
