import React, { useEffect, useState } from 'react';
import Menu from './Menu';
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
      <div className='main-head'> 
        <h2>We Serve</h2>
        <p>Savor the Flavor: Where Culinary Delights Come Alive!</p>
      </div>
      <div className='section'>
      <Search search={search} clear={clear} searchValue={searchValue} categories={categories} filterCategories={filterCategories}/>
      {menu.length === 0 ? <p className='error-message'>OPPS! we dont serve that here ≡(▔﹏▔)≡</p> : ''}
      <div className='menu-section'>
        {menu.map(item => <Menu key={item.id} {...item}/>)}
      </div>
    </div>
    </main>
  );
}

export default App;
