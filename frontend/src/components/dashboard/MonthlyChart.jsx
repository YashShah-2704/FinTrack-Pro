import { useEffect, useState } from "react";

import {

    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend

} from "recharts";

import {

    getMonthlyAnalytics

} from "../../services/analyticsService";

function MonthlyChart() {

    const [data, setData] = useState([]);

    useEffect(() => {

        loadMonthlyData();

    }, []);

    const loadMonthlyData = async () => {

        try {

            const response =
                await getMonthlyAnalytics();

            setData(response.monthly);

        }

        catch (error) {

            console.error(error);

        }

    };

    return (

        <div>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <LineChart
                    data={data}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="month"
                    />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Line

                        type="monotone"

                        dataKey="income"

                        name="Income"

                        stroke="#22c55e"

                        strokeWidth={3}

                    />

                    <Line

                        type="monotone"

                        dataKey="expense"

                        name="Expense"

                        stroke="#ef4444"

                        strokeWidth={3}

                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default MonthlyChart;