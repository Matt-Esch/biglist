var document = require("global/document");

module.exports = element;

function element(tagName) {
    return document.createElement(tagName);
}
