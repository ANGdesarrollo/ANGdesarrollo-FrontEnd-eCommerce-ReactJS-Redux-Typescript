import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './scss/styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { SocketsProvider } from './components/customerSupport/context/socket.context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <SocketsProvider>
                <App />
            </SocketsProvider>
        </Provider>
    </BrowserRouter>
);
