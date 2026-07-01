import TransactionRow from "./TransactionRow";

function TransactionTable({

    transactions,
    onEdit

}) {

    if (transactions.length === 0) {

        return <p>No Transactions Found.</p>;

    }

    return (

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

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    transactions.map(

                        (transaction) => (

                            <TransactionRow

                                key={transaction._id}

                                transaction={transaction}

                                onEdit={onEdit}

                            />

                        )

                    )

                }

            </tbody>

        </table>

    );

}

export default TransactionTable;