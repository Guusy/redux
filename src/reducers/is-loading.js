import { OPEN_MODAL, CLOSE_MODAL } from '../actions-types/index';
import { Map as map } from 'immutable';
import { IS_LOADING } from '../actions-types/index';

const initialState =
    map({
        active: false
    });

function isLoading(state = initialState, action) {
    switch (action.type) {

        case IS_LOADING:
            return state.set('active', action.payload);

        default:
            return state
    }

}

export default isLoading;