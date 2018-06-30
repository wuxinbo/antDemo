import React from 'react';
import './index.css';
import App from './App';
import dva from 'dva'
import menu from './module/Menu'
import { CRoute } from './component/router/route'
import registerServiceWorker from './registerServiceWorker';
const AppDiv = (
    <div>
        <CRoute >
            <App/>
        </CRoute>
    </div>    
)   
const app = dva()
app.model(menu)
app.router(()=>AppDiv)
app.start("#root")
registerServiceWorker();
