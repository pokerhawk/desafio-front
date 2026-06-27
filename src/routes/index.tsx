import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRouter";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/Error";
import Analytics from "../pages/Analytics";

const AllRoutes = () => {
    return (
        <Routes>
            {/* Protected Routes */}
            <Route path='/dashboard' element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
            <Route path='/analytics' element={
                <ProtectedRoute>
                    <Analytics />
                </ProtectedRoute>
            } />

            {/* Non Protected Routes */}

            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default AllRoutes;
