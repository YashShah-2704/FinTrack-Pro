import {
    FaChartPie,
    FaMoneyBillWave,
    FaUser,
    FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

function Sidebar() {

    return (

        <aside className="w-64 bg-slate-900 text-white min-h-screen shadow-lg">

            <div className="p-6 border-b border-slate-700">

                <h1 className="text-3xl font-bold text-blue-400">

                    FinTrack Pro

                </h1>

            </div>

            <nav className="mt-8 flex flex-col">

                <NavLink

                    to="/dashboard"

                    className={({ isActive }) =>

                        `flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition

                        ${isActive ? "bg-blue-600" : ""}`

                    }

                >

                    <FaChartPie />

                    Dashboard

                </NavLink>

                <NavLink

                    to="/transactions"

                    className={({ isActive }) =>

                        `flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition

                        ${isActive ? "bg-blue-600" : ""}`

                    }

                >

                    <FaMoneyBillWave />

                    Transactions

                </NavLink>

                <NavLink

                    to="/profile"

                    className={({ isActive }) =>

                        `flex items-center gap-3 px-6 py-4 hover:bg-slate-800 transition

                        ${isActive ? "bg-blue-600" : ""}`

                    }

                >

                    <FaUser />

                    Profile

                </NavLink>

            </nav>

            <div className="absolute bottom-10 left-6">

                <button

                    className="flex items-center gap-2 text-red-400 hover:text-red-300"

                >

                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </aside>

    );

}

export default Sidebar;