import { FaEdit, FaTrash } from "react-icons/fa";

function TransactionRow({

    transaction,

    onEdit,

    onDelete

}) {

    return (

        <tr className="border-b hover:bg-slate-50 transition">

            <td className="py-4">

                {new Date(
                    transaction.transactionDate
                ).toLocaleDateString()}

            </td>

            <td>

                {transaction.category}

            </td>

            <td>

                <span

                    className={`px-3 py-1 rounded-full text-white text-sm

                    ${transaction.type==="income"

                    ?

                    "bg-green-500"

                    :

                    "bg-red-500"

                    }`}

                >

                    {transaction.type}

                </span>

            </td>

            <td className="font-semibold">

                ₹{transaction.amount}

            </td>

            <td>

                <button

                    onClick={() => onEdit(transaction)}

                    className="text-blue-600 hover:text-blue-800 mr-4"

                >

                    <FaEdit />

                </button>

                <button

                    onClick={() => onDelete(transaction)}

                    className="text-red-600 hover:text-red-800"

                >

                    <FaTrash />

                </button>

            </td>

        </tr>

    );

}

export default TransactionRow;