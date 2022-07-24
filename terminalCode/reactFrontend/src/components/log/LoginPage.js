import React from "react";
import Login from "./Login"
import Signup from "./Signup"
import "./Login.css"

class LoginPage extends React.Component {

    render() {
        const styleLog ={
            backgroundColor: '#F2FBF7',
            boxShadow: '0 0.1rem 0.4rem #68ce98',
            width: '100%',
            minHeight:'70%',
            borderRadius: '5px',
            padding: '20px'
      }
      const styleSignup ={
        backgroundColor: '#F2FBF7',
        boxShadow: '0 0.1rem 0.4rem #68ce98',
        width: '100%',
        minHeight:'95%',
        borderRadius: '5px',
        padding: '20px'
  }
        return (
                <div className="wrapper">
                    <input className="radio" id="signup" name="group" type="radio"></input>
                    <input className="radio" id="login" name="group" type="radio" defaultChecked></input>
                    <div className="tabs">
                        <label className="tab" id="login-tab" htmlFor="login">Login</label>
                        <label className="tab" id="signup-tab" htmlFor="signup">Sign up</label>
                    </div>
                    <div className="panels">
                        <div className="panel" style={styleLog} id="login-panel">
                            <Login setToken={this.props.setToken} style={this.style} />
                        </div>
                        <div className="panel" style={styleSignup} id="signup-panel">
                            <Signup />
                        </div>
                    </div>
                </div>
        )

    }

}

export default LoginPage