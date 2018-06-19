import React, { Component } from 'react';
import style from './style.css';
import FormStore from '../../stores/FormStore'
import { observer } from 'mobx-react';


@observer export default class Form extends Component {
    render() {
        return (
            <form className={style.main} onSubmit={FormStore.inHeader}>
                <input
                    type='text' placeholder='username'
                    className={style.inputText}
                    value={FormStore.username}
                    onChange={FormStore.inValue}
                />
                <input type='submit' className={style.button} />
            </form>
        )
    }
}
