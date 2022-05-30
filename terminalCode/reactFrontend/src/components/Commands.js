import React from "react";


import directory from "./directory"
import file from "./file"

import command from "./command";
import { ContentPasteSearchOutlined } from "@mui/icons-material";


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
            } else if (this.state.title.split(/\s+/)[0] === "cp") {
                this.cp()
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
        var d = this.props.prompt + " " + this.state.title + "\n"
        if (this.state.title.split(/\s+/).length > 1) {
            for (var i = 1; i < this.state.title.split(/\s+/).length; i++) {
                if (this.state.title.split(/\s+/)[i] === '-a') {

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
                }
                if (this.state.title.split(/\s+/)[i] === '-d') {
                    if (this.state.title.split(/\s+/)[i + 1] === '*/') {
                        var isDirectory = false
                        directory.map(dir => {
                            if (dir.path === this.props.path) {
                                d += dir.name + "/     ";
                                isDirectory = true
                            }
                        })
                    } else if (this.state.title.split(/\s+/)[i + 1] === '/*') {
                        var isDirectory = false
                        directory.map(dir => {
                            if (dir.path === '/') {
                                d += dir.name + "/     ";
                                isDirectory = true
                            }
                        })
                    } else {
                        d += ".";
                    }
                }
                if (this.state.title.split(/\s+/)[i] === '-l') {
                    var isDirectory = false
                    directory.map(dir => {
                        if (dir.path === this.props.path) {
                            d += dir.permissions + " " + dir.link + " " + dir.user + " " + dir.group + " " + dir.size + " " + dir.time + " " + dir.name + "\n";
                            isDirectory = true
                        }
                    })
                    if (isDirectory === true) {
                        d += "\n"
                    }
                    file.map(file => {
                        if (file.path === this.props.path && file.name.charAt(0) !== '.') {
                            d += file.permissions + " " + file.link + " " + file.user + " " + file.group + " " + file.size + " " + file.time + " " + file.name + "\n";
                        }
                    })
                }
                if (this.state.title.split(/\s+/)[i] === '-S') {
                    let dir = [].concat(directory).sort((a, b) => a.size < b.size ? 1 : -1)
                    let f = [].concat(file).sort((a, b) => a.size < b.size ? 1 : -1)

                    if (this.state.title.split(/\s+/)[i + 1] === '-r') {
                        dir.reverse()
                        f.reverse()
                        console.log(dir)
                        var isDirectory = false
                        dir.map(dir => {
                            if (dir.path === this.props.path) {
                                d += dir.name + "     ";
                                isDirectory = true
                            }
                        })
                        if (isDirectory === true) {
                            d += "\n"
                        }

                        console.log(f)
                        f.map(file => {
                            if (file.path === this.props.path && file.name.charAt(0) !== '.') {
                                d += file.name + "      ";
                            }
                        })
                    } else {
                        console.log(dir)
                        var isDirectory = false
                        dir.map(dir => {
                            if (dir.path === this.props.path) {
                                d += dir.name + "     ";
                                isDirectory = true
                            }
                        })
                        if (isDirectory === true) {
                            d += "\n"
                        }

                        console.log(f)
                        f.map(file => {
                            if (file.path === this.props.path && file.name.charAt(0) !== '.') {
                                d += file.name + "      ";
                            }
                        })
                    }
                }
                if (this.state.title.split(/\s+/)[i] === '-r') {
                    let dir = [].concat(directory).reverse()
                    let f = [].concat(file).reverse()
                    console.log(dir)
                    var isDirectory = false
                    dir.map(dir => {
                        if (dir.path === this.props.path) {
                            d += dir.name + "     ";
                            isDirectory = true
                        }
                    })
                    if (isDirectory === true) {
                        d += "\n"
                    }
                    console.log(f)
                    f.map(file => {
                        if (file.path === this.props.path && file.name.charAt(0) !== '.') {
                            d += file.name + "      ";
                        }
                    })
                }
                if (this.state.title.split(/\s+/)[i] === '--help') {

                }
            }
        } else {

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
                if (file.path === this.props.path && file.name.charAt(0) !== '.') {
                    d += file.name + "      ";
                }
            })
        }
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
        if (this.state.title.split(/\s+/)[1] === "-a") {
            file.map(f => {
                if (this.props.path === f.path && this.state.title.split(/\s+/)[2] === f.name) {
                    f.time = "";
                    addFile = false;
                }
            })
        }
        else if (this.state.title.split(/\s+/)[1] === "-c") {
            file.map(f => {
                if (this.props.path === f.path && this.state.title.split(/\s+/)[2] === f.name) {
                    addFile = false;
                }
            })
            if (addFile === false) {
                d += "\n Plik istnieje";
            }
        } else {
            file.map(f => {
                if (this.props.path === f.path && this.state.title.split(/\s+/)[1] === f.name) {
                    f.time = "";
                    addFile = false
                }
            })
            if (this.state.title.split(/\s+/)[1] !== "" && addFile === true) {

                const newFile = {
                    name: this.state.title.split(/\s+/)[1],
                    permissions: "",
                    path: this.props.path,
                    text: "",
                }

                file.push(newFile)
            }
        }
        this.props.addCommandPops(d)
    }
    mv = () => {
        var d = this.props.prompt + " " + this.state.title

        if (this.state.title.split(/\s+/)[1] === '-f') {
            for (var i = 2; i < this.state.title.split(/\s+/).length; i++) {
                var isDirectory = false
                file.map(f => {
                    let isFile = false;
                    if (f.name === this.state.title.split(/\s+/)[i] && f.path === this.props.path) {
                        directory.map(dir => {
                            if (dir.name === this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]) {
                                file.map(plik => {
                                    if (plik.name === f.name && plik.path === (f.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1])) {

                                        plik.text = f.text;
                                        isFile = true;
                                        isDirectory = true
                                    }
                                })
                                if (isFile === false) {
                                    f.path += "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]
                                    isDirectory = true
                                }
                                else {
                                    for (let j = 0; j < file.length; j++) {
                                        if (this.state.title.split(/\s+/)[i] === file[j].name) {
                                            file.splice(j, 1);
                                            break;
                                        }
                                    }
                                }
                            }
                        })
                        if (isDirectory === false) {
                            f.name = this.state.title.split(/\s+/)[2]
                        }

                    }
                })
            }
        }
        else if (this.state.title.split(/\s+/)[1] === '-i') {
            for (var i = 2; i < this.state.title.split(/\s+/).length; i++) {
                var isDirectory = false
                file.map(f => {
                    let isFile = false;
                    if (f.name === this.state.title.split(/\s+/)[i] && f.path === this.props.path) {
                        directory.map(dir => {
                            if (dir.name === this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]) {
                                file.map(plik => {
                                    if (plik.name === f.name && plik.path === (f.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1])) {
                                        alert()
                                        plik.text = f.text;
                                        isFile = true;
                                        isDirectory = true
                                    }
                                })
                                if (isFile === false) {
                                    f.path += "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]
                                    isDirectory = true
                                }
                                else {
                                    for (let j = 0; j < file.length; j++) {
                                        if (this.state.title.split(/\s+/)[i] === file[j].name) {
                                            file.splice(j, 1);
                                            break;
                                        }
                                    }
                                }
                            }
                        })
                        if (isDirectory === false) {
                            f.name = this.state.title.split(/\s+/)[2]
                        }

                    }
                })
            }
        }
        else if (this.state.title.split(/\s+/)[1] === '-n') {
            for (var i = 2; i < this.state.title.split(/\s+/).length; i++) {
                var isDirectory = false
                file.map(f => {
                    let isFile = false;
                    if (f.name === this.state.title.split(/\s+/)[i] && f.path === this.props.path) {
                        directory.map(dir => {
                            if (dir.name === this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]) {
                                file.map(plik => {
                                    if (plik.name === f.name && plik.path === (f.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1])) {
                                        isFile = true;
                                        isDirectory = true
                                    }
                                })
                                if (isFile === false) {
                                    f.path += "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]
                                    isDirectory = true
                                }
                            }
                        })
                        if (isDirectory === false) {
                            f.name = this.state.title.split(/\s+/)[2]
                        }

                    }
                })
            }
        }
        else {
            for (var i = 2; i < this.state.title.split(/\s+/).length; i++) {
                var isDirectory = false
                file.map(f => {
                    let isFile = false;
                    if (f.name === this.state.title.split(/\s+/)[i] && f.path === this.props.path) {
                        directory.map(dir => {
                            if (dir.name === this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]) {
                                file.map(plik => {
                                    if (plik.name === f.name && plik.path === (f.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1])) {
                                        plik.text = f.text;
                                        isFile = true;
                                        isDirectory = true
                                    }
                                })
                                if (isFile === false) {
                                    f.path += "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]
                                    isDirectory = true
                                }
                                else {
                                    for (let j = 0; j < file.length; j++) {
                                        if (this.state.title.split(/\s+/)[i] === file[j].name) {
                                            file.splice(j, 1);
                                            break;
                                        }
                                    }
                                }
                            }
                        })
                        if (isDirectory === false) {
                            f.name = this.state.title.split(/\s+/)[2]
                        }

                    }
                })
            }
        }

        file.map(f => {
            console.log(f.name + "    " + f.path)
        })
        this.props.addCommandPops(d)
    }
    cp = () => {
        var d = this.props.prompt + " " + this.state.title

        if (this.state.title.split(/\s+/)[1] === '-i') {
            for (var i = 1; i < this.state.title.split(/\s+/).length; i++) {
                var isDirectory = false
                let isFile = false;
                file.map(f => {
                    if (f.name === this.state.title.split(/\s+/)[i] && f.path === this.props.path) {
                        directory.map(dir => {
                            if (dir.name === this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]) {
                                file.map(plik => {
                                    if (plik.name === f.name && plik.path === (f.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1])) {
                                        alert();
                                        plik.text = f.text;
                                        isFile = true;
                                        isDirectory = true
                                    }
                                })
                                if (isFile === false) {
                                    const newFile = {
                                        name: this.state.title.split(/\s+/)[1],
                                        permissions: f.permissions,
                                        path: this.props.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1],
                                        text: f.text,
                                        link: f.link,
                                        user: f.user,
                                        group: f.group,
                                        size: f.size,
                                        time: f.time,
                                    }

                                    file.push(newFile)
                                    isDirectory = true
                                }
                            }
                        })
                        if (isDirectory === false) {

                            file.map(plik => {
                                if (plik.name === this.state.title.split(/\s+/)[2]) {
                                    alert();
                                    plik.text = f.text;
                                    isFile=true;
                                }
                            })
                            if (isFile === false) {
                                const newFile = {
                                    name: this.state.title.split(/\s+/)[2],
                                    permissions: f.permissions,
                                    path: this.props.path,
                                    text: f.text,
                                    link: f.link,
                                    user: f.user,
                                    group: f.group,
                                    size: f.size,
                                    time: f.time,
                                }

                                file.push(newFile)
                            }
                        }

                    }
                })
            }
        } else if(this.state.title.split(/\s+/)[1] === '-n'){
            for (var i = 1; i < this.state.title.split(/\s+/).length; i++) {
                var isDirectory = false
                let isFile = false;
                file.map(f => {
                    if (f.name === this.state.title.split(/\s+/)[i] && f.path === this.props.path) {
                        directory.map(dir => {
                            if (dir.name === this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]) {
                                file.map(plik => {
                                    if (plik.name === f.name && plik.path === (f.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1])) {
                                        isFile = true;
                                        isDirectory = true
                                    }
                                })
                                if (isFile === false) {
                                    const newFile = {
                                        name: this.state.title.split(/\s+/)[1],
                                        permissions: f.permissions,
                                        path: this.props.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1],
                                        text: f.text,
                                        link: f.link,
                                        user: f.user,
                                        group: f.group,
                                        size: f.size,
                                        time: f.time,
                                    }

                                    file.push(newFile)
                                    isDirectory = true
                                }
                            }
                        })
                        if (isDirectory === false) {

                            file.map(plik => {
                                if (plik.name === this.state.title.split(/\s+/)[2]) {
                                    isFile=true;
                                }
                            })
                            if (isFile === false) {
                                const newFile = {
                                    name: this.state.title.split(/\s+/)[2],
                                    permissions: f.permissions,
                                    path: this.props.path,
                                    text: f.text,
                                    link: f.link,
                                    user: f.user,
                                    group: f.group,
                                    size: f.size,
                                    time: f.time,
                                }

                                file.push(newFile)
                            }
                        }

                    }
                })
            }
        }
        else {
            for (var i = 1; i < this.state.title.split(/\s+/).length; i++) {
                var isDirectory = false
                let isFile = false;
                file.map(f => {
                    if (f.name === this.state.title.split(/\s+/)[i] && f.path === this.props.path) {
                        directory.map(dir => {
                            if (dir.name === this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1]) {
                                file.map(plik => {
                                    if (plik.name === f.name && plik.path === (f.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1])) {
                                        plik.text = f.text;
                                        isFile = true;
                                        isDirectory = true
                                    }
                                })
                                if (isFile === false) {
                                    const newFile = {
                                        name: this.state.title.split(/\s+/)[1],
                                        permissions: f.permissions,
                                        path: this.props.path + "/" + this.state.title.split(/\s+/)[this.state.title.split(/\s+/).length - 1],
                                        text: f.text,
                                        link: f.link,
                                        user: f.user,
                                        group: f.group,
                                        size: f.size,
                                        time: f.time,
                                    }

                                    file.push(newFile)
                                    isDirectory = true
                                }
                            }
                        })
                        if (isDirectory === false) {

                            file.map(plik => {
                                if (plik.name === this.state.title.split(/\s+/)[2]) {
                                    plik.text = f.text;
                                    isFile=true;
                                }
                            })
                            if (isFile === false) {
                                const newFile = {
                                    name: this.state.title.split(/\s+/)[2],
                                    permissions: f.permissions,
                                    path: this.props.path,
                                    text: f.text,
                                    link: f.link,
                                    user: f.user,
                                    group: f.group,
                                    size: f.size,
                                    time: f.time,
                                }

                                file.push(newFile)
                            }
                        }

                    }
                })
            }
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
        directory.map(f => {
            console.log(f.name)
        })
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
                for (i = 0; i < file.length; i++) {
                    if (this.state.title.split(/\s+/)[1] === file[i].name) {
                        file.splice(i, 1);
                        break;
                    }
                }
            }
        }
        this.props.addCommandPops(d)
    }
    cat = () => {
        var d = this.props.prompt + " " + this.state.title + "\n";

        if (this.state.title.split(/\s+/).length > 2) {
            let j = 1;
            for (var i = 1; i < this.state.title.split(/\s+/).length; i++) {
                if (this.state.title.split(/\s+/)[i] === '-n') {
                    file.map(f => {
                        if (this.props.path === f.path && this.state.title.split(/\s+/)[i + 1] === f.name) {
                            console.log(f.text.split('\n').length)
                            f.text.split('\n').map(s => {
                                d += j + " " + s + "\n";
                                j++;
                            })
                        }
                    })
                    console.log(d)
                }
            }
        }
        else {
            file.map(f => {
                if (this.props.path === f.path && this.state.title.split(/\s+/)[1] === f.name) {
                    d += f.text
                }
            })
        }
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
