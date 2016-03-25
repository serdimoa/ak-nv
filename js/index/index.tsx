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
import Mixin = __React.Mixin;

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

var toggleClass = function (el, className:string, del:boolean):void {
    if (del === true) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    } else {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += " " + className;
        }
    }
};

export class AutoContinent extends React.Component<{}, Data.State> {
    constructor(props:{}) {
        super(props);
        this.state = {
            DataHeader: "Самый крупный торговый центр автозапчастей в Нижневартовске",
            condition: false,
            showMenu: false,
            DataInfo: [
                {
                    Size: 2,
                    Title: "Vianor",
                    Img: "http://placehold.it/1275x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Шиномонтажная мастерская",
                        Phone: "8 (3466) 67-24-51",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "vk.com/vianor86"
                    }
                },
                {
                    Size: 1,
                    Title: "Запчастер",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Магазин автозапчастей для иномарок",
                        Phone: "8 (3466) 309–508",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "zr86.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Тикамис",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Сеть сервисмаркетов",
                        Phone: "8–800–200–26–67",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "tikamis.ru"
                    }
                },
                {
                    Size: 2,
                    Title: "Специализированный магазин аккумуляторов",
                    Img: "http://placehold.it/1275x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "",
                        Phone: "8(3466) 69–42–94",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "akb-86.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Автостекольная станция №1",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "торгово-сервисный центр",
                        Phone: "8 (3466) 407–405",
                        Time: "Ежедневно 09:00–19:00",
                        Url: "avtosteklo-nv.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Exist.ru",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "интернет-магазин автозапчастей",
                        Phone: "8 (3466) 68–66–22",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "exist.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "KARCHER",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Официальный дилер KARCHER",
                        Phone: "8 (3466) 51–21–51",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "intcentr86.ru/"
                    }
                },
                {
                    Size: 1,
                    Title: "Китай-город",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Магазин автозапчастей для китайских автомобилей",
                        Phone: "8 (3466) 40–66–44",
                        Time: "Ежедневно 09:00–20:00",
                        Url: "китай-город.рф"
                    }
                },
                {
                    Size: 1,
                    Title: "Корея Авто",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Автомагазин",
                        Phone: "8 (3466) 48–06–86",
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
                        Phone: "8 (3466) 219–219",
                        Time: "Ежедневно 09:00–20:00",
                    }
                },
                {
                    Size: 1,
                    Title: "Vianor",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Шиномонтажная мастерская",
                        Phone: "8 (3466) 67-24-51",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "vk.com/vianor86"
                    }
                },
                {
                    Size: 1,
                    Title: "ТИКАМИС",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Сеть сервисмаркетов",
                        Phone: "8–800–200–26–67",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "tikamis.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Запчастер",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Магазин автозапчастей для иномарок",
                        Phone: "8 (3466) 309–508",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "vk.com/zr86ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Специализированный магазин аккумуляторов",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "ИП Сорокина А.В.",
                        Phone: "8 (3466) 69–42–94",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "akb-86.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Автостекольная станция №1",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "торгово-сервисный центр",
                        Phone: "8 (3466) 407–405",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "avtosteklo-nv.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Exist.ru",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "интернет-магазин автозапчастей",
                        Phone: "8 (3466) 68–66–22",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "exist.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Автомикс",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "магазин автоаксессуаров",
                        Phone: "8 (3466) 219–219",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "vk.com/amixnv"
                    }
                },
                {
                    Size: 1,
                    Title: "KARCHER",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Официальный дилер",
                        Phone: "8 (3466) 51–21–51",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "intcentr86.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Континент",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Автотехцентр",
                        Phone: "8 (3466) 408–086",
                        Time: "Ежедневно 09:00-21:00",
                    }
                },
                {
                    Size: 1,
                    Title: "Вилон",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "многопрофильная компания",
                        Phone: "8 (3466) 53–23–97",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "remont.vividnv.ru"
                    }
                },
                {
                    Size: 1,
                    Title: "Китай-город",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "Магазин автозапчастей для китайских автомобилей",
                        Phone: "8 (3466) 40–66–44",
                        Time: "Ежедневно 09:00-21:00",
                        Url: "китай-город.рф"
                    }
                },
                {
                    Size: 1,
                    Title: "Корея-Авто",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "автомагазин",
                        Phone: "8 (3466) 48–06–86",
                        Time: "Ежедневно 09:00-21:00",
                    }
                },
                {
                    Size: 1,
                    Title: "Горбунов Аудио",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "установочный центр",
                        Phone: "8 (3466) 52–22–22",
                        Time: "Ежедневно 09:00-19:00",
                    }
                },
                {
                    Size: 1,
                    Title: "Vianor",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "шинный центр",
                        Phone: "8 (3466) 61–41–59",
                        Time: "Ежедневно 09:00-21:00",
                    }
                },
                {
                    Size: 1,
                    Title: "Ледел Сургут",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "торговая компания",
                        Phone: "8 (3466) 67–10–10",
                        Time: "Ежедневно 09:00-18:00",
                        Url: "ледел.рф"
                    }
                },
                {
                    Size: 1,
                    Title: "Центр оригинальных запчастей для европейских и американских автомобилей",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Phone: "8 (3466) 40–80–20",
                        Time: "Ежедневно 09:00-20:00",
                    }
                },
                {
                    Size: 1,
                    Title: "Авторемни",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "автомагазин",
                        Phone: "8 (3466) 67–12–12",
                        Time: "Ежедневно 09:00-20:00",
                    }
                },
                {
                    Size: 1,
                    Title: "Магазин оригинальных автозапчастей для японских автомобилей",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "ИП Левашов К.А.",
                        Phone: "8 (3466) 22–36–36",
                        Time: "Ежедневно 09:00-20:00",
                    }
                },
                {
                    Size: 1,
                    Title: "АВТОСВЕЧА",
                    Img: "http://placehold.it/616x480",
                    Info: {
                        Img: "http://placehold.it/1280x500",
                        Type: "автомагазин",
                        Phone: "8 (3466) 219–219",
                        Time: "Ежедневно 09:00-20:00",
                    }
                }
            ]
        }
        ;
    }

    render():JSX.Element {
        return (
            <div>
                <Navigation condition={this.state.condition} showMenu={this.state.showMenu}/>
                <Header DataHeader={this.state.DataHeader}/>
                <Content DataInfo={this.state.DataInfo }/>
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

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.state = {showMenu: this.props.showMenu, condition: this.props.condition};
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
                            <span>{this.props.DataHeader}</span>
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

    componentWillMount() {
        this.state = {DataInfo: this.props.DataInfo, show: false};
    }

    static handleClick() {
        ReactDOM
            .render(<CardInfo open={true} cardClass={this}/>,
                document.getElementById("info"));
    };

    render():JSX.Element {
        var card_generator = this.state.DataInfo.map(function (data, i) {

            var size:string = "";
            var img:string = "url(" + data.Img + ")";
            var title:string = data.Title;
            switch (data.Size) {
                case 1:
                    size = "column small-12 medium-4 large-4 ";
                    break;
                case 2:
                    size = "column small-12 medium-8 large-8 ";
                    break;
            }
            return (
                <div key={i} onClick={Content.handleClick.bind(data)} className={ size }>
                    <article className="card" style={{backgroundImage:img}}>
                        <h3>
                            <span>{title}</span>
                            <p>Читать подробнее</p>
                        </h3>
                        <div className="cover"></div>
                    </article>
                </div>
            );
        });
        return (
            <div>
                <section id="content" className="page-wrapper">
                    <div className="full-width">
                        {card_generator}
                    </div>
                </section>
            </div>
        );

    }
}

export class CardInfo extends React.Component<Data.CardInfoProps, Data.CardInfoState> {
    constructor(props:Data.CardInfoProps) {
        super(props);
        this.state = {open: false};
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(property) {
        this.setState({open: property});
        if (property.open === true) {
            toggleClass(document.getElementById("content"), "width50", false);
        } else {
            toggleClass(document.getElementById("content"), "width50", true);

        }

    }

    handleClick():void {
        this.setState({open: !this.state.open});
        if (this.state.open === true) {
            toggleClass(document.getElementById("content"), "width50", false);
        } else {
            toggleClass(document.getElementById("content"), "width50", true);

        }
    }

    render():JSX.Element {
        if (this.state.open) {
            return (
                <Motion style={{x: spring(this.state.open ? 0 : 120)}}>
                    {({x}) =>
                    <aside>
                        <div className="info__body fadeInLeftBig"
                             style={{
                        WebkitTransform: `translate3d(${x}%, 0, 0)`,
                        transform: `translate3d(${x}%, 0, 0)`
                        }}>
                            <div className="info-title">
                                <span className="underline">{ this.props.cardClass.Title }</span>
                            </div>
                            <button className="close" onClick={this.handleClick.bind(this)}>
                                <i className=" close-icon">
                                </i>
                            </button>
                            <div className="info-img">
                                <img src={this.props.cardClass.Info.Img } className=""
                                     alt="logo image"/>
                            </div>
                            <div className="info-content">
                                <div className="row contact">
                                    { this.props.cardClass.Info.Phone !== "undefined" ? <Phone
                                        Number={this.props.cardClass.Info.Phone}/> : "" }
                                    { this.props.cardClass.Info.Url !== undefined ? <Url
                                        Text={this.props.cardClass.Info.Url}/> : ""}
                                </div>
                                <div className="row">
                                    { this.props.cardClass.Info.Time !== "undefined" ? <Time
                                        Text={this.props.cardClass.Info.Time}/> : ""}
                                </div>
                            </div>
                        </div>
                    </aside>
                        }
                </Motion>
            );
        } else {
            return (
                <Motion style={{x: spring(this.state.open ? 0 : 120)}}>
                    {({x}) =>
                    <aside>

                    </aside>
                        }
                </Motion>
            );
        }
    }
}

class Phone extends React.Component<Data.PhoneProps, {}> {
    constructor(props:Data.PhoneProps) {
        super(props);
    }

    render():JSX.Element {
        return (
            <div className="small-6 medium-6 large-6 column">
                <a href={"tel:" + this.props.Number.replace(/[^-0-9]/gim,"")} className="phone">
                    <i className="icon-phone"/>
                    <span>{this.props.Number}</span>
                </a>
            </div>
        );
    }
}

class Time extends React.Component<Data.TimeProps, {}> {
    constructor(props:Data.TimeProps) {
        super(props);
    }

    render():JSX.Element {
        return (
            <div className="small-12 medium-12 large-12 column">
                <div className="time">
                    <i className="icon-time"/>
                    <span>{this.props.Text}</span>
                </div>
            </div>
        );
    }
}

class Url extends React.Component<Data.UrlProps, {}> {
    constructor(props:Data.UrlProps) {
        super(props);
    }

    render():JSX.Element {
        return (
            <div className="small-6 medium-6 large-6 column">
                <a target="_blank" href={"http://" + this.props.Text} className="url">
                    <i className="icon-url"/>
                    <span>{this.props.Text}</span>
                </a>
            </div>
        );
    }
}
export class Card extends React.Component<Data.CardProps, Data.CardState> {
    constructor(props:Data.CardProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {open: false};
    }

    handleClick(e:Data.ContentInterface):any {
        this.setState({open: true, cardClass: e});
    }

    render():JSX.Element {
        return (
            <div>
                <div onClick={ this.handleClick.bind(null, this.props.Data) } className={ this.props.Size }>
                    <article className="card" style={{backgroundImage:this.props.Img}}>
                        <h3>
                            <span>{this.props.Title}</span>
                            <p>Читать подробнее</p>
                        </h3>
                        <div className="cover"></div>
                    </article>
                </div>

            </div>

        );
    }
}
ReactDOM
    .render(React
        .createElement(AutoContinent),
        document.getElementById("body"));

ReactDOM
    .render(<CardInfo open={false}/>,
        document.getElementById("info"));
