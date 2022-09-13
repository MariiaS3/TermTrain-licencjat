
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
    const { token, setToken } = useToken();
    if(!token) {
      return <LoginPage propsToken={token} setToken={setToken} />
    }
    function  setLogToken (){
        setToken("")
    }
    const termTheme = createTheme({
        palette: {
            background: {
                default: "#fff",
                paper: "#eafaf3",
            },
            primary: {
                light: '#eafaf3',
                main: '#CAFFE3',
                dark: '#68ce98',
            },
            secondary: {
                light: '#97a7eb',
				main: '#7d91e7',
				dark: '#5765a1',
            },
        },
    });
    return (
        <ThemeProvider theme={termTheme}>
            <div style={{ background: termTheme.palette.background.default }}>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path='/' element={<HomeContainer setLogToken={setLogToken}/>}>   </Route>
                        <Route exact path='/forum' element={<Forum setLogToken={setLogToken}/>} propsToken={token}>   </Route>
                        <Route exact path='/forum/:id' element={<QuestForum setLogToken={setLogToken} propsToken={token}/>}>   </Route>
                        <Route exact path='/add/quiz' element={<AddNewQuiz propsToken={token}/>}>   </Route>
                        <Route exact path='/add/question/:id' element={<AddNewQuestion propsToken={token}/>}>   </Route>
                        <Route exact path='/add/answer/:id' element={<AddNewAnswer propsToken={token}  />} >   </Route>
                        <Route exact path='/quiz' element={<QuizContainer propsToken={token} setLogToken={setLogToken}  />}>   </Route>
                        <Route exact path='/term' element={<TermContainer propsToken={token} setLogToken={setLogToken}   />}>   </Route>
                        <Route exact path='/quiz/question/:id' element={<QuestionContainer  propsToken={token}/>}>   </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;