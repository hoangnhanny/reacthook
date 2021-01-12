import React, { Fragment } from "react";
import PropTypes from "prop-types";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onChangePage: PropTypes.func,
};
Pagination.defaultProps = {
  onChangePage: null,
};

function Pagination(props) {
  const { onChangePage, pagination } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPage = Math.ceil(_totalRows / _limit);
  function handleChangePage(newPage) {
    onChangePage(newPage);
  }
  return (
    <Fragment>
      <button disabled={_page <= 1} onClick={() => handleChangePage(_page - 1)}>
        Prev
      </button>
      <button onClick={() => handleChangePage(1)}>1</button>
      <button onClick={() => handleChangePage(2)}>2</button>
      <button
        disabled={_page >= totalPage}
        onClick={() => handleChangePage(_page + 1)}
      >
        Next
      </button>
    </Fragment>
  );
}

export default Pagination;
