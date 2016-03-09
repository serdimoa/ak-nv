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

export var contents = [
    {
        Size: 1,
        Title: "title1",
        Img: "http://placehold.it/616x480"
    },
    {
        Size: 2,
        Title: "title2",
        Img: "http://placehold.it/1275x480"
    },
    {
        Size: 2,
        Title: "title4",
        Img: "http://placehold.it/1275x480"
    },
    {
        Size: 1,
        Title: "title3",
        Img: "http://placehold.it/616x480"
    },
    {
        Size: 1,
        Title: "Тикамис",
        Img: "http://placehold.it/616x480"
    },
    {
        Size: 1,
        Title: "title5",
        Img: "http://placehold.it/616x480"
    },
    {
        Size: 1,
        Title: "title5",
        Img: "http://placehold.it/616x480"
    }
];

export var contenttopage = DataToContent.ContentData.Block(contents);
