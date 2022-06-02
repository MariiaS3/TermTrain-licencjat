
import './App.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter as Router,Route, Routes as Switch} from 'react-router-dom';

import HomeContainer from "./components/homePage/HomeContainer"
import QuizContainer from "./components/QuizPage/QuizContainer"
import TermContainer from "./components/TerminalPage/TermContainer"

import "./App.css"

import QuestionContainer from './components/questions/QuestionContainer';

function App() {
    const [toggleDark, settoggleDark] = useState(false);
    
    const termTheme = createTheme({
        palette: {
            mode: toggleDark ? "dark" : "light",
            primary: {
                light: '#ddf8ea',
                main: '#CAFFE3',
                dark: '#68ce98',
            },
            secondary: {
                light: '#f2f7ca',
                main: '#f2f8be',
                dark: '#cbd47b',
            },
        },
    });

    if (termTheme.palette.mode === "light") {
        termTheme.palette.background = {
            default: "#fff",
            paper: "#eafaf3",
        };
    } else {
        termTheme.palette.background = {
            default: "#272525",
            paper: "#312f2f",
        };
    }

    return (
        <ThemeProvider theme={termTheme}>
            <div style={{ background: termTheme.palette.background.default }}>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path='/' element={<HomeContainer    toggleDark={toggleDark} settoggleDark={settoggleDark}/>}>   </Route>
                        <Route exact path='/quiz' element={<QuizContainer   toggleDark={toggleDark} settoggleDark={settoggleDark} />}>   </Route>
                        <Route exact path='/term' element={<TermContainer   toggleDark={toggleDark} settoggleDark={settoggleDark} />}>   </Route>
                        <Route exact path='/quiz/questions/:id' element={<QuestionContainer   toggleDark={toggleDark} settoggleDark={settoggleDark}/>}>   </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;