import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { searchImages, fetchImagesPage } from '../store/actions/images';

import './App.css';
import SearchBar from '../components/SearchBar';
import PhotoGalery from '../components/PhotoGalery';

class App extends Component {
    render() {
        const {
            images,
            searchTerm,
            pageNumber,
            onSearch,
            onFetchPage
        } = this.props;

        return (
            <div className="App">
                <Row>
                    <Col xs={12}>
                        <SearchBar onSearch={onSearch} />
                    </Col>
                </Row>
                
                <Row>
                    <PhotoGalery
                        images={images}
                        searchTerm={searchTerm}
                        pageNumber={pageNumber}
                        onFetchPage={onFetchPage}
                    />
                </Row>
            </div>
        );
    }
}

App.propTypes = {
    images: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired,
    onSearch: PropTypes.func.isRequired,
    onFetchPage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    images: state.images.images,
    searchTerm: state.images.searchTerm,
    pageNumber: state.images.currentPage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSearch: searchTerm => dispatch(searchImages(searchTerm)),
    onFetchPage: (searchTerm, pageNumber) => dispatch(fetchImagesPage(searchTerm, pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
