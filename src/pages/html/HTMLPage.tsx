import { Box, Typography, Paper } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import CodeExample from '../../components/shared/CodeExample';
import LessonSidebar from '../../components/layout/LessonSidebar';

const lessons = [
  {
    id: 'intro',
    title: 'Introduction to HTML',
    path: '/intro'
  },
  {
    id: 'structure',
    title: 'Document Structure',
    path: '/structure'
  },
  {
    id: 'text',
    title: 'Text Elements',
    path: '/text'
  },
  {
    id: 'lists',
    title: 'Lists & Tables',
    path: '/lists'
  },
  {
    id: 'links',
    title: 'Links & Navigation',
    path: '/links'
  },
  {
    id: 'media',
    title: 'Images & Media',
    path: '/media'
  },
  {
    id: 'forms',
    title: 'Forms & Input',
    path: '/forms'
  },
  {
    id: 'semantic',
    title: 'Semantic HTML',
    path: '/semantic'
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    path: '/accessibility'
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
          background: 'linear-gradient(to right, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
      >
        Introduction to HTML
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of web content using elements and tags.
      </Typography>
    </Paper>

    <CodeExample
      title="Basic HTML Structure"
      description="Here's the basic structure of an HTML document:"
      language="html"
      initialCode={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`}
    />
  </Box>
);

const StructureLesson = () => (
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
          background: 'linear-gradient(to right, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
      >
        Document Structure
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        Every HTML document follows a specific structure that includes several key components:
      </Typography>

      <Box component="ul" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        <li>The DOCTYPE declaration</li>
        <li>The html element with language attribute</li>
        <li>The head section for metadata</li>
        <li>The body section for content</li>
      </Box>
    </Paper>

    <CodeExample
      title="Document Sections"
      description="Understanding the different sections of an HTML document:"
      language="html"
      initialCode={`<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Metadata goes here -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Content goes here -->
    <header>
        <nav>
            <!-- Navigation content -->
        </nav>
    </header>
    
    <main>
        <!-- Main content -->
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>`}
    />
  </Box>
);

const TextLesson = () => (
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
          background: 'linear-gradient(to right, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
      >
        Text Elements
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        HTML provides various elements for displaying and formatting text content, from headings to paragraphs and text formatting.
      </Typography>
    </Paper>

    <CodeExample
      title="Text Elements"
      description="Common HTML elements for text content:"
      language="html"
      initialCode={`<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>

<!-- Paragraphs -->
<p>This is a paragraph of text.</p>

<!-- Text Formatting -->
<strong>Bold text</strong>
<em>Italic text</em>
<mark>Highlighted text</mark>
<code>Code text</code>

<!-- Line Break and Horizontal Rule -->
<br>
<hr>

<!-- Blockquote -->
<blockquote>
    This is a quoted text block
</blockquote>

<!-- Preformatted Text -->
<pre>
    This text preserves
    whitespace and line breaks
</pre>`}
    />
  </Box>
);

const ListsLesson = () => (
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
          background: 'linear-gradient(to right, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
      >
        Lists & Tables
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        HTML provides various elements for creating lists and tables, including ordered and unordered lists, and definition lists.
      </Typography>
    </Paper>

    <CodeExample
      title="Lists"
      description="Common HTML elements for lists:"
      language="html"
      initialCode={`<!-- Ordered List -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<!-- Unordered List -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<!-- Definition List -->
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2</dt>
  <dd>Definition 2</dd>
</dl>`}
    />
  </Box>
);

const LinksLesson = () => (
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
          background: 'linear-gradient(to right, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
      >
        Links & Navigation
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        HTML provides various elements for creating links and navigation, including the anchor element and the navigation element.
      </Typography>
    </Paper>

    <CodeExample
      title="Links"
      description="Common HTML elements for links:"
      language="html"
      initialCode={`<!-- Anchor Element -->
<a href="https://www.example.com">Visit example.com</a>

<!-- Navigation Element -->
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>`}
    />
  </Box>
);

const MediaLesson = () => (
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
          background: 'linear-gradient(to right, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
      >
        Images & Media
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        HTML provides various elements for embedding images and other media, including the image element and the video element.
      </Typography>
    </Paper>

    <CodeExample
      title="Images"
      description="Common HTML elements for images:"
      language="html"
      initialCode={`<!-- Image Element -->
<img src="image.jpg" alt="An image">

<!-- Video Element -->
<video src="video.mp4" controls>
  Your browser does not support the video tag.
</video>`}
    />
  </Box>
);

const FormsLesson = () => (
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
          background: 'linear-gradient(to right, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
      >
        Forms & Input
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        HTML provides various elements for creating forms and input fields, including the form element and the input element.
      </Typography>
    </Paper>

    <CodeExample
      title="Forms"
      description="Common HTML elements for forms:"
      language="html"
      initialCode={`<!-- Form Element -->
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <input type="submit" value="Submit">
</form>`}
    />
  </Box>
);

const SemanticLesson = () => (
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
          background: 'linear-gradient(to right, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
      >
        Semantic HTML
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        HTML provides various semantic elements for defining the structure and meaning of web content, including the header, main, and footer elements.
      </Typography>
    </Paper>

    <CodeExample
      title="Semantic Elements"
      description="Common HTML semantic elements:"
      language="html"
      initialCode={`<!-- Header Element -->
<header>
  <nav>
    <!-- Navigation content -->
  </nav>
</header>

<!-- Main Element -->
<main>
  <!-- Main content -->
</main>

<!-- Footer Element -->
<footer>
  <!-- Footer content -->
</footer>`}
    />
  </Box>
);

const AccessibilityLesson = () => (
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
          background: 'linear-gradient(to right, #2563eb, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
      >
        Accessibility
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
        HTML provides various attributes and elements for improving the accessibility of web content, including the alt attribute and the aria-label attribute.
      </Typography>
    </Paper>

    <CodeExample
      title="Accessibility Attributes"
      description="Common HTML accessibility attributes:"
      language="html"
      initialCode={`<!-- Alt Attribute -->
<img src="image.jpg" alt="An image">

<!-- Aria-Label Attribute -->
<button aria-label="Close">X</button>`}
    />
  </Box>
);

const HTMLPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <LessonSidebar lessons={lessons} basePath="/html" />
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
          <Route path="structure" element={<StructureLesson />} />
          <Route path="text" element={<TextLesson />} />
          <Route path="lists" element={<ListsLesson />} />
          <Route path="links" element={<LinksLesson />} />
          <Route path="media" element={<MediaLesson />} />
          <Route path="forms" element={<FormsLesson />} />
          <Route path="semantic" element={<SemanticLesson />} />
          <Route path="accessibility" element={<AccessibilityLesson />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default HTMLPage;
