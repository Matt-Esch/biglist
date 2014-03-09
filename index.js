var extend = require('xtend')

var element = require('./lib/element');
var listener = require('./lib/listener');
var listItem = require('./lib/list-item');
var isArray = require('./lib/is-array');

var floor = Math.floor;
var min = Math.min;
var max = Math.max;

var defaults = {
    ordered: false,
    listHeight: '10em',
    itemHeight: '1em',
    maxItems: 20,
    forceScroll: false,
    itemTemplate: listItem
};

module.exports = BigList;

function BigList(items, opts) {
    if (!this instanceof BigList) {
        return new BigList(items, opts);
    }

    if (!isArray(items)) {
        throw new TypeError('Items should be an array');
    }

    opts = extend(defaults, opts);

    var bigList = this;
    var itemHeight = opts.itemHeight;
    var heightValue = parseInt(itemHeight, 10);
    var heightMeasure = itemHeight.substring(itemHeight.length - 2);
    var liWidgets = [];
    var ListItem = opts.itemTemplate;

    var root = this.root = opts.ordered ? element('ol') : element('ul');
    var topSpacer = element('div');
    var bottomSpacer = element('div');

    root.style.height = opts.listHeight;
    root.style.overflowY = opts.forceScroll ? 'scroll' : 'auto';
    root.appendChild(topSpacer);
    root.appendChild(bottomSpacer);
    listener.add(root, 'scroll', render);

    bigList.render = render;
    bigList.scrollTo = scrollTo;
    bigList.destroy = destroy;
    render();

    function render() {
        var scrollPercentage = root.scrollTop / root.scrollHeight;

        if (isNaN(scrollPercentage)) scrollPercentage = 0;

        var aboveCount = floor((items.length - 1) * scrollPercentage);
        var itemCount = max(0, min(opts.maxItems, items.length - aboveCount));
        var belowCount = items.length - itemCount - aboveCount;

        for (var i = 0; i < itemCount; i++) {
            var w = liWidgets[i];
            var item = items[i + aboveCount];

            if (!w) {
                w = new ListItem(item, opts);
                liWidgets[i] = w;

            } else {
                w.update(item, opts);
            }

            if(w.root.parentNode !== root) {
                root.insertBefore(w.root, bottomSpacer);
            }
        }

        for (; i < liWidgets.length; i++) {
            w = liWidgets[i];
            if (w) {
                w.remove();
            }
        }

        topSpacer.style.height = (aboveCount * heightValue) + heightMeasure;
        bottomSpacer.style.height = (belowCount * heightValue) + heightMeasure;
    }

    function scrollTo(index) {
        root.scrollTo(root.scrollHeight * index / items.length);
    }

    function destroy () {
        if (root.parentNode) {
            root.parentNode.removeChild(root);
        }

        listener.sub(root, 'scroll', render);

        for (var i = 0; i < liWidgets.length; i++) {
            liWidgets[i].destroy();
        }

        root = bigList.root = null;
        topSpacer = null;
        bottomSpacer = null;
        liWidgets = null;
    }
}
