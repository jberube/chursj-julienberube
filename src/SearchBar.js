import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div class="search-bar-container">
                <input type="text" placeholder="keyword" />
            </div>
        );
    }
}

export default SearchBar;
