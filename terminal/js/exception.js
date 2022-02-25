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