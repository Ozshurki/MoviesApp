import React from 'react'

interface Props {
    searchValueChanged: (movie: string) => void;
}

const SearchBar: React.FC<Props> = (props) => {

    return (
        <input className="search-input"
               type="text"
               placeholder="Search..."
               onChange={(event) =>{props.searchValueChanged(event.target.value)}}/>
    )
}

export default SearchBar