import { useEffect, useState } from "react";

import {

    getTransactions,
    addTransaction,
    updateTransaction

} from "../services/transactionService";

import TransactionTable from "../components/transactions/TransactionTable";

import TransactionModal from "../components/transactions/TransactionModal";

import DeleteModal from "../components/transactions/DeleteModal";
import { deleteTransaction } from "../services/transactionService";

function Transactions() {

    const [showModal, setShowModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedTransaction, setSelectedTransaction] = useState(null);

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

    const handleAddTransaction = async (formData) => {

        try {

            await addTransaction(formData);

            setShowModal(false);

            await loadTransactions();

        }

        catch (err) {

            console.error(err);

        }

    };

    const handleUpdateTransaction = async (formData) => {

        try {

            await updateTransaction(

                selectedTransaction._id,

                formData

            );

            setSelectedTransaction(null);

            setShowModal(false);

            await loadTransactions();

        }

        catch (err) {

            console.error(err);

        }

    };

    const handleDeleteTransaction = async () => {

        try {

            await deleteTransaction(selectedTransaction._id);

            setShowDeleteModal(false);

            setSelectedTransaction(null);

            await loadTransactions();

        }

        catch (err) {

            console.error(err);

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
            <button onClick={() => setShowModal(true)}>

                + Add Transaction

            </button>

            <br /><br />

            <TransactionTable

                transactions={transactions}

                onEdit={(transaction)=>{

                    setSelectedTransaction(transaction);

                    setShowModal(true);

                }}

                onDelete={(transaction) => {

                    setSelectedTransaction(transaction);

                    setShowDeleteModal(true);

                }}

            />

            <TransactionModal

                open={showModal}

                onClose={() =>{ 
                    setShowModal(false);
                    setSelectedTransaction(null);
                }}

                initialData={selectedTransaction || {}}

                onSubmit={

                    selectedTransaction

                    ?

                    handleUpdateTransaction

                    :

                    handleAddTransaction

                }

            />

        </div>

    );

}


export default Transactions;