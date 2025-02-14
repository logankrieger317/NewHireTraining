import { Box, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';
import CodeExample from '../../components/shared/CodeExample';

const lessons = [
  {
    id: 1,
    title: 'React Basics',
    content: (
      <Box>
        <Paper 
          elevation={0}
          sx={{ 
            p: 4, 
            mb: 4, 
            borderRadius: 3,
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 2,
              background: 'linear-gradient(to right, #059669, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            Introduction to React
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4,
              color: 'text.secondary',
              fontSize: '1.1rem',
              lineHeight: 1.7
            }}
          >
            React is a JavaScript library for building user interfaces. It lets you create reusable UI components
            that efficiently update and render when your data changes.
          </Typography>
        </Paper>
        
        <CodeExample
          title="Basic React Component"
          description="Here's how to create a simple React component:"
          language="typescript"
          initialCode={`// Functional Component with TypeScript
import { useState } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#0070f3' : '#0060df',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {label}
    </button>
  );
};

export default Button;`}
        />
        
        <Paper 
          elevation={0}
          sx={{ 
            p: 4, 
            my: 4, 
            borderRadius: 3,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 3,
              color: 'text.primary',
              fontWeight: 600
            }}
          >
            Core React Concepts
          </Typography>
          
          <List sx={{ width: '100%' }}>
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    Components
                  </Typography>
                }
                secondary="Building blocks of React applications. Can be functional or class-based."
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    Props
                  </Typography>
                }
                secondary="Read-only data passed to components from their parent"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    State
                  </Typography>
                }
                secondary="Mutable data managed within a component using hooks or class methods"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    Hooks
                  </Typography>
                }
                secondary="Functions that let you use state and other React features in functional components"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    Effects
                  </Typography>
                }
                secondary="Handle side effects in your components like data fetching or subscriptions"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
          </List>
        </Paper>
        
        <CodeExample
          title="Using Hooks and Effects"
          description="Here's an example of using React hooks and effects:"
          language="typescript"
          initialCode={`import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.example.com/user/1');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;`}
        />

        <Paper 
          elevation={0}
          sx={{ 
            p: 4, 
            my: 4, 
            borderRadius: 3,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 3,
              color: 'text.primary',
              fontWeight: 600
            }}
          >
            Best Practices
          </Typography>
          
          <List sx={{ width: '100%' }}>
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary="Component Composition"
                secondary="Break down complex UIs into smaller, reusable components"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary="State Management"
                secondary="Keep state as close as possible to where it's used"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary="TypeScript Integration"
                secondary="Use TypeScript for better type safety and developer experience"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary="Performance Optimization"
                secondary="Use React.memo, useMemo, and useCallback when necessary"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
          </List>
        </Paper>

        <CodeExample
          title="Try it yourself!"
          description="Create a counter component using React hooks:"
          language="typescript"
          initialCode={`import { useState } from 'react';

const Counter = () => {
  // Add state for the counter
  
  // Create increment and decrement functions
  
  return (
    <div>
      {/* Add your counter UI here */}
    </div>
  );
};

export default Counter;`}
        />
      </Box>
    ),
  },
];

const ReactPage = () => {
  return (
    <Box 
      sx={{ 
        maxWidth: '100%',
        overflow: 'hidden',
        px: { xs: 0, sm: 2, md: 4 }
      }}
    >
      {lessons.map((lesson) => (
        <Box key={lesson.id}>
          {lesson.content}
        </Box>
      ))}
    </Box>
  );
};

export default ReactPage;
