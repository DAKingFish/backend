import React from 'react'
import { observer, inject } from 'mobx-react'
import './index.less'
class Login extends React.Component {
  render() {
    return <div className='app-login'>
      <div className='login-body'>
        <div className='login-title'>用户登录</div>
        <div className='login-name'>
          用户名<i className='iconfont icon-yonghuming'></i>:
          <input placeholder='输入用户名' 
          />
        </div>
        <div className='login-password'>
          密码<i className='iconfont icon-mima'></i>:
          <input placeholder='请输入密码' 
           />
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