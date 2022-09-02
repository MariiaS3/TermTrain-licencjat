
import './App.css';
import React, { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter as Router,Route, Routes as Switch} from 'react-router-dom';

import HomeContainer from "./components/homePage/HomeContainer"
import QuizContainer from "./components/Quiz/QuizContainer"
import TermContainer from "./components/Terminal/TermContainer"
import "./App.css"

import QuestionContainer from './components/Quiz/QuestionContainer';
import LoginPage from './components/log/LoginPage';
import useToken from './hook/useToken';
import AddNewQuiz from './components/Quiz/createQuiz/AddNewQuiz';
import AddNewQuestion from './components/Quiz/createQuiz/AddNewQuestion';
import AddNewAnswer from './components/Quiz/createQuiz/AddNewAnswer';
import Forum from "./components/forumpage/Forum"
import QuestForum from "./components/forumpage/QuestForum"

function App() {
    const [toggleDark, settoggleDark] = useState(false);
    const { token, setToken } = useToken();

    if(!token) {
      return <LoginPage propsToken={token} setToken={setToken} />
    }

    function  setLogToken (){
        setToken("")
    }
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
                        <Route exact path='/' element={<HomeContainer    toggleDark={toggleDark} settoggleDark={settoggleDark} setLogToken={setLogToken}/>}>   </Route>
                        <Route exact path='/forum' element={<Forum    toggleDark={toggleDark} settoggleDark={settoggleDark} setLogToken={setLogToken}/>} propsToken={token}>   </Route>
                        <Route exact path='/forum/:id' element={<QuestForum    toggleDark={toggleDark} settoggleDark={settoggleDark} setLogToken={setLogToken} propsToken={token}/>}>   </Route>
                        <Route exact path='/add/quiz' element={<AddNewQuiz    toggleDark={toggleDark} settoggleDark={settoggleDark} propsToken={token}/>}>   </Route>
                        <Route exact path='/add/question/:id' element={<AddNewQuestion   toggleDark={toggleDark} settoggleDark={settoggleDark}  propsToken={token}/>}>   </Route>
                        <Route exact path='/add/answer/:id' element={<AddNewAnswer  toggleDark={toggleDark} settoggleDark={settoggleDark} propsToken={token}  />} >   </Route>
                        <Route exact path='/quiz' element={<QuizContainer   toggleDark={toggleDark} settoggleDark={settoggleDark} propsToken={token} setLogToken={setLogToken}  />}>   </Route>
                        <Route exact path='/term' element={<TermContainer   toggleDark={toggleDark} settoggleDark={settoggleDark} propsToken={token} setLogToken={setLogToken}   />}>   </Route>
                        <Route exact path='/quiz/question/:id' element={<QuestionContainer   toggleDark={toggleDark} propsToken={token} settoggleDark={settoggleDark} />}>   </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;