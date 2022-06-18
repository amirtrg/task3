import React from "react";

function PaginationButton(props) {
  return (
    <button
      className="px-2 rounded bg-blue-200 disabled:bg-gray-100"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
function Pagination({pageNumber, totalAmount, setPageNumber}) {
  function nextPageHandler() {
    setPageNumber((perv) => perv + 1);
  }
  function pervPageHandler() {
    setPageNumber((perv) => perv - 1);
  }

  return (
    <div className="flex items-center justify-center space-x-4">
      <PaginationButton
        children="perv"
        onClick={pervPageHandler}
        disabled={pageNumber === 1}
      />
      <div>{pageNumber}</div>
      <PaginationButton
        children="next"
        onClick={nextPageHandler}
        disabled={pageNumber === totalAmount}
      />
    </div>
  );
}

export default Pagination;
