import React , { Component } from 'react'
import logo from '../../asssts/images/logo.png'
import {Form,Button,Input,Icon} from 'antd'
import './login.less'

const Item = Form.Item

class Login extends Component{
    

    Login = e =>{
        //阻止事件默认行为
        e.preventDefault()
        
        
        this.props.form.validateFields((err,values)=>{
            if(!err){
                const {username,passwrod} = values
                console.log('提交登陆请求', username, passwrod)
            }else{
                console.log(err)
            }
        })
    }
    
    validator = (rule , value , callback)=>{
       const length = value && value.length
       const pwdReg = /^[a-zA-Z0-9_]+$/ 
       if(!value){
            callback('密码不能为空')
       }else if(length < 4){
            callback('密码不能小于4位')
       }else if(length > 12){
            callback('密码不能小于4位')
       }else if(!pwdReg.test(value)){
            callback('密码必须是英文、数组或下划线组成')    
       }else{
           callback()
       }
    }

        
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={ logo } alt=""/> 
                    <h1>后台管理系统</h1>   
                </header> 
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.Login} className="login-form">
                        <Item>
                        {getFieldDecorator('username', {
                            rules: [
                                { required: true,whitespace:true, message: '用户名不能为空' },
                                { min: 4,message:'用户名不能小于4位'},
                                { max: 12,message:'用户名不能大于12位'},
                                {package:/^[a-zA-Z0-9_]+$/,message:'用户名必须是英文、数组或下划线组成'}
                            ],
                          })(
                            <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  
                                placeholder="用户名" />
                                 )}
                           
                        </Item>
                        <Item>
                        {getFieldDecorator('password', {
                            rules: [{ validator:this.validator }],
                          })(
                            <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  
                               type="password"  placeholder="密码" />
                                 )}
                            
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        </Item>
                    </Form>
                </section>   
            </div>
             
        )
    }
    
}
            const WrappedNormalLoginForm = Form.create()(Login);
            export default WrappedNormalLoginForm

            // const result = await reqLogin(username,passwrod)
            //     if(result.status === 0){
            //         //登录成功
            //         message.success('登录成功！！！')
            //         const user = result.data //保存user
            //         memoryUtils.user = user //保存在内存中
            //         storageUtils.saveUser(user) //保存在local中

            //         //跳转到管理界面不需要在回退到登录界面
            //         this.props.history.replace('/')
            //     }else{
            //         //提示错误信息
            //         message.error(result.msg)
            //     }