
import directory from "../directory"
import file from "../file";
import command from "../manual"

const cd = (prompt, title, prevPath, path) => {
    var d = prompt + " " + title;
    if (title.split(/\s+/).length === 1) {
        path = "/home/" + prompt.split(/[@]/)[0]
    }
    else if (title.includes('..')) {
        let tempPath = ""
        for (var i = 1; i < path.split('/').length - 1; i++) {
            tempPath += "/" + path.split('/')[i]
        }
        if (tempPath === "") {
            tempPath = "/"
        }
        path = tempPath
    } else if (title.includes('-')) {
        path = prevPath
    } else if (title.includes('--help')) {
        d+=`Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu.  \n\n`
        command.map(cmd =>{
            if(cmd.id ==="cd"){
                d+= cmd.skladnia +" \n "
                d+= cmd.info + " \n "
                d+=cmd.flags
            }
        })
    }else if (title.split(/\s+/).length > 2){
        d+= "\ncd: zbyt wiele argumentów"
    } else {
        if (title.split(/\s+/)[1].split(/[/]/).length > 1) {
            let isDir=false
            if(title.split(/\s+/)[1].split(/[/]/)[0]!==""){
                let tempPath =  title.split(/\s+/)[1].split(/[/]/)
                let newPath = path
                for(var i=0;i<tempPath.length;i++){
                    isDir = false
                    directory.map(dir => {
                    if (dir.name === tempPath[i] && dir.path === newPath) {
                        newPath +="/"+tempPath[i]
                        isDir = true
                    }
                })
                if(isDir===false){
                    let isFile = false
                    file.map(file =>{
                        if (file.name === tempPath[i] && file.path === newPath) {
                            isFile = true
                        } 
                    })
                    if(isFile === true){
                        d+= "\ncd: "+tempPath[i]+ ": Nie jest katalogiem"
                    }else{
                        d+= "\ncd: "+tempPath[i]+ ": Nie ma takiego pliku lub katalogu"
                    }
                    break;
                }
                }
                if(isDir===true){
                    path = newPath
                }
            }else{
                let tempPath =  title.split(/\s+/)[1].split(/[/]/)
                let newPath = "/"
                for(var i=0;i<tempPath.length;i++){
                    isDir = false
                    directory.map(dir => {
                    if (dir.name === tempPath[i] && dir.path === newPath) {
                        isDir = true
                        if(newPath ==="/"){
                            newPath = newPath + dir.name;
                        }else {
                            newPath = newPath + "/" + dir.name;
                        }
                    }
                })
                if(isDir===false){
                    let isFile = false
                    file.map(file =>{
                        if (file.name === tempPath[i] && file.path === newPath) {
                            isFile = true
                        } 
                    })
                    if(isFile === true){
                        d+= "\ncd: "+tempPath[i]+ ": Nie jest katalogiem"
                    }else{
                        d+= "\ncd: "+tempPath[i]+ ": Nie ma takiego pliku lub katalogu"
                    }
                    break;
                }
                }
                if(isDir===true){
                    path = newPath
                }
            }
            
        } else {
            let isDir = false;
            directory.map(dir => {
                if (dir.name === title.split(/\s+/)[1] && dir.path === path) {
                    if(path ==="/"){
                        path = path + dir.name;
                    }else {
                        path = path + "/" + dir.name;
                    }
                    isDir = true
                }
            })
            if(isDir===false){
                let isFile = false
                file.map(file =>{
                    if (file.name === title.split(/\s+/)[1] && file.path === path) {
                        isFile = true
                    } 
                })
                if(isFile === true){
                    d+= "\ncd: "+title.split(/\s+/)[1]+ ": Nie jest katalogiem"
                }else{
                    d+= "\ncd: "+title.split(/\s+/)[1]+ ": Nie ma takiego pliku lub katalogu"
                }
            }
        }
    }
    return [path,d]
}

export default cd