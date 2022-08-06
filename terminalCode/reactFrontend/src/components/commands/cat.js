import file from "../file";

const cat = (prompt, title, path) => {
    var d = prompt + " " + title + "\n";

    if (title.includes('-n')) {
        let j = 1;
        for (var i = 2; i < title.split(/\s+/).length; i++) {
            file.map(f => {
                if (path === f.path && title.split(/\s+/)[i] === f.name) {
                    f.text.split('\n').map(s => {
                        d += j + "  " + s + "\n";
                        j++;
                    })
                }
            })
        }
    }
    else {
        for (var i = 1; i < title.split(/\s+/).length; i++) {
            file.map(f => {
                if (path === f.path && title.split(/\s+/)[i] === f.name) {
                    d += f.text
                }
            })
            d+="\n"
        }
    }
    return d
}

export default cat