import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import './PhotoGalery.css';

import {Row, Col, Button} from 'react-bootstrap';

class PhotoGalery extends Component {
    constructor () {
        super();
        autoBind(this);
    }

    loadMore() {
        const {onFetchPage, searchTerm, pageNumber} = this.props;
        onFetchPage(searchTerm, pageNumber + 1);
    }

    render() {
        const {images} = this.props;

        return (
            <Row className="photo-galery-container">
                {images.map(img => 
                    <Col key={img.id} xs={6} sm={4} md={3} lg={2}>
                        <img src={img.thumbnail.url} alt={img.title}/>
                    </Col>
                )}
                <Button onClick={this.loadMore}>more...</Button>
            </Row>
        );
    }
}

PhotoGalery.propTypes = {
    images: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired,
    onFetchPage: PropTypes.func.isRequired,
};

export default PhotoGalery;
