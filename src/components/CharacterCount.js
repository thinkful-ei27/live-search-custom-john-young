import React from 'react'

function CharacterCount(props) {
  return (
    <div className="characterCount">
      <p>Number of characters: {props.characterLength}</p>
    </div>
  )
}

export default CharacterCount
