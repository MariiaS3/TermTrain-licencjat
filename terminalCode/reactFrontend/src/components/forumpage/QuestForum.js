import React from "react";

import { Link } from "react-router-dom";

import { Button } from "@mui/material";

import "./forum.css"
import axios from "axios";
import Comments from "./Comments";

class QuestForum extends React.Component {
    state = {
        id: "",
        forumName: "",
        forumDescribe: "",
    }

    async componentDidMount() {
        const id = (window.location).href
        const res = await axios.post("http://localhost:8080/api/forum/" + id.split("/")[id.split("/").length - 1])

        this.setState({
            forumName: res.data.name,
            forumDescribe: res.data.describe
        })

    }
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
            <div className="forumContainer">
                <div className="container" >
                    <div>
                        <img alt='' src='../img/logo.png' width={'100px'}></img>
                    </div>
                    <div className="mainMenu">
                        <Link to="/"><Button className="btnMenu" style={style} >Główna</Button></Link>
                        <Link to="/term"><Button className="btnMenu" style={style}>Terminal</Button></Link>
                        <Link to="/quiz"><Button className="btnMenu" size="large" style={style}>Quiz</Button></Link>
                        <Link to="/forum"><Button className="btnMenu" size="large" style={style} >Forum</Button></Link>
                    </div>
                    <div >
                        <Button size="large" style={logOut} onClick={e => { this.props.setLogToken() }} >Wyloguj się</Button>
                    </div>
                </div>
                <div className="questionList">
                    <div id="question">
                        <h1 id='quest-name'>{this.state.forumName}</h1>
                        <a id="quest-describ">{this.state.forumDescribe.split("\n").map(d =>{
                            return <li style={{listStyle:"none"}}>{d}</li>
                        })}</a>
                    </div>
                    <Comments propsToken={this.props.propsToken} />
                </div>

            </div>
        )
    }
}

export default QuestForum