import axios from 'axios'
const service = axios.create({
  baseURL:'http://11.0.1.238:9999/',//11.0.1.90:9090//12.0.0.253:9090
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000 // request timeout
})

export default service
