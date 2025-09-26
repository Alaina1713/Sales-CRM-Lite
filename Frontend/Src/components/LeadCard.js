import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

const LeadCard = ({ lead, onEdit, onDelete }) => {
  return (
    <Card sx={{ mb: 2, "&:hover": { boxShadow: 6 } }}>
      <CardContent>
        <Typography variant="h6">{lead.name}</Typography>
        <Typography>Email: {lead.email}</Typography>
        <Typography>Company: {lead.company}</Typography>
        <Typography>Status: {lead.status}</Typography>
        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
          <Button variant="outlined" onClick={() => onEdit(lead)}>
            Edit
          </Button>
          <Button variant="contained" color="error" onClick={() => onDelete(lead._id)}>
            Delete
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LeadCard;
