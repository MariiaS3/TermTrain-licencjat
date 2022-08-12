import React from "react";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';


import Terminal from "../Terminal"
import "./terminal.css"

class TermContainer extends React.Component {
    render() {
        const style = {
            width: '100px',
            marginTop: '30px',
            marginBottom: '30px',
            fontSize: '18px',
            borderRadius: '10px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
            // backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
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
                    <Terminal termStyle={termStyle} propsToken={this.props.propsToken}/>
                </div>
                <div className="termDiv">
                    <ul style={{ paddingTop: '50px', paddingLeft: '30px', listStyle: "none" }}>
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
            </div>
        )
    }
}

export default TermContainer