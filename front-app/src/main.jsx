import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import generateStore from './redux/store/index.js';
import UserProvider from './context/UserContext.jsx';

const store = generateStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UserProvider>
  </React.StrictMode>,
)
