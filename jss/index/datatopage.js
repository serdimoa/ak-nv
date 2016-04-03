(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    /**
     * Created by serdimoa on 03.03.16.
     */
    var DataToPage;
    (function (DataToPage) {
        var HeaderData = (function () {
            function HeaderData(header) {
                this.HeaderText = header;
            }
            HeaderData.prototype.showText = function () {
                return this.HeaderText;
            };
            return HeaderData;
        })();
        DataToPage.HeaderData = HeaderData;
    })(DataToPage = exports.DataToPage || (exports.DataToPage = {}));
    exports.index_data = new DataToPage.HeaderData("Самый крупный торговый центр автозапчастей в Нижневартовске");
});
//# sourceMappingURL=datatopage.js.map