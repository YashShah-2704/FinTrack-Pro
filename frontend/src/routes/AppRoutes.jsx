import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Transactions from "../pages/Transactions";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <Routes>

            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route

            path="/dashboard"

            element={

            <ProtectedRoute>

            <Dashboard />

            </ProtectedRoute>

            }

            />

            <Route

            path="/transactions"

            element={

            <ProtectedRoute>

            <Transactions />

            </ProtectedRoute>

            }

            />

            <Route

            path="/profile"

            element={

            <ProtectedRoute>

            <Profile/>

            </ProtectedRoute>

            }

            />

        </Routes>
    );
}

export default AppRoutes;