import React from "react";

import QuizItem from "./QuizItem"

class QuizListItem extends React.Component{
    render(){
        return(
            <ul>
                {this.props.quiz.map(quiz => (
                    <QuizItem 
                    key = {quiz.id}
                    quiz={quiz}/>
                ))}
            </ul>
        )
    }
}

export  default QuizListItem