import ReactPaginate from 'react-paginate';
import ArrowIcon from '../../assets/images/arrow.svg';
import './styles.css';
const Pagination = () => {
  return (
    <ReactPaginate
      pageCount={10}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      activeLinkClassName="pagination-link-active "
      disabledClassName="arrow-inactive"
      previousLabel={
        <img src={ArrowIcon} alt="Seta anterior" className="arrow-previous" />
      }
      nextLabel={
        <img src={ArrowIcon} alt="Seta próxima" className="arrow-next" />
      }
    />
  );
};

export default Pagination;
