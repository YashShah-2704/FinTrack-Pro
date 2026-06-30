import { useEffect, useState } from "react";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

import { getCategoryAnalytics } from "../../services/analyticsService";

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF4560",
    "#775DD0",
    "#26A69A"
];

function CategoryPieChart() {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const fetchCategories = async () => {

            try {

                const response =
                    await getCategoryAnalytics();

                setData(response.categories);

            }
            catch (err) {

                setError("Failed to load chart");

            }
            finally {

                setLoading(false);

            }

        };

        fetchCategories();

    }, []);

    if (loading)
        return <p>Loading Chart...</p>;

    if (error)
        return <p>{error}</p>;

    if (data.length === 0)
        return <p>No expense data available.</p>;

    return (

        <div
            style={{
                width: "100%",
                height: 400
            }}
        >

            <h2>Category Wise Spending</h2>

            <ResponsiveContainer>

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="totalAmount"

                        nameKey="_id"

                        outerRadius={130}

                        label

                    >

                        {

                            data.map((entry, index) => (

                                <Cell

                                    key={index}

                                    fill={
                                        COLORS[
                                            index %
                                            COLORS.length
                                        ]
                                    }

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default CategoryPieChart;