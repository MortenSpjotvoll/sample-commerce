import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const location = useLocation();
  let navigate = useNavigate();
  return (
  <div
    className={`${size} menu-item`}
    onClick={() => navigate(`${location.pathname}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content noselect'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)};

export default MenuItem;