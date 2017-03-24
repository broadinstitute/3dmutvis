import React from 'react';
import {Provider} from 'mobx-react'

import './login.css';

import LoginStore from './LoginStore';
import LoginLayout from './LoginLayout';
const mountNode = document.getElementById('root');
const ninjaLoginStore = new LoginStore();
ninjaLoginStore.initializeDummyData();

export default class Login extends React.Component {
    render() {
    return <Provider loginStore={ninjaLoginStore}>
            <LoginLayout/>
        </Provider>;

    }
}
