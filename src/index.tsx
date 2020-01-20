import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import './index.css'

const Container = (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
)

ReactDOM.render(Container, document.getElementById('root'));

