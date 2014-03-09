var toString = Object.prototype.toString;

module.exports = isArray;

function isArray(obj) {
    return toString.apply(obj) === '[object Array]';
}
