function Pagination({

    currentPage,

    totalPages,

    onPageChange

}) {

    return (

        <div className="flex justify-center items-center gap-2 mt-8">

            <button

                disabled={currentPage === 1}

                onClick={() => onPageChange(currentPage - 1)}

                className="px-4 py-2 rounded-lg border disabled:opacity-50 hover:bg-gray-100"

            >

                Previous

            </button>

            {

                [...Array(totalPages)].map((_, index) => {

                    const page = index + 1;

                    return (

                        <button

                            key={page}

                            onClick={() => onPageChange(page)}

                            className={`px-4 py-2 rounded-lg

                                ${currentPage === page

                                    ? "bg-blue-600 text-white"

                                    : "border hover:bg-gray-100"

                                }`}

                        >

                            {page}

                        </button>

                    );

                })

            }

            <button

                disabled={currentPage === totalPages}

                onClick={() => onPageChange(currentPage + 1)}

                className="px-4 py-2 rounded-lg border disabled:opacity-50 hover:bg-gray-100"

            >

                Next

            </button>

        </div>

    );

}

export default Pagination;