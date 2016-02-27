/// <reference path="../../typings/browser/ambient/react/react.d.ts" />
/// <reference path="../../typings/browser/ambient/react-dom/react-dom.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

var CommentBox = React.createClass({
    displayName: "Comentbox",
    render: function () {
        return (
            <div className="commentBox">
                <p>Hello>Hello, world! I am a CommentBox323.</p>
            </div>
        );
    }
});

var Aside = React.createClass({
    displayName: "Aside",
    render: function () {
        return(
            <div className="aside">aside <CommentBox/></div>
        );
    }
});

ReactDOM.render(
    <Aside />,
    document.getElementById("sidebar")
);

ReactDOM.render(
    <CommentBox />,
    document.getElementById("content")
);
