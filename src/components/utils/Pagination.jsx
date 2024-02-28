import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import ReactPaginate from 'react-paginate';
// import styles from './PaginatedItems.module.css'

// These are the example items, to simulate the fetching from other resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item.employeeName}</h3>
          </div>
        ))}
    </>
  );
}
export default function PaginatedItems({ itemsPerPage, items  }) {
  // Item offsets are used here, although page offsets are also an option.
  const [itemOffset, setItemOffset] = useState(0);

  // Try retrieving things from other sources.
  // (This may be items loaded in a local state from an API endpoint with useEffect and useState, or items from props.)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

    // The below function will be called when the user clicks to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        // Adding CSS styling to the pagination component by using the props provided by the react-paginate library
        // containerClassName={styles. pagination}
        // pageLinkClassName={styles.pageNum}
        // previousLinkClassName={styles.pageNum}
        // nextLinkClassName={styles.pageNum}
        // activeLinkClassName={styles. active}

      />
    </>
  );
}


// // PaginatedItems.js
// import React, { useEffect, useState } from 'react';

// function PaginatedItems({ itemsPerPage, items }) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = items.slice(startIndex, endIndex);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   useEffect(() => {
//     // You can perform any side-effects related to pagination here
//   }, [currentPage]);

//   return (
//     <>
//       {/* Render your paginated items here using the currentItems */}
//       {currentItems.map((item) => (
//         // Render your employee data here
//         <div key={item.id}>
//           {/* Employee data */}
//         </div>
//       ))}

//       {/* Pagination controls */}
//       <div>
//         <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
//         <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
//       </div>
//     </>
//   );
// }

// export default PaginatedItems;
