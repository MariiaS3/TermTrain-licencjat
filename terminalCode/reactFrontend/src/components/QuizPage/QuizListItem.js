import { Button } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

class QuizListItem extends React.Component {
    render() {

        const style = {
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

        return (
            <div className="quizList">
                    {this.props.quiz.map(quiz => (
                            <li key={quiz.id} className="qizItem">
                                <span style={{
                                    "marginLeft": "50px",
                                    "fontSize": "23px"
                                }}>{quiz.description}</span>
                                <div className="qiuzDiv">
                                    <Button variant="contained" className="btnMenu" style={style}>Teoria</Button>
                                    <Link to={`/quiz/questions/${quiz.id}`}><Button variant="contained" className="btnMenu" style={style} >Rozwiąż Quiz</Button></Link>
                                </div>
                            </li>
                    ))}
            </div>
        )
    }
}

export default QuizListItem