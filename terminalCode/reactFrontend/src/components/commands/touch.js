
import file from "../file"
import command from "../manual"

const  touch = (prompt,title,path) => {
    var d = prompt + " " + title


    if (!title.includes('-') && title.split(/\s+/).length < 2) {
        d += "\ntouch:" + " brakuje operand" + "\n"
        d += "Spróbuj \'touch --help\' po więcej informacji"
    } else if (title.includes('-') && title.split(/\s+/).length < 3) {
        if (title.includes('--help')) {
            d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/touch.1.html \n https://linux.die.net/man/1/touch \n\n`
            command.map(cmd => {
                if (cmd.id === "touch") {
                    d += cmd.skladnia + " \n "
                    d += cmd.info + " \n "
                    d += cmd.flags
                }
            })
        } else {
            d += "\ntouch:" + " brakuje operand  \n"
            d += "Spróbuj \'touch --help\' po więcej informacji"
        }
    } else {
    var addFile = true
    if (title.split(/\s+/)[1] === "-a") {
        file.map(f => {
            if (path === f.path && title.split(/\s+/)[2] === f.name) {
                f.time = "";
                addFile = false;
            }
        })
    }
    else if (title.split(/\s+/)[1] === "-c") {
        
    }else if (title.split(/\s+/)[1] === "-m") {
        file.map(f => {
            if (path === f.path && title.split(/\s+/)[2] === f.name) {
                f.time = "";
                addFile = false;
            }
        })
    } else {
        file.map(f => {
            if (path === f.path && title.split(/\s+/)[1] === f.name) {
                f.time = "";
                addFile = false
                d += "\ntouch:" + " nie można utworzyć plik "+ title.split(/\s+/)[1] + ": Plik istnieje"
            }
        })
        if (title.split(/\s+/)[1] !== "" && addFile === true) {
            const newFile = {
                name: title.split(/\s+/)[1],
                permissions: "-rw-r--r--",
                user:prompt.split(/[@]/)[0],
                group:prompt.split(/[@]/)[0],
                path: path,
                link:1,
                size:0,
                text: "",
            }

            file.push(newFile)
        }
    }
    }
    return d
}


export default touch