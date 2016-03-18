/// <reference path="../../typings/browser.d.ts" />
///<reference path="data.d.ts"/>
///<reference path="datatocontent.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Foundation from "Foundation";
import * as Lodash from "lodash";
import { Motion, spring } from "react-motion";
import * as WebFont from "webfontloader";
import * as DataToContent from "./datatocontent";
import * as Data from "data";
import {contenttopage} from "./datatocontent";
import Element = JSX.Element;
import {ContentInterface} from "./data";

WebFont.load({
    google: {
        families: ["Roboto Condensed", "PT Sans Narrow"]
    }
});

namespace constants {
    export var LOGO:string = "image/logomenu.svg";
}

var stateOverflow = function ():void {
    var overflowBody:string = document.getElementById("body").style.overflow;
    if (overflowBody === "auto" || overflowBody === "") {
        document.getElementById("body").style.overflow = "hidden";
    } else {
        document.getElementById("body").style.overflow = "auto";
    }
};

export class AutoContinent extends React.Component<{}, Data.State> {
    constructor(props:{}) {
        super(props);
        this.state = {
            DataHeader: "Самый крупный торговый центр автозапчастей в Нижневартовске",
            DataInfo: [
                {
                    Size: 1,
                    Title: "Vianor",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Шиномонтажная мастерская",
                        Phone: "+7 (3466) 67-24-51",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "https://vk.com/vianor86"
                    }
                },
                {
                    Size: 2,
                    Title: "Запчастер",
                    Img: "http://placehold.it/1275x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Магазин автозапчастей для иномарок",
                        Phone: "+7 (3466) 309–508",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "http://zr86.ru"
                    }
                },
                {
                    Size: 2,
                    Title: "Тикамис",
                    Img: "http://placehold.it/1275x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Сеть сервисмаркетов",
                        Phone: "8–800–200–26–67",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "http://www.tikamis.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Специализированный магазин аккумуляторов",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "",
                        Phone: "+7 (3466) 69–42–94",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "http://akb-86.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Автостекольная станция №1",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "торгово-сервисный центр",
                        Phone: "+7 (3466) 407–405",
                        Time: "Ежедневно 09:00–19:00",
                        Url: "http://avtosteklo-nv.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Exist.ru",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "интернет-магазин автозапчастей",
                        Phone: "+7 (3466) 68–66–22",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "http://www.exist.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "KARCHER",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Официальный дилер KARCHER",
                        Phone: "+7 (3466) 51–21–51",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "http://intcentr86.ru/"
                    }
                },
                {
                    Size: 1,
                    Title: "Континент",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Автотехцентр",
                        Phone: "+7 (3466) 408–086",
                        Time: "Ежедневно 09:00–21:00"
                    }
                },
                {
                    Size: 1,
                    Title: "Китай-город",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Магазин автозапчастей для китайских автомобилей",
                        Phone: "+7 (3466) 40–66–44",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "http://китай-город.рф"
                    }
                },
                {
                    Size: 1,
                    Title: "Корея Авто",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Автомагазин",
                        Phone: "+7 (3466) 48–06–86",
                        Time: "Ежедневно 09:00–20:00"
                    }
                },
                {
                    Size: 1,
                    Title: "Автомикс",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "магазин автоаксессуаров",
                        Phone: "+7 (3466) 219–219",
                        Time: "Ежедневно 09:00–20:00",
                        Url: ""
                    }
                },
                {
                    Size: 1,
                    Title: "title5",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "",
                        Phone: "",
                        Time: "",
                        Url: ""
                    }
                },
                {
                    Size: 1,
                    Title: "title5",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "",
                        Phone: "",
                        Time: "",
                        Url: ""
                    }
                },
                {
                    Size: 1,
                    Title: "title5",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "",
                        Phone: "",
                        Time: "",
                        Url: ""
                    }
                },
                {
                    Size: 1,
                    Title: "title5",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                    }
                }
            ]
        };
    }

    render():JSX.Element {
        return (
            <div>
                <Navigation />
                <Header />
                <Content />

            </div>
        );
    }

}

