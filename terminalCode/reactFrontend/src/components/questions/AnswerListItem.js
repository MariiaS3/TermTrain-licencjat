import React from "react";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

class AnswerListItem extends React.Component {

    state = {
        textValue: "",
        corect: false,
        quest: [],
    };

    async componentDidMount() {
        const QUIZ_API_BASE_URL = "http://localhost:8080/api/question/" + `${this.props.id}` + "/answer";
        const response = await axios.get(QUIZ_API_BASE_URL);
        this.setState({ quest: response.data });
        console.log(response.data)
    }
    answerClick = (isCorect) => {
        this.setState({
            corect: isCorect
        })
        console.log("answerClick" + isCorect)
    }

    handleRadioChange = (e, isCorect) =>{
        this.setState({ checkedOptionValue: e.target.value });
        this.answerClick(isCorect)
    }

    render() {


        return (
            <div className="checkQuiz">
                {this.state.quest.map(quiz => (
                    <div key={quiz.id}>
                        <input type="radio"  className="check" name="dynamic-radio" id={"checkbox"+quiz.id} onChange={(e) => this.handleRadioChange(e,quiz.corect)}/> 
                        <label className="checkQuest" htmlFor={"checkbox" + quiz.id} >{quiz.text}</label>
                    </div>
                ))}
                <button className="sprawdz" onClick={() => this.props.answerClickProps(this.state.corect)} >Sprawdz</button>
            </div>
        )
    }
}

export default AnswerListItem


