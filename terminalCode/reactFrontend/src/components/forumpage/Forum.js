import React from "react"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaPlusCircle } from "react-icons/fa"
import { IconButton, Tooltip, } from '@mui/material';
import "./forum.css"
import axios from "axios";


async function createQuest(credentials) {
    return axios.post('http://localhost:8080/api/forum', credentials)
}


class Forum extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            describ: "",
            quest:[],
        }
    }

    async componentDidMount() {
        
        const FORUM_API_BASE_URL = "http://localhost:8080/api/forum";
        const response = await axios.get(FORUM_API_BASE_URL);
        console.log(response.data)
        this.setState({ quest: response.data, isLoading: false })
      }

    render() {
        const handleSubmit = async e =>{
            e.preventDefault();
            if (this.state.name !== "") {
                const newQuest = await createQuest({
                    describe: this.state.describ,
                    name: this.state.name
                });
                const QUIZ_API_BASE_URL = "http://localhost:8080/api/forum/";
                const response = await axios.get(QUIZ_API_BASE_URL);
                this.setState({ quest: response.data , name:"", describ:""});
            }
        
        }
        
        const style = {
            height: '20px',
            width: '150px',
            margin: '30px',
            fontSize: '18px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
        }
        const styleAdd = {
            height: '30px',
            width: '130px',
            marginBottom: '5px',
            margin: '10px',
            fontSize: '18px',
            borderRadius: '5px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
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
            <div className="forumContainer" >
                <div className="mainMenu" style={{ justifyContent: "right" }}>
                    <div className="mainMenu">
                        <Link to="/"><Button className="btnMenu" style={style} >Główna</Button></Link>
                        <Link to="/term"><Button className="btnMenu" style={style}>Terminal</Button></Link>
                        <Button className="btnMenu" style={style}>Forum</Button>
                    </div>
                    <div >
                        <Button size="large" style={logOut} onClick={e => { this.props.setLogToken() }} >Wyloguj się</Button>
                    </div>
                </div>
                <div className="questionList">
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Tooltip placement="top" title='Dodaj nowe pytanie'>
                            <IconButton href="#forum-modal"
                                style={{ color: '#a8edf3', fontSize: "35px" }}
                            ><FaPlusCircle /></IconButton>
                        </Tooltip>

                    </div>
                    <div className="modal" id="forum-modal">
                        <div className="modal-content" >
                                <a href="#" className="modal-close" onClick={e=> this.setState({name:"", describ:""})}>&times;</a>
                                <h1 id="text">Zadaj pytanie</h1>
                                <p id="tytul"  >Tytuł </p>
                                <p id="id_tytul">Bądź konkretny i wyobraź sobie, że zadajesz pytanie innej osobie </p>
                                <input id="text-input" type="text" value={this.state.name} onChange={e=> this.setState({name:e.target.value})} ></input>
                                <p id="id_tytul">Opisz dokładniej swój problem. </p>
                                <div className="text-input"  suppressContentEditableWarning contentEditable spellCheck={false} onInput={(e) => this.setState({describ:e.currentTarget.outerText})} >{""}</div>
                                <Button type="submit"  style={styleAdd}  onClick={handleSubmit}>Dodaj</Button>
                        </div>

                    </div>
                    {this.state.quest.map(quest => (
                        <li key={quest.id} className="questItem">
                            <Link to={"/forum/" + quest.id}><span style={{ "marginLeft": "50px", "fontSize": "23px" }}>{quest.name}</span></Link>
                        </li>
                    ))}
                </div>
            </div>
        )
    }
}

export default Forum