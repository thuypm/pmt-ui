import axios from 'axios';
import * as querystring from 'querystring';


import { HTTP_CODE_RESPONSE } from '../utils/constants';

// axios.defaults.withCredentials = true;
async function handleError(err) {
    switch (err.status) {
        case HTTP_CODE_RESPONSE.NOT_FOUND: {

            break;
        }
    }
}
export  function generateHeader() {
    let token = localStorage.token;
    let headers = {
        'authorization': 'Bearer ' + token,
        "Content-Type": "application/json;charset=UTF-8"
    };
    return headers
}
export async function getRequest(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_HOST_API + url, {
            params: params,
            paramsSerializer: (params) => {
                return querystring.stringify(params, { arrayFormat: "brackets" });
            },
            headers:  generateHeader(),
        }).then((response) => {
            resolve(response.data);
        }).catch(err => {
            handleError(err.response)
            reject(err.response?.data);
        })
    })
}
export async function postRequest(url, params,) {
    return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_HOST_API + url, params, { headers: generateHeader() }).then((response) => {
            resolve(response.data);
        }).catch(err => {
            handleError(err.response)
            reject(err.response?.data);
        })
    })
}