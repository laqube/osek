import React, {useState} from 'react';
import Counter from "./components/counter";
import { createTheme, ThemeProvider} from "@material-ui/core/styles";
import CustomBtn from "./components/CustomBtn";

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
            <CustomBtn txt="test"/>
          </ThemeProvider>
          <h1>U get </h1>
          <Counter/>
          <h1> points </h1>
          <h5>just kiddin'))</h5>
      </div>
    );
}

export default App;
