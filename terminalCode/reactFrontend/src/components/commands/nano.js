import file from "../file"
import command from "../manual"


const nano =(prompt, title, path) =>{
    var d = prompt + " " + title
    var addFile = true
    file.map(f => {
        if (path === f.path && title.split(/\s+/)[1] === f.name) {
            f.time = "";
            addFile = false
        }
    }) 
    if (title.includes('--help')) {
        d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść ma stronę:
         https://linux.die.net/man/1/nano \n\n`
        command.map(cmd => {
            if (cmd.id === "nano") {
                d += cmd.skladnia + " \n "
                d += cmd.info + " \n "
                d += cmd.flags
            }
        })
    }else if (title.split(/\s+/)[1] !== "" && addFile === true) {

        const newFile = {
            name: title.split(/\s+/)[1],
            permissions: "-rw-r--r--",
            user:prompt.split(/[@]/)[0],
            group:prompt.split(/[@]/)[0],
            path: path,
            text: "",
        }

        file.push(newFile)
    }
    return d
}

export default nano