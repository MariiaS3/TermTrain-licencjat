import directory from "../directory"
import file from "../file"
import command from "../manual"

const rm = (prompt, title, path, index) => {
    var d = prompt + " " + title
  
    if (!title.includes('-') && title.split(/\s+/).length < 2) {
        d += "\nrm:" + " brakuje operand" + "\n"
        d += "Spróbuj \'rm --help\' po więcej informacji"
    } else if (title.includes('-') && title.split(/\s+/).length < 3) {
        if (title.includes('--help')) {
            d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/rm.1.html \n https://linux.die.net/man/1/rm \n\n`
            command.map(cmd => {
                if (cmd.id === "rm") {
                    d += cmd.skladnia + " \n "
                    d += cmd.info + " \n "
                    d += cmd.flags
                }
            })
        } else {
            d += "\nrm:" + " brakuje operand  \n"
            d += "Spróbuj \'rm --help\' po więcej informacji"
        }
    } else {
        if (title.split(/\s+/)[1] === '-r') {
            for (var i = 2; i < title.split(/\s+/).length; i++) {
                var isDir = false
                var isFile = false

                file.map(f => {
                    if (path === f.path && title.split(/\s+/)[i] === f.name) {
                        isFile = true
                    }
                })
                if (isFile === true) {
                    for (var j = 0; j < file.length; j++) {
                        if (title.split(/\s+/)[i] === file[j].name) {
                            file.splice(j, 1);
                            break;
                        }
                    }
                } else {
                    directory.map(dir => {
                        if (path === dir.path && title.split(/\s+/)[i] === dir.name) {
                            isDir = true
                        }
                    })
                    if (isDir === true) {
                        if (path !== '/') {
                            let tempPath = path.split(/[/]/)
                            let newPath = ""
                            for (var i = 1; i < tempPath.length - 1; i++) {
                                newPath += "/" + tempPath[i]
                            }
                            console.log(newPath)
                            directory.map(dir => {
                                if (newPath === dir.path && tempPath[tempPath.length - 1] === dir.name) {
                                    dir.link = dir.link - 1
                                }
                            })
                        }
                        for (var j = 0; j < directory.length; j++) {
                            if (title.split(/\s+/)[i] === directory[j].name) {
                                directory.splice(j, 1);
                                break;
                            }
                        }
                    } else {
                        d += "\n rm: nie można usunąć '" + `${title.split(/\s+/)[i]}` + "': Nie ma takiego pliku lub katalogu"
                    }
                }
            }
        }
        else if (title.split(/\s+/)[1] === '-i') {
            for (var j = 0; j < file.length; j++) {
                if (title.split(/\s+/)[index] === file[j].name) {
                    file.splice(j, 1);
                    break;
                }
            }
        }
        else if (title.split(/\s+/)[1] === '-f') {
            for (var i = 2; i < title.split(/\s+/).length; i++) {
                var isDir = false
                var isFile = false
                file.map(f => {
                    if (path === f.path && title.split(/\s+/)[i] === f.name) {
                        isFile = true
                    }
                })
                if (isFile === true) {
                    for (var j = 0; j < file.length; j++) {
                        if (title.split(/\s+/)[i] === file[j].name) {
                            file.splice(j, 1);
                            break;
                        }
                    }
                } else {
                    directory.map(dir => {
                        if (path === dir.path && title.split(/\s+/)[i] === dir.name) {
                            isDir = true
                        }
                    })
                    if (isDir === true) {
                        d += "\n rm: nie można usunąć '" + `${title.split(/\s+/)[i]}` + "': Jest katalogiem"
                    }
                }
            }
        } else {
            for (var i = 1; i < title.split(/\s+/).length; i++) {
                var isDir = false
                var isFile = false
                file.map(f => {
                    if (path === f.path && title.split(/\s+/)[i] === f.name) {
                        isFile = true
                    }
                })
                if (isFile === true) {
                    for (var j = 0; j < file.length; j++) {
                        if (title.split(/\s+/)[i] === file[j].name) {
                            file.splice(j, 1);
                            break;
                        }
                    }
                } else {
                    directory.map(dir => {
                        if (path === dir.path && title.split(/\s+/)[i] === dir.name) {
                            isDir = true
                        }
                    })
                    if (isDir === true) {
                        d += "\n rm: nie można usunąć '" + `${title.split(/\s+/)[i]}` + "': Jest katalogiem"
                    } else {
                        d += "\n rm: nie można usunąć '" + `${title.split(/\s+/)[i]}` + "': Nie ma takiego pliku lub katalogu"
                    }
                }
            }
        }
    }
    return d
}

export default rm