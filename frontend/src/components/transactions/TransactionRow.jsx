function TransactionRow({

    transaction,
    onEdit

}) {

    return (

        <tr>

            <td>

                {

                    new Date(

                        transaction.transactionDate

                    ).toLocaleDateString()

                }

            </td>

            <td>

                {transaction.category}

            </td>

            <td>

                {transaction.type}

            </td>

            <td>

                ₹{transaction.amount}

            </td>

            <td>

                <button onClick={()=> onEdit(transaction)}>

                    Edit

                </button>

                {" "}

                <button>

                    Delete

                </button>

            </td>

        </tr>

    );

}

export default TransactionRow;