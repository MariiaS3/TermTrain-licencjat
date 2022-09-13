
import directory from "../tool/directory"
import file from "../tool/file";
import command from "../tool/manual"

const cd = (prompt, title, prevPath, path) => {
    var d = prompt + " " + title;
    if (title.split(/\s+/).length === 1) {
        path = "/home/" + prompt.split(/[@]/)[0]
    }
    else if (title.includes('..')) {
        let tempPath = ""
        for (var i = 1; i < path.split('/').length - 1; i++) {
            tempPath += "/" + path.split('/')[i]
        }
        if (tempPath === "") {
            tempPath = "/"
        }
        path = tempPath
    } else if (title.includes('-')) {
        path = prevPath
    } else if (title.includes('--help')) {
        d += `Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu.  \n\n`
        for (let k = 0; k < command.length; k++) {
            if (command[k].id === "cd") {
                d += command[k].skladnia + " \n "
                d += command[k].info + " \n "
                d += command[k].flags
            }
        }
    } else if (title.split(/\s+/).length > 2) {
        d += "\ncd: zbyt wiele argumentów"
    } else {
        if (title.split(/\s+/)[1].split(/[/]/).length > 1) {
            let isDir = false
            if (title.split(/\s+/)[1].split(/[/]/)[0] !== "") {
                let tempPath = title.split(/\s+/)[1].split(/[/]/)
                let newPath = path
                for (let i = 0; i < tempPath.length; i++) {
                    isDir = false
                    for (let k = 0; k < directory.length; k++) {
                        if (directory[k].name === tempPath[i] && directory[k].path === newPath) {
                            newPath += "/" + tempPath[i]
                            isDir = true
                        }
                    }
                    if (isDir === false) {
                        let isFile = false
                        for (let k = 0; k < file.length; k++) {
                            if (file[k].name === tempPath[i] && file[k].path === newPath) {
                                isFile = true
                            }
                        }
                        if (isFile === true) {
                            d += "\ncd: " + tempPath[i] + ": Nie jest katalogiem"
                        } else {
                            d += "\ncd: " + tempPath[i] + ": Nie ma takiego pliku lub katalogu"
                        }
                        break;
                    }
                }
                if (isDir === true) {
                    path = newPath
                }
            } else {
                let tempPath = title.split(/\s+/)[1].split(/[/]/)
                let newPath = "/"
                for (let i = 0; i < tempPath.length; i++) {
                    isDir = false
                    for (let k = 0; k < directory.length; k++) {
                        if (directory[k].name === tempPath[i] && directory[k].path === newPath) {
                            isDir = true
                            if (newPath === "/") {
                                newPath = newPath + directory[k].name;
                            } else {
                                newPath = newPath + "/" + directory[k].name;
                            }
                        }
                    }
                    if (isDir === false) {
                        let isFile = false
                        for (let k = 0; k < file.length; k++) {
                            if (file[k].name === tempPath[i] && file[k].path === newPath) {
                                isFile = true
                            }
                        }
                        if (isFile === true) {
                            d += "\ncd: " + tempPath[i] + ": Nie jest katalogiem"
                        } else {
                            d += "\ncd: " + tempPath[i] + ": Nie ma takiego pliku lub katalogu"
                        }
                        break;
                    }
                }
                if (isDir === true) {
                    path = newPath
                }
            }

        } else {
            let isDir = false;
            for (let k = 0; k < directory.length; k++) {
                if (directory[k].name === title.split(/\s+/)[1] && directory[k].path === path) {
                    if (path === "/") {
                        path = path + directory[k].name;
                    } else {
                        path = path + "/" + directory[k].name;
                    }
                    isDir = true
                }
            }
            if (isDir === false) {
                let isFile = false
                for (let k = 0; k < file.length; k++) {
                    if (file[k].name === title.split(/\s+/)[1] && file[k].path === path) {
                        isFile = true
                    }
                }
                if (isFile === true) {
                    d += "\ncd: " + title.split(/\s+/)[1] + ": Nie jest katalogiem"
                } else {
                    d += "\ncd: " + title.split(/\s+/)[1] + ": Nie ma takiego pliku lub katalogu"
                }
            }
        }
    }
    return [path, d]
}

export default cd