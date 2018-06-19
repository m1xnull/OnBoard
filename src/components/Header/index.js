
import React, { Component } from 'react'
import style from './style.css'
import { observer } from 'mobx-react';
import FormStore from './../../stores/FormStore';

@observer export default class Header extends Component {
  render() {
    return (
      <h1 className={style.text}>Welcome on, {FormStore.header}</h1>
    )
  }
}
