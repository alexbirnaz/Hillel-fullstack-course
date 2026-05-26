import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ margin: 2 }}>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default Form;
