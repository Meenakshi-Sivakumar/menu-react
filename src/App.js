import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Search from './Search';
import items from './data';
const allCategories = ['All', ...new Set(items.map(item => item.category))];

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const search = (event) => {
      const searchValue = event.target.value.trim();
      if(searchValue === ''){
        setMenu(items);
        return;
      }
      const newMenu = menu.filter(item => {
        return item.title.includes(searchValue.toLowerCase()) || item.category.includes(searchValue.toLowerCase());
      })
      setMenu(newMenu);
  }
  const filterCategories = (category) => {
    if(category === 'All') {
      setMenu(items);
      return;
    }

    const newItem = items.filter(item => item.category === category);
    setMenu(newItem);
    return;
  }
  
  return (
    <main>
    <div className='section'>
      <h2>We Serve</h2>
      <p>Savor the Flavor: Where Culinary Delights Come Alive!</p>
      <Search search={search} />
      <div className='categories'>
        <Categories categories={categories} filterCategories={filterCategories}/>
      </div>
      <div className='menu-section'>
        {menu.length === 0 ? <p>OPPS! we dont serve that here</p> : ''}
        {menu.map(item => <Menu key={item.id} {...item}/>)}
      </div>
    </div>
    </main>
  );
}

export default App;
