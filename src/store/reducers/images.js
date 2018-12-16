import { START_SEARCH_IMAGES, DONE_SEARCH_IMAGES, START_FETCH_PAGE } from '../actionTypes';

const initialState = {
    searchTerm: '',
    images: [],
    currentPage: 1,
    fetching: false,
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
                fetching: false,
                images: state.images.concat(action.images),
                currentPage: action.pageNumber,
            };
        case START_FETCH_PAGE:
            return {
                ...state,
                fetching: true,
                currentPage: action.pageNumber,
            };
        default:
            return state;
    }
};

export default images;
