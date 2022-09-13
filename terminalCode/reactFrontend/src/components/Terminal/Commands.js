import React from "react";

import file from "./tool/file";


import history from "./commands/history"
import pwd from "./commands/pwd"
import cd from "./commands/cd"
import ls from "./commands/ls"
import touch from "./commands/touch"
import cp from "./commands/cp"
import mkdir from "./commands/mkdir"
import rmdir from "./commands/rmdir"
import rm from "./commands/rm"
import mv from "./commands/mv"
import cat from "./commands/cat"
import tail from "./commands/tail";
import head from "./commands/head";
import echo from "./commands/echo";
import wc from "./commands/wc";
import nano from "./commands/nano";
import date from "./commands/date";
import whoami from "./commands/whoami";




class Commands extends React.Component {
    state = {
        title: "",
        showAlet: false,
        prompt: "",
        index: 2,
        indexYes: [],
        indexNo: [],
        indexStop: 0,
        scrollUp: -1,
        overwrite: ""
    }


    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    listenCmd = (e) => {
        if (e === "Enter") {
            if (this.state.showAlet === false) {
                var d = this.props.prompt + " " + this.state.title;
                this.props.addCommandPops(d)
            }
            if (this.state.title.split(/\s+/)[0] === "ls") {
                this.props.addCommandPops(ls(this.props.prompt, this.state.title, this.props.path))
            }
            else if (this.state.title.split(/\s+/)[0] === "history") {
                if (this.state.title.includes('-c')) {
                    this.props.delHistoryProps();
                } else {
                    this.props.addCommandPops(history(this.props.prompt, this.state.title, this.props.history))
                }
            } else if (this.state.title.split(/\s+/)[0] === "pwd") {
                this.props.addCommandPops(pwd(this.props.prompt, this.state.title, this.props.path))
            } else if (this.state.title.split(/\s+/)[0] === "cd") {
                let res = cd(this.props.prompt, this.state.title, this.props.prevPath, this.props.path)
                this.props.changePathProp(res[0])
                this.props.addCommandPops(res[1])
            } else if (this.state.title.split(/\s+/)[0] === "touch") {
                this.props.addCommandPops(touch(this.props.prompt, this.state.title, this.props.path))
            } else if (this.state.title.split(/\s+/)[0] === "mkdir") {
                this.props.addCommandPops(mkdir(this.props.prompt, this.state.title, this.props.path))
            } else if (this.state.title.split(/\s+/)[0] === "rmdir") {
                this.props.addCommandPops(rmdir(this.props.prompt, this.state.title, this.props.path))
            } else if (this.state.title.split(/\s+/)[0] === "mv") {
                if (this.state.title.includes('-i')) {
                    if (this.state.prompt === 'yes') {
                        d += mv(this.props.prompt, this.state.title, this.props.path);
                        let m = this.state.overwrite + this.state.prompt;
                        this.props.addCommandPops(m)
                        this.setState({
                            prompt: "",
                            showAlet: false,
                            command: this.state.title,
                            title: "",
                            overwrite: ""
                        })
                    } else if (this.state.prompt === 'no') {
                        let m = this.state.overwrite + this.state.prompt;
                        this.props.addCommandPops(m)
                        this.setState({
                            prompt: "",
                            showAlet: false,
                            command: this.state.title,
                            title: "",
                            overwrite: "",
                        })
                    } else {
                        let isFile = false;
                        let folder = (this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]).split('/')
                        let nameDir = folder[folder.length - 1]
                        let pathDir = "/";
                        if (folder.length === 1) {
                            pathDir = this.props.path;
                        } else {
                            for (let i = 0; i < folder.length - 1; i++) {
                                pathDir += folder[i];
                                if (i < folder.length - 2)
                                    pathDir += "/";
                            }
                        }
                        for (let k = 0; k < file.length; k++) {
                            if (file[k].name === nameDir && pathDir === file[k].path) {
                                isFile = true
                            }
                        }
                        if (isFile === true) {
                            this.setState({
                                showAlet: true,
                                overwrite: "mv: overwrite '" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1] + "'?",
                            })
                        } else {
                            this.props.addCommandPops(mv(this.props.prompt, this.state.title, this.props.path))
                            this.setState({
                                prompt: "",
                                showAlet: false,
                                command: this.state.title,
                                title: "",
                                overwrite: "",
                            })
                        }
                    }
                }
                else {
                    this.props.addCommandPops(mv(this.props.prompt, this.state.title, this.props.path))
                }
            } else if (this.state.title.split(/\s+/)[0] === "rm") {
                if (this.state.title.includes('-i')) {
                    if (this.state.title.split(/\s+/).length > 2 && this.state.title.split(/\s+/).length > this.state.index) {
                        let j = 0
                        let tempYes = [];
                        let tempNo = [];
                        for (j = this.state.index; j < this.state.title.split(/\s+/).length; j++) {
                            let folder = (this.state.title.split(/\s+/)[j]).split('/')
                            let nameDir = folder[folder.length - 1]
                            let pathDir = "/";
                            if (folder.length === 1) {
                                pathDir = this.props.path;
                            } else {
                                for (let i = 0; i < folder.length - 1; i++) {
                                    pathDir += folder[i];
                                    if (i < folder.length - 2)
                                        pathDir += "/";
                                }
                            }
                            let isF = false;
                            for (let i = 0; i < file.length; i++) {
                                if (file[i].name === nameDir && pathDir === file[i].path) {
                                    tempYes.push(j)
                                    isF = true
                                }
                            }
                            if (isF === false) {
                                tempNo.push(j)
                            }
                        }
                        let isFile = false;
                        let m = this.props.prompt + " " + this.state.title;
                        for (let i = 0; i < tempYes.length; i++) {
                            if (tempYes[i] === 2) {
                                isFile = true
                            }
                        }
                        if (isFile === false) {
                            let n;
                            let tempRes = ""
                            for (let i = 2; i < this.state.title.split(/\s+/).length; i++) {
                                let isF = false
                                for (let l = 0; l < tempNo.length; l++) {
                                    if (tempNo[l] === i) {
                                        isF = true
                                        n = tempNo[l];
                                        m += "\n rm: cannot remove '" + this.state.title.split(/\s+/)[tempNo[l]] + "': No such file or directory\n";
                                        break;
                                    }
                                }
                                if (isF === false) {
                                    break;
                                }
                            }
                            this.props.addCommandPops(m)
                            this.setState({
                                index: j,
                                showAlet: true,
                                indexStop: n + 1,
                                response: tempRes,
                                indexYes: tempYes,
                                indexNo: tempNo,
                                overwrite: "rm: remove regular empty file '" + this.state.title.split(/\s+/)[this.state.indexStop] + "'?"
                            })
                        } else {
                            this.props.addCommandPops(m)
                            this.setState({
                                index: j,
                                showAlet: true,
                                indexStop: 2,
                                indexYes: tempYes,
                                indexNo: tempNo,
                                overwrite: "rm: remove regular empty file '" + this.state.title.split(/\s+/)[this.state.indexStop] + "'?"
                            })
                        }

                    } else {
                        let isFile = false;
                        let m = this.state.overwrite + this.state.prompt;
                        if (this.state.prompt === "yes") {
                            rm(this.props.prompt, this.state.title, this.props.path, this.state.indexStop)
                        }
                        if (this.state.indexStop + 1 < this.state.title.split(/\s+/).length) {
                            for (let i = 0; i < this.state.indexYes.length; i++) {
                                if (this.state.indexYes[i] === this.state.indexStop + 1) {
                                    isFile = true
                                }
                            }
                            if (isFile === true) {
                                this.props.addCommandPops(m)
                                this.setState({
                                    showAlet: true,
                                    indexStop: this.state.indexStop + 1,
                                    prompt: "",
                                    overwrite: "rm: remove regular empty file '" + this.state.title.split(/\s+/)[this.state.indexStop] + "'?"
                                })
                            } else {
                                let n;
                                for (let i = this.state.indexStop + 1; i < this.state.title.split(/\s+/).length; i++) {
                                    let isF = false
                                    for (let l = 0; l < this.state.indexNo.length; l++) {
                                        if (this.state.indexNo[l] === i) {
                                            isF = true
                                            n = this.state.indexNo[l];
                                            m += "\nrm: cannot remove '" + this.state.title.split(/\s+/)[this.state.indexNo[l]] + "': No such file or directory\n";
                                        }
                                    }
                                    if (isF === false) {
                                        break;
                                    }
                                }
                                if (n < this.state.title.split(/\s+/).length - 1) {
                                    this.props.addCommandPops(m)
                                    this.setState({
                                        showAlet: true,
                                        indexStop: n + 1,
                                        prompt: "",
                                        overwrite: "rm: remove regular empty file '" + this.state.title.split(/\s+/)[this.state.indexStop] + "'?"
                                    })
                                } else {
                                    this.props.addCommandPops(m)
                                    this.setState({
                                        index: 2,
                                        showAlet: false,
                                        indexStop: 0,
                                        title: "",
                                        prompt: "",
                                        overwrite: ""
                                    })
                                }
                            }
                        } else {
                            this.props.addCommandPops(m)
                            this.setState({
                                index: 2,
                                showAlet: false,
                                indexStop: 0,
                                title: "",
                                prompt: "",
                                overwrite: ""
                            })
                        }
                    }

                } else {
                    this.props.addCommandPops(rm(this.props.prompt, this.state.title, this.props.path, 0))

                }
            } else if (this.state.title.split(/\s+/)[0] === "cp") {
                if (this.state.title.includes('-i')) {
                    if (this.state.prompt === 'yes') {
                        d += cp(this.props.prompt, this.state.title, this.props.path);
                        let m = this.state.overwrite + this.state.prompt;
                        this.props.addCommandPops(m)
                        this.setState({
                            prompt: "",
                            showAlet: false,
                            command: this.state.title,
                            title: "",
                            overwrite: ""
                        })
                    } else if (this.state.prompt === 'no') {
                        let m = this.state.overwrite + this.state.prompt;
                        this.props.addCommandPops(m)
                        this.setState({
                            prompt: "",
                            showAlet: false,
                            command: this.state.title,
                            title: "",
                            overwrite: ""
                        })
                    } else {
                        let isFile = false;
                        let folder = (this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]).split('/')
                        let nameDir = folder[folder.length - 1]
                        let pathDir = "/";
                        if (folder.length === 1) {
                            pathDir = this.props.path;
                        } else {
                            for (let i = 0; i < folder.length - 1; i++) {
                                pathDir += folder[i];
                                if (i < folder.length - 2)
                                    pathDir += "/";
                            }
                        }
                        for (let k = 0; k < file.length; k++) {
                            if (file[k].name === nameDir && pathDir === file[k].path) {
                                isFile = true
                            }
                        }
                        if (isFile === true) {
                            d += this.props.prompt + " " + this.state.title;
                            this.props.addCommandPops(d)
                            this.setState({
                                showAlet: true,
                                overwrite: "cp: overwrite '" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1] + "'?"
                            })
                        } else {
                            this.props.addCommandPops(cp(this.props.prompt, this.state.title, this.props.path))
                            this.setState({
                                command: this.state.title,
                                title: "",
                            })
                        }
                    }
                }
                else {
                    this.props.addCommandPops(cp(this.props.prompt, this.state.title, this.props.path))
                }
            } else if (this.state.title.split(/\s+/)[0] === "cat") {
                this.props.addCommandPops(cat(this.props.prompt, this.state.title, this.props.path))
            } else if (this.state.title.split(/\s+/)[0] === "clear") {
                this.props.delCommandProps()
            } else if (this.state.title.split(/\s+/)[0] === "tail") {
                this.props.addCommandPops(tail(this.props.prompt, this.state.title, this.props.path))
            } else if (this.state.title.split(/\s+/)[0] === "head") {
                this.props.addCommandPops(head(this.props.prompt, this.state.title, this.props.path))
            } else if (this.state.title.split(/\s+/)[0] === "echo") {
                this.props.addCommandPops(echo(this.props.prompt, this.state.title, this.props.path))
            } else if (this.state.title.split(/\s+/)[0] === "wc") {
                this.props.addCommandPops(wc(this.props.prompt, this.state.title, this.props.path))
            } else if (this.state.title.split(/\s+/)[0] === "date") {
                this.props.addCommandPops(date(this.props.prompt, this.state.title))
            } else if (this.state.title.split(/\s+/)[0] === "nano") {
                this.props.addCommandPops(nano(this.props.prompt, this.state.title, this.props.path))
                if (!this.state.title.includes("--help")) {
                    this.props.addTitlePops(this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1])
                    this.props.showModalProps()
                }
            } else if (this.state.title.split(/\s+/)[0] === "man") {
                this.props.addManCommandProp(this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1])
                this.props.showManProps()
            } else if (this.state.title.split(/\s+/)[0] === "whoami") {
                this.props.addCommandPops(whoami(this.props.prompt, this.state.title))
            }
            else {
                d = this.props.prompt + " " + this.state.title + "\n";
                d += this.state.title + ": nie znaleziono polecenia"
                this.props.addCommandPops(d)
            }
            if ((!(this.state.title.split(/\s+/)[0] === "mv" && this.state.title.includes('-i'))) && (!(this.state.title.split(/\s+/)[0] === "rm" && this.state.title.includes('-i'))) && (!(this.state.title.split(/\s+/)[0] === "cp" && this.state.title.includes('-i')))) {
                this.setState({
                    command: this.state.title,
                    title: "",
                })
            }
        }
    }
    scrollHistoryUp = () => {
        if (this.props.history.length !== 0) {
            if (this.state.scrollUp === -1) {
                this.setState({
                    title: this.props.history[this.props.history.length - 1].title,
                    scrollUp: this.props.history.length - 1
                })
            } else if (this.state.scrollUp === 0) {

            } else {
                this.setState({
                    title: this.props.history[this.state.scrollUp - 1].title,
                    scrollUp: this.state.scrollUp - 1
                })
            }
        }
    }
    scrollHistoryDown = () => {
        if (this.state.scrollUp === this.props.history.length - 1) {
            this.setState({
                title: "",
                scrollUp: -1
            })
        } else if (this.state.scrollUp !== -1) {
            this.setState({
                title: this.props.history[this.state.scrollUp + 1].title,
                scrollUp: this.state.scrollUp + 1
            })
        }
    }
    render() {
        return (
            <div className="lineCmd">
                {!this.state.showAlet ? <div style={{width: "100%"}}><span>
                    {this.props.prompt}
                </span>
                    <input type="text" className="inputCmd"
                        value={this.state.title}
                        name="title"
                        onChange={this.onChange}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                this.listenCmd("Enter")
                                this.setState({
                                    scrollUp: -1
                                })
                                this.props.addHistoryProps(this.state.title)
                            } else if (e.key === "ArrowUp") {
                                this.scrollHistoryUp()
                            } else if (e.key === "ArrowDown") {
                                this.scrollHistoryDown()
                            }
                        }}>
                    </input> </div> : <div> <span style={{ color: 'white' }}> {this.state.overwrite} </span>
                    <input type="text" className="inputCmd"
                        value={this.state.prompt}
                        name="prompt"
                        onChange={this.onChange}
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                this.listenCmd("Enter")
                                this.props.addHistoryProps(this.state.title)
                            }
                        }}> </input></div>}</div>  ) }}
export default Commands



// handleClick() {
//     var i = 0;
//     var txt = 'Lorem ipsum dummy text blabla.';
//     var speed = 50;
//     let typeWriter = () => {
//         if (i < txt.length) {
//             this.setState({ text: txt.substring(0, i++) });
//             setTimeout(typeWriter, speed);
//         }
//     };
//     typeWriter();
// }
