// pojedyncza instancji ktora posiada prywatne elementy 
var main = (function() {

    //ignorowanie pierwszego zdarzenia i przejscie do drugieg
    var ignoreEvent = function(event) {
        event.preventDefault();
        event.stopPropagation();
    };

    var scrollToBottom = function() {
        window.scrollTo(0, document.body.scrollHeight);
    };

    //obsluga wyjatku niestandardowego,umożliwia śledzenie stosu w przeglądarkach
    var InvalidArgumentException = function(message) {
        this.message = message;
        if ("captureStackTrace" in Error) {
            Error.captureStackTrace(this, InvalidArgumentException);
        } else {
            this.stack = (new Error()).stack;
        }
    };

    // Extends Error
    InvalidArgumentException.prototype = Object.create(Error.prototype);
    InvalidArgumentException.prototype.name = "InvalidArgumentException";
    InvalidArgumentException.prototype.constructor = InvalidArgumentException;

    // var cmds = {
    //     LS: { value: "ls" },
    // };

    // wyrażenie funkcyjne
    var Terminal = function(prompt, cmdLine, output) {
        var root = false;
        var outputTimer = 20;
        var user = "guest";
        var host = "test.com";

        if (!(prompt instanceof Node) || prompt.nodeName.toLowerCase() !== "div") {
            throw new InvalidArgumentException("Invalid value " + prompt + " for argument 'prompt'.");
        }
        if (!(cmdLine instanceof Node) || cmdLine.nodeName.toLowerCase() !== "input") {
            throw new InvalidArgumentException("Invalid value " + cmdLine + " for argument 'cmdLine'.");
        }
        if (!(output instanceof Node) || output.nodeName.toLowerCase() !== "div") {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.");
        }

        (typeof user === "string" && typeof host === "string") && (this.completePrompt = user + "@" + host + ":~" + (root ? "#" : "$"));
        this.prompt = prompt;
        this.cmdLine = cmdLine;
        this.output = output;
        this.typingSimulator = new TypingSimulator(outputTimer, output);
    }

    // rozszerzenie funkcji anonimowej (prototyp jest rodzajem dziedziczenia)
    //wypisanie danych wyjsciowych i wylowanie przekazanych funkcji
    Terminal.prototype.printOutput = function(text, callback) {
        this.typingSimulator.printOutput(text, callback);
    };

    Terminal.prototype.lock = function() {
        var command = this.cmdLine.value;
        this.cmdLine.value = "";
        this.prompt.textContent = "";
        this.output.innerHTML += "<span class=\"prompt-color\">" + this.completePrompt + "</span> " + command + "<br/>";

        this.cmdLine.blur();
    };
    Terminal.prototype.unlock = function() {
        this.prompt.textContent = this.completePrompt;
        scrollToBottom();
    };


    Terminal.prototype.reset = function() {
        this.output.textContent = "";
        this.prompt.textContent = "";
        if (this.typingSimulator) {
            this.printOutput("", function() {
                this.unlock();
            }.bind(this));
        }
    };

    Terminal.prototype.init = function() {
        // var cmd = cmds.LS.flags.split(",");
        // alert(cmd[1]);
        //nasluchiwania zdarzen klawiatury (enter or tab) i wykonanie przupisanych czynnosci 
        this.cmdLine.addEventListener("keydown", function(event) {
            if (event.which === 13 || event.keyCode === 13) {
                this.handleCmd();
                ignoreEvent(event);
            } else if (event.which === 9 || event.keyCode === 9) {
                this.handleFill();
                ignoreEvent(event);
            }
        }.bind(this));
        this.reset();
    };

    //wykonania wpisanej komendy czyli wykonanie dzialan przypisanych do tej komendy lub wyswietlanie komunikatu "invalid ommand"
    Terminal.prototype.handleCmd = function() {
        var cmdComponents = this.cmdLine.value.trim().split(" ");
        this.lock();

        switch (cmdComponents[0]) {
            case cmds.LS.value:
                // this.ls();
                break;
            default:
                this.invalidCommand(cmdComponents);
                break;

        }
    };

    // dopełnienie za pomocą tabulatora
    Terminal.prototype.handleFill = function() {
        var cmdComponents = this.cmdLine.value.trim().split(" ");
        if ((cmdComponents.length <= 1)) {
            this.lock();
            var possibilities = [];
            //dodanie do tabeli wszystkie mozliwe komendy rozpocznajace sie podanym znakiem (lub ciagiem)?
            for (var command in cmds) {
                if (cmds[command].value.startsWith(cmdComponents[0])) {
                    possibilities.push(cmds[command].value);
                }
            }
            if (possibilities.length === 1) {
                this.cmdLine.value = possibilities[0] + " ";
                this.unlock();
            } else if (possibilities.length > 1) {
                this.printOutput(possibilities.join("\n"), function() {
                    this.cmdLine.value = cmdComponents.join(" ");
                    this.unlock();
                }.bind(this));
            } else {
                this.cmdLine.value = cmdComponents.join(" ");
                this.unlock();
            }
        }
    };

    Terminal.prototype.invalidCommand = function(cmdComponents) {
        this.printOutput("<value>: command not found.".replace("<value>", cmdComponents[0]), this.unlock.bind(this));
    };

    var TypingSimulator = function(timer, output) {
        var timer = parseInt(timer);
        if (timer === Number.NaN || timer < 0) {
            throw new InvalidArgumentException("Invalid value " + timer + " for argument 'timer'.");
        }
        if (!(output instanceof Node)) {
            throw new InvalidArgumentException("Invalid value " + output + " for argument 'output'.")
        }
        this.timer = timer;
        this.output = output;
    };

    //drukowanie danych wyjsciowych(wynik wykonanej komendy)
    TypingSimulator.prototype.printOutput = function(text, callback) {
        var i = 0;
        var output = this.output;
        var timer = this.timer;
        (function typer() {
            if (i < text.length) { //output
                var char = text.charAt(i);
                var isNewLine = char === "\n";
                output.innerHTML += isNewLine ? "<br/>" : char;
                i++;
                setTimeout(typer, isNewLine ? timer * 2 : timer);

            } else if (callback) {
                output.innerHTML += "<br/>";
                callback();
            }
            scrollToBottom();
        })();
    };

    return {
        listener: function() {
            new Terminal(
                document.getElementById("prompt"),
                document.getElementById("cmdline"),
                document.getElementById("output")
            ).init();
        }
    };
})();
window.onload = main.listener;