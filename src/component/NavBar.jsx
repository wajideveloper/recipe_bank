import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{
        width:'100%'
    }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <Typography variant="h6" component="div">
            THEO
          </Typography>
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box 
          sx={{ 
            position: 'relative', 
            borderRadius: 1, 
            backgroundColor: 'rgba(255, 255, 255, 0.15)', 
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' }, 
            marginLeft: 0, 
            width: '100%', 
            maxWidth: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ padding: '0 10px', height: '100px', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SearchIcon />
          </Box>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ color: 'inherit', paddingLeft: '40px', width: '100%' }}
          />
        </Box>
        <Button color="inherit" sx={{ marginLeft: 2 }}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
