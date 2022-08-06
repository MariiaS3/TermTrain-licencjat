

const tail = (prompt, title, history) => {
    var d = prompt + " " + title + "\n"
    var i = 0;

    if (title.includes('-n')) {
        let n = title.split(/\s+/)[title.split(/\s+/).length-1]
        if (history.length > n) {
            i = history.length - n;
        }

        for (var j = i; j < history.length; j++) {
            d += history[j].title + "\n"
        }
    } else {
        if (history.length > 10) {
            i = history.length - 10;
        }

        for (var j = i; j < history.length; j++) {
            d += history[j].title + "\n"
        }
    }
    return d;
}

export default tail