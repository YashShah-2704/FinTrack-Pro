import TransactionForm from "./TransactionForm";

function TransactionModal({

    open,

    onClose,

    onSubmit,

    initialData={}

}) {

    if (!open) return null;

    return (

        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >

            <div
                style={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    width: "400px"
                }}
            >

                <h2>

                    {

                        initialData._id ?

                        "Edit Transaction"

                        :

                        "Add Transaction"

                    }

                </h2>

                <TransactionForm

                    initialData={initialData}

                    onSubmit={onSubmit}

                />

                <br />

                <button onClick={onClose}>

                    Close

                </button>

            </div>

        </div>

    );

}

export default TransactionModal;