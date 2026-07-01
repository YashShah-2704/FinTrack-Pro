import { useEffect, useState } from "react";

import {

    getTransactions,
    addTransaction,
    updateTransaction

} from "../services/transactionService";

import TransactionTable from "../components/transactions/TransactionTable";

import TransactionModal from "../components/transactions/TransactionModal";

import DeleteModal from "../components/transactions/DeleteModal";

import SearchBar from "../components/transactions/SearchBar";
import FilterBar from "../components/transactions/FilterBar";

import { deleteTransaction } from "../services/transactionService";

function Transactions() {

    const [showModal, setShowModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const [transactions, setTransactions] =
        useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("");

    const [categoryFilter, setCategoryFilter] = useState("");

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

    const categories = [

        ...new Set(

            transactions.map(

                transaction=>transaction.category

            )

        )

    ];

    const filteredTransactions = transactions.filter(

        (transaction)=>{

            const matchesSearch=

                transaction.category

                .toLowerCase()

                .includes(searchTerm.toLowerCase())

                ||

                transaction.note

                ?.toLowerCase()

                .includes(searchTerm.toLowerCase());

            const matchesType=

                !typeFilter ||

                transaction.type===typeFilter;

            const matchesCategory=

                !categoryFilter ||

                transaction.category===categoryFilter;

            return(

                matchesSearch &&

                matchesType &&

                matchesCategory

            );

        }

    );

    if (loading)
        return <h2>Loading...</h2>;

    if (error)
        return <h2>{error}</h2>;

    return (

        <div
            style={{ padding: "30px" }}
        >

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-4xl font-bold">

                        Transactions

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Manage all your income and expenses.

                    </p>

                </div>

                <button

                    onClick={() => setShowModal(true)}

                    className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"

                >

                    + Add Transaction

                </button>

            </div>
            <div className="mb-6">

                <SearchBar

                    value={searchTerm}

                    onChange={setSearchTerm}

                />

            </div>
            <div className="mt-4 mb-6">

                <FilterBar

                    typeFilter={typeFilter}

                    setTypeFilter={setTypeFilter}

                    categoryFilter={categoryFilter}

                    setCategoryFilter={setCategoryFilter}

                    categories={categories}

                />

            </div>

            <TransactionTable

                transactions={filteredTransactions}

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