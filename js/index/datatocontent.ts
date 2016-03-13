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
            Phone: "+7(3466) 67-24-51",
            Time: "Ежедневно 09:00-21:00",
            Url: "https://vk.com/vianor86"
        }
    },
    {
        Size: 2,
        Title: "title2",
        Img: "http://placehold.it/1275x480",
        Info: {
            Img: "http://placehold.it/1280x500",
            Text: "Text"
        }
    },
    {
        Size: 2,
        Title: "ТИКАМИС",
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
        Title: "title3",
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
        Title: "Тикамис",
        Img: "http://placehold.it/616x480",
        Info: {
            Img: "http://placehold.it/1280x500",
            Text: "Text"
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
