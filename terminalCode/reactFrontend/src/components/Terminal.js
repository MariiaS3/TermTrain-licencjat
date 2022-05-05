import React from "react";

import { v4 as uuidv4 } from "uuid"
import Commands from "./Commands";

class Terminal extends React.Component {
    state = {
        prompt: "user@localhost:~#",
        prevPath:"/home/user",
        path: "/home/user",
        command: [],
        history: []
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    changePath = newPath =>{
        this.setState({
            prevPath: this.state.path,
            path: newPath
        })
    }
    
    addToHistory = (title) => {
        const newHistory = {
            id: uuidv4(),
            title: title
        }
        this.setState({
            history: [...this.state.history, newHistory],
        })
    }

    addCommand = (text) => {
        var newCommand = []
        const t = text.split("\n")
        for(var i=0;i<t.length;i++){
            const newCmd = {
                id: uuidv4(),
                text:t[i]
            }
            newCommand=[...newCommand, newCmd]
        }
    
        this.setState({
            command: [...this.state.command, ...newCommand],
        })
        
    }

    render() {
        return (
            <div className="termContainer">
                <div className="output">
                    <ul>
                        {this.state.command.map(cmd =>
                            <li key={cmd.id}>{
                                cmd.text.includes("#") || cmd.text.includes("$") ? 
                                    <span style={{color: "#53D632"}}>{cmd.text.includes("#")  ? cmd.text.split("#")[0] +"# " : cmd.text.split("$")[0]+"$ " } <a style={{color: "#D7DEDE"}}>{cmd.text.includes("#")  ? cmd.text.split("#")[1] : cmd.text.split("$")[1] }</a></span>  :
                                <span style={{color: "#D7DEDE"}}>{cmd.text}</span>}
                            </li>
                        )}
                    </ul>
                </div>
                <Commands
                    command={this.state.command}
                    addHistoryProps={this.addToHistory}
                    addCommandPops={this.addCommand}
                    prompt={this.state.prompt}
                    path={this.state.path}
                    history={this.state.history} 
                    changePathProp={this.changePath}
                    prevPath={this.state.prevPath}
                   />
            </div>
        )
    }
}


export default Terminal




