

const history = (prompt, title,history) => {
    var d = prompt + " " + title + "\n"
    var i = 0;

    history.map(his => {
        if (history.length - 1 === i) {
            d += his.title
        } else {
            d += his.title + "\n"
        }
        i++;
    })

    return d
}

export default   history 