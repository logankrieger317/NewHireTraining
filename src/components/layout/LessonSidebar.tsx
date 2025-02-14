import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

interface Lesson {
  id: string;
  title: string;
  path: string;
}

interface LessonSidebarProps {
  lessons: Lesson[];
  basePath: string;
}

const LessonSidebar = ({ lessons, basePath }: LessonSidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper
      elevation={0}
      sx={{
        width: '280px',
        height: '100%',
        borderRight: '1px solid',
        borderColor: 'divider',
        borderRadius: 0,
        position: 'fixed',
        left: 0,
        top: 64,
        bottom: 0,
        overflowY: 'auto',
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: 'text.primary',
            mb: 2
          }}
        >
          Lessons
        </Typography>
        <List sx={{ width: '100%', p: 0 }}>
          {lessons.map((lesson) => (
            <ListItem key={lesson.id} disablePadding>
              <ListItemButton
                selected={location.pathname === `${basePath}${lesson.path}`}
                onClick={() => navigate(`${basePath}${lesson.path}`)}
                sx={{
                  borderRadius: 1,
                  mb: 0.5,
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  },
                }}
              >
                <ListItemText 
                  primary={lesson.title}
                  primaryTypographyProps={{
                    sx: { 
                      fontWeight: location.pathname === `${basePath}${lesson.path}` ? 600 : 400
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default LessonSidebar;
