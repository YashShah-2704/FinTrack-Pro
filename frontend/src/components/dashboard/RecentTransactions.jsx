function RecentTransactions({ transactions }) {

    return (

        <div>

            <h2 className="text-2xl font-bold mb-6">

                Recent Transactions

            </h2>

            {

                transactions.length === 0 ?

                (

                    <p className="text-gray-500">

                        No Transactions Found

                    </p>

                )

                :

                (

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead>

                                <tr className="border-b">

                                    <th className="text-left py-3">

                                        Date

                                    </th>

                                    <th className="text-left py-3">

                                        Category

                                    </th>

                                    <th className="text-left py-3">

                                        Type

                                    </th>

                                    <th className="text-left py-3">

                                        Amount

                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    transactions.map((transaction)=>(

                                        <tr

                                            key={transaction._id}

                                            className="border-b hover:bg-gray-50"

                                        >

                                            <td className="py-4">

                                                {

                                                    new Date(

                                                        transaction.transactionDate

                                                    ).toLocaleDateString()

                                                }

                                            </td>

                                            <td>

                                                {

                                                    transaction.category

                                                }

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

                                                    {

                                                        transaction.type

                                                    }

                                                </span>

                                            </td>

                                            <td className="font-semibold">

                                                ₹{transaction.amount}

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>

                )

            }

        </div>

    );

}

export default RecentTransactions;