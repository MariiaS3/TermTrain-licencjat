import { Button } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

import Terminal from "../Terminal"

class TermContainer extends React.Component {
    render() {
        const style ={
            height: '40px',
            width: '160px',
            marginTop: '40px',
            marginLeft: '23px',
            fontSize: '18px', 
            borderRadius: '10px',
            textAlign: 'center',
            fontFamily:'\'Times New Roman\', Times, serif', 
            color:'#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
        }

        return (
            <div className="containerTerm">
                <Terminal />
                <div className="termDiv">
                    <Link to="/"><Button Button variant="contained" className="btnMenu"   style={style}>Główna</Button></Link>
                    <Link to="/quiz"><Button variant="contained" className="btnMenu"   style={style}>Quiz</Button></Link>
                    <Button variant="contained" className="btnMenu"   style={style}>Forum</Button>
                </div>
            </div>
        )
    }
}

export default TermContainer