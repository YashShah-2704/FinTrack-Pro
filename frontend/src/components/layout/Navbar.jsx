import { FaBell } from "react-icons/fa";

function Navbar() {

    return (

        <header className="bg-white shadow-md px-8 py-5 flex justify-between items-center">

            <h2 className="text-2xl font-semibold">

                Welcome Back 👋

            </h2>

            <div className="flex items-center gap-5">

                <FaBell className="text-xl text-gray-500 cursor-pointer"/>

                <img

                    src="https://ui-avatars.com/api/?name=Yash"

                    className="rounded-full"

                    alt="profile"

                />

            </div>

        </header>

    );

}

export default Navbar;