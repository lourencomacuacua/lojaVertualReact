import ReactPaginate from 'react-paginate';
import ArrowIcon from '../../assets/images/arrow.svg';
import './styles.css';
type Props = {
  forcePage?: number;
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
};
const Pagination = ({ forcePage, pageCount, range, onChange }: Props) => {
  return (
    <ReactPaginate
      forcePage={forcePage}
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      activeLinkClassName="pagination-link-active "
      disabledClassName="arrow-inactive"
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
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
