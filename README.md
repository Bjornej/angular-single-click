### Angular-single-click

Simple angular directive used to prevent double clicks.


What this directive do is to invoke the specified function on click, like ng-click, but it inspects the returned value to verify if it's a promise.

If the returned value is a promise it disables further clicks until the promise execution ends.

This is useful when a click triggers an ajax call and you want to prevent double requests which are fairly common. All it needs is to remember to return the promise from the invoked function.
