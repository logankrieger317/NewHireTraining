import { Box, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';
import CodeExample from '../../components/shared/CodeExample';

const lessons = [
  {
    id: 1,
    title: 'HTML Basics',
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
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            Introduction to HTML
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
            HTML (HyperText Markup Language) is the standard markup language for creating web pages.
            It describes the structure of a web page using various elements and tags.
          </Typography>
        </Paper>
        
        <CodeExample
          title="Basic HTML Structure"
          description="Every HTML document follows this basic structure:"
          language="html"
          initialCode={`<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
    <p>This is my first web page.</p>
  </body>
</html>`}
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
            Common HTML Elements
          </Typography>
          
          <List sx={{ width: '100%' }}>
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                      &lt;h1&gt;
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary', mx: 1 }}>
                      to
                    </Typography>
                    <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                      &lt;h6&gt;
                    </Typography>
                  </Box>
                }
                secondary="Headings - Used to define different levels of titles and subtitles"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    &lt;p&gt;
                  </Typography>
                }
                secondary="Paragraphs - Used to define blocks of text"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    &lt;a&gt;
                  </Typography>
                }
                secondary="Links - Used to create hyperlinks to other pages or resources"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    &lt;img&gt;
                  </Typography>
                }
                secondary="Images - Used to embed images in your web page"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                      &lt;ul&gt;
                    </Typography>
                    <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                      &lt;ol&gt;
                    </Typography>
                    <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                      &lt;li&gt;
                    </Typography>
                  </Box>
                }
                secondary="Lists - Used to create unordered (bullet) and ordered (numbered) lists"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
          </List>
        </Paper>
        
        <CodeExample
          title="Try it yourself!"
          description="Edit this code to create your own HTML content:"
          language="html"
          initialCode={`<h1>My Page</h1>
<p>Write your content here!</p>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>`}
        />
      </Box>
    ),
  },
];

const HTMLPage = () => {
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

export default HTMLPage;
