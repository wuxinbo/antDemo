import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CRoute } from './component/router/route'
import registerServiceWorker from './registerServiceWorker';
const AppDiv = (
    <div>
        <CRoute >
            <App/>
        </CRoute>
    </div>    
)
ReactDOM.render(AppDiv, document.getElementById('root'));
registerServiceWorker();
