import BurmeseRecipes from "../../BurmeseRecipes.json"

export default function Home() {
    console.log(BurmeseRecipes)
    return (
        <div className="container mx-auto  bg-slate-500">
            <section className="bg-white py-8">

                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                            <a className="uppercase tracking-wide title no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                                Burmese Recipes
                            </a>

                            {/* <div className="flex items-center" id="store-nav-content">

                                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                    </svg>
                                </a>

                                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                                    </svg>
                                </a>

                            </div> */}
                        </div>
                    </nav>
                    {BurmeseRecipes.map((item,index) =>
                        <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col my-16 " key={index}>
                            <a href="#">
                                <img
                                    className="hover:grow hover:shadow-lg"
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
                    )}              
                </div>
            </section>
        </div>
    )
}