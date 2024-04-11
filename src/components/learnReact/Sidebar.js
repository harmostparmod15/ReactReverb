import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-3/12  font-jakarta overflow-y-scroll    h-screen sticky   top-20">
      <h1 className="text-3xl font-bold bg-slate-100 py-4 px-8">Content</h1>
      <ul>
        <Link to={"/learn/react-basic"}>
          <li className="bg-slate-100 py-4 px-8 my-2">React Fundamentals</li>
        </Link>
        <Link to={"/learn/bundlers"}>
          <li className="bg-slate-100 py-4 px-8 my-2">Bundlers</li>
        </Link>
        <li className="bg-slate-100 py-4 px-8 my-2">Functional Components</li>
        <li className="bg-slate-100 py-4 px-8 my-2">JSX</li>
        <li className="bg-slate-100 py-4 px-8 my-2">Styling and Props</li>
        <li className="bg-slate-100 py-4 px-8 my-2">React File Structure</li>
        <li className="bg-slate-100 py-4 px-8 my-2">State variables</li>
        <li className="bg-slate-100 py-4 px-8 my-2">UseEffect Hook</li>
        <li className="bg-slate-100 py-4 px-8 my-2">Routing in React</li>
        <li className="bg-slate-100 py-4 px-8 my-2">Class Based Components</li>
        <li className="bg-slate-100 py-4 px-8 my-2">Making our own Hooks</li>
        <li className="bg-slate-100 py-4 px-8 my-2">
          Using Tailwind with React
        </li>
        <li className="bg-slate-100 py-4 px-8 my-2">React Context</li>
        <li className="bg-slate-100 py-4 px-8 my-2">Redux</li>
        <li className="bg-slate-100 py-4 px-8 my-2">Testing with jest</li>
      </ul>
    </div>
  );
};

export default Sidebar;
