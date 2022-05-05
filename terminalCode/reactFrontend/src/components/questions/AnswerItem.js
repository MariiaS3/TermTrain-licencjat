import React from "react";


class QuestionItem extends React.Component {

    render() {
        return (
            <li >
                {/* <input type="checkbox" ></input> or button*/}
                <button style={{
                    "marginLeft": "50px",
                    "fontSize": "23px"
                }} onClick={()=>
                    this.props.answerClickProps(this.props.quest.corect)
                }>{this.props.quest.text}</button>
            </li>
              
        )
    }
}

export default QuestionItem