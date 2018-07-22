import React from 'react';
import './index.css';
// import App from './App';
import dva from 'dva'
import menu from './module/Menu'
import Notice from './module/Notice'
import  CRoute  from './component/router/'
import createLoading from 'dva-loading'
import registerServiceWorker from './registerServiceWorker';
import Case from './module/Case';
import createBrowserHistory from 'history/createBrowserHistory'
import BasicLayout from './layout/BasicLayout';
const history = createBrowserHistory()
const AppDiv =({app,history})=> (
        <CRoute app={app} history={history}>
            <BasicLayout />
            {/* <App/> */}
        </CRoute>
)   
const app = dva({history})
app.model(menu)
app.model(Notice)
app.model(Case)
app.use(createLoading())
app.router(({history,app})=>AppDiv({history,app}))
app.start("#root")
// console.log("dynamic load modle "+JSON.stringify(app._models))
registerServiceWorker();
export default app;
