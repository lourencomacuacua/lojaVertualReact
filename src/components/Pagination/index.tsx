import ArrowIcon from '../../assets/images/arrow.svg';
import './styles.css';
const Pagination = () => {
  return (
    <div className="pagination-container">
      <img
        src={ArrowIcon}
        className="arrow-inactive arrow-previous"
        alt="Icon de voltar"
      />
      <div className="pagination-item active">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">...</div>
      <div className="pagination-item">10</div>
      <img
        src={ArrowIcon}
        className="arrow-active arrow-next"
        alt="Icon de voltar"
      />
    </div>
  );
};

export default Pagination;
