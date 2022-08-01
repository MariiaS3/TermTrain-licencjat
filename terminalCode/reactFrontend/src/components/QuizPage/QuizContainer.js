import React from "react";

import { Link } from "react-router-dom";


import QuizListItem from "./QuizListItem"
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
      height: '40px',
      width: '160px',
      marginTop: '50px',
      marginLeft: '40px',
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
        <div >
          <Link to="/"><Button variant="contained" className="btnMenu" style={style} >Główna</Button></Link>
          <Link to="/term"><Button variant="contained" className="btnMenu" style={style}>Terminal</Button></Link>
          <Link to='/add/quiz'><Button variant="contained" className="btnMenu" style={style}>Edytuj</Button></Link>
          <Button variant="contained" className="btnMenu" style={style}>Forum</Button>
        </div>
          <QuizListItem quiz={this.state.quiz} propsToken={this.props.propsToken}/>
      </div>
    )
  }
}

export default QuizContainer