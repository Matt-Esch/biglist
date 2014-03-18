var element = require('./element');

module.exports = ListItem;

function ListItem(item, index, options) {
    if (!this instanceof ListItem) {
        return new ListItem(item, options);
    }

    this.root = element('li');
    this.update(item, index, options);
}

ListItem.prototype.update = function (item, index, options) {
    var li = this.root;
    li.style.display = '';
    li.style.height = options.itemHeight;

    if ('textContent' in li) {
        li.textContent = item;
    } else {
         li.innerText = item;
    }
}

ListItem.prototype.remove = function () {
    this.root.style.display = 'none';
}

ListItem.prototype.destroy = function () {
    var root = this.root;

    if (root.parentNode) {
        root.parentNode.removeChild(root);
    }

    this.root = null;
}
