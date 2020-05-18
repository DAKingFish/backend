import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
import { Input, Button} from 'react-ryui'
class Login extends React.Component {
  render() {
    return <div className='app-login'>
      <div className='login-body'>
        <div className='login-title'>
          <h2>Backend</h2>
          <p>金圆官方出品的单页面后台管理模板系统</p>
          </div>
        <div className='login-name'>
          <i className='iconfont icon-yonghuming'></i>
          <input placeholder='输入用户名'
          />
        </div>
        <div className='login-password'>
         <i className='iconfont icon-mima'></i>
          <input placeholder='请输入密码'
          />
        </div>
        <div className='login-verification-code'>
        <i className='iconfont icon-anquandunpai'></i>
          <input placeholder='图形验证码'
          />
          <img src="https://www.oschina.net/action/user/captcha"></img>
        </div>
        <div className='login-button'>
          <button>登录</button>
        </div>
      </div>
    </div>
  }
}
export {
  Login
}