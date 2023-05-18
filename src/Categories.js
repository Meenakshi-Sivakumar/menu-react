import React from 'react';

const Categories = ({categories, filterCategories}) => {
  let index = 0;
  return (
    <div>
    {categories.map(category => {
      return (
        <button key={index++} className='btn' onClick={()=>filterCategories(category)}>{category}</button>
      );
    })}
    </div>
  );
};

export default Categories;
