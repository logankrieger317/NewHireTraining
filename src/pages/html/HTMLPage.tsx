import { useState } from 'react';
import Layout from '../../components/layout/Layout';
import CodeExample from '../../components/shared/CodeExample';

const lessons = [
  {
    id: 1,
    title: 'HTML Basics',
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Introduction to HTML</h2>
        <p className="mb-4">
          HTML (HyperText Markup Language) is the standard markup language for creating web pages.
          It describes the structure of a web page using various elements and tags.
        </p>
        
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
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Common HTML Elements</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings</li>
          <li><code>&lt;p&gt;</code> - Paragraphs</li>
          <li><code>&lt;a&gt;</code> - Links</li>
          <li><code>&lt;img&gt;</code> - Images</li>
          <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code> - Lists</li>
        </ul>
        
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
      </>
    )
  },
  // More lessons will be added here
];

const HTMLPage = () => {
  const [currentLesson, setCurrentLesson] = useState(0);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">HTML Course</h1>
          <p className="text-gray-600">
            Learn the fundamentals of HTML and start building web pages from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-md h-fit">
            <h2 className="font-semibold mb-4">Lessons</h2>
            <ul className="space-y-2">
              {lessons.map((lesson, index) => (
                <li key={lesson.id}>
                  <button
                    onClick={() => setCurrentLesson(index)}
                    className={`w-full text-left px-3 py-2 rounded ${
                      currentLesson === index
                        ? 'bg-blue-500 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {lesson.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 bg-white p-6 rounded-lg shadow-md">
            {lessons[currentLesson].content}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HTMLPage;
