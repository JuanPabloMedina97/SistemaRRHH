import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import generateStore from './redux/store/index.js';

const store = generateStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
