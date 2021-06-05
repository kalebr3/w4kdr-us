import React from "react";
import range from "utils/range";

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNextPage,
  onPrevPage,
}) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const LEFT_PAGE = "LEFT";
  const RIGHT_PAGE = "RIGHT";

  const fetchPageNumbers = () => {
    const pageNeighbours = 2;
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (pageCount > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(pageCount - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = pageCount - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages, pageCount];
    }
    return range(1, pageCount);
  };

  const pages = fetchPageNumbers() || [];

  if (!itemsCount || pageCount === 1) return null;

  return (
    <div className="flex flex-row justify-center p-4 text-center bg-gray-300">
      {pages.map((page, index) => {
        if (page === LEFT_PAGE)
          return (
            <button
              className="py-1 px-2 mx-1 bg-gray-200 text-lg rounded-lg w-14"
              onClick={() => onPrevPage()}
            >
              &larr;
            </button>
          );
        if (page === RIGHT_PAGE)
          return (
            <button
              className="py-1 px-2 mx-1 bg-gray-200 text-lg rounded-lg w-14"
              onClick={() => onNextPage()}
            >
              &rarr;
            </button>
          );
        return (
          <button
            className={`py-1 px-2 mx-1 text-lg rounded-lg w-14 ${
              currentPage === page ? "bg-gray-50" : "bg-gray-200"
            }`}
            key={index}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
