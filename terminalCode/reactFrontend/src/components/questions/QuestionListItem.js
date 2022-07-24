import React from "react";

import axios from "axios";
import AnswerListItem from "./AnswerListItem"

import { v4 as uuidv4 } from "uuid";

class QuestionListItem extends React.Component {
    state = {
        currentQuestion: 0,
        score: 0,
        showScore: false,
        quest: [],
    };


    async componentDidMount() {
        const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz/" + `${this.props.id}` + "/question";
        const response = await axios.get(QUIZ_API_BASE_URL);
        this.setState({ quest: response.data });
        console.log(response.data)
    }

    answerClick = (isCorect) => {
        if (isCorect) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        const nextQuestion = this.state.currentQuestion + 1;
        console.log(nextQuestion);

        if (nextQuestion < this.state.quest.length) {
            this.setState({
                currentQuestion: nextQuestion
            })
        } else {
            this.setState({
                showScore: true
            })
        }
    }

    render() {
        return (

            <ul>
                {this.state.showScore ? (
                    <div style={{color:'#780d8b', fontSize:'30px', marginTop:'100px'}}>
                        You scored {this.state.score} out of {this.state.quest.length}
                    </div>
                ) : (
                    this.state.quest.map(quiz => (
                        <div key={uuidv4()}>
                            {this.state.quest[this.state.currentQuestion].text === quiz.text ?
                                <div className="questionItem">
                                    <p> {quiz.text}</p>
                                    <AnswerListItem id={quiz.id} answerClickProps={this.answerClick} /></div> : <div></div>}
                                </div>
                    )))}
            </ul>
        )
    }
}

export default QuestionListItem