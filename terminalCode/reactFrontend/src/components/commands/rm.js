import directory from "../directory"
import file from "../file"

const rm = (prompt, title, path, index) => {
    var d = prompt + " " + title
    console.log(index)
    if (title.split(/\s+/)[1] === '-r') {
        for (var i = 2; i < title.split(/\s+/).length; i++) {
            var isDir = false
            var isFile = false
            file.map(f => {
                if (path === f.path && title.split(/\s+/)[i] === f.name) {
                    isFile = true
                }
            })
            if (isFile === true) {
                for (var j = 0; j < file.length; j++) {
                    if (title.split(/\s+/)[i] === file[j].name) {
                        file.splice(j, 1);
                        break;
                    }
                }
            } else {
                directory.map(dir => {
                    if (path === dir.path && title.split(/\s+/)[i] === dir.name) {
                        isDir = true
                    }
                })
                if (isDir === true) {
                    for (var j = 0; j < directory.length; j++) {
                        if (title.split(/\s+/)[i] === directory[j].name) {
                            directory.splice(j, 1);
                            break;
                        }
                    }
                } else {
                    d += "\n rm: cannot remove '" + `${title.split(/\s+/)[i]}` + "': No such file or directory"
                }
            }
        }
}
    else if (title.split(/\s+/)[1] === '-i') {
                for (var j = 0; j < file.length; j++) {
                    if (title.split(/\s+/)[index] === file[j].name) {
                        file.splice(j, 1);
                        break;
                    }
                }
    }
    else if (title.split(/\s+/)[1] === '-f' ) {
        for (var i = 2; i < title.split(/\s+/).length; i++) {
            var isDir = false
            var isFile = false
            file.map(f => {
                if (path === f.path && title.split(/\s+/)[i] === f.name) {
                    isFile = true
                }
            })
            if (isFile === true) {
                for (var j = 0; j < file.length; j++) {
                    if (title.split(/\s+/)[i] === file[j].name) {
                        file.splice(j, 1);
                        break;
                    }
                }
            } else {
                directory.map(dir => {
                    if (path === dir.path && title.split(/\s+/)[i] === dir.name) {
                        isDir = true
                    }
                })
                if (isDir === true) {
                    d += "\n rm: cannot remove '" + `${title.split(/\s+/)[i]}` + "': Is a directory"
                }
            }
        }
    } else {
        for (var i = 1; i < title.split(/\s+/).length; i++) {
            var isDir = false
            var isFile = false
            file.map(f => {
                if (path === f.path && title.split(/\s+/)[i] === f.name) {
                    isFile = true
                }
            })
            if (isFile === true) {
                for (var j = 0; j < file.length; j++) {
                    if (title.split(/\s+/)[i] === file[j].name) {
                        file.splice(j, 1);
                        break;
                    }
                }
            } else {
                directory.map(dir => {
                    if (path === dir.path && title.split(/\s+/)[i] === dir.name) {
                        isDir = true
                    }
                })
                if (isDir === true) {
                    d += "\n rm: cannot remove '" + `${title.split(/\s+/)[i]}` + "': Is a directory"
                } else {
                    d += "\n rm: cannot remove '" + `${title.split(/\s+/)[i]}` + "': No such file or directory"
                }
            }
        }
    }
    // directory.map(dir => {
    //     if (path === dir.path && title.split(/\s+/)[1] === dir.name) {
    //         isDir = true
    //     }
    // })
    // if (title.split(/\s+/)[1] !== "" && isDir === true) {
    //     for (var i = 0; i < directory.length; i++) {
    //         if (title.split(/\s+/)[1] === directory[i].name) {
    //             directory.splice(i, 1);
    //             break;
    //         }
    //     }
    // }
    // if (isDir === false) {
    //     file.map(f => {
    //         if (path === f.path && title.split(/\s+/)[1] === f.name) {
    //             isFile = true
    //         }
    //     })
    //     if (title.split(/\s+/)[1] !== "" && isFile === true) {
    //         for (i = 0; i < file.length; i++) {
    //             if (title.split(/\s+/)[1] === file[i].name) {
    //                 file.splice(i, 1);
    //                 break;
    //             }
    //         }
    //     }
    // }
    return d
}

export default rm