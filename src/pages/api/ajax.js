import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'

//添加请求拦截器
axios.interceptors.request.use((config)=>{
    const { method ,data } = config
    //如果携带的是 post 请求 进行处理
    if(method.toLowerCase() === 'post' && data === 'object'){
        config.data = qs.stringify(data)
    }
    return config
})

//添加一个响应拦截器
axios.interceptors.response.use(response=>{
    //返回 response 中的 data 数据 ， 这样请求成功的数据就是 data 了
    return  response.data
}, error =>{ // 请求异常
    //提示错误
    message.error('请求异常，status :' + error.data)
    //返回一个 pending 的 promrse 链
    return new Promise(()=>{})
})

export default axios