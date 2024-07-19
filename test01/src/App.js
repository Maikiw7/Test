import './App.css';
import React, { useState } from 'react';

function Color() {
  const colors = ['red', 'green', 'blue'];
  const [color, setColor] = useState('white');
  const [colorHistory, setColorHistory] = useState([]);

  const handleClick = (color) => {
    setColor(color);
    setColorHistory([color, ...colorHistory]);
  };
  return (
    <div className="App">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => handleClick(color)}
          style={{backgroundColor: color, color: 'white', margin: '5px',padding: '15px 25px', border: 'none', cursor: 'pointer'}}
        >
        </button>
      ))}
      <div className="color-box" style={{backgroundColor: color, width: '100px', height: '100px', marginTop: '20px'}}></div>
      
      <table>
        <thead>
          <tr>
            <th>ครั้งที่</th>
            <th>สี</th>
          </tr>
        </thead>
        <tbody>
          {colorHistory.map((color, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Color;