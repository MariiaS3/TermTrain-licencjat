
import directory from "../tool/directory";
import file from "../tool/file";
import command from "../tool/manual";

const cp = (prompt, title, path) => {
    var d = prompt + " " + title

    if (!title.includes('-') && title.split(/\s+/).length < 3) {
        d += "\ncp: brakuje operand pliku \n Spróbuj 'cp --help' po więcej informacji"
    } else if (title.includes('-') && title.split(/\s+/).length < 4) {
        if (title.includes('--help')) {
            d += `Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/cp.1.html \n https://linux.die.net/man/1/cp \n\n`
            for (let k = 0; k < command.length; k++) {
                if (command[k].id === "cp") {
                    d += command[k].skladnia + " \n "
                    d += command[k].info + " \n "
                    d += command[k].flags
                }
            }
        } else {
            d += "\ncp: brakuje operand pliku \n Spróbuj 'cp --help' po więcej informacji"
        }
    } else {
        var isFile = false;
        var isDirectory = false;

        let folder = (title.split(/\s+/)[title.split(/\s+/).length - 1]).split('/')
        let nameDir = folder[folder.length - 1]
        let pathDir = "/";
        if (folder.length === 1) {
            pathDir = path;
        } else {
            for (let i = 0; i < folder.length - 1; i++) {
                pathDir += folder[i];
                if (i < folder.length - 2)
                    pathDir += "/";
            }
        }
        for (let k = 0; k < directory.length; k++) {
            if (directory[k].name === nameDir && pathDir === directory[k].path) {
                isDirectory = true;
            }
        }
        var tempFile;

        if (isDirectory === false && !title.includes('-') && title.split(/\s+/).length > 3) {
            d += "\ncp: cel" + title.split(/\s+/)[title.split(/\s+/).length - 1] + " nie jest katalogiem"
        } else if (isDirectory === false && title.includes('-') && title.split(/\s+/).length > 4) {
            d += "\ncp: cel" + title.split(/\s+/)[title.split(/\s+/).length - 1] + " nie jest katalogiem"
        } else {
            if (isDirectory === false) {
                for (let k = 0; k < file.length; k++) {
                    if (file[k].name === nameDir && pathDir === file[k].path) {
                        isFile = true
                        tempFile = file;
                    }
                }
            }
            if (title.split(/\s+/)[1] === '-n' && isFile === true) {

            } else if (title.split(/\s+/)[1] === '-f' && isFile === true) {
                let isF = false;
                for (let j = 0; j < file.length; j++) {
                    if (file[j].name === title.split(/\s+/)[2]) {
                        tempFile.text = file[j].text;
                        isF = true
                        break;
                    }
                }
                if (isF === false) {
                    d += "\ncp: " + title.split(/\s+/)[2] + ": Nie ma takiego pliku lub katalogu"
                }
            } else if (title.split(/\s+/)[1] === '-l' && isFile === true) {
                let isF = false;
                for (let j = 0; j < file.length; j++) {
                    if (file[j].name === title.split(/\s+/)[2]) {
                        tempFile.text += "\n" + file[j].text;
                        isF = true
                        break;
                    }
                }
                if (isF === false) {
                    d += "\ncp: " + title.split(/\s+/)[2] + ": Nie ma takiego pliku lub katalogu"
                }
            }
            else if (title.split(/\s+/)[1] === '-i' && isFile === true) {
                let isF = false;
                for (let j = 0; j < file.length; j++) {
                    if (file[j].name === title.split(/\s+/)[2]) {
                        tempFile.text = file[j].text;
                        isF = true
                        break;
                    }

                }
                if (isF === false) {
                    d += "\ncp: " + title.split(/\s+/)[2] + ": Nie ma takiego pliku lub katalogu"
                }
            } else if (title.includes('-') && title.split(/\s+/)[1] !== "-i" && title.split(/\s+/)[1] !== "-n" && title.split(/\s+/)[1] !== "-f" && title.split(/\s+/)[1] !== "-l") {
                d += "\ncp: nieprawidłowa opcja -- '" + title.split(/\s+/)[1] + "'\n Spróbuj 'cp --help' po więcej informacji"
            } else {
                if (isDirectory === true) {
                    pathDir += "/" + nameDir;
                    for (var i = 1; i < title.split(/\s+/).length - 1; i++) {
                        let isF = false;
                        for (let j = 0; j < file.length; j++) {
                            if (file[j].name === title.split(/\s+/)[i] && file[j].path === pathDir) {
                                file.splice(j, 1);
                                isF = true
                                break;
                            }
                        }
                        if (isF === false) {
                            d += "\ncp: " + title.split(/\s+/)[i] + ": Nie ma takiego pliku lub katalogu"
                        } else {
                            for (let k = 0; k < file.length; k++) {
                                if (file[k].name === title.split(/\s+/)[i] && file[k].path === path) {
                                    const newFile = {
                                        name: file[k].name,
                                        permissions: file[k].permissions,
                                        path: pathDir,
                                        text: file[k].text,
                                        link: file[k].link,
                                        user: file[k].user,
                                        group: file[k].group,
                                        size: file[k].size,
                                        time: file[k].time,
                                    }
                                    file.push(newFile)
                                }
                            }
                        }
                    }
                } else if (isFile) {
                    let isF = false;
                    for (let j = 0; j < file.length; j++) {
                        if (file[j].name === title.split(/\s+/)[1]) {
                            tempFile.text = file[j].text;
                            isF = true
                            break;
                        }

                    }
                    if (isF === false) {
                        d += "\ncp: " + title.split(/\s+/)[1] + ": Nie ma takiego pliku lub katalogu"
                    }
                } else {
                    if (title.includes('-')) {
                        let isF = false;
                        for (let k = 0; k < file.length; k++) {
                            if (file[k].name === title.split(/\s+/)[2] && file[k].path === path) {
                                const newFile = {
                                    name: title.split(/\s+/)[3],
                                    permissions: file[k].permissions,
                                    path: pathDir,
                                    text: file[k].text,
                                    link: file[k].link,
                                    user: file[k].user,
                                    group: file[k].group,
                                    size: file[k].size,
                                    time: file[k].time,
                                }
                                file.push(newFile)
                                isF = true
                            }
                        }
                        if (isF === false) {
                            d += "\ncp: " + title.split(/\s+/)[2] + ": Nie ma takiego pliku lub katalogu"
                        }
                    } else {
                        let isF = false;
                        for (let k = 0; k < file.length; k++) {
                            if (file[k].name === title.split(/\s+/)[1] && file[k].path === path) {
                                const newFile = {
                                    name: title.split(/\s+/)[2],
                                    permissions: file[k].permissions,
                                    path: pathDir,
                                    text: file[k].text,
                                    link: file[k].link,
                                    user: file[k].user,
                                    group: file[k].group,
                                    size: file[k].size,
                                    time: file[k].time,
                                }
                                file.push(newFile)
                                isF = true
                            }
                        }
                        if (isF === false) {
                            d += "\ncp: " + title.split(/\s+/)[1] + ": Nie ma takiego pliku lub katalogu"
                        }
                    }

                }
            }
        }
    }
    return d
}


export default cp

