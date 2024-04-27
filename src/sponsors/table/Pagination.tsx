import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const [pageNumber, setPageNumber] = useState(currentPage);
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = useMemo(() => new URLSearchParams(search), [search]);

  const handlePrevious = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      navigate(
        `/sponsors?search=${params.get("search")}&page=${pageNumber - 1}`
      );
    }
  };

  const handleNext = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      navigate(
        `/sponsors?search=${params.get("search")}&page=${pageNumber + 1}`
      );
    }
  };

  return (
    <div
      className="flex justify-between items-center gap-4"
      style={{ justifyContent: "flex-end" }}
    >
      <button
        className={`disabled:opacity-50 hover:bg-gray-200 bg-gray-100 py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          pageNumber === 1 ? "disabled" : ""
        }`}
        onClick={handlePrevious}
        disabled={pageNumber === 1}
      >
        Previous
      </button>
      <span className="text-gray-700 font-bold">
        Page {pageNumber} of {totalPages}
      </span>
      <button
        className={`disabled:opacity-50 hover:bg-gray-200 bg-gray-100 py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          pageNumber === totalPages ? "disabled" : ""
        }`}
        onClick={handleNext}
        disabled={pageNumber === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
