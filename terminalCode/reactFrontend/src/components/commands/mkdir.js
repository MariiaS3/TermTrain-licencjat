
import directory from "../directory"

const mkdir = (prompt,title,path) => {
    var d = prompt + " " + title
    var addDir = true
    directory.map(dir => {
        if (path === dir.path && title.split(/\s+/)[1] === dir.name) {
            addDir = false
        }
    })
    if (title.split(/\s+/)[1] !== "" && addDir === true) {

        const newDir = {
            name: title.split(/\s+/)[1],
            permissions: "",
            path: path,
        }

        directory.push(newDir)
    }
    directory.map(f => {
        console.log(f.name)
    })
   return d
}

export default mkdir