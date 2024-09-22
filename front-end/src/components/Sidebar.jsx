import { useState } from "react";
import {Link } from 'react-router-dom';
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? "w-40" : "w-80"
          } duration-300 flex bg-emerald-700 text-slate-200 h-screen`}
        >
          <h1>Logo</h1>
          <div className="flex flex-col mt-10  w-48 -ml-5 gap-4">
            
          <Link className="bg-emerald-600 h-10 rounded hover:bg-emerald-900 w-auto">sdf</Link>
          <Link className="bg-emerald-600">sdf</Link>
          <Link className="bg-emerald-600">sdf</Link>
          <Link className="bg-emerald-600">sdf</Link>
          </div>
        </div>
        <button
          className="rounded bg-purple-800 h-10 w-10"
          onClick={() => setOpen(!open)}
        >{`<`}</button>
      </div>
    </>
  );
};

export default Sidebar;
