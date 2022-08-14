import file from "../file";
import command from "../manual";


const head = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    var i = 10;

    if (title.includes('-n')) {
        let n = title.split(/\s+/)[title.split(/\s+/).length-2]
        let isFile = false
        file.map(f => {
            if (path === f.path && title.split(/\s+/)[title.split(/\s+/).length-1] === f.name) {
                let arr =  f.text.split('\n')
                isFile = true
                if ( arr.length > n) {
                    i = n;
                }else{
                    i = arr.length; 
                }
                console.log(i)
                for(var l = 0 ;l<i;l++){
                    d += arr[l]+"\n"
                }
            }
        })
        if(isFile===false){
            d+="\nhead: nie można otworzyć " + title.split(/\s+/)[j] + " do czytania: Nie ma takiego pliku lub katalogu"
        }
    }else if(title.includes('--help')){
        d+=`Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
        https://man7.org/linux/man-pages/man1/head.1.html \n https://linux.die.net/man/1/head \n\n`
        command.map(cmd =>{
            if(cmd.id ==="head"){
                d+= cmd.skladnia +" \n "
                d+= cmd.info + " \n "
                d+=cmd.flags
            }
        })
    } else   if(!title.includes('-')){

        for (var j = 1; j < title.split(/\s+/).length; j++) {
            let isFile  =false
            file.map(f => {
                if (path === f.path && title.split(/\s+/)[j] === f.name) {
                    isFile =true
                    let arr =  f.text.split('\n')
                    if ( arr.length < 10) {
                        i = arr.length;
                    }
                    
                    for(var l = 0; l<i;l++){
                        d += arr[l]+"\n"
                    }
                }
            })
            if(isFile===false){
                d+="\nhead: nie można otworzyć " + title.split(/\s+/)[j] + " do czytania: Nie ma takiego pliku lub katalogu"
            }
            d+="\n"
        }
    }else{
        d+= "head:"+ " nieprawidłowa opcja -- \'"+  title.split(/\s+/)[title.split(/\s+/).length-1][1]+"\'\n"
        d+= "Spróbuj \'head --help\' po więcej informacji"
    }
    return d;
}

export default head