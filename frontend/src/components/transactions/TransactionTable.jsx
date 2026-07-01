import TransactionRow from "./TransactionRow";

function TransactionTable({

    transactions,
    onEdit,
    onDelete

}) {

    if (transactions.length === 0) {

        return <p>No Transactions Found.</p>;

    }

    return (

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <table className="min-w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="text-left px-6 py-4">

                            Date

                        </th>

                        <th className="text-left px-6 py-4">

                            Category

                        </th>

                        <th className="text-left px-6 py-4">

                            Type

                        </th>

                        <th className="text-left px-6 py-4">

                            Amount

                        </th>

                        <th className="text-left px-6 py-4">

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        transactions.map((transaction)=>(

                            <TransactionRow

                                key={transaction._id}

                                transaction={transaction}

                                onEdit={onEdit}

                                onDelete={onDelete}

                            />

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default TransactionTable;