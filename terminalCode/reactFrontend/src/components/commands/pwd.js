
const pwd = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"
    if (title.includes('help')) {

    } else {
        d += path
    }
    return d
}

export default pwd