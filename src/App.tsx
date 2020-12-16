import React from 'react';
import Routes from './routes';

import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import {useTheme} from './hooks/theme';


const App: React.FC = () => {
  const {theme} = useTheme();
  return (

    <ThemeProvider theme={theme}>
       <GlobalStyles/> 
       <Routes/>
    </ThemeProvider>  
  );
}

export default App;
