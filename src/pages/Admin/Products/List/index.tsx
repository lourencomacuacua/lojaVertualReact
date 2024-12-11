import { Link } from 'react-router-dom';
import './styles.css';
import ProductCrudCard from '../ProductCrudCard';
import { useCallback, useEffect, useState } from 'react';
import { SpringPage } from '../../../../types/vendor/spring';
import { Product } from '../../../../types/product';
import { requestBackend } from '../../../../util/requests';
import { AxiosRequestConfig } from 'axios';
import Pagination from '../../../../components/Pagination';
import ProductFilter, {
  ProductFilterData,
} from '../../../../components/ProductFilter';
type ControlComponentsData = {
  activePage: number;
  filterData: ProductFilterData;
};
const List = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [controlComponentsDate, setControlComponentsDate] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '', category: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsDate({
      activePage: pageNumber,
      filterData: controlComponentsDate.filterData,
    });
  };

  const handleSubmitFilter = (data: ProductFilterData) => {
    setControlComponentsDate({
      activePage: 0,
      filterData: data,
    });
  };
  const getProducts = useCallback(() => {
    const confing: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: controlComponentsDate.activePage,
        size: 3,
        name: controlComponentsDate.filterData.name,
        categoryId: controlComponentsDate.filterData.category?.id,
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

        <ProductFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page?.content.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-12">
            <ProductCrudCard product={product} onDelete={getProducts} />
          </div>
        ))}
      </div>

      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default List;
