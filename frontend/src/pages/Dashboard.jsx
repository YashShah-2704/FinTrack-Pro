import { useEffect, useState } from "react";

import DashboardHeader from "../components/dashboard/DashboardHeader";

import SummaryCard from "../components/dashboard/SummaryCard";

import RecentTransactions from "../components/dashboard/RecentTransactions";

import CategoryPieChart from "../components/dashboard/CategoryPieChart";

import MonthlyChart from "../components/dashboard/MonthlyChart";
import MainLayout from "../components/layout/MainLayout";

import {

    getDashboardData

} from "../services/analyticsService";

function Dashboard() {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const data =
                    await getDashboardData();

                setDashboard(data.dashboard);

            }

            catch (error) {

                setError(

                    error.response?.data?.message ||

                    "Failed to load dashboard."

                );

            }

            finally {

                setLoading(false);

            }

        };

        fetchDashboard();

    }, []);

    if (loading)
        return <h2>Loading...</h2>;

    if (error)
        return <h2>{error}</h2>;

    return (
        <MainLayout>

        <div style={{ padding: "30px" }}>

            <DashboardHeader />

            <br />

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap"
                }}
            >

                <SummaryCard

                    title="Balance"

                    value={`₹${dashboard.balance}`}

                />

                <SummaryCard

                    title="Income"

                    value={`₹${dashboard.totalIncome}`}

                />

                <SummaryCard

                    title="Expense"

                    value={`₹${dashboard.totalExpense}`}

                />

                <SummaryCard

                    title="Transactions"

                    value={dashboard.totalTransactions}

                />

            </div>

            <br />

            <CategoryPieChart />

            <br />

            <MonthlyChart />

            <br />

            <RecentTransactions

    transactions={dashboard.recentTransactions}

/>

        </div>

        </MainLayout>

    );

}

export default Dashboard;