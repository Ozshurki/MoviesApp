import React from 'react'

interface Props {
    setSearchValue: (movie: string) => void;
}

const SearchBar: React.FC<Props> = ({setSearchValue}) => {

    return (
        <input className="search-input"
               type="text"
               placeholder="Search..."
               onChange={(event) =>{setSearchValue(event.target.value)}}/>
    )
}

export default SearchBar