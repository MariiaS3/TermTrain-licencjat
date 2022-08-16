import React from "react"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./edycja.css"
async function createQuiz(credentials) {
    return axios.post('http://localhost:8080/api/quiz', credentials)
}

export default class AddNewQuiz extends React.Component {
    state = {
        quiz: [],
        name: "",
    };
  
    async componentDidMount() {
        const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz/";
        const response = await axios.get(QUIZ_API_BASE_URL);
        this.setState({ quiz: response.data });
    }

    render() {
        const handleSubmit = async e => {
            e.preventDefault();

            if (this.state.name !== "") {
                const newQuiz = await createQuiz({
                    description: this.state.name
                });
                const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz/";
                const response = await axios.get(QUIZ_API_BASE_URL);
                this.setState({ quiz: response.data });
            }

        }

        const handleDelete = async (id) => {
            const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz/" + id;
            await axios.delete(QUIZ_API_BASE_URL, id);
            const QUIZ_URL = "http://localhost:8080/api/quiz/";
            const res = await axios.get(QUIZ_URL);
            this.setState({ quiz: res.data });
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
                    <Link to="/"><Button  className="btnMenu" size="large" style={styleBtn}>Główna</Button></Link>
                    <Link to="/term"><Button  className="btnMenu" size="large" style={styleBtn}>Terminal</Button></Link>
                    <Link to="/quiz"><Button  className="btnMenu" size="large" style={styleBtn}>Quiz</Button></Link>
                    <Button  className="btnMenu" size="large" style={styleBtn} >Forum</Button>
                </div>
                <form className="formAdd" onSubmit={handleSubmit}>
                    <input style={{ width: '80%', maxHeight: '25px', minHeight: '25px' }} type="text" onChange={e => this.setState({ name: e.target.value })} placeholder="Add new quiz..." />
                    <Button className="btnMenu" type="submit" style={style}>Add</Button>
                </form>
                <table>
                    <thead style={{ height: '45px' }}>
                        {this.state.quiz.map(quiz => (
                            <tr key={uuidv4()}>
                                <td >{quiz.description}</td>
                                <td style={{ width: '80px', textAlign:'center' }}> <button id='del' type="submit" onClick={() => handleDelete(quiz.id)}>Delete</button></td>
                                <td style={{ width: '160px', textAlign:'center' }}><Link to={`/add/question/${quiz.id}`} ><button id='addNew' >Add Question</button></Link></td>
                            </tr>
                        ))}
                    </thead>
                </table>
            </div>
        )
    }
}