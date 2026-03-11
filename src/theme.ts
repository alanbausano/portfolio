import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00FF41', // Matrix Green
    },
    background: {
      default: '#000000',
      paper: '#0a0a0a',
    },
    text: {
      primary: '#00FF41',
      secondary: '#008F11',
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      textShadow: '0 0 10px #00FF41',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      textShadow: '0 0 8px #00FF41',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: '1px solid #00FF41',
          '&:hover': {
            boxShadow: '0 0 15px #00FF41',
            backgroundColor: 'rgba(0, 255, 65, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(10, 10, 10, 0.8)',
          border: '1px solid #008F11',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            border: '1px solid #00FF41',
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
            transform: 'translateY(-5px)',
          },
        },
      },
    },
  },
});

export default theme;
