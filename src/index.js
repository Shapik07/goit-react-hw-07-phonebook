import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';

import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import { theme } from 'components/constants/Theme/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
