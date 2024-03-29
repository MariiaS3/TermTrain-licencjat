
<h1 >TermTrain</h1>  
TermTrain is a web application designed and written for my BA thesis.

<h1>General info</h1>
The main goal of the work was to create a didactic application imitating the behavior of the command line. This app will help new users learn how to use Linux terminal commands.

<h2>Features:</h2>
<ul>
  <li>
    A web application that allows you to use the bash terminal in a web browser without having to install Linux or control it on a virtual machine.
  </li>
  <li>
  The web application allows you to learn bash terminal commands through hands-on exercises.
  </li>
  <li>
   The app includes basic Linux terminal commands such as: ls, cd, cp, mv, cat, rm, mkdir, rmdir, touch, nano, man. 
  </li>
  <li>
   Users will be able to consolidate their knowledge by taking a quiz.
    </li>
      <li>
  Before starting the quiz, the user will be able to read this short description of the commands.
      </li>
  <li>
While taking the quiz, users will be able to test their own
answer by typing the appropriate commands in the terminal.
  </li>
</ul>

<h2>TODOs:</h2>
<ul>
  <li>
An additional functionality of the application will be the possibility for users to leave questions related to the Linux system or the bash terminal. Users will
they could also leave their comments under selected questions.
  </li>
</ul>

<h2>Technologies</h2>
<h4>Backend</h4>
  
```
  * Java: 17
  * Spring Boot
  * JPA
  * Hibernate
```
  
  <h4>Frontend</h4>
  
```
  * JavaScript
  * React
  * MUI
  * Axios
```
  
  <h4>Database</h4>
  
```
  * H2
```
  
  <h2>Running the application locally</h2>
  
  <p>First start backend, go to this folder: </p>
  
  `/TermTrain-licencjat/terminalCode/terminal`
  
  <p>In the project directory, you can run:</p>
      
      mvn spring-boot:run
  
  <p>Then start the frontend, first go to this folder: </p>
  
  `/TermTrain-licencjat/terminalCode/reactFrontend`
  
   <p>Iin the project directory, run the command to install the package and all packages it depends on</p>
      
    npm install

  <p>Then run the command that starts the application in development mode.</p>
  
      npm start
  
  <p>Open http://localhost:3000 to view it in your browser</p>

<img src="Licencjat/project/main_page.png" alt="home page">
<div>
  <img src="Licencjat/project/logowanie.png" alt="logowanie" style="width: 400px"> 
<img src="Licencjat/project/rejestracja.png" alt="rejestracja" style="width: 330px">
  </div>
  
<img src="Licencjat/project/term1.png" alt="terminal">
<img src="Licencjat/project/term2.png" alt="terminal">
<img src="Licencjat/project/quiz1.png" alt="quiz" >
<img src="Licencjat/project/list_quiz2.png" alt="list quiz">
<img src="Licencjat/project/forum.png" alt="forum" >
</body>
</html>

