import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#122345',
      main: '#0c1830',
    },
    secondary: {
      light: '#b1bcde',
      main: '#9eacd6',
      dark: '#6e7895',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
  }
});

export default theme;