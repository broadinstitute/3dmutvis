import React from 'react';
import {Provider} from 'mobx-react'


import AnalyzeStore from './AnalyzeStore';
import AnalyzeLayout from './AnalyzeLayout';

const analyzeStore = new AnalyzeStore();
analyzeStore.initializeDummyData();

export default class Analyze extends React.Component {
    render() {
    return <Provider loginStore={analyzeStore}>
            <AnalyzeLayout />
         </Provider>;

    }
}
