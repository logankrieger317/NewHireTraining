import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">WebDev Training</Link>
        <ul className="flex space-x-6">
          <li><Link to="/html" className="hover:text-blue-300">HTML</Link></li>
          <li><Link to="/css" className="hover:text-blue-300">CSS</Link></li>
          <li><Link to="/javascript" className="hover:text-blue-300">JavaScript</Link></li>
          <li><Link to="/react" className="hover:text-blue-300">React</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
