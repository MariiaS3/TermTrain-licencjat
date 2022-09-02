import React, { useState } from "react"
import "./Login.css"

import {
    emailValidator,
    passwordValidator,
} from "./validators";

async function createUser(credentials) {
    return fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then((response) => {
            if (!response.ok) throw new Error(response.status);
            else return response.json();
        })
        .catch((error) => {
            return "error"
        });

}

export default function Form() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [messEmail, setMessEmail] = useState('')
    const [messPass, setMessPass] = useState('')

    const [message, setMessage] = useState(false)

    const handleName = e => {
        e.preventDefault();
        setUsername(e.target.value)
        setMessage('')
    }

    const handleEmail = e => {
        setEmail(e.target.value)
        setMessage('')
    }

    const handlePassword = e => {
        setPassword(e.target.value)
        setMessage('')
    }

    const handleSubmit = async e => {
        setMessEmail(emailValidator(email).messange);
        setMessPass(passwordValidator(password).messange);
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
            setMessage("Wypełnij wszystkie pola")
        } else if (emailValidator(email).messange !== "" || passwordValidator(password).messange !== "") {
        } else {
            const token = await createUser({ username: username, email: email, pass: password });
            if (token !== "error") {
                setMessage("Konto zostało  pomyślnie utworzone, teraz możesz się zalogować!");
            } else {
                setMessage("Użytkownik o takim e-mailu już istnieje")
            }
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
        <div className="signup">
            <h1 style={{ textAlign: 'center' }}>User Registration</h1>
            <form id="list" onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input id="add" type="text" onChange={handleName} value={username}></input>
                </label>
                <label>
                    <p>Email</p>
                    <input id="add" type="text" placeholder="name@example.com" onChange={handleEmail} value={email}></input>
                    {messEmail === "" ? <div></div> : <div style={{ color: "red" }}>{messEmail}</div>}
                </label>
                <label>
                    <p>Password</p>
                    <input id="add" type="text" onChange={handlePassword} value={password}></input>
                    {messPass === "" ? <div></div> : <div style={{ color: "red" }}>{messPass}</div>}
                </label>
                <div style={{ textAlign: 'center', padding: '20px', fontSize: '16px' }}>
                    <button id="go" type="submit" >Submit</button>
                </div>
            </form>
            <div className="error">
                {someMesange()}
            </div>
        </div>


    )
}