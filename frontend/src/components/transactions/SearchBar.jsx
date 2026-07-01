import { FaSearch } from "react-icons/fa";

function SearchBar({

    value,

    onChange

}) {

    return (

        <div className="relative w-full">

            <FaSearch
                className="absolute top-4 left-4 text-gray-400"
            />

            <input

                type="text"

                placeholder="Search by category or note..."

                value={value}

                onChange={(e)=>onChange(e.target.value)}

                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"

            />

        </div>

    );

}

export default SearchBar;