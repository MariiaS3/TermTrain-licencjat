   //ignorowanie pierwszego zdarzenia i przejscie do drugieg
   var ignoreEvent = function(event) {
    //    event.preventDefault();
    //    event.stopPropagation();
   };

   var scrollToBottom = function() {
    //    window.scrollTo(0, document.body.scrollHeight);
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
        //    scrollToBottom();
       })();
   };