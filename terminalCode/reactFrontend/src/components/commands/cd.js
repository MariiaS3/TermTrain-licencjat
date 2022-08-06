
import directory from "../directory"

 const cd = ( title, prevPath, path) => {
    if (title.includes('..')) {
        path ="/home/user"
    } else if (title.includes('-')) {
        path =prevPath
    }else if (title.includes('help')) {

    }else {
        directory.map(dir => {
            if (dir.name === title.split(/\s+/)[1] && dir.path === path) {
                path = path + "/" + dir.name;
            }
        })
    }
    return  path
}

export default cd