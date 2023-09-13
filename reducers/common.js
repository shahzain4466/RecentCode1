import {
    LOGOUT,
} from '../actions/types';

const initialState = {
    hideBottomTabs: false,
    isScrollableScreen: false
};

const common = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default common;
