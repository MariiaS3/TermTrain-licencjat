
import file from "../tool/file"
import command from "../tool/manual"

const touch = (prompt, title, path) => {
    var d = prompt + " " + title


    if (!title.includes('-') && title.split(/\s+/).length < 2) {
        d += "\ntouch: brakuje operand \nSpróbuj 'touch --help' po więcej informacji"
    } else if (title.includes('-') && title.split(/\s+/).length < 3) {
        if (title.includes('--help')) {
            d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/touch.1.html \n https://linux.die.net/man/1/touch \n\n`
            for (let k = 0; k < command.length; k++) {
                if (command[k].id === "touch") {
                    d += command[k].skladnia + " \n "
                    d += command[k].info + " \n "
                    d += command[k].flags
                }
            }
        } else {
            d += "\ntouch: brakuje operand  \nSpróbuj 'touch --help' po więcej informacji"
        }
    } else {
        var addFile = true
        if (title.split(/\s+/)[1] === "-a") {
            for (let k = 0; k < file.length; k++) {
                if (path === file[k].path && title.split(/\s+/)[2] === file[k].name) {
                    file[k].time = "";
                    addFile = false;
                }
            }
        }
        else if (title.split(/\s+/)[1] === "-c") {

        } else if (title.split(/\s+/)[1] === "-m") {
            for (let k = 0; k < file.length; k++) {
                if (path === file[k].path && title.split(/\s+/)[2] === file[k].name) {
                    file[k].time = "";
                    addFile = false;
                }
            }
        } else {
            for (let k = 0; k < file.length; k++) {
                if (path === file[k].path && title.split(/\s+/)[1] === file[k].name) {
                    let date = Date().toLocaleString().split(" ")[1]+ " "
                    date +=Date().toLocaleString().split(" ")[2] + " "
                    date +=Date().toLocaleString().split(" ")[3] + " "
                    date +=Date().toLocaleString().split(" ")[4]

                    file[k].time = date;
                    addFile = false
                }
            }
            if (title.split(/\s+/)[1] !== "" && addFile === true) {
                const newFile = {
                    name: title.split(/\s+/)[1],
                    permissions: "-rw-r--r--",
                    user: prompt.split(/[@]/)[0],
                    group: prompt.split(/[@]/)[0],
                    path: path,
                    time: Date().toLocaleString(),
                    link: 1,
                    size: 0,
                    text: "",
                }

                file.push(newFile)
            }
        }
    }
    return d
}


export default touch