import React from 'react'

function SearchBar(props) {
  return (
    <div className="searchBar">
        <input 
            type="text" 
            placeholder='Ex. Dale Cooper'
            onChange={e => props.searching(e)}
        />
    </div>
  )
}

export default SearchBar
