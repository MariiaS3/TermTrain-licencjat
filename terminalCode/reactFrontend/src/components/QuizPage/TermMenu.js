import React from "react";
import { Link } from "react-router-dom";


class TermMenu extends React.Component{
    render(){
        return(
            <div >
                <Link to="/"><button className="btnMenu">Główna</button></Link>
                <Link to="/term"><button className="btnMenu">Terminal</button></Link>
                <button className="btnMenu">Forum</button>
            </div>
        )
    }
}

export default TermMenu