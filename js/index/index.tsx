/// <reference path="../../typings/browser/ambient/react/react.d.ts" />
/// <reference path="../../typings/browser/ambient/react-dom/react-dom.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

var logo: string = "image/logomenu.svg";

var NavigationOpen = React.createClass({
    displayName: "NavigationOpen",
    getInitialState: function () {
        return {
            show: false
        };
    },
    render: function () {
        return (
            <div id="navigation-open">
                <div className="row">
                    <div className="small-4  medium-4 large-4 float-center">
                        <img src={logo} className="" alt="logo image"/>
                    </div>
                </div>
                <div className="row">
                    <div className="menu-centered">
                        <ul className="menu vertical">
                            <li><a href="#">One</a></li>
                            <li><a href="#">Two</a></li>
                            <li><a href="#">Three</a></li>
                            <li><a href="#">Four</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

var Navigation = React.createClass({
    displayName: "Navigation",
    getInitialState: function () {
        return {
            condition: false
        };
    },
    handleClick: function () {
        this.setState({condition: !this.state.condition});
    },
    render: function () {
        return (
            <div>
                <NavigationOpen />
                <div className="row ">
                    <div className="small-8 medium-4 large-3  columns ">
                        <img src={logo} className="img-responsive" alt="logo image"/>
                    </div>
                    <div className="small-2 medium-offset-6 medium-2 large-offset-6 large-2 float-right">
                        <a href="#" className={this.state.condition ? "menu-button is-active" : "menu-button" }
                           onClick={ this.handleClick } id="menuButton">
                            <span className="burger-icon">
                            </span>
                        </a>
                    </div>
                </div>
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
