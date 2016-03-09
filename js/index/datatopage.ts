///<reference path="data.d.ts"/>
import {HeaderInterface} from "./data.d";
/**
 * Created by serdimoa on 03.03.16.
 */

export module DataToPage {
    export class HeaderData implements HeaderInterface {
        HeaderText: string;
        constructor(header: string) {
            this.HeaderText = header;
        }
        showText(): string {
            return this.HeaderText;
        }
    }
}

export var index_data = new DataToPage.HeaderData("Самый крупный торговый центр автозапчастей в Нижневартовске");
