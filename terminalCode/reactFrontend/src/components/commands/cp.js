
import directory from "../directory";
import file from "../file";
import command from "../manual";

const cp = (prompt, title, path) => {
    var d = prompt + " " + title

    if (!title.includes('-') && title.split(/\s+/).length < 3) {
        d += "\ncp:" + " brakuje operand pliku" + "\n"
        d += "Spróbuj \'cp --help\' po więcej informacji"
    } else if (title.includes('-') && title.split(/\s+/).length < 4) {
        if(title.includes('--help')){
            d+=`Tu wyświetlane są tylko informacje, które można wykorzystać w tym terminalu. \nŻeby poznać więcej informacji, które można wykorzystać w prawdziwym terminalu proszę ptrzejść do jednej ze stron:
            https://man7.org/linux/man-pages/man1/cp.1.html \n https://linux.die.net/man/1/cp \n\n`
            command.map(cmd =>{
                if(cmd.id ==="cp"){
                    d+= cmd.skladnia +" \n "
                    d+= cmd.info + " \n "
                    d+=cmd.flags
                }
            })
        }else{
        d += "\ncp:" + " brakuje operand pliku \n"
        d += "Spróbuj \'cp --help\' po więcej informacji"
        }
    } else {
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

        if (isDirectory === false && !title.includes('-') && title.split(/\s+/).length > 3) {
            d+="\ncp: cel"+ title.split(/\s+/)[title.split(/\s+/).length-1] + " nie jest katalogiem"
        } else if (isDirectory === false && title.includes('-') && title.split(/\s+/).length > 4) {
            d+="\ncp: cel"+ title.split(/\s+/)[title.split(/\s+/).length-1] + " nie jest katalogiem"
        } else {
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
                let isF = false;
                for (let j = 0; j < file.length; j++) {
                    if (file[j].name === title.split(/\s+/)[2]) {
                        tempFile.text = file[j].text;
                        isF = true
                        break;
                    }
                }
                if (isF === false) {
                    d += "\ncp: " + title.split(/\s+/)[2] + ": Nie ma takiego pliku lub katalogu"
                }
            } else if (title.split(/\s+/)[1] === '-l' && isFile === true) {
                let isF = false;
                for (let j = 0; j < file.length; j++) {
                    if (file[j].name === title.split(/\s+/)[2]) {
                        tempFile.text += "\n" + file[j].text;
                        isF = true
                        break;
                    }
                }
                if (isF === false) {
                    d += "\ncp: " + title.split(/\s+/)[2] + ": Nie ma takiego pliku lub katalogu"
                }
            }
            else if (title.split(/\s+/)[1] === '-i' && isFile === true) {
                let isF = false;
                for (let j = 0; j < file.length; j++) {
                    if (file[j].name === title.split(/\s+/)[2]) {
                        tempFile.text = file[j].text;
                        isF = true
                        break;
                    }

                }
                if (isF === false) {
                    d += "\ncp: " + title.split(/\s+/)[2] + ": Nie ma takiego pliku lub katalogu"
                }
            } else if (title.includes('-') && title.split(/\s+/)[1] !== "-i" && title.split(/\s+/)[1] !== "-n" && title.split(/\s+/)[1] !== "-f" && title.split(/\s+/)[1] !== "-l") {
                d += "\ncp:" + " nieprawidłowa opcja -- \'" + title.split(/\s+/)[1] + "\'\n"
                d += "Spróbuj \'cp --help\' po więcej informacji"
            } else {
                if (isDirectory === true) {
                    pathDir += "/" + nameDir;
                    for (var i = 1; i < title.split(/\s+/).length - 1; i++) {
                        let isF = false;
                        for (let j = 0; j < file.length; j++) {
                            if (file[j].name === title.split(/\s+/)[i] && file[j].path === pathDir) {
                                file.splice(j, 1);
                                isF = true
                                break;
                            }
                        }
                        if (isF === false) {
                            d += "\ncp: " + title.split(/\s+/)[i] + ": Nie ma takiego pliku lub katalogu"
                        } else {
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
                    }
                } else if (isFile) {
                    let isF = false;
                    for (let j = 0; j < file.length; j++) {
                        if (file[j].name === title.split(/\s+/)[1]) {
                            tempFile.text = file[j].text;
                            isF = true
                            break;
                        }

                    }
                    if (isF === false) {
                        d += "\ncp: " + title.split(/\s+/)[1] + ": Nie ma takiego pliku lub katalogu"
                    }
                } else {
                    if (title.includes('-')) {
                        let isF = false;
                        file.map(f => {
                            if (f.name === title.split(/\s+/)[2] && f.path === path) {
                                console.log(pathDir)

                                const newFile = {
                                    name: title.split(/\s+/)[3],
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
                                isF = true
                            }
                        })
                        if (isF === false) {
                            d += "\ncp: " + title.split(/\s+/)[2] + ": Nie ma takiego pliku lub katalogu"
                        }
                    } else {
                        let isF = false;
                        file.map(f => {
                            if (f.name === title.split(/\s+/)[1] && f.path === path) {
                                console.log(pathDir)
                                const newFile = {
                                    name: title.split(/\s+/)[2],
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
                                isF = true
                            }
                        })
                        if (isF === false) {
                            d += "\ncp: " + title.split(/\s+/)[1] + ": Nie ma takiego pliku lub katalogu"
                        }
                    }

                }
            }
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