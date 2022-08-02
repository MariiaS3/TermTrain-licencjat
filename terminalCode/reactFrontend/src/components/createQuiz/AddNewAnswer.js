import React from "react"

import { Button } from "@mui/material";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";


async function createAnswer(credentials, id) {
    return axios.post("http://localhost:8080/api/question/" + `${id}` + "/answer", credentials)
}

export default class AddNewQuiz extends React.Component {
    state = {
        answers: [],
        corect: false,
        name: "",
        idQuestion: "",
    };

    async componentDidMount() {
        const path = window.location.pathname;
        this.setState({ idQuestion: path.split('/')[3] })
        const QUIZ_API_BASE_URL = "http://localhost:8080/api/question/" + `${path.split('/')[3]}` + "/answer";
        const response = await axios.get(QUIZ_API_BASE_URL);
        this.setState({ answers: response.data });
    }

    render() {
        const handleSubmit = async e => {
            e.preventDefault();
            
            if (this.state.name !== "") {
                const newAnswer = await createAnswer({
                    text: this.state.name,
                    corect: this.state.corect
                }, this.state.idQuestion);
                const QUIZ_API_BASE_URL = "http://localhost:8080/api/question/" + `${this.state.idQuestion}` + "/answer";
                const response = await axios.get(QUIZ_API_BASE_URL);
                this.setState({ answers: response.data });
            }

        }

        const handleDelete = async (id) => {
            const QUIZ_API_BASE_URL = "http://localhost:8080/api/answer/" + `${id}`;
            await axios.delete(QUIZ_API_BASE_URL, id);
            const QUIZ_URL = "http://localhost:8080/api/question/" + `${this.state.idQuestion}` + "/answer";
            const res = await axios.get(QUIZ_URL);
            this.setState({ answers: res.data });
        }

        const style = {
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

        const styleBtn = {
            height: '20px',
            width: '150px',
            margin: '30px',  
            fontSize: '18px',
            textAlign: 'center',
            fontFamily:'\'Times New Roman\', Times, serif', 
            color:'#0B1F64',
        }
        return (
            <div className="addQuiz">
                <div className="mainMenu">
                    <Link to="/"><Button className="btnMenu" size="large" style={styleBtn}>Główna</Button></Link>
                    <Link to="/term"><Button className="btnMenu" size="large" style={styleBtn}>Terminal</Button></Link>
                    <Link to="/dashboard"><Button  className="btnMenu" size="large"  style={styleBtn}>Dashboard</Button></Link>
                    <Link to="/quiz"><Button className="btnMenu" size="large" style={styleBtn}>Quiz</Button></Link>
                    <Button className="btnMenu" size="large" style={styleBtn} >Forum</Button>
                </div>
                <form className="formAdd" onSubmit={handleSubmit}>
                    <input style={{ width: '70%', maxHeight: '25px', minHeight: '25px' }} type="text" onChange={e => this.setState({ name: e.target.value })} placeholder="Add new answer..." />
                    <span style={{margin:'10px'}}>is corect</span>
                    <input style={{ width: '15px', height: '15px' }} type="checkbox" onChange={e => this.setState({ corect: e.target.checked })}  />
                    <Button className="btnMenu" type="submit" style={style}>Add</Button>
                </form>
                <table>
                    <thead style={{ height: '45px' }}>
                        {this.state.answers.map(answer => (
                            <tr key={uuidv4()}>
                                <td >{answer.text}</td>
                                <td style={{ width: '80px', textAlign:'center' }}>{answer.corect ? "true": "false"}</td>
                                <td style={{  width: '160px', textAlign:'center' }}> <button id='del' type="submit" onClick={() => handleDelete(answer.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </thead>
                </table>
            </div>
        )
    }
}