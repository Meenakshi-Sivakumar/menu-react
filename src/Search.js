import React from "react";
import Categories from './Categories';
import { MdClear } from "react-icons/md";

const Search = ({search, clear, searchValue, categories, filterCategories}) => {
    return (
    <div className='search-block'>
        <div className="search-bar">
            <input type='text' placeholder='search...' value={searchValue} onChange={search}></input>
            <button onClick={clear}> <MdClear className="icon"/> </button>
        </div>
        <Categories categories={categories} filterCategories={filterCategories}/>
    </div>
    );
}

export default Search;