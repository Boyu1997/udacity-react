import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import './index.css'
import App from './components/App'

import questionsReducer from './reducers/questions'
import usersReducer from './reducers/users'


const store = configureStore({
  reducer: {
    questions: questionsReducer,
    users: usersReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
