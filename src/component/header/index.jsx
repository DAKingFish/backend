import React from 'react'
import { Nav } from 'react-ryui'
import './index.less'
class Header extends React.Component {
  state = {
    navList: [{
      key: Math.random(),
      label: <span>通用</span>,
      active: true
    }, {
      key: Math.random(),
      label: <span>布局</span>,
      active: false
    }, {
      key: Math.random(),
      label: <span>导航</span>,
      active: false
    }]
  }
  render() {
    return <div className='app-nav'>
      <Nav
        dark
        logo={
          <i className="iconfont icon-fenlei-yingxionglianmeng" style={{ fontSize: 30, color: 'var(--theme-color)' }} />
        }
        navList={this.state.navList}
        menuClick={
          (nav) => {
            console.log(nav)
          }
        }
      />
    </div>
  }
}
export {
  Header
}