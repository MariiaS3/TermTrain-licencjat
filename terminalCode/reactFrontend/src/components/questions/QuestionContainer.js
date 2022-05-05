import axios from "axios";
import React from "react";

import { Link, useParams } from "react-router-dom";
import TermMenu from "./TermMenu";
import QuestionListItem from "./QuestionListItem"

function QuestionContainer() {
    const { id } = useParams();
   

    return (
        <div className="container">
            {/* <TermMenu /> */}
            <QuestionListItem id={id}/>
        </div>
    );
}

export default QuestionContainer