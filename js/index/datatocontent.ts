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
        Title: "title",
        Img: "img"
    },
    {
        Size: 2,
        Title: "title",
        Img: "img"
    }
];

export var contenttopage = DataToContent.ContentData.Block(contents);
