import React from "react";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';


class HomeContainer extends React.Component {

    render() {


        const style = {
            height: '20px',
            width: '150px',
            margin: '30px',
            fontSize: '18px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
        }
        const logOut = {
            height: '20px',
            width: '150px',
            margin: '30px',
            fontSize: '12px',
            textAlign: 'center',
            color: '#0B1F64',
        }
        return (
            <div className="container" style={{ justifyContent: "right" }}>
                <div className="mainMenu">
                    <Link to="/term"><Button className="btnMenu" size="large" style={style}>Terminal</Button></Link>
                    <Link to="/quiz"><Button className="btnMenu" size="large" style={style}>Quiz</Button></Link>
                    <Link to="/forum"><Button className="btnMenu" size="large" style={style} >Forum</Button></Link>
                </div>
                <div >
                    <Button size="large" style={logOut} onClick={e => { this.props.setLogToken() }} >Wyloguj się</Button>
                </div>
            </div>
        )

    }

}

export default HomeContainer