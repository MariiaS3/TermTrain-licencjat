
import file from "../file"

const wc = (prompt, title, path) => {
    var d = prompt + " " + title + "\n"

    let row = 0;
    let word = 0
    let bajt = 0;

    var arr = title.split(/\s+/)
    if (title.split(/\s+/).includes('-w')) {
        for (var i = 2; i < arr.length; i++) {

            file.map(file => {
                if (file.name === arr[i] && file.path === path) {
                    let text = file.text.split(/[.,!,?,\s]/)
                    let w = 0;
                    for (var j = 0; j < text.length; j++) {
                        if (text[j] !== "") {
                            w += 1;
                        }
                    }
                    d += w + " " + file.name + "\n";

                    if (arr.length > 3) {
                        word += w;
                    }
                }
            })
        }
        if (word !== 0 ) {
            d += word +  " total"
        }
    } else if (title.split(/\s+/).includes('-m')) {
        for (var i = 2; i < arr.length; i++) {

            file.map(file => {
                if (file.name === arr[i] && file.path === path) {
                    let text = file.text
                    let c = text.length

                    d += c + " " + file.name + "\n";

                    if (arr.length > 3) {
                        bajt += c;
                    }
                }
            })
        }
        if (bajt !== 0) {
            d += bajt + " total"
        }
    } else if (title.split(/\s+/).includes('-l')) {
        for (var i = 2; i < arr.length; i++) {

            file.map(file => {
                if (file.name === arr[i] && file.path === path) {
                    let text = file.text.split(/\n/)
                    let l = text.length;
                    d += l + " " + file.name + "\n";


                    if (arr.length > 3) {
                        row += l;
                    }
                }
            })
        }
        if (row !== 0) {
            d += row + " total"
        }
    }
    else if (title.split(/\s+/).includes('-c')) {
        for (var i = 2; i < arr.length; i++) {

            file.map(file => {
                if (file.name === arr[i] && file.path === path) {
                    let text = file.text
                    let c = text.length

                    d += c + " " + file.name + "\n";

                    if (arr.length > 3) {
                        bajt += c;
                    }
                }
            })
        }
        if (bajt !== 0) {
            d += bajt + " total"
        }
    } else {
        for (var i = 1; i < arr.length; i++) {

            file.map(file => {
                if (file.name === arr[i] && file.path === path) {
                    let text = file.text.split(/\n/)
                    let l = text.length;
                    d += l + " ";

                    text = file.text.split(/[.,!,?,\s]/)
                    let w = 0;
                    for (var j = 0; j < text.length; j++) {
                        if (text[j] !== "") {
                            w += 1;
                        }
                    }
                    d += w + " ";

                    text = file.text
                    let c = text.length

                    d += c + " " + file.name + "\n";

                    if (arr.length > 2) {
                        row += l;
                        word += w;
                        bajt += c;
                    }
                }
            })
        }
        if (row !== 0 && word !== 0 && bajt !== 0) {
            d += row + " " + word + " " + bajt + " total"
        }
    }
    return d
}

export default wc