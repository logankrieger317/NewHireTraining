import Layout from '../components/layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to Web Development Training</h1>
        <p className="text-lg mb-8">
          Start your journey to becoming a web developer! Choose your learning path:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">HTML</h2>
            <p className="mb-4">Learn the building blocks of web pages. Start here if you're new to web development.</p>
            <a href="/html" className="text-blue-500 hover:underline">Start HTML →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-purple-600">CSS</h2>
            <p className="mb-4">Style your web pages and make them beautiful. Continues from HTML basics.</p>
            <a href="/css" className="text-purple-500 hover:underline">Start CSS →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-yellow-600">JavaScript</h2>
            <p className="mb-4">Add interactivity to your websites. Learn programming basics with JavaScript.</p>
            <a href="/javascript" className="text-yellow-600 hover:underline">Start JavaScript →</a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-green-600">React</h2>
            <p className="mb-4">Build modern web applications with React. Requires JavaScript knowledge.</p>
            <a href="/react" className="text-green-500 hover:underline">Start React →</a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
