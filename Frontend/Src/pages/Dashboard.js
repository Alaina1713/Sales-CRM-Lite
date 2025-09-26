import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getLeads } from "../api/leadApi";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const data = await getLeads(user.token);
      setLeads(data);
    };
    fetchLeads();
  }, [user]);

  const statusCount = ["New", "Contacted", "Won", "Lost"].map((status) => ({
    status,
    count: leads.filter((l) => l.status === status).length,
  }));

  return (
    <Box sx={{ ml: 30, p: 3 }}>
      <Typography variant="h4" mb={3}>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {statusCount.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.status}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">{item.status}</Typography>
              <Typography variant="h4">{item.count}</Typography>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, height: 300 }}>
            <Typography variant="h6">Leads Status Chart</Typography>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statusCount}>
                <XAxis dataKey="status" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
