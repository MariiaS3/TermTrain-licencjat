import React from "react";

import { Link, useParams } from "react-router-dom";

import QuestionListItem from "./QuestionListItem"
import Terminal from "../Terminal"

import Button from '@mui/material/Button';
import "./quiz.css"

function QuestionContainer(props) {
    const { id } = useParams();


    const style = {
        width: '150px',
        marginTop: '20px',
        fontSize: '18px',
        borderRadius: '10px',
        textAlign: 'center',
        fontFamily: '\'Times New Roman\', Times, serif',
        color: '#0B1F64'
    }

    const termStyle = {
        width: '65%',
        height: '100%',
        position: 'absolute',
        overflow: 'scroll',
        flexDirection: 'row',
        backgroundColor: 'black',
    }


    return (

        <div className="containerQuest">
            <div>
                <Terminal termStyle={termStyle} />
            </div>
            <div className="questDiv">
                <div >
                    <ul className="questBtn" style={{ paddingLeft: '30px', listStyle: "none" }}>
                        <li >
                            <Link to="/"><Button type="submit" className="btnMenu" size="large" style={style}>Główna</Button></Link>
                        </li>
                        <li >
                            <Link to="/quiz"><Button type="submit" className="btnMenu" size="large" style={style}>Quiz</Button></Link>
                        </li>
                        <li>
                            <Link to="/dashboard"><Button className="btnMenu" size="large" style={style}>Dashboard</Button></Link>
                        </li>
                        <li >
                            <Button type="submit" className="btnMenu" size="large" style={style}>Forum</Button>
                        </li>
                    </ul>
                </div>
                <div>
                    <QuestionListItem id={id} propsToken={props.propsToken} />
                </div>
            </div>
        </div>
    );
}

export default QuestionContainer