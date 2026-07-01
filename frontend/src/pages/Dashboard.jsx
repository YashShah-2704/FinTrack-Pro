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


            <DashboardHeader />


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                <SummaryCard

                title="Total Balance"

                value={`₹${dashboard.balance}`}

                color="text-blue-600"

                />

                <SummaryCard

                title="Income"

                value={`₹${dashboard.totalIncome}`}

                color="text-green-600"

                />

                <SummaryCard

                title="Expenses"

                value={`₹${dashboard.totalExpense}`}

                color="text-red-600"

                />

                <SummaryCard

                title="Transactions"

                value={dashboard.totalTransactions}

                color="text-purple-600"

                />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mt-8">

                <CategoryPieChart />

            </div>

            
            <div className="bg-white rounded-xl shadow-md p-6 mt-8">

                <MonthlyChart />

            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mt-8">

                <RecentTransactions
                    transactions={dashboard.recentTransactions}
                />

            </div>


        </MainLayout>

    );

}

export default Dashboard;