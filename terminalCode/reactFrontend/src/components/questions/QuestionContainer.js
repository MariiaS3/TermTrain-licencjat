import React from "react";

import { Link, useParams } from "react-router-dom";

import QuestionListItem from "./QuestionListItem"
import Terminal from "../Terminal"

import Button from '@mui/material/Button';


function QuestionContainer() {
    const { id } = useParams();
   
    const style ={
        height: '40px',
        width: '150px',
        marginTop: '20px',
        marginLeft: '10px',
        marginRight: '10px',
        fontSize: '18px', 
        borderRadius: '10px',
        textAlign: 'center',
        fontFamily:'\'Times New Roman\', Times, serif', 
        color:'#0B1F64',
        backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
    }

    return (
        
        <div className="containerQuest">
            <Terminal />
            <div className="questDiv">
                <div className="questBtn">
                    <Link to="/"><Button variant="contained" className="btnMenu"   style={style}>Główna</Button></Link>
                    <Link to="/quiz"><Button variant="contained" className="btnMenu"   style={style}>Quiz</Button></Link>
                    <Button variant="contained" className="btnMenu"   style={style}>Forum</Button>
                </div>
                <QuestionListItem id={id} />
            </div>
        </div>
    );
}

export default QuestionContainer