import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";

const Practicum1 = () => {
  const [firstname, setFirstname] = useState("");
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async () => {
    if (!firstname.trim()) return alert("First name cannot be empty");

    try {
      if (editingId) {
        const res = await axios.put(`http://localhost:5000/api/users/${editingId}`, { firstname });
        setUsers(users.map(u => (u._id === editingId ? res.data : u)));
        setEditingId(null);
        alert("editing successfuly")
      } else {
        const res = await axios.post("http://localhost:5000/api/users", { firstname });
        setUsers([...users, res.data]);
      }
      setFirstname("");
    } catch (err) {
      console.error(err);
      alert("Error submitting data");
    }
  };

  const handleEdit = (user) => {
    setFirstname(user.firstname);
    setEditingId(user._id);
  };

const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;

  try {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    setUsers(prevUsers => prevUsers.filter(u => u._id !== id));
    alert("Deleted successfully");
  } catch (err) {
    console.error(err);
    const message = err.response?.data?.message || "Error deleting user";
    alert(message);
  }
};


  return (
    <Box sx={{ minHeight: "50vh", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: "48px" }}>
          Practicum 1 Page
        </Typography>
        <Link to="/">Home</Link>
        <TextField
          label="First Name"
          placeholder="Enter your first name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {editingId ? "Update" : "Submit"}
        </Button>

        <Typography variant="h5" sx={{ mt: 3 }}>All Users:</Typography>
        <List>
          {users.map(user => (
            <ListItem key={user._id} sx={{ display: "flex", justifyContent: "space-between" }}>
              <ListItemText primary={user.firstname} />
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" color="secondary" size="small" onClick={() => handleEdit(user)}>
                  Edit
                </Button>
                <Button variant="outlined" color="error" size="small" onClick={() => handleDelete(user._id)}>
                  Delete
                </Button>
              </Stack>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};

export default Practicum1;
