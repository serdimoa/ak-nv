/// <reference path="../../typings/browser/ambient/react/react.d.ts" />
/// <reference path="../../typings/browser/ambient/react-dom/react-dom.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

var Navigation = React.createClass({
    displayName: "Navigation",
    render: function () {
        return (
            <div className="row ">
                <div className="gr-4">
                    <img src="image/logomenu.svg" className="img-responsive" alt="" />
                </div>
                <div className="gr-12"></div>
            </div>
        );
    }
});

var Content = React.createClass({
    displayName: "Content",
    render: function () {
        return (
            <div className="row">
                <div className="gr-4">ghbasdddddddddddddklaskdaskdsajdahsdasdjasdjasdjaskdjadkasdkasdjasdhashdashd</div>
                <div className="gr-4">dasddasdwqeqweqweweqweqweqwefdsfdf</div>
                <div className="gr-4"></div>
            </div>
        );
    }
});

var Aside = React.createClass({
    displayName: "Aside",
    render: function () {
        return (
            <div className="aside">aside</div>
        );
    }
});

ReactDOM.render(
    <Navigation />,
    document.getElementById("navigation")
);

ReactDOM.render(
    <Content/>,
    document.getElementById("content")
);

ReactDOM.render(
    <Aside />,
    document.getElementById("sidebar")
);
