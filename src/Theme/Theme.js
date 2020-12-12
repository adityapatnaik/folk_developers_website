import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "light",
      primary: {
        // light: will be calculated from palette.primary.main,
        light: "#ffe54c",
        main: "#ffb300",
        dark: "#c68400"
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#ff5c8d",
        main: "#D81B60",
        dark: "#a00037"
        // dark: will be calculated from palette.secondary.main,
        // contrastText: "#ffcc00"
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2
    },
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`
    }
  })
);
