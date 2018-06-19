import React, { Component } from "react";
import Logo from "!react-svg-loader!../assets/logo.svg"
import Header from '../Header'
import '../../style.css'
import style from './style.css'
import Form from '../Form'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.cover}>
                        <Logo />
                        <Header value='Welcome on board,' />
                    </div>
                    <Form />
                </div>
            </div>
        );
    }
}

