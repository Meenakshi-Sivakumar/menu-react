import React, { useEffect, useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Search from './Search';
import items from './data';
const allCategories = ['All', ...new Set(items.map(item => item.category))];

function App() {

  const [menu, setMenu] = useState(items);
  const [searchValue, setSearchValue] = useState('');
  const [categories, setCategories] = useState(allCategories);
  useEffect(()=>{
    if(searchValue.length === 0 && categories) {
      setMenu(items);
    }
  },[searchValue]);



  const clear = () => {
    setSearchValue('');
    setMenu(items);
  }

  const search = (event) => {
      setSearchValue(event.target.value);
      searchHandler(searchValue);
  }

  const searchHandler = (searchValue) => {
    const newMenu = items.filter(item => {
      return item.title.includes(searchValue.toLowerCase().trim()) || item.category.includes(searchValue.toLowerCase().trim());
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
      <p className='error-message'>Savor the Flavor: Where Culinary Delights Come Alive!</p>
      <Search search={search} clear={clear} searchValue={searchValue}/>
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
