import React from 'react'
import './index.less'
import { Nav } from 'react-ryui'
class Left extends React.Component {
  state = {
    menu: [{
      key: '1',
      icon: 'iconfont icon-lingdang',
      label: '个人中心',
      subMenu: [{
        key: '1-2',
        icon: 'iconfont icon-zhankaifumulu',
        label: '我的信息'
      }, {
        key: '1-3',
        icon: 'iconfont icon-zhankaifumulu',
        label: '个人中心'
      }, {
        key: '1-4',
        icon: 'iconfont icon-zhankaifumulu',
        label: '我的提交'
      }]
    }, {
      key: '2',
      icon: 'iconfont icon-user',
      label: '用户管理'
    }, {
      key: '3',
      icon: 'iconfont icon-gouwucheman',
      label: '信息中心'
    }]
  }
  render() {
    return <div className='app-left'>
      <Nav
        dark
        style={{ width: 200, height: 300 }}
        model="menu"
        navList={this.state.menu}
        menuClick={
          (openkey, selectKey) => {
            console.log(openkey, selectKey)
          }
        }
        openKey={['1']}
        selectKey={['1-3']}
      />
    </div>
  }
}
export {
  Left
}