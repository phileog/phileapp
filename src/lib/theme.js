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

  // const hardWhite = 'rgb(255, 255, 255)';
  // const mediumWhite = 'rgb(250, 250, 250)';
  // const lightWhite = 'rgb(245, 245, 245)';
  theme = createMuiTheme({
    // palette: {
    //   primary: {
    //     // light and dark entries, if not set, will be generated
    //     main: 'rgb(203, 0, 68)',
    //     contrastText: mediumWhite,
    //   },
    //   secondary: {
    //     // light and dark entries, if not set, will be generated
    //     main: 'rgb(62, 61, 64)',
    //     contrastText: mediumWhite,
    //   },
    //   common: {
    //     white: mediumWhite,
    //     black: 'rgb(22, 22, 22)',
    //     yammerblue: 'rgb(0, 136, 206)',
    //   },
    //   background: {
    //     default: mediumWhite,
    //     paper: lightWhite,
    //     sncfgrey: 'rgb(224, 225, 221)',
    //   },
    // },
    typography: { fontFamily, useNextVariants: true },
  });
  theme.breakpoints.getName = (width, { keys, values } = theme.breakpoints) =>
    _.findLast(keys, key => values[key] <= width);

  window.MUI_THEME = theme;

  return theme;
};

const getFontFamily = () => {
  if (_.isUndefined(theme)) {
    getTheme();
  }
  return fontFamily;
};

export { getTheme, getFontFamily, CssBaseline, MuiThemeProvider };
