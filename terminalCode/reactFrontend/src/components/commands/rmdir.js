import directory from "../directory"

const rmdir = (prompt,title,path) => {
    var d = prompt + " " + title
    var deleteDir = false
    directory.map(dir => {
        if (path === dir.path && title.split(/\s+/)[1] === dir.name) {
            deleteDir = true
        }
    })

   
    directory.map(dir => {
        if (path === dir.path && title.split(/\s+/)[1] === dir.name) {
            deleteDir = true
        }
    })
    if (title.split(/\s+/)[1] !== "" && deleteDir === true) {
        if(path!=='/'){
            let tempPath = path.split(/[/]/)
            let newPath = ""
            for(var i=1;i<tempPath.length-1;i++){
                newPath += "/"+tempPath[i]
            }
            console.log(newPath)
            directory.map(dir => {
                if (newPath === dir.path && tempPath[tempPath.length-1]=== dir.name) {
                    dir.link= dir.link -1
                }
            })
        }
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