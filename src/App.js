import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchImages } from './store/actions/images';

import './App.css';
import SearchBar from './SearchBar';

class App extends Component {
    render() {
        const {images, onSearch} = this.props;

        return (
            <div className="App">
                <SearchBar onSearch={onSearch} />
                <div>
                    {images.map(img => <img key={img.id} src={img.thumbnail.url} alt={img.title}/>)}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    // redux
    images: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    images: state.images.images,
});

const mapDispatchToProps = dispatch => ({
    onSearch: searchTerm => dispatch(searchImages(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
