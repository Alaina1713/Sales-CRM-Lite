import { Drawer, List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List sx={{ mt: 2 }}>
        <ListItemButton component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/leads">
          <ListItemText primary="Leads" />
        </ListItemButton>
        <ListItemButton component={Link} to="/profile">
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
