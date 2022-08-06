import directory from "../directory"

const rmdir = (prompt,title,path) => {
    var d = prompt + " " + title
    var deleteDir = false
    directory.map(dir => {
        if (path === dir.path && title.split(/\s+/)[1] === dir.name) {
            deleteDir = true
        }
    })
    if (title.split(/\s+/)[1] !== "" && deleteDir === true) {
        for (var i = 0; i < directory.length; i++) {
            if (title.split(/\s+/)[1] === directory[i].name) {
                directory.splice(i, 1);
                break;
            }
        }
    }
    return d
}

export default rmdir