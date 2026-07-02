import TransactionForm from "./TransactionForm";

function TransactionModal({

    open,

    onClose,

    onSubmit,

    initialData={}

}) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8">

                <div className="flex justify-between items-center mb-6">

                    <h2 className="text-2xl font-bold">

                        {initialData._id
                            ? "Edit Transaction"
                            : "Add Transaction"}

                    </h2>

                    <button

                        onClick={onClose}

                        className="text-gray-500 hover:text-red-500 text-xl"

                    >

                        ✕

                    </button>

                </div>

                <TransactionForm

                    initialData={initialData}

                    onSubmit={onSubmit}

                    onCancel={onClose}

                />

            </div>

        </div>

    );

}

export default TransactionModal;