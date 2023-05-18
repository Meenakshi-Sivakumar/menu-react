import React from 'react';

const Menu = ({id, img, title, desc, price}) => {
  return (
    <div className='menu'> 
      <img src={img} />
      <div className='menu-block-header'>
      <h3>{title}</h3><span>${price}</span>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Menu;
