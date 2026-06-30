import api from "./api";

export const getTransactions = async (params = {}) => {
    const response = await api.get("/transactions", {
        params,
    });

    return response.data;
};

export const addTransaction = async (transaction) => {
    const response = await api.post(
        "/transactions",
        transaction
    );

    return response.data;
};

export const updateTransaction = async (
    id,
    transaction
) => {

    const response = await api.put(

        `/transactions/${id}`,

        transaction

    );

    return response.data;

};

export const deleteTransaction = async (id) => {

    const response =
        await api.delete(`/transactions/${id}`);

    return response.data;

};