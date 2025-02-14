import { Box, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';
import CodeExample from '../../components/shared/CodeExample';

const lessons = [
  {
    id: 1,
    title: 'CSS Basics',
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
              background: 'linear-gradient(to right, #7c3aed, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            Introduction to CSS
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
            CSS (Cascading Style Sheets) is the language used to style web pages.
            It describes how HTML elements should be displayed on screen, paper, or other media.
          </Typography>
        </Paper>
        
        <CodeExample
          title="Basic CSS Syntax"
          description="CSS uses a selector and declaration block format:"
          language="css"
          initialCode={`/* Styling a specific element by its tag name */
h1 {
  color: #333333;
  font-size: 24px;
  margin-bottom: 16px;
}

/* Styling elements by class */
.button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

/* Styling elements by ID */
#header {
  background-color: #f8f8f8;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`}
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
            Common CSS Properties
          </Typography>
          
          <List sx={{ width: '100%' }}>
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    color, background-color
                  </Typography>
                }
                secondary="Control text and background colors"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    margin, padding
                  </Typography>
                }
                secondary="Control spacing around and within elements"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    width, height
                  </Typography>
                }
                secondary="Set dimensions of elements"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    font-size, font-weight
                  </Typography>
                }
                secondary="Control text appearance and weight"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    display, position
                  </Typography>
                }
                secondary="Control layout and positioning of elements"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
          </List>
        </Paper>
        
        <CodeExample
          title="Try it yourself!"
          description="Edit this CSS to style your HTML elements:"
          language="css"
          initialCode={`.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  color: #333;
  font-size: 32px;
  text-align: center;
}

.button {
  /* Add your styles here */
}`}
        />
      </Box>
    ),
  },
];

const CSSPage = () => {
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

export default CSSPage;
