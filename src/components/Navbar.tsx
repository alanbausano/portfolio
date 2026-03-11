import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'GitHub', id: 'github' },
    { label: 'Live Demos', id: 'demos' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(5px)', borderBottom: '1px solid #008F11' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00FF41', cursor: 'pointer' }} onClick={() => scrollToSection('home')}>
            {'>'} ALAN_BAUSANO _
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: '#00FF41', ml: 2 }} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
