
import directory from "../directory"
import file from "../file"

const ls = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    let dir = [].concat(directory);
    let fil = [].concat(file);
    if (title.includes('S')) {
        dir = [].concat(directory).sort((a, b) => a.size < b.size ? 1 : -1)
        fil = [].concat(file).sort((a, b) => a.size < b.size ? 1 : -1)

        if (title.includes('r')) {
            dir.reverse()
            fil.reverse()
        }
    } else if (title.includes('r')) {
        dir = [].concat(directory)
        fil = [].concat(file)
        dir.reverse()
        fil.reverse()
    }
    if (title.includes('d')) {
        if (title.includes('*/')) {
            var isDirectory = false
            dir.map(dir => {
                if (dir.path === path) {
                    d += dir.name + "/     ";
                    isDirectory = true
                }
            })
        } else if (title.includes('/*')) {
            var isDirectory = false
            dir.map(dir => {
                if (dir.path === '/') {
                    d += "/" + dir.name + "     ";
                    isDirectory = true
                }
            })
        } else {
            d += ".";
        }
    } else if (title.includes('-l')) {
        var isDirectory = false
        if (title.includes('a')) {
            dir.map(dir => {
                if (dir.path === path) {
                    d += dir.permissions + " " + dir.link + " " + dir.user + " " + dir.group + " " + dir.size + " " + dir.time + " " + dir.name + "\n";
                    isDirectory = true
                }
            })
            if (isDirectory === true) {
                d += "\n"
            }
            fil.map(file => {
                if (file.path === path) {
                    d += file.permissions + " " + file.link + " " + file.user + " " + file.group + " " + file.size + " " + file.time + " " + file.name + "\n";
                }
            })
        } else {
            var isDirectory = false
            dir.map(dir => {
                if (dir.path === path) {
                    d += dir.permissions + " " + dir.link + " " + dir.user + " " + dir.group + " " + dir.size + " " + dir.time + " " + dir.name + "\n";
                    isDirectory = true
                }
            })
            if (isDirectory === true) {
                d += "\n"
            }
            fil.map(file => {
                if (file.path === path && file.name.charAt(0) !== '.') {
                    d += file.permissions + " " + file.link + " " + file.user + " " + file.group + " " + file.size + " " + file.time + " " + file.name + "\n";
                }
            })
        }
    } else if (title.includes('a')) {
        var isDirectory = false
        directory.map(dir => {
            if (dir.path === path) {
                d += dir.name + "     ";
                isDirectory = true
            }
        })
        if (isDirectory === true) {
            d += "\n"
        }
        file.map(file => {
            if (file.path === path) {
                d += file.name + "      ";
            }
        })
    }else if (title.includes('help')) {

    } else {
        var isDirectory = false
        dir.map(dir => {
            if (dir.path === path) {
                d += dir.name + "     ";
                isDirectory = true
            }
        })
        if (isDirectory === true) {
            d += "\n"
        }
        fil.map(file => {
            if (file.path === path && file.name.charAt(0) !== '.') {
                d += file.name + "      ";
            }
        })
    }
    return d
}

export default ls