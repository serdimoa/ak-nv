///<reference path="data.ts"/>
import {HeaderClass} from "./data";
/**
 * Created by serdimoa on 03.03.16.
 */

export module DataToPage {
    export class HeaderData extends HeaderClass {
        constructor(message: string) {
            super(message);
        }
        showText() {
            return this.h1;
        }
    }
}

export var index_data = new DataToPage.HeaderData("Самый крупный торговый центр автозапчастей в нижневартовске");
