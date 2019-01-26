# NOTES

Arrow functions bind the `this` keyword to their immediate lexical context, whereas es5 functions do not.

### ES5 Syntax

In the following example, `this` is referring back to the context of `getJokes`, a function connected to an event handler:

``` javascript
function getJokes(e) {
  const number = document.getElementById('number').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
```
The status is defined by the results of the HTTP request and is accessible in the `onload` logic via `this`.

### ES6 Syntax

If we were to use an arrow function for the `onload` logic:

``` javascript
function getJokes(e) {
  const number = document.getElementById('number').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = () => {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
```
`this` is now restricted to the lexical context of the onload callback function. Therefore, `this.status` would return `undefined`, since `this` has no access to the results of the HTTP request.