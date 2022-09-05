import React from "react";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';


import Terminal from "./Terminal"
import "./terminal.css"

class TermContainer extends React.Component {
    render() {
        const style = {
            width: '100px',
            marginTop: '50px',
            marginBottom: '30px',
            fontSize: '18px',
            borderRadius: '10px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
        }

        const termStyle = {
            width: '87%',
            height: '100%',
            position: 'absolute',
            overflow: 'scroll',
            flexDirection: 'row',
            backgroundColor: 'black',
        }
        const logOut = {
            height: '20px',
            width: '120px',
            marginBottom: '50px',
            fontSize: '12px',
            textAlign: 'center',
            color: '#0B1F64',
        }
        return (
            <div className="containerTerm">
                <div>
                    <Terminal termStyle={termStyle} propsToken={this.props.propsToken} />
                </div>
                <div className="termDiv">

                    <div>
                        <ul style={{ listStyle: "none", marginTop:"50px" }}>
                            <li >
                                <Link to="/"><Button type="submit"  size="large" style={style}>Główna</Button></Link>
                            </li>
                            <li >
                                <Link to="/quiz"><Button type="submit"  size="large" style={style}>Quiz</Button></Link>
                            </li>
                            <li >
                                <Link to="/forum"><Button type="submit" size="large" style={style}>Forum</Button></Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <Button size="large" style={logOut} onClick={e => { this.props.setLogToken() }}>Wyloguj się</Button>
                    </div>
                </div>

            </div>
        )
    }
}

export default TermContainer