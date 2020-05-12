import React from 'react'
import { Header } from './header/nav'
import { Left } from './left/left'
import { Right } from './right/right'
import './index.less'
class Home extends React.Component {
  render() {
    return <div className='app-home'>
      <div className='body-nav'>
        <Header />
      </div>
      <div className='body-content'>
        <div className='body-left'>
          <Left />
        </div>
        <div className="body-right">
          <Right />
        </div>
      </div>
    </div>
  }
}
export {
  Home
}