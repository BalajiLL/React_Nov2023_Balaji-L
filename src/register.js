import { Button, Container, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const handleRegister = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };
  const handleSubmit=(event)=>
  {
      event.preventDefault();
      axios.
      post("http://localhost:3001/users",{"fname":firstName,"lname":lastName,"email":email,"password":password})
      .then((res)=>
      {
          console.log(res.data);
      })
      .catch((error)=>
      {
          alert("Error: "+error);
      })
  }

  const Background={
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20220112/pngtree-glass-morphim-effect-registration-banner-with-gradient-blue-image_934693.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    //backgroundRepeat: "no_repeat",
  };

  return (
    <div style={Background}>
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">SIGNUP</Typography>
        <TextField
          label="First Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Link to='/ho'>
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Sign Up</Button>
        </Link>
        <p>
        Already have an account <Link to='/lo'>Sign In
        </Link></p>
        {/* <Button  color="primary" fullWidth onClick={handleRegister}>
        <u> Already have an account?</u>
        </Button> */}<pre></pre>
      </Paper>
    </Container>
    </div>
  );
};
export default Register;