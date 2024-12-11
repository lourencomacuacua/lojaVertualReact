import './styles.css';
import SearchIcon from '../../assets/images/search-icon.svg';
import { Category } from '../../types/Category';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { requestBackend } from '../../util/requests';

type ProductFilterData = {
  name: string;
  category: Category;
};

const ProductFilter = () => {
  // Mova o useState para dentro do componente funcional
  const [selectCategories, setSelectCategories] = useState<Category[]>([]);
  const { register, handleSubmit, control } = useForm<ProductFilterData>();

  const onSubmit = (formData: ProductFilterData) => {
    console.log('ENVIOU', formData);
  };

  useEffect(() => {
    requestBackend({ url: '/categories' })
      .then((response) => {
        setSelectCategories(response.data.content);
      })
      .catch((error) => console.error('Erro ao buscar categorias:', error));
  }, []);

  return (
    <div className="base-card product-filter-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="product-filter-container"
      >
        <div className="product-filter-name-container">
          <input
            {...register('name')}
            type="text"
            className="form-control"
            placeholder="Nome do produto"
            name="name"
          />
          <button>
            <img src={SearchIcon} alt="Icon de pesquisa" />
          </button>
        </div>
        <div className="product-filter-bottom-container">
          <div className="product-filter-category-container">
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectCategories}
                  isClearable
                  classNamePrefix="product-crud-select"
                  getOptionLabel={(category: Category) => category.name}
                  getOptionValue={(category: Category) => String(category.id)}
                />
              )}
            />
          </div>

          <button className="btn btn-outline-secondary">LIMPAR</button>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
