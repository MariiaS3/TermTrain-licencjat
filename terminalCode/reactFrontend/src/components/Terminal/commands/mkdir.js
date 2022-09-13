
import directory from "../tool/directory"
import command from "../tool/manual"

const mkdir = (prompt, title, path) => {
    var d = prompt + " " + title
    if (title.split(/\s+/).length < 2) {
        d += "\nmkdir: brakuje operand \nSpróbuj 'mkdir --help' po więcej informacji"
    } else if (title.includes('--help')) {
        d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
        https://man7.org/linux/man-pages/man1/mkdir.1.html \n https://linux.die.net/man/1/mkdir \n\n`
        for (let k = 0; k < command.length; k++) {
            if (command[k].id === "mkdir") {
                d += command[k].skladnia + " \n "
                d += command[k].info + " \n "
                d += command[k].flags
            }
        }
    }
    else if (!title.includes('-')) {
        var addDir = true
        for (let k = 0; k < directory.length; k++) {
            if (path === directory[k].path && title.split(/\s+/)[1] === directory[k].name) {
                addDir = false
                d += "\nmkdir: nie można utworzyć katalogu " + title.split(/\s+/)[1] + ": Plik istnieje"
            }
        }
        if (title.split(/\s+/)[1] !== "" && addDir === true) {

            const newDir = {
                name: title.split(/\s+/)[1],
                permissions: "drwxr-xr-x",
                user: prompt.split(/[@]/)[0],
                group: prompt.split(/[@]/)[0],
                link: 2,
                size: 4096,
                path: path,
            }

            let tempPath = ""
            for (let i = 1; i < path.split('/').length - 1; i++) {
                tempPath += "/" + path.split('/')[i]
            }

            for (let k = 0; k < directory.length; k++) {
                if (directory[k].name === path.split('/')[path.split('/').length - 1] && directory[k].path === tempPath) {
                    directory[k].link = directory[k].link + 1
                }
            }
            directory.push(newDir)
        }
    } else {
        d += "mkdir: nieprawidłowa opcja -- '" + title.split(/\s+/)[title.split(/\s+/).length - 1][1] + "'\n"
        d += "Spróbuj 'mhdir --help' po więcej informacji"
    }
    return d
}

export default mkdir