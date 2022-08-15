import React from "react";

import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

import "./dashboard.css"

class Dashboard extends React.Component {

    state = {
        results: [],
    }

    async componentDidMount() {
        const id = (this.props.propsToken).split(':')
        const LIST_RESULTS_URL = "http://localhost:8080/api/user/get-results/" + id[0];
        const res = await axios.post(LIST_RESULTS_URL, id[0])
        this.setState({ results: res.data })
    }

    render() {
        const style = {
            width: '200px',
            height: '20px',
            marginTop: '30px',
            fontSize: '16px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
        }
        const styleTab = {
            width: '200px',
            textAlign: 'center',
            fontSize: '16px',
            marginTop: '30px',
        }
        return (
            <div className="dashboard">
                <input type="radio" name="group" className="dash" id="result" defaultChecked></input>
                <input type="radio" name="group" className="dash" id="pass"></input>
                <div className="mainMenu">
                    <label className="tabDash" id="result-tab" htmlFor="result" style={styleTab}>POSTĘP</label>
                    <label className="tabDash" id="pass-tab" htmlFor="pass" style={styleTab}>USTAWIENIA</label>
                    <Link to="/"><Button type="submit" className="btnMenu" size="large" style={style}>Główna</Button></Link>
                    <Link to="/term"><Button type="submit" className="btnMenu" size="large" style={style}>Terminal</Button></Link>
                    <Link to="/quiz"><Button type="submit" className="btnMenu" size="large" style={style}>Quiz</Button></Link>
                    <Button type="submit" className="btnMenu" size="large" style={style}>Forum</Button>
                </div>
                <div className="panelsDash">
                    <div className="panelDash" id="result-panel">
                        <div className="array">
                            <table>
                                <thead >
                                    <tr>
                                        <td style={{ width: '400px', height: '30px' }}>Name</td>
                                        <td style={{ width: '400px', height: '30px' }}>Wynik</td>
                                        <td style={{ width: '400px', height: '30px' }}>Data</td>
                                    </tr>
                                    {this.state.results.map(result => (
                                        <tr key={uuidv4()}>
                                            <td style={{ width: '400px', height: '30px' }}>{result.name_quiz}</td>
                                            <td style={{ width: '400px', height: '30px' }}>{result.result}</td>
                                            <td style={{ width: '400px', height: '30px' }}>{result.data}</td>
                                        </tr>
                                    ))}
                                </thead>
                            </table>
                        </div>
                    </div>
                    <div className="panelDash" id="pass-panel">
                        <form className="list">
                            <label >
                                <p>Old Password</p>
                                <input id="changePass" type="text" />
                            </label>
                            <label>
                                <p>New Password</p>
                                <input id="changePass" type="text" />
                            </label>
                            <div style={{ textAlign: 'center', padding: '30px', fontSize: '16px' }}>
                                <button className="changePass" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )

    }

}

export default Dashboard