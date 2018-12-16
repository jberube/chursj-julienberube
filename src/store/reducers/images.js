import { START_SEARCH_IMAGES, DONE_SEARCH_IMAGES } from '../actionTypes';

const initialState = {
    searchTerm: '',
    images: [],
    currentPage: 0,
};

const images = (state = initialState, action) => {
    switch (action.type) {
        case START_SEARCH_IMAGES:
            return {
                ...initialState,
                searchTerm: action.searchTerm,
            };
        case DONE_SEARCH_IMAGES:
            return {
                ...state,
                images: state.images.concat(action.images),
                currentPage: action.page,
            };
        default:
            return state;
    }
};

export default images;
