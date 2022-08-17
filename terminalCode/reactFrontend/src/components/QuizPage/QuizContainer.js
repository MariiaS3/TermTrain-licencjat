import React from "react";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Button } from "@mui/material";

const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz";

class QuizContainer extends React.Component {
  state = {
    quiz: [],
    results: [],
    isLoading: true,
    isDone: false,
    isAdmin: false,
  };

  async componentDidMount() {
    const response = await axios.get(QUIZ_API_BASE_URL);

    const id = (this.props.propsToken).split(':')
    const LIST_RESULTS_URL = "http://localhost:8080/api/user/get-results/" + id[0];
    const res = await axios.post(LIST_RESULTS_URL, id[0]);

    const ADMIN_URL = "http://localhost:8080/api/user/admin/" + id[0];
    const admin = await axios.post(ADMIN_URL, id[0]);
    console.log(admin.data)
    this.setState({ quiz: response.data, isLoading: false, results: res.data, isAdmin: admin.data })
  }

  render() {

    const style = {
      height: '20px',
      width: '150px',
      margin: '30px',
      fontSize: '18px',
      textAlign: 'center',
      fontFamily: '\'Times New Roman\', Times, serif',
      color: '#0B1F64',
    }
    const logOut = {
      height: '20px',
      width: '150px',
      margin: '30px',
      fontSize: '12px',
      textAlign: 'center',
      color: '#0B1F64',
    }
    const styleList = {
      height: '35px',
      width: '180px',
      marginBottom: '10px',
      marginTop: '10px',
      marginRight: '10px',
      fontSize: '16px',
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
      <div className="quizContainer"  >
        <div className="mainMenu"  style={{justifyContent: "right"}}>
          <div className="mainMenu">
            <Link to="/"><Button className="btnMenu" style={style} >Główna</Button></Link>
            <Link to="/term"><Button className="btnMenu" style={style}>Terminal</Button></Link>
            {this.state.isAdmin ? <Link to='/add/quiz'><Button className="btnMenu" style={style}>Edytuj</Button></Link> : <></>}
            <Button className="btnMenu" style={style}>Forum</Button>
          </div>
          <div >
            <Button size="large" style={logOut} >Wyloguj się</Button>
          </div>
        </div>

        <div className="quizList">
          {this.state.quiz.map(quiz => (
            <li key={quiz.id} className="qizItem">
              <span style={{ "marginLeft": "50px", "fontSize": "23px" }}>{quiz.description}</span>
              <div className="qiuzDiv">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Button variant="contained" className="btnMenu" style={styleList}>Teoria</Button>
                  <Link to={`/quiz/question/${quiz.id}`}  ><Button variant="contained" className="btnMenu" style={styleList} >Rozwiąż Quiz</Button></Link>
                </div>
                <div>
                  {this.state.results.map(res => {
                    if (quiz.description === res.nameQuiz) {
                      let color = "";
                      if (res.result < 40) {
                        color = "red"
                      } else if (res.result < 70) {
                        color = "orange"
                      } else {
                        color = "lightgreen"
                      }
                      return <div key={uuidv4()} className="pie animate" style={{ "--p": res.result, "--c": color }}>{res.result + "%"}</div>
                    }
                  })}
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    )
  }
}

export default QuizContainer