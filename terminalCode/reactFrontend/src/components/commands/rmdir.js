import directory from "../directory"
import file from "../file"
import command from "../manual"

const rmdir = (prompt, title, path) => {
    var d = prompt + " " + title

    if (!title.includes('-') && title.split(/\s+/).length < 2) {
        d += "\nrmdir:" + " brakuje operand" + "\n"
        d += "Spróbuj \'rmdir --help\' po więcej informacji"
    } else if (title.includes('-') && title.split(/\s+/).length < 3) {
        if (title.includes('--help')) {
            d += `\nTu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/rmdir.1.html \n https://linux.die.net/man/1/rmdir \n\n`
            command.map(cmd => {
                if (cmd.id === "rmdir") {
                    d += cmd.skladnia + " \n "
                    d += cmd.info + " \n "
                    d += cmd.flags
                }
            })
        } else {
            d += "\nrmdir:" + " brakuje operand  \n"
            d += "Spróbuj \'rmdir --help\' po więcej informacji"
        }
    } else {
        for(var j=1;j<title.split(/\s+/).length;j++){
            let deleteDir = false
            directory.map(dir => {
                if (path === dir.path && title.split(/\s+/)[j] === dir.name) {
                    deleteDir = true
                }
            })
    
            if (title.split(/\s+/)[j] !== "" && deleteDir === true) {
                if (path !== '/') {
                    let tempPath = path.split(/[/]/)
                    let newPath = ""
                    for (var i = 1; i < tempPath.length - 1; i++) {
                        newPath += "/" + tempPath[i]
                    }
                    console.log(newPath)
                    directory.map(dir => {
                        if (newPath === dir.path && tempPath[tempPath.length - 1] === dir.name) {
                            dir.link = dir.link - 1
                        }
                    })
                }
                for (var i = 0; i < directory.length; i++) {
                    if (title.split(/\s+/)[j] === directory[i].name) {
                        directory.splice(i, 1);
                        break;
                    }
                }
            }else{
                let isF =false
                file.map(file =>{
                    if(file.name === title.split(/\s+/)[j] && path === file.path){
                        isF = true
                    }
                })
                if(isF === true){
                    d += "\n rmdir: nie można usunąć '" + `${title.split(/\s+/)[j]}` + "': Jest plikiem"
                }else{
                    d += "\n rmdir: nie można usunąć '" + `${title.split(/\s+/)[j]}` + "': Nie ma takiego pliku lub katalogu"
                }
            }
        }
       
    }
    return d
}

export default rmdir