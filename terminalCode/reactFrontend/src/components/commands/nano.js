import file from "../file"


const nano =(prompt, title, path) =>{
    var d = prompt + " " + title
    var addFile = true
    file.map(f => {
        if (path === f.path && title.split(/\s+/)[1] === f.name) {
            f.time = "";
            addFile = false
        }
    })
    if (title.split(/\s+/)[1] !== "" && addFile === true) {

        const newFile = {
            name: title.split(/\s+/)[1],
            permissions: "-rw-r--r--",
            user:prompt.split(/[@]/)[0],
            group:prompt.split(/[@]/)[0],
            path: path,
            text: "",
        }

        file.push(newFile)
    }
    return d
}

export default nano