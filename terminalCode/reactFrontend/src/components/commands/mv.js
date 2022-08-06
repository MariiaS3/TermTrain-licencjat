import directory from "../directory"
import file from "../file"

const mv = (prompt, title, path) => {
    var d = prompt + " " + title
    var isFile = false;
    var isDirectory = false;
    let folder = (title.split(/\s+/)[title.split(/\s+/).length - 1]).split('/')
    let nameDir = folder[folder.length - 1]
    let pathDir = "/";
    if (folder.length === 1) {
        pathDir = path;
    } else {
        for (var i = 0; i < folder.length - 1; i++) {
            pathDir += folder[i];
            if (i < folder.length - 2)
                pathDir += "/";
        }
    }
    directory.map(dir => {
        if (dir.name === nameDir && pathDir === dir.path) {
            isDirectory = true;
        }
    })
    var tempFile;
    if (isDirectory === false) {
        file.map(file => {
            if (file.name === nameDir && pathDir === file.path) {
                isFile = true
                tempFile = file;
            }
        })
    }
    if (title.split(/\s+/)[1] === '-n' && isFile === true) {
           
    }
    else if (title.split(/\s+/)[1] === '-f' && isFile === true) {
        for (let j = 0; j < file.length; j++) {
            if (file[j].name === title.split(/\s+/)[2]) {
                tempFile.text = file[j].text;
                file.splice(j, 1);
                break;
            }
        }
    } else if (title.includes('-i') && isFile === true) {
        for (let j = 0; j < file.length; j++) {
            if (file[j].name === title.split(/\s+/)[2]) {
                tempFile.text = file[j].text;
                file.splice(j, 1);
                break;
            }
        }
    } else {
        if (isDirectory === true) {
            pathDir += "/" + nameDir
            for (var i = 1; i < title.split(/\s+/).length; i++) {
                for (let j = 0; j < file.length; j++) {
                    if(file[j].name ===title.split(/\s+/)[i] && file[j].path === pathDir){
                        file.splice(j, 1);
                        break;
                    }
                }
                for (let j = 0; j < file.length; j++) {
                    if (file[j].name === title.split(/\s+/)[i]) {
                        file[j].path = pathDir;
                    }
                }
            }
        } else if (isFile) {
            for (let j = 0; j < file.length; j++) {
                if (file[j].name === title.split(/\s+/)[1]) {
                    tempFile.text = file[j].text;
                    file.splice(j, 1);
                    break;
                }
            }
        } else {
            console.log(nameDir)
            for (let j = 0; j < file.length; j++) {
                if (file[j].name === title.split(/\s+/)[1]) {
                    file[j].name = nameDir;
                    break;
                }
            }
        }
    }
    return d
}


export default mv




