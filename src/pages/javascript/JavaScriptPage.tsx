import { Box, Typography, List, ListItem, ListItemText, Paper, Divider } from '@mui/material';
import CodeExample from '../../components/shared/CodeExample';

const lessons = [
  {
    id: 1,
    title: 'JavaScript Basics',
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
              background: 'linear-gradient(to right, #ca8a04, #eab308)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700
            }}
          >
            Introduction to JavaScript
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
            JavaScript is a programming language that enables interactive web pages.
            It's an essential part of web development, allowing you to create dynamic content and handle user interactions.
          </Typography>
        </Paper>
        
        <CodeExample
          title="Basic JavaScript Syntax"
          description="Here are some fundamental JavaScript concepts:"
          language="javascript"
          initialCode={`// Variables and Data Types
let name = 'John';  // String
const age = 25;     // Number
let isStudent = true;  // Boolean

// Functions
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Arrays
let colors = ['red', 'green', 'blue'];
colors.push('yellow');  // Add to array

// Objects
let person = {
  name: 'John',
  age: 25,
  isStudent: true,
  greet: function() {
    return 'Hello, I am ' + this.name;
  }
};`}
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
            Core JavaScript Concepts
          </Typography>
          
          <List sx={{ width: '100%' }}>
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    Variables & Data Types
                  </Typography>
                }
                secondary="Store and manipulate different types of data"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    Functions
                  </Typography>
                }
                secondary="Reusable blocks of code that perform specific tasks"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    Arrays & Objects
                  </Typography>
                }
                secondary="Complex data structures for organizing information"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    Control Flow
                  </Typography>
                }
                secondary="if statements, loops, and other control structures"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
            <Divider />
            <ListItem sx={{ py: 2 }}>
              <ListItemText 
                primary={
                  <Typography component="span" sx={{ fontFamily: 'monospace', color: 'primary.main' }}>
                    DOM Manipulation
                  </Typography>
                }
                secondary="Interact with HTML elements on the page"
                secondaryTypographyProps={{ sx: { mt: 0.5 } }}
              />
            </ListItem>
          </List>
        </Paper>
        
        <CodeExample
          title="Try it yourself!"
          description="Edit this code to experiment with JavaScript:"
          language="javascript"
          initialCode={`// Create a function that calculates the sum of numbers
function calculateSum(numbers) {
  let sum = 0;
  
  // Add your code here
  
  return sum;
}

// Test your function
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));  // Should output: 15`}
        />
      </Box>
    ),
  },
];

const JavaScriptPage = () => {
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

export default JavaScriptPage;
