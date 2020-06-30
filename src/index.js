import React from 'react';
import ReactDOM from 'react-dom';
import "assets/css/material-dashboard-react.css?v=1.9.0";
import {Provider} from 'react-redux'
import store from '@/store'
import routes from '@/router'

import { AppContainer } from 'react-hot-loader';


const  render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(routes)

if(module.hot){
  module.hot.accept('./router/', () => {
    render(routes)
  })
}
