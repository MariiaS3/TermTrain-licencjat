import {useState} from "react"


export default function Form(){
   
    return(
        <div className="login">
            <h1>User Log In</h1>
            <form>
                <label>
                    <p>Email</p>
                    <input type="text" ></input>
                </label>
                <label>
                    <p>Password</p>
                    <input type="text" ></input>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
      
        </div>

     
    )
}