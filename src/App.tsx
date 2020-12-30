import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// material core
import { MuiThemeProvider } from '@material-ui/core/styles';

// context
import { useGlobalContext } from 'context/GlobalContext';

// containers
import Auth from 'containers/Auth';
import LinearProgress from 'components/atoms/LinearProgress';
import Dialog from 'components/molecules/Dialog';

// themes
import themes from 'themes';
import { THEMES } from 'configs';

// routes
import Routes from 'routes/Routes';

function App() {
  // 0: light, 1: dark
  const { i18n } = useTranslation();
  const { modeTheme, language } = useGlobalContext();
  const type = modeTheme === THEMES.LIGHT ? 0 : 1;

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <MuiThemeProvider theme={themes(type)}>
      <Router>
        <Auth>
          <LinearProgress />
          <Dialog />
          <Routes />
        </Auth>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
