///<reference path="data.d.ts"/>
import {ContentInterface} from "data";

/**
 * Created by dmitr on 09.03.2016.
 */


export module DataToContent {
    export class ContentData {

        public static Block(data:ContentInterface) {

            console.log(data);
            return data;
            //return this.size;
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

//new DataToContent.ContentData(2,"title","img");


