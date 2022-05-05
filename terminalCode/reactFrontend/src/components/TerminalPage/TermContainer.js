import React from "react";

import TermMenu from "./TermMenu"
import Terminal from "../Terminal"

class TermContainer extends React.Component {
    render() {
        return (
            <div className="containerTerm">
                <Terminal />
                <TermMenu />
            </div>
        )
    }
}

export default TermContainer