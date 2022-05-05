import React from "react";
import { Link } from "react-router-dom";


class TermMenu extends React.Component{
    render(){
        return(
            <div className="termDiv">
              <Link to="/"><button className="termMenu">Główna</button></Link>
                <Link to="/quiz"><button className="termMenu">Quiz</button></Link>
                <button className="termMenu">Forum</button>
            </div>
        )
    }
}

export default TermMenu