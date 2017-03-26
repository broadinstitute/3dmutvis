import React from 'react';
import {Provider} from 'mobx-react'

import './login.css';

import LoginStore from './LoginStore';
import LoginLayout from './LoginLayout';

const loginStore = new LoginStore();
loginStore.initializeDummyData();

export default class Login extends React.Component {
    render() {
    return <Provider loginStore={loginStore}>
            <LoginLayout/>
         </Provider>;

    }
}
