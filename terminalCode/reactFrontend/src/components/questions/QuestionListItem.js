import React from "react";

import axios from "axios";
import AnswerListItem from "./AnswerListItem"

import { v4 as uuidv4 } from "uuid";

async function addResult(credentials) {
    return axios.post('http://localhost:8080/api/user/add-results' , credentials)
}

class QuestionListItem extends React.Component {
    state = {
        currentQuestion: 0,
        score: 0,
        showScore: false,
        quest: [],
        quizName: "",
    };
    

    async componentDidMount() {
        const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz/"+`${this.props.id}`+"/question";
        const response = await axios.get(QUIZ_API_BASE_URL);
        const res = await axios.post("http://localhost:8080/api/quiz/"+`${this.props.id}`)
        this.setState({quizName:res.data.description})
        this.setState({ quest: response.data });
        console.log(response.data)
    }

    answerClick = async (isCorect) => {
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
            const current = new Date();
            let date = "";
            if(current.getDate()<10){
                if(current.getMonth()+1<10){
                     date = `${0}${current.getDate()}-${0}${current.getMonth()+1}-${current.getFullYear()}`;
                }else{
                     date = `${0}${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
                }
            }else{
                if(current.getMonth()+1<10){
                     date = `${0}${current.getDate()}-${0}${current.getMonth()+1}-${current.getFullYear()}`;
                }else{
                     date = `${0}${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
                }
            }
            const id  = this.props.propsToken.split(':')[0];
            const result = await addResult({
                data:date,
                result: this.state.score+"/"+this.state.quest.length,
                name_quiz: this.state.quizName,
                user: id,
            })

            console.log(date)
            console.log(result.data)
        }
    }

    render() {
        {console.log(this.props.propsToken)}
        return (

            <ul>
                {this.state.showScore ? (
                    <div style={{color:'#780d8b', fontSize:'30px', marginTop:'100px'}}>
                        You scored {this.state.score} out of {this.state.quest.length}
                    </div>
                ) : (
                    this.state.quest.map(question => (
                        <div key={uuidv4()}>
                            {this.state.quest[this.state.currentQuestion].text === question.text ?
                                <div className="questionItem">
                                    <p> {question.text}</p>
                                    <AnswerListItem id={question.id} answerClickProps={this.answerClick} /></div> : <div></div>}
                                </div>
                    )))}
            </ul>
        )
    }
}

export default QuestionListItem