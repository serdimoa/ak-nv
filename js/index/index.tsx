/// <reference path="../../typings/browser/ambient/react/react.d.ts" />
/// <reference path="../../typings/browser/ambient/react-dom/react-dom.d.ts" />
/// <reference path="../../typings/browser/ambient/webfontloader/webfontloader.d.ts"/>
///<reference path="data.d.ts"/>
///<reference path="datatopage.ts"/>
///<reference path="datatocontent.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as WebFont from "webfontloader";
import {index_data} from "./datatopage";
import * as DataToContent from "./datatocontent";
import * as Data from "data";
import {contenttopage} from "./datatocontent";
import Element = JSX.Element;

WebFont.load({
    google: {
        families: ["Roboto Condensed", "PT Sans Narrow"]
    }
});

namespace constants {
    export var LOGO: string = "image/logomenu.svg";
}

var stateOverflow = function (): void {
    var overflowBody: string = document.getElementById("body").style.overflow;
    if (overflowBody === "auto" || overflowBody === "") {
        document.getElementById("body").style.overflow = "hidden";
    } else {
        document.getElementById("body").style.overflow = "auto";
    }
};

export class NavigationOpen extends React.Component<Data.NavigationOpenProps, Data.NavigationOpenState> {
    constructor(props: Data.NavigationOpenProps) {
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

export class Navigation extends React.Component<Data.NavigationProps, Data.NavigationState> {
    state: Data.NavigationState = {condition: false, showMenu: false};

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

export class Header extends React.Component<Data.HeaderProps, Data.HeaderState> {
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

export class Content extends React.Component<Data.ContentProps, Data.ContentState> {
    constructor() {
        super();
    }

    render() {
        var card_generator = contenttopage.map(function(data, i) {
            var size: string = "";
            var img: string = "url(" + data.Img + ")";
            switch (data.Size) {
                case 1:
                    size = "column small-12 medium-4 large-4 ";
                    break;
                case 2:
                    size = "column small-12 medium-8 large-8 ";
                    break;
            }
            return <Card Size={size} key={i} Title={data.Title} Img={img} />;
        });
        return (
            <div className="full-width">
                    {card_generator}
            </div>
        );

    }
}

export class Card extends React.Component<Data.CardProps, Data.CardState> {
    constructor(props: Data.CardProps) {
        super(props);
    }
    render() {
        return(
            <div className={ this.props.Size }>
                <article className="card" style={{backgroundImage:this.props.Img}}>
                    <h3>
                        <span>{this.props.Title}</span>
                        <p>Читать подробнее</p>
                    </h3>
                    <div className="cover"></div>
                </article>
            </div>
        );
    }
}

ReactDOM
    .render(React

        .createElement(Header)

        ,
        document
            .getElementById(
                "header"
            )
    );
ReactDOM
    .render(React

        .createElement(Navigation)

        ,
        document
            .getElementById(
                "navigation"
            )
    );

ReactDOM
    .render(React

        .createElement(Content)

        ,
        document
            .getElementById(
                "content"
            )
    );

