import axios from 'axios';

export default class BaseApi {
    headers = '';
    constructor() {
        this.generateRequestHeader();
    }


    generateRequestHeader = () => {
        let token = localStorage.token;
        this.header = {
            'authorization': 'Bearer ' + token
        }
    }
    handleError = (err)=>{
        console.log(err);
    }
    postRequest = (url, data) => {
        return new Promise((resolve, reject)=>{
          axios.post(process.env.HOST_API + url, data).then((response)=>{
              resolve(response.data);
          }).catch(err=>{
              this.handleError(err)
            //   message.error(err.message);
              reject(err);
          })
        })
        
    }
}