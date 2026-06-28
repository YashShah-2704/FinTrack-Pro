const {

    getDashboardAnalytics,
    getCategoryAnalytics

} = require("../services/analyticsService");

const getDashboard = async (req, res) => {

    try {

        const dashboard =
            await getDashboardAnalytics(
                req.user.id
            );

        res.status(200).json({

            success: true,

            dashboard

        });

    }
    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

const getCategoryReport = async (req, res) => {

    try {

        const data =
            await getCategoryAnalytics(req.user.id);

        res.status(200).json({

            success: true,

            categories: data

        });

    }
    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

module.exports = {

    getDashboard,
    getCategoryReport

};