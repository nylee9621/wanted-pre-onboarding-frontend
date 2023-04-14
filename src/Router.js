import React from "react";
import { Route, Routes } from "react-router-dom";

/* component & css */
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthedRoute from "./components/AuthedRoute";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Todo from "./pages/Todo/Todo";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/signup" element={<AuthedRoute><Signup /></AuthedRoute>} />
            <Route path="/signin" element={<AuthedRoute><Signin /></AuthedRoute>} />
            <Route path="/todo"  element={<ProtectedRoute><Todo /></ProtectedRoute>} />
        </Routes>
    )
}

export default Router;