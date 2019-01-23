import React from 'react'
import './CharacterResults.css'

function CharacterResults(props) {
    const characters = props.characters.map((character, index) => (
        <li key={index}>
            <span className="bold">{character.name + ' '}</span> 
            ({character.actor}) 
            {' - ' + character.description}
        </li>
    ))
    return (
        <ul className="characterResults">
            {characters}
        </ul>
    )
}

export default CharacterResults
