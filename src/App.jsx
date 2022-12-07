import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import PrivateLayout from "./components/layout/PrivateLayout";
import Subject from "./pages/Subject";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/forgotpwd" exact element={<ForgotPassword />} />
        <Route
          path="/subject"
          exact
          element={
            <PrivateLayout>
              <Subject />
            </PrivateLayout>
          }
        />
        <Route
          path="/"
          exact
          element={
            <PrivateLayout>
              <Dashboard />
            </PrivateLayout>
          }
        />
        <Route
          path="*"
          exact
          element={
            <PrivateLayout>
              <Dashboard />
            </PrivateLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
