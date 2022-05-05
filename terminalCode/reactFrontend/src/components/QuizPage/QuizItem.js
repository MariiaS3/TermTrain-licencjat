import React from "react";
import { Link } from "react-router-dom";


class QuizItem extends React.Component {
    render() {
        return (
            <li className="qizItem">
                <span style={{
                    "marginLeft":"50px",
                    "fontSize":"23px"
                }}>{this.props.quiz.description}</span>
                <div className="qiuzDiv">
                <button type="button" className="btnQuiz">Teoria</button>
                <Link to={`/quiz/questions/${this.props.quiz.id}`}><button type="button" className="btnQuiz">Rozwiąż Quiz</button></Link>
                </div>
            </li>
        )
    }
}

export default QuizItem