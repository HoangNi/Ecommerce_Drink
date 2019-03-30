import * as types from './../constants/ActionTypes'

var initialState = {
    all: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_LIST_ALL:
            console.log(action.payload);
            return Object.assign({}, state, {
                all: action.payload
            })
        default:
            return state;
    }
}
