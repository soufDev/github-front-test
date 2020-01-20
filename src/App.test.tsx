import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/index';

const Container = (
  <Provider store={store}>
    <App />
  </Provider>
)
test('renders GitGuardian App title', () => {
  const { getByText } = render(Container);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
