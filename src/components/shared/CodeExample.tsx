import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Box, Paper, Typography, Grid, IconButton, Tooltip, Fade } from '@mui/material';
import { Preview as PreviewIcon, Code as CodeIcon } from '@mui/icons-material';

SyntaxHighlighter.registerLanguage('html', html);

interface CodeExampleProps {
  initialCode: string;
  language: string;
  title: string;
  description?: string;
  isEditable?: boolean;
}

const CodeExample = ({ 
  initialCode, 
  language, 
  title, 
  description, 
  isEditable = true 
}: CodeExampleProps) => {
  const [code, setCode] = useState(initialCode);
  const [showPreview, setShowPreview] = useState(true);

  const handleCodeChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
    }
  };

  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 4,
        my: 4,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        background: 'linear-gradient(to bottom, #ffffff, #f8fafc)'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}>
            {title}
          </Typography>
          {description && (
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          )}
        </Box>
        <Tooltip 
          title={showPreview ? "Show Code Only" : "Show Preview"} 
          TransitionComponent={Fade}
          placement="left"
        >
          <IconButton 
            onClick={() => setShowPreview(!showPreview)}
            color="primary"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
              width: 40,
              height: 40,
            }}
          >
            {showPreview ? <CodeIcon /> : <PreviewIcon />}
          </IconButton>
        </Tooltip>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={showPreview ? 6 : 12}>
          <Paper
            elevation={0}
            sx={{
              height: 300,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              overflow: 'hidden',
              '& .monaco-editor': {
                paddingTop: 1,
              },
            }}
          >
            {isEditable ? (
              <Editor
                height="100%"
                defaultLanguage={language}
                defaultValue={code}
                onChange={handleCodeChange}
                theme="vs-light"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  padding: { top: 8 },
                  scrollBeyondLastLine: false,
                }}
              />
            ) : (
              <SyntaxHighlighter 
                language={language} 
                style={docco}
                customStyle={{
                  margin: 0,
                  padding: '1rem',
                  height: '100%',
                }}
              >
                {code}
              </SyntaxHighlighter>
            )}
          </Paper>
        </Grid>
        
        {showPreview && (
          <Grid item xs={12} lg={6}>
            <Paper
              elevation={0}
              sx={{
                height: 300,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                p: 3,
                overflow: 'auto',
                bgcolor: 'background.paper',
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: code }} />
            </Paper>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default CodeExample;
