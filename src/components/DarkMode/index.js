import { useState } from 'react';
import './index.scss';

const DarkMode = () => {
  const [color, setColor] = useState(false);
  return (
    <div className="DarkModeButton">
      <button onClick={() => setColor(!color)}>DarkMode</button>
      <div className = {color}></div>
    </div>
  );
};

export default DarkMode ;