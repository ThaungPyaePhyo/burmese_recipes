import React, { useState } from 'react';
import BurmeseRecipes from "../../BurmeseRecipes.json";
import { Link, useNavigate } from 'react-router-dom';

const itemsPerPage = 8;

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

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
    
    const clickHandler = (guid) => {
        navigate(`/detail/${guid}`)
    }

    return (
        <div className="container mx-auto flex items-center flex-wrap  py-8">

            <nav id="store" className="w-full z-30 top-0 px-6 py-1 pb-0">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2">
                    <a className="uppercase tracking-wide title no-underline hover:no-underline font-semibold text-gray-800 text-2xl" href="#">
                        Burmese Recipes
                    </a>
                    
                </div>
            </nav>

            <div className="container mx-auto flex flex-wrap pb-8">
                {currentItems.map((item, index) => (
                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col lg:my-3" key={index}>
                        <Link to={`/detail/${item.Guid}`} className="bg-slate-200 rounded-lg overflow-hidden group transition-transform transform hover:scale-105">
                           <img
                                className="object-cover object-center w-full h-48 transition-transform transform group-hover:scale-110"
                                src={`img/${item.Name}.jpg`}
                                onError={(e) => {
                                    e.target.src = 'img/default.png';
                                }}
                                alt={item.Name}
                            />
                            <div className="py-4 px-2 flex items-center justify-between">
                                <p className="font-semibold text-md title">{item.Name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='container mx-auto flex justify-start'>
                <div className="flex flex-wrap gap-y-5 px-4">
                    <button
                        className={`mx-2 py-2 px-4 rounded-full ${currentPage === 1 ? 'bg-gray-300 text-gray-800' : 'bg-gray-800 text-white'}`}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`mx-2 py-2 px-4 rounded-full ${currentPage === index + 1 ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-800'}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        className={`mx-2 py-2 d-flex  px-4 rounded-full ${currentPage === totalPages ? 'bg-gray-300 text-gray-800' : 'bg-gray-800 text-white'}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}
