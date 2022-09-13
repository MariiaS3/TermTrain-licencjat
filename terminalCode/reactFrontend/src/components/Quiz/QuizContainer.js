import React from "react";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Button } from "@mui/material";
import teoria from "../Terminal/tool/teoria";

const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz";

class QuizContainer extends React.Component {
  state = {
    value: false,
    quiz: [],
    results: [],
    isLoading: true,
    isDone: false,
    isAdmin: false
  };

  async componentDidMount() {
    const response = await axios.get(QUIZ_API_BASE_URL);

    const id = (this.props.propsToken).split(':')
    const LIST_RESULTS_URL = "http://localhost:8080/api/user/get-results/" + id[0];
    const res = await axios.post(LIST_RESULTS_URL, id[0]);

    const ADMIN_URL = "http://localhost:8080/api/user/admin/" + id[0];
    const admin = await axios.post(ADMIN_URL, id[0]);
    this.setState({ quiz: response.data, isLoading: false, results: res.data, isAdmin: admin.data })
  }

  handleTeoria = (teoria) => {
    let t = teoria.split("\n")
    let temp = []
    for (let i = 0; i < t.length; i++) {
      temp.push(t[i].trim())
    }

    return <div style={{ fontFamily: '\'Roboto\', sans-serif' }}>{temp.map(t => {
      return <><li key={uuidv4()} style={{ listStyle: "none" }}>{t === temp[0] ? <h1 style={{ color: "Indigo ", fontSize: "20px" }}>{t + "\n"}</h1> : <a ></a>}</li>
        <li key={uuidv4()} style={{ listStyle: "none" }}>{t === temp[1] ? <p style={{ color: "red", marginLeft: "30px" }}>{t + "\n"}<br /></p> : <a ></a>}</li>
        <li key={uuidv4()} style={{ listStyle: "none" }}>{t === temp[2] ? <p ><i>{t}</i></p> : <a ></a>}</li>
        <li key={uuidv4()} style={{ listStyle: "none" }}>{t.includes("Flagi") ? <a style={{ color: "MidnightBlue" }} >{t}</a> : <a ></a>}</li>
        <li key={uuidv4()} style={{ listStyle: "none" }}>{t[0] === '-' || t[0] === '.' ? <a style={{ color: "Indigo", marginLeft: "10px" }}>{t}</a> : <a ></a>}</li>
        <li key={uuidv4()} style={{ listStyle: "none" }}>{t.includes("Przykłady") ? <a style={{ color: "MidnightBlue" }} ><br />{t}</a> : <a ></a>}</li>
        <li key={uuidv4()} style={{ listStyle: "none" }}>{t[0] === "#" ? <a style={{ color: "blue" }} >{t}</a> : <a ></a>}</li>
        <li key={uuidv4()} style={{ listStyle: "none" }}>{t[0] === "$" ? <a style={{ color: "FireBrick" }} >{t}</a> : <a ></a>}</li>
        <li key={uuidv4()} style={{ listStyle: "none" }}>{!t.includes("Flagi") && !t.includes("Przykład") && t !== temp[2] && t[0] !== "$" && t[0] !== "#" && t[0] !== '.' && t[0] !== '-' && t !== temp[0] && t !== temp[1] ? <a >{t} <br /></a> : <a ></a>}</li>
      </>
    })}</div>
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
      backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #CAFFE3 10%, #97a7eb 100%)'
    }
    // if (this.state.isLoading) {
    //   return <p>Loading...</p>;
    // }
    return (
      <div className="quizContainer"  >
        <div className="container">
          <div>
            <img alt='' src='img/logo.png' width={'100px'}></img>
          </div>
          <div className="mainMenu">
            <Link to="/"><Button style={style} >Główna</Button></Link>
            <Link to="/term"><Button style={style}>Terminal</Button></Link>
            {this.state.isAdmin ? <Link to='/add/quiz'><Button style={style}>Edytuj</Button></Link> : <></>}
            <Link to="/forum"><Button style={style}>Forum</Button></Link>
          </div>
          <div >
            <Button size="large" style={logOut} onClick={e => { this.props.setLogToken() }} >Wyloguj się</Button>
          </div>
        </div>
        <div className="quizList">
          {this.state.quiz.map(quiz => (
            <li key={quiz.id} className="qizItem">
              <span style={{ "marginLeft": "50px", "fontSize": "23px" }}>{quiz.description}</span>
              <div >
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                  <div style={{ display: 'flex', flexDirection: 'column' }} >
                    <Button href={`#${quiz.id}-modal`} variant="contained" className="btnMenu" onClick={e => this.setState({ value: true })} style={styleList} disabled={this.state.value}>Teoria</Button>
                    <Link to={`/quiz/question/${quiz.id}`}  ><Button variant="contained" className="btnMenu" style={styleList} disabled={this.state.value} >Rozwiąż Quiz</Button></Link>
                  </div>
                  <div>
                    {this.state.results.map(res => {
                      if (quiz.id === res.idQuiz) {
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
                <div className="modal-quiz" id={`${quiz.id}-modal`}>
                  <div className="modal-content-quiz" >
                    <a href="#" className="modal-quiz-close" onClick={e => this.setState({ value: false })}>&times;</a>
                    {teoria.map(teoria => {
                      if (teoria.id === quiz.id || teoria.name === quiz.description) {
                        return <div key={uuidv4()}><h1 >{teoria.name}</h1>
                          <ul style={{ listStyle: "none" }}>
                            <li key={uuidv4()}>{this.handleTeoria(teoria.polecemie1)}</li>
                            <li key={uuidv4()}>{this.handleTeoria(teoria.polecemie2)}</li>
                            <li key={uuidv4()}>{this.handleTeoria(teoria.polecemie3)}</li>
                            <li key={uuidv4()}>{this.handleTeoria(teoria.polecemie4)}</li>
                            <li key={uuidv4()}>{this.handleTeoria(teoria.polecemie5)}</li>
                          </ul>
                        </div>
                      }
                    })
                    }
                  </div>
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