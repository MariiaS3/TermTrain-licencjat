import command from "../tool/manual";


const history = (prompt, title, history) => {
    var d = prompt + " " + title
    if (title.split(/\s+/).length > 1) {
        if (title.includes('--help')) {
            d += `Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/history.1.html \n https://linux.die.net/man/1/history \n\n`
            for (let k = 0; k < command.length; k++) {
                if (command[k].id === "history") {
                    d += command[k].skladnia + " \n "
                    d += command[k].info + " \n "
                    d += command[k].flags
                }
            }
        } else {
            if (title.split(/\s+/).length > 2) {
                d += "\nhistory: zbyt wiele argumentów"
            } else {
                if (title.split(/\s+/)[1] > -1) {
                    for (let j = history.length - title.split(/\s+/)[1]; j < history.length; j++) {
                        d += "\n" + history[j].title
                    }
                } else {
                    d += "\nhistory: " + title.split(/\s+/)[1] + ": nieprawidłowa opcja/wymagany argument liczbowy"
                }
            }
        }
    } else {
        for (let k = 0; k < history.length; k++) {
            d += "\n" + history[k].title
        }
    }
    return d
}

export default history 