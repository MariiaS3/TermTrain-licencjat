import directory from "../tool/directory"
import file from "../tool/file"
import command from "../tool/manual"

const rmdir = (prompt, title, path) => {
    var d = prompt + " " + title

    if (!title.includes('-') && title.split(/\s+/).length < 2) {
        d += "\nrmdir: brakuje operand\n Spróbuj 'rmdir --help' po więcej informacji"
    } else if (title.includes('-') && title.split(/\s+/).length < 3) {
        if (title.includes('--help')) {
            d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/rmdir.1.html \n https://linux.die.net/man/1/rmdir \n\n`
            for (let k = 0; k < command.length; k++) {
                if (command[k].id === "rmdir") {
                    d += command[k].skladnia + " \n "
                    d += command[k].info + " \n "
                    d += command[k].flags
                }
            }
        } else {
            d += "\nrmdir: brakuje operand  \nSpróbuj 'rmdir --help' po więcej informacji"
        }
    } else {
        for (var j = 1; j < title.split(/\s+/).length; j++) {
            let deleteDir = false
            for (let k = 0; k < directory.length; k++) {
                if (path === directory[k].path && title.split(/\s+/)[j] === directory[k].name) {
                    deleteDir = true
                }
            }

            if (title.split(/\s+/)[j] !== "" && deleteDir === true) {
                if (path !== '/') {
                    let tempPath = path.split(/[/]/)
                    let newPath = ""
                    for (let i = 1; i < tempPath.length - 1; i++) {
                        newPath += "/" + tempPath[i]
                    }
                    for (let k = 0; k < directory.length; k++) {
                        if (newPath === directory[k].path && tempPath[tempPath.length - 1] === directory[k].name) {
                            directory[k].link = directory[k].link - 1
                        }
                    }
                }
                for (let i = 0; i < directory.length; i++) {
                    if (title.split(/\s+/)[j] === directory[i].name) {
                        directory.splice(i, 1);
                        break;
                    }
                }
            } else {
                let isF = false
                for (let k = 0; k < file.length; k++) {
                    if (file[k].name === title.split(/\s+/)[j] && path === file[k].path) {
                        isF = true
                    }
                }
                if (isF === true) {
                    d += "\n rmdir: nie można usunąć ' "`${title.split(/\s+/)[j]}` + "': Jest plikiem"
                } else {
                    d += "\n rmdir: nie można usunąć '"`${title.split(/\s+/)[j]}` + "': Nie ma takiego pliku lub katalogu"
                }
            }
        }

    }
    return d
}

export default rmdir