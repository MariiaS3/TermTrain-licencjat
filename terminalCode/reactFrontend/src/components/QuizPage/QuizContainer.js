import React from "react";

import { Link } from "react-router-dom";

import axios from "axios";
import { Button } from "@mui/material";

const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz";

class QuizContainer extends React.Component {
  state = {
    quiz: [],
    isLoading: true,
    isDone: false,
  };

  async componentDidMount() {
    const response = await axios.get(QUIZ_API_BASE_URL);
    this.setState({ quiz: response.data, isLoading: false });
  }

  render() {
    
    const style = {
      height: '20px',
      width: '150px',
      margin: '30px',  
      fontSize: '18px',
      textAlign: 'center',
      fontFamily:'\'Times New Roman\', Times, serif', 
      color:'#0B1F64',
    }

    const styleList = {
      height: '40px',
      width: '180px',
      marginBottom: '5px',
      margin: '10px',
      fontSize: '18px',
      borderRadius: '10px',
      textAlign: 'center',
      fontFamily: '\'Times New Roman\', Times, serif',
      color: '#0B1F64',
      backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
  }
    // if (this.state.isLoading) {
    //   return <p>Loading...</p>;
    // }
    return (
      <div className="quizContainer">
        <div  className="mainMenu">
          <Link to="/"><Button  className="btnMenu" style={style} >Główna</Button></Link>
          <Link to="/term"><Button className="btnMenu" style={style}>Terminal</Button></Link>
          <Link to="/dashboard"><Button   className="btnMenu" size="large"  style={style}>Dashboard</Button></Link>
          <Link to='/add/quiz'><Button className="btnMenu" style={style}>Edytuj</Button></Link>
          <Button  className="btnMenu" style={style}>Forum</Button>
        </div>
        <div className="quizList">
                    {this.state.quiz.map(quiz => (
                            <li key={quiz.id} className="qizItem">
                                <span style={{
                                    "marginLeft": "50px",
                                    "fontSize": "23px"
                                }}>{quiz.description}</span>
                                <div className="qiuzDiv">
                                    <Button variant="contained" className="btnMenu" style={styleList}>Teoria</Button>
                                    <Link to={`/quiz/question/${quiz.id}`}  ><Button variant="contained" className="btnMenu" style={styleList} >Rozwiąż Quiz</Button></Link>
                                </div>
                            </li>
                    ))}
            </div>
      </div>
    )
  }
}

export default QuizContainer