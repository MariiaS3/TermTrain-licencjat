import React from "react";

import axios from "axios";
import AnswerItem from "./AnswerItem"


class AnswerListItem extends React.Component {

    state = {
        quest: [],
    };

    async componentDidMount() {
        const QUIZ_API_BASE_URL = "http://localhost:8080/api/question/" + `${this.props.id}` + "/answer";
        const response = await axios.get(QUIZ_API_BASE_URL);
        this.setState({ quest: response.data });
        console.log(response.data)
    }

    render() {
        return (
            <ul>
                {this.state.quest.map(quiz => (
                    <AnswerItem
                        key={quiz.id}
                        quest={quiz} 
                        answerClickProps={this.props.answerClickProps}/>
                ))}
            </ul>
        )
    }
}

export default AnswerListItem