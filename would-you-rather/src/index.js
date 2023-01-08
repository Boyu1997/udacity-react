import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './components/App'

import { loadingReducer, authedUserReducer } from './reducers/shared'
import questionsReducer from './reducers/questions'
import usersReducer from './reducers/users'


const store = configureStore({
  reducer: {
    loading: loadingReducer,
    authedUser: authedUserReducer,
    questions: questionsReducer,
    users: usersReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
