import React, { useState } from 'react';
import BurmeseRecipes from "../../BurmeseRecipes.json";

const itemsPerPage = 8; 

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = BurmeseRecipes.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(BurmeseRecipes.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container mx-auto bg-slate-500">
            <section className="bg-white py-8">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                            <a className="uppercase tracking-wide title no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                                Burmese Recipes
                            </a>
                            <div className="flex justify-center">
                                <button
                                    className={`mx-2 py-2 px-4 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-800' : 'bg-gray-800 text-white'}`}
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                >
                                    &lt; 
                                </button>

                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index}
                                        className={`mx-2 py-2 px-4 rounded ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'}`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}

                                <button
                                    className={`mx-2 py-2 d-flex  px-4 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-800' : 'bg-gray-800 text-white'}`}
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                >
                                     &gt;
                                </button>
                            </div>
                        </div>
                    </nav>

                    <div className="container mx-auto flex items-center flex-wrap pb-12">
                        {currentItems.map((item, index) => (
                            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col my-16" key={index}>
                                <a href="#">
                                    <img
                                        className="hover:grow hover:shadow-xl rounded-lg"
                                        src={`img/${item.Name}.jpg`}
                                        onError={(e) => {
                                            e.target.src = 'img/default.png';
                                        }}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="pt-3 flex items-center justify-between">
                                        <p className="">{item.Name}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
