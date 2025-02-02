import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import SchoolDashboard from "./pages/SchoolDashboard";
import ParentDashboard from "./pages/ParentDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RoleSelection from "./pages/RoleSelection";
import PrivateRoute from "./components/PrivateRoute";
import SchoolDetailPage from './pages/SchoolDetailPage';
import StudentDetailPage from './pages/StudentDetailPage'; // Import the PrivateRoute component

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "220px", width: "100%" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/select-role" element={<RoleSelection />} />
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/school/:id" element={<SchoolDetailPage />} />
            <Route path="/student/:id" element={<StudentDetailPage />} />
            
            {/* Protected Routes */}
            <Route 
              path="/admin" 
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/school" 
              element={
                <PrivateRoute>
                  <SchoolDashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/parent" 
              element={
                <PrivateRoute>
                  <ParentDashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/student" 
              element={
                <PrivateRoute>
                  <StudentDashboard />
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
