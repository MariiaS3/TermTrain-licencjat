import React, { useState } from 'react';
import ReactDOM from "react-dom"

import {BrowserRouter as Router,Route, Routes as Switch, Link} from 'react-router-dom';

import HomeContainer from "./components/homePage/HomeContainer"
import QuizContainer from "./components/QuizPage/QuizContainer"
import TermContainer from "./components/TerminalPage/TermContainer"

import "./App.css"

import QuestionContainer from './components/questions/QuestionContainer';



ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
          <Route exact path='/' element={<HomeContainer /> }>   </Route>
          <Route exact path='/quiz' element={<QuizContainer /> }>   </Route>
          <Route exact path='/term' element={<TermContainer /> }>   </Route>
          <Route exact path='/quiz/questions/:id' element={<QuestionContainer /> }>   </Route>

      </Switch> 
    </Router>  
  </React.StrictMode>, 
  document.getElementById("root")
);
