import api from "./api";

export const getDashboardData = async () => {

    const response =
        await api.get("/analytics/dashboard");

    return response.data;

};

export const getCategoryAnalytics = async () => {

    const response =
        await api.get("/analytics/categories");

    return response.data;

};