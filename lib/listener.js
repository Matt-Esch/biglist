module.exports = {
    add: addEvent,
    sub: removeEvent
};

function addEvent(node, name, func) {
    if (node.addEventListener) {
        node.addEventListener(name, func);
    } else if (node.attachEvent) {
        node.attachEvent('on' + name, func);
    } else {
        node['on' + name] = func;
    }
}

function removeEvent(node, name, func) {
    if (node.removeEventListener) {
        node.removeEventListener(name, func);
    } else if (node.detachEvent) {
        node.detachEvent('on' + name, func);
    } else {
        node['on' + name] = null;
    }
}
