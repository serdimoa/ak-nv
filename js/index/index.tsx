/// <reference path="../../typings/browser/ambient/react/react.d.ts" />
/// <reference path="../../typings/browser/ambient/react-dom/react-dom.d.ts" />
/// <reference path="../../typings/browser/ambient/webfontloader/webfontloader.d.ts"/>
///<reference path="datatopage.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as WebFont from "webfontloader";
import {index_data} from "./datatopage";

WebFont.load({
    google: {
        families: ["Roboto Condensed", "Arimo"]
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
    cardClass?: string;
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
            <div id="navigation-open" className={this.props.active ? "is-active z-index-10" : "is-inactive" }>
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
    state: NavigationState = {condition: false, showMenu: false};

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
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
                    <div className="small-8 medium-5 large-5  columns ">
                        <img src={constants.LOGO} className="img-responsive" alt="logo image"/>
                    </div>
                    <div className="small-2 medium-offset-5 medium-2 large-offset-5 large-2 float-right">
                        <div className="Circle z-index-11" onClick={ this.handleClick }>
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

export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row center-vertical">
                <div className="container-medium float-center">
                    <h1>
                        {index_data.showText()}
                    </h1>
                </div>
            </div>
        );
    }
}

export class Content extends React.Component<ContentProps, ContentState> {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="card">
                <div className="card-content"></div>
            </div>
        );
    }
}
var Conten1t = React.createClass({
    displayName: "Content1",
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
    React.createElement(Header),
    document.getElementById("header")
);
ReactDOM.render(
    React.createElement(Navigation),
    document.getElementById("navigation")
);

ReactDOM.render(
    <Content/>,
    document.getElementById("content")
);

