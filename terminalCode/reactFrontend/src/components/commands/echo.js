import file from "../file"


const echo = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    if (title.includes("$(cat")) {
        let plik= title.split(/\s+/)[title.split(/\s+/).length-1] 
        console.log(plik.split(')'))
        file.map(file => {
            if(file.name === plik.split(')')[0]  && file.path === path){
                d += file.text
            }
        })
    } else {
        for (var i = 1; i < title.split(/\s+/).length; i++) {
            d += title.split(/\s+/)[i]
        }
    }
    return d
}

export default echo
