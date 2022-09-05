import React, { useState } from 'react';

import './Login.css';
import axios from 'axios';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
  return axios.post('http://localhost:8080/api/user/login', credentials)
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email: email,
      pass: password
    });
    if (token.data === "password") {
      setMessage("Wprowadzone hasło jest nieprawidłowe.")
    } else if (token.data === "dane") {
      setMessage("Nie mogliśmy znaleźć konta pasującego do wprowadzonych danych logowania")
    }
    else {
      setToken(token.data);
      window.location.reload(false);
    }
  }

  const someMesange = () => {

    return (
      <div style={{
        display: message !== "" ? '' : 'none', textAlign: 'center'
      }}>
        <p >{message}</p>
      </div>
    )
  }
  const style = {
    height: '35px',
    width: '180px',
    marginBottom: '10px',
    marginTop: '10px',
    marginRight: '10px',
    fontSize: '16px',
    borderRadius: '10px',
    textAlign: 'center',
    fontFamily: '\'Times New Roman\', Times, serif',
    color: '#0B1F64',
    backgroundImage: 'linear-gradient(to right, #CAFFE3 0%, #CAFFE3 10%, #97a7eb 100%)'
  }
  return (
    <div className="login-wrapper">
      <h1>Proszę zaloguj się</h1>
      <form id="list" onSubmit={handleSubmit}>
        <label>
          <p style={{fontSize:"16px"}}>Email</p>
          <input id="add" type="text" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p style={{fontSize:"16px"}}>Hasło</p>
          <input id="add" type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div style={{ textAlign: 'center', padding: '40px', fontSize: '16px' }}>
          <Button  variant="contained" className="btnMenu" style={style} type="submit">Zaloguj się</Button>
        </div>
      </form>
      <div className="error">
        {someMesange()}
      </div>
    </div>
  )
}
