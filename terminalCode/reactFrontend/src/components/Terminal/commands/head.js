import file from "../tool/file";
import command from "../tool/manual";


const head = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    var i = 10;

    if (title.includes('-n')) {
        let n = title.split(/\s+/)[title.split(/\s+/).length - 2]
        let isFile = false
        for (let k = 0; k < file.length; k++) {
            if (path === file[k].path && title.split(/\s+/)[title.split(/\s+/).length - 1] === file[k].name) {
                let arr = file[k].text.split('\n')
                isFile = true
                if (arr.length > n) {
                    i = n;
                } else {
                    i = arr.length;
                }
                for (var l = 0; l < i; l++) {
                    d += arr[l] + "\n"
                }
            }
        }
        if (isFile === false) {
            d += "\nhead: nie można otworzyć " + title.split(/\s+/)[2] + " do czytania: Nie ma takiego pliku lub katalogu"
        }
    } else if (title.includes('--help')) {
        d += `Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
        https://man7.org/linux/man-pages/man1/head.1.html \n https://linux.die.net/man/1/head \n\n`
        for (let k = 0; k < command.length; k++) {
            if (command[k].id === "head") {
                d += command[k].skladnia + " \n "
                d += command[k].info + " \n "
                d += command[k].flags
            }
        }
    } else if (!title.includes('-')) {

        for (let j = 1; j < title.split(/\s+/).length; j++) {
            let isFile = false
            for (let k = 0; k < file.length; k++) {
                if (path === file[k].path && title.split(/\s+/)[j] === file[k].name) {
                    isFile = true
                    let arr = file[k].text.split('\n')
                    if (arr.length < 10) {
                        i = arr.length;
                    }

                    for (let l = 0; l < i; l++) {
                        d += arr[l] + "\n"
                    }
                }
            }
            if (isFile === false) {
                d += "\nhead: nie można otworzyć " + title.split(/\s+/)[j] + " do czytania: Nie ma takiego pliku lub katalogu"
            }
            d += "\n"
        }
    } else {
        d += "head: nieprawidłowa opcja -- '" + title.split(/\s+/)[title.split(/\s+/).length - 1][1] + "'\n"
        d += "Spróbuj 'head --help' po więcej informacji"
    }
    return d;
}

export default head