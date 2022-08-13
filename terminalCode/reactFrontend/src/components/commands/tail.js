import file from "../file";

const tail = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    var i = 0;
    
    if (title.includes('-n')) {
        let n = title.split(/\s+/)[title.split(/\s+/).length-2]
    

        file.map(f => {
            if (path === f.path && title.split(/\s+/)[title.split(/\s+/).length-1] === f.name) {
                let arr =  f.text.split('\n')
                if ( arr.length > n) {
                    i = arr.length - n;
                }
                
                for(var l = i; l<arr.length;l++){
                    d += arr[l]+"\n"
                }
            }
        })
    } else {
        for (var j = 1; j < title.split(/\s+/).length; j++) {
            file.map(f => {
                if (path === f.path && title.split(/\s+/)[j] === f.name) {
                    let arr =  f.text.split('\n')
                    if ( arr.length > 10) {
                        i = arr.length - 10;
                    }
                    
                    for(var l = i; l<arr.length;l++){
                        d += arr[l]+"\n"
                    }
                }
            })
            d+="\n"
        }
    }
    return d;
}

export default tail