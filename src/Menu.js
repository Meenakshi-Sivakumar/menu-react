import React from 'react';

const Menu = ({id, img, title, desc, price}) => {
  return (
    <div className='menu-item'> 
      <img src={img} />
      <div className='menu-item-content'>
        <div className='menu-block-header'>
        <h3>{title}</h3><span>${price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Menu;
