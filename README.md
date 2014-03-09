# biglist

<!--
    [![build status][1]][2]
    [![NPM version][3]][4]
    [![Coverage Status][5]][6]
    [![gemnasium Dependency Status][7]][8]
    [![Davis Dependency status][9]][10]
-->

<!-- [![browser support][11]][12] -->

Efficient rendering for large lists

## Example

```js
var BigList = require('biglist');

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

  [1]: https://secure.travis-ci.org/Matt Esch/biglist.png
  [2]: https://travis-ci.org/Matt Esch/biglist
  [3]: https://badge.fury.io/js/biglist.png
  [4]: https://badge.fury.io/js/biglist
  [5]: https://coveralls.io/repos/Matt Esch/biglist/badge.png
  [6]: https://coveralls.io/r/Matt Esch/biglist
  [7]: https://gemnasium.com/Matt Esch/biglist.png
  [8]: https://gemnasium.com/Matt Esch/biglist
  [9]: https://david-dm.org/Matt Esch/biglist.png
  [10]: https://david-dm.org/Matt Esch/biglist
  [11]: https://ci.testling.com/Matt Esch/biglist.png
  [12]: https://ci.testling.com/Matt Esch/biglist
