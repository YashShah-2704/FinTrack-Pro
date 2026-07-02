import {
    FaWallet,
    FaArrowTrendUp,
    FaArrowTrendDown,
    FaReceipt
} from "react-icons/fa6";

function SummaryCard({

    title,

    value

}) {

    const config = {

        "Total Balance": {

            icon: <FaWallet size={24} />,

            bg: "bg-blue-100",

            color: "text-blue-600"

        },

        "Income": {

            icon: <FaArrowTrendUp size={24} />,

            bg: "bg-green-100",

            color: "text-green-600"

        },

        "Expenses": {

            icon: <FaArrowTrendDown size={24} />,

            bg: "bg-red-100",

            color: "text-red-600"

        },

        "Transactions": {

            icon: <FaReceipt size={24} />,

            bg: "bg-purple-100",

            color: "text-purple-600"

        }

    };

    const item = config[title];

    return (

        <div

            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"

        >

            <div className="flex justify-between items-start">

                <div>

                    <p className="text-gray-500 text-sm">

                        {title}

                    </p>

                    <h2

                        className={`text-3xl font-bold mt-3 ${item.color}`}

                    >

                        {value}

                    </h2>

                </div>

                <div

                    className={`${item.bg} ${item.color} p-4 rounded-full`}

                >

                    {item.icon}

                </div>

            </div>

        </div>

    );

}

export default SummaryCard;