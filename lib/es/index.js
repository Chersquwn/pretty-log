import chalk from 'chalk';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var defaultLogConfig = {
    log: {
        symbol: '',
        color: ''
    },
    success: {
        symbol: '✔',
        color: '#8bc34a'
    },
    info: {
        symbol: 'ℹ',
        color: '#03a9f4'
    },
    warn: {
        symbol: '⚠',
        color: '#ffc107'
    },
    error: {
        symbol: '✖',
        color: '#ff5722'
    },
    debug: {
        symbol: 'ℹ',
        color: '#34dada'
    },
    trace: {
        symbol: '⁇',
        color: '#03a9f4'
    }
};

function filterKeyFromObject(obj, name) {
    return Object.keys(obj).reduce(function (res, key) {
        res[key] = obj[key][name];
        return res;
    }, {});
}

var Log = /** @class */ (function () {
    function Log(options) {
        if (options === void 0) { options = {
            symbol: false,
            enableBackgroundColor: false,
            config: defaultLogConfig
        }; }
        this.enableSymbol = false;
        this.enableBackgroundColor = false;
        this.enableSymbol = options.symbol;
        this.enableBackgroundColor = options.enableBackgroundColor;
        this.symbols = filterKeyFromObject(options.config, 'symbol');
        this.colors = filterKeyFromObject(options.config, 'color');
    }
    Log.prototype.useSymbol = function () {
        this.enableSymbol = true;
    };
    Log.prototype.useBackgroundColor = function () {
        this.enableBackgroundColor = true;
    };
    Log.prototype.setSymbols = function (symbols) {
        this.symbols = __assign(__assign({}, this.symbols), symbols);
    };
    Log.prototype.setColors = function (colors) {
        this.colors = __assign(__assign({}, this.colors), colors);
    };
    Log.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.createLogMessage.apply(this, __spreadArrays(['log'], args)));
    };
    Log.prototype.success = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.createLogMessage.apply(this, __spreadArrays(['success'], args)));
    };
    Log.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.createLogMessage.apply(this, __spreadArrays(['info'], args)));
    };
    Log.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.createLogMessage.apply(this, __spreadArrays(['warn'], args)));
    };
    Log.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.createLogMessage.apply(this, __spreadArrays(['error'], args)));
    };
    Log.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.createLogMessage.apply(this, __spreadArrays(['debug'], args)));
    };
    Log.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(this.createLogMessage.apply(this, __spreadArrays(['trace'], args)));
    };
    Log.prototype.createLogMessage = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var msgArr = [];
        if (this.enableSymbol) {
            msgArr.push(chalk.hex(this.colors[type])(this.symbols[type]));
        }
        if (this.enableBackgroundColor) {
            msgArr.push(chalk.bgHex(this.colors[type])(chalk.whiteBright(type)));
        }
        else {
            msgArr.push(chalk.hex(this.colors[type])(type));
        }
        msgArr.push.apply(msgArr, args);
        return msgArr.join(' ');
    };
    return Log;
}());

var index = new Log();

export default index;
