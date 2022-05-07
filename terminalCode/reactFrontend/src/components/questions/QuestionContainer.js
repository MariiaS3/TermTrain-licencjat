import React from "react";

import { Link, useParams } from "react-router-dom";
import TermMenu from "./TermMenu";
import QuestionListItem from "./QuestionListItem"
import Terminal from "../Terminal"

function QuestionContainer() {
    const { id } = useParams();


    return (
        <div className="containerQuest">
            <Terminal />
            <div className="questDiv">
                <TermMenu />
                <QuestionListItem id={id} />
            </div>
        </div>
    );
}

export default QuestionContainer