import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({search}) => {
    return (
    <div className='search-block'>
        <input type='text' placeholder='search...' onChange={search}></input>
        <button > <BsSearch /> </button>
    </div>
    );
}

export default Search;