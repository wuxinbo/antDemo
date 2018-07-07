import React from 'react';
import './index.css';
import App from './App';
import dva from 'dva'
import menu from './module/Menu'
import Notice from './module/Notice'
import { CRoute } from './component/router/route'
import createLoading from 'dva-loading'
import registerServiceWorker from './registerServiceWorker';
import Case from './module/Case';
const AppDiv = (
    <div>
        <CRoute >
            <App/>
        </CRoute>
    </div>    
)   
const app = dva()
app.model(menu)
app.model(Notice)
app.model(Case)
app.use(createLoading())
app.router(()=>AppDiv)
app.start("#root")
registerServiceWorker();
export default app._store;
