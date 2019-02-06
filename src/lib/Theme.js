import _ from 'lodash';

// Material UI
// Normalize CSS styles between borwsers and OS
import CssBaseline from '@material-ui/core/CssBaseline';
// http://www.material-ui.com (check version in package.json)
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// https://github.com/typekit/webfontloader
import WebFontLoader from 'webfontloader';

let theme;
let fontFamily = '';

/**
 * Function to set the Material-UI lib theme
 * http://www.material-ui.com/#/customization/themes
 *    Load custom fonts
 *    Apply custom styles (colors mainly)
 * @return  {object}  muiTheme
 * @author Sylvain Pont
 */
const getTheme = () => {
  if (!_.isUndefined(theme)) {
    return theme;
  }

  // Roboto always here as backup font
  const fonts = {
    google: {
      families: ['Roboto:300,400,500'],
    },
  };
  WebFontLoader.load(fonts);

  fontFamily = 'Roboto, Helvetica, Arial, sans-serif';
  theme = createMuiTheme({
    // palette: {
    //   primary: {
    //     light: '#757ce8',
    //     main: '#3f50b5',
    //     dark: '#002884',
    //     contrastText: '#fff',
    //   },
    //   secondary: {
    //     light: '#ff7961',
    //     main: '#f44336',
    //     dark: '#ba000d',
    //     contrastText: '#000',
    //   },
    // },
    // overrides: {
    //   MuiListItem: {
    //     root: {
    //       backgroundColor: 'rgb(255, 255, 255)',
    //     },
    //   },
    // },
    typography: { fontFamily, useNextVariants: true },
  });

  return theme;
};

const getFontFamily = () => {
  if (_.isUndefined(theme)) {
    getTheme();
  }
  return fontFamily;
};

export { getTheme, getFontFamily, CssBaseline, MuiThemeProvider };
