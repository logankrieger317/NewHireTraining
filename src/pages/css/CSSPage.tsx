import { Box, Typography, Paper } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import CodeExample from '../../components/shared/CodeExample';
import LessonSidebar from '../../components/layout/LessonSidebar';

const lessons = [
  {
    id: 'intro',
    title: 'Introduction to CSS',
    path: '/intro'
  },
  {
    id: 'selectors',
    title: 'Selectors & Specificity',
    path: '/selectors'
  },
  {
    id: 'box-model',
    title: 'Box Model',
    path: '/box-model'
  },
  {
    id: 'layout',
    title: 'Layout & Positioning',
    path: '/layout'
  },
  {
    id: 'flexbox',
    title: 'Flexbox',
    path: '/flexbox'
  },
  {
    id: 'grid',
    title: 'CSS Grid',
    path: '/grid'
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    path: '/responsive'
  },
  {
    id: 'animations',
    title: 'Transitions & Animations',
    path: '/animations'
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    path: '/best-practices'
  }
];

const IntroLesson = () => (
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
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        CSS (Cascading Style Sheets) is the language used to style web pages. It defines how HTML elements should be displayed
        and enables responsive design, animations, and modern layouts.
      </Typography>
    </Paper>

    <CodeExample
      title="Basic CSS Syntax"
      description="Here's how to write CSS rules:"
      language="css"
      initialCode={`/* Styling an element by its tag name */
h1 {
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Styling elements by class */
.button {
  background-color: #7c3aed;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

/* Styling an element by ID */
#header {
  background-color: #f8fafc;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`}
    />
  </Box>
);

const SelectorsLesson = () => (
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
        Selectors & Specificity
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        CSS selectors determine which elements to style. Understanding selector specificity is crucial for writing maintainable CSS.
      </Typography>
    </Paper>

    <CodeExample
      title="CSS Selectors"
      description="Different types of CSS selectors:"
      language="css"
      initialCode={`/* Element Selector */
p {
  line-height: 1.6;
}

/* Class Selector */
.highlight {
  background-color: yellow;
}

/* ID Selector */
#main-header {
  font-size: 2rem;
}

/* Descendant Selector */
.container p {
  margin-bottom: 1rem;
}

/* Child Selector */
.nav > li {
  display: inline-block;
}

/* Attribute Selector */
input[type="text"] {
  border: 1px solid #ccc;
}

/* Pseudo-classes */
button:hover {
  background-color: #666;
}

/* Pseudo-elements */
p::first-line {
  font-weight: bold;
}`}
    />
  </Box>
);

const BoxModelLesson = () => (
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
        Box Model
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        The CSS box model is fundamental to layout and spacing. It consists of content, padding, border, and margin.
      </Typography>
    </Paper>

    <CodeExample
      title="Box Model Properties"
      description="Understanding the box model:"
      language="css"
      initialCode={`/* Box Model Example */
.box {
  /* Content */
  width: 200px;
  height: 100px;
  
  /* Padding (inner spacing) */
  padding: 20px;
  
  /* Border */
  border: 2px solid #333;
  border-radius: 4px;
  
  /* Margin (outer spacing) */
  margin: 20px;
  
  /* Box Sizing */
  box-sizing: border-box;
}

/* Modern Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}
    />
  </Box>
);

const FlexboxLesson = () => (
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
        Flexbox
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        Flexbox is a one-dimensional layout model that helps distribute space and align content in a container.
      </Typography>
    </Paper>

    <CodeExample
      title="Flexbox Layout"
      description="Common flexbox properties:"
      language="css"
      initialCode={`/* Container (Parent) */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Items (Children) */
.flex-item {
  flex: 1;
  min-width: 200px;
}

/* Responsive Layout */
@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }
  
  .flex-item {
    width: 100%;
  }
}`}
    />
  </Box>
);

const ResponsiveLesson = () => (
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
        Responsive Design
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        Responsive design ensures your website looks and functions well on all devices and screen sizes.
      </Typography>
    </Paper>

    <CodeExample
      title="Media Queries"
      description="Creating responsive layouts:"
      language="css"
      initialCode={`/* Base styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Responsive Typography */
html {
  font-size: 16px;
}

/* Tablet styles */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
  
  .container {
    padding: 0 15px;
  }
}

/* Mobile styles */
@media (max-width: 480px) {
  html {
    font-size: 12px;
  }
  
  .container {
    padding: 0 10px;
  }
}`}
    />
  </Box>
);

const CSSPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <LessonSidebar lessons={lessons} basePath="/css" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: '280px',
          p: 3,
          minHeight: 'calc(100vh - 64px)',
          bgcolor: 'background.default'
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="intro" replace />} />
          <Route path="intro" element={<IntroLesson />} />
          <Route path="selectors" element={<SelectorsLesson />} />
          <Route path="box-model" element={<BoxModelLesson />} />
          <Route path="flexbox" element={<FlexboxLesson />} />
          <Route path="responsive" element={<ResponsiveLesson />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default CSSPage;
