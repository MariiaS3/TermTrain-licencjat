import React from "react";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';


import Terminal from "../Terminal"
import "./terminal.css"

class TermContainer extends React.Component {
    render() {
        const style = {
            height: '40px',
            width: '160px',
            marginTop: '40px',
            marginLeft: '40px',
            marginBottom: '40px',
            fontSize: '18px',
            borderRadius: '10px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
        }

        const termStyle = {
            width: '87%',
            height: '100%',
            position: 'absolute',
            overflow: 'scroll',
            flexDirection: 'row',
            backgroundColor: 'black',
        }
  
        return (
            <div className="containerTerm">
                <div>
                    <Terminal  termStyle={termStyle} />
                </div>
                <div className="termDiv">
                    <Link to="/"><Button variant="contained" className="btnMenu" size="large" style={style}>Główna</Button></Link>
                    <Link to="/quiz"><Button variant="contained" className="btnMenu" size="large" style={style}>Quiz</Button></Link>
                    <Button variant="contained" className="btnMenu" size="large" style={style}>Forum</Button>
                </div>
            </div>
        )
    }
}

export default TermContainer