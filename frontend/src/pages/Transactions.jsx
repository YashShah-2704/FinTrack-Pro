import { useEffect, useState } from "react";

import {

    getTransactions

} from "../services/transactionService";

import TransactionTable
from "../components/transactions/TransactionTable";

function Transactions() {

    const [transactions, setTransactions] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {

        loadTransactions();

    }, []);

    const loadTransactions = async () => {

        try {

            const data =
                await getTransactions();

            setTransactions(
                data.transactions
            );

        }

        catch (err) {

            setError("Unable to load transactions.");

        }

        finally {

            setLoading(false);

        }

    };

    if (loading)
        return <h2>Loading...</h2>;

    if (error)
        return <h2>{error}</h2>;

    return (

        <div
            style={{ padding: "30px" }}
        >

            <h1>

                Transactions

            </h1>

            <TransactionTable

                transactions={transactions}

            />

        </div>

    );

}

export default Transactions;