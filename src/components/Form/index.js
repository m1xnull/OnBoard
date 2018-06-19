import React, { Component } from 'react';
import style from './style.css';

export default class Form extends Component {
    render() {
        return (
            <form className={style.main} >
                <input
                    type='text' placeholder='username'
                    className={style.inputText}
                />
                <input type='submit' className={style.button} />
            </form>
        )
    }
}
