import { ReactNode } from 'react';
import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Container 
          component="main" 
          maxWidth={false}
          sx={{ 
            flexGrow: 1, 
            py: 4,
            px: { xs: 2, sm: 4, md: 6 },
            maxWidth: '2000px !important'
          }}
        >
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
