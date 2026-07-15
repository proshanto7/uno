"use client";

import { getPaginationRange } from "@/utils/pagination";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 2,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-1.5 text-xs sm:gap-3 sm:text-sm">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(Math.max(1, currentPage - 1))
        }
        className="cursor-pointer whitespace-nowrap text-secondary-text hover:text-primary-text disabled:cursor-not-allowed disabled:opacity-40"
      >
        &lt;{" "}
        <span className="hidden text-primary-text md:inline">
          PREV
        </span>
      </button>

      {getPaginationRange(
        currentPage,
        totalPages,
        siblingCount,
      ).map((page, idx) =>
        page === "dots" ? (
          <span
            key={`dots-${idx}`}
            className="w-5 select-none text-center text-secondary-text sm:w-8"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`h-7 w-7 shrink-0 cursor-pointer rounded-full sm:h-8 sm:w-8 ${
              page === currentPage
                ? "bg-primary-text text-white"
                : "text-secondary-text hover:text-primary-text"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(Math.min(totalPages, currentPage + 1))
        }
        className="cursor-pointer whitespace-nowrap text-secondary-text hover:text-primary-text disabled:cursor-not-allowed disabled:opacity-40"
      >
        <span className="hidden text-primary-text md:inline">
          NEXT
        </span>{" "}
        &gt;
      </button>
    </div>
  );
};

export default Pagination;