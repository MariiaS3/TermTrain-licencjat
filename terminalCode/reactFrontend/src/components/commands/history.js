import command from "../manual";


const history = (prompt, title, history) => {
    var d = prompt + " " + title
    var i = 0;
    if (title.split(/\s+/).length > 1) {
        if (title.includes('--help')) {
            d += `Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/history.1.html \n https://linux.die.net/man/1/history \n\n`
            command.map(cmd => {
                if (cmd.id === "history") {
                    d += cmd.skladnia + " \n "
                    d += cmd.info + " \n "
                    d += cmd.flags
                }
            })
        } else {
            if (title.split(/\s+/).length > 2) {
                d += "\nhistory: zbyt wiele argumentów"
            } else {
                if (title.split(/\s+/)[1] > -1) {
                    console.log(history.length - title.split(/\s+/)[1])
                    for (var i = history.length - title.split(/\s+/)[1]; i < history.length; i++) {
                        d += "\n" + history[i].title
                    }
                } else {
                    d += "\nhistory: " + title.split(/\s+/)[1] + ": nieprawidłowa opcja/wymagany argument liczbowy"
                }
            }
        }
    } else {
        history.map(his => {
            if (history.length - 1 === i) {
                d += his.title
            } else {
                d += "\n" + his.title
            }
            i++;
        })
    }
    return d
}

export default history 