export class NavigationOpen extends React.Component<Data.NavigationOpenProps, Data.NavigationOpenState> {
    constructor(props:Data.NavigationOpenProps) {
        super(props);
    }

    render():JSX.Element {
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
                                <a href="#">Главная</a>
                            </li>
                            <li>
                                <a href="#">Арендаторам</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export class Navigation extends React.Component<Data.NavigationProps, Data.NavigationState> {
    state:Data.NavigationState = {condition: false, showMenu: false};

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

    render():JSX.Element {
        return (
            <nav id="navigation">
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
            </nav>
        );
    }
}

export class Header extends React.Component<Data.HeaderProps, Data.HeaderState> {
    constructor() {
        super();
    }

    render():JSX.Element {
        return (
            <header id="header">
                <div className="row center-vertical">
                    <div className="container-medium float-center">
                        <h1 className="section-title">
                            <span>{index_data.showText()}</span>
                        </h1>
                    </div>
                </div>
            </header>
        );
    }
}

export class Content extends React.Component<Data.ContentProps, Data.ContentState> {
    constructor() {
        super();
    }

    render():JSX.Element {
        var card_generator = contenttopage.map(function (data, i) {
            var size:string = "";
            var img:string = "url(" + data.Img + ")";
            switch (data.Size) {
                case 1:
                    size = "column small-12 medium-4 large-4 ";
                    break;
                case 2:
                    size = "column small-12 medium-8 large-8 ";
                    break;
            }
            return <Card Size={size} key={i} Info={data.Info} Data={data} Title={data.Title} Img={img}/>;
        });
        return (
            <section id="content" className="page-wrapper">
                <div className="full-width">
                    {card_generator}
                </div>
            </section>
        );

    }
}
// <span>{this.props.Info.Text}</span> Example

export class CardInfo extends React.Component<Data.CardInfoProps, Data.CardInfoState> {
    constructor(props:Data.CardInfoProps) {
        super(props);
        this.state = {open: false};

        this.handleClick = this.handleClick.bind(this);
        console.log(this);

    }

    handleClick():void {
        this.setState({open: !this.state.open});
    }

    render():JSX.Element {
        return (
            <Motion style={{x: spring(this.state.open ? 0 : 120)}}>
                {({x}) =>
                <aside id="info">
                    <div className="info__body fadeInLeftBig"
                         style={{
                        WebkitTransform: `translate3d(${x}%, 0, 0)`,
                        transform: `translate3d(${x}%, 0, 0)`
                        }}>
                        <div className="info-title">
                            <span className="underline">{ this.state.open ? this.props.cardClass.Title : ""}</span>
                        </div>
                        <button className="close" onClick={this.state.open ? this.handleClick.bind(this) : ""}>
                            <i className=" close-icon">
                            </i>
                        </button>
                        <div className="info-img">
                            <img src={this.state.open ?  this.props.cardClass.Info.Img : "" } className=""
                                 alt="logo image"/>
                        </div>
                        <div className="info-content">
                            {this.state.open ?  this.props.cardClass.Size : ""}
                        </div>
                    </div>
                </aside>
                    }
            </Motion>
        );
    }

    CardClick(card:{cardClass: ContentInterface, open: boolean}):void {
        this.handleClick();
    }
}

export class Card extends React.Component<Data.CardProps, Data.CardState> {
    constructor(props:Data.CardProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e:ContentInterface):any {
        // toggleClass(document.getElementById(""), "");
        CardInfo.CardClick.bind({cardClass: e, open: true});
    }

    render():JSX.Element {
        return (
            <div onClick={ this.handleClick.bind(null, this.props.Data) } className={ this.props.Size }>
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

ReactDOM
    .render(React
        .createElement(CardInfo),
        document.getElementById("info"));
