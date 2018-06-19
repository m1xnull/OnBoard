
import React, { Component } from 'react'
import style from './style.css'

export default class Header extends Component {
  render() {
    return (
      <h1 className={style.text}>Welcome on board, 'username'</h1>
    )
  }
}
