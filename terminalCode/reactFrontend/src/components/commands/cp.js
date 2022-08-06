
import directory from "../directory";
import file from "../file";

const cp = (prompt, title, path) => {
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
    var copyFile;
    if (isDirectory === false) {
        file.map(file => {
            if (file.name === nameDir && pathDir === file.path) {
                isFile = true
                tempFile = file;
            }
        })
    }
    if (title.split(/\s+/)[1] === '-n' && isFile === true) {

    } else if (title.split(/\s+/)[1] === '-f' && isFile === true) {
        for (let j = 0; j < file.length; j++) {
            if (file[j].name === title.split(/\s+/)[2]) {
                tempFile.text = file[j].text;
                break;
            }
        }
    }else if (title.split(/\s+/)[1] === '-l' && isFile === true) {
        for (let j = 0; j < file.length; j++) {
            if (file[j].name === title.split(/\s+/)[2]) {
                tempFile.text += "\n"+file[j].text;
                break;
            }
        }
    }
    else if (title.split(/\s+/)[1] === '-i' && isFile === true) {
        for (let j = 0; j < file.length; j++) {
            if (file[j].name === title.split(/\s+/)[2]) {
                tempFile.text = file[j].text;
                break;
            }
        }
    } else {
        if (isDirectory === true) {

            pathDir += "/" + nameDir;
            for (var i = 1; i < title.split(/\s+/).length - 1; i++) {
                for (let j = 0; j < file.length; j++) {
                    if (file[j].name === title.split(/\s+/)[i] && file[j].path === pathDir) {
                        file.splice(j, 1);
                        break;
                    }
                }
                file.map(f => {
                    if (f.name === title.split(/\s+/)[i] && f.path === path) {
                        const newFile = {
                            name: f.name,
                            permissions: f.permissions,
                            path: pathDir,
                            text: f.text,
                            link: f.link,
                            user: f.user,
                            group: f.group,
                            size: f.size,
                            time: f.time,
                        }
                        file.push(newFile)
                    }
                })
            }
        } else if (isFile) {
            for (let j = 0; j < file.length; j++) {
                if (file[j].name === title.split(/\s+/)[1]) {
                    tempFile.text = file[j].text;
                    break;
                }
            }
        } else {
            file.map(f => {
                if (f.name === title.split(/\s+/)[1] && f.path === path) {
                    const newFile = {
                        name: f.name,
                        permissions: f.permissions,
                        path: pathDir,
                        text: f.text,
                        link: f.link,
                        user: f.user,
                        group: f.group,
                        size: f.size,
                        time: f.time,
                    }
                    file.push(newFile)
                }
            })
        }
    }
    return d
}


export default cp





//  else if(title.split(/\s+/)[1] === '-n'){
//     for (var i = 1; i < title.split(/\s+/).length; i++) {
//         var isDirectory = false
//         let isFile = false;
//         file.map(f => {
//             if (f.name === title.split(/\s+/)[i] && f.path === path) {
//                 directory.map(dir => {
//                     if (dir.name === title.split(/\s+/)[title.split(/\s+/).length - 1]) {
//                         file.map(plik => {
//                             if (plik.name === f.name && plik.path === (f.path + "/" + title.split(/\s+/)[title.split(/\s+/).length - 1])) {
//                                 isFile = true;
//                                 isDirectory = true
//                             }
//                         })
//                         if (isFile === false) {
//                             const newFile = {
//                                 name: title.split(/\s+/)[1],
//                                 permissions: f.permissions,
//                                 path: path + "/" + title.split(/\s+/)[title.split(/\s+/).length - 1],
//                                 text: f.text,
//                                 link: f.link,
//                                 user: f.user,
//                                 group: f.group,
//                                 size: f.size,
//                                 time: f.time,
//                             }

//                             file.push(newFile)
//                             isDirectory = true
//                         }
//                     }
//                 })
//                 if (isDirectory === false) {

//                     file.map(plik => {
//                         if (plik.name === title.split(/\s+/)[2]) {
//                             isFile=true;
//                         }
//                     })
//                     if (isFile === false) {
//                         const newFile = {
//                             name: title.split(/\s+/)[2],
//                             permissions: f.permissions,
//                             path: path,
//                             text: f.text,
//                             link: f.link,
//                             user: f.user,
//                             group: f.group,
//                             size: f.size,
//                             time: f.time,
//                         }

//                         file.push(newFile)
//                     }
//                 }

//             }
//         })
//     }
// }
// else {