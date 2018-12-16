import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class SearchBar extends Component {
    constructor () {
        super();
        this.state = {
            searchTerm: '',
        };
        autoBind(this);
    }

    handleKeyPressed (evt) {
        // console.log(`handleKeyPressed ${evt.key}`);
        if (evt.key !== 'Enter') {
            return;
        }

        this.props.onSearch(this.state.searchTerm);
    }

    handleChange (evt) {
        // console.log(`handleChange ${evt.target.value}`);
        this.setState({ searchTerm: evt.target.value });
    }

    render() {
        return (
            <div className="search-bar-container">
                <input 
                    type="text"
                    placeholder="keyword"
                    onKeyPress={this.handleKeyPressed}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
