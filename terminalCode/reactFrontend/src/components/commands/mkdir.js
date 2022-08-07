
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
            permissions: "drwxr-xr-x",
            user:prompt.split(/[@]/)[0],
            group:prompt.split(/[@]/)[0],
            link: 2,
            size: 4096,
            path: path,
        }
        console.log(path.split('/'))

        let tempPath = ""
        for(var i=1;i<path.split('/').length-1;i++){
            tempPath +="/"+ path.split('/')[i]
        }
        console.log(tempPath)
        directory.map(dir =>{
            if(dir.name === path.split('/')[path.split('/').length-1] && dir.path ===tempPath){
                dir.link = dir.link+1
            }
        })
        directory.push(newDir)
    }
   return d
}

export default mkdir