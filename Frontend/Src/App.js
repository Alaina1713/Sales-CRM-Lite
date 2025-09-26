import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import LeadDetail from "./pages/LeadDetail";
import Profile from "./pages/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Box, Toolbar } from "@mui/material";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Box>
      {user && <Navbar />}
      {user && <Sidebar />}
      <Box component="main" sx={{ ml: user ? 30 : 0, mt: 8, p: 3 }}>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {user && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/leads/:id" element={<LeadDetail />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
