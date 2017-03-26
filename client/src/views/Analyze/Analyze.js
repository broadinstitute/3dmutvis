import React from 'react';
import {Provider} from 'mobx-react'

import './login.css';

import AnalyzeStore from './AnalyzeStore';
import AnalyzeLayout from './AnalyzeLayout';

const analyzeStore = new analyzeStore();
analyzeStore.initializeDummyData();

export default class Analyze extends React.Component {
    render() {
    return <Provider loginStore={analyzeStore}>
            <AnalyzeLayout/>
         </Provider>;

    }
}
