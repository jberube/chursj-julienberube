import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import './PhotoGalery.css';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Col, Button } from 'react-bootstrap';

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
            <div className="photo-galery-container">
                <InfiniteScroll
                    dataLength={images.length}
                    next={this.loadMore}
                    hasMore={true}
                    loader={<p>...</p>}
                >
                    {images.map(img => 
                        <Col key={img.id} xs={6} sm={4} md={3} lg={2}>
                            <img src={img.thumbnail.url} alt={img.title}/>
                        </Col>
                    )}
                </InfiniteScroll>
                {images.length ? <Button onClick={this.loadMore}>more...</Button> : null}
            </div>
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
