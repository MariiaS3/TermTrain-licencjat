import React from "react";

import { v4 as uuidv4 } from "uuid"
import Commands from "../Terminal/Commands";
import directory from "../Terminal/directory";
import file from "../Terminal/file";
import Man from "../Terminal/Man";

import Nano from "../Terminal/Nano"


class Terminal extends React.Component {

    constructor(props) {
        super(props);

        const userName = props.propsToken.split(/\s+/)[props.propsToken.split(/\s+/).length - 1]

        this.state = {
            prompt: userName + "@localhost:~$",
            prevPath: "/home/" + userName,
            path: "/home/" + userName,
            command: [],
            showModal: false,
            showMan: false,
            history: [],
            title: "",
            text: "",
        }
        for (let k = 0; k < file.length; k++) {
            if (file[k].path === '/home/') {
                file[k].path += userName;
                file[k].user = userName;
                file[k].group = userName;
            }
        }

        for (let k = 0; k < directory.length; k++) {
            if (directory[k].path === '/home/') {
                directory[k].path += userName;
                directory[k].user = userName;
                directory[k].group = userName;
            }
            if (directory[k].name === 'user') {
                directory[k].name = userName
                directory[k].user = userName;
                directory[k].group = userName;
            }
        }
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
        for (let k = 0; k < file.length; k++) {
            if (file[k].name === title && file[k].path === this.state.path) {
                t += file[k].text
            }
        }
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
        let his = this.state.history;
        his.length = 0;
        this.setState({ history: his })
    }
    deleteCommand = () => {
        let cmd = this.state.command;
        cmd.length = 0;
        this.setState({ command: cmd })
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
    addManCommand = (text) => {
        this.setState({
            text: text
        })
    }
    showMan = () => {
        this.setState({
            showModal: !this.state.showModal,
            showMan: !this.state.showMan,
        });
    };
    saveText = (text) => {
        for (let k = 0; k < file.length; k++) {
            if (file[k].name === this.state.title && file[k].path === this.state.path) {
                file[k].text = text
            }
        }
    };


    render() {

        return (
            <div className="termContainer" style={this.props.termStyle}>
                {!this.state.showModal ? <div style={{width: "100%"}}>
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
                                        <span style={{ color: "#D7DEDE", paddingLeft: "10px" }}>{cmd.text}</span>}
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
                        showManProps={this.showMan}
                        addManCommandProp={this.addManCommand}
                        prompt={this.state.prompt}
                        path={this.state.path}
                        sleep={this.sleep}
                        history={this.state.history}
                        prevPath={this.state.prevPath}
                    />
                </div> : <div>{!this.state.showMan ? <Nano onClose={this.showModal} onSave={this.saveText} children={this.state.text} /> : <Man onClose={this.showMan} cmd={this.state.text} />} </div>}
            </div>
        )
    }
}


export default Terminal




