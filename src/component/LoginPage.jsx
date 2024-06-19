// import React ,{useState} from 'react'
// import {useDispatch,useSelector} from 'react-redux'
// import { setUsername,setPassword } from '../Features/loginSlice'
// import { Container, TextField, Button, Typography, Box } from '@mui/material';

// const LoginPage = () => {
//     const [usernameInput, setUsernameInput] = useState('');
//     const [passwordInput, setPasswordInput] = useState('');
//     const dispatch = useDispatch();
//     const username = useSelector((state) => state.login.username);
//     const password = useSelector((state) => state.login.password);

//     const loginHandler = (e) => {
//         e.preventDefault();
//         dispatch(setUsername(usernameInput));
//         dispatch(setPassword(passwordInput));
//         setUsernameInput('');
//         setPasswordInput('');
//     };
//   return (
//     <div>
//     {/* <form onSubmit={loginHandler}>
//         <input
//             type="text"
//             placeholder="Enter your username"
//             value={usernameInput}
//             onChange={(e) => setUsernameInput(e.target.value)}
//             required
//         />
//         <input
//             type="password"
//             placeholder="Enter your password"
//             value={passwordInput}
//             onChange={(e) => setPasswordInput(e.target.value)}
//             required
//         />
//         <button type="submit">Login</button>
//     </form> */}

// <Container maxWidth="sm">
//             <Box
//                 component="form"
//                 onSubmit={loginHandler}
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     mt: 8,
//                 }}
//             >
//                 <Typography variant="h4" component="h1" gutterBottom>
//                     Juchhiem Recipe Bank
//                 </Typography>
//                 <TextField
//                     label="Username"
//                     variant="outlined"
//                     margin="normal"
//                     fullWidth
//                     value={usernameInput}
//                     onChange={(e) => setUsernameInput(e.target.value)}
//                     required
//                 />
//                 <TextField
//                     label="Password"
//                     variant="outlined"
//                     type="password"
//                     margin="normal"
//                     fullWidth
//                     value={passwordInput}
//                     onChange={(e) => setPasswordInput(e.target.value)}
//                     required
//                 />
//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 2 }}
//                 >
//                     Login
//                 </Button>
//             </Box>
//             <Box sx={{ mt: 4 }}>
//                 <Typography variant="h6">Entered Username: {username}</Typography>
//                 <Typography variant="h6">Entered Password: {password}</Typography>
//             </Box>
//         </Container>
//     <div>
//     </div>
// </div>
//   )
// }

// export default LoginPage
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword } from '../Features/loginSlice';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import Navbar from './NavBar';

const LoginPage = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const dispatch = useDispatch();
  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(setUsername(usernameInput));
    dispatch(setPassword(passwordInput));
    setUsernameInput('');
    setPasswordInput('');
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >

        <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: '100%' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Juchhiem Recipe Bank
          </Typography>
          <form onSubmit={loginHandler}>
            <Box sx={{ marginBottom: 2 }}>
              <Typography
                variant="button"
                color="primary"
                sx={{
                  borderRadius: 1,
                  width: '100px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 1,
                  marginBottom: 2,
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
                htmlFor="username"
              >
                Username
              </Typography>
              <TextField
                color='secondary'
                id="username"
                label="Username"
                variant="outlined"
                value={usernameInput}
                required
                onChange={(e) => setUsernameInput(e.target.value)}
                fullWidth
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Typography
                variant="button"
                color="primary"
                sx={{
                  borderRadius: 1,
                  width: '100px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 1,
                  marginBottom: 2,
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
                htmlFor="password"
              >
                Password
              </Typography>
              <TextField
                color='primary'
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={passwordInput}
                required
                onChange={(e) => setPasswordInput(e.target.value)}
                fullWidth
              />
            </Box>
            <Box sx={{ textAlign: 'right', mb: 2 }}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Box>
          </form>

        </Paper>

      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Entered Username: {username}</Typography>
        <Typography variant="h6">Entered Password: {password}</Typography>
      </Box>
    </>
  );

};

export default LoginPage;
