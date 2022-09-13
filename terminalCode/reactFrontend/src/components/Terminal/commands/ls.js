
import directory from "../tool/directory"
import file from "../tool/file"
import command from "../tool/manual";

const ls = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    let dir = [].concat(directory);
    let fil = [].concat(file);
    if (title.includes('-S')) {
        dir = [].concat(directory).sort((a, b) => a.size < b.size ? 1 : -1)
        fil = [].concat(file).sort((a, b) => a.size < b.size ? 1 : -1)

        if (title.includes('-r')) {
            dir.reverse()
            fil.reverse()
        }
    } else if (title.includes('-r')) {
        dir = [].concat(directory)
        fil = [].concat(file)
        dir.reverse()
        fil.reverse()
    }
    if (title.includes('-d')) {
        if (title.includes('*/')) {
            for (let k = 0; k < dir.length; k++) {
                if (dir[k].path === path && dir[k].name.charAt(0) !== '.') {
                    d += dir[k].name + "/     ";
                }
            }
        } else if (title.includes('/*')) {
            for (let k = 0; k < dir.length; k++) {
                if (dir[k].path === '/' && dir[k].name.charAt(0) !== '.') {
                    d += "/" + dir[k].name + "     ";
                }
            }
        } else {
            d += ".";
        }
    } else if (title.includes('-l')) {
        let isDirectory = false
        if (title.includes('-a')) {
            for (let k = 0; k < dir.length; k++) {
                if (dir[k].path === path) {
                    d += dir[k].permissions + " " + dir[k].link + " " + dir[k].user + " " + dir[k].group + " " + dir[k].size + " " + dir[k].time + " " + dir[k].name + "\n";
                    isDirectory = true
                }
            }
            if (isDirectory === true) {
                d += "\n"
            }
            for (let k = 0; k < fil.length; k++) {
                if (fil[k].path === path) {
                    d += fil[k].permissions + " " + fil[k].link + " " + fil[k].user + " " + fil[k].group + " " + fil[k].size + " " + fil[k].time + " " + fil[k].name + "\n";
                }
            }
        } else {
            let isDirectory = false
            for (let k = 0; k < dir.length; k++) {
                if (dir[k].path === path && dir[k].name.charAt(0) !== '.') {
                    d += dir[k].permissions + " " + dir[k].link + " " + dir[k].user + " " + dir[k].group + " " + dir[k].size + " " + dir[k].time + " " + dir[k].name + "\n";
                    isDirectory = true
                }
            }
            if (isDirectory === true) {
                d += "\n"
            }
            for (let k = 0; k < fil.length; k++) {
                if (fil[k].path === path && fil[k].name.charAt(0) !== '.') {
                    d += fil[k].permissions + " " + fil[k].link + " " + fil[k].user + " " + fil[k].group + " " + fil[k].size + " " + fil[k].time + " " + fil[k].name + "\n";
                }
            }
        }
    } else if (title.includes('-a')) {
        let isDirectory = false
        for (let k = 0; k < directory.length; k++) {
            if (directory[k].path === path) {
                d += directory[k].name + "     ";
                isDirectory = true
            }
        }
        if (isDirectory === true) {
            d += "\n"
        }
        for (let k = 0; k < file.length; k++) {
            if (file[k].path === path) {
                d += file[k].name + "      ";
            }
        }
    } else if (title.includes('--help')) {
        d += `Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
        https://man7.org/linux/man-pages/man1/ls.1.html \n https://linux.die.net/man/1/ls \n\n`
        for (let k = 0; k < command.length; k++) {
            if (command[k].id === "ls") {
                d += command[k].skladnia + " \n "
                d += command[k].info + " \n "
                d += command[k].flags
            }
        }
    } else if (title.split(/\s+/).length === 1) {
        let isDirectory = false
        for (let k = 0; k < dir.length; k++) {
            if (dir[k].path === path && dir[k].name.charAt(0) !== '.') {
                d += dir[k].name + "     ";
                isDirectory = true
            }
        }
        if (isDirectory === true) {
            d += "\n"
        }
        for (let k = 0; k < fil.length; k++) {
            if (fil[k].path === path && fil[k].name.charAt(0) !== '.') {
                d += fil[k].name + "      ";
            }
        }
    } else if (title.split(/\s+/).length === 2) {
        let isDirectory = false
        console.log(path)
        let tempPath = path
        if(title.split(/\s+/)[1]==="/"){
            tempPath = "/"
        } else{
            tempPath+= "/" + title.split(/\s+/)[1]
        }
        for (let k = 0; k < dir.length; k++) {
            if (dir[k].path === tempPath && dir[k].name.charAt(0) !== '.' ) {
                d += dir[k].name + "/   ";
                isDirectory = true
            }
        }
        if (isDirectory === true) {
            d += "\n"
        }
            for (let k = 0; k < fil.length; k++) {
                if (fil[k].path === tempPath && fil[k].name.charAt(0) !== '.') {
                    d += fil[k].name + "      ";
                }
            }

    } else {
        d += "ls: nieprawidłowa opcja -- '" + title.split(/\s+/)[title.split(/\s+/).length - 1][1] + "'\n"
        d += "Spróbuj 'ls --help' po więcej informacji"
    }
    return d
}

export default ls