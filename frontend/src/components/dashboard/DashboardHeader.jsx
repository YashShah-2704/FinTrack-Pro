import DashboardHeader from "../components/dashboard/DashboardHeader";

import SummaryCard from "../components/dashboard/SummaryCard";

import RecentTransactions from "../components/dashboard/RecentTransactions";

import CategoryPieChart from "../components/dashboard/CategoryPieChart";

import MonthlyChart from "../components/dashboard/MonthlyChart";

function Dashboard() {

    return (

        <div
            style={{
                padding: "30px"
            }}
        >

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

                    value="₹0"

                />

                <SummaryCard

                    title="Income"

                    value="₹0"

                />

                <SummaryCard

                    title="Expense"

                    value="₹0"

                />

                <SummaryCard

                    title="Transactions"

                    value="0"

                />

            </div>

            <br />

            <CategoryPieChart />

            <br />

            <MonthlyChart />

            <br />

            <RecentTransactions />

        </div>

    );

}

export default Dashboard;