return (
  <ThemeProvider theme={termTheme}>
    <div style={{ background: termTheme.palette.background.default}}>
     <Router basename={process.env.PUBLIC_URL}>
      <Switch>
       <Route exact path='/' 
                      element={<HomeContainer 
                                  setLogToken={setLogToken}/>} /> 
       <Route exact path='/forum' 
                    element={<Forum 
                                setLogToken={setLogToken}/>} 
                                propsToken={token} />   
       <Route exact path='/forum/:id' 
                    element={<QuestForum 
                                setLogToken={setLogToken} 
                                propsToken={token}/>} />  
       <Route exact path='/add/quiz'  
                    element={<AddNewQuiz 
                                propsToken={token}/>} /> 
       <Route exact path='/add/question/:id' 
                        element={<AddNewQuestion 
                                     propsToken={token}/>} />
       <Route exact path='/add/answer/:id' 
                    element={<AddNewAnswer 
                                propsToken={token} />} /> 
       <Route exact path='/quiz'  
                    element={<QuizContainer 
                                propsToken={token} 
                                setLogToken={setLogToken} />} />   
       <Route exact path='/term' 
                   element={<TermContainer 
                                propsToken={token} 
                                setLogToken={setLogToken} />} />   
       <Route exact path='/quiz/question/:id' 
                            element={<QuestionContainer  
                                        propsToken={token}/>} />
     </Switch>
    </Router>
   </div>
  </ThemeProvider>
);