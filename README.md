<svg fill="none" viewBox="0 0 120 120" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
  <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
      <style>
@keyframes bounce {
  0%   { transform: scale(1,    1)   translateY(0)     skew(0deg,  0deg); }
  3%   { transform: scale(1,    1)   translateY(0)     skew(0deg,  0deg); }
  5%   { transform: scale(1.1,  .9)  translateY(5px)   skew(0deg,  0deg); }
  12%  { transform: scale(.9,   1.1) translateY(-70px) skew(25deg, 5deg); }
  13%  { transform: scale(.9,   1.1) translateY(-70px) skew(25deg, 5deg); }
  20%  { transform: scale(1.05, .95) translateY(0)     skew(0deg,  0deg); }
  22%  { transform: scale(1,    1)   translateY(-7px)  skew(0deg,  0deg); }
  27%  { transform: scale(1,    1)   translateY(0)     skew(0deg,  0deg); }
  100% { transform: scale(1,    1)   translateY(0)     skew(0deg,  0deg); }
}
h1 {
  width: 120px;
  line-height: 20px;
  padding-top: 70px;
  text-align: center;
  font: 400 16px/1.5 Helvetica ,Arial ,sans-serif;
  color: rgb(52, 73, 94);
  transform-origin: bottom;
  animation: 4s cubic-bezier(.5, 0, .5, 1.2) 1s infinite bounce;
}
      </style>
      <h1>Hello, world</h1>
    </div>
  </foreignObject>
</svg>


<body>
        
<h1>TermTrain</h1>  
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
   Aplikacja zawiera podstawowe polecenia terminala systemu Linux, takie jak: ls, cd, cp, mv, cat, rm, mkdir, rmdir, touch, nano, man. 
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

<h2>Technology<h2>
    <p style="font-size:10px">Backend</p>
    <ul>
     <li>Java: 17</li>
    <li>Spring Boot</li>
    <li>JPA</li>
    <li>Hibernate</li>
    </ul>
    <p>Frontend</p>
     <ul>
     <li>JavaScript</li>
    <li>React</li>
    <li>Docker</li>
    </ul>
    <p>Database</p>
     <ul>
     <li>H2</li>
    </ul>
  <h2>Running the application locally</h2>
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


  





