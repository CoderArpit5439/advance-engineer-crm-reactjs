import React from 'react';
import { useMemo, useState } from 'react';

const Pagination = ({ data, setShowItems, itemPerPage, showItems, currentPage, setCurrentPage, totalRow }) => {
  const [itemsFirstIndex, setItemsFirstIndex] = useState();
  const [inputPage, setInputPage] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  const maxPageNumberLimit = 3;

  const pages = useMemo(() => {
    return Array.from({ length: Math.ceil(totalRow / itemPerPage) }, (_, index) => index + 1);
  }, [data, itemPerPage]);

  useMemo(() => {
    setShowItems(data);
    setItemsFirstIndex((currentPage - 1) * itemPerPage);
  }, [currentPage, data, setShowItems, itemPerPage]);

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  }

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage);
    if (pageNumber >= 1 && pageNumber <= pages.length) {
      setCurrentPage(pageNumber);
      setInputPage('');
    }
  };

  const renderPageNumbers = () => {
    const totalPages = pages.length;

    if (totalPages <= maxPageNumberLimit) {
      return pages.map((number) => (
        <li
          key={number}
          className={number === currentPage ? 'active page-item ' : 'page-item'}
          onClick={() => setCurrentPage(number)}
          style={{ cursor: "pointer" }}
        >
          <div class="btn btn-primary btn-sm" style={{marginLeft:"2px",marginRight:"2px"}}>{number}</div>
        </li>
      ));
    }

    let renderPages = [];
    let startPage, endPage;

    if (currentPage <= Math.floor(maxPageNumberLimit / 2) + 1) {
      startPage = 1;
      endPage = maxPageNumberLimit;
    } else if (currentPage > totalPages - Math.floor(maxPageNumberLimit / 2)) {
      startPage = totalPages - maxPageNumberLimit + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(maxPageNumberLimit / 2);
      endPage = currentPage + Math.floor(maxPageNumberLimit / 2);
    }

    if (startPage > 1) {
      renderPages.push(
        <li key={1} class="btn btn-add btn-sm" onClick={() => setCurrentPage(1)}>
          <div className='page-link'>1</div>
        </li>
      );
      if (startPage > 2) {
        renderPages.push(
          <li key='left-dots' className='page-item disabled'>
            <div className='page-link'>...</div>
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      renderPages.push(
        <li
          key={i}
          className={i === currentPage ? 'active page-item ' : 'page-item'}
          onClick={() => setCurrentPage(i)}
        >
          <div className='page-link'>{i}</div>
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        renderPages.push(
          <li key='right-dots' className='page-item disabled'>
            <div className='page-link'>...</div>
          </li>
        );
      }
      renderPages.push(
        <li key={totalPages} className='page-item' onClick={() => setCurrentPage(totalPages)}>
          <div className='page-link'>{totalPages}</div>
        </li>
      );
    }

    return renderPages;
  };

  return (
    <div>
      <div className='row g-0 text-center text-sm-start align-items-center mb-3'>
        <div className='col-sm-4'>
          <p className='mb-sm-0' style={{color: "#222",fontWeight: "700"}}>
            Showing {itemsFirstIndex + 1} - {itemsFirstIndex + showItems?.length} of {totalRow}
          </p>
        </div>
        <div className='col-sm-8'>
          <ul className='pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0 ps-10' style={{display: "flex",float: "right",justifyContent: "center",margin:"0"}}>
            <li className='page-item'>
              <button
                class="btn btn-primary btn-sm " style={{marginLeft:"2px",marginRight:"2px"}}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>
            {renderPageNumbers()}
            <li className='page-item'>
              <button
               class="btn btn-primary btn-sm"
               style={{marginLeft:"2px",marginRight:"2px"}}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pages.length))}
                disabled={currentPage === pages.length}
              >
                Next
              </button>
            </li>
            <li className='page-item'>
              <div className='input-group' style={{ flexWrap: "none" }}>
                <input
                  type='number'
                  value={inputPage}
                  onChange={handleInputChange}
                  className='form-control'
                  style={{ width: '88px', marginLeft: '10px', height: "33px", padding: "5px 10px" }}
                  placeholder='Go to page'
                />
                <button className='btn btn-primary' style={{ padding: "5px 10px", height: "33px" }} type='button' onClick={handleGoToPage}>
                  Go
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
