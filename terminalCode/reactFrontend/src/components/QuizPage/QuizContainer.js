import React from "react";

import TermMenu from "./TermMenu"
import QuizListItem from "./QuizListItem"
import axios from "axios";

const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz";

class QuizContainer extends React.Component{
    state = {
      quiz:[],
      isLoading: true,
      isDone: false,
    };

    async componentDidMount(){
      const response = await axios.get(QUIZ_API_BASE_URL);
      this.setState ({quiz: response.data, isLoading: false});
    }

    render(){

      // if (this.state.isLoading) {
      //   return <p>Loading...</p>;
      // }
        return(
    
            <div className="container">
                <TermMenu />
                <QuizListItem quiz={this.state.quiz}/>
          </div>
        )
    }
}

export default QuizContainer