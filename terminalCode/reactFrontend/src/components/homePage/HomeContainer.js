import React from "react";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';

class HomeContainer extends React.Component {

    render() {
        const style ={
            height: '20px',
            width: '150px',
            margin: '30px',  
            fontSize: '18px',
            textAlign: 'center',
            fontFamily:'\'Times New Roman\', Times, serif', 
            color:'#0B1F64',
        }
        return (
            <div className="container">
                <div className="mainMenu">
                    <Link to="/term"><Button  className="btnMenu" size="large" style={style}>Terminal</Button></Link>
                    <Link to="/quiz"><Button   className="btnMenu" size="large" style={style}>Quiz</Button></Link>
                    {/* <Link to="/dashboard"><Button className="btnMenu" size="large"  style={style}>Dashboard</Button></Link> */}
                    <Button  className="btnMenu" size="large" style={style} >Forum</Button>
                </div>
            </div>
        )

    }

}

export default HomeContainer