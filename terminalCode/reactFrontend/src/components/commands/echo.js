import file from "../file"
import command from "../manual"


const echo = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    if (title.includes("$(cat")) {
        let plik= title.split(/\s+/)[title.split(/\s+/).length-1] 
        let isFile = false
        file.map(file => {
            if(file.name === plik.split(')')[0]  && file.path === path){
                d += file.text
                isFile = true
            }
        })
        if(isFile === false){
            d+= "\ncat: "+title.split(/\s+/)[i]+ ": Nie ma takiego pliku lub katalogu"
        }
    } else if(title.includes('--help')){
        d+=`Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
        https://man7.org/linux/man-pages/man1/echo.1.html \n https://linux.die.net/man/1/echo \n\n`
        command.map(cmd =>{
            if(cmd.id ==="echo"){
                d+= cmd.skladnia +" \n "
                d+= cmd.info + " \n "
                d+=cmd.flags
            }
        })
    }else {
        for (var i = 1; i < title.split(/\s+/).length; i++) {
            d += title.split(/\s+/)[i]
        }
    }
    return d
}

export default echo
