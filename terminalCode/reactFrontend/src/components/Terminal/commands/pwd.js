import command from "../tool/manual"

const pwd = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    if (title.includes('--help')) {
        d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
        https://man7.org/linux/man-pages/man1/pwd.1.html \n https://linux.die.net/man/1/pwd \n\n`
        for (let k = 0; k < command.length; k++) {
            if (command[k].id === "pwd") {
                d += command[k].skladnia + " \n "
                d += command[k].info + " \n "
                d += command[k].flags
            }
        }
    } else {
        d += path
    }
    return d
}

export default pwd