import axios from 'axios';

import {
    START_SEARCH_IMAGES,
    DONE_SEARCH_IMAGES,
} from '../actionTypes';

const BASE_URL = 'https://api.flickr.com/services/rest/';
const FLICKR_API_KEY = 'b75a009cee4005c8157be53006653f82';

export const searchImages = searchTerm => dispatch => {
    dispatch(startSearchImages(searchTerm));

    // see: https://www.flickr.com/services/api/flickr.photos.search.html
    return axios.get(BASE_URL, {
        params: {
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            tags: searchTerm,
            sort: 'date-posted-desc',
            privacy_filter: '1',
            media: 'photos',
            per_page: '6',
            page: '1',
            format: 'json',
            nojsoncallback: '1',
            extras: 'url_q, url_o',
        },
    })
    .then(res => {
        const {stat, photos} = res.data;

        if (stat !== 'ok') {
            // TODO add error handling
            console.log('ERROR');
            return [];
        }

        return photos.photo.map(photo => ({
            id: photo.id,
            title: photo.title,
            thumbnail: {
                url: photo.url_q,
                width: photo.width_q,
                height: photo.height_q,
            },
            original: {
                url: photo.url_o,
                width: photo.width_o,
                height: photo.height_o,
            },
        }));
    })
    .then(photos => {
        dispatch(doneSearchImages(1, photos));
    }, err => {
        console.error(err);
        throw new Error(`failed to retreive photos for searchTerm ${searchTerm}`);
    });
};

const startSearchImages = (searchTerm) => ({
    type: START_SEARCH_IMAGES,
    searchTerm,
});

const doneSearchImages = (page, images) => ({
    type: DONE_SEARCH_IMAGES,
    page,
    images,
});
