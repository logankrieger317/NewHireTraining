import { Box, Typography, Grid, Paper, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { Code as HtmlIcon, Palette as CssIcon, Javascript as JsIcon, Code as ReactIcon } from '@mui/icons-material';

const courses = [
  {
    title: 'HTML',
    description: 'Learn the building blocks of web pages.',
    path: '/html',
    icon: HtmlIcon,
    color: '#2563eb'
  },
  {
    title: 'CSS',
    description: 'Style your web pages with modern CSS.',
    path: '/css',
    icon: CssIcon,
    color: '#7c3aed'
  },
  {
    title: 'JavaScript',
    description: 'Add interactivity to your websites.',
    path: '/javascript',
    icon: JsIcon,
    color: '#ca8a04'
  },
  {
    title: 'React',
    description: 'Build modern web applications with React.',
    path: '/react',
    icon: ReactIcon,
    color: '#059669'
  }
];

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        px: { xs: 2, sm: 4 },
        py: { xs: 4, md: 6 }
      }}
    >
      <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #2563eb 30%, #7c3aed 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Welcome to Web Development Training
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            maxWidth: 'md',
            mx: 'auto',
            lineHeight: 1.6
          }}
        >
          Start your journey to becoming a web developer! Choose your learning path:
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} md={6} key={course.title}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.shadows[4],
                  borderColor: 'transparent'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <course.icon
                  sx={{
                    fontSize: 40,
                    color: course.color,
                    mr: 2
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: course.color
                  }}
                >
                  {course.title}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: 'text.secondary',
                  flexGrow: 1,
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                {course.description}
              </Typography>

              <Button
                component={Link}
                to={course.path}
                variant="outlined"
                size="large"
                sx={{
                  alignSelf: 'flex-start',
                  borderColor: course.color,
                  color: course.color,
                  '&:hover': {
                    borderColor: course.color,
                    backgroundColor: `${course.color}10`
                  }
                }}
              >
                Start {course.title} →
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
