import React from "react";

import { v4 as uuidv4 } from "uuid"
import Commands from "./Commands";
import directory from "./directory";
import file from "./file";

import Modal from "./Modal"

class Terminal extends React.Component {

    constructor(props) {
        super(props);

        const userName = props.propsToken.split(/\s+/)[this.props.propsToken.split(/\s+/).length - 1]

        this.state = {
            prompt: userName + "@localhost:~$",
            prevPath: "/home/" + userName,
            path: "/home/" + userName,
            command: [],
            showModal: false,
            history: [],
            title: "",
            text: ""
        }
        file.map(file => {
            if (file.path === '/home/') {
                file.path += userName;
                file.user = userName;
                file.group = userName;
            }
        })

        directory.map(dir  => {
            if (dir.path === '/home/') {
                dir.path += userName;
                dir.user = userName;
                dir.group = userName;
            }
            if(dir.name==='user'){
                dir.name = userName
                dir.user = userName;
                dir.group = userName;
            }
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    changePath = newPath => {
        this.setState({
            prevPath: this.state.path,
            path: newPath
        })
    }

    addTitle = (title) => {
        let t = ""
        file.map(file => {
            if (file.name === title && file.path === this.state.path) {
                t += file.text
            }
        })
        console.log(t)
        this.setState({
            title: title,
            text: t
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
    deleteHistory = () => {
        this.state.history.length = 0;
        this.setState({ history: this.state.history })
    }
    deleteCommand = () => {
        this.state.command.length = 0;
        this.setState({ command: this.state.command })
    }
    addCommand = (text) => {
        var newCommand = []
        const t = text.split("\n")
        for (var i = 0; i < t.length; i++) {
            const newCmd = {
                id: uuidv4(),
                text: t[i]
            }
            newCommand = [...newCommand, newCmd]
        }
        this.setState({
            command: [...this.state.command, ...newCommand],
        })

    }

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });
    };
    saveText = (text) => {
        console.log(text)
        file.map(file => {
            if (file.name === this.state.title && file.path === this.state.path) {
                file.text = text
            }
        })
    };
    render() {

        return (
            <div className="termContainer" style={this.props.termStyle}>
                {!this.state.showModal ? <div>
                    <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                        <ul>
                            {this.state.command.map(cmd =>
                                <li style={{ listStyleType: "none" }} key={cmd.id}>{
                                    cmd.text.includes(":~#") || cmd.text.includes(":~$") ?
                                        <span style={{ color: "#53D632" }}>
                                            {cmd.text.includes(":~#") ? cmd.text.split(":~#")[0] + ":~# " : cmd.text.split(":~$")[0] + ":~$ "}
                                            <span style={{ color: "#D7DEDE" }}>
                                                {cmd.text.includes(":~#") ? cmd.text.split(":~#")[1] : cmd.text.split(":~$")[1]}
                                            </span>
                                        </span> :
                                        <span style={{ color: "#D7DEDE" }}>{cmd.text}</span>}
                                </li>
                            )}
                        </ul>
                    </div>

                    <Commands
                        command={this.state.command}
                        addHistoryProps={this.addToHistory}
                        addCommandPops={this.addCommand}
                        delCommandProps={this.deleteCommand}
                        delHistoryProps={this.deleteHistory}
                        addTitlePops={this.addTitle}
                        changePathProp={this.changePath}
                        showModalProps={this.showModal}
                        prompt={this.state.prompt}
                        path={this.state.path}
                        sleep={this.sleep}
                        history={this.state.history}
                        prevPath={this.state.prevPath}
                    />
                </div> : <div>{!this.showMan ?<Modal onClose={this.showModal} onSave={this.saveText} children={this.state.text}  /> : <div ></div>}</div>}
            </div>
        )
    }
}


export default Terminal




