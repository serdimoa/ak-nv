'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/// <reference path="../../typings/browser/ambient/react/react.d.ts" />
/// <reference path="../../typings/browser/ambient/react-dom/react-dom.d.ts" />
(function (factory) {
    if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
        var v = factory(require, exports);if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'react', 'react-dom'], factory);
    }
})(function (require, exports) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var CommentBox = React.createClass({
        displayName: 'CommentBox',

        render: function render() {
            return React.createElement("div", { "className": "commentBox" }, "Hello, world! I am a CommentBox.");
        }
    });
    ReactDOM.render(React.createElement(CommentBox, null), document.getElementById('content'));
});
//# sourceMappingURL=index.js.map

//# sourceMappingURL=index-compiled.js.map