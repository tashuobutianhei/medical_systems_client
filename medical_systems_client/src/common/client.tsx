
import axios from 'axios';
import Tool from '../common/util';

const client = axios.create({
  baseURL: 'http://localhost:3000', 
  timeout: 2000, // request timeout
  headers: {
    // 'Content-Type': 'application/json'
  }
})

client.interceptors.request.use(function (config) {
  config.withCredentials = true;
  if (Tool.getCookie('the_docters_token')) {
    config.headers = {
      "Authorization": `Bearer ${Tool.getCookie('the_docters_token')}`
    }
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});


client.interceptors.response.use(
  response => {
   return response
  },
  error => {
   return Promise.reject(error)
  }
);


export function get (url: string, params: object) {
  return new Promise((resolve,reject) => {
    client.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })

}

export function post (url: string, data: object) {
  return new Promise((resolve,reject) => {
    client({
      method: 'post',
      url: url,
      headers: { "Content-Type": "application/x-www-from-urlencoded" },
      data: Tool.transformData(data)
    }).then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
  })
}

