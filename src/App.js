import React from 'react';
import './App.css';
import TodoContainer from './components/containers/TodoContainer';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';



const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MuiThemeProvider theme={theme}>
            <TodoContainer />
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
