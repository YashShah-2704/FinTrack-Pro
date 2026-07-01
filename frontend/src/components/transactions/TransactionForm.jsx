import { useState } from "react";

function TransactionForm({ onSubmit, initialData = {} }) {

    const [formData, setFormData] = useState({
        type: initialData.type || "expense",
        amount: initialData.amount || "",
        category: initialData.category || "",
        note: initialData.note || "",
        paymentMethod: initialData.paymentMethod || "UPI",
        transactionDate:
            initialData.transactionDate
                ? initialData.transactionDate.slice(0, 10)
                : new Date().toISOString().slice(0, 10)
    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(formData);

    };

    return (

        <form onSubmit={handleSubmit}>

            <label>Type</label>

            <br />

            <select
                name="type"
                value={formData.type}
                onChange={handleChange}
            >

                <option value="income">Income</option>

                <option value="expense">Expense</option>

            </select>

            <br /><br />

            <label>Amount</label>

            <br />

            <input

                type="number"

                name="amount"

                value={formData.amount}

                onChange={handleChange}

            />

            <br /><br />

            <label>Category</label>

            <br />

            <input

                name="category"

                value={formData.category}

                onChange={handleChange}

            />

            <br /><br />

            <label>Note</label>

            <br />

            <input

                name="note"

                value={formData.note}

                onChange={handleChange}

            />

            <br /><br />

            <label>Payment Method</label>

            <br />

            <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
            >

                <option>UPI</option>
                <option>Cash</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>Bank Transfer</option>
                <option>Other</option>

            </select>

            <br /><br />

            <label>Date</label>

            <br />

            <input

                type="date"

                name="transactionDate"

                value={formData.transactionDate}

                onChange={handleChange}

            />

            <br /><br />

            <button type="submit">

                Save Transaction

            </button>

        </form>

    );

}

export default TransactionForm;