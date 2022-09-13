import directory from "../tool/directory"
import file from "../tool/file"
import command from "../tool/manual"

const rm = (prompt, title, path, index) => {
    var d = prompt + " " + title

    if (!title.includes('-') && title.split(/\s+/).length < 2) {
        d += "\nrm: brakuje operand\n Spróbuj 'rm --help' po więcej informacji"
    } else if (title.includes('-') && title.split(/\s+/).length < 3) {
        if (title.includes('--help')) {
            d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/rm.1.html \n https://linux.die.net/man/1/rm \n\n`
            for (let k = 0; k < command.length; k++) {
                if (command[k].id === "rm") {
                    d += command[k].skladnia + " \n "
                    d += command[k].info + " \n "
                    d += command[k].flags
                }
            }
        } else {
            d += "\nrm: brakuje operand  \nSpróbuj 'rm --help' po więcej informacji"
        }
    } else {
        if (title.split(/\s+/)[1] === '-r') {
            for (let i = 2; i < title.split(/\s+/).length; i++) {
                let isDir = false
                let isFile = false

                for (let k = 0; k < file.length; k++) {
                    if (path === file[k].path && title.split(/\s+/)[i] === file[k].name) {
                        isFile = true
                    }
                }
                if (isFile === true) {
                    for (let j = 0; j < file.length; j++) {
                        if (title.split(/\s+/)[i] === file[j].name) {
                            file.splice(j, 1);
                            break;
                        }
                    }
                } else {
                    for (let k = 0; k < directory.length; k++) {
                        if (path === directory[k].path && title.split(/\s+/)[i] === directory[k].name) {
                            isDir = true
                        }
                    }
                    if (isDir === true) {
                        if (path !== '/') {
                            let tempPath = path.split(/[/]/)
                            let newPath = ""
                            for (let j = 1; j < tempPath.length - 1; j++) {
                                newPath += "/" + tempPath[j]
                            }
                            for (let k = 0; k < directory.length; k++) {
                                if (newPath === directory[k].path && tempPath[tempPath.length - 1] === directory[k].name) {
                                    directory[k].link = directory[k].link - 1
                                }
                            }
                        }
                        for (let j = 0; j < directory.length; j++) {
                            if (title.split(/\s+/)[i] === directory[j].name) {
                                directory.splice(j, 1);
                                break;
                            }
                        }
                    } else {
                        d += "\n rm: nie można usunąć '" `${title.split(/\s+/)[i]}` + "': Nie ma takiego pliku lub katalogu"
                    }
                }
            }
        }
        else if (title.split(/\s+/)[1] === '-i') {
            for (let j = 0; j < file.length; j++) {
                if (title.split(/\s+/)[index] === file[j].name) {
                    file.splice(j, 1);
                    break;
                }
            }
        }
        else if (title.split(/\s+/)[1] === '-f') {
            for (let i = 2; i < title.split(/\s+/).length; i++) {
                let isDir = false
                let isFile = false
                for (let k = 0; k < file.length; k++) {
                    if (path === file[k].path && title.split(/\s+/)[i] === file[k].name) {
                        isFile = true
                    }
                }
                if (isFile === true) {
                    for (let j = 0; j < file.length; j++) {
                        if (title.split(/\s+/)[i] === file[j].name) {
                            file.splice(j, 1);
                            break;
                        }
                    }
                } else {
                    for (let k = 0; k < directory.length; k++) {
                        if (path === directory[k].path && title.split(/\s+/)[i] === directory[k].name) {
                            isDir = true
                        }
                    }
                    if (isDir === true) {
                        d += "\n rm: nie można usunąć '" `${title.split(/\s+/)[i]}` + "': Jest katalogiem"
                    }
                }
            }
        } else {
            for (var i = 1; i < title.split(/\s+/).length; i++) {
                var isDir = false
                var isFile = false
                for (let k = 0; k < file.length; k++) {
                    if (path === file[k].path && title.split(/\s+/)[i] === file[k].name) {
                        isFile = true
                    }
                }
                if (isFile === true) {
                    for (let j = 0; j < file.length; j++) {
                        if (title.split(/\s+/)[i] === file[j].name) {
                            file.splice(j, 1);
                            break;
                        }
                    }
                } else {
                    for (let k = 0; k < directory.length; k++) {
                        if (path === directory[k].path && title.split(/\s+/)[i] === directory[k].name) {
                            isDir = true
                        }
                    }
                    if (isDir === true) {
                        d += "\n rm: nie można usunąć '" `${title.split(/\s+/)[i]}` + "': Jest katalogiem"
                    } else {
                        d += "\n rm: nie można usunąć '" `${title.split(/\s+/)[i]}` + "': Nie ma takiego pliku lub katalogu"
                    }
                }
            }
        }
    }
    return d
}

export default rm