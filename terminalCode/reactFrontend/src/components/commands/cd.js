
import directory from "../directory"

const cd = (prompt, title, prevPath, path) => {

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
    } else if (title.includes('help')) {

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
                }
                if(isDir===true){
                    path = newPath
                }
            }
            
        } else {
            directory.map(dir => {
                if (dir.name === title.split(/\s+/)[1] && dir.path === path) {
                    if(path ==="/"){
                        path = path + dir.name;
                    }else {
                        path = path + "/" + dir.name;
                    }
                }
            })
        }
    }
    return path
}

export default cd