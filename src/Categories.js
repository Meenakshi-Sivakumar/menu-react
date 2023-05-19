import React from 'react';

const Categories = ({categories, filterCategories}) => {
  let index = 0;
  return (
    <div className='categories'>
    {categories.map(category => {
      return (
        <button key={index++} onClick={()=>filterCategories(category)} autoFocus={category === 'All'} >{category}</button>
      );
    })}
    </div>
  );
};

export default Categories;
