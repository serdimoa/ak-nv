/// <reference path="../../typings/browser/ambient/react/react.d.ts" />
/// <reference path="../../typings/browser/ambient/react-dom/react-dom.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

var Menu = React.createClass({
   displayName: "Menu",
   render: function () {
       return (
           <div></div>
       );
   }
});

var Aside = React.createClass({
    displayName: "Aside",
    render: function () {
        return(
            <div className="aside">aside </div>
        );
    }
});

ReactDOM.render(
    <Aside />,
    document.getElementById("sidebar")
);
