import React from "react";

import { Link, useParams } from "react-router-dom";

import QuestionListItem from "./QuestionListItem"
import Terminal from "../Terminal"

import Button from '@mui/material/Button';
import "./quiz.css"

function QuestionContainer(props) {
    const { id } = useParams();

    
    const style = {
        height: '40px',
        width: '150px',
        marginTop: '20px',
        marginLeft: '25px',
        marginRight: '10px',
        fontSize: '18px',
        borderRadius: '10px',
        textAlign: 'center',
        fontFamily: '\'Times New Roman\', Times, serif',
        color: '#0B1F64',
        backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
    }

    const termStyle = {
        width: '60%',
        height: '100%',
        position: 'absolute',
        overflow: 'scroll',
        flexDirection: 'row',
        backgroundColor: 'black',
    }
    return (

        <div className="containerQuest">
           <div>
                <Terminal termStyle={termStyle}/>
            </div>
            <div className="questDiv">
                <div className="questBtn">
                    <Link to="/"><Button variant="contained" className="btnMenu" style={style}>Główna</Button></Link>
                    <Link to="/quiz"><Button variant="contained" className="btnMenu" style={style}>Quiz</Button></Link>
                    <Button variant="contained" className="btnMenu" style={style}>Forum</Button>
                </div>
                <div>
                    <QuestionListItem id={id} propsToken={props.propsToken} />
                </div>
            </div>
        </div>
    );
}

export default QuestionContainer