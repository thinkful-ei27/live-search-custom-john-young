import React, { Component } from 'react'
import SearchBar from './components/SearchBar';
import CharacterCount from './components/CharacterCount';
import CharacterResults from './components/CharacterResults';
import peaks from './peaks.json'

export default class LiveSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: peaks,
            searchValue: ''
        }
    }
    handleSearchValueChange(e) {
        this.setState({searchValue: e.target.value})
    }

    render() {
        const characters = this.state.characters;
        const searchTerm = new RegExp(this.state.searchValue, 'i');
        const filteredChars = characters.filter(character => character.name.match(searchTerm))
        return (
            <section>
                <SearchBar searching={e => this.handleSearchValueChange(e)}/>
                <CharacterCount />
                <CharacterResults characters={filteredChars}/>
            </section>
        )
    }
}
