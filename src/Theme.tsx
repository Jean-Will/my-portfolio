import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: "#212121",
      },
      secondary: {
        main: "#bdbdbd",
      },
    },
    typography:{
        fontFamily:"Segoe ui "
    }


  });
  theme = responsiveFontSizes(theme);

  export default theme;