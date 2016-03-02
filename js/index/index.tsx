/// <reference path="../../typings/browser/ambient/react/react.d.ts" />
/// <reference path="../../typings/browser/ambient/react-dom/react-dom.d.ts" />
/// <reference path="../../typings/browser/ambient/webfontloader/webfontloader.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as WebFont from "webfontloader";

WebFont.load({
    google: {
        families: ["Roboto Condensed"]
    }
});
namespace constants {
    export var LOGO: string = "image/logomenu.svg";
}

export interface NavigationOpenProps {
    active?: boolean;
}

export interface NavigationOpenState {
}

export interface NavigationProps {
}

export interface NavigationState {
    condition?: boolean;
    showMenu?: boolean;
}

export interface HeaderProps {
}

export interface HeaderState {
}

export interface ContentProps {
}

export interface ContentState {
}

var stateOverflow = function (): void {
    var overflowBody: string = document.getElementById("body").style.overflow;
    if (overflowBody === "auto" || overflowBody === "") {
        document.getElementById("body").style.overflow = "hidden";
    } else {
        document.getElementById("body").style.overflow = "auto";
    }
};

export class NavigationOpen extends React.Component<NavigationOpenProps, NavigationOpenState> {
    constructor(props: NavigationOpenProps) {
        super(props);
    }

    render() {
        return (
            <div id="navigation-open" className={this.props.active ? "is-active" : "is-inactive" }>
                <div className="row">
                    <div className="small-4  medium-4 large-4 float-center">
                        <img src={ constants.LOGO } className="" alt="logo image"/>
                    </div>
                </div>
                <div className="row">
                    <div className="menu-centered">
                        <ul className="menu vertical">
                            <li>
                                <a href="#">One</a>
                            </li>
                            <li>
                                <a href="#">Two</a>
                            </li>
                            <li>
                                <a href="#">Three</a>
                            </li>
                            <li>
                                <a href="#">Four</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export class Navigation extends React.Component<NavigationProps, NavigationState> {
    state: NavigationState = {condition: false, showMenu: false };
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick () {
        this.setState({
            condition: !this.state.condition,
            showMenu: !this.state.showMenu
        });
        stateOverflow();
    }
    render() {
        return (
            <div>
                <NavigationOpen active={this.state.showMenu}/>
                <div className="row ">
                    <div className="small-8 medium-4 large-3  columns ">
                        <img src={constants.LOGO} className="img-responsive" alt="logo image"/>
                    </div>
                    <div className="small-2 medium-offset-6 medium-2 large-offset-6 large-2 float-right">
                        <div className="Circle" onClick={ this.handleClick }>
                            <span className={this.state.condition ? "menu-button is-active" : "menu-button" }
                                  id="menuButton">
                                <span className="burger-icon">
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

var Content = React.createClass({
    displayName: "Content",
    render: function () {
        return (
            <div className="row">
                <div className="gr-4">ывфывфы</div>
                <div className="gr-4">dasddasdwqeqweqweweqweqweqwefdsfdf</div>
                <div className="gr-4"></div>
            </div>
        );
    }
});

ReactDOM.render(
    React.createElement(Navigation),
    document.getElementById("navigation")
);

ReactDOM.render(
    <Content/>,
    document.getElementById("content")
);

