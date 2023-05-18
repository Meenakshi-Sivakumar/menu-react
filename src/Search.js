import React from "react";
import { MdClear } from "react-icons/md";

const Search = ({search, clear, searchValue}) => {
    return (
    <div className='search-block'>
        <input type='text' placeholder='search...' value={searchValue} onChange={search}></input>
        <button onClick={clear}> <MdClear /> </button>
    </div>
    );
}

export default Search;