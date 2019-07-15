import ajax from './ajax'
import { PassThrough } from 'stream';
import Password from 'antd/lib/input/Password';
const BASE = ''
//登录
export function reqLogin (username,password){
  return ajax({
        method:'POST',
        url:BASE +'/Login',
        data:{
            username,
            password
        }

    })
}

const name = 'admin'
const pwd = 'admin'
reqLogin(name , pwd).then(result =>{
    // const result = response.data
    console.log('请求成功了！！！', result)
}, error =>{
    console.log('请求失败了！！！', error)
})