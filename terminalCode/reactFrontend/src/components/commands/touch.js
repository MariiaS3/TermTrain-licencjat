
import file from "../file"

const  touch = (prompt,title,path) => {
    var d = prompt + " " + title
    var addFile = true
    if (title.split(/\s+/)[1] === "-a") {
        file.map(f => {
            if (path === f.path && title.split(/\s+/)[2] === f.name) {
                f.time = "";
                addFile = false;
            }
        })
    }
    else if (title.split(/\s+/)[1] === "-c") {
        
    }else if (title.split(/\s+/)[1] === "-m") {
        file.map(f => {
            if (path === f.path && title.split(/\s+/)[2] === f.name) {
                f.time = "";
                addFile = false;
            }
        })
    } else {
        file.map(f => {
            if (path === f.path && title.split(/\s+/)[1] === f.name) {
                f.time = "";
                addFile = false
            }
        })
        if (title.split(/\s+/)[1] !== "" && addFile === true) {

            const newFile = {
                name: title.split(/\s+/)[1],
                permissions: "",
                path: path,
                text: "",
            }

            file.push(newFile)
        }
    }
    return d
}


export default touch