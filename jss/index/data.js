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
    var HeaderClass = (function () {
        function HeaderClass(message) {
            this.h1 = message;
        }
        return HeaderClass;
    })();
    exports.HeaderClass = HeaderClass;
});
//# sourceMappingURL=data.js.map