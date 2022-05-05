import {useState} from "react"


export default function Form(){
    const [name, setName] =useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [submitted, setSubmit] = useState(false)
    const [error, setMessange] = useState(false)

    const handleName = e =>{
        setName(e.target.value)
        setSubmit(false)
    }

    const handleEmail = e =>{
        setEmail(e.target.value)
        setSubmit(false)
    }

    const handlePassword = e =>{
        setPassword(e.target.value)
        setSubmit(false)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(name===''||email==='' || password ===''){
            setMessange(true)
        }else{
            setSubmit(true);
            setMessange(false)
        }
    }

    const successMesange = () =>{
        return(
            <div className="success" style={{
                display: submitted ? '':'none'
            }}>
                <h1>User {name} successfully registered!</h1>
            </div>
        )
    }


    const errorMesange = () =>{
        return(
            <div className="success" style={{
                display: error ? '':'none'
            }}>
                <h1>Enter all the fields</h1>
            </div>
        )
    }

    return(
        <div className="signup">
            <h1>User Registration</h1>
            <form>
                <label>
                    <p>Name</p>
                    <input type ="text" onChange={handleName} value={name}></input>
                </label>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={handleEmail} value={email}></input>
                </label>
                <label>
                    <p>Password</p>
                    <input type="text" onChange={handlePassword} value={password}></input>
                </label>
                <div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <div className="error">
                {errorMesange()}
                {successMesange()}
            </div>
        </div>

     
    )
}