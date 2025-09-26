import { Box, Typography, Paper, Button } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getLeads } from "../api/leadApi";

const LeadDetail = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [lead, setLead] = useState(null);

  useEffect(() => {
    const fetchLead = async () => {
      const data = await getLeads(user.token);
      const found = data.find((l) => l._id === id);
      setLead(found);
    };
    fetchLead();
  }, [id, user]);

  if (!lead) return <Typography sx={{ ml: 30, mt: 3 }}>Loading...</Typography>;

  return (
    <Box sx={{ ml: 30, p: 3 }}>
      <Typography variant="h4" mb={3}>
        Lead Details
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Name: {lead.name}</Typography>
        <Typography>Email: {lead.email}</Typography>
        <Typography>Company: {lead.company}</Typography>
        <Typography>Status: {lead.status}</Typography>
        <Typography>Assigned To: {lead.assignedTo || "Unassigned"}</Typography>
        <Button sx={{ mt: 2 }} variant="contained" onClick={() => navigate("/leads")}>
          Back to Leads
        </Button>
      </Paper>
    </Box>
  );
};

export default LeadDetail;
