

const date = (prompt, title) => {
    var d = prompt + " " + title + "\n"

    d += Date().toLocaleString()

    return d
}

export default date
