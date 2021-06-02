import React from "react";

import Pagination from "components/pagination";

export default function PaginatedContainer({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
  onNextPage,
  onPrevPage,
  children,
}) {
  return (
    <>
      <Pagination
        itemsCount={itemsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
      {children}
      <Pagination
        itemsCount={itemsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />
    </>
  );
}
