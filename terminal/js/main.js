// pojedyncza instancji ktora posiada prywatne elementy 
var main = (function() {

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