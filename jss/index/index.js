/// <reference path="../../typings/browser.d.ts" />
///<reference path="data.d.ts"/>
///<reference path="datatocontent.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "react", "react-dom", "react-motion", "webfontloader", "jquery"], factory);
    }
})(function (require, exports) {
    var React = require("react");
    var ReactDOM = require("react-dom");
    var react_motion_1 = require("react-motion");
    var WebFont = require("webfontloader");
    var jQuery = require("jquery");
    var ScrollArea = require("react-scrollbar");
    WebFont.load({
        typekit: {
            id: ["hnu0zvv"]
        }
    });
    var constants;
    (function (constants) {
        constants.LOGO = "image/logomenu.svg";
    })(constants || (constants = {}));
    var FixHeight = function () {
        jQuery("#info").find("> div").height("100%");
    };
    function stateOverflow() {
        var overflowBody = document.getElementById("app").style.overflow;
        if (overflowBody === "auto" || overflowBody === "") {
            document.getElementById("app").style.overflow = "hidden";
        }
        else {
            document.getElementById("app").style.overflow = "auto";
        }
    }
    var toggleClass = function (el, className, del) {
        if (del === true) {
            if (el.classList) {
                el.classList.remove(className);
            }
            else {
                el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            }
        }
        else {
            if (el.classList) {
                el.classList.add(className);
            }
            else {
                el.className += " " + className;
            }
        }
    };
    var AutoContinent = (function (_super) {
        __extends(AutoContinent, _super);
        function AutoContinent(props) {
            _super.call(this, props);
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
                            Time: "Ежедневно 09:00–20:00"
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
                            Time: "Ежедневно 09:00-21:00"
                        }
                    },
                    {
                        Size: 2,
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
                            Time: "Ежедневно 09:00-21:00"
                        }
                    },
                    {
                        Size: 2,
                        Title: "Горбунов Аудио",
                        Img: "http://placehold.it/616x480",
                        Info: {
                            Img: "http://placehold.it/1280x500",
                            Type: "установочный центр",
                            Phone: "8 (3466) 52–22–22",
                            Time: "Ежедневно 09:00-19:00"
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
                            Time: "Ежедневно 09:00-21:00"
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
                            Time: "Ежедневно 09:00-20:00"
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
                            Time: "Ежедневно 09:00-20:00"
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
                            Time: "Ежедневно 09:00-20:00"
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
                            Time: "Ежедневно 09:00-20:00"
                        }
                    }
                ]
            };
        }
        AutoContinent.prototype.render = function () {
            return (React.createElement("div", null, React.createElement(Navigation, {"condition": this.state.condition, "showMenu": this.state.showMenu}), React.createElement(Header, {"DataHeader": this.state.DataHeader}), React.createElement(Content, {"DataInfo": this.state.DataInfo})));
        };
        return AutoContinent;
    })(React.Component);
    exports.AutoContinent = AutoContinent;
    var NavigationOpen = (function (_super) {
        __extends(NavigationOpen, _super);
        function NavigationOpen(props) {
            _super.call(this, props);
        }
        NavigationOpen.prototype.render = function () {
            return (React.createElement("div", {"id": "navigation-open", "className": this.props.active ? "is-active z-index-10" : "is-inactive"}, React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "small-4  medium-4 large-4 float-center"}, React.createElement("img", {"src": constants.LOGO, "className": "", "alt": "logo image"}))), React.createElement("div", {"className": "row"}, React.createElement("div", {"className": "menu-centered"}, React.createElement("ul", {"className": "menu vertical"}, React.createElement("li", null, React.createElement("a", {"href": "#"}, "Главная")), React.createElement("li", null, React.createElement("a", {"href": "#"}, "Арендаторам")), React.createElement("li", null, React.createElement("a", {"href": "#"}, "Контакты")))))));
        };
        return NavigationOpen;
    })(React.Component);
    exports.NavigationOpen = NavigationOpen;
    var Navigation = (function (_super) {
        __extends(Navigation, _super);
        function Navigation() {
            _super.call(this);
            this.handleClick = this.handleClick.bind(this);
        }
        Navigation.prototype.componentWillMount = function () {
            this.state = { showMenu: this.props.showMenu, condition: this.props.condition };
        };
        Navigation.prototype.handleClick = function () {
            this.setState({
                condition: !this.state.condition,
                showMenu: !this.state.showMenu
            });
            stateOverflow();
        };
        Navigation.prototype.render = function () {
            return (React.createElement("nav", {"id": "navigation"}, React.createElement(NavigationOpen, {"active": this.state.showMenu}), React.createElement("div", {"className": "row "}, React.createElement("div", {"className": "small-8 medium-5 large-5  columns "}, React.createElement("img", {"src": constants.LOGO, "className": "img-responsive", "alt": "logo image"})), React.createElement("div", {"className": "small-2 medium-offset-5 medium-2 large-offset-5 large-2 float-right"}, React.createElement("div", {"className": "Circle z-index-11", "onClick": this.handleClick}, React.createElement("span", {"className": this.state.condition ? "menu-button is-active" : "menu-button", "id": "menuButton"}, React.createElement("span", {"className": "burger-icon"})))))));
        };
        return Navigation;
    })(React.Component);
    exports.Navigation = Navigation;
    var Header = (function (_super) {
        __extends(Header, _super);
        function Header() {
            _super.call(this);
        }
        Header.prototype.render = function () {
            return (React.createElement("header", {"id": "header"}, React.createElement("div", {"className": "row center-vertical"}, React.createElement("div", {"className": "container-medium float-center"}, React.createElement("h1", {"className": "section-title"}, React.createElement("span", null, this.props.DataHeader))))));
        };
        return Header;
    })(React.Component);
    exports.Header = Header;
    var Content = (function (_super) {
        __extends(Content, _super);
        function Content() {
            _super.call(this);
        }
        Content.prototype.componentWillMount = function () {
            this.state = { DataInfo: this.props.DataInfo, show: false };
        };
        Content.handleClick = function () {
            ReactDOM
                .render(React.createElement(CardInfo, {"open": true, "ScrollToTop": true, "cardClass": this}), document.getElementById("info"));
            CardInfo.scrollTops();
            FixHeight();
        };
        ;
        Content.prototype.render = function () {
            var card_generator = this.state.DataInfo.map(function (data, i) {
                var size = "";
                var img = "url(" + data.Img + ")";
                var title = data.Title;
                switch (data.Size) {
                    case 1:
                        size = "column small-12 medium-4 large-4 ";
                        break;
                    case 2:
                        size = "column small-12 medium-8 large-8 ";
                        break;
                }
                return (React.createElement("div", {"key": i, "onClick": Content.handleClick.bind(data), "className": size}, React.createElement("article", {"className": "card", "style": { backgroundImage: img }}, React.createElement("h3", null, React.createElement("span", null, title), React.createElement("p", null, "Читать подробнее")), React.createElement("div", {"className": "cover"}))));
            });
            return (React.createElement("div", null, React.createElement("section", {"id": "content", "className": "page-wrapper"}, React.createElement("div", {"className": "full-width"}, card_generator))));
        };
        return Content;
    })(React.Component);
    exports.Content = Content;
    var CardInfo = (function (_super) {
        __extends(CardInfo, _super);
        function CardInfo(props) {
            _super.call(this, props);
            this.state = { open: false };
            this.handleClick = this.handleClick.bind(this);
            this.handleTop = this.handleTop.bind(this);
            CardInfo.scrollTops = CardInfo.scrollTops.bind(this);
        }
        CardInfo.scrollTops = function () {
            //console.log(this);
            this.handleClick();
        };
        CardInfo.prototype.handleTop = function () {
            this.context.scrollArea.scrollTop();
        };
        CardInfo.prototype.componentWillReceiveProps = function (property) {
            this.setState({ open: property });
            FixHeight();
            if (property.open === true) {
                toggleClass(document.getElementById("content"), "width50", false);
            }
            else {
                toggleClass(document.getElementById("content"), "width50", true);
                this.context.scrollArea.scrollTop();
            }
        };
        CardInfo.prototype.handleClick = function () {
            this.setState({ open: !this.state.open });
            if (this.state.open === true) {
                toggleClass(document.getElementById("content"), "width50", false);
            }
            else {
                toggleClass(document.getElementById("content"), "width50", true);
            }
        };
        CardInfo.prototype.handleScrolls = function (ScrollData) {
        };
        CardInfo.prototype.render = function () {
            var _this = this;
            if (this.state.open) {
                return (React.createElement(react_motion_1.Motion, {"style": { x: react_motion_1.spring(this.state.open ? 0 : 120) }}, function (_a) {
                    var x = _a.x;
                    return React.createElement(ScrollArea, {"speed": 0.8, "className": "aside", "contentClassName": "aside", "horizontal": false, "smoothScrolling": true, "onScroll": _this.handleScrolls}, React.createElement("div", {"className": "info__body fadeInLeftBig", "style": {
                        WebkitTransform: "translate3d(" + x + "%, 0, 0)",
                        transform: "translate3d(" + x + "%, 0, 0)"
                    }}, React.createElement("div", {"className": "info-title"}, React.createElement("span", {"className": "underline"}, _this.props.cardClass.Title)), React.createElement("button", {"className": "close", "onClick": _this.handleClick.bind(_this)}, React.createElement("i", {"className": " close-icon"})), React.createElement("div", {"className": "info-img"}, React.createElement("img", {"src": _this.props.cardClass.Info.Img, "className": "", "alt": "logo image"})), React.createElement("div", {"className": "info-content"}, React.createElement("div", {"className": "row contact"}, _this.props.cardClass.Info.Phone !== "undefined" ? React.createElement(Phone, {"Number": _this.props.cardClass.Info.Phone}) : "", _this.props.cardClass.Info.Url !== undefined ? React.createElement(Url, {"Text": _this.props.cardClass.Info.Url}) : ""), React.createElement("div", {"className": "row"}, React.createElement("p", {"className": "about"}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" + ' ' + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" + ' ' + "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." + ' ' + "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu" + ' ' + "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in" + ' ' + "culpa qui officia deserunt mollit anim id est laborum"), _this.props.cardClass.Info.Time !== "undefined" ?
                        React.createElement(Time, {"Text": _this.props.cardClass.Info.Time}) : "", React.createElement("p", {"className": "about"}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" + ' ' + "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" + ' ' + "nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." + ' ' + "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu" + ' ' + "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in" + ' ' + "culpa qui officia deserunt mollit anim id est laborum")))));
                }));
            }
            else {
                return (React.createElement(react_motion_1.Motion, {"style": { x: react_motion_1.spring(this.state.open ? 0 : 120) }}, function (_a) {
                    var x = _a.x;
                    return React.createElement(ScrollArea, {"speed": 0.8, "className": "aside", "contentClassName": "aside", "horizontal": false, "smoothScrolling": true, "onScroll": _this.handleScrolls});
                }));
            }
        };
        return CardInfo;
    })(React.Component);
    exports.CardInfo = CardInfo;
    var Phone = (function (_super) {
        __extends(Phone, _super);
        function Phone(props) {
            _super.call(this, props);
        }
        Phone.prototype.render = function () {
            return (React.createElement("div", {"className": "small-6 medium-6 large-6 column"}, React.createElement("a", {"href": "tel:" + this.props.Number.replace(/[^-0-9]/gim, ""), "className": "phone"}, React.createElement("i", {"className": "icon-phone"}), React.createElement("span", null, this.props.Number))));
        };
        return Phone;
    })(React.Component);
    var Time = (function (_super) {
        __extends(Time, _super);
        function Time(props) {
            _super.call(this, props);
        }
        Time.prototype.render = function () {
            return (React.createElement("div", {"className": "small-12 medium-12 large-12 column"}, React.createElement("div", {"className": "time"}, React.createElement("i", {"className": "icon-time"}), React.createElement("span", null, this.props.Text))));
        };
        return Time;
    })(React.Component);
    var Url = (function (_super) {
        __extends(Url, _super);
        function Url(props) {
            _super.call(this, props);
        }
        Url.prototype.render = function () {
            return (React.createElement("div", {"className": "small-6 medium-6 large-6 column"}, React.createElement("a", {"target": "_blank", "href": "http://" + this.props.Text, "className": "url"}, React.createElement("i", {"className": "icon-url"}), React.createElement("span", null, this.props.Text))));
        };
        return Url;
    })(React.Component);
    var Card = (function (_super) {
        __extends(Card, _super);
        function Card(props) {
            _super.call(this, props);
            this.handleClick = this.handleClick.bind(this);
            this.state = { open: false };
        }
        Card.prototype.handleClick = function (e) {
            this.setState({ open: true, cardClass: e });
            FixHeight();
        };
        Card.prototype.render = function () {
            return (React.createElement("div", null, React.createElement("div", {"onClick": this.handleClick.bind(null, this.props.Data), "className": this.props.Size}, React.createElement("article", {"className": "card", "style": { backgroundImage: this.props.Img }}, React.createElement("h3", null, React.createElement("span", null, this.props.Title), React.createElement("p", null, "Читать подробнее")), React.createElement("div", {"className": "cover"})))));
        };
        return Card;
    })(React.Component);
    exports.Card = Card;
    ReactDOM
        .render(React
        .createElement(AutoContinent), document.getElementById("body"));
    ReactDOM
        .render(React.createElement(CardInfo, {"open": false}), document.getElementById("info"));
});
//# sourceMappingURL=index.js.map