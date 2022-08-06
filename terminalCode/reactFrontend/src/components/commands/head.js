const head = (prompt, title, history) => {
    var d = prompt + " " + title + "\n"
    var i = history.length;

    if (title.includes('-n')) {
        let n = title.split(/\s+/)[title.split(/\s+/).length-1]
        if (history.length > n) {
            i = n
        }

        for (var j = 0; j < i; j++) {
            d += history[j].title + "\n"
        }
    } else {
        if (history.length > 10) {
            i = 10;
        }

        for (var j = 0; j < i; j++) {
            d += history[j].title + "\n"
        }
    }
    return d;
}

export default head