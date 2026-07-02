import { useEffect, useState } from "react";

function TransactionForm({
    onSubmit,
    initialData = {},
    onCancel
}) {

    const [formData, setFormData] = useState({
        type: "expense",
        amount: "",
        category: "",
        note: "",
        paymentMethod: "UPI",
        transactionDate: new Date().toISOString().slice(0, 10)
    });

    useEffect(() => {

        setFormData({

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

    }, [initialData]);

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

        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>

                    <label className="block mb-2 font-medium">

                        Type

                    </label>

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    >

                        <option value="income">

                            Income

                        </option>

                        <option value="expense">

                            Expense

                        </option>

                    </select>

                </div>

                <div>

                    <label className="block mb-2 font-medium">

                        Category

                    </label>

                    <input
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">

                        Amount

                    </label>

                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">

                        Payment Method

                    </label>

                    <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    >

                        <option>UPI</option>
                        <option>Cash</option>
                        <option>Credit Card</option>
                        <option>Debit Card</option>
                        <option>Bank Transfer</option>

                    </select>

                </div>

            </div>

            <div>

                <label className="block mb-2 font-medium">

                    Date

                </label>

                <input
                    type="date"
                    name="transactionDate"
                    value={formData.transactionDate}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

            </div>

            <div>

                <label className="block mb-2 font-medium">

                    Note

                </label>

                <textarea
                    rows="3"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

            </div>

            <div className="flex justify-end gap-4">

                <button

                    type="button"

                    onClick={onCancel}

                    className="px-5 py-3 rounded-lg border"

                >

                    Cancel

                </button>

                <button

                    type="submit"

                    className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"

                >

                    Save Transaction

                </button>

            </div>

        </form>

    );

}

export default TransactionForm;