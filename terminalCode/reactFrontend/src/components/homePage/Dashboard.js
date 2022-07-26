import React from "react";

import { Link } from "react-router-dom";
import Nav from "./Nav"
import ListResults from "./ListResults"
import Button from '@mui/material/Button';
import "./dashboard.css"

class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard" >
                <div className="Nav">
                <Nav />
                </div>
                <div className="listResult">
                <ListResults  propsToken={this.props.propsToken}/>
                </div>
            </div>

        )

    }

}

export default Dashboard