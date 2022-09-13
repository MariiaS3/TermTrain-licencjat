import file from "../tool/file";
import command from "../tool/manual";

const cat = (prompt, title, path) => {
    var d = prompt + " " + title + "\n";

    if (title.includes('-n')) {
        let j = 1;
        for (let i = 2; i < title.split(/\s+/).length; i++) {
            for (let k = 0; k < file.length; k++) {
                if (path === file[k].path && title.split(/\s+/)[i] === file[k].name) {
                    for (let l = 0; l < file[k].text.split('\n').length; l++) {
                        d += j + "  " + file[k].text.split('\n')[l] + "\n";
                        j++;
                    }
                }
            }
        }
    } else if (title.includes('--help')) {
        d += `Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
        https://man7.org/linux/man-pages/man1/cat.1.html \n https://linux.die.net/man/1/cat \n\n`
        for (let k = 0; k < command.length; k++) {
            if (command[k].id === "cat") {
                d += command[k].skladnia + " \n "
                d += command[k].info + " \n "
                d += command[k].flags
            }
        }
    } else if (!title.includes('-') && title.split(/\s+/).length > 1) {
        for (var i = 1; i < title.split(/\s+/).length; i++) {
            let isFile = false
            for (let k = 0; k < file.length; k++) {
                if (path === file[k].path && title.split(/\s+/)[i] === file[k].name) {
                    d += file[k].text
                    isFile = true
                }
            }
            if (isFile === false) {
                d += "cat: " + title.split(/\s+/)[i] + ": Nie ma takiego pliku lub katalogu"
            }
        }
    } else {
        d += "cat: nieprawidłowa opcja -- '" + title.split(/\s+/)[title.split(/\s+/).length - 1] + "'\n"
        d += "Spróbuj 'cat --help' po więcej informacji"
    }
    return d
}

export default cat