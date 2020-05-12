import React from 'react'
import { Header } from './header'
import { Left } from './left'
import { Right } from './right'
import './index.less'
class Home extends React.Component {
  render() {
    return <div className='app-home'>
      <div className='body-header'>
        <Header />
      </div>
      <div className='body-left'>
        <Left />
      </div>
      <div className="body-right">
        <Right />
      </div>
    </div>
  }
}
export {
  Home
}