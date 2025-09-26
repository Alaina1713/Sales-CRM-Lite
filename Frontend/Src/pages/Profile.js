import { Box, Typography, Paper, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = () => {
    alert("Profile updated (mock)!");
  };

  return (
    <Box sx={{ ml: 30, p: 3 }}>
      <Typography variant="h4" mb={3}>
        Profile
      </Typography>
      <Paper sx={{ p: 3, maxWidth: 500 }}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button sx={{ mt: 2 }} variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Paper>
    </Box>
  );
};

export default Profile;
