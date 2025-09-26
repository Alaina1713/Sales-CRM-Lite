import { Box, Typography, Button, Grid, Paper, TextField } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getLeads, deleteLead } from "../api/leadApi";
import LeadCard from "../components/LeadCard";

const Leads = () => {
  const { user } = useContext(AuthContext);
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    const data = await getLeads(user.token, { search });
    setLeads(data);
  };

  useEffect(() => {
    fetchLeads();
  }, [search]);

  const handleDelete = async (id) => {
    await deleteLead(user.token, id);
    fetchLeads();
  };

  return (
    <Box sx={{ ml: 30, p: 3 }}>
      <Typography variant="h4" mb={3}>
        Leads
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          label="Search by name or company"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Paper>

      <Grid container spacing={2}>
        {leads.map((lead) => (
          <Grid item xs={12} sm={6} md={4} key={lead._id}>
            <LeadCard lead={lead} onDelete={handleDelete} onEdit={() => {}} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Leads;
