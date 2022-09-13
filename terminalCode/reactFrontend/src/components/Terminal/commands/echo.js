import file from "../tool/file"
import command from "../tool/manual"


const echo = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    if (title.includes("$(cat")) {
        let plik = title.split(/\s+/)[title.split(/\s+/).length - 1]
        let isFile = false
        for (let k = 0; k < file.length; k++) {
            if (file[k].name === plik.split(')')[0] && file[k].path === path) {
                d += file[k].text
                isFile = true
            }
        }
        if (isFile === false) {
            d += "\ncat: " + plik.split(')')[0] + ": Nie ma takiego pliku lub katalogu"
        }
    } else if (title.includes('--help')) {
        d += `Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
        https://man7.org/linux/man-pages/man1/echo.1.html \n https://linux.die.net/man/1/echo \n\n`
        for (let k = 0; k < command.length; k++) {
            if (command[k].id === "echo") {
                d += command[k].skladnia + " \n "
                d += command[k].info + " \n "
                d += command[k].flags
            }
        }
    } else {
        for (let i = 1; i < title.split(/\s+/).length; i++) {
            d += title.split(/\s+/)[i]
        }
    }
    return d
}

export default echo
