import React from "react";

import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ListResults from "./ListResults"

class Nav extends React.Component {

    render() {
        const style = {
            width: '200px',
            margin: '10px 15px',
            fontSize: '16px',
            textAlign: 'center',
            fontFamily: '\'Times New Roman\', Times, serif',
            color: '#0B1F64',
        }
        const styleTab = {
            width: '200px',
            textAlign: 'center',
            fontSize: '16px',
            margin: '15px 15px',
            marginTop: '30px',
            textAlign: 'center',
        }
        return (
            <div >
                <input type="radio" name="group" className="dash" id="result" defaultChecked></input>
                <input type="radio" name="group" className="dash" id="pass"></input>
                <div className="tabsDash">
                    <label className="tabDash" id="result-tab" htmlFor="result" style={styleTab}>POSTĘP</label>
                    <label className="tabDash" id="pass-tab" htmlFor="pass" style={styleTab}>USTAWIENIA</label>
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
                            <Button type="submit" className="btnMenu" size="large" style={style}>Forum</Button>
                        </li>
                    </ul>
                </div>
                <div className="panelsDash">
                    <div className="panelDash" id="result-panel">
                        <ListResults propsToken={this.props.propsToken} />
                    </div>
                    <div className="panelDash" id="pass-panel">
                        <form className="list">
                            <label >
                                <p>Old Password</p>
                                <input  id="changePass" type="text" />
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

export default Nav