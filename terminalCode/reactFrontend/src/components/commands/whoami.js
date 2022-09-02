
const whoami = (prompt, title) => {
    var d = prompt + " " + title + "\n"

    d += prompt.split(/[@]/)[0]

    return d;
}

export default whoami