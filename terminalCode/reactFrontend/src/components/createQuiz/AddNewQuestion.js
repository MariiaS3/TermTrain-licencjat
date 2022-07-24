import React from "react"

import { Button} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

async function createQuestion(credentials, id ) {
    return axios.post('http://localhost:8080/api/quiz/'+ `${id}` + "/question", credentials)
}

export default class AddNewQuiz extends React.Component {
    state = {
        questions: [],
        name: "",
        idQuiz:"",
    };

    async componentDidMount() {
        const path =window.location.pathname;
        this.setState({idQuiz:path.split('/')[3] })
        const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz/" + `${path.split('/')[3]}` + "/question";
        const response = await axios.get(QUIZ_API_BASE_URL);
        this.setState({ questions: response.data });
    }

    render() {
        const handleSubmit = async e => {
            e.preventDefault();
            
            if (this.state.name !== "") {
                const newQuest = await createQuestion({
                    text: this.state.name
                }, this.state.idQuiz);

                const QUIZ_API_BASE_URL = "http://localhost:8080/api/quiz/" + `${this.state.idQuiz}` + "/question";
                const response = await axios.get(QUIZ_API_BASE_URL);
                this.setState({ questions: response.data });
            }

        }

        const handleDelete = async (id) => {
                const QUIZ_API_BASE_URL = "http://localhost:8080/api/question/"+`${id}`;
                await axios.delete(QUIZ_API_BASE_URL,id);
                const QUIZ_URL = "http://localhost:8080/api/quiz/" + `${this.state.idQuiz}` + "/question";
                const res = await axios.get(QUIZ_URL);
                this.setState({ questions: res.data });
        }

        const style = {
            height: '30px',
            width: '100px',
            marginBottom: '5px',
            margin: '10px',
            fontSize: '18px',
            borderRadius: '5px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
        }
        const styleBtn ={
            height: '30px',
            width: '120px',
            margin: '20px 15px',  
            fontSize: '18px',
            borderRadius: '10px',
            textAlign: 'center',
            fontFamily:'\'Times New Roman\', Times, serif', 
            color:'#0B1F64',
            backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #f2f8be 50%, #CAFFE3 100%)'
        }
        return (
            <div className="addQuiz">
                <div>
                    <Link to="/"><Button  variant="contained" className="btnMenu" size="large"  style={styleBtn}>Główna</Button></Link>
                    <Link to="/term"><Button  variant="contained" className="btnMenu" size="large" style={styleBtn}>Terminal</Button></Link>
                    <Link to="/quiz"><Button  variant="contained" className="btnMenu" size="large" style={styleBtn}>Quiz</Button></Link>
                    <Button  variant="contained" className="btnMenu" size="large" style={styleBtn} >Forum</Button>
                </div>
                <form className="formAdd" onSubmit={handleSubmit}>
                    <input  style={{ width: '80%', maxHeight:'30px', minHeight: '30px'}} type="text" onChange={e => this.setState({ name: e.target.value }) } placeholder="Add new question..." />
                    <Button  className="btnMenu" type="submit" style={style}>Add</Button>
                </form>
                <table>
                    <thead style={{height: '45px'}}>
                    {this.state.questions.map(question => (
                         <tr key={uuidv4()}>
                                <td>{question.text}</td>
                                <td style={{width: '70px'}}> <button id='del' type="submit" onClick={() => handleDelete(question.id)}>Delete</button></td>
                                <td style={{width: '160px'}}><Link to={`/add/answer/${question.id}`}><button id='addNew'>Add answer</button></Link></td>
                            </tr>
                    ))}
                       </thead>
                </table>
            </div>
        )
    }
}