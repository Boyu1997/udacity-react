import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './components/App'

import loadingReducer from './reducers/loading'
import questionsReducer from './reducers/questions'
import usersReducer from './reducers/users'


const store = configureStore({
  reducer: {
    loading: loadingReducer,
    questions: questionsReducer,
    users: usersReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
