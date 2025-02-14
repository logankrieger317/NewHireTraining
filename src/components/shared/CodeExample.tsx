import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
    <div className="bg-white rounded-lg shadow-md p-4 my-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="mb-4 text-gray-600">{description}</p>}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-[300px] border rounded">
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
              }}
            />
          ) : (
            <SyntaxHighlighter 
              language={language} 
              style={docco}
              className="h-full overflow-auto"
            >
              {code}
            </SyntaxHighlighter>
          )}
        </div>
        
        {showPreview && language === 'html' && (
          <div className="border rounded p-4 h-[300px] overflow-auto">
            <div 
              dangerouslySetInnerHTML={{ __html: code }} 
              className="preview-container"
            />
          </div>
        )}
      </div>
      
      {language === 'html' && (
        <button
          onClick={() => setShowPreview(!showPreview)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {showPreview ? 'Hide Preview' : 'Show Preview'}
        </button>
      )}
    </div>
  );
};

export default CodeExample;
