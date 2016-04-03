///<reference path="data.d.ts"/>
import {ContentInterface} from "data";

/**
 * Created by dmitr on 09.03.2016.
 */

export module DataToContent {
    export class ContentData {

        public static Block(data: ContentInterface) {
            return data;
        }
    }
}

export var contents =  <ContentInterface>[
    {
        Size: 1,
        Title: "Vianor",
        Img: "http://placehold.it/616x480",
        Info: {
            Img: "http://placehold.it/1280x500",
            Text: ["Смена резины R14", "Ремонт порезов"],
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
            Text: "Text",
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
            Text: "Text",
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
            Text: "Text",
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
            Text: "Text",
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
            Text: "Text",
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
            Text: "Text"
        }
    }];

export var contenttopage = DataToContent.ContentData.Block(contents);
