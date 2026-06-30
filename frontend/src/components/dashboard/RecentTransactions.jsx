function RecentTransactions({

    transactions

}) {

    return (

        <div>

            <h2>

                Recent Transactions

            </h2>

            <table
                border="1"
                cellPadding="10"
                style={{
                    width: "100%",
                    borderCollapse: "collapse"
                }}
            >

                <thead>

                    <tr>

                        <th>Date</th>

                        <th>Category</th>

                        <th>Type</th>

                        <th>Amount</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        transactions.length === 0 ?

                        (

                            <tr>

                                <td colSpan="4">

                                    No Transactions Found

                                </td>

                            </tr>

                        )

                        :

                        (

                            transactions.map(

                                (transaction) => (

                                    <tr
                                        key={transaction._id}
                                    >

                                        <td>

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

                                            {

                                                transaction.type

                                            }

                                        </td>

                                        <td>

                                            ₹

                                            {

                                                transaction.amount

                                            }

                                        </td>

                                    </tr>

                                )

                            )

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RecentTransactions;