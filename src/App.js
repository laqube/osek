import React, {useState} from 'react';
import { createTheme, ThemeProvider} from "@material-ui/core/styles";
import CustomBtn from "./components/CustomBtn";
import navBar from "./components/navBar";



const theme = createTheme({
    palette:{
        primary: {
            main: "#2e1667",
        },
        secondary: {
            main: "#c7d8ed",
        },
    },
    typography: {
        fontFamily: [
            'Quicksand'
        ],
        h4: {
            fontWeight: 600,
            fontSize: 28,
            lineHeight: '2rem',

        },
        h5: {
            fontWeight: 100,
            lineHeight: '2rem',
        },
    },
});

function App() {
    return(
      <div className="App">
          <ThemeProvider theme={theme}>
              <navBar/>
              {/*<CustomBtn txt={"salem"}/>*/}
          </ThemeProvider>
      </div>
    );
}

export default App;
