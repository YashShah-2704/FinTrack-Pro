function DeleteModal({ open, onClose, onConfirm }) {

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
                    width: "350px",
                    textAlign: "center"
                }}
            >

                <h2>Delete Transaction</h2>

                <p>
                    Are you sure you want to delete this transaction?
                </p>

                <button onClick={onConfirm}>
                    Yes, Delete
                </button>

                {" "}

                <button onClick={onClose}>
                    Cancel
                </button>

            </div>

        </div>

    );

}

export default DeleteModal;