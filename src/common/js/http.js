//引入axios
import Vue from 'vue'
import axios from 'axios'
import stroe from "../../store"
import router from "../../router"
import api from './api'
// 初始化请求域名
axios.defaults.baseURL = api.baseURL;
axios.interceptors.request.use( //header拦截器
    // 在发送请求之前做些什么
    config => {
        // const instance = axios.create()
        if (config['method'] == 'get') { //没有method的请求为get，判断为get请求
            if (config.params) {
                Object.assign(config.params, { //如果get请求本身带有参数，给options.params 再添加一个key值timestamp,值为时间戳
                    time: new Date().getTime()
                })
            } else {
                config.params = {};
                Object.assign(config.params, { //如果get请求本身带有参数，给options.params 再添加一个key值timestamp,值为时间戳
                    time: new Date().getTime()
                })
            }
        }
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        if (stroe.state.auth.token) {
            config.headers = {
                'token': stroe.state.auth.token,
                "X-Afagou-Version": 6.18,
                "X-Afagou-User-Agent": "Wap",
                "Accept": "application/json",
            }
        } else {
            config.headers = {
                "X-Afagou-Version": 6.18,
                "X-Afagou-User-Agent": "Wap",
                "Accept": "application/json",
            }
        }
        return config;
    },
    err => { // 对请求错误做些什么
        return Promise.reject(err);
    });

axios.interceptors.response.use(response => { // 对响应数据做点什么
    return response
}, err => { // 对响应错误做点什么
    if (err && err.response) {
        switch (err.response.status) {
            case 401:
                console.log("登陆过期");
                stroe.dispatch("auth/logout");
                router.push("/login");
                break;
            default:

        }
    } else {
    }
    // message.error(err.message)
    return Promise.resolve(err.response)
})
export {axios,api}