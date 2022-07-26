import React from "react";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';


class Nav extends React.Component {

    render() {
        const style = {
            height: '25px',
            width: '160px',
            marginTop: '35px',
            marginLeft: '15px',
            fontSize: '12px',
            borderRadius: '10px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
        }

        return (
            <div className="navContainer">
                <div >
                    <ul>
                        <li >
                            <Link to="/"><Button type="submit" className="btnMenu" size="large" style={style}>Główna</Button></Link>
                        </li>
                        <li >
                            <Link to="/term"><Button type="submit" className="btnMenu" size="large" style={style}>Terminal</Button></Link>
                        </li>
                        <li >
                            <Link to="/quiz"><Button type="submit" className="btnMenu" size="large" style={style}>Quiz</Button></Link>
                        </li>
                        <li >
                            <Button type="submit" className="btnMenu" size="large" style={style} >Forum</Button>
                        </li>
                    </ul>
                </div>
                <div className="ustawienia">
                    Ustawienia
                </div>
            </div>
        )

    }

}

export default Nav