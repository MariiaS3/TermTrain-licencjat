import file from "../file";
import command from "../manual";

const cat = (prompt, title, path) => {
    var d = prompt + " " + title + "\n";

    if (title.includes('-n')) {
        let j = 1;
        for (var i = 2; i < title.split(/\s+/).length; i++) {
            file.map(f => {
                if (path === f.path && title.split(/\s+/)[i] === f.name) {
                    f.text.split('\n').map(s => {
                        d += j + "  " + s + "\n";
                        j++;
                    })
                }
            })
        }
    }else if(title.includes('--help')){
        d+=`Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
        https://man7.org/linux/man-pages/man1/cat.1.html \n https://linux.die.net/man/1/cat \n\n`
        command.map(cmd =>{
            if(cmd.id ==="cat"){
                d+= cmd.skladnia +" \n "
                d+= cmd.info + " \n "
                d+=cmd.flags
            }
        })
    } else if(!title.includes('-') && title.split(/\s+/).length>1){
        for (var i = 1; i < title.split(/\s+/).length; i++) {
            let isFile= false
            file.map(f => {
                if (path === f.path && title.split(/\s+/)[i] === f.name) {
                    d += f.text
                    isFile = true
                }
            })
            if(isFile === false){
                d+= "cat: "+title.split(/\s+/)[i]+ ": Nie ma takiego pliku lub katalogu"
            }
            d+="\n"
        }
    }else{
        d+= "cat:"+ " nieprawidłowa opcja -- \'"+  title.split(/\s+/)[title.split(/\s+/).length-1]+"\'\n"
        d+= "Spróbuj \'cat --help\' po więcej informacji"
    }
    return d
}

export default cat