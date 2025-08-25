import React from "react";

const Pagination = ({ page, setPage }) => {
  const maxPage = 65;
  const goBackByOne = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const goForwardByOne = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  const shownPages = [];
  //daum the reload logic
  if (page > 1) shownPages.push(page - 1);
  shownPages.push(page);
  if (page < maxPage) shownPages.push(page + 1);

  return (
    <div className="flex items-center justify-center p-2 space-x-2">
      <button
        onClick={() => setPage(1)}
        disabled={page === 1}
        className="w-12 h-12 rounded-md border-2 border-gray-300 cursor-pointer
       text-red-600/70 hover:text-red-600  flex  justify-center  font-medium text-3xl
       hover:border-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &#171;
      </button>
      {/* previous  */}
      <button
        onClick={goBackByOne}
        disabled={page === 1}
        className="w-12 h-12 rounded-md border-2 border-gray-300 cursor-pointer
       text-red-600/70 hover:text-red-600  flex  justify-center  font-medium text-3xl
       hover:border-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &#8249;
      </button>

      {/* main pages----------- */}

      {shownPages.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => setPage(pageNum)}
          className={`w-12 h-12 cursor-pointer rounded-md border-2 flex items-center justify-center text-lg font-medium ${
            pageNum === page
              ? "bg-red-500 border-red-500 text-white"
              : "border-gray-300 bg-white text-gray-700 hover:border-red-500"
          }`}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={goForwardByOne}
        disabled={page === maxPage}
        className="w-12 h-12 rounded-md border-2 border-gray-300 cursor-pointer
       text-red-600/70 hover:text-red-600  flex  justify-center  font-medium text-3xl
       hover:border-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &#8250;
      </button>
      {/* forward buttons */}
      <button
        onClick={() => setPage(maxPage)}
        disabled={page === maxPage}
        className="w-12 h-12 rounded-md border-2 border-gray-300 cursor-pointer
       text-red-600/70 hover:text-red-600  flex  justify-center  font-medium text-3xl
       hover:border-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &#187;
      </button>
    </div>
  );
};

export default Pagination;
