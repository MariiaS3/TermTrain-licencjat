import React from "react";


import Nav from "./Nav"

import "./dashboard.css"

class Dashboard extends React.Component {

    render() {
        return (
                <Nav propsToken={this.props.propsToken} />
        )

    }

}

export default Dashboard