import file from "../tool/file"
import command from "../tool/manual"


const nano = (prompt, title, path) => {
    var d = prompt + " " + title
    var addFile = true
    for (let k = 0; k < file.length; k++) {
        if (path === file[k].path && title.split(/\s+/)[1] === file[k].name) {
            file[k].time = "";
            addFile = false
        }
    }
    if (title.includes('--help')) {
        d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść ma stronę:
         https://linux.die.net/man/1/nano \n\n`
        for (let k = 0; k < command.length; k++) {
            if (command[k].id === "nano") {
                d += command[k].skladnia + " \n "
                d += command[k].info + " \n "
                d += command[k].flags
            }
        }
    } else if (title.split(/\s+/)[1] !== "" && addFile === true) {

        const newFile = {
            name: title.split(/\s+/)[1],
            permissions: "-rw-r--r--",
            user: prompt.split(/[@]/)[0],
            group: prompt.split(/[@]/)[0],
            path: path,
            text: "",
        }

        file.push(newFile)
    }
    return d
}

export default nano