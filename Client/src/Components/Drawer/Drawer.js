import React, { useState } from 'react';
import '../../Styles/Components/Drawer.scss';

function Drawer() {
  const [show, setShow] = useState(false);

  const kapat = () => {
    setShow(false);
  };

  return (
    <div className={`drawer-container ${show ? 'show' : ''}`}>
      <input type="checkbox" id="drawer-toggle" style={{ display: 'none' }} />
      <label htmlFor="drawer-toggle" className="drawer-button">&#9776;</label>
      <div className="drawer">
        <label htmlFor="drawer-toggle" className="close-button" onClick={kapat}>&times;</label>
        <ul>
          <li><a href="#">#Tatlı</a></li>
          <li><a href="#">#Yorum</a></li>
          <li><a href="#">#Sütlaç</a></li>
          <li><a href="#">#Tiramusu</a></li>
          <li><a href="#">#Ozak Kabak</a></li>
          <li><a href="#">#Tatlı</a></li>
          <li><a href="#">#Yorum</a></li>
          <li><a href="#">#Sütlaç</a></li>
          <li><a href="#">#Tiramusu</a></li>
          <li><a href="#">#Ozak Kabak</a></li>
          <li><a href="#">#Tatlı</a></li>
          <li><a href="#">#Yorum</a></li>
          <li><a href="#">#Sütlaç</a></li>
          <li><a href="#">#Tiramusu</a></li>
          <li><a href="#">#Ozak Kabak</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
