import CloseIcon from '@mui/icons-material/Close';
import SwitchScreen from '@router/SwitchScreen';
import { ContextProvider } from '@store/context/store';
import store from '@store/redux/store';
import { SnackbarProvider, useSnackbar } from 'notistack';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function SnackbarCloseButton({ snackbarKey }) {
  const { closeSnackbar } = useSnackbar();

  return <CloseIcon onClick={() => closeSnackbar(snackbarKey)} />;
}

function App() {
  return (
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <SnackbarProvider
            action={(snackbarKey) => (
              <SnackbarCloseButton snackbarKey={snackbarKey} />
            )}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <SwitchScreen />
          </SnackbarProvider>
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  );
}

export default App;
