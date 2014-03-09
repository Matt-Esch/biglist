# biglist

Efficient rendering for large lists

## Example

```js
var BigList = require('biglist');
var items = [];

for (var i = 0; i < 30000; i++) {
    items.push(i);
}

var list = new BigList(items);
document.body.appendChild(list.root);
```

## Installation

`npm install biglist`

## Contributors

 - Matt Esch

## MIT Licenced
