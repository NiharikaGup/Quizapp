import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateLayout from "./components/layout/PrivateLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
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
