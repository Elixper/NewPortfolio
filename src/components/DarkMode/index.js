import { useState } from 'react';
import './index.scss';

const DarkMode = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
    <div className="DarkModeButton">
      <button className ={toggle?"dark test":"light test"} onClick={() => setToggle(!toggle)}>DarkMode</button>
    </div>
    <div className ={toggle?"dark test":"light test"}></div>
    </>
  );
};

export default DarkMode;
