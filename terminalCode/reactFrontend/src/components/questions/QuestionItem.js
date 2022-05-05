import React from "react";


class QuestionItem extends React.Component {

    render() {
        return (
            <li >
                <span style={{
                    "marginLeft": "50px",
                    "fontSize": "23px"
                }}>{this.props.quest.text}</span>
            </li>
              
        )
    }
}

export default QuestionItem