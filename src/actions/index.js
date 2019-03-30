import * as types from './../constants/ActionTypes'
import axios from 'axios';
const API = "http://5c9c93615ee0830014b71a06.mockapi.io/products/";

export function getListAll() {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `${API}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            dispatch({
                type: types.REQUEST_LIST_ALL,
                payload: response.data
            })
        }).then(function (error) {
        })
    }
}