import React from "react";


import directory from "./directory"
import file from "./file"

import command from "./command";


class Commands extends React.Component {
    state = {
        title: "",
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    listenCmd = event => {

        if (event.key === "Enter") {
            if (this.state.title.split(/\s+/)[0] === "ls") {
                this.ls()
            }
            else if (this.state.title.split(/\s+/)[0] === "history") {
                this.history()
            } else if (this.state.title.split(/\s+/)[0] === "pwd") {
                this.pwd()
            } else if (this.state.title.split(/\s+/)[0] === "cd") {
                this.cd()
            } else if (this.state.title.split(/\s+/)[0] === "touch") {
                this.touch()
            } else if (this.state.title.split(/\s+/)[0] === "mv") {
                this.mv()
            } else if (this.state.title.split(/\s+/)[0] === "mkdir") {
                this.mkdir()
            } else if (this.state.title.split(/\s+/)[0] === "rmdir") {
                this.rmdir()
            } else if (this.state.title.split(/\s+/)[0] === "rm") {
                this.rm()
            } else if (this.state.title.split(/\s+/)[0] === "cat") {
                this.cat()
            } else {
                var d = this.props.prompt + " " + this.state.title;
                this.props.addCommandPops(d)
            }
            this.setState({
                command: this.state.title,
                title: ""
            })
        }
    }
    //commands
    ls = () => {
        console.log(this.state.title.split(/\s+/))
        var d = this.props.prompt + " " + this.state.title + "\n"
        var isDirectory = false
        directory.map(dir => {
            if (dir.path === this.props.path) {
                d += dir.name + "     ";
                isDirectory = true
            }
        })
        if (isDirectory === true) {
            d += "\n"
        }
        file.map(file => {
            if (file.path === this.props.path) {
                d += file.name + "      ";
            }
        })
        console.log(d)
        this.props.addCommandPops(d)

    }
    history = () => {
        var d = this.props.prompt + " " + this.state.title + "\n"
        var i = 0;
        this.props.history.map(his => {
            if (this.props.history.length - 1 === i) {
                d += his.title
            } else {
                d += his.title + "\n"
            }
            i++;
        })
        this.props.addCommandPops(d)
    }
    pwd = () => {
        var d = this.props.prompt + " " + this.state.title + "\n"
        d += this.props.path
        this.props.addCommandPops(d)
    }
    cd = () => {
        var d = this.props.prompt + " " + this.state.title
        if (this.state.title.split(/\s+/)[1] === "..") {
            this.props.changePathProp("/home/user")
        } else if (this.state.title.split(/\s+/)[1] === "-") {
            this.props.changePathProp(this.props.prevPath)
        } else {
            directory.map(dir => {
                if (dir.name === this.state.title.split(/\s+/)[1] && dir.path === this.props.path) {
                    this.props.changePathProp(this.props.path + "/" + dir.name)
                }
            })
        }
        this.props.addCommandPops(d)
    }
    touch = () => {
        var d = this.props.prompt + " " + this.state.title
        var addFile = true
        file.map(f => {
            if (this.props.path === f.path && this.state.title.split(/\s+/)[1] === f.name) {
                addFile = false
            }
        })
        if (this.state.title.split(/\s+/)[1] !== "" && addFile === true) {

            const newFile = {
                name: this.state.title.split(/\s+/)[1],
                permissions: "",
                path: this.props.path,
                text:"",
            }

            file.push(newFile)
        }
        // file.map(f =>{
        //     console.log(f.name)
        // })
        this.props.addCommandPops(d)
    }
    mv = () => {
        var d = this.props.prompt + " " + this.state.title
        if (this.state.title.split(/\s+/)[1] !== "") {
            var isDirectory = true
            file.map(f => {
                if (f.name === this.state.title.split(/\s+/)[1] && f.path === this.props.path) {
                    directory.map(dir => {
                        if (dir.name === this.state.title.split(/\s+/)[2]) {
                            f.path += "/" + this.state.title.split(/\s+/)[2]
                            isDirectory = false
                        }
                    })
                    if (isDirectory === true) {
                        f.name = this.state.title.split(/\s+/)[2]
                    }
                }
            })
        }

        file.map(f => {
            console.log(f.name + "    " + f.path)
        })
        this.props.addCommandPops(d)
    }
    mkdir = () => {
        var d = this.props.prompt + " " + this.state.title
        var addDir = true
        directory.map(dir => {
            if (this.props.path === dir.path && this.state.title.split(/\s+/)[1] === dir.name) {
                addDir = false
            }
        })
        if (this.state.title.split(/\s+/)[1] !== "" && addDir === true) {

            const newDir = {
                name: this.state.title.split(/\s+/)[1],
                permissions: "",
                path: this.props.path,
            }

            directory.push(newDir)
        }
        // directory.map(f =>{
        //     console.log(f.name)
        // })
        this.props.addCommandPops(d)
    }
    rmdir = () => {
        var d = this.props.prompt + " " + this.state.title
        var deleteDir = false
        directory.map(dir => {
            if (this.props.path === dir.path && this.state.title.split(/\s+/)[1] === dir.name) {
                deleteDir = true
            }
        })
        if (this.state.title.split(/\s+/)[1] !== "" && deleteDir === true) {
            for (var i = 0; i < directory.length; i++) {
                if (this.state.title.split(/\s+/)[1] === directory[i].name) {
                    directory.splice(i, 1);
                    break;
                }
            }
        }
        this.props.addCommandPops(d)
    }

    rm = () => {
        var d = this.props.prompt + " " + this.state.title
        var isDir = false
        var isFile = false
        directory.map(dir => {
            if (this.props.path === dir.path && this.state.title.split(/\s+/)[1] === dir.name) {
                isDir = true
            }
        })
        if (this.state.title.split(/\s+/)[1] !== "" && isDir === true) {
            for (var i = 0; i < directory.length; i++) {
                if (this.state.title.split(/\s+/)[1] === directory[i].name) {
                    directory.splice(i, 1);
                    break;
                }
            }
        }
        if (isDir === false) {
            file.map(f => {
                if (this.props.path === f.path && this.state.title.split(/\s+/)[1] === f.name) {
                    isFile = true
                }
            })
            if (this.state.title.split(/\s+/)[1] !== "" && isFile === true) {
                for ( i = 0; i < file.length; i++) {
                    if (this.state.title.split(/\s+/)[1] === file[i].name) {
                        file.splice(i, 1);
                        break;
                    }
                }
            }
        }
        this.props.addCommandPops(d)
    }
    cat = () =>{
        var d = this.props.prompt + " " + this.state.title +"\n"
        file.map(f => {
            if (this.props.path === f.path && this.state.title.split(/\s+/)[1] === f.name) {
                d+= f.text
            }
        })
        this.props.addCommandPops(d)
    }
    render() {

        return (
            <div className="lineCmd">
                <span>
                    {this.props.prompt}
                </span>
                <input type="text" className="inputCmd"
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            this.listenCmd(e)
                            this.props.addHistoryProps(this.state.title)
                        }
                    }}>
                </input>
            </div>
        )
    }
}


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
