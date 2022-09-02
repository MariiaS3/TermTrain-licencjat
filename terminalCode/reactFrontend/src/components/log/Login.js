import React, { useState } from 'react';

import './Login.css';
import axios from 'axios';


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
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form id="list" onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input id="add" type="text" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input id="add" type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div style={{ textAlign: 'center', padding: '40px', fontSize: '16px' }}>
          <button id="go" type="submit">Submit</button>
        </div>
      </form>
      <div className="error">
        {someMesange()}
      </div>
    </div>
  )
}
