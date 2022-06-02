import React from "react";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';

class HomeContainer extends React.Component {

    render() {
        const style ={
            height: '40px',
            width: '180px',
            margin: '50px 15px',  
            fontSize: '18px',
            borderRadius: '10px',
            textAlign: 'center',
            fontFamily:'\'Times New Roman\', Times, serif', 
            color:'#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
        }
        return (
            <div className="container" >
                <div>
                    <Link to="/"><Button  variant="contained" className="btnMenu" size="large"  style={style}>Główna</Button></Link>
                    <Link to="/term"><Button  variant="contained" className="btnMenu" size="large" style={style}>Terminal</Button></Link>
                    <Link to="/quiz"><Button  variant="contained" className="btnMenu" size="large" style={style}>Quiz</Button></Link>
                    <Button  variant="contained" className="btnMenu" size="large" style={style} >Forum</Button>
                </div>
            </div>

        )

    }

}

export default HomeContainer