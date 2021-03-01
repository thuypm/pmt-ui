import axios from 'axios';
import { HTTP_CODE_RESPONSE } from '../utils/constants';

async function handleError(err) {
    switch(err.status){
        case HTTP_CODE_RESPONSE.NOT_FOUND:{
           
            break;
        }
    }
}
export async function generateHeader() {
    let token = localStorage.token;
    let headers = {
        'authorization': 'Bearer ' + token
    }
    return headers
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