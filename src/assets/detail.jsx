import { useNavigate, useParams } from "react-router-dom";
import BurmeseRecipes from "../../BurmeseRecipes.json";
import UserTypes from "../../UserTypes.json";
import { Link } from 'react-router-dom';

export default function Detail() {
    const navigate = useNavigate();
    const { guid } = useParams();
    const data = BurmeseRecipes.find(item => item.Guid === guid);
    const userType = UserTypes.find(userType => userType.UserCode === data.UserType)

    if (!data) {
        return <div>Data not found</div>;
    }

    return (
        <div className="container mx-auto flex items-center flex-wrap py-8">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1 pb-0">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2">
                    <a className="uppercase tracking-wide title no-underline hover:no-underline font-semibold text-gray-800 text-2xl" href="#">
                        Burmese Recipes
                    </a>

                </div>
            </nav>
            <div className="container mx-auto flex flex-wrap my-16">
                <div className="w-full lg:w-1/2 flex justify-center p-6 overflow-hidden group transition-transform transform hover:scale-105">
                    <img
                        className="object-cover object-center w-full xl:w-1/2 rounded-xl transition-transform transform group-hover:scale-104 hover:shadow-lg"
                        src={`/img/${data.Name}.jpg`}
                        onError={(e) => {
                            e.target.src = '/img/default.png';
                        }}
                        alt={data.Name}
                    />
                </div>
                <div className="w-full lg:w-1/2 gap-y-6 flex flex-col px-4">
                    <div>
                        <h1 className="title text-3xl p-2">for</h1>
                        <span className="text-gray-600 text-xl font-semibold">{userType.UserMMType} or {userType.UserEngType}</span>
                    </div>
                    <div>
                        <h1 className="title text-2xl pb-2">Menu Name</h1>
                        <span className="text-gray-600 text-xl">{data.Name}</span>
                    </div>
                    <div>
                        <h1 className="title text-2xl pb-2">Ingredients</h1>
                        <span className="text-gray-600">{data.Ingredients}</span>
                    </div>
                    <div>
                        <h1 className="title text-2xl pb-2">How to cook?</h1>
                        <span className="text-gray-600">{data.CookingInstructions}</span>
                    </div>

                </div>
            </div>
            <div className="container mx-auto flex justify-end px-4">
                <Link to="/" className="rounded-lg px-4 py-2 bg-gray-800 text-white">
                    Back
                </Link>
            </div>
        </div>
    );
}
