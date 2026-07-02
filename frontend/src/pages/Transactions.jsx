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

import Pagination from "../components/transactions/Pagination";

import { toast } from "react-toastify";

function Transactions() {

    const [showModal, setShowModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const [page, setPage] = useState(1);

    const [totalPages, setTotalPages] = useState(1);

    const limit = 10;

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

    }, [

        page,

        searchTerm,

        typeFilter,

        categoryFilter

    ]);

    const loadTransactions = async () => {

        try {

            const data = await getTransactions({

                page,

                limit,

                search: searchTerm,

                type: typeFilter,

                category: categoryFilter

            });

            setTransactions(
                data.transactions
            );

            setTotalPages(data.totalPages);

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

            toast.success("Transaction added successfully!");

            setShowModal(false);

            await loadTransactions();

        }

        catch (err) {

            toast.error("Failed to add transaction.");
            console.error(err);

        }

    };

    const handleUpdateTransaction = async (formData) => {

        try {

            await updateTransaction(

                selectedTransaction._id,

                formData

            );

            toast.success("Transaction updated successfully!");

            setSelectedTransaction(null);

            setShowModal(false);

            await loadTransactions();

        }

        catch (err) {

            toast.error("Failed to update transaction.");
            console.error(err);

        }

    };

    const handleDeleteTransaction = async () => {

        try {

            await deleteTransaction(selectedTransaction._id);

            toast.success("Transaction deleted successfully!");

            setShowDeleteModal(false);

            setSelectedTransaction(null);

            await loadTransactions();

        }

        catch (err) {

            toast.error("Failed to delete transaction.");
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
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">

                <div className="flex flex-col lg:flex-row gap-4 lg:items-center">

                    <div className="flex-1">

                        <SearchBar

                            value={searchTerm}

                            onChange={(value) => {
                                setSearchTerm(value);
                                setPage(1);
                            }}

                        />

                    </div>

                    <FilterBar

                        typeFilter={typeFilter}

                        setTypeFilter={(value) => {

                            setTypeFilter(value);

                            setPage(1);

                        }}

                        categoryFilter={categoryFilter}

                        setCategoryFilter={(value) => {

                            setCategoryFilter(value);

                            setPage(1);

                        }}

                        categories={categories}

                    />

                </div>

            </div>

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

            <Pagination

                currentPage={page}

                totalPages={totalPages}

                onPageChange={setPage}

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

            <DeleteModal

                open={showDeleteModal}

                onClose={() => {

                    setShowDeleteModal(false);

                    setSelectedTransaction(null);

                }}

                onConfirm={handleDeleteTransaction}

            />

        </div>

    );

}


export default Transactions;