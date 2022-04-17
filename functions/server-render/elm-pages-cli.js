(function (scope) {
    "use strict";
    function F(arity, fun, wrapper) {
        wrapper.a = arity;
        wrapper.f = fun;
        return wrapper;
    }
    function F2(fun) {
        var curried = function (a) {
            return function (b) {
                return fun(a, b);
            };
        };
        curried.a2 = fun;
        return curried;
    }
    function F3(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return fun(a, b, c);
                };
            };
        };
        curried.a3 =
            fun;
        return curried;
    }
    function F4(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return fun(a, b, c, d);
                    };
                };
            };
        };
        curried.a4 = fun;
        return curried;
    }
    function F5(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return fun(a, b, c, d, e);
                        };
                    };
                };
            };
        };
        curried.a5 = fun;
        return curried;
    }
    function F6(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return fun(a, b, c, d, e, f);
                            };
                        };
                    };
                };
            };
        };
        curried.a6 = fun;
        return curried;
    }
    function F7(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) { return fun(a, b, c, d, e, f, g); };
                            };
                        };
                    };
                };
            };
        };
        curried.
            a7 = fun;
        return curried;
    }
    function F8(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return fun(a, b, c, d, e, f, g, h);
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        curried.a8 = fun;
        return curried;
    }
    function F9(fun) {
        var curried = function (a) {
            return function (b) {
                return function (c) {
                    return function (d) {
                        return function (e) {
                            return function (f) {
                                return function (g) {
                                    return function (h) {
                                        return function (i) {
                                            return fun(a, b, c, d, e, f, g, h, i);
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        curried
            .a9 = fun;
        return curried;
    }
    function A2(fun, a, b) {
        return fun.a2 ? fun.a2(a, b) : fun(a)(b);
    }
    function A3(fun, a, b, c) {
        return fun.a3 ? fun.a3(a, b, c) : fun(a)(b)(c);
    }
    function A4(fun, a, b, c, d) {
        return fun.a4 ? fun.a4(a, b, c, d) : fun(a)(b)(c)(d);
    }
    function A5(fun, a, b, c, d, e) {
        return fun.a5 ? fun.a5(a, b, c, d, e)
            : fun(a)(b)(c)(d)(e);
    }
    function A6(fun, a, b, c, d, e, f) {
        return fun.a6 ? fun.a6(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
    }
    function A7(fun, a, b, c, d, e, f, g) {
        return fun.a7 ? fun.a7(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
    }
    function A8(fun, a, b, c, d, e, f, g, h) {
        return fun.a8 ? fun.a8(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
    }
    function A9(fun, a, b, c, d, e, f, g, h, i) {
        return fun.a9 ? fun.a9(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
    }
    var _JsArray_empty = [];
    function _JsArray_singleton(value) {
        return [value];
    }
    function _JsArray_length(array) {
        return array.length;
    }
    var _JsArray_initialize_fn = function (size, offset, func) {
        var result = new Array(size);
        for (var i = 0; i < size; i++) {
            result[i] = func(offset + i);
        }
        return result;
    }, _JsArray_initialize = F3(_JsArray_initialize_fn);
    var _JsArray_initializeFromList_fn = function (max, ls) {
        var result = new Array(max);
        for (var i = 0; i < max && ls.b; i++) {
            result[i] = ls.a;
            ls = ls.b;
        }
        result.length = i;
        return _Utils_Tuple2(result, ls);
    }, _JsArray_initializeFromList = F2(_JsArray_initializeFromList_fn);
    var _JsArray_unsafeGet_fn = function (index, array) {
        return array[index];
    }, _JsArray_unsafeGet = F2(_JsArray_unsafeGet_fn);
    var _JsArray_unsafeSet_fn = function (index, value, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[index] = value;
        return result;
    }, _JsArray_unsafeSet = F3(_JsArray_unsafeSet_fn);
    var _JsArray_push_fn = function (value, array) {
        var length = array.length;
        var result = new Array(length + 1);
        for (var i = 0; i < length; i++) {
            result[i] = array[i];
        }
        result[length] = value;
        return result;
    }, _JsArray_push = F2(_JsArray_push_fn);
    var _JsArray_foldl_fn = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldl_fn_unwrapped = function (func, acc, array) {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldl = F3(_JsArray_foldl_fn);
    var _JsArray_foldr_fn = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = A2(func, array[i], acc);
        }
        return acc;
    }, _JsArray_foldr_fn_unwrapped = function (func, acc, array) {
        for (var i = array.length - 1; i >= 0; i--) {
            acc = func(array[i], acc);
        }
        return acc;
    }, _JsArray_foldr = F3(_JsArray_foldr_fn);
    var _JsArray_map_fn = function (func, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(array[i]);
        }
        return result;
    }, _JsArray_map = F2(_JsArray_map_fn);
    var _JsArray_indexedMap_fn = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = A2(func, offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap_fn_unwrapped = function (func, offset, array) {
        var length = array.length;
        var result = new Array(length);
        for (var i = 0; i < length; i++) {
            result[i] = func(offset + i, array[i]);
        }
        return result;
    }, _JsArray_indexedMap = F3(_JsArray_indexedMap_fn);
    var _JsArray_slice_fn = function (from, to, array) {
        return array.slice(from, to);
    }, _JsArray_slice = F3(_JsArray_slice_fn);
    var _JsArray_appendN_fn = function (n, dest, source) {
        var destLen = dest.length;
        var itemsToCopy = n - destLen;
        if (itemsToCopy > source.length) {
            itemsToCopy = source.length;
        }
        var size = destLen + itemsToCopy;
        var result = new Array(size);
        for (var i = 0; i < destLen; i++) {
            result[i] = dest[i];
        }
        for (var i = 0; i < itemsToCopy; i++) {
            result[i + destLen] = source[i];
        }
        return result;
    }, _JsArray_appendN = F3(_JsArray_appendN_fn);
    var _Debug_log_fn = function (tag, value) {
        return value;
    }, _Debug_log = F2(_Debug_log_fn);
    var _Debug_log_UNUSED_fn = function (tag, value) {
        console.log(tag + ": " + _Debug_toString(value));
        return value;
    }, _Debug_log_UNUSED = F2(_Debug_log_UNUSED_fn);
    function _Debug_todo(moduleName, region) {
        return function (message) {
            _Debug_crash(8, moduleName, region, message);
        };
    }
    function _Debug_todoCase(moduleName, region, value) {
        return function (message) {
            _Debug_crash(9, moduleName, region, value, message);
        };
    }
    function _Debug_toString(value) {
        return "<internals>";
    }
    function _Debug_toString_UNUSED(value) {
        return _Debug_toAnsiString(false, value);
    }
    function _Debug_toAnsiString(ansi, value) {
        if (typeof value === "function") {
            return _Debug_internalColor(ansi, "<function>");
        }
        if (typeof value === "boolean") {
            return _Debug_ctorColor(ansi, value ? "True" : "False");
        }
        if (typeof value === "number") {
            return _Debug_numberColor(ansi, value + "");
        }
        if (value instanceof String) {
            return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
        }
        if (typeof value === "string") {
            return _Debug_stringColor(ansi, "\"" + _Debug_addSlashes(value, false) + "\"");
        }
        if (typeof value === "object" && "$" in value) {
            var tag = value.$;
            if (typeof tag === "number") {
                return _Debug_internalColor(ansi, "<internals>");
            }
            if (tag[0] === "#") {
                var output = [];
                for (var k in value) {
                    if (k === "$")
                        continue;
                    output.push(_Debug_toAnsiString(ansi, value[k]));
                }
                return "(" + output.join(",") + ")";
            }
            if (tag === "Set_elm_builtin") {
                return _Debug_ctorColor(ansi, "Set")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
            }
            if (tag === "RBNode_elm_builtin" || tag === "RBEmpty_elm_builtin") {
                return _Debug_ctorColor(ansi, "Dict")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
            }
            if (tag === "Array_elm_builtin") {
                return _Debug_ctorColor(ansi, "Array")
                    + _Debug_fadeColor(ansi, ".fromList") + " "
                    + _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
            }
            if (tag === "::" || tag === "[]") {
                var output = "[";
                value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b);
                for (; value.b; value = value.b) {
                    output += "," + _Debug_toAnsiString(ansi, value.a);
                }
                return output + "]";
            }
            var output = "";
            for (var i in value) {
                if (i === "$")
                    continue;
                var str = _Debug_toAnsiString(ansi, value[i]);
                var c0 = str[0];
                var parenless = c0 === "{" || c0 === "(" || c0 === "[" || c0 === "<" || c0 === "\"" || str.indexOf(" ") < 0;
                output += " " + (parenless ? str : "(" + str + ")");
            }
            return _Debug_ctorColor(ansi, tag) + output;
        }
        if (typeof DataView === "function" && value instanceof DataView) {
            return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
        }
        if (typeof File !== "undefined" && value instanceof File) {
            return _Debug_internalColor(ansi, "<" + value.name + ">");
        }
        if (typeof value === "object") {
            var output = [];
            for (var key in value) {
                var field = key[0] === "_" ? key.slice(1) : key;
                output.push(_Debug_fadeColor(ansi, field) + " = " + _Debug_toAnsiString(ansi, value[key]));
            }
            if (output.length === 0) {
                return "{}";
            }
            return "{ " + output.join(", ") + " }";
        }
        return _Debug_internalColor(ansi, "<internals>");
    }
    function _Debug_addSlashes(str, isChar) {
        var s = str
            .replace(/\\/g, "\\\\")
            .replace(/\n/g, "\\n")
            .replace(/\t/g, "\\t")
            .replace(/\r/g, "\\r")
            .replace(/\v/g, "\\v")
            .replace(/\0/g, "\\0");
        if (isChar) {
            return s.replace(/\'/g, "\\'");
        }
        else {
            return s.replace(/\"/g, "\\\"");
        }
    }
    function _Debug_ctorColor(ansi, string) {
        return ansi ? "\u001B[96m" + string + "\u001B[0m" : string;
    }
    function _Debug_numberColor(ansi, string) {
        return ansi ? "\u001B[95m" + string + "\u001B[0m" : string;
    }
    function _Debug_stringColor(ansi, string) {
        return ansi ? "\u001B[93m" + string + "\u001B[0m" : string;
    }
    function _Debug_charColor(ansi, string) {
        return ansi ? "\u001B[92m" + string + "\u001B[0m" : string;
    }
    function _Debug_fadeColor(ansi, string) {
        return ansi ? "\u001B[37m" + string + "\u001B[0m" : string;
    }
    function _Debug_internalColor(ansi, string) {
        return ansi ? "\u001B[36m" + string + "\u001B[0m" : string;
    }
    function _Debug_toHexDigit(n) {
        return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
    }
    function _Debug_crash(identifier) {
        throw new Error("https://github.com/elm/core/blob/1.0.0/hints/" + identifier + ".md");
    }
    function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
        switch (identifier) {
            case 0:
                throw new Error("What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById(\"elm-node\")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.");
            case 1:
                throw new Error("Browser.application programs cannot handle URLs like this:\n\n    " + document.location.href + "\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.");
            case 2:
                var jsonErrorString = fact1;
                throw new Error("Problem with the flags given to your Elm program on initialization.\n\n" + jsonErrorString);
            case 3:
                var portName = fact1;
                throw new Error("There can only be one port named `" + portName + "`, but your program has multiple.");
            case 4:
                var portName = fact1;
                var problem = fact2;
                throw new Error("Trying to send an unexpected type of value through port `" + portName + "`:\n" + problem);
            case 5:
                throw new Error("Trying to use `(==)` on functions.\nThere is no way to know if functions are \"the same\" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.");
            case 6:
                var moduleName = fact1;
                throw new Error("Your page is loading multiple Elm scripts with a module named " + moduleName + ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!");
            case 8:
                var moduleName = fact1;
                var region = fact2;
                var message = fact3;
                throw new Error("TODO in module `" + moduleName + "` " + _Debug_regionToString(region) + "\n\n" + message);
            case 9:
                var moduleName = fact1;
                var region = fact2;
                var value = fact3;
                var message = fact4;
                throw new Error("TODO in module `" + moduleName + "` from the `case` expression "
                    + _Debug_regionToString(region) + "\n\nIt received the following value:\n\n    "
                    + _Debug_toString(value).replace("\n", "\n    ")
                    + "\n\nBut the branch that handles it says:\n\n    " + message.replace("\n", "\n    "));
            case 10:
                throw new Error("Bug in https://github.com/elm/virtual-dom/issues");
            case 11:
                throw new Error("Cannot perform mod 0. Division by zero error.");
        }
    }
    function _Debug_regionToString(region) {
        if (region.hO.eT === region.gT.eT) {
            return "on line " + region.hO.eT;
        }
        return "on lines " + region.hO.eT + " through " + region.gT.eT;
    }
    function _Utils_eq(x, y) {
        for (var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack); isEqual && (pair = stack.pop()); isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)) { }
        return isEqual;
    }
    function _Utils_eqHelp(x, y, depth, stack) {
        if (x === y) {
            return true;
        }
        if (typeof x !== "object" || x === null || y === null) {
            typeof x === "function" && _Debug_crash(5);
            return false;
        }
        if (depth > 100) {
            stack.push(_Utils_Tuple2(x, y));
            return true;
        }
        if (x.$ < 0) {
            x = $elm$core$Dict$toList(x);
            y = $elm$core$Dict$toList(y);
        }
        for (var key in x) {
            if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack)) {
                return false;
            }
        }
        return true;
    }
    var _Utils_equal = F2(_Utils_eq);
    var _Utils_notEqual_fn = function (a, b) { return !_Utils_eq(a, b); }, _Utils_notEqual = F2(_Utils_notEqual_fn);
    function _Utils_cmp(x, y, ord) {
        if (typeof x !== "object") {
            return x === y ? 0 : x < y ? -1 : 1;
        }
        if (typeof x.$ === "undefined") {
            return (ord = _Utils_cmp(x.a, y.a))
                ? ord
                : (ord = _Utils_cmp(x.b, y.b))
                    ? ord
                    : _Utils_cmp(x.c, y.c);
        }
        for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) { }
        return ord || (x.b ? 1 : y.b ? -1 : 0);
    }
    var _Utils_lt_fn = function (a, b) { return _Utils_cmp(a, b) < 0; }, _Utils_lt = F2(_Utils_lt_fn);
    var _Utils_le_fn = function (a, b) { return _Utils_cmp(a, b) < 1; }, _Utils_le = F2(_Utils_le_fn);
    var _Utils_gt_fn = function (a, b) { return _Utils_cmp(a, b) > 0; }, _Utils_gt = F2(_Utils_gt_fn);
    var _Utils_ge_fn = function (a, b) { return _Utils_cmp(a, b) >= 0; }, _Utils_ge = F2(_Utils_ge_fn);
    var _Utils_compare_fn = function (x, y) {
        var n = _Utils_cmp(x, y);
        return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
    }, _Utils_compare = F2(_Utils_compare_fn);
    var _Utils_Tuple0 = 0;
    var _Utils_Tuple0_UNUSED = { $: "#0" };
    function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
    function _Utils_Tuple2_UNUSED(a, b) { return { $: "#2", a: a, b: b }; }
    function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
    function _Utils_Tuple3_UNUSED(a, b, c) { return { $: "#3", a: a, b: b, c: c }; }
    function _Utils_chr(c) { return c; }
    function _Utils_chr_UNUSED(c) { return new String(c); }
    function _Utils_update(oldRecord, updatedFields) {
        var newRecord = {};
        for (var key in oldRecord) {
            newRecord[key] = oldRecord[key];
        }
        for (var key in updatedFields) {
            newRecord[key] = updatedFields[key];
        }
        return newRecord;
    }
    var _Utils_append = F2(_Utils_ap);
    function _Utils_ap(xs, ys) {
        if (typeof xs === "string") {
            return xs + ys;
        }
        if (!xs.b) {
            return ys;
        }
        var root = _List_Cons(xs.a, ys);
        xs = xs.b;
        for (var curr = root; xs.b; xs = xs.b) {
            curr = curr.b = _List_Cons(xs.a, ys);
        }
        return root;
    }
    var _List_Nil = { $: 0, a: null, b: null };
    var _List_Nil_UNUSED = { $: "[]" };
    function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
    function _List_Cons_UNUSED(hd, tl) { return { $: "::", a: hd, b: tl }; }
    var _List_cons = F2(_List_Cons);
    function _List_fromArray(arr) {
        var out = _List_Nil;
        for (var i = arr.length; i--;) {
            out = _List_Cons(arr[i], out);
        }
        return out;
    }
    function _List_toArray(xs) {
        for (var out = []; xs.b; xs = xs.b) {
            out.push(xs.a);
        }
        return out;
    }
    var _List_map2_fn = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
            arr.push(A2(f, xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2_fn_unwrapped = function (f, xs, ys) {
        for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) {
            arr.push(f(xs.a, ys.a));
        }
        return _List_fromArray(arr);
    }, _List_map2 = F3(_List_map2_fn);
    var _List_map3_fn = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A3(f, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3_fn_unwrapped = function (f, xs, ys, zs) {
        for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map3 = F4(_List_map3_fn);
    var _List_map4_fn = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4_fn_unwrapped = function (f, ws, xs, ys, zs) {
        for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map4 = F5(_List_map4_fn);
    var _List_map5_fn = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5_fn_unwrapped = function (f, vs, ws, xs, ys, zs) {
        for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) {
            arr.push(f(vs.a, ws.a, xs.a, ys.a, zs.a));
        }
        return _List_fromArray(arr);
    }, _List_map5 = F6(_List_map5_fn);
    var _List_sortBy_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            return _Utils_cmp(f(a), f(b));
        }));
    }, _List_sortBy = F2(_List_sortBy_fn);
    var _List_sortWith_fn = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = A2(f, a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith_fn_unwrapped = function (f, xs) {
        return _List_fromArray(_List_toArray(xs).sort(function (a, b) {
            var ord = f(a, b);
            return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
        }));
    }, _List_sortWith = F2(_List_sortWith_fn);
    var _Basics_add_fn = function (a, b) { return a + b; }, _Basics_add = F2(_Basics_add_fn);
    var _Basics_sub_fn = function (a, b) { return a - b; }, _Basics_sub = F2(_Basics_sub_fn);
    var _Basics_mul_fn = function (a, b) { return a * b; }, _Basics_mul = F2(_Basics_mul_fn);
    var _Basics_fdiv_fn = function (a, b) { return a / b; }, _Basics_fdiv = F2(_Basics_fdiv_fn);
    var _Basics_idiv_fn = function (a, b) { return (a / b) | 0; }, _Basics_idiv = F2(_Basics_idiv_fn);
    var _Basics_pow_fn = Math.pow, _Basics_pow = F2(_Basics_pow_fn);
    var _Basics_remainderBy_fn = function (b, a) { return a % b; }, _Basics_remainderBy = F2(_Basics_remainderBy_fn);
    var _Basics_modBy_fn = function (modulus, x) {
        var answer = x % modulus;
        return modulus === 0
            ? _Debug_crash(11)
            :
                ((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
                    ? answer + modulus
                    : answer;
    }, _Basics_modBy = F2(_Basics_modBy_fn);
    var _Basics_pi = Math.PI;
    var _Basics_e = Math.E;
    var _Basics_cos = Math.cos;
    var _Basics_sin = Math.sin;
    var _Basics_tan = Math.tan;
    var _Basics_acos = Math.acos;
    var _Basics_asin = Math.asin;
    var _Basics_atan = Math.atan;
    var _Basics_atan2_fn = Math.atan2, _Basics_atan2 = F2(_Basics_atan2_fn);
    function _Basics_toFloat(x) { return x; }
    function _Basics_truncate(n) { return n | 0; }
    function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }
    var _Basics_ceiling = Math.ceil;
    var _Basics_floor = Math.floor;
    var _Basics_round = Math.round;
    var _Basics_sqrt = Math.sqrt;
    var _Basics_log = Math.log;
    var _Basics_isNaN = isNaN;
    function _Basics_not(bool) { return !bool; }
    var _Basics_and_fn = function (a, b) { return a && b; }, _Basics_and = F2(_Basics_and_fn);
    var _Basics_or_fn = function (a, b) { return a || b; }, _Basics_or = F2(_Basics_or_fn);
    var _Basics_xor_fn = function (a, b) { return a !== b; }, _Basics_xor = F2(_Basics_xor_fn);
    var _String_cons_fn = function (chr, str) {
        return chr + str;
    }, _String_cons = F2(_String_cons_fn);
    function _String_uncons(string) {
        var word = string.charCodeAt(0);
        return !isNaN(word)
            ? $elm$core$Maybe$Just(55296 <= word && word <= 56319
                ? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
                : _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1)))
            : $elm$core$Maybe$Nothing;
    }
    var _String_append_fn = function (a, b) {
        return a + b;
    }, _String_append = F2(_String_append_fn);
    function _String_length(str) {
        return str.length;
    }
    var _String_map_fn = function (func, string) {
        var len = string.length;
        var array = new Array(len);
        var i = 0;
        while (i < len) {
            var word = string.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                array[i] = func(_Utils_chr(string[i] + string[i + 1]));
                i += 2;
                continue;
            }
            array[i] = func(_Utils_chr(string[i]));
            i++;
        }
        return array.join("");
    }, _String_map = F2(_String_map_fn);
    var _String_filter_fn = function (isGood, str) {
        var arr = [];
        var len = str.length;
        var i = 0;
        while (i < len) {
            var char = str[i];
            var word = str.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += str[i];
                i++;
            }
            if (isGood(_Utils_chr(char))) {
                arr.push(char);
            }
        }
        return arr.join("");
    }, _String_filter = F2(_String_filter_fn);
    function _String_reverse(str) {
        var len = str.length;
        var arr = new Array(len);
        var i = 0;
        while (i < len) {
            var word = str.charCodeAt(i);
            if (55296 <= word && word <= 56319) {
                arr[len - i] = str[i + 1];
                i++;
                arr[len - i] = str[i - 1];
                i++;
            }
            else {
                arr[len - i] = str[i];
                i++;
            }
        }
        return arr.join("");
    }
    var _String_foldl_fn = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldl_fn_unwrapped = function (func, state, string) {
        var len = string.length;
        var i = 0;
        while (i < len) {
            var char = string[i];
            var word = string.charCodeAt(i);
            i++;
            if (55296 <= word && word <= 56319) {
                char += string[i];
                i++;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldl = F3(_String_foldl_fn);
    var _String_foldr_fn = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = A2(func, _Utils_chr(char), state);
        }
        return state;
    }, _String_foldr_fn_unwrapped = function (func, state, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            state = func(_Utils_chr(char), state);
        }
        return state;
    }, _String_foldr = F3(_String_foldr_fn);
    var _String_split_fn = function (sep, str) {
        return str.split(sep);
    }, _String_split = F2(_String_split_fn);
    var _String_join_fn = function (sep, strs) {
        return strs.join(sep);
    }, _String_join = F2(_String_join_fn);
    var _String_slice_fn = function (start, end, str) {
        return str.slice(start, end);
    }, _String_slice = F3(_String_slice_fn);
    function _String_trim(str) {
        return str.trim();
    }
    function _String_trimLeft(str) {
        return str.replace(/^\s+/, "");
    }
    function _String_trimRight(str) {
        return str.replace(/\s+$/, "");
    }
    function _String_words(str) {
        return _List_fromArray(str.trim().split(/\s+/g));
    }
    function _String_lines(str) {
        return _List_fromArray(str.split(/\r\n|\r|\n/g));
    }
    function _String_toUpper(str) {
        return str.toUpperCase();
    }
    function _String_toLower(str) {
        return str.toLowerCase();
    }
    var _String_any_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (isGood(_Utils_chr(char))) {
                return true;
            }
        }
        return false;
    }, _String_any = F2(_String_any_fn);
    var _String_all_fn = function (isGood, string) {
        var i = string.length;
        while (i--) {
            var char = string[i];
            var word = string.charCodeAt(i);
            if (56320 <= word && word <= 57343) {
                i--;
                char = string[i] + char;
            }
            if (!isGood(_Utils_chr(char))) {
                return false;
            }
        }
        return true;
    }, _String_all = F2(_String_all_fn);
    var _String_contains_fn = function (sub, str) {
        return str.indexOf(sub) > -1;
    }, _String_contains = F2(_String_contains_fn);
    var _String_startsWith_fn = function (sub, str) {
        return str.indexOf(sub) === 0;
    }, _String_startsWith = F2(_String_startsWith_fn);
    var _String_endsWith_fn = function (sub, str) {
        return str.length >= sub.length &&
            str.lastIndexOf(sub) === str.length - sub.length;
    }, _String_endsWith = F2(_String_endsWith_fn);
    var _String_indexes_fn = function (sub, str) {
        var subLen = sub.length;
        if (subLen < 1) {
            return _List_Nil;
        }
        var i = 0;
        var is = [];
        while ((i = str.indexOf(sub, i)) > -1) {
            is.push(i);
            i = i + subLen;
        }
        return _List_fromArray(is);
    }, _String_indexes = F2(_String_indexes_fn);
    function _String_fromNumber(number) {
        return number + "";
    }
    function _String_toInt(str) {
        var total = 0;
        var code0 = str.charCodeAt(0);
        var start = code0 == 43 || code0 == 45 ? 1 : 0;
        for (var i = start; i < str.length; ++i) {
            var code = str.charCodeAt(i);
            if (code < 48 || 57 < code) {
                return $elm$core$Maybe$Nothing;
            }
            total = 10 * total + code - 48;
        }
        return i == start
            ? $elm$core$Maybe$Nothing
            : $elm$core$Maybe$Just(code0 == 45 ? -total : total);
    }
    function _String_toFloat(s) {
        if (s.length === 0 || /[\sxbo]/.test(s)) {
            return $elm$core$Maybe$Nothing;
        }
        var n = +s;
        return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
    }
    function _String_fromList(chars) {
        return _List_toArray(chars).join("");
    }
    function _Char_toCode(char) {
        var code = char.charCodeAt(0);
        if (55296 <= code && code <= 56319) {
            return (code - 55296) * 1024 + char.charCodeAt(1) - 56320 + 65536;
        }
        return code;
    }
    function _Char_fromCode(code) {
        return _Utils_chr((code < 0 || 1114111 < code)
            ? "\uFFFD"
            :
                (code <= 65535)
                    ? String.fromCharCode(code)
                    :
                        (code -= 65536,
                            String.fromCharCode(Math.floor(code / 1024) + 55296, code % 1024 + 56320)));
    }
    function _Char_toUpper(char) {
        return _Utils_chr(char.toUpperCase());
    }
    function _Char_toLower(char) {
        return _Utils_chr(char.toLowerCase());
    }
    function _Char_toLocaleUpper(char) {
        return _Utils_chr(char.toLocaleUpperCase());
    }
    function _Char_toLocaleLower(char) {
        return _Utils_chr(char.toLocaleLowerCase());
    }
    function _Json_succeed(msg) {
        return {
            $: 0,
            a: msg
        };
    }
    function _Json_fail(msg) {
        return {
            $: 1,
            a: msg
        };
    }
    function _Json_decodePrim(decoder) {
        return { $: 2, b: decoder };
    }
    var _Json_decodeInt = _Json_decodePrim(function (value) {
        return (typeof value !== "number")
            ? _Json_expecting("an INT", value)
            :
                (-2147483647 < value && value < 2147483647 && (value | 0) === value)
                    ? $elm$core$Result$Ok(value)
                    :
                        (isFinite(value) && !(value % 1))
                            ? $elm$core$Result$Ok(value)
                            : _Json_expecting("an INT", value);
    });
    var _Json_decodeBool = _Json_decodePrim(function (value) {
        return (typeof value === "boolean")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a BOOL", value);
    });
    var _Json_decodeFloat = _Json_decodePrim(function (value) {
        return (typeof value === "number")
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a FLOAT", value);
    });
    var _Json_decodeValue = _Json_decodePrim(function (value) {
        return $elm$core$Result$Ok(_Json_wrap(value));
    });
    var _Json_decodeString = _Json_decodePrim(function (value) {
        return (typeof value === "string")
            ? $elm$core$Result$Ok(value)
            : (value instanceof String)
                ? $elm$core$Result$Ok(value + "")
                : _Json_expecting("a STRING", value);
    });
    function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
    function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }
    function _Json_decodeNull(value) { return { $: 5, c: value }; }
    var _Json_decodeField_fn = function (field, decoder) {
        return {
            $: 6,
            d: field,
            b: decoder
        };
    }, _Json_decodeField = F2(_Json_decodeField_fn);
    var _Json_decodeIndex_fn = function (index, decoder) {
        return {
            $: 7,
            e: index,
            b: decoder
        };
    }, _Json_decodeIndex = F2(_Json_decodeIndex_fn);
    function _Json_decodeKeyValuePairs(decoder) {
        return {
            $: 8,
            b: decoder
        };
    }
    function _Json_mapMany(f, decoders) {
        return {
            $: 9,
            f: f,
            g: decoders
        };
    }
    var _Json_andThen_fn = function (callback, decoder) {
        return {
            $: 10,
            b: decoder,
            h: callback
        };
    }, _Json_andThen = F2(_Json_andThen_fn);
    function _Json_oneOf(decoders) {
        return {
            $: 11,
            g: decoders
        };
    }
    var _Json_map1_fn = function (f, d1) {
        return _Json_mapMany(f, [d1]);
    }, _Json_map1 = F2(_Json_map1_fn);
    var _Json_map2_fn = function (f, d1, d2) {
        return _Json_mapMany(f, [d1, d2]);
    }, _Json_map2 = F3(_Json_map2_fn);
    var _Json_map3_fn = function (f, d1, d2, d3) {
        return _Json_mapMany(f, [d1, d2, d3]);
    }, _Json_map3 = F4(_Json_map3_fn);
    var _Json_map4_fn = function (f, d1, d2, d3, d4) {
        return _Json_mapMany(f, [d1, d2, d3, d4]);
    }, _Json_map4 = F5(_Json_map4_fn);
    var _Json_map5_fn = function (f, d1, d2, d3, d4, d5) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
    }, _Json_map5 = F6(_Json_map5_fn);
    var _Json_map6_fn = function (f, d1, d2, d3, d4, d5, d6) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
    }, _Json_map6 = F7(_Json_map6_fn);
    var _Json_map7_fn = function (f, d1, d2, d3, d4, d5, d6, d7) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
    }, _Json_map7 = F8(_Json_map7_fn);
    var _Json_map8_fn = function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
        return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
    }, _Json_map8 = F9(_Json_map8_fn);
    var _Json_runOnString_fn = function (decoder, string) {
        try {
            var value = JSON.parse(string);
            return _Json_runHelp(decoder, value);
        }
        catch (e) {
            return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("This is not valid JSON! " + e.message, _Json_wrap(string)));
        }
    }, _Json_runOnString = F2(_Json_runOnString_fn);
    var _Json_run_fn = function (decoder, value) {
        return _Json_runHelp(decoder, _Json_unwrap(value));
    }, _Json_run = F2(_Json_run_fn);
    function _Json_runHelp(decoder, value) {
        switch (decoder.$) {
            case 2:
                return decoder.b(value);
            case 5:
                return (value === null)
                    ? $elm$core$Result$Ok(decoder.c)
                    : _Json_expecting("null", value);
            case 3:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("a LIST", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);
            case 4:
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);
            case 6:
                var field = decoder.d;
                if (typeof value !== "object" || value === null || !(field in value)) {
                    return _Json_expecting("an OBJECT with a field named `" + field + "`", value);
                }
                var result = _Json_runHelp(decoder.b, value[field]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(field, result.a));
            case 7:
                var index = decoder.e;
                if (!_Json_isArray(value)) {
                    return _Json_expecting("an ARRAY", value);
                }
                if (index >= value.length) {
                    return _Json_expecting("a LONGER array. Need index " + index + " but only see " + value.length + " entries", value);
                }
                var result = _Json_runHelp(decoder.b, value[index]);
                return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(index, result.a));
            case 8:
                if (typeof value !== "object" || value === null || _Json_isArray(value)) {
                    return _Json_expecting("an OBJECT", value);
                }
                var keyValuePairs = _List_Nil;
                for (var key in value) {
                    if (value.hasOwnProperty(key)) {
                        var result = _Json_runHelp(decoder.b, value[key]);
                        if (!$elm$core$Result$isOk(result)) {
                            return $elm$core$Result$Err($elm$json$Json$Decode$Field_fn(key, result.a));
                        }
                        keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
                    }
                }
                return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));
            case 9:
                var answer = decoder.f;
                var decoders = decoder.g;
                for (var i = 0; i < decoders.length; i++) {
                    var result = _Json_runHelp(decoders[i], value);
                    if (!$elm$core$Result$isOk(result)) {
                        return result;
                    }
                    answer = answer(result.a);
                }
                return $elm$core$Result$Ok(answer);
            case 10:
                var result = _Json_runHelp(decoder.b, value);
                return (!$elm$core$Result$isOk(result))
                    ? result
                    : _Json_runHelp(decoder.h(result.a), value);
            case 11:
                var errors = _List_Nil;
                for (var temp = decoder.g; temp.b; temp = temp.b) {
                    var result = _Json_runHelp(temp.a, value);
                    if ($elm$core$Result$isOk(result)) {
                        return result;
                    }
                    errors = _List_Cons(result.a, errors);
                }
                return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));
            case 1:
                return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn(decoder.a, _Json_wrap(value)));
            case 0:
                return $elm$core$Result$Ok(decoder.a);
        }
    }
    function _Json_runArrayDecoder(decoder, value, toElmValue) {
        var len = value.length;
        var array = new Array(len);
        for (var i = 0; i < len; i++) {
            var result = _Json_runHelp(decoder, value[i]);
            if (!$elm$core$Result$isOk(result)) {
                return $elm$core$Result$Err($elm$json$Json$Decode$Index_fn(i, result.a));
            }
            array[i] = result.a;
        }
        return $elm$core$Result$Ok(toElmValue(array));
    }
    function _Json_isArray(value) {
        return Array.isArray(value) || (typeof FileList !== "undefined" && value instanceof FileList);
    }
    function _Json_toElmArray(array) {
        return $elm$core$Array$initialize_fn(array.length, function (i) { return array[i]; });
    }
    function _Json_expecting(type, value) {
        return $elm$core$Result$Err($elm$json$Json$Decode$Failure_fn("Expecting " + type, _Json_wrap(value)));
    }
    function _Json_equality(x, y) {
        if (x === y) {
            return true;
        }
        if (x.$ !== y.$) {
            return false;
        }
        switch (x.$) {
            case 0:
            case 1:
                return x.a === y.a;
            case 2:
                return x.b === y.b;
            case 5:
                return x.c === y.c;
            case 3:
            case 4:
            case 8:
                return _Json_equality(x.b, y.b);
            case 6:
                return x.d === y.d && _Json_equality(x.b, y.b);
            case 7:
                return x.e === y.e && _Json_equality(x.b, y.b);
            case 9:
                return x.f === y.f && _Json_listEquality(x.g, y.g);
            case 10:
                return x.h === y.h && _Json_equality(x.b, y.b);
            case 11:
                return _Json_listEquality(x.g, y.g);
        }
    }
    function _Json_listEquality(aDecoders, bDecoders) {
        var len = aDecoders.length;
        if (len !== bDecoders.length) {
            return false;
        }
        for (var i = 0; i < len; i++) {
            if (!_Json_equality(aDecoders[i], bDecoders[i])) {
                return false;
            }
        }
        return true;
    }
    var _Json_encode_fn = function (indentLevel, value) {
        return JSON.stringify(_Json_unwrap(value), null, indentLevel) + "";
    }, _Json_encode = F2(_Json_encode_fn);
    function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
    function _Json_unwrap_UNUSED(value) { return value.a; }
    function _Json_wrap(value) { return value; }
    function _Json_unwrap(value) { return value; }
    function _Json_emptyArray() { return []; }
    function _Json_emptyObject() { return {}; }
    var _Json_addField_fn = function (key, value, object) {
        object[key] = _Json_unwrap(value);
        return object;
    }, _Json_addField = F3(_Json_addField_fn);
    function _Json_addEntry(func) {
        return F2(function (entry, array) {
            array.push(_Json_unwrap(func(entry)));
            return array;
        });
    }
    var _Json_encodeNull = _Json_wrap(null);
    function _Scheduler_succeed(value) {
        return {
            $: 0,
            a: value
        };
    }
    function _Scheduler_fail(error) {
        return {
            $: 1,
            a: error
        };
    }
    function _Scheduler_binding(callback) {
        return {
            $: 2,
            b: callback,
            c: null
        };
    }
    var _Scheduler_andThen_fn = function (callback, task) {
        return {
            $: 3,
            b: callback,
            d: task
        };
    }, _Scheduler_andThen = F2(_Scheduler_andThen_fn);
    var _Scheduler_onError_fn = function (callback, task) {
        return {
            $: 4,
            b: callback,
            d: task
        };
    }, _Scheduler_onError = F2(_Scheduler_onError_fn);
    function _Scheduler_receive(callback) {
        return {
            $: 5,
            b: callback
        };
    }
    var _Scheduler_guid = 0;
    function _Scheduler_rawSpawn(task) {
        var proc = {
            $: 0,
            e: _Scheduler_guid++,
            f: task,
            g: null,
            h: []
        };
        _Scheduler_enqueue(proc);
        return proc;
    }
    function _Scheduler_spawn(task) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
        });
    }
    function _Scheduler_rawSend(proc, msg) {
        proc.h.push(msg);
        _Scheduler_enqueue(proc);
    }
    var _Scheduler_send_fn = function (proc, msg) {
        return _Scheduler_binding(function (callback) {
            _Scheduler_rawSend(proc, msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Scheduler_send = F2(_Scheduler_send_fn);
    function _Scheduler_kill(proc) {
        return _Scheduler_binding(function (callback) {
            var task = proc.f;
            if (task.$ === 2 && task.c) {
                task.c();
            }
            proc.f = null;
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }
    var _Scheduler_working = false;
    var _Scheduler_queue = [];
    function _Scheduler_enqueue(proc) {
        _Scheduler_queue.push(proc);
        if (_Scheduler_working) {
            return;
        }
        _Scheduler_working = true;
        while (proc = _Scheduler_queue.shift()) {
            _Scheduler_step(proc);
        }
        _Scheduler_working = false;
    }
    function _Scheduler_step(proc) {
        while (proc.f) {
            var rootTag = proc.f.$;
            if (rootTag === 0 || rootTag === 1) {
                while (proc.g && proc.g.$ !== rootTag) {
                    proc.g = proc.g.i;
                }
                if (!proc.g) {
                    return;
                }
                proc.f = proc.g.b(proc.f.a);
                proc.g = proc.g.i;
            }
            else if (rootTag === 2) {
                proc.f.c = proc.f.b(function (newRoot) {
                    proc.f = newRoot;
                    _Scheduler_enqueue(proc);
                });
                return;
            }
            else if (rootTag === 5) {
                if (proc.h.length === 0) {
                    return;
                }
                proc.f = proc.f.b(proc.h.shift());
            }
            else {
                proc.g = {
                    $: rootTag === 3 ? 0 : 1,
                    b: proc.f.b,
                    i: proc.g
                };
                proc.f = proc.f.d;
            }
        }
    }
    function _Process_sleep(time) {
        return _Scheduler_binding(function (callback) {
            var id = setTimeout(function () {
                callback(_Scheduler_succeed(_Utils_Tuple0));
            }, time);
            return function () { clearTimeout(id); };
        });
    }
    var _Platform_worker_fn = function (impl, flagDecoder, debugMetadata, args) {
        return _Platform_initialize(flagDecoder, args, impl.de, impl.aO, impl.dZ, function () { return function () { }; });
    }, _Platform_worker = F4(_Platform_worker_fn);
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = _Json_run_fn(flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2);
        var managers = {};
        var initPair = init(result.a);
        var model = initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        function sendToApp(msg, viewMetadata) {
            var pair = A2(update, msg, model);
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
        }
        _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        return ports ? { ports: ports } : {};
    }
    var _Platform_preload;
    function _Platform_registerPreload(url) {
        _Platform_preload.add(url);
    }
    var _Platform_effectManagers = {};
    function _Platform_setupEffects(managers, sendToApp) {
        var ports;
        for (var key in _Platform_effectManagers) {
            var manager = _Platform_effectManagers[key];
            if (manager.a) {
                ports = ports || {};
                ports[key] = manager.a(key, sendToApp);
            }
            managers[key] = _Platform_instantiateManager(manager, sendToApp);
        }
        return ports;
    }
    function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
        return {
            b: init,
            c: onEffects,
            d: onSelfMsg,
            e: cmdMap,
            f: subMap
        };
    }
    function _Platform_instantiateManager(info, sendToApp) {
        var router = {
            g: sendToApp,
            h: undefined
        };
        var onEffects = info.c;
        var onSelfMsg = info.d;
        var cmdMap = info.e;
        var subMap = info.f;
        function loop(state) {
            return _Scheduler_andThen_fn(loop, _Scheduler_receive(function (msg) {
                var value = msg.a;
                if (msg.$ === 0) {
                    return A3(onSelfMsg, router, value, state);
                }
                return cmdMap && subMap
                    ? A4(onEffects, router, value.i, value.j, state)
                    : A3(onEffects, router, cmdMap ? value.i : value.j, state);
            }));
        }
        return router.h = _Scheduler_rawSpawn(_Scheduler_andThen_fn(loop, info.b));
    }
    var _Platform_sendToApp_fn = function (router, msg) {
        return _Scheduler_binding(function (callback) {
            router.g(msg);
            callback(_Scheduler_succeed(_Utils_Tuple0));
        });
    }, _Platform_sendToApp = F2(_Platform_sendToApp_fn);
    var _Platform_sendToSelf_fn = function (router, msg) {
        return _Scheduler_send_fn(router.h, {
            $: 0,
            a: msg
        });
    }, _Platform_sendToSelf = F2(_Platform_sendToSelf_fn);
    function _Platform_leaf(home) {
        return function (value) {
            return {
                $: 1,
                k: home,
                l: value
            };
        };
    }
    function _Platform_batch(list) {
        return {
            $: 2,
            m: list
        };
    }
    var _Platform_map_fn = function (tagger, bag) {
        return {
            $: 3,
            n: tagger,
            o: bag
        };
    }, _Platform_map = F2(_Platform_map_fn);
    var _Platform_effectsQueue = [];
    var _Platform_effectsActive = false;
    function _Platform_enqueueEffects(managers, cmdBag, subBag) {
        _Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });
        if (_Platform_effectsActive)
            return;
        _Platform_effectsActive = true;
        for (var fx; fx = _Platform_effectsQueue.shift();) {
            _Platform_dispatchEffects(fx.p, fx.q, fx.r);
        }
        _Platform_effectsActive = false;
    }
    function _Platform_dispatchEffects(managers, cmdBag, subBag) {
        var effectsDict = {};
        _Platform_gatherEffects(true, cmdBag, effectsDict, null);
        _Platform_gatherEffects(false, subBag, effectsDict, null);
        for (var home in managers) {
            _Scheduler_rawSend(managers[home], {
                $: "fx",
                a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
            });
        }
    }
    function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
        switch (bag.$) {
            case 1:
                var home = bag.k;
                var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
                effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
                return;
            case 2:
                for (var list = bag.m; list.b; list = list.b) {
                    _Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
                }
                return;
            case 3:
                _Platform_gatherEffects(isCmd, bag.o, effectsDict, {
                    s: bag.n,
                    t: taggers
                });
                return;
        }
    }
    function _Platform_toEffect(isCmd, home, taggers, value) {
        function applyTaggers(x) {
            for (var temp = taggers; temp; temp = temp.t) {
                x = temp.s(x);
            }
            return x;
        }
        var map = isCmd
            ? _Platform_effectManagers[home].e
            : _Platform_effectManagers[home].f;
        return A2(map, applyTaggers, value);
    }
    function _Platform_insert(isCmd, newEffect, effects) {
        effects = effects || { i: _List_Nil, j: _List_Nil };
        isCmd
            ? (effects.i = _List_Cons(newEffect, effects.i))
            : (effects.j = _List_Cons(newEffect, effects.j));
        return effects;
    }
    function _Platform_checkPortName(name) {
        if (_Platform_effectManagers[name]) {
            _Debug_crash(3, name);
        }
    }
    function _Platform_outgoingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            e: _Platform_outgoingPortMap,
            u: converter,
            a: _Platform_setupOutgoingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_outgoingPortMap_fn = function (tagger, value) { return value; }, _Platform_outgoingPortMap = F2(_Platform_outgoingPortMap_fn);
    function _Platform_setupOutgoingPort(name) {
        var subs = [];
        var converter = _Platform_effectManagers[name].u;
        var init = _Process_sleep(0);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, cmdList, state) {
            for (; cmdList.b; cmdList = cmdList.b) {
                var currentSubs = subs;
                var value = _Json_unwrap(converter(cmdList.a));
                for (var i = 0; i < currentSubs.length; i++) {
                    currentSubs[i](value);
                }
            }
            return init;
        });
        function subscribe(callback) {
            subs.push(callback);
        }
        function unsubscribe(callback) {
            subs = subs.slice();
            var index = subs.indexOf(callback);
            if (index >= 0) {
                subs.splice(index, 1);
            }
        }
        return {
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }
    function _Platform_incomingPort(name, converter) {
        _Platform_checkPortName(name);
        _Platform_effectManagers[name] = {
            f: _Platform_incomingPortMap,
            u: converter,
            a: _Platform_setupIncomingPort
        };
        return _Platform_leaf(name);
    }
    var _Platform_incomingPortMap_fn = function (tagger, finalTagger) {
        return function (value) {
            return tagger(finalTagger(value));
        };
    }, _Platform_incomingPortMap = F2(_Platform_incomingPortMap_fn);
    function _Platform_setupIncomingPort(name, sendToApp) {
        var subs = _List_Nil;
        var converter = _Platform_effectManagers[name].u;
        var init = _Scheduler_succeed(null);
        _Platform_effectManagers[name].b = init;
        _Platform_effectManagers[name].c = F3(function (router, subList, state) {
            subs = subList;
            return init;
        });
        function send(incomingValue) {
            var result = _Json_run_fn(converter, _Json_wrap(incomingValue));
            $elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);
            var value = result.a;
            for (var temp = subs; temp.b; temp = temp.b) {
                sendToApp(temp.a(value));
            }
        }
        return { send: send };
    }
    function _Platform_export(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsProd(scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsProd(obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6)
                    : _Platform_mergeExportsProd(obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    function _Platform_export_UNUSED(exports) {
        scope["Elm"]
            ? _Platform_mergeExportsDebug("Elm", scope["Elm"], exports)
            : scope["Elm"] = exports;
    }
    function _Platform_mergeExportsDebug(moduleName, obj, exports) {
        for (var name in exports) {
            (name in obj)
                ? (name == "init")
                    ? _Debug_crash(6, moduleName)
                    : _Platform_mergeExportsDebug(moduleName + "." + name, obj[name], exports[name])
                : (obj[name] = exports[name]);
        }
    }
    function _Bytes_width(bytes) {
        return bytes.byteLength;
    }
    var _Bytes_getHostEndianness_fn = function (le, be) {
        return _Scheduler_binding(function (callback) {
            callback(_Scheduler_succeed(new Uint8Array(new Uint32Array([1]))[0] === 1 ? le : be));
        });
    }, _Bytes_getHostEndianness = F2(_Bytes_getHostEndianness_fn);
    function _Bytes_encode(encoder) {
        var mutableBytes = new DataView(new ArrayBuffer($elm$bytes$Bytes$Encode$getWidth(encoder)));
        $elm$bytes$Bytes$Encode$write(encoder)(mutableBytes)(0);
        return mutableBytes;
    }
    var _Bytes_write_i8_fn = function (mb, i, n) { mb.setInt8(i, n); return i + 1; }, _Bytes_write_i8 = F3(_Bytes_write_i8_fn);
    var _Bytes_write_i16_fn = function (mb, i, n, isLE) { mb.setInt16(i, n, isLE); return i + 2; }, _Bytes_write_i16 = F4(_Bytes_write_i16_fn);
    var _Bytes_write_i32_fn = function (mb, i, n, isLE) { mb.setInt32(i, n, isLE); return i + 4; }, _Bytes_write_i32 = F4(_Bytes_write_i32_fn);
    var _Bytes_write_u8_fn = function (mb, i, n) { mb.setUint8(i, n); return i + 1; }, _Bytes_write_u8 = F3(_Bytes_write_u8_fn);
    var _Bytes_write_u16_fn = function (mb, i, n, isLE) { mb.setUint16(i, n, isLE); return i + 2; }, _Bytes_write_u16 = F4(_Bytes_write_u16_fn);
    var _Bytes_write_u32_fn = function (mb, i, n, isLE) { mb.setUint32(i, n, isLE); return i + 4; }, _Bytes_write_u32 = F4(_Bytes_write_u32_fn);
    var _Bytes_write_f32_fn = function (mb, i, n, isLE) { mb.setFloat32(i, n, isLE); return i + 4; }, _Bytes_write_f32 = F4(_Bytes_write_f32_fn);
    var _Bytes_write_f64_fn = function (mb, i, n, isLE) { mb.setFloat64(i, n, isLE); return i + 8; }, _Bytes_write_f64 = F4(_Bytes_write_f64_fn);
    var _Bytes_write_bytes_fn = function (mb, offset, bytes) {
        for (var i = 0, len = bytes.byteLength, limit = len - 4; i <= limit; i += 4) {
            mb.setUint32(offset + i, bytes.getUint32(i));
        }
        for (; i < len; i++) {
            mb.setUint8(offset + i, bytes.getUint8(i));
        }
        return offset + len;
    }, _Bytes_write_bytes = F3(_Bytes_write_bytes_fn);
    function _Bytes_getStringWidth(string) {
        for (var width = 0, i = 0; i < string.length; i++) {
            var code = string.charCodeAt(i);
            width +=
                (code < 128) ? 1 :
                    (code < 2048) ? 2 :
                        (code < 55296 || 56319 < code) ? 3 : (i++, 4);
        }
        return width;
    }
    var _Bytes_write_string_fn = function (mb, offset, string) {
        for (var i = 0; i < string.length; i++) {
            var code = string.charCodeAt(i);
            offset +=
                (code < 128)
                    ? (mb.setUint8(offset, code)
                        , 1)
                    :
                        (code < 2048)
                            ? (mb.setUint16(offset, 49280
                                | (code >>> 6 & 31) << 8
                                | code & 63)
                                , 2)
                            :
                                (code < 55296 || 56319 < code)
                                    ? (mb.setUint16(offset, 57472
                                        | (code >>> 12 & 15) << 8
                                        | code >>> 6 & 63)
                                        , mb.setUint8(offset + 2, 128
                                            | code & 63)
                                        , 3)
                                    :
                                        (code = (code - 55296) * 1024 + string.charCodeAt(++i) - 56320 + 65536
                                            , mb.setUint32(offset, 4034953344
                                                | (code >>> 18 & 7) << 24
                                                | (code >>> 12 & 63) << 16
                                                | (code >>> 6 & 63) << 8
                                                | code & 63)
                                            , 4);
        }
        return offset;
    }, _Bytes_write_string = F3(_Bytes_write_string_fn);
    var _Bytes_decode_fn = function (decoder, bytes) {
        try {
            return $elm$core$Maybe$Just(A2(decoder, bytes, 0).b);
        }
        catch (e) {
            return $elm$core$Maybe$Nothing;
        }
    }, _Bytes_decode_fn_unwrapped = function (decoder, bytes) {
        try {
            return $elm$core$Maybe$Just(decoder(bytes, 0).b);
        }
        catch (e) {
            return $elm$core$Maybe$Nothing;
        }
    }, _Bytes_decode = F2(_Bytes_decode_fn);
    var _Bytes_read_i8_fn = function (bytes, offset) { return _Utils_Tuple2(offset + 1, bytes.getInt8(offset)); }, _Bytes_read_i8 = F2(_Bytes_read_i8_fn);
    var _Bytes_read_i16_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 2, bytes.getInt16(offset, isLE)); }, _Bytes_read_i16 = F3(_Bytes_read_i16_fn);
    var _Bytes_read_i32_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getInt32(offset, isLE)); }, _Bytes_read_i32 = F3(_Bytes_read_i32_fn);
    var _Bytes_read_u8_fn = function (bytes, offset) { return _Utils_Tuple2(offset + 1, bytes.getUint8(offset)); }, _Bytes_read_u8 = F2(_Bytes_read_u8_fn);
    var _Bytes_read_u16_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 2, bytes.getUint16(offset, isLE)); }, _Bytes_read_u16 = F3(_Bytes_read_u16_fn);
    var _Bytes_read_u32_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getUint32(offset, isLE)); }, _Bytes_read_u32 = F3(_Bytes_read_u32_fn);
    var _Bytes_read_f32_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getFloat32(offset, isLE)); }, _Bytes_read_f32 = F3(_Bytes_read_f32_fn);
    var _Bytes_read_f64_fn = function (isLE, bytes, offset) { return _Utils_Tuple2(offset + 8, bytes.getFloat64(offset, isLE)); }, _Bytes_read_f64 = F3(_Bytes_read_f64_fn);
    var _Bytes_read_bytes_fn = function (len, bytes, offset) {
        return _Utils_Tuple2(offset + len, new DataView(bytes.buffer, bytes.byteOffset + offset, len));
    }, _Bytes_read_bytes = F3(_Bytes_read_bytes_fn);
    var _Bytes_read_string_fn = function (len, bytes, offset) {
        var string = "";
        var end = offset + len;
        for (; offset < end;) {
            var byte = bytes.getUint8(offset++);
            string +=
                (byte < 128)
                    ? String.fromCharCode(byte)
                    :
                        ((byte & 224) === 192)
                            ? String.fromCharCode((byte & 31) << 6 | bytes.getUint8(offset++) & 63)
                            :
                                ((byte & 240) === 224)
                                    ? String.fromCharCode((byte & 15) << 12
                                        | (bytes.getUint8(offset++) & 63) << 6
                                        | bytes.getUint8(offset++) & 63)
                                    :
                                        (byte =
                                            ((byte & 7) << 18
                                                | (bytes.getUint8(offset++) & 63) << 12
                                                | (bytes.getUint8(offset++) & 63) << 6
                                                | bytes.getUint8(offset++) & 63) - 65536
                                            , String.fromCharCode(Math.floor(byte / 1024) + 55296, byte % 1024 + 56320));
        }
        return _Utils_Tuple2(offset, string);
    }, _Bytes_read_string = F3(_Bytes_read_string_fn);
    var _Bytes_decodeFailure_fn = function () { throw 0; }, _Bytes_decodeFailure = F2(_Bytes_decodeFailure_fn);
    var _Bitwise_and_fn = function (a, b) {
        return a & b;
    }, _Bitwise_and = F2(_Bitwise_and_fn);
    var _Bitwise_or_fn = function (a, b) {
        return a | b;
    }, _Bitwise_or = F2(_Bitwise_or_fn);
    var _Bitwise_xor_fn = function (a, b) {
        return a ^ b;
    }, _Bitwise_xor = F2(_Bitwise_xor_fn);
    function _Bitwise_complement(a) {
        return ~a;
    }
    ;
    var _Bitwise_shiftLeftBy_fn = function (offset, a) {
        return a << offset;
    }, _Bitwise_shiftLeftBy = F2(_Bitwise_shiftLeftBy_fn);
    var _Bitwise_shiftRightBy_fn = function (offset, a) {
        return a >> offset;
    }, _Bitwise_shiftRightBy = F2(_Bitwise_shiftRightBy_fn);
    var _Bitwise_shiftRightZfBy_fn = function (offset, a) {
        return a >>> offset;
    }, _Bitwise_shiftRightZfBy = F2(_Bitwise_shiftRightZfBy_fn);
    var _Regex_never = /.^/;
    var _Regex_fromStringWith_fn = function (options, string) {
        var flags = "g";
        if (options.hd) {
            flags += "m";
        }
        if (options.gL) {
            flags += "i";
        }
        try {
            return $elm$core$Maybe$Just(new RegExp(string, flags));
        }
        catch (error) {
            return $elm$core$Maybe$Nothing;
        }
    }, _Regex_fromStringWith = F2(_Regex_fromStringWith_fn);
    var _Regex_contains_fn = function (re, string) {
        return string.match(re) !== null;
    }, _Regex_contains = F2(_Regex_contains_fn);
    var _Regex_findAtMost_fn = function (n, re, str) {
        var out = [];
        var number = 0;
        var string = str;
        var lastIndex = re.lastIndex;
        var prevLastIndex = -1;
        var result;
        while (number++ < n && (result = re.exec(string))) {
            if (prevLastIndex == re.lastIndex)
                break;
            var i = result.length - 1;
            var subs = new Array(i);
            while (i > 0) {
                var submatch = result[i];
                subs[--i] = submatch
                    ? $elm$core$Maybe$Just(submatch)
                    : $elm$core$Maybe$Nothing;
            }
            out.push($elm$regex$Regex$Match_fn(result[0], result.index, number, _List_fromArray(subs)));
            prevLastIndex = re.lastIndex;
        }
        re.lastIndex = lastIndex;
        return _List_fromArray(out);
    }, _Regex_findAtMost = F3(_Regex_findAtMost_fn);
    var _Regex_replaceAtMost_fn = function (n, re, replacer, string) {
        var count = 0;
        function jsReplacer(match) {
            if (count++ >= n) {
                return match;
            }
            var i = arguments.length - 3;
            var submatches = new Array(i);
            while (i > 0) {
                var submatch = arguments[i];
                submatches[--i] = submatch
                    ? $elm$core$Maybe$Just(submatch)
                    : $elm$core$Maybe$Nothing;
            }
            return replacer($elm$regex$Regex$Match_fn(match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
        }
        return string.replace(re, jsReplacer);
    }, _Regex_replaceAtMost = F4(_Regex_replaceAtMost_fn);
    var _Regex_splitAtMost_fn = function (n, re, str) {
        var string = str;
        var out = [];
        var start = re.lastIndex;
        var restoreLastIndex = re.lastIndex;
        while (n--) {
            var result = re.exec(string);
            if (!result)
                break;
            out.push(string.slice(start, result.index));
            start = re.lastIndex;
        }
        out.push(string.slice(start));
        re.lastIndex = restoreLastIndex;
        return _List_fromArray(out);
    }, _Regex_splitAtMost = F3(_Regex_splitAtMost_fn);
    var _Regex_infinity = Infinity;
    var _VirtualDom_divertHrefToApp;
    var _VirtualDom_doc = typeof document !== "undefined" ? document : {};
    function _VirtualDom_appendChild(parent, child) {
        parent.appendChild(child);
    }
    var _VirtualDom_init_fn = function (virtualNode, flagDecoder, debugMetadata, args) {
        var node = args["node"];
        node.parentNode.replaceChild(_VirtualDom_render(virtualNode, function () { }), node);
        return {};
    }, _VirtualDom_init = F4(_VirtualDom_init_fn);
    function _VirtualDom_text(string) {
        return {
            $: 0,
            a: string
        };
    }
    var _VirtualDom_nodeNS_fn = function (namespace, tag) {
        return F2(function (factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
                var kid = kidList.a;
                descendantsCount += (kid.b || 0);
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 1,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    }, _VirtualDom_nodeNS = F2(_VirtualDom_nodeNS_fn);
    var _VirtualDom_node_a0 = undefined, _VirtualDom_node = _VirtualDom_nodeNS(_VirtualDom_node_a0);
    var _VirtualDom_keyedNodeNS_fn = function (namespace, tag) {
        return F2(function (factList, kidList) {
            for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) {
                var kid = kidList.a;
                descendantsCount += (kid.b.b || 0);
                kids.push(kid);
            }
            descendantsCount += kids.length;
            return {
                $: 2,
                c: tag,
                d: _VirtualDom_organizeFacts(factList),
                e: kids,
                f: namespace,
                b: descendantsCount
            };
        });
    }, _VirtualDom_keyedNodeNS = F2(_VirtualDom_keyedNodeNS_fn);
    var _VirtualDom_keyedNode_a0 = undefined, _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(_VirtualDom_keyedNode_a0);
    function _VirtualDom_custom(factList, model, render, diff) {
        return {
            $: 3,
            d: _VirtualDom_organizeFacts(factList),
            g: model,
            h: render,
            i: diff
        };
    }
    var _VirtualDom_map_fn = function (tagger, node) {
        return {
            $: 4,
            j: tagger,
            k: node,
            b: 1 + (node.b || 0)
        };
    }, _VirtualDom_map = F2(_VirtualDom_map_fn);
    function _VirtualDom_thunk(refs, thunk) {
        return {
            $: 5,
            l: refs,
            m: thunk,
            k: undefined
        };
    }
    var _VirtualDom_lazy_fn = function (func, a) {
        return _VirtualDom_thunk([func, a], function () {
            return func(a);
        });
    }, _VirtualDom_lazy = F2(_VirtualDom_lazy_fn);
    var _VirtualDom_lazy2_fn = function (func, a, b) {
        return _VirtualDom_thunk([func, a, b], function () {
            return A2(func, a, b);
        });
    }, _VirtualDom_lazy2_fn_unwrapped = function (func, a, b) {
        return _VirtualDom_thunk([func, a, b], function () {
            return func(a, b);
        });
    }, _VirtualDom_lazy2 = F3(_VirtualDom_lazy2_fn);
    var _VirtualDom_lazy3_fn = function (func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function () {
            return A3(func, a, b, c);
        });
    }, _VirtualDom_lazy3_fn_unwrapped = function (func, a, b, c) {
        return _VirtualDom_thunk([func, a, b, c], function () {
            return func(a, b, c);
        });
    }, _VirtualDom_lazy3 = F4(_VirtualDom_lazy3_fn);
    var _VirtualDom_lazy4_fn = function (func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function () {
            return A4(func, a, b, c, d);
        });
    }, _VirtualDom_lazy4_fn_unwrapped = function (func, a, b, c, d) {
        return _VirtualDom_thunk([func, a, b, c, d], function () {
            return func(a, b, c, d);
        });
    }, _VirtualDom_lazy4 = F5(_VirtualDom_lazy4_fn);
    var _VirtualDom_lazy5_fn = function (func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function () {
            return A5(func, a, b, c, d, e);
        });
    }, _VirtualDom_lazy5_fn_unwrapped = function (func, a, b, c, d, e) {
        return _VirtualDom_thunk([func, a, b, c, d, e], function () {
            return func(a, b, c, d, e);
        });
    }, _VirtualDom_lazy5 = F6(_VirtualDom_lazy5_fn);
    var _VirtualDom_lazy6_fn = function (func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
            return A6(func, a, b, c, d, e, f);
        });
    }, _VirtualDom_lazy6_fn_unwrapped = function (func, a, b, c, d, e, f) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f], function () {
            return func(a, b, c, d, e, f);
        });
    }, _VirtualDom_lazy6 = F7(_VirtualDom_lazy6_fn);
    var _VirtualDom_lazy7_fn = function (func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
            return A7(func, a, b, c, d, e, f, g);
        });
    }, _VirtualDom_lazy7_fn_unwrapped = function (func, a, b, c, d, e, f, g) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function () {
            return func(a, b, c, d, e, f, g);
        });
    }, _VirtualDom_lazy7 = F8(_VirtualDom_lazy7_fn);
    var _VirtualDom_lazy8_fn = function (func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
            return A8(func, a, b, c, d, e, f, g, h);
        });
    }, _VirtualDom_lazy8_fn_unwrapped = function (func, a, b, c, d, e, f, g, h) {
        return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function () {
            return func(a, b, c, d, e, f, g, h);
        });
    }, _VirtualDom_lazy8 = F9(_VirtualDom_lazy8_fn);
    var _VirtualDom_on_fn = function (key, handler) {
        return {
            $: "a0",
            n: key,
            o: handler
        };
    }, _VirtualDom_on = F2(_VirtualDom_on_fn);
    var _VirtualDom_style_fn = function (key, value) {
        return {
            $: "a1",
            n: key,
            o: value
        };
    }, _VirtualDom_style = F2(_VirtualDom_style_fn);
    var _VirtualDom_property_fn = function (key, value) {
        return {
            $: "a2",
            n: key,
            o: value
        };
    }, _VirtualDom_property = F2(_VirtualDom_property_fn);
    var _VirtualDom_attribute_fn = function (key, value) {
        return {
            $: "a3",
            n: key,
            o: value
        };
    }, _VirtualDom_attribute = F2(_VirtualDom_attribute_fn);
    var _VirtualDom_attributeNS_fn = function (namespace, key, value) {
        return {
            $: "a4",
            n: key,
            o: { f: namespace, o: value }
        };
    }, _VirtualDom_attributeNS = F3(_VirtualDom_attributeNS_fn);
    function _VirtualDom_noScript(tag) {
        return tag == "script" ? "p" : tag;
    }
    function _VirtualDom_noOnOrFormAction(key) {
        return /^(on|formAction$)/i.test(key) ? "data-" + key : key;
    }
    function _VirtualDom_noInnerHtmlOrFormAction(key) {
        return key == "innerHTML" || key == "formAction" ? "data-" + key : key;
    }
    function _VirtualDom_noJavaScriptUri(value) {
        return /^javascript:/i.test(value.replace(/\s/g, "")) ? "" : value;
    }
    function _VirtualDom_noJavaScriptUri_UNUSED(value) {
        return /^javascript:/i.test(value.replace(/\s/g, ""))
            ? "javascript:alert(\"This is an XSS vector. Please use ports or web components instead.\")"
            : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value) ? "" : value;
    }
    function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value) {
        return /^\s*(javascript:|data:text\/html)/i.test(value)
            ? "javascript:alert(\"This is an XSS vector. Please use ports or web components instead.\")"
            : value;
    }
    var _VirtualDom_mapAttribute_fn = function (func, attr) {
        return (attr.$ === "a0")
            ? _VirtualDom_on_fn(attr.n, _VirtualDom_mapHandler(func, attr.o)) : attr;
    }, _VirtualDom_mapAttribute = F2(_VirtualDom_mapAttribute_fn);
    function _VirtualDom_mapHandler(func, handler) {
        var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
        return {
            $: handler.$,
            a: !tag
                ? _Json_map1_fn(func, handler.a) : _Json_map2_fn(tag < 3
                ? _VirtualDom_mapEventTuple
                : _VirtualDom_mapEventRecord, $elm$json$Json$Decode$succeed(func), handler.a)
        };
    }
    var _VirtualDom_mapEventTuple_fn = function (func, tuple) {
        return _Utils_Tuple2(func(tuple.a), tuple.b);
    }, _VirtualDom_mapEventTuple = F2(_VirtualDom_mapEventTuple_fn);
    var _VirtualDom_mapEventRecord_fn = function (func, record) {
        return {
            bH: func(record.bH),
            ff: record.ff,
            e5: record.e5
        };
    }, _VirtualDom_mapEventRecord = F2(_VirtualDom_mapEventRecord_fn);
    function _VirtualDom_organizeFacts(factList) {
        for (var facts = {}; factList.b; factList = factList.b) {
            var entry = factList.a;
            var tag = entry.$;
            var key = entry.n;
            var value = entry.o;
            if (tag === "a2") {
                (key === "className")
                    ? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
                    : facts[key] = _Json_unwrap(value);
                continue;
            }
            var subFacts = facts[tag] || (facts[tag] = {});
            (tag === "a3" && key === "class")
                ? _VirtualDom_addClass(subFacts, key, value)
                : subFacts[key] = value;
        }
        return facts;
    }
    function _VirtualDom_addClass(object, key, newClass) {
        var classes = object[key];
        object[key] = classes ? classes + " " + newClass : newClass;
    }
    function _VirtualDom_render(vNode, eventNode) {
        var tag = vNode.$;
        if (tag === 5) {
            return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
        }
        if (tag === 0) {
            return _VirtualDom_doc.createTextNode(vNode.a);
        }
        if (tag === 4) {
            var subNode = vNode.k;
            var tagger = vNode.j;
            while (subNode.$ === 4) {
                typeof tagger !== "object"
                    ? tagger = [tagger, subNode.j]
                    : tagger.push(subNode.j);
                subNode = subNode.k;
            }
            var subEventRoot = { j: tagger, p: eventNode };
            var domNode = _VirtualDom_render(subNode, subEventRoot);
            domNode.elm_event_node_ref = subEventRoot;
            return domNode;
        }
        if (tag === 3) {
            var domNode = vNode.h(vNode.g);
            _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
            return domNode;
        }
        var domNode = vNode.f
            ? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
            : _VirtualDom_doc.createElement(vNode.c);
        if (_VirtualDom_divertHrefToApp && vNode.c == "a") {
            domNode.addEventListener("click", _VirtualDom_divertHrefToApp(domNode));
        }
        _VirtualDom_applyFacts(domNode, eventNode, vNode.d);
        for (var kids = vNode.e, i = 0; i < kids.length; i++) {
            _VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
        }
        return domNode;
    }
    function _VirtualDom_applyFacts(domNode, eventNode, facts) {
        for (var key in facts) {
            var value = facts[key];
            key === "a1"
                ? _VirtualDom_applyStyles(domNode, value)
                :
                    key === "a0"
                        ? _VirtualDom_applyEvents(domNode, eventNode, value)
                        :
                            key === "a3"
                                ? _VirtualDom_applyAttrs(domNode, value)
                                :
                                    key === "a4"
                                        ? _VirtualDom_applyAttrsNS(domNode, value)
                                        :
                                            ((key !== "value" && key !== "checked") || domNode[key] !== value) && (domNode[key] = value);
        }
    }
    function _VirtualDom_applyStyles(domNode, styles) {
        var domNodeStyle = domNode.style;
        for (var key in styles) {
            domNodeStyle[key] = styles[key];
        }
    }
    function _VirtualDom_applyAttrs(domNode, attrs) {
        for (var key in attrs) {
            var value = attrs[key];
            typeof value !== "undefined"
                ? domNode.setAttribute(key, value)
                : domNode.removeAttribute(key);
        }
    }
    function _VirtualDom_applyAttrsNS(domNode, nsAttrs) {
        for (var key in nsAttrs) {
            var pair = nsAttrs[key];
            var namespace = pair.f;
            var value = pair.o;
            typeof value !== "undefined"
                ? domNode.setAttributeNS(namespace, key, value)
                : domNode.removeAttributeNS(namespace, key);
        }
    }
    function _VirtualDom_applyEvents(domNode, eventNode, events) {
        var allCallbacks = domNode.elmFs || (domNode.elmFs = {});
        for (var key in events) {
            var newHandler = events[key];
            var oldCallback = allCallbacks[key];
            if (!newHandler) {
                domNode.removeEventListener(key, oldCallback);
                allCallbacks[key] = undefined;
                continue;
            }
            if (oldCallback) {
                var oldHandler = oldCallback.q;
                if (oldHandler.$ === newHandler.$) {
                    oldCallback.q = newHandler;
                    continue;
                }
                domNode.removeEventListener(key, oldCallback);
            }
            oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
            domNode.addEventListener(key, oldCallback, _VirtualDom_passiveSupported
                && { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 });
            allCallbacks[key] = oldCallback;
        }
    }
    var _VirtualDom_passiveSupported;
    try {
        window.addEventListener("t", null, Object.defineProperty({}, "passive", {
            get: function () { _VirtualDom_passiveSupported = true; }
        }));
    }
    catch (e) { }
    function _VirtualDom_makeCallback(eventNode, initialHandler) {
        function callback(event) {
            var handler = callback.q;
            var result = _Json_runHelp(handler.a, event);
            if (!$elm$core$Result$isOk(result)) {
                return;
            }
            var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);
            var value = result.a;
            var message = !tag ? value : tag < 3 ? value.a : value.bH;
            var stopPropagation = tag == 1 ? value.b : tag == 3 && value.ff;
            var currentEventNode = (stopPropagation && event.stopPropagation(),
                (tag == 2 ? value.b : tag == 3 && value.e5) && event.preventDefault(),
                eventNode);
            var tagger;
            var i;
            while (tagger = currentEventNode.j) {
                if (typeof tagger == "function") {
                    message = tagger(message);
                }
                else {
                    for (var i = tagger.length; i--;) {
                        message = tagger[i](message);
                    }
                }
                currentEventNode = currentEventNode.p;
            }
            currentEventNode(message, stopPropagation);
        }
        callback.q = initialHandler;
        return callback;
    }
    function _VirtualDom_equalEvents(x, y) {
        return x.$ == y.$ && _Json_equality(x.a, y.a);
    }
    function _VirtualDom_diff(x, y) {
        var patches = [];
        _VirtualDom_diffHelp(x, y, patches, 0);
        return patches;
    }
    function _VirtualDom_pushPatch(patches, type, index, data) {
        var patch = {
            $: type,
            r: index,
            s: data,
            t: undefined,
            u: undefined
        };
        patches.push(patch);
        return patch;
    }
    function _VirtualDom_diffHelp(x, y, patches, index) {
        if (x === y) {
            return;
        }
        var xType = x.$;
        var yType = y.$;
        if (xType !== yType) {
            if (xType === 1 && yType === 2) {
                y = _VirtualDom_dekey(y);
                yType = 1;
            }
            else {
                _VirtualDom_pushPatch(patches, 0, index, y);
                return;
            }
        }
        switch (yType) {
            case 5:
                var xRefs = x.l;
                var yRefs = y.l;
                var i = xRefs.length;
                var same = i === yRefs.length;
                while (same && i--) {
                    same = xRefs[i] === yRefs[i];
                }
                if (same) {
                    y.k = x.k;
                    return;
                }
                y.k = y.m();
                var subPatches = [];
                _VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
                subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
                return;
            case 4:
                var xTaggers = x.j;
                var yTaggers = y.j;
                var nesting = false;
                var xSubNode = x.k;
                while (xSubNode.$ === 4) {
                    nesting = true;
                    typeof xTaggers !== "object"
                        ? xTaggers = [xTaggers, xSubNode.j]
                        : xTaggers.push(xSubNode.j);
                    xSubNode = xSubNode.k;
                }
                var ySubNode = y.k;
                while (ySubNode.$ === 4) {
                    nesting = true;
                    typeof yTaggers !== "object"
                        ? yTaggers = [yTaggers, ySubNode.j]
                        : yTaggers.push(ySubNode.j);
                    ySubNode = ySubNode.k;
                }
                if (nesting && xTaggers.length !== yTaggers.length) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers) {
                    _VirtualDom_pushPatch(patches, 2, index, yTaggers);
                }
                _VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
                return;
            case 0:
                if (x.a !== y.a) {
                    _VirtualDom_pushPatch(patches, 3, index, y.a);
                }
                return;
            case 1:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
                return;
            case 2:
                _VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
                return;
            case 3:
                if (x.h !== y.h) {
                    _VirtualDom_pushPatch(patches, 0, index, y);
                    return;
                }
                var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
                factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
                var patch = y.i(x.g, y.g);
                patch && _VirtualDom_pushPatch(patches, 5, index, patch);
                return;
        }
    }
    function _VirtualDom_pairwiseRefEqual(as, bs) {
        for (var i = 0; i < as.length; i++) {
            if (as[i] !== bs[i]) {
                return false;
            }
        }
        return true;
    }
    function _VirtualDom_diffNodes(x, y, patches, index, diffKids) {
        if (x.c !== y.c || x.f !== y.f) {
            _VirtualDom_pushPatch(patches, 0, index, y);
            return;
        }
        var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
        factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);
        diffKids(x, y, patches, index);
    }
    function _VirtualDom_diffFacts(x, y, category) {
        var diff;
        for (var xKey in x) {
            if (xKey === "a1" || xKey === "a0" || xKey === "a3" || xKey === "a4") {
                var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
                if (subDiff) {
                    diff = diff || {};
                    diff[xKey] = subDiff;
                }
                continue;
            }
            if (!(xKey in y)) {
                diff = diff || {};
                diff[xKey] =
                    !category
                        ? (typeof x[xKey] === "string" ? "" : null)
                        :
                            (category === "a1")
                                ? ""
                                :
                                    (category === "a0" || category === "a3")
                                        ? undefined
                                        :
                                            { f: x[xKey].f, o: undefined };
                continue;
            }
            var xValue = x[xKey];
            var yValue = y[xKey];
            if (xValue === yValue && xKey !== "value" && xKey !== "checked"
                || category === "a0" && _VirtualDom_equalEvents(xValue, yValue)) {
                continue;
            }
            diff = diff || {};
            diff[xKey] = yValue;
        }
        for (var yKey in y) {
            if (!(yKey in x)) {
                diff = diff || {};
                diff[yKey] = y[yKey];
            }
        }
        return diff;
    }
    function _VirtualDom_diffKids(xParent, yParent, patches, index) {
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        if (xLen > yLen) {
            _VirtualDom_pushPatch(patches, 6, index, {
                v: yLen,
                i: xLen - yLen
            });
        }
        else if (xLen < yLen) {
            _VirtualDom_pushPatch(patches, 7, index, {
                v: xLen,
                e: yKids
            });
        }
        for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++) {
            var xKid = xKids[i];
            _VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
            index += xKid.b || 0;
        }
    }
    function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex) {
        var localPatches = [];
        var changes = {};
        var inserts = [];
        var xKids = xParent.e;
        var yKids = yParent.e;
        var xLen = xKids.length;
        var yLen = yKids.length;
        var xIndex = 0;
        var yIndex = 0;
        var index = rootIndex;
        while (xIndex < xLen && yIndex < yLen) {
            var x = xKids[xIndex];
            var y = yKids[yIndex];
            var xKey = x.a;
            var yKey = y.a;
            var xNode = x.b;
            var yNode = y.b;
            var newMatch = undefined;
            var oldMatch = undefined;
            if (xKey === yKey) {
                index++;
                _VirtualDom_diffHelp(xNode, yNode, localPatches, index);
                index += xNode.b || 0;
                xIndex++;
                yIndex++;
                continue;
            }
            var xNext = xKids[xIndex + 1];
            var yNext = yKids[yIndex + 1];
            if (xNext) {
                var xNextKey = xNext.a;
                var xNextNode = xNext.b;
                oldMatch = yKey === xNextKey;
            }
            if (yNext) {
                var yNextKey = yNext.a;
                var yNextNode = yNext.b;
                newMatch = xKey === yNextKey;
            }
            if (newMatch && oldMatch) {
                index++;
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                _VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            if (newMatch) {
                index++;
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                _VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
                index += xNode.b || 0;
                xIndex += 1;
                yIndex += 2;
                continue;
            }
            if (oldMatch) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 1;
                continue;
            }
            if (xNext && xNextKey === yNextKey) {
                index++;
                _VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
                _VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
                index += xNode.b || 0;
                index++;
                _VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
                index += xNextNode.b || 0;
                xIndex += 2;
                yIndex += 2;
                continue;
            }
            break;
        }
        while (xIndex < xLen) {
            index++;
            var x = xKids[xIndex];
            var xNode = x.b;
            _VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
            index += xNode.b || 0;
            xIndex++;
        }
        while (yIndex < yLen) {
            var endInserts = endInserts || [];
            var y = yKids[yIndex];
            _VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
            yIndex++;
        }
        if (localPatches.length > 0 || inserts.length > 0 || endInserts) {
            _VirtualDom_pushPatch(patches, 8, rootIndex, {
                w: localPatches,
                x: inserts,
                y: endInserts
            });
        }
    }
    var _VirtualDom_POSTFIX = "_elmW6BL";
    function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts) {
        var entry = changes[key];
        if (!entry) {
            entry = {
                c: 0,
                z: vnode,
                r: yIndex,
                s: undefined
            };
            inserts.push({ r: yIndex, A: entry });
            changes[key] = entry;
            return;
        }
        if (entry.c === 1) {
            inserts.push({ r: yIndex, A: entry });
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
            entry.r = yIndex;
            entry.s.s = {
                w: subPatches,
                A: entry
            };
            return;
        }
        _VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
    }
    function _VirtualDom_removeNode(changes, localPatches, key, vnode, index) {
        var entry = changes[key];
        if (!entry) {
            var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);
            changes[key] = {
                c: 1,
                z: vnode,
                r: index,
                s: patch
            };
            return;
        }
        if (entry.c === 0) {
            entry.c = 2;
            var subPatches = [];
            _VirtualDom_diffHelp(vnode, entry.z, subPatches, index);
            _VirtualDom_pushPatch(localPatches, 9, index, {
                w: subPatches,
                A: entry
            });
            return;
        }
        _VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
    }
    function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode) {
        _VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
    }
    function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode) {
        var patch = patches[i];
        var index = patch.r;
        while (index === low) {
            var patchType = patch.$;
            if (patchType === 1) {
                _VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
            }
            else if (patchType === 8) {
                patch.t = domNode;
                patch.u = eventNode;
                var subPatches = patch.s.w;
                if (subPatches.length > 0) {
                    _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                }
            }
            else if (patchType === 9) {
                patch.t = domNode;
                patch.u = eventNode;
                var data = patch.s;
                if (data) {
                    data.A.s = domNode;
                    var subPatches = data.w;
                    if (subPatches.length > 0) {
                        _VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
                    }
                }
            }
            else {
                patch.t = domNode;
                patch.u = eventNode;
            }
            i++;
            if (!(patch = patches[i]) || (index = patch.r) > high) {
                return i;
            }
        }
        var tag = vNode.$;
        if (tag === 4) {
            var subNode = vNode.k;
            while (subNode.$ === 4) {
                subNode = subNode.k;
            }
            return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
        }
        var vKids = vNode.e;
        var childNodes = domNode.childNodes;
        for (var j = 0; j < vKids.length; j++) {
            low++;
            var vKid = tag === 1 ? vKids[j] : vKids[j].b;
            var nextLow = low + (vKid.b || 0);
            if (low <= index && index <= nextLow) {
                i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
                if (!(patch = patches[i]) || (index = patch.r) > high) {
                    return i;
                }
            }
            low = nextLow;
        }
        return i;
    }
    function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode) {
        if (patches.length === 0) {
            return rootDomNode;
        }
        _VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
        return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
    }
    function _VirtualDom_applyPatchesHelp(rootDomNode, patches) {
        for (var i = 0; i < patches.length; i++) {
            var patch = patches[i];
            var localDomNode = patch.t;
            var newNode = _VirtualDom_applyPatch(localDomNode, patch);
            if (localDomNode === rootDomNode) {
                rootDomNode = newNode;
            }
        }
        return rootDomNode;
    }
    function _VirtualDom_applyPatch(domNode, patch) {
        switch (patch.$) {
            case 0:
                return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);
            case 4:
                _VirtualDom_applyFacts(domNode, patch.u, patch.s);
                return domNode;
            case 3:
                domNode.replaceData(0, domNode.length, patch.s);
                return domNode;
            case 1:
                return _VirtualDom_applyPatchesHelp(domNode, patch.s);
            case 2:
                if (domNode.elm_event_node_ref) {
                    domNode.elm_event_node_ref.j = patch.s;
                }
                else {
                    domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
                }
                return domNode;
            case 6:
                var data = patch.s;
                for (var i = 0; i < data.i; i++) {
                    domNode.removeChild(domNode.childNodes[data.v]);
                }
                return domNode;
            case 7:
                var data = patch.s;
                var kids = data.e;
                var i = data.v;
                var theEnd = domNode.childNodes[i];
                for (; i < kids.length; i++) {
                    domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
                }
                return domNode;
            case 9:
                var data = patch.s;
                if (!data) {
                    domNode.parentNode.removeChild(domNode);
                    return domNode;
                }
                var entry = data.A;
                if (typeof entry.r !== "undefined") {
                    domNode.parentNode.removeChild(domNode);
                }
                entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
                return domNode;
            case 8:
                return _VirtualDom_applyPatchReorder(domNode, patch);
            case 5:
                return patch.s(domNode);
            default:
                _Debug_crash(10);
        }
    }
    function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode) {
        var parentNode = domNode.parentNode;
        var newNode = _VirtualDom_render(vNode, eventNode);
        if (!newNode.elm_event_node_ref) {
            newNode.elm_event_node_ref = domNode.elm_event_node_ref;
        }
        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode);
        }
        return newNode;
    }
    function _VirtualDom_applyPatchReorder(domNode, patch) {
        var data = patch.s;
        var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);
        domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);
        var inserts = data.x;
        for (var i = 0; i < inserts.length; i++) {
            var insert = inserts[i];
            var entry = insert.A;
            var node = entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u);
            domNode.insertBefore(node, domNode.childNodes[insert.r]);
        }
        if (frag) {
            _VirtualDom_appendChild(domNode, frag);
        }
        return domNode;
    }
    function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch) {
        if (!endInserts) {
            return;
        }
        var frag = _VirtualDom_doc.createDocumentFragment();
        for (var i = 0; i < endInserts.length; i++) {
            var insert = endInserts[i];
            var entry = insert.A;
            _VirtualDom_appendChild(frag, entry.c === 2
                ? entry.s
                : _VirtualDom_render(entry.z, patch.u));
        }
        return frag;
    }
    function _VirtualDom_virtualize(node) {
        if (node.nodeType === 3) {
            return _VirtualDom_text(node.textContent);
        }
        if (node.nodeType !== 1) {
            return _VirtualDom_text("");
        }
        var attrList = _List_Nil;
        var attrs = node.attributes;
        for (var i = attrs.length; i--;) {
            var attr = attrs[i];
            var name = attr.name;
            var value = attr.value;
            attrList = _List_Cons(_VirtualDom_attribute_fn(name, value), attrList);
        }
        var tag = node.tagName.toLowerCase();
        var kidList = _List_Nil;
        var kids = node.childNodes;
        for (var i = kids.length; i--;) {
            kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
        }
        return A3(_VirtualDom_node, tag, attrList, kidList);
    }
    function _VirtualDom_dekey(keyedNode) {
        var keyedKids = keyedNode.e;
        var len = keyedKids.length;
        var kids = new Array(len);
        for (var i = 0; i < len; i++) {
            kids[i] = keyedKids[i].b;
        }
        return {
            $: 1,
            c: keyedNode.c,
            d: keyedNode.d,
            e: kids,
            f: keyedNode.f,
            b: keyedNode.b
        };
    }
    var _Parser_isSubString_fn = function (smallString, offset, row, col, bigString) {
        var smallLength = smallString.length;
        var isGood = offset + smallLength <= bigString.length;
        for (var i = 0; isGood && i < smallLength;) {
            var code = bigString.charCodeAt(offset);
            isGood =
                smallString[i++] === bigString[offset++]
                    && (code === 10
                        ? (row++, col = 1)
                        : (col++, (code & 63488) === 55296 ? smallString[i++] === bigString[offset++] : 1));
        }
        return _Utils_Tuple3(isGood ? offset : -1, row, col);
    }, _Parser_isSubString = F5(_Parser_isSubString_fn);
    var _Parser_isSubChar_fn = function (predicate, offset, string) {
        return (string.length <= offset
            ? -1
            :
                (string.charCodeAt(offset) & 63488) === 55296
                    ? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
                    :
                        (predicate(_Utils_chr(string[offset]))
                            ? ((string[offset] === "\n") ? -2 : (offset + 1))
                            : -1));
    }, _Parser_isSubChar = F3(_Parser_isSubChar_fn);
    var _Parser_isAsciiCode_fn = function (code, offset, string) {
        return string.charCodeAt(offset) === code;
    }, _Parser_isAsciiCode = F3(_Parser_isAsciiCode_fn);
    var _Parser_chompBase10_fn = function (offset, string) {
        for (; offset < string.length; offset++) {
            var code = string.charCodeAt(offset);
            if (code < 48 || 57 < code) {
                return offset;
            }
        }
        return offset;
    }, _Parser_chompBase10 = F2(_Parser_chompBase10_fn);
    var _Parser_consumeBase_fn = function (base, offset, string) {
        for (var total = 0; offset < string.length; offset++) {
            var digit = string.charCodeAt(offset) - 48;
            if (digit < 0 || base <= digit)
                break;
            total = base * total + digit;
        }
        return _Utils_Tuple2(offset, total);
    }, _Parser_consumeBase = F3(_Parser_consumeBase_fn);
    var _Parser_consumeBase16_fn = function (offset, string) {
        for (var total = 0; offset < string.length; offset++) {
            var code = string.charCodeAt(offset);
            if (48 <= code && code <= 57) {
                total = 16 * total + code - 48;
            }
            else if (65 <= code && code <= 70) {
                total = 16 * total + code - 55;
            }
            else if (97 <= code && code <= 102) {
                total = 16 * total + code - 87;
            }
            else {
                break;
            }
        }
        return _Utils_Tuple2(offset, total);
    }, _Parser_consumeBase16 = F2(_Parser_consumeBase16_fn);
    var _Parser_findSubString_fn = function (smallString, offset, row, col, bigString) {
        var newOffset = bigString.indexOf(smallString, offset);
        var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;
        while (offset < target) {
            var code = bigString.charCodeAt(offset++);
            code === 10
                ? (col = 1, row++)
                : (col++, (code & 63488) === 55296 && offset++);
        }
        return _Utils_Tuple3(newOffset, row, col);
    }, _Parser_findSubString = F5(_Parser_findSubString_fn);
    function _Url_percentEncode(string) {
        return encodeURIComponent(string);
    }
    function _Url_percentDecode(string) {
        try {
            return $elm$core$Maybe$Just(decodeURIComponent(string));
        }
        catch (e) {
            return $elm$core$Maybe$Nothing;
        }
    }
    var _Http_toTask_fn = function (router, toTask, request) {
        return _Scheduler_binding(function (callback) {
            function done(response) {
                callback(toTask(request.eD.a(response)));
            }
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("error", function () { done($elm$http$Http$NetworkError_); });
            xhr.addEventListener("timeout", function () { done($elm$http$Http$Timeout_); });
            xhr.addEventListener("load", function () { done(_Http_toResponse(request.eD.b, xhr)); });
            $elm$core$Maybe$isJust(request.gA) && _Http_track(router, xhr, request.gA.a);
            try {
                xhr.open(request.eW, request.C, true);
            }
            catch (e) {
                return done($elm$http$Http$BadUrl_(request.C));
            }
            _Http_configureRequest(xhr, request);
            request.er.a && xhr.setRequestHeader("Content-Type", request.er.a);
            xhr.send(request.er.b);
            return function () { xhr.c = true; xhr.abort(); };
        });
    }, _Http_toTask = F3(_Http_toTask_fn);
    function _Http_configureRequest(xhr, request) {
        for (var headers = request.eI; headers.b; headers = headers.b) {
            xhr.setRequestHeader(headers.a.a, headers.a.b);
        }
        xhr.timeout = request.hR.a || 0;
        xhr.responseType = request.eD.d;
        xhr.withCredentials = request.gD;
    }
    function _Http_toResponse(toBody, xhr) {
        return A2(200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_, _Http_toMetadata(xhr), toBody(xhr.response));
    }
    function _Http_toMetadata(xhr) {
        return {
            C: xhr.responseURL,
            aa: xhr.status,
            bc: xhr.statusText,
            eI: _Http_parseHeaders(xhr.getAllResponseHeaders())
        };
    }
    function _Http_parseHeaders(rawHeaders) {
        if (!rawHeaders) {
            return $elm$core$Dict$empty;
        }
        var headers = $elm$core$Dict$empty;
        var headerPairs = rawHeaders.split("\r\n");
        for (var i = headerPairs.length; i--;) {
            var headerPair = headerPairs[i];
            var index = headerPair.indexOf(": ");
            if (index > 0) {
                var key = headerPair.substring(0, index);
                var value = headerPair.substring(index + 2);
                headers = $elm$core$Dict$update_fn(key, function (oldValue) {
                    return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
                        ? value + ", " + oldValue.a
                        : value);
                }, headers);
            }
        }
        return headers;
    }
    var _Http_expect_fn = function (type, toBody, toValue) {
        return {
            $: 0,
            d: type,
            b: toBody,
            a: toValue
        };
    }, _Http_expect = F3(_Http_expect_fn);
    var _Http_mapExpect_fn = function (func, expect) {
        return {
            $: 0,
            d: expect.d,
            b: expect.b,
            a: function (x) { return func(expect.a(x)); }
        };
    }, _Http_mapExpect = F2(_Http_mapExpect_fn);
    function _Http_toDataView(arrayBuffer) {
        return new DataView(arrayBuffer);
    }
    var _Http_emptyBody = { $: 0 };
    var _Http_pair_fn = function (a, b) { return { $: 0, a: a, b: b }; }, _Http_pair = F2(_Http_pair_fn);
    function _Http_toFormData(parts) {
        for (var formData = new FormData(); parts.b; parts = parts.b) {
            var part = parts.a;
            formData.append(part.a, part.b);
        }
        return formData;
    }
    var _Http_bytesToBlob_fn = function (mime, bytes) {
        return new Blob([bytes], { type: mime });
    }, _Http_bytesToBlob = F2(_Http_bytesToBlob_fn);
    function _Http_track(router, xhr, tracker) {
        xhr.upload.addEventListener("progress", function (event) {
            if (xhr.c) {
                return;
            }
            _Scheduler_rawSpawn(_Platform_sendToSelf_fn(router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
                hJ: event.loaded,
                hM: event.total
            }))));
        });
        xhr.addEventListener("progress", function (event) {
            if (xhr.c) {
                return;
            }
            _Scheduler_rawSpawn(_Platform_sendToSelf_fn(router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
                hy: event.loaded,
                hM: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
            }))));
        });
    }
    var wireRefs = (function () {
        var refs = new Map();
        var counter = 0;
        var f = {};
        f.add = function (obj) {
            counter++;
            refs.set(counter, obj);
            return counter;
        };
        f.getFinal = function (k) {
            let v = refs.get(k);
            refs.delete(k);
            return v;
        };
        f.clear = function () {
            refs = new Map();
        };
        f.all = function () {
            return [refs.keys(), refs];
        };
        return f;
    })();
    var _LamderaCodecs_encodeWithRef = function (a) {
        return wireRefs.add(a);
    };
    var _LamderaCodecs_decodeWithRef = function (ref) {
        return wireRefs.getFinal(ref);
    };
    var _LamderaCodecs_encodeBytes = function (s) { return _Lamdera_Json_wrap(s); };
    function _Lamdera_Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
    function _Lamdera_Json_wrap(value) { return value; }
    function _LamderaCodecs_Json_decodePrim(decoder) {
        return { $: 0, a: decoder };
    }
    var _LamderaCodecs_decodeBytes = _Json_decodePrim(function (value) {
        return (typeof value === "object" && value instanceof DataView)
            ? $elm$core$Result$Ok(value)
            : _Json_expecting("a DataView", value);
    });
    var _LamderaCodecs_debug = function (s) {
        console.log(s);
        return _Utils_Tuple0;
    };
    var _LamderaCodecs_bytesDecodeStrict_fn = function (decoder, bytes) {
        try {
            var res = A2(decoder, bytes, 0);
            const w = bytes.byteLength;
            if (w !== res.a) {
                console.log(`❌ bytesDecodeStrict did not consume all bytes: length:${w}, consumed:${res.a}`, res.b, new Uint8Array(bytes.buffer));
            }
            return $elm$core$Maybe$Just(res.b);
        }
        catch (e) {
            console.log("\u274C bytesDecodeStrict unexpected error:", e);
            return $elm$core$Maybe$Nothing;
        }
    }, _LamderaCodecs_bytesDecodeStrict_fn_unwrapped = function (decoder, bytes) {
        try {
            var res = decoder(bytes, 0);
            const w = bytes.byteLength;
            if (w !== res.a) {
                console.log(`❌ bytesDecodeStrict did not consume all bytes: length:${w}, consumed:${res.a}`, res.b, new Uint8Array(bytes.buffer));
            }
            return $elm$core$Maybe$Just(res.b);
        }
        catch (e) {
            console.log("\u274C bytesDecodeStrict unexpected error:", e);
            return $elm$core$Maybe$Nothing;
        }
    }, _LamderaCodecs_bytesDecodeStrict = F2(_LamderaCodecs_bytesDecodeStrict_fn);
    var $elm$core$List$cons = _List_cons;
    var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
    var $elm$core$Array$foldr_fn = function (func, baseCase, _v0) {
        var tree = _v0.c;
        var tail = _v0.d;
        var helper = F2(function (node, acc) {
            if (!node.$) {
                var subTree = node.a;
                return _JsArray_foldr_fn(helper, acc, subTree);
            }
            else {
                var values = node.a;
                return _JsArray_foldr_fn(func, acc, values);
            }
        });
        return _JsArray_foldr_fn(helper, _JsArray_foldr_fn(func, baseCase, tail), tree);
    }, $elm$core$Array$foldr = F3($elm$core$Array$foldr_fn);
    var $elm$core$Array$toList = function (array) {
        return $elm$core$Array$foldr_fn($elm$core$List$cons, _List_Nil, array);
    };
    var $elm$core$Dict$foldr_fn = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldr_fn(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr_fn_unwrapped = function (func, acc, t) {
        foldr: while (true) {
            if (t.$ === -2) {
                return acc;
            }
            else {
                var key = t.b;
                var value = t.c;
                var left = t.d;
                var right = t.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldr_fn_unwrapped(func, acc, right)), $temp$t = left;
                func = $temp$func;
                acc = $temp$acc;
                t = $temp$t;
                continue foldr;
            }
        }
    }, $elm$core$Dict$foldr = F3($elm$core$Dict$foldr_fn);
    var $elm$core$Dict$toList = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, list) {
            return _List_Cons(_Utils_Tuple2(key, value), list);
        }, _List_Nil, dict);
    };
    var $elm$core$Dict$keys = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, keyList) {
            return _List_Cons(key, keyList);
        }, _List_Nil, dict);
    };
    var $elm$core$Set$toList = function (_v0) {
        var dict = _v0;
        return $elm$core$Dict$keys(dict);
    };
    var $elm$core$Basics$EQ = 1;
    var $elm$core$Basics$GT = 2;
    var $elm$core$Basics$LT = 0;
    var $author$project$Pages$Internal$Platform$Cli$GotBuildError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$Platform$Cli$GotDataBatch = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Basics$True = 0;
    var $elm$core$Result$Err = function (a) {
        return { $: 1, a: a };
    };
    var $elm$json$Json$Decode$Failure_fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $elm$json$Json$Decode$Failure = F2($elm$json$Json$Decode$Failure_fn);
    var $elm$json$Json$Decode$Field_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$json$Json$Decode$Field = F2($elm$json$Json$Decode$Field_fn);
    var $elm$json$Json$Decode$Index_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$json$Json$Decode$Index = F2($elm$json$Json$Decode$Index_fn);
    var $elm$core$Result$Ok = function (a) {
        return { $: 0, a: a };
    };
    var $elm$json$Json$Decode$OneOf = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Basics$False = 1;
    var $elm$core$Basics$add = _Basics_add;
    var $elm$core$Maybe$Just = function (a) { return { $: 0, a: a }; };
    var $elm$core$Maybe$Nothing = { $: 1, a: null };
    var $elm$core$String$all = _String_all;
    var $elm$core$Basics$and = _Basics_and;
    var $elm$core$Basics$append = _Utils_append;
    var $elm$json$Json$Encode$encode = _Json_encode;
    var $elm$core$String$fromInt = _String_fromNumber;
    var $elm$core$String$join_fn = function (sep, chunks) {
        return _String_join_fn(sep, _List_toArray(chunks));
    }, $elm$core$String$join = F2($elm$core$String$join_fn);
    var $elm$core$String$split_fn = function (sep, string) {
        return _List_fromArray(_String_split_fn(sep, string));
    }, $elm$core$String$split = F2($elm$core$String$split_fn);
    var $elm$json$Json$Decode$indent = function (str) {
        return $elm$core$String$join_fn("\n    ", $elm$core$String$split_fn("\n", str));
    };
    var $elm$core$List$foldl_fn = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = A2(func, x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl_fn_unwrapped = function (func, acc, list) {
        foldl: while (true) {
            if (!list.b) {
                return acc;
            }
            else {
                var x = list.a;
                var xs = list.b;
                var $temp$func = func, $temp$acc = func(x, acc), $temp$list = xs;
                func = $temp$func;
                acc = $temp$acc;
                list = $temp$list;
                continue foldl;
            }
        }
    }, $elm$core$List$foldl = F3($elm$core$List$foldl_fn);
    var $elm$core$List$length = function (xs) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, i) {
            return i + 1;
        }, 0, xs);
    };
    var $elm$core$List$map2 = _List_map2;
    var $elm$core$Basics$le = _Utils_le;
    var $elm$core$Basics$sub = _Basics_sub;
    var $elm$core$List$rangeHelp_fn = function (lo, hi, list) {
        rangeHelp: while (true) {
            if (_Utils_cmp(lo, hi) < 1) {
                var $temp$lo = lo, $temp$hi = hi - 1, $temp$list = _List_Cons(hi, list);
                lo = $temp$lo;
                hi = $temp$hi;
                list = $temp$list;
                continue rangeHelp;
            }
            else {
                return list;
            }
        }
    }, $elm$core$List$rangeHelp = F3($elm$core$List$rangeHelp_fn);
    var $elm$core$List$range_fn = function (lo, hi) {
        return $elm$core$List$rangeHelp_fn(lo, hi, _List_Nil);
    }, $elm$core$List$range = F2($elm$core$List$range_fn);
    var $elm$core$List$indexedMap_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; xs.b; i++, xs = xs.b) {
            var next = _List_Cons(A2(f, i, xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$indexedMap_fn_unwrapped = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; xs.b; i++, xs = xs.b) {
            var next = _List_Cons(f(i, xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$indexedMap = F2($elm$core$List$indexedMap_fn);
    var $elm$core$Char$toCode = _Char_toCode;
    var $elm$core$Char$isLower = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (97 <= code) && (code <= 122);
    };
    var $elm$core$Char$isUpper = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 90) && (65 <= code);
    };
    var $elm$core$Basics$or = _Basics_or;
    var $elm$core$Char$isAlpha = function (_char) {
        return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
    };
    var $elm$core$Char$isDigit = function (_char) {
        var code = $elm$core$Char$toCode(_char);
        return (code <= 57) && (48 <= code);
    };
    var $elm$core$Char$isAlphaNum = function (_char) {
        return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
    };
    var $elm$core$List$reverse = function (list) {
        return $elm$core$List$foldl_fn($elm$core$List$cons, _List_Nil, list);
    };
    var $elm$core$String$uncons = _String_uncons;
    var $elm$json$Json$Decode$errorOneOf_fn = function (i, error) {
        return "\n\n(" + ($elm$core$String$fromInt(i + 1) + (") " + $elm$json$Json$Decode$indent($elm$json$Json$Decode$errorToString(error))));
    }, $elm$json$Json$Decode$errorOneOf = F2($elm$json$Json$Decode$errorOneOf_fn);
    var $elm$json$Json$Decode$errorToString = function (error) {
        return $elm$json$Json$Decode$errorToStringHelp_fn(error, _List_Nil);
    };
    var $elm$json$Json$Decode$errorToStringHelp_fn = function (error, context) {
        errorToStringHelp: while (true) {
            switch (error.$) {
                case 0:
                    var f = error.a;
                    var err = error.b;
                    var isSimple = function () {
                        var _v1 = $elm$core$String$uncons(f);
                        if (_v1.$ === 1) {
                            return false;
                        }
                        else {
                            var _v2 = _v1.a;
                            var _char = _v2.a;
                            var rest = _v2.b;
                            return $elm$core$Char$isAlpha(_char) && _String_all_fn($elm$core$Char$isAlphaNum, rest);
                        }
                    }();
                    var fieldName = isSimple ? ("." + f) : ("['" + (f + "']"));
                    var $temp$error = err, $temp$context = _List_Cons(fieldName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 1:
                    var i = error.a;
                    var err = error.b;
                    var indexName = "[" + ($elm$core$String$fromInt(i) + "]");
                    var $temp$error = err, $temp$context = _List_Cons(indexName, context);
                    error = $temp$error;
                    context = $temp$context;
                    continue errorToStringHelp;
                case 2:
                    var errors = error.a;
                    if (!errors.b) {
                        return "Ran into a Json.Decode.oneOf with no possibilities" + function () {
                            if (!context.b) {
                                return "!";
                            }
                            else {
                                return " at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                            }
                        }();
                    }
                    else {
                        if (!errors.b.b) {
                            var err = errors.a;
                            var $temp$error = err, $temp$context = context;
                            error = $temp$error;
                            context = $temp$context;
                            continue errorToStringHelp;
                        }
                        else {
                            var starter = function () {
                                if (!context.b) {
                                    return "Json.Decode.oneOf";
                                }
                                else {
                                    return "The Json.Decode.oneOf at json" + $elm$core$String$join_fn("", $elm$core$List$reverse(context));
                                }
                            }();
                            var introduction = starter + (" failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(errors)) + " ways:"));
                            return $elm$core$String$join_fn("\n\n", _List_Cons(introduction, $elm$core$List$indexedMap_fn($elm$json$Json$Decode$errorOneOf, errors)));
                        }
                    }
                default:
                    var msg = error.a;
                    var json = error.b;
                    var introduction = function () {
                        if (!context.b) {
                            return "Problem with the given value:\n\n";
                        }
                        else {
                            return "Problem with the value at json" + ($elm$core$String$join_fn("", $elm$core$List$reverse(context)) + ":\n\n    ");
                        }
                    }();
                    return introduction + ($elm$json$Json$Decode$indent(_Json_encode_fn(4, json)) + ("\n\n" + msg));
            }
        }
    }, $elm$json$Json$Decode$errorToStringHelp = F2($elm$json$Json$Decode$errorToStringHelp_fn);
    var $elm$core$Array$branchFactor = 32;
    var $elm$core$Array$Array_elm_builtin_fn = function (a, b, c, d) {
        return { $: 0, a: a, b: b, c: c, d: d };
    }, $elm$core$Array$Array_elm_builtin = F4($elm$core$Array$Array_elm_builtin_fn);
    var $elm$core$Elm$JsArray$empty = _JsArray_empty;
    var $elm$core$Basics$ceiling = _Basics_ceiling;
    var $elm$core$Basics$fdiv = _Basics_fdiv;
    var $elm$core$Basics$logBase_fn = function (base, number) {
        return _Basics_log(number) / _Basics_log(base);
    }, $elm$core$Basics$logBase = F2($elm$core$Basics$logBase_fn);
    var $elm$core$Basics$toFloat = _Basics_toFloat;
    var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling($elm$core$Basics$logBase_fn(2, $elm$core$Array$branchFactor));
    var $elm$core$Array$empty = $elm$core$Array$Array_elm_builtin_fn(0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
    var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
    var $elm$core$Array$Leaf = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Basics$apL_fn = function (f, x) {
        return f(x);
    }, $elm$core$Basics$apL = F2($elm$core$Basics$apL_fn);
    var $elm$core$Basics$apR_fn = function (x, f) {
        return f(x);
    }, $elm$core$Basics$apR = F2($elm$core$Basics$apR_fn);
    var $elm$core$Basics$eq = _Utils_equal;
    var $elm$core$Basics$floor = _Basics_floor;
    var $elm$core$Elm$JsArray$length = _JsArray_length;
    var $elm$core$Basics$gt = _Utils_gt;
    var $elm$core$Basics$max_fn = function (x, y) {
        return (_Utils_cmp(x, y) > 0) ? x : y;
    }, $elm$core$Basics$max = F2($elm$core$Basics$max_fn);
    var $elm$core$Basics$mul = _Basics_mul;
    var $elm$core$Array$SubTree = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
    var $elm$core$Array$compressNodes_fn = function (nodes, acc) {
        compressNodes: while (true) {
            var _v0 = _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodes);
            var node = _v0.a;
            var remainingNodes = _v0.b;
            var newAcc = _List_Cons($elm$core$Array$SubTree(node), acc);
            if (!remainingNodes.b) {
                return $elm$core$List$reverse(newAcc);
            }
            else {
                var $temp$nodes = remainingNodes, $temp$acc = newAcc;
                nodes = $temp$nodes;
                acc = $temp$acc;
                continue compressNodes;
            }
        }
    }, $elm$core$Array$compressNodes = F2($elm$core$Array$compressNodes_fn);
    var $elm$core$Tuple$first = function (_v0) {
        var x = _v0.a;
        return x;
    };
    var $elm$core$Array$treeFromBuilder_fn = function (nodeList, nodeListSize) {
        treeFromBuilder: while (true) {
            var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
            if (newNodeSize === 1) {
                return _JsArray_initializeFromList_fn($elm$core$Array$branchFactor, nodeList).a;
            }
            else {
                var $temp$nodeList = $elm$core$Array$compressNodes_fn(nodeList, _List_Nil), $temp$nodeListSize = newNodeSize;
                nodeList = $temp$nodeList;
                nodeListSize = $temp$nodeListSize;
                continue treeFromBuilder;
            }
        }
    }, $elm$core$Array$treeFromBuilder = F2($elm$core$Array$treeFromBuilder_fn);
    var $elm$core$Array$builderToArray_fn = function (reverseNodeList, builder) {
        if (!builder.u) {
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.B), $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, builder.B);
        }
        else {
            var treeLen = builder.u * $elm$core$Array$branchFactor;
            var depth = $elm$core$Basics$floor($elm$core$Basics$logBase_fn($elm$core$Array$branchFactor, treeLen - 1));
            var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.D) : builder.D;
            var tree = $elm$core$Array$treeFromBuilder_fn(correctNodeList, builder.u);
            return $elm$core$Array$Array_elm_builtin_fn($elm$core$Elm$JsArray$length(builder.B) + treeLen, $elm$core$Basics$max_fn(5, depth * $elm$core$Array$shiftStep), tree, builder.B);
        }
    }, $elm$core$Array$builderToArray = F2($elm$core$Array$builderToArray_fn);
    var $elm$core$Basics$idiv = _Basics_idiv;
    var $elm$core$Basics$lt = _Utils_lt;
    var $elm$core$Array$initializeHelp_fn = function (fn, fromIndex, len, nodeList, tail) {
        initializeHelp: while (true) {
            if (fromIndex < 0) {
                return $elm$core$Array$builderToArray_fn(false, { D: nodeList, u: (len / $elm$core$Array$branchFactor) | 0, B: tail });
            }
            else {
                var leaf = $elm$core$Array$Leaf(_JsArray_initialize_fn($elm$core$Array$branchFactor, fromIndex, fn));
                var $temp$fn = fn, $temp$fromIndex = fromIndex - $elm$core$Array$branchFactor, $temp$len = len, $temp$nodeList = _List_Cons(leaf, nodeList), $temp$tail = tail;
                fn = $temp$fn;
                fromIndex = $temp$fromIndex;
                len = $temp$len;
                nodeList = $temp$nodeList;
                tail = $temp$tail;
                continue initializeHelp;
            }
        }
    }, $elm$core$Array$initializeHelp = F5($elm$core$Array$initializeHelp_fn);
    var $elm$core$Basics$remainderBy = _Basics_remainderBy;
    var $elm$core$Array$initialize_fn = function (len, fn) {
        if (len <= 0) {
            return $elm$core$Array$empty;
        }
        else {
            var tailLen = len % $elm$core$Array$branchFactor;
            var tail = _JsArray_initialize_fn(tailLen, len - tailLen, fn);
            var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
            return $elm$core$Array$initializeHelp_fn(fn, initialFromIndex, len, _List_Nil, tail);
        }
    }, $elm$core$Array$initialize = F2($elm$core$Array$initialize_fn);
    var $elm$core$Result$isOk = function (result) {
        if (!result.$) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$json$Json$Decode$andThen = _Json_andThen;
    var $elm$core$Platform$Sub$batch = _Platform_batch;
    var $author$project$RequestsAndPending$Response_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$RequestsAndPending$Response = F2($author$project$RequestsAndPending$Response_fn);
    var $author$project$RequestsAndPending$BytesBody = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$RequestsAndPending$JsonBody = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$RequestsAndPending$StringBody = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$RequestsAndPending$WhateverBody = { $: 3 };
    var $elm$core$Basics$composeR_fn = function (f, g, x) {
        return g(f(x));
    }, $elm$core$Basics$composeR = F3($elm$core$Basics$composeR_fn);
    var $elm$json$Json$Decode$fail = _Json_fail;
    var $elm$json$Json$Decode$field = _Json_decodeField;
    var $elm$json$Json$Decode$map = _Json_map1;
    var $elm$core$Maybe$map_fn = function (f, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return $elm$core$Maybe$Just(f(value));
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$map = F2($elm$core$Maybe$map_fn);
    var $elm$json$Json$Decode$string = _Json_decodeString;
    var $elm$json$Json$Decode$succeed = _Json_succeed;
    var $elm$bytes$Bytes$Encode$getWidth = function (builder) {
        switch (builder.$) {
            case 0:
                return 1;
            case 1:
                return 2;
            case 2:
                return 4;
            case 3:
                return 1;
            case 4:
                return 2;
            case 5:
                return 4;
            case 6:
                return 4;
            case 7:
                return 8;
            case 8:
                var w = builder.a;
                return w;
            case 9:
                var w = builder.a;
                return w;
            default:
                var bs = builder.a;
                return _Bytes_width(bs);
        }
    };
    var $elm$bytes$Bytes$LE = 0;
    var $elm$bytes$Bytes$Encode$write_fn = function (builder, mb, offset) {
        switch (builder.$) {
            case 0:
                var n = builder.a;
                return _Bytes_write_i8_fn(mb, offset, n);
            case 1:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_i16_fn(mb, offset, n, !e);
            case 2:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_i32_fn(mb, offset, n, !e);
            case 3:
                var n = builder.a;
                return _Bytes_write_u8_fn(mb, offset, n);
            case 4:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_u16_fn(mb, offset, n, !e);
            case 5:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_u32_fn(mb, offset, n, !e);
            case 6:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_f32_fn(mb, offset, n, !e);
            case 7:
                var e = builder.a;
                var n = builder.b;
                return _Bytes_write_f64_fn(mb, offset, n, !e);
            case 8:
                var bs = builder.b;
                return $elm$bytes$Bytes$Encode$writeSequence_fn(bs, mb, offset);
            case 9:
                var s = builder.b;
                return _Bytes_write_string_fn(mb, offset, s);
            default:
                var bs = builder.a;
                return _Bytes_write_bytes_fn(mb, offset, bs);
        }
    }, $elm$bytes$Bytes$Encode$write = F3($elm$bytes$Bytes$Encode$write_fn);
    var $elm$bytes$Bytes$Encode$writeSequence_fn = function (builders, mb, offset) {
        writeSequence: while (true) {
            if (!builders.b) {
                return offset;
            }
            else {
                var b = builders.a;
                var bs = builders.b;
                var $temp$builders = bs, $temp$mb = mb, $temp$offset = $elm$bytes$Bytes$Encode$write_fn(b, mb, offset);
                builders = $temp$builders;
                mb = $temp$mb;
                offset = $temp$offset;
                continue writeSequence;
            }
        }
    }, $elm$bytes$Bytes$Encode$writeSequence = F3($elm$bytes$Bytes$Encode$writeSequence_fn);
    var $elm$bytes$Bytes$Encode$encode = _Bytes_encode;
    var $elm$core$String$length = _String_length;
    var $elm$core$String$slice = _String_slice;
    var $elm$core$String$dropLeft_fn = function (n, string) {
        return (n < 1) ? string : _String_slice_fn(n, $elm$core$String$length(string), string);
    }, $elm$core$String$dropLeft = F2($elm$core$String$dropLeft_fn);
    var $elm$bytes$Bytes$BE = 1;
    var $danfishgold$base64_bytes$Encode$isValidChar = function (c) {
        if ($elm$core$Char$isAlphaNum(c)) {
            return true;
        }
        else {
            switch (c) {
                case "+":
                    return true;
                case "/":
                    return true;
                default:
                    return false;
            }
        }
    };
    var $elm$core$Bitwise$or = _Bitwise_or;
    var $elm$bytes$Bytes$Encode$Seq_fn = function (a, b) {
        return { $: 8, a: a, b: b };
    }, $elm$bytes$Bytes$Encode$Seq = F2($elm$bytes$Bytes$Encode$Seq_fn);
    var $elm$bytes$Bytes$Encode$getWidths_fn = function (width, builders) {
        getWidths: while (true) {
            if (!builders.b) {
                return width;
            }
            else {
                var b = builders.a;
                var bs = builders.b;
                var $temp$width = width + $elm$bytes$Bytes$Encode$getWidth(b), $temp$builders = bs;
                width = $temp$width;
                builders = $temp$builders;
                continue getWidths;
            }
        }
    }, $elm$bytes$Bytes$Encode$getWidths = F2($elm$bytes$Bytes$Encode$getWidths_fn);
    var $elm$bytes$Bytes$Encode$sequence = function (builders) {
        return $elm$bytes$Bytes$Encode$Seq_fn($elm$bytes$Bytes$Encode$getWidths_fn(0, builders), builders);
    };
    var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
    var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
    var $elm$core$Basics$ge = _Utils_ge;
    var $elm$core$Basics$negate = function (n) {
        return -n;
    };
    var $danfishgold$base64_bytes$Encode$unsafeConvertChar = function (_char) {
        var key = $elm$core$Char$toCode(_char);
        if ((key >= 65) && (key <= 90)) {
            return key - 65;
        }
        else {
            if ((key >= 97) && (key <= 122)) {
                return (key - 97) + 26;
            }
            else {
                if ((key >= 48) && (key <= 57)) {
                    return ((key - 48) + 26) + 26;
                }
                else {
                    switch (_char) {
                        case "+":
                            return 62;
                        case "/":
                            return 63;
                        default:
                            return -1;
                    }
                }
            }
        }
    };
    var $elm$bytes$Bytes$Encode$U16_fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $elm$bytes$Bytes$Encode$U16 = F2($elm$bytes$Bytes$Encode$U16_fn);
    var $elm$bytes$Bytes$Encode$unsignedInt16 = $elm$bytes$Bytes$Encode$U16;
    var $elm$bytes$Bytes$Encode$U8 = function (a) {
        return { $: 3, a: a };
    };
    var $elm$bytes$Bytes$Encode$unsignedInt8 = $elm$bytes$Bytes$Encode$U8;
    var $danfishgold$base64_bytes$Encode$encodeCharacters_fn = function (a, b, c, d) {
        if ($danfishgold$base64_bytes$Encode$isValidChar(a) && $danfishgold$base64_bytes$Encode$isValidChar(b)) {
            var n2 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(b);
            var n1 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(a);
            if ("=" === d) {
                if ("=" === c) {
                    var n = (n1 << 18) | (n2 << 12);
                    var b1 = n >> 16;
                    return $elm$core$Maybe$Just($elm$bytes$Bytes$Encode$unsignedInt8(b1));
                }
                else {
                    if ($danfishgold$base64_bytes$Encode$isValidChar(c)) {
                        var n3 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(c);
                        var n = ((n1 << 18) | (n2 << 12)) | (n3 << 6);
                        var combined = n >> 8;
                        return $elm$core$Maybe$Just($elm$bytes$Bytes$Encode$U16_fn(1, combined));
                    }
                    else {
                        return $elm$core$Maybe$Nothing;
                    }
                }
            }
            else {
                if ($danfishgold$base64_bytes$Encode$isValidChar(c) && $danfishgold$base64_bytes$Encode$isValidChar(d)) {
                    var n4 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(d);
                    var n3 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(c);
                    var n = ((n1 << 18) | (n2 << 12)) | ((n3 << 6) | n4);
                    var combined = n >> 8;
                    var b3 = n;
                    return $elm$core$Maybe$Just($elm$bytes$Bytes$Encode$sequence(_List_fromArray([
                        $elm$bytes$Bytes$Encode$U16_fn(1, combined),
                        $elm$bytes$Bytes$Encode$unsignedInt8(b3)
                    ])));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $danfishgold$base64_bytes$Encode$encodeCharacters = F4($danfishgold$base64_bytes$Encode$encodeCharacters_fn);
    var $elm$core$String$left_fn = function (n, string) {
        return (n < 1) ? "" : _String_slice_fn(0, n, string);
    }, $elm$core$String$left = F2($elm$core$String$left_fn);
    var $elm$core$String$foldr = _String_foldr;
    var $elm$core$String$toList = function (string) {
        return _String_foldr_fn($elm$core$List$cons, _List_Nil, string);
    };
    var $danfishgold$base64_bytes$Encode$encodeChunks_fn = function (input, accum) {
        encodeChunks: while (true) {
            var _v0 = $elm$core$String$toList($elm$core$String$left_fn(4, input));
            _v0$4: while (true) {
                if (!_v0.b) {
                    return $elm$core$Maybe$Just(accum);
                }
                else {
                    if (_v0.b.b) {
                        if (_v0.b.b.b) {
                            if (_v0.b.b.b.b) {
                                if (!_v0.b.b.b.b.b) {
                                    var a = _v0.a;
                                    var _v1 = _v0.b;
                                    var b = _v1.a;
                                    var _v2 = _v1.b;
                                    var c = _v2.a;
                                    var _v3 = _v2.b;
                                    var d = _v3.a;
                                    var _v4 = $danfishgold$base64_bytes$Encode$encodeCharacters_fn(a, b, c, d);
                                    if (!_v4.$) {
                                        var enc = _v4.a;
                                        var $temp$input = $elm$core$String$dropLeft_fn(4, input), $temp$accum = _List_Cons(enc, accum);
                                        input = $temp$input;
                                        accum = $temp$accum;
                                        continue encodeChunks;
                                    }
                                    else {
                                        return $elm$core$Maybe$Nothing;
                                    }
                                }
                                else {
                                    break _v0$4;
                                }
                            }
                            else {
                                var a = _v0.a;
                                var _v5 = _v0.b;
                                var b = _v5.a;
                                var _v6 = _v5.b;
                                var c = _v6.a;
                                var _v7 = $danfishgold$base64_bytes$Encode$encodeCharacters_fn(a, b, c, "=");
                                if (_v7.$ === 1) {
                                    return $elm$core$Maybe$Nothing;
                                }
                                else {
                                    var enc = _v7.a;
                                    return $elm$core$Maybe$Just(_List_Cons(enc, accum));
                                }
                            }
                        }
                        else {
                            var a = _v0.a;
                            var _v8 = _v0.b;
                            var b = _v8.a;
                            var _v9 = $danfishgold$base64_bytes$Encode$encodeCharacters_fn(a, b, "=", "=");
                            if (_v9.$ === 1) {
                                return $elm$core$Maybe$Nothing;
                            }
                            else {
                                var enc = _v9.a;
                                return $elm$core$Maybe$Just(_List_Cons(enc, accum));
                            }
                        }
                    }
                    else {
                        break _v0$4;
                    }
                }
            }
            return $elm$core$Maybe$Nothing;
        }
    }, $danfishgold$base64_bytes$Encode$encodeChunks = F2($danfishgold$base64_bytes$Encode$encodeChunks_fn);
    var $danfishgold$base64_bytes$Encode$encoder = function (string) {
        return $elm$core$Maybe$map_fn(A2($elm$core$Basics$composeR, $elm$core$List$reverse, $elm$bytes$Bytes$Encode$sequence), $danfishgold$base64_bytes$Encode$encodeChunks_fn(string, _List_Nil));
    };
    var $danfishgold$base64_bytes$Encode$toBytes = function (string) {
        return $elm$core$Maybe$map_fn($elm$bytes$Bytes$Encode$encode, $danfishgold$base64_bytes$Encode$encoder(string));
    };
    var $danfishgold$base64_bytes$Base64$toBytes = $danfishgold$base64_bytes$Encode$toBytes;
    var $elm$json$Json$Decode$value = _Json_decodeValue;
    var $elm$core$Maybe$withDefault_fn = function (_default, maybe) {
        if (!maybe.$) {
            var value = maybe.a;
            return value;
        }
        else {
            return _default;
        }
    }, $elm$core$Maybe$withDefault = F2($elm$core$Maybe$withDefault_fn);
    var $author$project$RequestsAndPending$bodyDecoder = _Json_andThen_fn(function (bodyKind) {
        return _Json_decodeField_fn("body", function () {
            switch (bodyKind) {
                case "bytes":
                    return _Json_andThen_fn(function (base64String) {
                        return $elm$core$Maybe$withDefault_fn($elm$json$Json$Decode$fail("Couldn't parse base64 string into Bytes."), $elm$core$Maybe$map_fn(A2($elm$core$Basics$composeR, $author$project$RequestsAndPending$BytesBody, $elm$json$Json$Decode$succeed), $danfishgold$base64_bytes$Base64$toBytes(base64String)));
                    }, $elm$json$Json$Decode$string);
                case "string":
                    return _Json_map1_fn($author$project$RequestsAndPending$StringBody, $elm$json$Json$Decode$string);
                case "json":
                    return _Json_map1_fn($author$project$RequestsAndPending$JsonBody, $elm$json$Json$Decode$value);
                case "whatever":
                    return $elm$json$Json$Decode$succeed($author$project$RequestsAndPending$WhateverBody);
                default:
                    return $elm$json$Json$Decode$fail("Unexpected bodyKind.");
            }
        }());
    }, _Json_decodeField_fn("bodyKind", $elm$json$Json$Decode$string));
    var $elm$json$Json$Decode$map2 = _Json_map2;
    var $elm$json$Json$Decode$oneOf = _Json_oneOf;
    var $elm$json$Json$Decode$maybe = function (decoder) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_map1_fn($elm$core$Maybe$Just, decoder),
            $elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing)
        ]));
    };
    var $author$project$RequestsAndPending$RawResponse_fn = function (statusCode, statusText, headers, url) {
        return { eI: headers, aa: statusCode, bc: statusText, C: url };
    }, $author$project$RequestsAndPending$RawResponse = F4($author$project$RequestsAndPending$RawResponse_fn);
    var $elm$core$Dict$RBEmpty_elm_builtin = { $: -2 };
    var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
    var $elm$core$Dict$Black = 1;
    var $elm$core$Dict$RBNode_elm_builtin_fn = function (a, b, c, d, e) {
        return { $: -1, a: a, b: b, c: c, d: d, e: e };
    }, $elm$core$Dict$RBNode_elm_builtin = F5($elm$core$Dict$RBNode_elm_builtin_fn);
    var $elm$core$Dict$Red = 0;
    var $elm$core$Dict$balance_fn = function (color, key, value, left, right) {
        if ((right.$ === -1) && (!right.a)) {
            var _v1 = right.a;
            var rK = right.b;
            var rV = right.c;
            var rLeft = right.d;
            var rRight = right.e;
            if ((left.$ === -1) && (!left.a)) {
                var _v3 = left.a;
                var lK = left.b;
                var lV = left.c;
                var lLeft = left.d;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBNode_elm_builtin_fn(1, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, rK, rV, rLeft, rRight));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, rK, rV, $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, left, rLeft), rRight);
            }
        }
        else {
            if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
                var _v5 = left.a;
                var lK = left.b;
                var lV = left.c;
                var _v6 = left.d;
                var _v7 = _v6.a;
                var llK = _v6.b;
                var llV = _v6.c;
                var llLeft = _v6.d;
                var llRight = _v6.e;
                var lRight = left.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_fn(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, key, value, lRight, right));
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, left, right);
            }
        }
    }, $elm$core$Dict$balance = F5($elm$core$Dict$balance_fn);
    var $elm$core$Basics$compare = _Utils_compare;
    var $elm$core$Dict$insertHelp_fn = function (key, value, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
        }
        else {
            var nColor = dict.a;
            var nKey = dict.b;
            var nValue = dict.c;
            var nLeft = dict.d;
            var nRight = dict.e;
            var _v1 = _Utils_compare_fn(key, nKey);
            switch (_v1) {
                case 0:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$insertHelp_fn(key, value, nLeft), nRight);
                case 1:
                    return $elm$core$Dict$RBNode_elm_builtin_fn(nColor, nKey, value, nLeft, nRight);
                default:
                    return $elm$core$Dict$balance_fn(nColor, nKey, nValue, nLeft, $elm$core$Dict$insertHelp_fn(key, value, nRight));
            }
        }
    }, $elm$core$Dict$insertHelp = F3($elm$core$Dict$insertHelp_fn);
    var $elm$core$Dict$insert_fn = function (key, value, dict) {
        var _v0 = $elm$core$Dict$insertHelp_fn(key, value, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$insert = F3($elm$core$Dict$insert_fn);
    var $elm$core$Dict$fromList = function (assocs) {
        return $elm$core$List$foldl_fn_unwrapped(function (_v0, dict) {
            var key = _v0.a;
            var value = _v0.b;
            return $elm$core$Dict$insert_fn(key, value, dict);
        }, $elm$core$Dict$empty, assocs);
    };
    var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
    var $elm$json$Json$Decode$dict = function (decoder) {
        return _Json_map1_fn($elm$core$Dict$fromList, $elm$json$Json$Decode$keyValuePairs(decoder));
    };
    var $elm$json$Json$Decode$int = _Json_decodeInt;
    var $elm$json$Json$Decode$map4 = _Json_map4;
    var $author$project$RequestsAndPending$responseDecoder = _Json_map4_fn($author$project$RequestsAndPending$RawResponse, _Json_decodeField_fn("statusCode", $elm$json$Json$Decode$int), _Json_decodeField_fn("statusText", $elm$json$Json$Decode$string), _Json_decodeField_fn("headers", $elm$json$Json$Decode$dict($elm$json$Json$Decode$string)), _Json_decodeField_fn("url", $elm$json$Json$Decode$string));
    var $author$project$RequestsAndPending$decoder = _Json_map2_fn($author$project$RequestsAndPending$Response, $elm$json$Json$Decode$maybe($author$project$RequestsAndPending$responseDecoder), $author$project$RequestsAndPending$bodyDecoder);
    var $elm$json$Json$Decode$list = _Json_decodeList;
    var $author$project$Pages$StaticHttp$Request$Request_fn = function (url, method, headers, body) {
        return { er: body, eI: headers, eW: method, C: url };
    }, $author$project$Pages$StaticHttp$Request$Request = F4($author$project$Pages$StaticHttp$Request$Request_fn);
    var $elm$core$Basics$identity = function (x) {
        return x;
    };
    var $miniBill$elm_codec$Codec$Codec = $elm$core$Basics$identity;
    var $elm$json$Json$Encode$object = function (pairs) {
        return _Json_wrap($elm$core$List$foldl_fn_unwrapped(function (_v0, obj) {
            var k = _v0.a;
            var v = _v0.b;
            return _Json_addField_fn(k, v, obj);
        }, _Json_emptyObject(0), pairs));
    };
    var $miniBill$elm_codec$Codec$buildObject = function (_v0) {
        var om = _v0;
        return {
            fS: om.fS,
            h: function (v) {
                return $elm$json$Json$Encode$object(om.h(v));
            }
        };
    };
    var $author$project$Pages$Internal$StaticHttpBody$EmptyBody = { $: 0 };
    var $author$project$Pages$Internal$StaticHttpBody$JsonBody = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Pages$Internal$StaticHttpBody$StringBody_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $author$project$Pages$Internal$StaticHttpBody$StringBody = F2($author$project$Pages$Internal$StaticHttpBody$StringBody_fn);
    var $elm$core$Dict$get_fn = function (targetKey, dict) {
        get: while (true) {
            if (dict.$ === -2) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var _v1 = _Utils_compare_fn(targetKey, key);
                switch (_v1) {
                    case 0:
                        var $temp$targetKey = targetKey, $temp$dict = left;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                    case 1:
                        return $elm$core$Maybe$Just(value);
                    default:
                        var $temp$targetKey = targetKey, $temp$dict = right;
                        targetKey = $temp$targetKey;
                        dict = $temp$dict;
                        continue get;
                }
            }
        }
    }, $elm$core$Dict$get = F2($elm$core$Dict$get_fn);
    var $miniBill$elm_codec$Codec$buildCustom = function (_v0) {
        var am = _v0;
        return {
            fS: _Json_andThen_fn(function (tag) {
                var _v1 = $elm$core$Dict$get_fn(tag, am.fS);
                if (_v1.$ === 1) {
                    return $elm$json$Json$Decode$fail("tag " + (tag + "did not match"));
                }
                else {
                    var dec = _v1.a;
                    return _Json_decodeField_fn("args", dec);
                }
            }, _Json_decodeField_fn("tag", $elm$json$Json$Decode$string)),
            h: function (v) {
                return am.eV(v);
            }
        };
    };
    var $miniBill$elm_codec$Codec$CustomCodec = $elm$core$Basics$identity;
    var $miniBill$elm_codec$Codec$custom = function (match) {
        return { fS: $elm$core$Dict$empty, eV: match };
    };
    var $miniBill$elm_codec$Codec$build_fn = function (encoder_, decoder_) {
        return { fS: decoder_, h: encoder_ };
    }, $miniBill$elm_codec$Codec$build = F2($miniBill$elm_codec$Codec$build_fn);
    var $elm$json$Json$Encode$string = _Json_wrap;
    var $miniBill$elm_codec$Codec$string = $miniBill$elm_codec$Codec$build_fn($elm$json$Json$Encode$string, $elm$json$Json$Decode$string);
    var $miniBill$elm_codec$Codec$value = { fS: $elm$json$Json$Decode$value, h: $elm$core$Basics$identity };
    var $elm$json$Json$Encode$list_fn = function (func, entries) {
        return _Json_wrap($elm$core$List$foldl_fn(_Json_addEntry(func), _Json_emptyArray(0), entries));
    }, $elm$json$Json$Encode$list = F2($elm$json$Json$Encode$list_fn);
    var $miniBill$elm_codec$Codec$variant_fn = function (name, matchPiece, decoderPiece, _v0) {
        var am = _v0;
        var enc = function (v) {
            return $elm$json$Json$Encode$object(_List_fromArray([
                _Utils_Tuple2("tag", $elm$json$Json$Encode$string(name)),
                _Utils_Tuple2("args", $elm$json$Json$Encode$list_fn($elm$core$Basics$identity, v))
            ]));
        };
        return {
            fS: $elm$core$Dict$insert_fn(name, decoderPiece, am.fS),
            eV: am.eV(matchPiece(enc))
        };
    }, $miniBill$elm_codec$Codec$variant = F4($miniBill$elm_codec$Codec$variant_fn);
    var $miniBill$elm_codec$Codec$variant0_fn = function (name, ctor) {
        return A3($miniBill$elm_codec$Codec$variant, name, function (c) {
            return c(_List_Nil);
        }, $elm$json$Json$Decode$succeed(ctor));
    }, $miniBill$elm_codec$Codec$variant0 = F2($miniBill$elm_codec$Codec$variant0_fn);
    var $miniBill$elm_codec$Codec$decoder = function (_v0) {
        var m = _v0;
        return m.fS;
    };
    var $miniBill$elm_codec$Codec$encoder = function (_v0) {
        var m = _v0;
        return m.h;
    };
    var $elm$json$Json$Decode$index = _Json_decodeIndex;
    var $miniBill$elm_codec$Codec$variant1_fn = function (name, ctor, m1) {
        return A3($miniBill$elm_codec$Codec$variant, name, F2(function (c, v) {
            return c(_List_fromArray([
                A2($miniBill$elm_codec$Codec$encoder, m1, v)
            ]));
        }), _Json_map1_fn(ctor, _Json_decodeIndex_fn(0, $miniBill$elm_codec$Codec$decoder(m1))));
    }, $miniBill$elm_codec$Codec$variant1 = F3($miniBill$elm_codec$Codec$variant1_fn);
    var $miniBill$elm_codec$Codec$variant2_fn = function (name, ctor, m1, m2) {
        return A3($miniBill$elm_codec$Codec$variant, name, F3(function (c, v1, v2) {
            return c(_List_fromArray([
                A2($miniBill$elm_codec$Codec$encoder, m1, v1),
                A2($miniBill$elm_codec$Codec$encoder, m2, v2)
            ]));
        }), _Json_map2_fn(ctor, _Json_decodeIndex_fn(0, $miniBill$elm_codec$Codec$decoder(m1)), _Json_decodeIndex_fn(1, $miniBill$elm_codec$Codec$decoder(m2))));
    }, $miniBill$elm_codec$Codec$variant2 = F4($miniBill$elm_codec$Codec$variant2_fn);
    var $author$project$Pages$Internal$StaticHttpBody$codec = $miniBill$elm_codec$Codec$buildCustom(A4($miniBill$elm_codec$Codec$variant1, "JsonBody", $author$project$Pages$Internal$StaticHttpBody$JsonBody, $miniBill$elm_codec$Codec$value, A5($miniBill$elm_codec$Codec$variant2, "StringBody", $author$project$Pages$Internal$StaticHttpBody$StringBody, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$string, A3($miniBill$elm_codec$Codec$variant0, "EmptyBody", $author$project$Pages$Internal$StaticHttpBody$EmptyBody, $miniBill$elm_codec$Codec$custom(F4(function (vEmpty, vString, vJson, value) {
        switch (value.$) {
            case 0:
                return vEmpty;
            case 1:
                var a = value.a;
                var b = value.b;
                return A2(vString, a, b);
            default:
                var body = value.a;
                return vJson(body);
        }
    }))))));
    var $miniBill$elm_codec$Codec$ObjectCodec = $elm$core$Basics$identity;
    var $miniBill$elm_codec$Codec$field_fn = function (name, getter, codec, _v0) {
        var ocodec = _v0;
        return {
            fS: _Json_map2_fn(F2(function (f, x) {
                return f(x);
            }), ocodec.fS, _Json_decodeField_fn(name, $miniBill$elm_codec$Codec$decoder(codec))),
            h: function (v) {
                return _List_Cons(_Utils_Tuple2(name, A2($miniBill$elm_codec$Codec$encoder, codec, getter(v))), ocodec.h(v));
            }
        };
    }, $miniBill$elm_codec$Codec$field = F4($miniBill$elm_codec$Codec$field_fn);
    var $miniBill$elm_codec$Codec$composite_fn = function (enc, dec, _v0) {
        var codec = _v0;
        return {
            fS: dec(codec.fS),
            h: enc(codec.h)
        };
    }, $miniBill$elm_codec$Codec$composite = F3($miniBill$elm_codec$Codec$composite_fn);
    var $miniBill$elm_codec$Codec$list_a0 = $elm$json$Json$Encode$list, $miniBill$elm_codec$Codec$list_a1 = $elm$json$Json$Decode$list, $miniBill$elm_codec$Codec$list = A2($miniBill$elm_codec$Codec$composite, $miniBill$elm_codec$Codec$list_a0, $miniBill$elm_codec$Codec$list_a1);
    var $miniBill$elm_codec$Codec$object = function (ctor) {
        return {
            fS: $elm$json$Json$Decode$succeed(ctor),
            h: function (_v0) {
                return _List_Nil;
            }
        };
    };
    var $miniBill$elm_codec$Codec$tuple_fn = function (m1, m2) {
        return {
            fS: _Json_map2_fn(F2(function (a, b) {
                return _Utils_Tuple2(a, b);
            }), _Json_decodeIndex_fn(0, $miniBill$elm_codec$Codec$decoder(m1)), _Json_decodeIndex_fn(1, $miniBill$elm_codec$Codec$decoder(m2))),
            h: function (_v0) {
                var v1 = _v0.a;
                var v2 = _v0.b;
                return $elm$json$Json$Encode$list_fn($elm$core$Basics$identity, _List_fromArray([
                    A2($miniBill$elm_codec$Codec$encoder, m1, v1),
                    A2($miniBill$elm_codec$Codec$encoder, m2, v2)
                ]));
            }
        };
    }, $miniBill$elm_codec$Codec$tuple = F2($miniBill$elm_codec$Codec$tuple_fn);
    var $author$project$Pages$StaticHttp$Request$codec = $miniBill$elm_codec$Codec$buildObject($miniBill$elm_codec$Codec$field_fn("body", function ($) {
        return $.er;
    }, $author$project$Pages$Internal$StaticHttpBody$codec, $miniBill$elm_codec$Codec$field_fn("headers", function ($) {
        return $.eI;
    }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$list_a0, $miniBill$elm_codec$Codec$list_a1, $miniBill$elm_codec$Codec$tuple_fn($miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$string)), $miniBill$elm_codec$Codec$field_fn("method", function ($) {
        return $.eW;
    }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$field_fn("url", function ($) {
        return $.C;
    }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$object($author$project$Pages$StaticHttp$Request$Request))))));
    var $author$project$Pages$Internal$Platform$Cli$requestDecoder = $miniBill$elm_codec$Codec$decoder($author$project$Pages$StaticHttp$Request$codec);
    var $author$project$Pages$Internal$Platform$Cli$batchDecoder = $elm$json$Json$Decode$list(_Json_map2_fn(F2(function (request, response) {
        return { dM: request, dN: response };
    }), _Json_decodeField_fn("request", $author$project$Pages$Internal$Platform$Cli$requestDecoder), _Json_decodeField_fn("response", $author$project$RequestsAndPending$decoder)));
    var $elm$json$Json$Decode$decodeValue = _Json_run;
    var $author$project$RenderRequest$HtmlAndJson = 0;
    var $author$project$RenderRequest$OnlyJson = 1;
    var $author$project$RenderRequest$SinglePage_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $author$project$RenderRequest$SinglePage = F3($author$project$RenderRequest$SinglePage_fn);
    var $elm$json$Json$Decode$bool = _Json_decodeBool;
    var $elm$json$Json$Decode$map3 = _Json_map3;
    var $author$project$RenderRequest$Api = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$RenderRequest$NotFound = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$RenderRequest$Page = function (a) {
        return { $: 0, a: a };
    };
    var $elm$regex$Regex$Match_fn = function (match, index, number, submatches) {
        return { a: index, eV: match, eZ: number, gz: submatches };
    }, $elm$regex$Regex$Match = F4($elm$regex$Regex$Match_fn);
    var $elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
    var $elm$regex$Regex$fromString = function (string) {
        return _Regex_fromStringWith_fn({ gL: false, hd: false }, string);
    };
    var $elm$regex$Regex$never = _Regex_never;
    var $elm$regex$Regex$replace_a0 = _Regex_infinity, $elm$regex$Regex$replace = _Regex_replaceAtMost($elm$regex$Regex$replace_a0);
    var $author$project$RenderRequest$dropTrailingIndexHtml = A2($elm$regex$Regex$replace, $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("/index\\.html$")), function (_v0) {
        return "";
    });
    var $author$project$Internal$ApiRoute$ApiRoute = $elm$core$Basics$identity;
    var $elm$regex$Regex$contains = _Regex_contains;
    var $author$project$Internal$ApiRoute$tryMatchDone_fn = function (path, _v0) {
        var handler = _v0;
        return _Regex_contains_fn(handler.f0, path) ? $elm$core$Maybe$Just(handler) : $elm$core$Maybe$Nothing;
    }, $author$project$Internal$ApiRoute$tryMatchDone = F2($author$project$Internal$ApiRoute$tryMatchDone_fn);
    var $author$project$Internal$ApiRoute$firstMatch_fn = function (path, handlers) {
        firstMatch: while (true) {
            if (!handlers.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var first = handlers.a;
                var rest = handlers.b;
                var _v1 = $author$project$Internal$ApiRoute$tryMatchDone_fn(path, first);
                if (!_v1.$) {
                    var response = _v1.a;
                    return $elm$core$Maybe$Just(response);
                }
                else {
                    var $temp$path = path, $temp$handlers = rest;
                    path = $temp$path;
                    handlers = $temp$handlers;
                    continue firstMatch;
                }
            }
        }
    }, $author$project$Internal$ApiRoute$firstMatch = F2($author$project$Internal$ApiRoute$firstMatch_fn);
    var $author$project$Path$Path = $elm$core$Basics$identity;
    var $elm$core$String$dropRight_fn = function (n, string) {
        return (n < 1) ? string : _String_slice_fn(0, -n, string);
    }, $elm$core$String$dropRight = F2($elm$core$String$dropRight_fn);
    var $elm$core$String$endsWith = _String_endsWith;
    var $author$project$Pages$Internal$String$chopEnd_fn = function (needle, string) {
        chopEnd: while (true) {
            if (_String_endsWith_fn(needle, string)) {
                var $temp$needle = needle, $temp$string = $elm$core$String$dropRight_fn($elm$core$String$length(needle), string);
                needle = $temp$needle;
                string = $temp$string;
                continue chopEnd;
            }
            else {
                return string;
            }
        }
    }, $author$project$Pages$Internal$String$chopEnd = F2($author$project$Pages$Internal$String$chopEnd_fn);
    var $elm$core$String$startsWith = _String_startsWith;
    var $author$project$Pages$Internal$String$chopStart_fn = function (needle, string) {
        chopStart: while (true) {
            if (_String_startsWith_fn(needle, string)) {
                var $temp$needle = needle, $temp$string = $elm$core$String$dropLeft_fn($elm$core$String$length(needle), string);
                needle = $temp$needle;
                string = $temp$string;
                continue chopStart;
            }
            else {
                return string;
            }
        }
    }, $author$project$Pages$Internal$String$chopStart = F2($author$project$Pages$Internal$String$chopStart_fn);
    var $author$project$Path$normalize = function (pathPart) {
        return $author$project$Pages$Internal$String$chopStart_fn("/", $author$project$Pages$Internal$String$chopEnd_fn("/", pathPart));
    };
    var $author$project$Path$fromString = function (path) {
        return $author$project$Path$normalize(path);
    };
    var $elm$virtual_dom$VirtualDom$Normal = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$HtmlPrinter$asJsonView = function (x) {
        return  _HtmlAsJson_toJson(x)
}

              var virtualDomKernelConstants =
  {
    nodeTypeTagger: 4,
    nodeTypeThunk: 5,
    kids: "e",
    refs: "l",
    thunk: "m",
    node: "k",
    value: "a"
  }

function forceThunks(vNode) {
  if (typeof vNode !== "undefined" && vNode.$ === "#2") {
    // This is a tuple (the kids : List (String, Html) field of a Keyed node); recurse into the right side of the tuple
    vNode.b = forceThunks(vNode.b);
  }
  if (typeof vNode !== 'undefined' && vNode.$ === virtualDomKernelConstants.nodeTypeThunk && !vNode[virtualDomKernelConstants.node]) {
    // This is a lazy node; evaluate it
    var args = vNode[virtualDomKernelConstants.thunk];
    vNode[virtualDomKernelConstants.node] = vNode[virtualDomKernelConstants.thunk].apply(args);
    // And then recurse into the evaluated node
    vNode[virtualDomKernelConstants.node] = forceThunks(vNode[virtualDomKernelConstants.node]);
  }
  if (typeof vNode !== 'undefined' && vNode.$ === virtualDomKernelConstants.nodeTypeTagger) {
    // This is an Html.map; recurse into the node it is wrapping
    vNode[virtualDomKernelConstants.node] = forceThunks(vNode[virtualDomKernelConstants.node]);
  }
  if (typeof vNode !== 'undefined' && typeof vNode[virtualDomKernelConstants.kids] !== 'undefined') {
    // This is something with children (either a node with kids : List Html, or keyed with kids : List (String, Html));
    // recurse into the children
    vNode[virtualDomKernelConstants.kids] = vNode[virtualDomKernelConstants.kids].map(forceThunks);
  }
  return vNode;
}

function _HtmlAsJson_toJson(html) {

return forceThunks(html);
;
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext = F2($author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord_fn = function (tag, children, facts, descendantsCount) {
        return { et: children, b$: descendantsCount, s: facts, cg: tag };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord = F4($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$TextTag = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$List$foldrHelper_fn = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return A2(fn, a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return A2(fn, a, A2(fn, b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return A2(fn, a, A2(fn, b, A2(fn, c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn(fn, acc, ctr + 1, r4);
                        return A2(fn, a, A2(fn, b, A2(fn, c, A2(fn, d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper_fn_unwrapped = function (fn, acc, ctr, ls) {
        if (!ls.b) {
            return acc;
        }
        else {
            var a = ls.a;
            var r1 = ls.b;
            if (!r1.b) {
                return fn(a, acc);
            }
            else {
                var b = r1.a;
                var r2 = r1.b;
                if (!r2.b) {
                    return fn(a, fn(b, acc));
                }
                else {
                    var c = r2.a;
                    var r3 = r2.b;
                    if (!r3.b) {
                        return fn(a, fn(b, fn(c, acc)));
                    }
                    else {
                        var d = r3.a;
                        var r4 = r3.b;
                        var res = (ctr > 500) ? $elm$core$List$foldl_fn_unwrapped(fn, acc, $elm$core$List$reverse(r4)) : $elm$core$List$foldrHelper_fn_unwrapped(fn, acc, ctr + 1, r4);
                        return fn(a, fn(b, fn(c, fn(d, res))));
                    }
                }
            }
        }
    }, $elm$core$List$foldrHelper = F4($elm$core$List$foldrHelper_fn);
    var $elm$core$List$foldr_fn = function (fn, acc, ls) {
        return $elm$core$List$foldrHelper_fn(fn, acc, 0, ls);
    }, $elm$core$List$foldr = F3($elm$core$List$foldr_fn);
    var $elm$json$Json$Decode$at_fn = function (fields, decoder) {
        return $elm$core$List$foldr_fn($elm$json$Json$Decode$field, decoder, fields);
    }, $elm$json$Json$Decode$at = F2($elm$json$Json$Decode$at_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNode = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord_fn = function (facts, model) {
        return { s: facts, aV: model };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord = F2($author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$Facts_fn = function (styles, events, attributeNamespace, stringAttributes, boolAttributes) {
        return { cr: attributeNamespace, cw: boolAttributes, cX: events, dW: stringAttributes, dX: styles };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$Facts = F5($author$project$Test$Html$Internal$ElmHtml$InternalTypes$Facts_fn);
    var $author$project$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey = "a4";
    var $author$project$Test$Html$Internal$ElmHtml$Constants$eventKey = "a0";
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeEvents = function (taggedEventDecoder) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_decodeField_fn($author$project$Test$Html$Internal$ElmHtml$Constants$eventKey, $elm$json$Json$Decode$dict(_Json_map1_fn(taggedEventDecoder, $elm$json$Json$Decode$value))),
            $elm$json$Json$Decode$succeed($elm$core$Dict$empty)
        ]));
    };
    var $author$project$Test$Html$Internal$ElmHtml$Constants$attributeKey = "a3";
    var $elm$core$List$maybeCons_fn = function (f, mx, xs) {
        var _v0 = f(mx);
        if (!_v0.$) {
            var x = _v0.a;
            return _List_Cons(x, xs);
        }
        else {
            return xs;
        }
    }, $elm$core$List$maybeCons = F3($elm$core$List$maybeCons_fn);
    var $elm$core$List$filterMap_fn = function (f, xs) {
        return $elm$core$List$foldr_fn($elm$core$List$maybeCons(f), _List_Nil, xs);
    }, $elm$core$List$filterMap = F2($elm$core$List$filterMap_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap = function (decoder) {
        return _Json_map1_fn(A2($elm$core$Basics$composeR, $elm$core$Dict$toList, A2($elm$core$Basics$composeR, $elm$core$List$filterMap(function (_v0) {
            var key = _v0.a;
            var value = _v0.b;
            var _v1 = _Json_run_fn(decoder, value);
            if (_v1.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var v = _v1.a;
                return $elm$core$Maybe$Just(_Utils_Tuple2(key, v));
            }
        }), $elm$core$Dict$fromList)), $elm$json$Json$Decode$dict($elm$json$Json$Decode$value));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeAttributes = function (decoder) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_decodeField_fn($author$project$Test$Html$Internal$ElmHtml$Constants$attributeKey, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap(decoder)),
            $elm$json$Json$Decode$succeed($elm$core$Dict$empty)
        ]));
    };
    var $elm$core$Dict$foldl_fn = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = A3(func, key, value, $elm$core$Dict$foldl_fn(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl_fn_unwrapped = function (func, acc, dict) {
        foldl: while (true) {
            if (dict.$ === -2) {
                return acc;
            }
            else {
                var key = dict.b;
                var value = dict.c;
                var left = dict.d;
                var right = dict.e;
                var $temp$func = func, $temp$acc = func(key, value, $elm$core$Dict$foldl_fn_unwrapped(func, acc, left)), $temp$dict = right;
                func = $temp$func;
                acc = $temp$acc;
                dict = $temp$dict;
                continue foldl;
            }
        }
    }, $elm$core$Dict$foldl = F3($elm$core$Dict$foldl_fn);
    var $elm$core$Dict$filter_fn = function (isGood, dict) {
        return $elm$core$Dict$foldl_fn_unwrapped(function (k, v, d) {
            return A2(isGood, k, v) ? $elm$core$Dict$insert_fn(k, v, d) : d;
        }, $elm$core$Dict$empty, dict);
    }, $elm$core$Dict$filter_fn_unwrapped = function (isGood, dict) {
        return $elm$core$Dict$foldl_fn_unwrapped(function (k, v, d) {
            return isGood(k, v) ? $elm$core$Dict$insert_fn(k, v, d) : d;
        }, $elm$core$Dict$empty, dict);
    }, $elm$core$Dict$filter = F2($elm$core$Dict$filter_fn);
    var $author$project$Test$Html$Internal$ElmHtml$Constants$styleKey = "a1";
    var $author$project$Test$Html$Internal$ElmHtml$Constants$knownKeys = _List_fromArray([$author$project$Test$Html$Internal$ElmHtml$Constants$styleKey, $author$project$Test$Html$Internal$ElmHtml$Constants$eventKey, $author$project$Test$Html$Internal$ElmHtml$Constants$attributeKey, $author$project$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey]);
    var $elm$core$List$any_fn = function (isOkay, list) {
        any: while (true) {
            if (!list.b) {
                return false;
            }
            else {
                var x = list.a;
                var xs = list.b;
                if (isOkay(x)) {
                    return true;
                }
                else {
                    var $temp$isOkay = isOkay, $temp$list = xs;
                    isOkay = $temp$isOkay;
                    list = $temp$list;
                    continue any;
                }
            }
        }
    }, $elm$core$List$any = F2($elm$core$List$any_fn);
    var $elm$core$List$member_fn = function (x, xs) {
        return $elm$core$List$any_fn(function (a) {
            return _Utils_eq(a, x);
        }, xs);
    }, $elm$core$List$member = F2($elm$core$List$member_fn);
    var $elm$core$Basics$not = _Basics_not;
    var $author$project$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys_a0 = F2(function (key, _v0) {
        return !$elm$core$List$member_fn(key, $author$project$Test$Html$Internal$ElmHtml$Constants$knownKeys);
    }), $author$project$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys = $elm$core$Dict$filter($author$project$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys_a0);
    var $elm$core$Dict$union_fn = function (t1, t2) {
        return $elm$core$Dict$foldl_fn($elm$core$Dict$insert, t2, t1);
    }, $elm$core$Dict$union = F2($elm$core$Dict$union_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers = function (otherDecoder) {
        return _Json_andThen_fn(function (attributes) {
            return _Json_map1_fn(A2($elm$core$Basics$composeR, $author$project$Test$Html$Internal$ElmHtml$Helpers$filterKnownKeys, $elm$core$Dict$union(attributes)), $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeDictFilterMap(otherDecoder));
        }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeAttributes(otherDecoder));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeStyles = $elm$json$Json$Decode$oneOf(_List_fromArray([
        _Json_decodeField_fn($author$project$Test$Html$Internal$ElmHtml$Constants$styleKey, $elm$json$Json$Decode$dict($elm$json$Json$Decode$string)),
        $elm$json$Json$Decode$succeed($elm$core$Dict$empty)
    ]));
    var $elm$json$Json$Decode$map5 = _Json_map5;
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts = function (_v0) {
        var taggers = _v0.a;
        var eventDecoder = _v0.b;
        return _Json_map5_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$Facts, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeStyles, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeEvents(eventDecoder(taggers)), $elm$json$Json$Decode$maybe(_Json_decodeField_fn($author$project$Test$Html$Internal$ElmHtml$Constants$attributeNamespaceKey, $elm$json$Json$Decode$value)), $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$string), $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeOthers($elm$json$Json$Decode$bool));
    };
    var $author$project$Test$Internal$KernelConstants$kernelConstants = {
        bF: { bF: "b", e$: "a" },
        l: { b$: "b", s: "d", gk: "e", aV: "g", go: "k", hf: "$", hg: 3, hh: 2, hi: 1, hj: 4, hk: 0, hl: 5, hA: "l", cg: "c", hQ: "j", ch: "a" }
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNodeRecord = function (context) {
        return _Json_map2_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNodeRecord, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.s, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.aV, $elm$json$Json$Decode$value));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord_fn = function (facts, model) {
        return { s: facts, aV: model };
    }, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord = F2($author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord_fn);
    var $author$project$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel_fn = function (options, markdown) {
        return { bF: markdown, e$: options };
    }, $author$project$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel = F2($author$project$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel_fn);
    var $author$project$Test$Html$Internal$ElmHtml$Markdown$baseMarkdownModel = {
        bF: "",
        e$: {
            cJ: $elm$core$Maybe$Nothing,
            c4: $elm$core$Maybe$Just({ es: false, fn: false }),
            dO: false,
            dR: false
        }
    };
    var $author$project$Test$Html$Internal$ElmHtml$Markdown$decodeMarkdownModel = _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$Markdown$MarkdownModel($author$project$Test$Html$Internal$ElmHtml$Markdown$baseMarkdownModel.e$), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.bF.bF, $elm$json$Json$Decode$string));
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeMarkdownNodeRecord = function (context) {
        return _Json_map2_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNodeRecord, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.s, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.aV, $author$project$Test$Html$Internal$ElmHtml$Markdown$decodeMarkdownModel));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNode = function (context) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$MarkdownNode, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeMarkdownNodeRecord(context)),
            _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$CustomNode, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNodeRecord(context))
        ]));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeTextTag = _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.ch, _Json_andThen_fn(function (text) {
        return $elm$json$Json$Decode$succeed({ ch: text });
    }, $elm$json$Json$Decode$string));
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml = function (context) {
        return _Json_andThen_fn(function (nodeType) {
            return _Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.l.hk) ? _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$TextTag, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeTextTag) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.l.hh) ? _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeKeyedNode(context)) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.l.hi) ? _Json_map1_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeEntry, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeNode(context)) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.l.hg) ? $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeCustomNode(context) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.l.hj) ? $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeTagger(context) : (_Utils_eq(nodeType, $author$project$Test$Internal$KernelConstants$kernelConstants.l.hl) ? _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.go, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context)) : $elm$json$Json$Decode$fail("No such type as " + $elm$core$String$fromInt(nodeType)))))));
        }, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.hf, $elm$json$Json$Decode$int));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeKeyedNode = function (context) {
        var decodeSecondNode = _Json_decodeField_fn("b", $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context));
        return _Json_map4_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.cg, $elm$json$Json$Decode$string), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.gk, $elm$json$Json$Decode$list(decodeSecondNode)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.s, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.b$, $elm$json$Json$Decode$int));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeNode = function (context) {
        return _Json_map4_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$NodeRecord, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.cg, $elm$json$Json$Decode$string), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.gk, $elm$json$Json$Decode$list($author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml(context))), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.s, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeFacts(context)), _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.b$, $elm$json$Json$Decode$int));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeTagger = function (_v0) {
        var taggers = _v0.a;
        var eventDecoder = _v0.b;
        return _Json_andThen_fn(function (tagger) {
            var nodeDecoder = $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml($author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext_fn(_Utils_ap(taggers, _List_fromArray([tagger])), eventDecoder));
            return $elm$json$Json$Decode$at_fn(_List_fromArray([$author$project$Test$Internal$KernelConstants$kernelConstants.l.go]), nodeDecoder);
        }, _Json_decodeField_fn($author$project$Test$Internal$KernelConstants$kernelConstants.l.hQ, $elm$json$Json$Decode$value));
    };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeElmHtml = function (eventDecoder) {
        return $author$project$Test$Html$Internal$ElmHtml$InternalTypes$contextDecodeElmHtml($author$project$Test$Html$Internal$ElmHtml$InternalTypes$HtmlContext_fn(_List_Nil, eventDecoder));
    };
    var $author$project$Test$Html$Internal$ElmHtml$ToString$defaultFormatOptions = { b4: 0, ca: false };
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$RawTextElements = 1;
    var $elm$core$List$append_fn = function (xs, ys) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs = xs.b) {
            var next = _List_Cons(xs.a, _List_Nil);
            end.b = next;
            end = next;
        }
        end.b = ys;
        return tmp.b;
    }, $elm$core$List$append = F2($elm$core$List$append_fn);
    var $elm$core$List$concat = function (lists) {
        if (!lists.b) {
            return _List_Nil;
        }
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; lists.b.b; lists = lists.b) {
            var xs = lists.a;
            for (; xs.b; xs = xs.b) {
                var next = _List_Cons(xs.a, _List_Nil);
                end.b = next;
                end = next;
            }
        }
        end.b = lists.a;
        return tmp.b;
    };
    var $elm$core$String$replace_fn = function (before, after, string) {
        return $elm$core$String$join_fn(after, $elm$core$String$split_fn(before, string));
    }, $elm$core$String$replace = F3($elm$core$String$replace_fn);
    var $author$project$Test$Html$Internal$ElmHtml$ToString$escapeRawText_fn = function (kind, rawText) {
        switch (kind) {
            case 0:
                return rawText;
            case 1:
                return rawText;
            default:
                return $elm$core$String$replace_fn("'", "&#039;", $elm$core$String$replace_fn("\"", "&quot;", $elm$core$String$replace_fn(">", "&gt;", $elm$core$String$replace_fn("<", "&lt;", $elm$core$String$replace_fn("&", "&amp;", rawText)))));
        }
    }, $author$project$Test$Html$Internal$ElmHtml$ToString$escapeRawText = F2($author$project$Test$Html$Internal$ElmHtml$ToString$escapeRawText_fn);
    var $elm$core$List$filter_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs = xs.b) {
            if (f(xs.a)) {
                var next = _List_Cons(xs.a, _List_Nil);
                end.b = next;
                end = next;
            }
        }
        return tmp.
            b;
    }, $elm$core$List$filter = F2($elm$core$List$filter_fn);
    var $elm$core$List$map_fn = function (f, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; xs.b; xs
            = xs.b) {
            var next = _List_Cons(f(xs.a), _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$map = F2($elm$core$List$map_fn);
    var $elm$core$Tuple$mapFirst_fn = function (func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(func(x), y);
    }, $elm$core$Tuple$mapFirst = F2($elm$core$Tuple$mapFirst_fn);
    var $elm$core$Basics$neq = _Utils_notEqual;
    var $author$project$Test$Html$Internal$ElmHtml$ToString$propertyToAttributeName = function (propertyName) {
        switch (propertyName) {
            case "className":
                return "class";
            case "htmlFor":
                return "for";
            case "httpEquiv":
                return "http-equiv";
            case "acceptCharset":
                return "accept-charset";
            default:
                return propertyName;
        }
    };
    var $elm$core$Bitwise$and = _Bitwise_and;
    var $elm$core$String$repeatHelp_fn = function (n, chunk, result) {
        return (n <= 0) ? result : $elm$core$String$repeatHelp_fn(n >> 1, _Utils_ap(chunk, chunk), (!(n & 1)) ? result : _Utils_ap(result, chunk));
    }, $elm$core$String$repeatHelp = F3($elm$core$String$repeatHelp_fn);
    var $elm$core$String$repeat_fn = function (n, chunk) {
        return $elm$core$String$repeatHelp_fn(n, chunk, "");
    }, $elm$core$String$repeat = F2($elm$core$String$repeat_fn);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$EscapableRawTextElements = 2;
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$NormalElements = 4;
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$VoidElements = 0;
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$escapableRawTextElements = _List_fromArray(["textarea", "title"]);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$rawTextElements = _List_fromArray(["script", "style"]);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$voidElements = _List_fromArray(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
    var $author$project$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind = function (element) {
        return $elm$core$List$member_fn(element, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$voidElements) ? 0 : ($elm$core$List$member_fn(element, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$rawTextElements) ? 1 : ($elm$core$List$member_fn(element, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$escapableRawTextElements) ? 2 : 4));
    };
    var $elm$core$String$toLower = _String_toLower;
    var $elm$core$String$trim = _String_trim;
    var $author$project$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString_fn = function (options, _v1) {
        var facts = _v1.s;
        var children = _v1.et;
        var tag = _v1.cg;
        var styles = function () {
            var _v7 = $elm$core$Dict$toList(facts.dX);
            if (!_v7.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var styleValues = _v7;
                return $elm$core$Maybe$Just(function (styleString) {
                    return "style=\"" + (styleString + "\"");
                }($elm$core$String$join_fn("", $elm$core$List$map_fn(function (_v8) {
                    var key = _v8.a;
                    var value = _v8.b;
                    return key + (":" + (value + ";"));
                }, styleValues))));
            }
        }();
        var stringAttributes = $elm$core$Maybe$Just($elm$core$String$join_fn(" ", $elm$core$List$map_fn(function (_v6) {
            var k = _v6.a;
            var v = _v6.b;
            return k + ("=\"" + (v + "\""));
        }, $elm$core$List$map_fn($elm$core$Tuple$mapFirst($author$project$Test$Html$Internal$ElmHtml$ToString$propertyToAttributeName), $elm$core$Dict$toList($elm$core$Dict$filter_fn_unwrapped(function (k, v) {
            return k !== "className";
        }, facts.dW))))));
        var openTag = function (extras) {
            var trimmedExtras = $elm$core$List$filter_fn($elm$core$Basics$neq(""), $elm$core$List$map_fn($elm$core$String$trim, $elm$core$List$filterMap_fn(function (x) {
                return x;
            }, extras)));
            var filling = function () {
                if (!trimmedExtras.b) {
                    return "";
                }
                else {
                    var more = trimmedExtras;
                    return " " + $elm$core$String$join_fn(" ", more);
                }
            }();
            return "<" + (tag + (filling + ">"));
        };
        var closeTag = "</" + (tag + ">");
        var classes = $elm$core$Maybe$map_fn(function (name) {
            return "class=\"" + (name + "\"");
        }, $elm$core$Dict$get_fn("className", facts.dW));
        var childrenStrings = $elm$core$List$map_fn($elm$core$Basics$append($elm$core$String$repeat_fn(options.b4, " ")), $elm$core$List$concat($elm$core$List$map_fn(A2($author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines, $author$project$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind(tag), options), children)));
        var boolToString = function (b) {
            if (b) {
                return "True";
            }
            else {
                return "False";
            }
        };
        var boolAttributes = $elm$core$Maybe$Just($elm$core$String$join_fn(" ", $elm$core$List$map_fn(function (_v3) {
            var k = _v3.a;
            var v = _v3.b;
            return k + ("=" + $elm$core$String$toLower(boolToString(v)));
        }, $elm$core$Dict$toList(facts.cw))));
        var _v2 = $author$project$Test$Html$Internal$ElmHtml$InternalTypes$toElementKind(tag);
        if (!_v2) {
            return _List_fromArray([
                openTag(_List_fromArray([classes, styles, stringAttributes, boolAttributes]))
            ]);
        }
        else {
            return _Utils_ap(_List_fromArray([
                openTag(_List_fromArray([classes, styles, stringAttributes, boolAttributes]))
            ]), _Utils_ap(childrenStrings, _List_fromArray([closeTag])));
        }
    }, $author$project$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString = F2($author$project$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString_fn);
    var $author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines_fn = function (kind, options, nodeType) {
        switch (nodeType.$) {
            case 0:
                var text = nodeType.a.ch;
                return _List_fromArray([
                    $author$project$Test$Html$Internal$ElmHtml$ToString$escapeRawText_fn(kind, text)
                ]);
            case 1:
                var record = nodeType.a;
                return $author$project$Test$Html$Internal$ElmHtml$ToString$nodeRecordToString_fn(options, record);
            case 2:
                var record = nodeType.a;
                return _List_Nil;
            case 3:
                var record = nodeType.a;
                return _List_fromArray([record.aV.bF]);
            default:
                return _List_Nil;
        }
    }, $author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines = F3($author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines_fn);
    var $author$project$Test$Html$Internal$ElmHtml$ToString$nodeToStringWithOptions = function (options) {
        return A2($elm$core$Basics$composeR, A2($author$project$Test$Html$Internal$ElmHtml$ToString$nodeToLines, 1, options), $elm$core$String$join(options.ca ? "\n" : ""));
    };
    var $author$project$HtmlPrinter$htmlToString = function (viewHtml) {
        var _v0 = _Json_run_fn($author$project$Test$Html$Internal$ElmHtml$InternalTypes$decodeElmHtml(F2(function (_v1, _v2) {
            return $elm$virtual_dom$VirtualDom$Normal($elm$json$Json$Decode$succeed(0));
        })), $author$project$HtmlPrinter$asJsonView(viewHtml));
        if (!_v0.$) {
            var str = _v0.a;
            return A2($author$project$Test$Html$Internal$ElmHtml$ToString$nodeToStringWithOptions, $author$project$Test$Html$Internal$ElmHtml$ToString$defaultFormatOptions, str);
        }
        else {
            var err = _v0.a;
            return "Error: " + $elm$json$Json$Decode$errorToString(err);
        }
    };
    var $elm$core$String$contains = _String_contains;
    var $author$project$RenderRequest$isFile = function (rawPath) {
        return _String_contains_fn(".", rawPath);
    };
    var $author$project$Path$join = function (parts) {
        return $elm$core$String$join_fn("/", $elm$core$List$map_fn($author$project$Path$normalize, parts));
    };
    var $elm$url$Url$Https = 1;
    var $author$project$RenderRequest$pathToUrl = function (path) {
        return { T: $elm$core$Maybe$Nothing, c9: "TODO", cd: path, dB: $elm$core$Maybe$Nothing, dG: 1, W: $elm$core$Maybe$Nothing };
    };
    var $author$project$RenderRequest$requestPayloadDecoder = function (config) {
        return _Json_decodeField_fn("payload", _Json_decodeField_fn("path", _Json_map1_fn(function (rawPath) {
            var path = $author$project$RenderRequest$dropTrailingIndexHtml(rawPath);
            var route = config.hZ($author$project$RenderRequest$pathToUrl(path));
            var apiRoute = $author$project$Internal$ApiRoute$firstMatch_fn($elm$core$String$dropLeft_fn(1, path), config.gE($author$project$HtmlPrinter$htmlToString));
            if (!route.$) {
                if ($author$project$RenderRequest$isFile(rawPath)) {
                    if (!apiRoute.$) {
                        var justApi = apiRoute.a;
                        return $author$project$RenderRequest$Api(_Utils_Tuple2(path, justApi));
                    }
                    else {
                        return $author$project$RenderRequest$NotFound($author$project$Path$fromString(path));
                    }
                }
                else {
                    return $author$project$RenderRequest$Page({
                        eG: route,
                        cd: $author$project$Path$join(config.hF(route))
                    });
                }
            }
            else {
                if (!apiRoute.$) {
                    var justApi = apiRoute.a;
                    return $author$project$RenderRequest$Api(_Utils_Tuple2(path, justApi));
                }
                else {
                    return $author$project$RenderRequest$NotFound($author$project$Path$fromString(path));
                }
            }
        }, $elm$json$Json$Decode$string)));
    };
    var $author$project$RenderRequest$decoder = function (config) {
        return _Json_decodeField_fn("request", _Json_map3_fn(F3(function (includeHtml, requestThing, payload) {
            return $author$project$RenderRequest$SinglePage_fn(includeHtml, requestThing, payload);
        }), _Json_andThen_fn(function (kind) {
            if (kind === "single-page") {
                return _Json_map1_fn(function (jsonOnly) {
                    return jsonOnly ? 1 : 0;
                }, _Json_decodeField_fn("jsonOnly", $elm$json$Json$Decode$bool));
            }
            else {
                return $elm$json$Json$Decode$fail("Unhandled");
            }
        }, _Json_decodeField_fn("kind", $elm$json$Json$Decode$string)), $author$project$RenderRequest$requestPayloadDecoder(config), _Json_decodeField_fn("payload", $elm$json$Json$Decode$value)));
    };
    var $elm$json$Json$Encode$null = _Json_encodeNull;
    var $author$project$RenderRequest$default = $author$project$RenderRequest$SinglePage_fn(0, $author$project$RenderRequest$NotFound($author$project$Path$fromString("/error")), $elm$json$Json$Encode$null);
    var $author$project$TerminalText$blankStyle = { bn: false, R: $elm$core$Maybe$Nothing, bX: false };
    var $vito$elm_ansi$Ansi$Print = function (a) {
        return { $: 0, a: a };
    };
    var $vito$elm_ansi$Ansi$Remainder = function (a) {
        return { $: 1, a: a };
    };
    var $vito$elm_ansi$Ansi$encodeCode = function (code) {
        if (code.$ === 1) {
            return "";
        }
        else {
            var num = code.a;
            return $elm$core$String$fromInt(num);
        }
    };
    var $vito$elm_ansi$Ansi$encodeCodes = function (codes) {
        return $elm$core$String$join_fn(";", $elm$core$List$map_fn($vito$elm_ansi$Ansi$encodeCode, codes));
    };
    var $vito$elm_ansi$Ansi$completeParsing = function (parser) {
        switch (parser.a.$) {
            case 0:
                var _v1 = parser.a;
                var model = parser.b;
                var update = parser.c;
                return A2(update, $vito$elm_ansi$Ansi$Remainder("\u001B"), model);
            case 1:
                var _v2 = parser.a;
                var codes = _v2.a;
                var currentCode = _v2.b;
                var model = parser.b;
                var update = parser.c;
                return A2(update, $vito$elm_ansi$Ansi$Remainder("\u001B[" + $vito$elm_ansi$Ansi$encodeCodes(_Utils_ap(codes, _List_fromArray([currentCode])))), model);
            default:
                if (parser.a.a === "") {
                    var model = parser.b;
                    return model;
                }
                else {
                    var str = parser.a.a;
                    var model = parser.b;
                    var update = parser.c;
                    return A2(update, $vito$elm_ansi$Ansi$Print(str), model);
                }
        }
    };
    var $vito$elm_ansi$Ansi$Parser_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $vito$elm_ansi$Ansi$Parser = F3($vito$elm_ansi$Ansi$Parser_fn);
    var $vito$elm_ansi$Ansi$Unescaped = function (a) {
        return { $: 2, a: a };
    };
    var $vito$elm_ansi$Ansi$emptyParser_a0 = $vito$elm_ansi$Ansi$Unescaped(""), $vito$elm_ansi$Ansi$emptyParser = $vito$elm_ansi$Ansi$Parser($vito$elm_ansi$Ansi$emptyParser_a0);
    var $vito$elm_ansi$Ansi$CSI_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $vito$elm_ansi$Ansi$CSI = F2($vito$elm_ansi$Ansi$CSI_fn);
    var $vito$elm_ansi$Ansi$CarriageReturn = { $: 13 };
    var $vito$elm_ansi$Ansi$CursorBack = function (a) {
        return { $: 17, a: a };
    };
    var $vito$elm_ansi$Ansi$CursorColumn = function (a) {
        return { $: 19, a: a };
    };
    var $vito$elm_ansi$Ansi$CursorDown = function (a) {
        return { $: 15, a: a };
    };
    var $vito$elm_ansi$Ansi$CursorForward = function (a) {
        return { $: 16, a: a };
    };
    var $vito$elm_ansi$Ansi$CursorUp = function (a) {
        return { $: 14, a: a };
    };
    var $vito$elm_ansi$Ansi$EraseDisplay = function (a) {
        return { $: 20, a: a };
    };
    var $vito$elm_ansi$Ansi$EraseLine = function (a) {
        return { $: 21, a: a };
    };
    var $vito$elm_ansi$Ansi$Escaped = { $: 0 };
    var $vito$elm_ansi$Ansi$Linebreak = { $: 12 };
    var $vito$elm_ansi$Ansi$RestoreCursorPosition = { $: 23 };
    var $vito$elm_ansi$Ansi$SaveCursorPosition = { $: 22 };
    var $vito$elm_ansi$Ansi$Custom_fn = function (a, b, c) {
        return { $: 16, a: a, b: b, c: c };
    }, $vito$elm_ansi$Ansi$Custom = F3($vito$elm_ansi$Ansi$Custom_fn);
    var $vito$elm_ansi$Ansi$SetBackground = function (a) {
        return { $: 3, a: a };
    };
    var $vito$elm_ansi$Ansi$SetForeground = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Basics$clamp_fn = function (low, high, number) {
        return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
    }, $elm$core$Basics$clamp = F3($elm$core$Basics$clamp_fn);
    var $vito$elm_ansi$Ansi$Black = { $: 0 };
    var $vito$elm_ansi$Ansi$Blue = { $: 4 };
    var $vito$elm_ansi$Ansi$BrightBlack = { $: 8 };
    var $vito$elm_ansi$Ansi$BrightBlue = { $: 12 };
    var $vito$elm_ansi$Ansi$BrightCyan = { $: 14 };
    var $vito$elm_ansi$Ansi$BrightGreen = { $: 10 };
    var $vito$elm_ansi$Ansi$BrightMagenta = { $: 13 };
    var $vito$elm_ansi$Ansi$BrightRed = { $: 9 };
    var $vito$elm_ansi$Ansi$BrightWhite = { $: 15 };
    var $vito$elm_ansi$Ansi$BrightYellow = { $: 11 };
    var $vito$elm_ansi$Ansi$Cyan = { $: 6 };
    var $vito$elm_ansi$Ansi$Green = { $: 2 };
    var $vito$elm_ansi$Ansi$Magenta = { $: 5 };
    var $vito$elm_ansi$Ansi$Red = { $: 1 };
    var $vito$elm_ansi$Ansi$SetBlink = function (a) {
        return { $: 8, a: a };
    };
    var $vito$elm_ansi$Ansi$SetBold = function (a) {
        return { $: 4, a: a };
    };
    var $vito$elm_ansi$Ansi$SetFaint = function (a) {
        return { $: 5, a: a };
    };
    var $vito$elm_ansi$Ansi$SetFraktur = function (a) {
        return { $: 10, a: a };
    };
    var $vito$elm_ansi$Ansi$SetFramed = function (a) {
        return { $: 11, a: a };
    };
    var $vito$elm_ansi$Ansi$SetInverted = function (a) {
        return { $: 9, a: a };
    };
    var $vito$elm_ansi$Ansi$SetItalic = function (a) {
        return { $: 6, a: a };
    };
    var $vito$elm_ansi$Ansi$SetUnderline = function (a) {
        return { $: 7, a: a };
    };
    var $vito$elm_ansi$Ansi$White = { $: 7 };
    var $vito$elm_ansi$Ansi$Yellow = { $: 3 };
    var $vito$elm_ansi$Ansi$reset = _List_fromArray([
        $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Nothing),
        $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Nothing),
        $vito$elm_ansi$Ansi$SetBold(false),
        $vito$elm_ansi$Ansi$SetFaint(false),
        $vito$elm_ansi$Ansi$SetItalic(false),
        $vito$elm_ansi$Ansi$SetUnderline(false),
        $vito$elm_ansi$Ansi$SetBlink(false),
        $vito$elm_ansi$Ansi$SetInverted(false),
        $vito$elm_ansi$Ansi$SetFraktur(false),
        $vito$elm_ansi$Ansi$SetFramed(false)
    ]);
    var $vito$elm_ansi$Ansi$codeActions = function (code) {
        switch (code) {
            case 0:
                return $vito$elm_ansi$Ansi$reset;
            case 1:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBold(true)
                ]);
            case 2:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFaint(true)
                ]);
            case 3:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetItalic(true)
                ]);
            case 4:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetUnderline(true)
                ]);
            case 5:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBlink(true)
                ]);
            case 7:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetInverted(true)
                ]);
            case 20:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFraktur(true)
                ]);
            case 21:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBold(false)
                ]);
            case 22:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFaint(false),
                    $vito$elm_ansi$Ansi$SetBold(false)
                ]);
            case 23:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetItalic(false),
                    $vito$elm_ansi$Ansi$SetFraktur(false)
                ]);
            case 24:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetUnderline(false)
                ]);
            case 25:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBlink(false)
                ]);
            case 27:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetInverted(false)
                ]);
            case 30:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Black))
                ]);
            case 31:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Red))
                ]);
            case 32:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Green))
                ]);
            case 33:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Yellow))
                ]);
            case 34:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Blue))
                ]);
            case 35:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Magenta))
                ]);
            case 36:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Cyan))
                ]);
            case 37:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$White))
                ]);
            case 39:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Nothing)
                ]);
            case 40:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Black))
                ]);
            case 41:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Red))
                ]);
            case 42:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Green))
                ]);
            case 43:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Yellow))
                ]);
            case 44:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Blue))
                ]);
            case 45:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Magenta))
                ]);
            case 46:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Cyan))
                ]);
            case 47:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$White))
                ]);
            case 49:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Nothing)
                ]);
            case 51:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFramed(true)
                ]);
            case 54:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetFramed(false)
                ]);
            case 90:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlack))
                ]);
            case 91:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightRed))
                ]);
            case 92:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightGreen))
                ]);
            case 93:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightYellow))
                ]);
            case 94:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlue))
                ]);
            case 95:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightMagenta))
                ]);
            case 96:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightCyan))
                ]);
            case 97:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightWhite))
                ]);
            case 100:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlack))
                ]);
            case 101:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightRed))
                ]);
            case 102:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightGreen))
                ]);
            case 103:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightYellow))
                ]);
            case 104:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlue))
                ]);
            case 105:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightMagenta))
                ]);
            case 106:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightCyan))
                ]);
            case 107:
                return _List_fromArray([
                    $vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightWhite))
                ]);
            default:
                return _List_Nil;
        }
    };
    var $elm$core$Basics$modBy = _Basics_modBy;
    var $vito$elm_ansi$Ansi$colorCode = function (code) {
        switch (code) {
            case 0:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Black);
            case 1:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Red);
            case 2:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Green);
            case 3:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Yellow);
            case 4:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Blue);
            case 5:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Magenta);
            case 6:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Cyan);
            case 7:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$White);
            case 8:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlack);
            case 9:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightRed);
            case 10:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightGreen);
            case 11:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightYellow);
            case 12:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightBlue);
            case 13:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightMagenta);
            case 14:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightCyan);
            case 15:
                return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$BrightWhite);
            default:
                if ((code >= 16) && (code < 232)) {
                    var scale = function (n) {
                        return (!n) ? 0 : (55 + (n * 40));
                    };
                    var c = code - 16;
                    var g = _Basics_modBy_fn(6, (c / 6) | 0);
                    var r = _Basics_modBy_fn(6, (((c / 6) | 0) / 6) | 0);
                    var b = _Basics_modBy_fn(6, c);
                    return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Custom_fn(scale(r), scale(g), scale(b)));
                }
                else {
                    if ((code >= 232) && (code < 256)) {
                        var c = ((code - 232) * 10) + 8;
                        return $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Custom_fn(c, c, c));
                    }
                    else {
                        return $elm$core$Maybe$Nothing;
                    }
                }
        }
    };
    var $vito$elm_ansi$Ansi$captureArguments = function (list) {
        _v0$4: while (true) {
            if (list.b) {
                if (list.b.b && list.b.b.b) {
                    switch (list.a) {
                        case 38:
                            switch (list.b.a) {
                                case 5:
                                    var _v1 = list.b;
                                    var _v2 = _v1.b;
                                    var n = _v2.a;
                                    var xs = _v2.b;
                                    return _List_Cons($vito$elm_ansi$Ansi$SetForeground($vito$elm_ansi$Ansi$colorCode(n)), $vito$elm_ansi$Ansi$captureArguments(xs));
                                case 2:
                                    if (list.b.b.b.b && list.b.b.b.b.b) {
                                        var _v5 = list.b;
                                        var _v6 = _v5.b;
                                        var r = _v6.a;
                                        var _v7 = _v6.b;
                                        var g = _v7.a;
                                        var _v8 = _v7.b;
                                        var b = _v8.a;
                                        var xs = _v8.b;
                                        var c = A2($elm$core$Basics$clamp, 0, 255);
                                        return _List_Cons($vito$elm_ansi$Ansi$SetForeground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Custom_fn(c(r), c(g), c(b)))), $vito$elm_ansi$Ansi$captureArguments(xs));
                                    }
                                    else {
                                        break _v0$4;
                                    }
                                default:
                                    break _v0$4;
                            }
                        case 48:
                            switch (list.b.a) {
                                case 5:
                                    var _v3 = list.b;
                                    var _v4 = _v3.b;
                                    var n = _v4.a;
                                    var xs = _v4.b;
                                    return _List_Cons($vito$elm_ansi$Ansi$SetBackground($vito$elm_ansi$Ansi$colorCode(n)), $vito$elm_ansi$Ansi$captureArguments(xs));
                                case 2:
                                    if (list.b.b.b.b && list.b.b.b.b.b) {
                                        var _v9 = list.b;
                                        var _v10 = _v9.b;
                                        var r = _v10.a;
                                        var _v11 = _v10.b;
                                        var g = _v11.a;
                                        var _v12 = _v11.b;
                                        var b = _v12.a;
                                        var xs = _v12.b;
                                        var c = A2($elm$core$Basics$clamp, 0, 255);
                                        return _List_Cons($vito$elm_ansi$Ansi$SetBackground($elm$core$Maybe$Just($vito$elm_ansi$Ansi$Custom_fn(c(r), c(g), c(b)))), $vito$elm_ansi$Ansi$captureArguments(xs));
                                    }
                                    else {
                                        break _v0$4;
                                    }
                                default:
                                    break _v0$4;
                            }
                        default:
                            break _v0$4;
                    }
                }
                else {
                    break _v0$4;
                }
            }
            else {
                return _List_Nil;
            }
        }
        var n = list.a;
        var xs = list.b;
        return _Utils_ap($vito$elm_ansi$Ansi$codeActions(n), $vito$elm_ansi$Ansi$captureArguments(xs));
    };
    var $vito$elm_ansi$Ansi$completeBracketed_fn = function (_v0, actions) {
        var model = _v0.b;
        var update = _v0.c;
        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(""), $elm$core$List$foldl_fn(update, model, actions), update);
    }, $vito$elm_ansi$Ansi$completeBracketed = F2($vito$elm_ansi$Ansi$completeBracketed_fn);
    var $vito$elm_ansi$Ansi$completeUnescaped = function (parser) {
        if (parser.a.$ === 2) {
            if (parser.a.a === "") {
                var model = parser.b;
                var update = parser.c;
                return model;
            }
            else {
                var str = parser.a.a;
                var model = parser.b;
                var update = parser.c;
                return A2(update, $vito$elm_ansi$Ansi$Print(str), model);
            }
        }
        else {
            var model = parser.b;
            return model;
        }
    };
    var $vito$elm_ansi$Ansi$CursorPosition_fn = function (a, b) {
        return { $: 18, a: a, b: b };
    }, $vito$elm_ansi$Ansi$CursorPosition = F2($vito$elm_ansi$Ansi$CursorPosition_fn);
    var $vito$elm_ansi$Ansi$cursorPosition = function (codes) {
        _v0$5: while (true) {
            if (codes.b) {
                if (codes.a.$ === 1) {
                    if (!codes.b.b) {
                        var _v4 = codes.a;
                        return _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorPosition_fn(1, 1)
                        ]);
                    }
                    else {
                        if (codes.b.a.$ === 1) {
                            if (!codes.b.b.b) {
                                var _v1 = codes.a;
                                var _v2 = codes.b;
                                var _v3 = _v2.a;
                                return _List_fromArray([
                                    $vito$elm_ansi$Ansi$CursorPosition_fn(1, 1)
                                ]);
                            }
                            else {
                                break _v0$5;
                            }
                        }
                        else {
                            if (!codes.b.b.b) {
                                var _v7 = codes.a;
                                var _v8 = codes.b;
                                var col = _v8.a.a;
                                return _List_fromArray([
                                    $vito$elm_ansi$Ansi$CursorPosition_fn(1, col)
                                ]);
                            }
                            else {
                                break _v0$5;
                            }
                        }
                    }
                }
                else {
                    if (codes.b.b) {
                        if (codes.b.a.$ === 1) {
                            if (!codes.b.b.b) {
                                var row = codes.a.a;
                                var _v5 = codes.b;
                                var _v6 = _v5.a;
                                return _List_fromArray([
                                    $vito$elm_ansi$Ansi$CursorPosition_fn(row, 1)
                                ]);
                            }
                            else {
                                break _v0$5;
                            }
                        }
                        else {
                            if (!codes.b.b.b) {
                                var row = codes.a.a;
                                var _v9 = codes.b;
                                var col = _v9.a.a;
                                return _List_fromArray([
                                    $vito$elm_ansi$Ansi$CursorPosition_fn(row, col)
                                ]);
                            }
                            else {
                                break _v0$5;
                            }
                        }
                    }
                    else {
                        break _v0$5;
                    }
                }
            }
            else {
                break _v0$5;
            }
        }
        return _List_Nil;
    };
    var $vito$elm_ansi$Ansi$EraseAll = 2;
    var $vito$elm_ansi$Ansi$EraseToBeginning = 0;
    var $vito$elm_ansi$Ansi$EraseToEnd = 1;
    var $vito$elm_ansi$Ansi$eraseMode = function (code) {
        switch (code) {
            case 0:
                return 1;
            case 1:
                return 0;
            default:
                return 2;
        }
    };
    var $elm$core$String$toInt = _String_toInt;
    var $vito$elm_ansi$Ansi$parseChar_fn = function (_char, parser) {
        switch (parser.a.$) {
            case 2:
                var str = parser.a.a;
                var model = parser.b;
                var update = parser.c;
                switch (_char) {
                    case "\r":
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(""), A2(update, $vito$elm_ansi$Ansi$CarriageReturn, $vito$elm_ansi$Ansi$completeUnescaped(parser)), update);
                    case "\n":
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(""), A2(update, $vito$elm_ansi$Ansi$Linebreak, $vito$elm_ansi$Ansi$completeUnescaped(parser)), update);
                    case "\u001B":
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Escaped, $vito$elm_ansi$Ansi$completeUnescaped(parser), update);
                    default:
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(_Utils_ap(str, _char)), model, update);
                }
            case 0:
                var _v2 = parser.a;
                var model = parser.b;
                var update = parser.c;
                if (_char === "[") {
                    return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$CSI_fn(_List_Nil, $elm$core$Maybe$Nothing), model, update);
                }
                else {
                    return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$Unescaped(_char), model, update);
                }
            default:
                var _v4 = parser.a;
                var codes = _v4.a;
                var currentCode = _v4.b;
                var model = parser.b;
                var update = parser.c;
                switch (_char) {
                    case "m":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, $vito$elm_ansi$Ansi$captureArguments($elm$core$List$map_fn($elm$core$Maybe$withDefault(0), _Utils_ap(codes, _List_fromArray([currentCode])))));
                    case "A":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorUp($elm$core$Maybe$withDefault_fn(1, currentCode))
                        ]));
                    case "B":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorDown($elm$core$Maybe$withDefault_fn(1, currentCode))
                        ]));
                    case "C":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorForward($elm$core$Maybe$withDefault_fn(1, currentCode))
                        ]));
                    case "D":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorBack($elm$core$Maybe$withDefault_fn(1, currentCode))
                        ]));
                    case "E":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorDown($elm$core$Maybe$withDefault_fn(1, currentCode)),
                            $vito$elm_ansi$Ansi$CursorColumn(0)
                        ]));
                    case "F":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorUp($elm$core$Maybe$withDefault_fn(1, currentCode)),
                            $vito$elm_ansi$Ansi$CursorColumn(0)
                        ]));
                    case "G":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$CursorColumn($elm$core$Maybe$withDefault_fn(0, currentCode))
                        ]));
                    case "H":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, $vito$elm_ansi$Ansi$cursorPosition(_Utils_ap(codes, _List_fromArray([currentCode]))));
                    case "J":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$EraseDisplay($vito$elm_ansi$Ansi$eraseMode($elm$core$Maybe$withDefault_fn(0, currentCode)))
                        ]));
                    case "K":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([
                            $vito$elm_ansi$Ansi$EraseLine($vito$elm_ansi$Ansi$eraseMode($elm$core$Maybe$withDefault_fn(0, currentCode)))
                        ]));
                    case "f":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, $vito$elm_ansi$Ansi$cursorPosition(_Utils_ap(codes, _List_fromArray([currentCode]))));
                    case "s":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([$vito$elm_ansi$Ansi$SaveCursorPosition]));
                    case "u":
                        return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_fromArray([$vito$elm_ansi$Ansi$RestoreCursorPosition]));
                    case ";":
                        return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$CSI_fn(_Utils_ap(codes, _List_fromArray([currentCode])), $elm$core$Maybe$Nothing), model, update);
                    default:
                        var c = _char;
                        var _v6 = $elm$core$String$toInt(c);
                        if (!_v6.$) {
                            var num = _v6.a;
                            return $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$CSI_fn(codes, $elm$core$Maybe$Just(($elm$core$Maybe$withDefault_fn(0, currentCode) * 10) + num)), model, update);
                        }
                        else {
                            return $vito$elm_ansi$Ansi$completeBracketed_fn(parser, _List_Nil);
                        }
                }
        }
    }, $vito$elm_ansi$Ansi$parseChar = F2($vito$elm_ansi$Ansi$parseChar_fn);
    var $vito$elm_ansi$Ansi$parseInto_fn = function (model, update, ansi) {
        return $vito$elm_ansi$Ansi$completeParsing($elm$core$List$foldl_fn($vito$elm_ansi$Ansi$parseChar, $vito$elm_ansi$Ansi$Parser_fn($vito$elm_ansi$Ansi$emptyParser_a0, model, update), $elm$core$String$split_fn("", ansi)));
    }, $vito$elm_ansi$Ansi$parseInto = F3($vito$elm_ansi$Ansi$parseInto_fn);
    var $author$project$TerminalText$Style_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$TerminalText$Style = F2($author$project$TerminalText$Style_fn);
    var $author$project$TerminalText$parseInto_fn = function (action, _v0) {
        var pendingStyle = _v0.a;
        var soFar = _v0.b;
        switch (action.$) {
            case 0:
                var string = action.a;
                return _Utils_Tuple2($author$project$TerminalText$blankStyle, _List_Cons($author$project$TerminalText$Style_fn(pendingStyle, string), soFar));
            case 1:
                return _Utils_Tuple2(pendingStyle, soFar);
            case 2:
                var maybeColor = action.a;
                if (!maybeColor.$) {
                    var newColor = maybeColor.a;
                    return _Utils_Tuple2(_Utils_update(pendingStyle, {
                        R: $elm$core$Maybe$Just(newColor)
                    }), soFar);
                }
                else {
                    return _Utils_Tuple2($author$project$TerminalText$blankStyle, soFar);
                }
            case 4:
                var bool = action.a;
                return _Utils_Tuple2(_Utils_update(pendingStyle, { bn: bool }), soFar);
            case 5:
                return _Utils_Tuple2(pendingStyle, soFar);
            case 6:
                return _Utils_Tuple2(pendingStyle, soFar);
            case 7:
                var bool = action.a;
                return _Utils_Tuple2(_Utils_update(pendingStyle, { bX: bool }), soFar);
            case 3:
                return _Utils_Tuple2(pendingStyle, soFar);
            case 12:
                if (soFar.b) {
                    var next = soFar.a;
                    var rest = soFar.b;
                    return _Utils_Tuple2(pendingStyle, _List_Cons($author$project$TerminalText$Style_fn($author$project$TerminalText$blankStyle, "\n"), _List_Cons(next, rest)));
                }
                else {
                    return _Utils_Tuple2(pendingStyle, soFar);
                }
            default:
                return _Utils_Tuple2(pendingStyle, soFar);
        }
    }, $author$project$TerminalText$parseInto = F2($author$project$TerminalText$parseInto_fn);
    var $elm$core$Tuple$second = function (_v0) {
        var y = _v0.b;
        return y;
    };
    var $author$project$TerminalText$fromAnsiString = function (ansiString) {
        return $elm$core$List$reverse($vito$elm_ansi$Ansi$parseInto_fn(_Utils_Tuple2($author$project$TerminalText$blankStyle, _List_Nil), $author$project$TerminalText$parseInto, ansiString).b);
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Pages$Internal$Platform$StaticResponses$NotFetched = F2($author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$StaticResponses = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$StaticHttpRequest$ApiRoute = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$DataSource$succeed = function (value) {
        return $author$project$Pages$StaticHttpRequest$ApiRoute(value);
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$empty = $author$project$Pages$Internal$Platform$StaticResponses$StaticResponses($author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn($author$project$DataSource$succeed(0), $elm$core$Dict$empty));
    var $author$project$Pages$Internal$Platform$Cli$flagsDecoder = _Json_map2_fn(F2(function (staticHttpCache, isDevServer) {
        return { U: isDevServer, aZ: staticHttpCache };
    }), $elm$json$Json$Decode$succeed($elm$core$Dict$empty), _Json_map1_fn(function (mode) {
        return mode === "dev-server";
    }, _Json_decodeField_fn("mode", $elm$json$Json$Decode$string)));
    var $author$project$Pages$StaticHttpRequest$Request_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Pages$StaticHttpRequest$Request = F2($author$project$Pages$StaticHttpRequest$Request_fn);
    var $author$project$Pages$StaticHttpRequest$RequestError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$DataSource$map2_fn = function (fn, request1, request2) {
        var _v0 = _Utils_Tuple2(request1, request2);
        _v0$1: while (true) {
            switch (_v0.a.$) {
                case 1:
                    var error = _v0.a.a;
                    return $author$project$Pages$StaticHttpRequest$RequestError(error);
                case 0:
                    switch (_v0.b.$) {
                        case 1:
                            break _v0$1;
                        case 0:
                            var _v1 = _v0.a;
                            var urls1 = _v1.a;
                            var lookupFn1 = _v1.b;
                            var _v2 = _v0.b;
                            var urls2 = _v2.a;
                            var lookupFn2 = _v2.b;
                            return $author$project$Pages$StaticHttpRequest$Request_fn(_Utils_ap(urls1, urls2), A3($author$project$DataSource$mapReq, fn, lookupFn1, lookupFn2));
                        default:
                            var _v3 = _v0.a;
                            var urls1 = _v3.a;
                            var lookupFn1 = _v3.b;
                            var value2 = _v0.b.a;
                            return $author$project$Pages$StaticHttpRequest$Request_fn(urls1, A3($author$project$DataSource$mapReq, fn, lookupFn1, F2(function (_v4, _v5) {
                                return $author$project$Pages$StaticHttpRequest$ApiRoute(value2);
                            })));
                    }
                default:
                    switch (_v0.b.$) {
                        case 1:
                            break _v0$1;
                        case 0:
                            var value2 = _v0.a.a;
                            var _v6 = _v0.b;
                            var urls1 = _v6.a;
                            var lookupFn1 = _v6.b;
                            return $author$project$Pages$StaticHttpRequest$Request_fn(urls1, A3($author$project$DataSource$mapReq, fn, F2(function (_v7, _v8) {
                                return $author$project$Pages$StaticHttpRequest$ApiRoute(value2);
                            }), lookupFn1));
                        default:
                            var value1 = _v0.a.a;
                            var value2 = _v0.b.a;
                            return $author$project$Pages$StaticHttpRequest$ApiRoute(A2(fn, value1, value2));
                    }
            }
        }
        var error = _v0.b.a;
        return $author$project$Pages$StaticHttpRequest$RequestError(error);
    }, $author$project$DataSource$map2 = F3($author$project$DataSource$map2_fn);
    var $author$project$DataSource$mapReq_fn = function (fn, lookupFn1, lookupFn2, maybeMock, rawResponses) {
        return $author$project$DataSource$map2_fn(fn, A2(lookupFn1, maybeMock, rawResponses), A2(lookupFn2, maybeMock, rawResponses));
    }, $author$project$DataSource$mapReq = F5($author$project$DataSource$mapReq_fn);
    var $author$project$DataSource$map3_fn = function (combineFn, request1, request2, request3) {
        return $author$project$DataSource$map2_fn($elm$core$Basics$apR, request3, $author$project$DataSource$map2_fn($elm$core$Basics$apR, request2, $author$project$DataSource$map2_fn($elm$core$Basics$apR, request1, $author$project$DataSource$succeed(combineFn))));
    }, $author$project$DataSource$map3 = F4($author$project$DataSource$map3_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$ApiResponse = { $: 0 };
    var $author$project$Pages$Internal$Platform$StaticResponses$Continue_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $author$project$Pages$Internal$Platform$StaticResponses$Continue = F3($author$project$Pages$Internal$Platform$StaticResponses$Continue_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$Errors = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$Finish = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$StaticHttpRequest$Complete = { $: 2 };
    var $author$project$Pages$StaticHttpRequest$HasPermanentError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$StaticHttpRequest$Incomplete = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$StaticHttpRequest$cacheRequestResolutionHelp_fn = function (foundUrls, rawResponses, request) {
        cacheRequestResolutionHelp: while (true) {
            switch (request.$) {
                case 1:
                    var error = request.a;
                    switch (error.$) {
                        case 0:
                            return $author$project$Pages$StaticHttpRequest$Incomplete(foundUrls);
                        case 1:
                            return $author$project$Pages$StaticHttpRequest$HasPermanentError(error);
                        default:
                            return $author$project$Pages$StaticHttpRequest$HasPermanentError(error);
                    }
                case 0:
                    var urlList = request.a;
                    var lookupFn = request.b;
                    var $temp$foundUrls = urlList, $temp$rawResponses = rawResponses, $temp$request = A2(lookupFn, $elm$core$Maybe$Nothing, rawResponses);
                    foundUrls = $temp$foundUrls;
                    rawResponses = $temp$rawResponses;
                    request = $temp$request;
                    continue cacheRequestResolutionHelp;
                default:
                    return $author$project$Pages$StaticHttpRequest$Complete;
            }
        }
    }, $author$project$Pages$StaticHttpRequest$cacheRequestResolutionHelp = F3($author$project$Pages$StaticHttpRequest$cacheRequestResolutionHelp_fn);
    var $author$project$Pages$StaticHttpRequest$cacheRequestResolution_fn = function (request, rawResponses) {
        return $author$project$Pages$StaticHttpRequest$cacheRequestResolutionHelp_fn(_List_Nil, rawResponses, request);
    }, $author$project$Pages$StaticHttpRequest$cacheRequestResolution = F2($author$project$Pages$StaticHttpRequest$cacheRequestResolution_fn);
    var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
    var $elm$core$Dict$getMin = function (dict) {
        getMin: while (true) {
            if ((dict.$ === -1) && (dict.d.$ === -1)) {
                var left = dict.d;
                var $temp$dict = left;
                dict = $temp$dict;
                continue getMin;
            }
            else {
                return dict;
            }
        }
    };
    var $elm$core$Dict$moveRedLeft = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var lLeft = _v1.d;
                var lRight = _v1.e;
                var _v2 = dict.e;
                var rClr = _v2.a;
                var rK = _v2.b;
                var rV = _v2.c;
                var rLeft = _v2.d;
                var _v3 = rLeft.a;
                var rlK = rLeft.b;
                var rlV = rLeft.c;
                var rlL = rLeft.d;
                var rlR = rLeft.e;
                var rRight = _v2.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, rlK, rlV, $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), rlL), $elm$core$Dict$RBNode_elm_builtin_fn(1, rK, rV, rlR, rRight));
            }
            else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v4 = dict.d;
                var lClr = _v4.a;
                var lK = _v4.b;
                var lV = _v4.c;
                var lLeft = _v4.d;
                var lRight = _v4.e;
                var _v5 = dict.e;
                var rClr = _v5.a;
                var rK = _v5.b;
                var rV = _v5.c;
                var rLeft = _v5.d;
                var rRight = _v5.e;
                if (clr === 1) {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$moveRedRight = function (dict) {
        if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
            if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v1 = dict.d;
                var lClr = _v1.a;
                var lK = _v1.b;
                var lV = _v1.c;
                var _v2 = _v1.d;
                var _v3 = _v2.a;
                var llK = _v2.b;
                var llV = _v2.c;
                var llLeft = _v2.d;
                var llRight = _v2.e;
                var lRight = _v1.e;
                var _v4 = dict.e;
                var rClr = _v4.a;
                var rK = _v4.b;
                var rV = _v4.c;
                var rLeft = _v4.d;
                var rRight = _v4.e;
                return $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, $elm$core$Dict$RBNode_elm_builtin_fn(1, llK, llV, llLeft, llRight), $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, lRight, $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight)));
            }
            else {
                var clr = dict.a;
                var k = dict.b;
                var v = dict.c;
                var _v5 = dict.d;
                var lClr = _v5.a;
                var lK = _v5.b;
                var lV = _v5.c;
                var lLeft = _v5.d;
                var lRight = _v5.e;
                var _v6 = dict.e;
                var rClr = _v6.a;
                var rK = _v6.b;
                var rV = _v6.c;
                var rLeft = _v6.d;
                var rRight = _v6.e;
                if (clr === 1) {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, $elm$core$Dict$RBNode_elm_builtin_fn(0, lK, lV, lLeft, lRight), $elm$core$Dict$RBNode_elm_builtin_fn(0, rK, rV, rLeft, rRight));
                }
            }
        }
        else {
            return dict;
        }
    };
    var $elm$core$Dict$removeHelpPrepEQGT_fn = function (targetKey, dict, color, key, value, left, right) {
        if ((left.$ === -1) && (!left.a)) {
            var _v1 = left.a;
            var lK = left.b;
            var lV = left.c;
            var lLeft = left.d;
            var lRight = left.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(color, lK, lV, lLeft, $elm$core$Dict$RBNode_elm_builtin_fn(0, key, value, lRight, right));
        }
        else {
            _v2$2: while (true) {
                if ((right.$ === -1) && (right.a === 1)) {
                    if (right.d.$ === -1) {
                        if (right.d.a === 1) {
                            var _v3 = right.a;
                            var _v4 = right.d;
                            var _v5 = _v4.a;
                            return $elm$core$Dict$moveRedRight(dict);
                        }
                        else {
                            break _v2$2;
                        }
                    }
                    else {
                        var _v6 = right.a;
                        var _v7 = right.d;
                        return $elm$core$Dict$moveRedRight(dict);
                    }
                }
                else {
                    break _v2$2;
                }
            }
            return dict;
        }
    }, $elm$core$Dict$removeHelpPrepEQGT = F7($elm$core$Dict$removeHelpPrepEQGT_fn);
    var $elm$core$Dict$removeMin = function (dict) {
        if ((dict.$ === -1) && (dict.d.$ === -1)) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var lColor = left.a;
            var lLeft = left.d;
            var right = dict.e;
            if (lColor === 1) {
                if ((lLeft.$ === -1) && (!lLeft.a)) {
                    var _v3 = lLeft.a;
                    return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeMin(left), right);
                }
                else {
                    var _v4 = $elm$core$Dict$moveRedLeft(dict);
                    if (_v4.$ === -1) {
                        var nColor = _v4.a;
                        var nKey = _v4.b;
                        var nValue = _v4.c;
                        var nLeft = _v4.d;
                        var nRight = _v4.e;
                        return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$removeMin(nLeft), nRight);
                    }
                    else {
                        return $elm$core$Dict$RBEmpty_elm_builtin;
                    }
                }
            }
            else {
                return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeMin(left), right);
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    };
    var $elm$core$Dict$removeHelp_fn = function (targetKey, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_cmp(targetKey, key) < 0) {
                if ((left.$ === -1) && (left.a === 1)) {
                    var _v4 = left.a;
                    var lLeft = left.d;
                    if ((lLeft.$ === -1) && (!lLeft.a)) {
                        var _v6 = lLeft.a;
                        return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeHelp_fn(targetKey, left), right);
                    }
                    else {
                        var _v7 = $elm$core$Dict$moveRedLeft(dict);
                        if (_v7.$ === -1) {
                            var nColor = _v7.a;
                            var nKey = _v7.b;
                            var nValue = _v7.c;
                            var nLeft = _v7.d;
                            var nRight = _v7.e;
                            return $elm$core$Dict$balance_fn(nColor, nKey, nValue, $elm$core$Dict$removeHelp_fn(targetKey, nLeft), nRight);
                        }
                        else {
                            return $elm$core$Dict$RBEmpty_elm_builtin;
                        }
                    }
                }
                else {
                    return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, value, $elm$core$Dict$removeHelp_fn(targetKey, left), right);
                }
            }
            else {
                return $elm$core$Dict$removeHelpEQGT_fn(targetKey, $elm$core$Dict$removeHelpPrepEQGT_fn(targetKey, dict, color, key, value, left, right));
            }
        }
    }, $elm$core$Dict$removeHelp = F2($elm$core$Dict$removeHelp_fn);
    var $elm$core$Dict$removeHelpEQGT_fn = function (targetKey, dict) {
        if (dict.$ === -1) {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            if (_Utils_eq(targetKey, key)) {
                var _v1 = $elm$core$Dict$getMin(right);
                if (_v1.$ === -1) {
                    var minKey = _v1.b;
                    var minValue = _v1.c;
                    return $elm$core$Dict$balance_fn(color, minKey, minValue, left, $elm$core$Dict$removeMin(right));
                }
                else {
                    return $elm$core$Dict$RBEmpty_elm_builtin;
                }
            }
            else {
                return $elm$core$Dict$balance_fn(color, key, value, left, $elm$core$Dict$removeHelp_fn(targetKey, right));
            }
        }
        else {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
    }, $elm$core$Dict$removeHelpEQGT = F2($elm$core$Dict$removeHelpEQGT_fn);
    var $elm$core$Dict$remove_fn = function (key, dict) {
        var _v0 = $elm$core$Dict$removeHelp_fn(key, dict);
        if ((_v0.$ === -1) && (!_v0.a)) {
            var _v1 = _v0.a;
            var k = _v0.b;
            var v = _v0.c;
            var l = _v0.d;
            var r = _v0.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(1, k, v, l, r);
        }
        else {
            var x = _v0;
            return x;
        }
    }, $elm$core$Dict$remove = F2($elm$core$Dict$remove_fn);
    var $elm$core$Dict$diff_fn = function (t1, t2) {
        return $elm$core$Dict$foldl_fn_unwrapped(function (k, v, t) {
            return $elm$core$Dict$remove_fn(k, t);
        }, t1, t2);
    }, $elm$core$Dict$diff = F2($elm$core$Dict$diff_fn);
    var $elm$core$Set$diff_fn = function (_v0, _v1) {
        var dict1 = _v0;
        var dict2 = _v1;
        return $elm$core$Dict$diff_fn(dict1, dict2);
    }, $elm$core$Set$diff = F2($elm$core$Set$diff_fn);
    var $elm$core$Set$empty = $elm$core$Dict$empty;
    var $elm$core$Set$insert_fn = function (key, _v0) {
        var dict = _v0;
        return $elm$core$Dict$insert_fn(key, 0, dict);
    }, $elm$core$Set$insert = F2($elm$core$Set$insert_fn);
    var $elm$core$Set$fromList = function (list) {
        return $elm$core$List$foldl_fn($elm$core$Set$insert, $elm$core$Set$empty, list);
    };
    var $author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn = function (typeName, otherFields) {
        return $elm$json$Json$Encode$object(_List_Cons(_Utils_Tuple2("type", $elm$json$Json$Encode$string(typeName)), otherFields));
    }, $author$project$Pages$Internal$StaticHttpBody$encodeWithType = F2($author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn);
    var $author$project$Pages$Internal$StaticHttpBody$encode = function (body) {
        switch (body.$) {
            case 0:
                return $author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn("empty", _List_Nil);
            case 1:
                var content = body.b;
                return $author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn("string", _List_fromArray([
                    _Utils_Tuple2("content", $elm$json$Json$Encode$string(content))
                ]));
            default:
                var content = body.a;
                return $author$project$Pages$Internal$StaticHttpBody$encodeWithType_fn("json", _List_fromArray([
                    _Utils_Tuple2("content", content)
                ]));
        }
    };
    var $elm$core$String$foldl = _String_foldl;
    var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
    var $elm$core$Bitwise$xor = _Bitwise_xor;
    var $robinheghan$fnv1a$FNV1a$hasher_fn = function (_byte, hashValue) {
        var mixed = _byte ^ hashValue;
        return ((((mixed + (mixed << 1)) + (mixed << 4)) + (mixed << 7)) + (mixed << 8)) + (mixed << 24);
    }, $robinheghan$fnv1a$FNV1a$hasher = F2($robinheghan$fnv1a$FNV1a$hasher_fn);
    var $robinheghan$fnv1a$FNV1a$utf32ToUtf8_fn = function (_char, acc) {
        var _byte = $elm$core$Char$toCode(_char);
        return (_byte < 128) ? $robinheghan$fnv1a$FNV1a$hasher_fn(_byte, acc) : ((_byte < 2048) ? $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & _byte), $robinheghan$fnv1a$FNV1a$hasher_fn(192 | (_byte >>> 6), acc)) : ((_byte < 65536) ? $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & _byte), $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & (_byte >>> 6)), $robinheghan$fnv1a$FNV1a$hasher_fn(224 | (_byte >>> 12), acc))) : $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & _byte), $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & (_byte >>> 6)), $robinheghan$fnv1a$FNV1a$hasher_fn(128 | (63 & (_byte >>> 12)), $robinheghan$fnv1a$FNV1a$hasher_fn(240 | (_byte >>> 18), acc))))));
    }, $robinheghan$fnv1a$FNV1a$utf32ToUtf8 = F2($robinheghan$fnv1a$FNV1a$utf32ToUtf8_fn);
    var $robinheghan$fnv1a$FNV1a$hashWithSeed_fn = function (str, seed) {
        return _String_foldl_fn($robinheghan$fnv1a$FNV1a$utf32ToUtf8, seed, str) >>> 0;
    }, $robinheghan$fnv1a$FNV1a$hashWithSeed = F2($robinheghan$fnv1a$FNV1a$hashWithSeed_fn);
    var $robinheghan$fnv1a$FNV1a$initialSeed = 2166136261;
    var $robinheghan$fnv1a$FNV1a$hash = function (str) {
        return $robinheghan$fnv1a$FNV1a$hashWithSeed_fn(str, $robinheghan$fnv1a$FNV1a$initialSeed);
    };
    var $author$project$Pages$StaticHttp$Request$hashHeader = function (_v0) {
        var name = _v0.a;
        var value = _v0.b;
        return $elm$json$Json$Encode$string(name + (": " + value));
    };
    var $author$project$Pages$StaticHttp$Request$hash = function (requestDetails) {
        return $elm$core$String$fromInt($robinheghan$fnv1a$FNV1a$hash(_Json_encode_fn(0, $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("method", $elm$json$Json$Encode$string(requestDetails.eW)),
            _Utils_Tuple2("url", $elm$json$Json$Encode$string(requestDetails.C)),
            _Utils_Tuple2("headers", $elm$json$Json$Encode$list_fn($author$project$Pages$StaticHttp$Request$hashHeader, requestDetails.eI)),
            _Utils_Tuple2("body", $author$project$Pages$Internal$StaticHttpBody$encode(requestDetails.er))
        ])))));
    };
    var $elm$core$List$isEmpty = function (xs) {
        if (!xs.b) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$core$Dict$isEmpty = function (dict) {
        if (dict.$ === -2) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$core$Set$isEmpty = function (_v0) {
        var dict = _v0;
        return $elm$core$Dict$isEmpty(dict);
    };
    var $elm$core$Set$foldl_fn = function (func, initialState, _v0) {
        var dict = _v0;
        return $elm$core$Dict$foldl_fn_unwrapped(function (key, _v1, state) {
            return A2(func, key, state);
        }, initialState, dict);
    }, $elm$core$Set$foldl_fn_unwrapped = function (func, initialState, _v0) {
        var dict = _v0;
        return $elm$core$Dict$foldl_fn_unwrapped(function (key, _v1, state) {
            return func(key, state);
        }, initialState, dict);
    }, $elm$core$Set$foldl = F3($elm$core$Set$foldl_fn);
    var $elm_community$dict_extra$Dict$Extra$removeMany_fn = function (set, dict) {
        return $elm$core$Set$foldl_fn($elm$core$Dict$remove, dict, set);
    }, $elm_community$dict_extra$Dict$Extra$removeMany = F2($elm_community$dict_extra$Dict$Extra$removeMany_fn);
    var $author$project$Pages$StaticHttpRequest$resolve_fn = function (request, rawResponses) {
        resolve: while (true) {
            switch (request.$) {
                case 1:
                    var error = request.a;
                    return $elm$core$Result$Err(error);
                case 0:
                    var lookupFn = request.b;
                    var _v1 = A2(lookupFn, $elm$core$Maybe$Nothing, rawResponses);
                    var nextRequest = _v1;
                    var $temp$request = nextRequest, $temp$rawResponses = rawResponses;
                    request = $temp$request;
                    rawResponses = $temp$rawResponses;
                    continue resolve;
                default:
                    var value = request.a;
                    return $elm$core$Result$Ok(value);
            }
        }
    }, $author$project$Pages$StaticHttpRequest$resolve = F2($author$project$Pages$StaticHttpRequest$resolve_fn);
    var $elm$core$Dict$member_fn = function (key, dict) {
        var _v0 = $elm$core$Dict$get_fn(key, dict);
        if (!_v0.$) {
            return true;
        }
        else {
            return false;
        }
    }, $elm$core$Dict$member = F2($elm$core$Dict$member_fn);
    var $elm$core$Set$member_fn = function (key, _v0) {
        var dict = _v0;
        return $elm$core$Dict$member_fn(key, dict);
    }, $elm$core$Set$member = F2($elm$core$Set$member_fn);
    var $elm_community$list_extra$List$Extra$uniqueHelp_fn = function (f, existing, remaining, accumulator) {
        uniqueHelp: while (true) {
            if (!remaining.b) {
                return $elm$core$List$reverse(accumulator);
            }
            else {
                var first = remaining.a;
                var rest = remaining.b;
                var computedFirst = f(first);
                if ($elm$core$Set$member_fn(computedFirst, existing)) {
                    var $temp$f = f, $temp$existing = existing, $temp$remaining = rest, $temp$accumulator = accumulator;
                    f = $temp$f;
                    existing = $temp$existing;
                    remaining = $temp$remaining;
                    accumulator = $temp$accumulator;
                    continue uniqueHelp;
                }
                else {
                    var $temp$f = f, $temp$existing = $elm$core$Set$insert_fn(computedFirst, existing), $temp$remaining = rest, $temp$accumulator = _List_Cons(first, accumulator);
                    f = $temp$f;
                    existing = $temp$existing;
                    remaining = $temp$remaining;
                    accumulator = $temp$accumulator;
                    continue uniqueHelp;
                }
            }
        }
    }, $elm_community$list_extra$List$Extra$uniqueHelp = F4($elm_community$list_extra$List$Extra$uniqueHelp_fn);
    var $elm_community$list_extra$List$Extra$uniqueBy_fn = function (f, list) {
        return $elm_community$list_extra$List$Extra$uniqueHelp_fn(f, $elm$core$Set$empty, list, _List_Nil);
    }, $elm_community$list_extra$List$Extra$uniqueBy = F2($elm_community$list_extra$List$Extra$uniqueBy_fn);
    var $author$project$Pages$StaticHttpRequest$resolveUrlsHelp_fn = function (rawResponses, soFar, request) {
        resolveUrlsHelp: while (true) {
            switch (request.$) {
                case 1:
                    var error = request.a;
                    if (!error.$) {
                        var next = error.b;
                        return $elm_community$list_extra$List$Extra$uniqueBy_fn($author$project$Pages$StaticHttp$Request$hash, _Utils_ap(soFar, next));
                    }
                    else {
                        return soFar;
                    }
                case 0:
                    var urlList = request.a;
                    var lookupFn = request.b;
                    var $temp$rawResponses = rawResponses, $temp$soFar = _Utils_ap(soFar, urlList), $temp$request = A2(lookupFn, $elm$core$Maybe$Nothing, rawResponses);
                    rawResponses = $temp$rawResponses;
                    soFar = $temp$soFar;
                    request = $temp$request;
                    continue resolveUrlsHelp;
                default:
                    return soFar;
            }
        }
    }, $author$project$Pages$StaticHttpRequest$resolveUrlsHelp = F3($author$project$Pages$StaticHttpRequest$resolveUrlsHelp_fn);
    var $author$project$Pages$StaticHttpRequest$resolveUrls_fn = function (request, rawResponses) {
        return $author$project$Pages$StaticHttpRequest$resolveUrlsHelp_fn(rawResponses, _List_Nil, request);
    }, $author$project$Pages$StaticHttpRequest$resolveUrls = F2($author$project$Pages$StaticHttpRequest$resolveUrls_fn);
    var $elm$core$List$singleton = function (value) {
        return _List_fromArray([value]);
    };
    var $author$project$TerminalText$text = function (value) {
        return $author$project$TerminalText$Style_fn($author$project$TerminalText$blankStyle, value);
    };
    var $author$project$Pages$StaticHttpRequest$toBuildError_fn = function (path, error) {
        switch (error.$) {
            case 0:
                var missingKey = error.a;
                return {
                    cZ: true,
                    bH: _List_fromArray([
                        $author$project$TerminalText$text(missingKey)
                    ]),
                    cd: path,
                    be: "Missing Http Response"
                };
            case 1:
                var decodeErrorMessage = error.a;
                return {
                    cZ: true,
                    bH: _List_fromArray([
                        $author$project$TerminalText$text(decodeErrorMessage)
                    ]),
                    cd: path,
                    be: "Static Http Decoding Error"
                };
            default:
                var decodeErrorMessage = error.a;
                return {
                    cZ: true,
                    bH: _List_fromArray([
                        $author$project$TerminalText$text("I ran into a call to `DataSource.fail` with message: " + decodeErrorMessage)
                    ]),
                    cd: path,
                    be: "Called Static Http Fail"
                };
        }
    }, $author$project$Pages$StaticHttpRequest$toBuildError = F2($author$project$Pages$StaticHttpRequest$toBuildError_fn);
    var $elm$core$Set$union_fn = function (_v0, _v1) {
        var dict1 = _v0;
        var dict2 = _v1;
        return $elm$core$Dict$union_fn(dict1, dict2);
    }, $elm$core$Set$union = F2($elm$core$Set$union_fn);
    var $elm$core$Dict$values = function (dict) {
        return $elm$core$Dict$foldr_fn_unwrapped(function (key, value, valueList) {
            return _List_Cons(value, valueList);
        }, _List_Nil, dict);
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn = function (model, maybeRoutes) {
        nextStep: while (true) {
            var errors = model.Y;
            var allRawResponses = model.Q;
            var staticResponses = function () {
                var _v11 = model.bU;
                switch (_v11.$) {
                    case 1:
                        var s = _v11.a;
                        return s;
                    case 0:
                        var staticHttpResult = _v11.a;
                        return staticHttpResult;
                    default:
                        var staticHttpResult = _v11.b;
                        return staticHttpResult;
                }
            }();
            var request = function () {
                var request_ = staticResponses.a;
                return request_;
            }();
            var staticRequestsStatus = $author$project$Pages$StaticHttpRequest$cacheRequestResolution_fn(request, allRawResponses);
            var pendingRequests = function () {
                var rawResponses = staticResponses.b;
                var hasPermanentHttpError = !$elm$core$List$isEmpty(errors);
                var hasPermanentError = function () {
                    if (staticRequestsStatus.$ === 1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }();
                var _v7 = function () {
                    if (!staticRequestsStatus.$) {
                        var newUrlsToFetch = staticRequestsStatus.a;
                        return _Utils_Tuple2(false, newUrlsToFetch);
                    }
                    else {
                        return _Utils_Tuple2(true, _List_Nil);
                    }
                }();
                var allUrlsKnown = _v7.a;
                var knownUrlsToFetch = _v7.b;
                var fetchedAllKnownUrls = $elm$core$Set$isEmpty($elm$core$Set$diff_fn($elm$core$Set$fromList($elm$core$List$map_fn($author$project$Pages$StaticHttp$Request$hash, knownUrlsToFetch)), $elm$core$Set$union_fn($elm$core$Set$fromList($elm$core$Dict$keys(allRawResponses)), $elm$core$Set$fromList($elm$core$Dict$keys(rawResponses)))));
                return (hasPermanentHttpError || (hasPermanentError || (allUrlsKnown && fetchedAllKnownUrls))) ? false : true;
            }();
            if (pendingRequests) {
                var urlsToPerform = $author$project$Pages$StaticHttpRequest$resolveUrls_fn(request, allRawResponses);
                var maskedToUnmasked = $elm$core$Dict$fromList($elm$core$List$map_fn(function (secureUrl) {
                    return _Utils_Tuple2($author$project$Pages$StaticHttp$Request$hash(secureUrl), secureUrl);
                }, urlsToPerform));
                var dictOfNewUrlsToPerform = $elm$core$Dict$fromList($elm$core$List$map_fn(function (url) {
                    return _Utils_Tuple2($author$project$Pages$StaticHttp$Request$hash(url), $elm$core$Maybe$Nothing);
                }, urlsToPerform));
                var newAllRawResponses = $elm$core$Dict$union_fn(allRawResponses, dictOfNewUrlsToPerform);
                var alreadyPerformed = $elm$core$Set$fromList($elm$core$Dict$keys(allRawResponses));
                var newThing = $elm$core$Dict$values($elm_community$dict_extra$Dict$Extra$removeMany_fn(alreadyPerformed, maskedToUnmasked));
                return _Utils_Tuple2(model.bU, $author$project$Pages$Internal$Platform$StaticResponses$Continue_fn(newAllRawResponses, newThing, maybeRoutes));
            }
            else {
                var allErrors = function () {
                    var failedRequests = function () {
                        var maybePermanentError = function () {
                            if (staticRequestsStatus.$ === 1) {
                                var theError = staticRequestsStatus.a;
                                return $elm$core$Maybe$Just(theError);
                            }
                            else {
                                return $elm$core$Maybe$Nothing;
                            }
                        }();
                        var decoderErrors = $elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($elm$core$List$singleton, $elm$core$Maybe$map_fn($author$project$Pages$StaticHttpRequest$toBuildError("TODO PATH"), maybePermanentError)));
                        return decoderErrors;
                    }();
                    return _Utils_ap(errors, failedRequests);
                }();
                var _v0 = model.bU;
                switch (_v0.$) {
                    case 1:
                        return _Utils_Tuple2(model.bU, ($elm$core$List$length(allErrors) > 0) ? $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$Errors(allErrors)) : $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$ApiResponse));
                    case 0:
                        return _Utils_Tuple2(model.bU, ($elm$core$List$length(allErrors) > 0) ? $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$Errors(allErrors)) : $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$ApiResponse));
                    default:
                        var pageFoundDataSource = _v0.a;
                        var _v1 = _v0.b;
                        var andThenRequest = _v0.c;
                        var pageFoundResult = $author$project$Pages$StaticHttpRequest$resolve_fn(pageFoundDataSource, allRawResponses);
                        if (!pageFoundResult.$) {
                            if (pageFoundResult.a.$ === 1) {
                                var _v3 = pageFoundResult.a;
                                var $temp$model = _Utils_update(model, {
                                    bU: $author$project$Pages$Internal$Platform$StaticResponses$StaticResponses(andThenRequest)
                                }), $temp$maybeRoutes = maybeRoutes;
                                model = $temp$model;
                                maybeRoutes = $temp$maybeRoutes;
                                continue nextStep;
                            }
                            else {
                                return _Utils_Tuple2($author$project$Pages$Internal$Platform$StaticResponses$empty, $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$ApiResponse));
                            }
                        }
                        else {
                            var error_ = pageFoundResult.a;
                            var failedRequests = function () {
                                var maybePermanentError = function () {
                                    if (staticRequestsStatus.$ === 1) {
                                        var theError = staticRequestsStatus.a;
                                        return $elm$core$Maybe$Just(theError);
                                    }
                                    else {
                                        return $elm$core$Maybe$Nothing;
                                    }
                                }();
                                var decoderErrors = $elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($elm$core$List$singleton, $elm$core$Maybe$map_fn($author$project$Pages$StaticHttpRequest$toBuildError("TODO PATH"), maybePermanentError)));
                                return decoderErrors;
                            }();
                            return _Utils_Tuple2(model.bU, $author$project$Pages$Internal$Platform$StaticResponses$Finish($author$project$Pages$Internal$Platform$StaticResponses$Errors(_Utils_ap(_List_fromArray([
                                $author$project$Pages$StaticHttpRequest$toBuildError_fn("get static routes", error_)
                            ]), _Utils_ap(failedRequests, errors)))));
                        }
                }
            }
        }
    }, $author$project$Pages$Internal$Platform$StaticResponses$nextStep = F2($author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn);
    var $author$project$Pages$Internal$Platform$Effect$Batch = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Pages$Internal$Platform$ToJsPayload$Errors = function (a) {
        return { $: 4, a: a };
    };
    var $author$project$Pages$Internal$Platform$Effect$FetchHttp = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$NotFoundReason$NoMatchingRoute = { $: 0 };
    var $author$project$Pages$Internal$Platform$ToJsPayload$SendApiResponse = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$Platform$Effect$SendSinglePage = function (a) {
        return { $: 3, a: a };
    };
    var $elm$core$Result$mapError_fn = function (f, result) {
        if (!result.$) {
            var v = result.a;
            return $elm$core$Result$Ok(v);
        }
        else {
            var e = result.a;
            return $elm$core$Result$Err(f(e));
        }
    }, $elm$core$Result$mapError = F2($elm$core$Result$mapError_fn);
    var $author$project$Pages$Internal$ResponseSketch$HotUpdate_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $author$project$Pages$Internal$ResponseSketch$HotUpdate = F2($author$project$Pages$Internal$ResponseSketch$HotUpdate_fn);
    var $author$project$Pages$Internal$ResponseSketch$NotFound = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Flags$PreRenderFlags = { $: 1 };
    var $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew = F2($author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn);
    var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
        switch (handler.$) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            default:
                return 3;
        }
    };
    var $elm$html$Html$br = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "br"), $elm$html$Html$br_fn = $elm$html$Html$br.a2;
    var $elm$html$Html$code = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "code"), $elm$html$Html$code_fn = $elm$html$Html$code.a2;
    var $elm$html$Html$div = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "div"), $elm$html$Html$div_fn = $elm$html$Html$div.a2;
    var $elm$html$Html$h1 = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "h1"), $elm$html$Html$h1_fn = $elm$html$Html$h1.a2;
    var $elm$html$Html$Attributes$stringProperty_fn = function (key, string) {
        return _VirtualDom_property_fn(key, $elm$json$Json$Encode$string(string));
    }, $elm$html$Html$Attributes$stringProperty = F2($elm$html$Html$Attributes$stringProperty_fn);
    var $elm$html$Html$Attributes$id_a0 = "id", $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$id_a0);
    var $elm$html$Html$li = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "li"), $elm$html$Html$li_fn = $elm$html$Html$li.a2;
    var $author$project$Pages$Internal$NotFoundReason$moduleName = function (moduleContext) {
        return $elm$core$String$join_fn("/", _List_Cons("src", moduleContext.fD)) + ".elm";
    };
    var $elm$html$Html$p = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "p"), $elm$html$Html$p_fn = $elm$html$Html$p.a2;
    var $author$project$Pages$Internal$NotFoundReason$recordToString = function (fields) {
        return "{ " + ($elm$core$String$join_fn(", ", $elm$core$List$map_fn(function (_v0) {
            var key = _v0.a;
            var value = _v0.b;
            return key + (" = " + value);
        }, fields)) + " }");
    };
    var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
    var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
    var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
    var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
    var $elm$html$Html$ul = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "ul"), $elm$html$Html$ul_fn = $elm$html$Html$ul.a2;
    var $author$project$Pages$Internal$NotFoundReason$prerenderedOptionsView_fn = function (moduleContext, routes) {
        if (!routes.b) {
            return $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$text("But this Page module has no pre-rendered routes! If you want to pre-render this page, add these "),
                $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("RouteParams")
                ])),
                $elm$html$Html$text(" to the module's "),
                $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("routes")
                ])),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$code_fn(_List_fromArray([
                    _VirtualDom_style_fn("border-bottom", "dotted 2px"),
                    _VirtualDom_style_fn("font-weight", "bold")
                ]), _List_fromArray([
                    $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$recordToString(moduleContext.b9))
                ]))
            ]));
        }
        else {
            return $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$text(" but these RouteParams were not present "),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$code_fn(_List_fromArray([
                    _VirtualDom_style_fn("border-bottom", "dotted 2px"),
                    _VirtualDom_style_fn("font-weight", "bold")
                ]), _List_fromArray([
                    $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$recordToString(moduleContext.b9))
                ])),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$text("The following RouteParams are pre-rendered:"),
                $elm$html$Html$ul_fn(_List_fromArray([
                    _VirtualDom_style_fn("padding-top", "30px")
                ]), $elm$core$List$map_fn(function (record) {
                    return $elm$html$Html$li_fn(_List_fromArray([
                        _VirtualDom_style_fn("list-style", "inside")
                    ]), _List_fromArray([
                        $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$recordToString(record))
                        ]))
                    ]));
                }, routes)),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                $elm$html$Html$p_fn(_List_Nil, _List_fromArray([
                    $elm$html$Html$text("Try changing "),
                    $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text("routes")
                    ])),
                    $elm$html$Html$text(" in "),
                    $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$moduleName(moduleContext))
                    ])),
                    $elm$html$Html$text(" to make sure it includes these "),
                    $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text("RouteParams")
                    ])),
                    $elm$html$Html$text(".")
                ]))
            ]));
        }
    }, $author$project$Pages$Internal$NotFoundReason$prerenderedOptionsView = F2($author$project$Pages$Internal$NotFoundReason$prerenderedOptionsView_fn);
    var $author$project$Path$toAbsolute = function (_v0) {
        var path = _v0;
        return "/" + path;
    };
    var $elm$html$Html$span = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "span"), $elm$html$Html$span_fn = $elm$html$Html$span.a2;
    var $author$project$Pages$Internal$RoutePattern$segmentToString = function (segment) {
        if (!segment.$) {
            var string = segment.a;
            return string;
        }
        else {
            var name = segment.a;
            return ":" + name;
        }
    };
    var $author$project$Pages$Internal$RoutePattern$toString_ = function (segments) {
        return "/" + $elm$core$String$join_fn("/", $elm$core$List$map_fn($author$project$Pages$Internal$RoutePattern$segmentToString, segments));
    };
    var $author$project$Pages$Internal$RoutePattern$view = function (routePattern) {
        return $elm$html$Html$span_fn(_List_Nil, function () {
            var _v0 = routePattern.bv;
            if (_v0.$ === 1) {
                return _List_fromArray([
                    $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.bR))
                    ]))
                ]);
            }
            else {
                switch (_v0.a.$) {
                    case 0:
                        var optionalName = _v0.a.a;
                        return _List_fromArray([
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.bR))
                            ])),
                            $elm$html$Html$text(" or "),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.bR) + ("/:" + optionalName))
                            ]))
                        ]);
                    case 1:
                        var _v1 = _v0.a;
                        return _List_fromArray([
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.bR))
                            ]))
                        ]);
                    default:
                        var _v2 = _v0.a;
                        return _List_fromArray([
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$RoutePattern$toString_(routePattern.bR))
                            ]))
                        ]);
                }
            }
        }());
    };
    var $author$project$Pages$Internal$NotFoundReason$document_fn = function (pathPatterns, payload) {
        return {
            er: $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "not-found-reason"),
                _VirtualDom_style_fn("padding", "30px")
            ]), function () {
                var _v0 = payload.dK;
                switch (_v0.$) {
                    case 0:
                        return _List_fromArray([
                            $elm$html$Html$text("No route found for "),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Path$toAbsolute(payload.cd))
                            ])),
                            $elm$html$Html$text(" Did you mean to go to one of these routes:"),
                            $elm$html$Html$ul_fn(_List_fromArray([
                                _VirtualDom_style_fn("padding-top", "30px")
                            ]), $elm$core$List$map_fn(function (route) {
                                return $elm$html$Html$li_fn(_List_fromArray([
                                    _VirtualDom_style_fn("list-style", "inside")
                                ]), _List_fromArray([
                                    $author$project$Pages$Internal$RoutePattern$view(route)
                                ]));
                            }, pathPatterns))
                        ]);
                    case 1:
                        var moduleContext = _v0.a;
                        var routes = _v0.b;
                        return _List_fromArray([
                            $elm$html$Html$h1_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text("Page Not Found")
                            ])),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Path$toAbsolute(payload.cd))
                            ])),
                            $elm$html$Html$text(" successfully matched the route "),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $author$project$Pages$Internal$RoutePattern$view(moduleContext.fH)
                            ])),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$text(" from the Route Module "),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$br_fn(_List_Nil, _List_Nil),
                            $elm$html$Html$code_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$text($author$project$Pages$Internal$NotFoundReason$moduleName(moduleContext))
                            ])),
                            $author$project$Pages$Internal$NotFoundReason$prerenderedOptionsView_fn(moduleContext, routes)
                        ]);
                    default:
                        return _List_fromArray([
                            $elm$html$Html$text("Page not found"),
                            $elm$html$Html$text("TODO")
                        ]);
                }
            }()),
            be: "Page not found"
        };
    }, $author$project$Pages$Internal$NotFoundReason$document = F2($author$project$Pages$Internal$NotFoundReason$document_fn);
    var $author$project$Pages$Internal$Platform$Cli$render404Page_fn = function (config, sharedData, model, path, notFoundReason) {
        var _v0 = _Utils_Tuple2(model.U, sharedData);
        if ((!_v0.a) && (!_v0.b.$)) {
            var justSharedData = _v0.b.a;
            var pathAndRoute = { cd: path, hE: config.hn };
            var pageData = config.gU(config.hm);
            var pageModel = A5(config.de, $author$project$Pages$Flags$PreRenderFlags, justSharedData, pageData, $elm$core$Maybe$Nothing, $elm$core$Maybe$Nothing).a;
            var viewValue = A4(config.N, pathAndRoute, $elm$core$Maybe$Nothing, justSharedData, pageData).N(pageModel);
            var byteEncodedPageData = $elm$bytes$Bytes$Encode$encode(config.gS($author$project$Pages$Internal$ResponseSketch$HotUpdate_fn(config.gU(config.hm), justSharedData)));
            return $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn(byteEncodedPageData, $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress({
                fu: $elm$core$Dict$empty,
                Y: _List_Nil,
                aI: A4(config.N, pathAndRoute, $elm$core$Maybe$Nothing, justSharedData, pageData).aI,
                eI: _List_Nil,
                fy: $author$project$HtmlPrinter$htmlToString(viewValue.er),
                fz: true,
                hE: $author$project$Path$toAbsolute(path),
                aZ: $elm$core$Dict$empty,
                aa: 404,
                be: viewValue.be
            }));
        }
        else {
            var notFoundDocument = $author$project$Pages$Internal$NotFoundReason$document_fn(config.hu, { cd: path, dK: notFoundReason });
            var byteEncodedPageData = $elm$bytes$Bytes$Encode$encode(config.gS($author$project$Pages$Internal$ResponseSketch$NotFound({ cd: path, dK: notFoundReason })));
            return $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn(byteEncodedPageData, $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress({
                fu: $elm$core$Dict$empty,
                Y: _List_Nil,
                aI: _List_Nil,
                eI: _List_Nil,
                fy: $author$project$HtmlPrinter$htmlToString(notFoundDocument.er),
                fz: true,
                hE: $author$project$Path$toAbsolute(path),
                aZ: $elm$core$Dict$empty,
                aa: 404,
                be: notFoundDocument.be
            }));
        }
    }, $author$project$Pages$Internal$Platform$Cli$render404Page = F5($author$project$Pages$Internal$Platform$Cli$render404Page_fn);
    var $author$project$PageServerResponse$ErrorPage_fn = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $author$project$PageServerResponse$ErrorPage = F2($author$project$PageServerResponse$ErrorPage_fn);
    var $author$project$Pages$Internal$ResponseSketch$Redirect = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$PageServerResponse$RenderPage_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$PageServerResponse$RenderPage = F2($author$project$PageServerResponse$RenderPage_fn);
    var $author$project$Pages$Internal$ResponseSketch$RenderPage = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$PageServerResponse$ServerResponse = function (a) {
        return { $: 1, a: a };
    };
    var $elm$core$Result$map_fn = function (func, ra) {
        if (!ra.$) {
            var a = ra.a;
            return $elm$core$Result$Ok(func(a));
        }
        else {
            var e = ra.a;
            return $elm$core$Result$Err(e);
        }
    }, $elm$core$Result$map = F2($elm$core$Result$map_fn);
    var $elm$core$Result$map2_fn = function (func, ra, rb) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                return $elm$core$Result$Ok(A2(func, a, b));
            }
        }
    }, $elm$core$Result$map2_fn_unwrapped = function (func, ra, rb) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                return $elm$core$Result$Ok(func(a, b));
            }
        }
    }, $elm$core$Result$map2 = F3($elm$core$Result$map2_fn);
    var $elm$core$Result$map3_fn = function (func, ra, rb, rc) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                if (rc.$ === 1) {
                    var x = rc.a;
                    return $elm$core$Result$Err(x);
                }
                else {
                    var c = rc.a;
                    return $elm$core$Result$Ok(A3(func, a, b, c));
                }
            }
        }
    }, $elm$core$Result$map3_fn_unwrapped = function (func, ra, rb, rc) {
        if (ra.$ === 1) {
            var x = ra.a;
            return $elm$core$Result$Err(x);
        }
        else {
            var a = ra.a;
            if (rb.$ === 1) {
                var x = rb.a;
                return $elm$core$Result$Err(x);
            }
            else {
                var b = rb.a;
                if (rc.$ === 1) {
                    var x = rc.a;
                    return $elm$core$Result$Err(x);
                }
                else {
                    var c = rc.a;
                    return $elm$core$Result$Ok(func(a, b, c));
                }
            }
        }
    }, $elm$core$Result$map3 = F4($elm$core$Result$map3_fn);
    var $elm$core$Tuple$pair_fn = function (a, b) {
        return _Utils_Tuple2(a, b);
    }, $elm$core$Tuple$pair = F2($elm$core$Tuple$pair_fn);
    var $elm$json$Json$Encode$bool = _Json_wrap;
    var $elm_community$list_extra$List$Extra$groupWhile_fn = function (isSameGroup, items) {
        return $elm$core$List$foldr_fn(F2(function (x, acc) {
            if (!acc.b) {
                return _List_fromArray([
                    _Utils_Tuple2(x, _List_Nil)
                ]);
            }
            else {
                var _v1 = acc.a;
                var y = _v1.a;
                var restOfGroup = _v1.b;
                var groups = acc.b;
                return A2(isSameGroup, x, y) ? _List_Cons(_Utils_Tuple2(x, _List_Cons(y, restOfGroup)), groups) : _List_Cons(_Utils_Tuple2(x, _List_Nil), acc);
            }
        }), _List_Nil, items);
    }, $elm_community$list_extra$List$Extra$groupWhile_fn_unwrapped = function (isSameGroup, items) {
        return $elm$core$List$foldr_fn(F2(function (x, acc) {
            if (!acc.b) {
                return _List_fromArray([
                    _Utils_Tuple2(x, _List_Nil)
                ]);
            }
            else {
                var _v1 = acc.a;
                var y = _v1.a;
                var restOfGroup = _v1.b;
                var groups = acc.b;
                return isSameGroup(x, y) ? _List_Cons(_Utils_Tuple2(x, _List_Cons(y, restOfGroup)), groups) : _List_Cons(_Utils_Tuple2(x, _List_Nil), acc);
            }
        }), _List_Nil, items);
    }, $elm_community$list_extra$List$Extra$groupWhile = F2($elm_community$list_extra$List$Extra$groupWhile_fn);
    var $author$project$PageServerResponse$collectMultiValueHeaders = function (headers) {
        return $elm$core$List$map_fn(function (_v2) {
            var _v3 = _v2.a;
            var key = _v3.a;
            var firstValue = _v3.b;
            var otherValues = _v2.b;
            return _Utils_Tuple2(key, _List_Cons(firstValue, $elm$core$List$map_fn($elm$core$Tuple$second, otherValues)));
        }, $elm_community$list_extra$List$Extra$groupWhile_fn_unwrapped(function (_v0, _v1) {
            var key1 = _v0.a;
            var key2 = _v1.a;
            return _Utils_eq(key1, key2);
        }, headers));
    };
    var $elm$json$Json$Encode$int = _Json_wrap;
    var $elm$core$Tuple$mapSecond_fn = function (func, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(x, func(y));
    }, $elm$core$Tuple$mapSecond = F2($elm$core$Tuple$mapSecond_fn);
    var $author$project$PageServerResponse$toJson = function (serverResponse) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("body", $elm$core$Maybe$withDefault_fn($elm$json$Json$Encode$null, $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, serverResponse.er))),
            _Utils_Tuple2("statusCode", $elm$json$Json$Encode$int(serverResponse.aa)),
            _Utils_Tuple2("headers", $elm$json$Json$Encode$object($elm$core$List$map_fn($elm$core$Tuple$mapSecond($elm$json$Json$Encode$list($elm$json$Json$Encode$string)), $author$project$PageServerResponse$collectMultiValueHeaders(serverResponse.eI)))),
            _Utils_Tuple2("kind", $elm$json$Json$Encode$string("server-response")),
            _Utils_Tuple2("isBase64Encoded", $elm$json$Json$Encode$bool(serverResponse.di))
        ]));
    };
    var $elm$core$Result$toMaybe = function (result) {
        if (!result.$) {
            var v = result.a;
            return $elm$core$Maybe$Just(v);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$core$Maybe$andThen_fn = function (callback, maybeValue) {
        if (!maybeValue.$) {
            var value = maybeValue.a;
            return callback(value);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    }, $elm$core$Maybe$andThen = F2($elm$core$Maybe$andThen_fn);
    var $author$project$PageServerResponse$toRedirect = function (response) {
        return $elm$core$Maybe$andThen_fn(function (location) {
            return (response.aa === 302) ? $elm$core$Maybe$Just({ ap: location, aa: 302 }) : $elm$core$Maybe$Nothing;
        }, $elm$core$Dict$get_fn("Location", $elm$core$Dict$fromList(response.eI)));
    };
    var $author$project$Path$toRelative = function (_v0) {
        var path = _v0;
        return path;
    };
    var $author$project$Pages$Internal$Platform$Cli$urlToRoute_fn = function (config, url) {
        return _String_startsWith_fn("/____elm-pages-internal____", url.cd) ? config.hn : config.hZ(url);
    }, $author$project$Pages$Internal$Platform$Cli$urlToRoute = F2($author$project$Pages$Internal$Platform$Cli$urlToRoute_fn);
    var $elm$core$Result$withDefault_fn = function (def, result) {
        if (!result.$) {
            var a = result.a;
            return a;
        }
        else {
            return def;
        }
    }, $elm$core$Result$withDefault = F2($elm$core$Result$withDefault_fn);
    var $author$project$Pages$Internal$Platform$Cli$sendSinglePageProgress_fn = function (site, contentJson, config, model, info) {
        var _v0 = _Utils_Tuple2(info.cd, info.eG);
        var page = _v0.a;
        var route = _v0.b;
        var _v1 = model.aU;
        var includeHtml = _v1.a;
        var siteDataResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError("Site.elm"), $author$project$Pages$StaticHttpRequest$resolve_fn($elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed(_List_Nil), config.eH), model.Q));
        var currentUrl = {
            T: $elm$core$Maybe$Nothing,
            c9: site.f9,
            cd: $author$project$Path$toRelative(page),
            dB: $elm$core$Maybe$Nothing,
            dG: 1,
            W: $elm$core$Maybe$Nothing
        };
        var pageDataResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError(currentUrl.cd), $author$project$Pages$StaticHttpRequest$resolve_fn(config.m($author$project$Pages$Internal$Platform$Cli$urlToRoute_fn(config, currentUrl)), contentJson));
        var pageFoundResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError(currentUrl.cd), $author$project$Pages$StaticHttpRequest$resolve_fn(model.U ? config.fV(route) : $author$project$DataSource$succeed($elm$core$Maybe$Nothing), model.Q));
        var sharedDataResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError(currentUrl.cd), $author$project$Pages$StaticHttpRequest$resolve_fn(config.E, contentJson));
        var renderedResult = function () {
            if (includeHtml === 1) {
                return $elm$core$Result$map_fn(function (okPageData) {
                    switch (okPageData.$) {
                        case 0:
                            var responseInfo = okPageData.a;
                            var pageData = okPageData.b;
                            return $author$project$PageServerResponse$RenderPage_fn({ eI: responseInfo.eI, aa: responseInfo.aa }, { aI: _List_Nil, be: "This page was not rendered because it is a JSON-only request.", N: "This page was not rendered because it is a JSON-only request." });
                        case 1:
                            var serverResponse = okPageData.a;
                            return $author$project$PageServerResponse$ServerResponse(serverResponse);
                        default:
                            var error = okPageData.a;
                            var record = okPageData.b;
                            return $author$project$PageServerResponse$ErrorPage_fn(error, record);
                    }
                }, pageDataResult);
            }
            else {
                return $elm$core$Result$map_fn(function (_v11) {
                    var pageData_ = _v11.a;
                    var sharedData = _v11.b;
                    switch (pageData_.$) {
                        case 0:
                            var responseInfo = pageData_.a;
                            var pageData = pageData_.b;
                            var currentPage = {
                                cd: page,
                                hE: $author$project$Pages$Internal$Platform$Cli$urlToRoute_fn(config, currentUrl)
                            };
                            var pageModel = A5(config.de, $author$project$Pages$Flags$PreRenderFlags, sharedData, pageData, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just({
                                P: currentPage.hE,
                                Z: $elm$core$Maybe$Nothing,
                                cd: { T: $elm$core$Maybe$Nothing, cd: currentPage.cd, W: $elm$core$Maybe$Nothing }
                            })).a;
                            var viewValue = A4(config.N, currentPage, $elm$core$Maybe$Nothing, sharedData, pageData).N(pageModel);
                            return $author$project$PageServerResponse$RenderPage_fn(responseInfo, {
                                aI: A4(config.N, currentPage, $elm$core$Maybe$Nothing, sharedData, pageData).aI,
                                be: viewValue.be,
                                N: $author$project$HtmlPrinter$htmlToString(viewValue.er)
                            });
                        case 1:
                            var serverResponse = pageData_.a;
                            return $author$project$PageServerResponse$ServerResponse(serverResponse);
                        default:
                            var error = pageData_.a;
                            var record = pageData_.b;
                            var pageData = config.gU(error);
                            var currentPage = {
                                cd: page,
                                hE: $author$project$Pages$Internal$Platform$Cli$urlToRoute_fn(config, currentUrl)
                            };
                            var pageModel = A5(config.de, $author$project$Pages$Flags$PreRenderFlags, sharedData, pageData, $elm$core$Maybe$Nothing, $elm$core$Maybe$Just({
                                P: currentPage.hE,
                                Z: $elm$core$Maybe$Nothing,
                                cd: { T: $elm$core$Maybe$Nothing, cd: currentPage.cd, W: $elm$core$Maybe$Nothing }
                            })).a;
                            var viewValue = A4(config.N, currentPage, $elm$core$Maybe$Nothing, sharedData, pageData).N(pageModel);
                            return $author$project$PageServerResponse$RenderPage_fn({
                                eI: record.eI,
                                aa: config.gV(error)
                            }, {
                                aI: A4(config.N, currentPage, $elm$core$Maybe$Nothing, sharedData, pageData).aI,
                                be: viewValue.be,
                                N: $author$project$HtmlPrinter$htmlToString(viewValue.er)
                            });
                    }
                }, $elm$core$Result$map2_fn($elm$core$Tuple$pair, pageDataResult, sharedDataResult));
            }
        }();
        var _v2 = $elm$core$Result$map3_fn_unwrapped(function (a, b, c) {
            return _Utils_Tuple3(a, b, c);
        }, pageFoundResult, renderedResult, siteDataResult);
        if (!_v2.$) {
            var _v3 = _v2.a;
            var maybeNotFoundReason = _v3.a;
            var renderedOrApiResponse = _v3.b;
            var siteData = _v3.c;
            if (maybeNotFoundReason.$ === 1) {
                var byteEncodedPageData = function () {
                    if (!pageDataResult.$) {
                        var pageServerResponse = pageDataResult.a;
                        switch (pageServerResponse.$) {
                            case 0:
                                var pageData = pageServerResponse.b;
                                return true ? $elm$bytes$Bytes$Encode$encode(config.gS($elm$core$Result$withDefault_fn($author$project$Pages$Internal$ResponseSketch$RenderPage(pageData), $elm$core$Result$map_fn($author$project$Pages$Internal$ResponseSketch$HotUpdate(pageData), sharedDataResult)))) : $elm$bytes$Bytes$Encode$encode(config.gS($author$project$Pages$Internal$ResponseSketch$RenderPage(pageData)));
                            case 1:
                                var serverResponse = pageServerResponse.a;
                                return $elm$bytes$Bytes$Encode$encode($elm$core$Maybe$withDefault_fn($elm$bytes$Bytes$Encode$unsignedInt8(0), $elm$core$Maybe$map_fn(function (_v8) {
                                    var location = _v8.ap;
                                    return config.gS($author$project$Pages$Internal$ResponseSketch$Redirect(location));
                                }, $author$project$PageServerResponse$toRedirect(serverResponse))));
                            default:
                                var error = pageServerResponse.a;
                                var record = pageServerResponse.b;
                                return $elm$core$Result$withDefault_fn($elm$bytes$Bytes$Encode$encode($elm$bytes$Bytes$Encode$unsignedInt8(0)), $elm$core$Result$map_fn($elm$bytes$Bytes$Encode$encode, $elm$core$Result$map_fn(config.gS, $elm$core$Result$map_fn($author$project$Pages$Internal$ResponseSketch$HotUpdate(config.gU(error)), sharedDataResult))));
                        }
                    }
                    else {
                        return $elm$bytes$Bytes$Encode$encode($elm$bytes$Bytes$Encode$unsignedInt8(0));
                    }
                }();
                switch (renderedOrApiResponse.$) {
                    case 0:
                        var responseInfo = renderedOrApiResponse.a;
                        var rendered = renderedOrApiResponse.b;
                        return $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn(byteEncodedPageData, $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress({
                            fu: $elm$core$Dict$empty,
                            Y: _List_Nil,
                            aI: _Utils_ap(rendered.aI, siteData),
                            eI: responseInfo.eI,
                            fy: rendered.N,
                            fz: false,
                            hE: $author$project$Path$toRelative(page),
                            aZ: $elm$core$Dict$empty,
                            aa: responseInfo.aa,
                            be: rendered.be
                        }));
                    case 1:
                        var serverResponse = renderedOrApiResponse.a;
                        return $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$SendApiResponse({
                            er: $author$project$PageServerResponse$toJson(serverResponse),
                            aZ: $elm$core$Dict$empty,
                            aa: 200
                        }));
                    default:
                        var error = renderedOrApiResponse.a;
                        var responseInfo = renderedOrApiResponse.b;
                        return $author$project$Pages$Internal$Platform$Effect$SendSinglePageNew_fn(byteEncodedPageData, $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress({
                            fu: $elm$core$Dict$empty,
                            Y: _List_Nil,
                            aI: _List_Nil,
                            eI: responseInfo.eI,
                            fy: "UNEXPECTED!",
                            fz: false,
                            hE: $author$project$Path$toRelative(page),
                            aZ: $elm$core$Dict$empty,
                            aa: config.gV(error),
                            be: "UNEXPECTED CASE"
                        }));
                }
            }
            else {
                var notFoundReason = maybeNotFoundReason.a;
                return $author$project$Pages$Internal$Platform$Cli$render404Page_fn(config, $elm$core$Result$toMaybe(sharedDataResult), model, page, notFoundReason);
            }
        }
        else {
            var error = _v2.a;
            return $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$Errors(_List_fromArray([error])));
        }
    }, $author$project$Pages$Internal$Platform$Cli$sendSinglePageProgress = F5($author$project$Pages$Internal$Platform$Cli$sendSinglePageProgress_fn);
    var $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn = function (site, config, model, _v0) {
        nextStepToEffect: while (true) {
            var updatedStaticResponsesModel = _v0.a;
            var nextStep = _v0.b;
            if (!nextStep.$) {
                var updatedAllRawResponses = nextStep.a;
                var httpRequests = nextStep.b;
                var maybeRoutes = nextStep.c;
                var updatedUnprocessedPages = function () {
                    if (!maybeRoutes.$) {
                        var newRoutes = maybeRoutes.a;
                        return $elm$core$List$map_fn(function (route) {
                            return _Utils_Tuple2($author$project$Path$join(config.hF(route)), route);
                        }, newRoutes);
                    }
                    else {
                        return model.bi;
                    }
                }();
                var updatedModel = _Utils_update(model, { Q: updatedAllRawResponses, bU: updatedStaticResponsesModel, bi: updatedUnprocessedPages });
                if ($elm$core$List$isEmpty(httpRequests)) {
                    var $temp$site = site, $temp$config = config, $temp$model = updatedModel, $temp$_v0 = $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(updatedModel, $elm$core$Maybe$Nothing);
                    site = $temp$site;
                    config = $temp$config;
                    model = $temp$model;
                    _v0 = $temp$_v0;
                    continue nextStepToEffect;
                }
                else {
                    return _Utils_Tuple2(updatedModel, $author$project$Pages$Internal$Platform$Effect$Batch($elm$core$List$map_fn($author$project$Pages$Internal$Platform$Effect$FetchHttp, httpRequests)));
                }
            }
            else {
                var toJsPayload = nextStep.a;
                if (!toJsPayload.$) {
                    var sharedDataResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError(""), $author$project$Pages$StaticHttpRequest$resolve_fn(config.E, model.Q));
                    var apiResponse = function () {
                        var _v4 = model.aU;
                        var requestPayload = _v4.b;
                        switch (requestPayload.$) {
                            case 1:
                                var _v6 = requestPayload.a;
                                var path = _v6.a;
                                var apiHandler = _v6.b;
                                var thing = apiHandler.fX(path);
                                return function (response) {
                                    if (!response.$) {
                                        if (!response.a.$) {
                                            var okResponse = response.a.a;
                                            return $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$SendApiResponse({ er: okResponse, aZ: $elm$core$Dict$empty, aa: 200 }));
                                        }
                                        else {
                                            var _v8 = response.a;
                                            return $author$project$Pages$Internal$Platform$Cli$render404Page_fn(config, $elm$core$Result$toMaybe(sharedDataResult), model, $author$project$Path$fromString(path), $author$project$Pages$Internal$NotFoundReason$NoMatchingRoute);
                                        }
                                    }
                                    else {
                                        var error = response.a;
                                        return $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$Errors(_List_fromArray([error])));
                                    }
                                }($elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError("TODO - path from request"), $author$project$Pages$StaticHttpRequest$resolve_fn(thing, model.Q)));
                            case 0:
                                var payload = requestPayload.a;
                                var pageFoundResult = $elm$core$Result$mapError_fn($author$project$Pages$StaticHttpRequest$toBuildError($author$project$Path$toAbsolute(payload.cd)), $author$project$Pages$StaticHttpRequest$resolve_fn(model.U ? config.fV(payload.eG) : $author$project$DataSource$succeed($elm$core$Maybe$Nothing), model.Q));
                                if (!pageFoundResult.$) {
                                    if (pageFoundResult.a.$ === 1) {
                                        var _v10 = pageFoundResult.a;
                                        return $author$project$Pages$Internal$Platform$Cli$sendSinglePageProgress_fn(site, model.Q, config, model, payload);
                                    }
                                    else {
                                        var notFoundReason = pageFoundResult.a.a;
                                        return $author$project$Pages$Internal$Platform$Cli$render404Page_fn(config, $elm$core$Result$toMaybe(sharedDataResult), model, payload.cd, notFoundReason);
                                    }
                                }
                                else {
                                    var error = pageFoundResult.a;
                                    return $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$Errors(_List_fromArray([error])));
                                }
                            default:
                                var path = requestPayload.a;
                                return $author$project$Pages$Internal$Platform$Cli$render404Page_fn(config, $elm$core$Result$toMaybe(sharedDataResult), model, path, $author$project$Pages$Internal$NotFoundReason$NoMatchingRoute);
                        }
                    }();
                    return _Utils_Tuple2(model, apiResponse);
                }
                else {
                    var errors = toJsPayload.a;
                    return _Utils_Tuple2(model, $author$project$Pages$Internal$Platform$Effect$SendSinglePage($author$project$Pages$Internal$Platform$ToJsPayload$Errors(errors)));
                }
            }
        }
    }, $author$project$Pages$Internal$Platform$Cli$nextStepToEffect = F4($author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$ApiRequest = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$DataSource$map_fn = function (fn, requestInfo) {
        switch (requestInfo.$) {
            case 1:
                var error = requestInfo.a;
                return $author$project$Pages$StaticHttpRequest$RequestError(error);
            case 0:
                var urls = requestInfo.a;
                var lookupFn = requestInfo.b;
                return $author$project$Pages$StaticHttpRequest$Request_fn(urls, A2($author$project$DataSource$mapLookupFn, fn, lookupFn));
            default:
                var value = requestInfo.a;
                return $author$project$Pages$StaticHttpRequest$ApiRoute(fn(value));
        }
    }, $author$project$DataSource$map = F2($author$project$DataSource$map_fn);
    var $author$project$DataSource$mapLookupFn_fn = function (fn, lookupFn, maybeMock, requests) {
        return $author$project$DataSource$map_fn(fn, A2(lookupFn, maybeMock, requests));
    }, $author$project$DataSource$mapLookupFn_fn_unwrapped = function (fn, lookupFn, maybeMock, requests) {
        return $author$project$DataSource$map_fn(fn, lookupFn(maybeMock, requests));
    }, $author$project$DataSource$mapLookupFn = F4($author$project$DataSource$mapLookupFn_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$renderApiRequest = function (request) {
        return $author$project$Pages$Internal$Platform$StaticResponses$ApiRequest($author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn($author$project$DataSource$map_fn(function (_v0) {
            return 0;
        }, request), $elm$core$Dict$empty));
    };
    var $author$project$Pages$Internal$Platform$StaticResponses$CheckIfHandled_fn = function (a, b, c) {
        return { $: 2, a: a, b: b, c: c };
    }, $author$project$Pages$Internal$Platform$StaticResponses$CheckIfHandled = F3($author$project$Pages$Internal$Platform$StaticResponses$CheckIfHandled_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$renderSingleRoute_fn = function (request, cliData) {
        return $author$project$Pages$Internal$Platform$StaticResponses$CheckIfHandled_fn(cliData, $author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn($author$project$DataSource$map_fn(function (_v0) {
            return 0;
        }, cliData), $elm$core$Dict$empty), $author$project$Pages$Internal$Platform$StaticResponses$NotFetched_fn($author$project$DataSource$map_fn(function (_v1) {
            return 0;
        }, request), $elm$core$Dict$empty));
    }, $author$project$Pages$Internal$Platform$StaticResponses$renderSingleRoute = F2($author$project$Pages$Internal$Platform$StaticResponses$renderSingleRoute_fn);
    var $author$project$Pages$Internal$Platform$Cli$initLegacy_fn = function (site, renderRequest, _v0, config) {
        var isDevServer = _v0.U;
        var staticHttpCache = _v0.aZ;
        var unprocessedPages = function () {
            var serverRequestPayload = renderRequest.b;
            switch (serverRequestPayload.$) {
                case 0:
                    var pageData = serverRequestPayload.a;
                    return _List_fromArray([
                        _Utils_Tuple2(pageData.cd, pageData.eG)
                    ]);
                case 1:
                    return _List_Nil;
                default:
                    return _List_Nil;
            }
        }();
        var staticResponses = function () {
            var singleRequest = renderRequest.b;
            switch (singleRequest.$) {
                case 0:
                    var serverRequestPayload = singleRequest.a;
                    return $author$project$Pages$Internal$Platform$StaticResponses$renderSingleRoute_fn($author$project$DataSource$map3_fn(F3(function (_v3, _v4, _v5) {
                        return 0;
                    }), config.m(serverRequestPayload.eG), config.E, $elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed(_List_Nil), config.eH)), isDevServer ? config.fV(serverRequestPayload.eG) : $author$project$DataSource$succeed($elm$core$Maybe$Nothing));
                case 1:
                    var _v6 = singleRequest.a;
                    var path = _v6.a;
                    var apiRequest = _v6.b;
                    return $author$project$Pages$Internal$Platform$StaticResponses$renderApiRequest($author$project$DataSource$map2_fn(F2(function (_v7, _v8) {
                        return 0;
                    }), apiRequest.fX(path), $elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed(_List_Nil), config.eH)));
                default:
                    return $author$project$Pages$Internal$Platform$StaticResponses$renderApiRequest($author$project$DataSource$map2_fn(F2(function (_v9, _v10) {
                        return 0;
                    }), $author$project$DataSource$succeed(_List_Nil), $elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed(_List_Nil), config.eH)));
            }
        }();
        var initialModel = { Q: staticHttpCache, Y: _List_Nil, U: isDevServer, aU: renderRequest, bU: staticResponses, bi: unprocessedPages };
        return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, initialModel, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(initialModel, $elm$core$Maybe$Nothing));
    }, $author$project$Pages$Internal$Platform$Cli$initLegacy = F4($author$project$Pages$Internal$Platform$Cli$initLegacy_fn);
    var $author$project$Pages$Internal$Platform$Cli$updateAndSendPortIfDone_fn = function (site, config, model) {
        return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, model, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(model, $elm$core$Maybe$Nothing));
    }, $author$project$Pages$Internal$Platform$Cli$updateAndSendPortIfDone = F3($author$project$Pages$Internal$Platform$Cli$updateAndSendPortIfDone_fn);
    var $author$project$Pages$Internal$Platform$Cli$init_fn = function (site, renderRequest, config, flags) {
        var _v0 = _Json_run_fn($author$project$Pages$Internal$Platform$Cli$flagsDecoder, flags);
        if (!_v0.$) {
            var isDevServer = _v0.a.U;
            var staticHttpCache = _v0.a.aZ;
            return $author$project$Pages$Internal$Platform$Cli$initLegacy_fn(site, renderRequest, { U: isDevServer, aZ: staticHttpCache }, config);
        }
        else {
            var error = _v0.a;
            return $author$project$Pages$Internal$Platform$Cli$updateAndSendPortIfDone_fn(site, config, {
                Q: $elm$core$Dict$empty,
                Y: _List_fromArray([
                    {
                        cZ: true,
                        bH: _List_fromArray([
                            $author$project$TerminalText$text("Failed to parse flags: " + $elm$json$Json$Decode$errorToString(error))
                        ]),
                        cd: "",
                        be: "Internal Error"
                    }
                ]),
                U: false,
                aU: renderRequest,
                bU: $author$project$Pages$Internal$Platform$StaticResponses$empty,
                bi: _List_Nil
            });
        }
    }, $author$project$Pages$Internal$Platform$Cli$init = F4($author$project$Pages$Internal$Platform$Cli$init_fn);
    var $author$project$BuildError$internal = function (string) {
        return {
            cZ: true,
            bH: _List_fromArray([
                $author$project$TerminalText$text(string)
            ]),
            cd: "",
            be: "Internal Error"
        };
    };
    var $elm$core$Platform$Sub$map = _Platform_map;
    var $author$project$Pages$Internal$Platform$Cli$mergeResult = function (r) {
        if (!r.$) {
            var rr = r.a;
            return rr;
        }
        else {
            var rr = r.a;
            return rr;
        }
    };
    var $author$project$Pages$Http$BadUrl = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Internal$Platform$ToJsPayload$DoHttp = function (a) {
        return { $: 2, a: a };
    };
    var $elm$core$Platform$Cmd$batch = _Platform_batch;
    var $elm$core$Result$fromMaybe_fn = function (err, maybe) {
        if (!maybe.$) {
            var v = maybe.a;
            return $elm$core$Result$Ok(v);
        }
        else {
            return $elm$core$Result$Err(err);
        }
    }, $elm$core$Result$fromMaybe = F2($elm$core$Result$fromMaybe_fn);
    var $elm$core$Platform$Cmd$map = _Platform_map;
    var $author$project$RenderRequest$maybeRequestPayload = function (renderRequest) {
        var rawJson = renderRequest.c;
        return $elm$core$Maybe$Just(rawJson);
    };
    var $elm$core$Basics$never = function (_v0) {
        never: while (true) {
            var nvr = _v0;
            var $temp$_v0 = nvr;
            _v0 = $temp$_v0;
            continue never;
        }
    };
    var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
    var $elm$core$Task$Perform = $elm$core$Basics$identity;
    var $elm$core$Task$succeed = _Scheduler_succeed;
    var $elm$core$Task$init = $elm$core$Task$succeed(0);
    var $elm$core$Task$andThen = _Scheduler_andThen;
    var $elm$core$Task$map_fn = function (func, taskA) {
        return _Scheduler_andThen_fn(function (a) {
            return $elm$core$Task$succeed(func(a));
        }, taskA);
    }, $elm$core$Task$map = F2($elm$core$Task$map_fn);
    var $elm$core$Task$map2_fn = function (func, taskA, taskB) {
        return _Scheduler_andThen_fn(function (a) {
            return _Scheduler_andThen_fn(function (b) {
                return $elm$core$Task$succeed(A2(func, a, b));
            }, taskB);
        }, taskA);
    }, $elm$core$Task$map2_fn_unwrapped = function (func, taskA, taskB) {
        return _Scheduler_andThen_fn(function (a) {
            return _Scheduler_andThen_fn(function (b) {
                return $elm$core$Task$succeed(func(a, b));
            }, taskB);
        }, taskA);
    }, $elm$core$Task$map2 = F3($elm$core$Task$map2_fn);
    var $elm$core$Task$sequence = function (tasks) {
        return $elm$core$List$foldr_fn($elm$core$Task$map2($elm$core$List$cons), $elm$core$Task$succeed(_List_Nil), tasks);
    };
    var $elm$core$Platform$sendToApp = _Platform_sendToApp;
    var $elm$core$Task$spawnCmd_fn = function (router, _v0) {
        var task = _v0;
        return _Scheduler_spawn(_Scheduler_andThen_fn($elm$core$Platform$sendToApp(router), task));
    }, $elm$core$Task$spawnCmd = F2($elm$core$Task$spawnCmd_fn);
    var $elm$core$Task$onEffects_fn = function (router, commands, state) {
        return $elm$core$Task$map_fn(function (_v0) {
            return 0;
        }, $elm$core$Task$sequence($elm$core$List$map_fn($elm$core$Task$spawnCmd(router), commands)));
    }, $elm$core$Task$onEffects = F3($elm$core$Task$onEffects_fn);
    var $elm$core$Task$onSelfMsg_fn = function (_v0, _v1, _v2) {
        return $elm$core$Task$succeed(0);
    }, $elm$core$Task$onSelfMsg = F3($elm$core$Task$onSelfMsg_fn);
    var $elm$core$Task$cmdMap_fn = function (tagger, _v0) {
        var task = _v0;
        return $elm$core$Task$map_fn(tagger, task);
    }, $elm$core$Task$cmdMap = F2($elm$core$Task$cmdMap_fn);
    _Platform_effectManagers["Task"] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
    var $elm$core$Task$command = _Platform_leaf("Task");
    var $elm$core$Task$perform_fn = function (toMessage, task) {
        return $elm$core$Task$command($elm$core$Task$map_fn(toMessage, task));
    }, $elm$core$Task$perform = F2($elm$core$Task$perform_fn);
    var $author$project$Pages$Internal$Platform$ToJsPayload$ApiResponse = { $: 5 };
    var $author$project$Pages$Internal$Platform$ToJsPayload$Port = function (a) {
        return { $: 3, a: a };
    };
    var $elm$core$Basics$composeL_fn = function (g, f, x) {
        return g(f(x));
    }, $elm$core$Basics$composeL = F3($elm$core$Basics$composeL_fn);
    var $elm$core$Dict$map_fn = function (func, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, A2(func, key, value), $elm$core$Dict$map_fn(func, left), $elm$core$Dict$map_fn(func, right));
        }
    }, $elm$core$Dict$map_fn_unwrapped = function (func, dict) {
        if (dict.$ === -2) {
            return $elm$core$Dict$RBEmpty_elm_builtin;
        }
        else {
            var color = dict.a;
            var key = dict.b;
            var value = dict.c;
            var left = dict.d;
            var right = dict.e;
            return $elm$core$Dict$RBNode_elm_builtin_fn(color, key, func(key, value), $elm$core$Dict$map_fn_unwrapped(func, left), $elm$core$Dict$map_fn_unwrapped(func, right));
        }
    }, $elm$core$Dict$map = F2($elm$core$Dict$map_fn);
    var $miniBill$elm_codec$Codec$dict_a0 = function (e) {
        return A2($elm$core$Basics$composeL, A2($elm$core$Basics$composeL, $elm$json$Json$Encode$object, $elm$core$Dict$toList), $elm$core$Dict$map(function (_v0) {
            return e;
        }));
    }, $miniBill$elm_codec$Codec$dict_a1 = $elm$json$Json$Decode$dict, $miniBill$elm_codec$Codec$dict = A2($miniBill$elm_codec$Codec$composite, $miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1);
    var $author$project$TerminalText$encoder = function (_v0) {
        var ansiStyle = _v0.a;
        var string = _v0.b;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("bold", $elm$json$Json$Encode$bool(ansiStyle.bn)),
            _Utils_Tuple2("underline", $elm$json$Json$Encode$bool(ansiStyle.bX)),
            _Utils_Tuple2("color", $elm$json$Json$Encode$string(function () {
                var _v1 = $elm$core$Maybe$withDefault_fn($vito$elm_ansi$Ansi$White, ansiStyle.R);
                switch (_v1.$) {
                    case 1:
                        return "red";
                    case 4:
                        return "blue";
                    case 2:
                        return "green";
                    case 3:
                        return "yellow";
                    case 6:
                        return "cyan";
                    case 0:
                        return "black";
                    case 5:
                        return "magenta";
                    case 7:
                        return "white";
                    case 8:
                        return "BLACK";
                    case 9:
                        return "RED";
                    case 10:
                        return "GREEN";
                    case 11:
                        return "YELLOW";
                    case 12:
                        return "BLUE";
                    case 13:
                        return "MAGENTA";
                    case 14:
                        return "CYAN";
                    case 15:
                        return "WHITE";
                    default:
                        return "";
                }
            }())),
            _Utils_Tuple2("string", $elm$json$Json$Encode$string(string))
        ]));
    };
    var $author$project$BuildError$messagesEncoder_fn = function (title, messages) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("title", $elm$json$Json$Encode$string(title)),
            _Utils_Tuple2("message", $elm$json$Json$Encode$list_fn($author$project$TerminalText$encoder, messages))
        ]));
    }, $author$project$BuildError$messagesEncoder = F2($author$project$BuildError$messagesEncoder_fn);
    var $author$project$BuildError$encode = function (buildErrors) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("type", $elm$json$Json$Encode$string("compile-errors")),
            _Utils_Tuple2("errors", $elm$json$Json$Encode$list_fn(function (buildError) {
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("path", $elm$json$Json$Encode$string(buildError.cd)),
                    _Utils_Tuple2("name", $elm$json$Json$Encode$string(buildError.be)),
                    _Utils_Tuple2("problems", $elm$json$Json$Encode$list_fn($author$project$BuildError$messagesEncoder(buildError.be), _List_fromArray([buildError.bH])))
                ]));
            }, buildErrors))
        ]));
    };
    var $author$project$TerminalText$cyan = function (inner) {
        return $author$project$TerminalText$Style_fn(_Utils_update($author$project$TerminalText$blankStyle, {
            R: $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Cyan)
        }), inner);
    };
    var $elm$core$String$toUpper = _String_toUpper;
    var $author$project$BuildError$banner = function (title) {
        return _List_fromArray([
            $author$project$TerminalText$cyan("-- " + ($elm$core$String$toUpper(title) + " ----------------------------------------------------- elm-pages")),
            $author$project$TerminalText$text("\n\n")
        ]);
    };
    var $author$project$TerminalText$ansiPrefix = "\u001B";
    var $author$project$TerminalText$ansi = function (code) {
        return _Utils_ap($author$project$TerminalText$ansiPrefix, code);
    };
    var $author$project$TerminalText$colorToString = function (color) {
        return $author$project$TerminalText$ansi(function () {
            switch (color.$) {
                case 1:
                    return "[31m";
                case 4:
                    return "[34m";
                case 2:
                    return "[32m";
                case 3:
                    return "[33m";
                case 6:
                    return "[36m";
                default:
                    return "";
            }
        }());
    };
    var $elm$core$String$concat = function (strings) {
        return $elm$core$String$join_fn("", strings);
    };
    var $author$project$TerminalText$resetColors = $author$project$TerminalText$ansi("[0m");
    var $author$project$TerminalText$toString_ = function (_v0) {
        var ansiStyle = _v0.a;
        var innerText = _v0.b;
        return $elm$core$String$concat(_List_fromArray([
            $author$project$TerminalText$colorToString($elm$core$Maybe$withDefault_fn($vito$elm_ansi$Ansi$White, ansiStyle.R)),
            innerText,
            $author$project$TerminalText$resetColors
        ]));
    };
    var $author$project$TerminalText$toString = function (list) {
        return $elm$core$String$join_fn("", $elm$core$List$map_fn($author$project$TerminalText$toString_, list));
    };
    var $author$project$BuildError$errorToString = function (error) {
        return $author$project$TerminalText$toString(_Utils_ap($author$project$BuildError$banner(error.be), error.bH));
    };
    var $author$project$BuildError$errorsToString = function (errors) {
        return $elm$core$String$join_fn("\n\n", $elm$core$List$map_fn($author$project$BuildError$errorToString, errors));
    };
    var $author$project$Pages$Internal$Platform$ToJsPayload$errorCodec = $miniBill$elm_codec$Codec$buildObject($miniBill$elm_codec$Codec$field_fn("errorsJson", $elm$core$Basics$identity, $miniBill$elm_codec$Codec$build_fn($author$project$BuildError$encode, $elm$json$Json$Decode$succeed(_List_fromArray([
        { cZ: true, bH: _List_Nil, cd: "", be: "TODO" }
    ]))), $miniBill$elm_codec$Codec$field_fn("errorString", $elm$core$Basics$identity, $miniBill$elm_codec$Codec$build_fn(A2($elm$core$Basics$composeR, $author$project$BuildError$errorsToString, $elm$json$Json$Encode$string), _Json_map1_fn(function (value) {
        return _List_fromArray([
            { cZ: false, bH: _List_Nil, cd: "Intentionally empty", be: value }
        ]);
    }, $elm$json$Json$Decode$string)), $miniBill$elm_codec$Codec$object(F2(function (errorString, _v0) {
        return errorString;
    })))));
    var $miniBill$elm_codec$Codec$int = $miniBill$elm_codec$Codec$build_fn($elm$json$Json$Encode$int, $elm$json$Json$Decode$int);
    var $author$project$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayloadNew = function (route) {
        return function (html) {
            return function (contentJson) {
                return function (errors) {
                    return function (head) {
                        return function (title) {
                            return function (staticHttpCache) {
                                return function (is404) {
                                    return function (statusCode) {
                                        return function (headers) {
                                            return { fu: contentJson, Y: errors, aI: head, eI: headers, fy: html, fz: is404, hE: route, aZ: staticHttpCache, aa: statusCode, be: title };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var $miniBill$elm_codec$Codec$bool = $miniBill$elm_codec$Codec$build_fn($elm$json$Json$Encode$bool, $elm$json$Json$Decode$bool);
    var $author$project$Head$FullUrlToCurrentPage = { $: 2 };
    var $author$project$Head$currentPageFullUrl = $author$project$Head$FullUrlToCurrentPage;
    var $author$project$Head$Tag = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Head$node_fn = function (name, attributes) {
        return $author$project$Head$Tag({ bZ: attributes, he: name });
    }, $author$project$Head$node = F2($author$project$Head$node_fn);
    var $author$project$Head$Raw = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Head$raw = function (value) {
        return $author$project$Head$Raw(value);
    };
    var $author$project$Head$canonicalLink = function (maybePath) {
        return $author$project$Head$node_fn("link", _List_fromArray([
            _Utils_Tuple2("rel", $author$project$Head$raw("canonical")),
            _Utils_Tuple2("href", $elm$core$Maybe$withDefault_fn($author$project$Head$currentPageFullUrl, $elm$core$Maybe$map_fn($author$project$Head$raw, maybePath)))
        ]));
    };
    var $author$project$Head$joinPaths_fn = function (base, path) {
        return $author$project$Pages$Internal$String$chopEnd_fn("/", base) + ("/" + $author$project$Pages$Internal$String$chopStart_fn("/", path));
    }, $author$project$Head$joinPaths = F2($author$project$Head$joinPaths_fn);
    var $author$project$Pages$Url$join_fn = function (base, path) {
        return $author$project$Pages$Internal$String$chopEnd_fn("/", base) + ("/" + $author$project$Pages$Internal$String$chopStart_fn("/", path));
    }, $author$project$Pages$Url$join = F2($author$project$Pages$Url$join_fn);
    var $author$project$Pages$Url$toAbsoluteUrl_fn = function (canonicalSiteUrl, url) {
        if (url.$ === 1) {
            var externalUrl = url.a;
            return externalUrl;
        }
        else {
            var internalUrl = url.a;
            return $author$project$Pages$Url$join_fn(canonicalSiteUrl, internalUrl);
        }
    }, $author$project$Pages$Url$toAbsoluteUrl = F2($author$project$Pages$Url$toAbsoluteUrl_fn);
    var $author$project$Head$encodeProperty_fn = function (canonicalSiteUrl, currentPagePath, _v0) {
        var name = _v0.a;
        var value = _v0.b;
        switch (value.$) {
            case 0:
                var rawValue = value.a;
                return $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _List_fromArray([name, rawValue]));
            case 2:
                return $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _List_fromArray([
                    name,
                    $author$project$Head$joinPaths_fn(canonicalSiteUrl, currentPagePath)
                ]));
            default:
                var url = value.a;
                return $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _List_fromArray([
                    name,
                    $author$project$Pages$Url$toAbsoluteUrl_fn(canonicalSiteUrl, url)
                ]));
        }
    }, $author$project$Head$encodeProperty = F3($author$project$Head$encodeProperty_fn);
    var $author$project$Head$toJson_fn = function (canonicalSiteUrl, currentPagePath, tag) {
        switch (tag.$) {
            case 0:
                var headTag = tag.a;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("name", $elm$json$Json$Encode$string(headTag.he)),
                    _Utils_Tuple2("attributes", $elm$json$Json$Encode$list_fn(A2($author$project$Head$encodeProperty, canonicalSiteUrl, currentPagePath), headTag.bZ)),
                    _Utils_Tuple2("type", $elm$json$Json$Encode$string("head"))
                ]));
            case 1:
                var value = tag.a;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("contents", value),
                    _Utils_Tuple2("type", $elm$json$Json$Encode$string("json-ld"))
                ]));
            default:
                var key = tag.a;
                var value = tag.b;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("type", $elm$json$Json$Encode$string("root")),
                    _Utils_Tuple2("keyValuePair", $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _List_fromArray([key, value])))
                ]));
        }
    }, $author$project$Head$toJson = F3($author$project$Head$toJson_fn);
    var $author$project$Pages$Internal$Platform$ToJsPayload$headCodec_fn = function (canonicalSiteUrl, currentPagePath) {
        return $miniBill$elm_codec$Codec$build_fn(A2($author$project$Head$toJson, canonicalSiteUrl, currentPagePath), $elm$json$Json$Decode$succeed($author$project$Head$canonicalLink($elm$core$Maybe$Nothing)));
    }, $author$project$Pages$Internal$Platform$ToJsPayload$headCodec = F2($author$project$Pages$Internal$Platform$ToJsPayload$headCodec_fn);
    var $miniBill$elm_codec$Codec$map_fn = function (go, back, codec) {
        return {
            fS: _Json_map1_fn(go, $miniBill$elm_codec$Codec$decoder(codec)),
            h: function (v) {
                return A2($miniBill$elm_codec$Codec$encoder, codec, back(v));
            }
        };
    }, $miniBill$elm_codec$Codec$map = F3($miniBill$elm_codec$Codec$map_fn);
    var $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew_fn = function (canonicalSiteUrl, currentPagePath) {
        return $miniBill$elm_codec$Codec$buildObject($miniBill$elm_codec$Codec$field_fn("headers", function ($) {
            return $.eI;
        }, $miniBill$elm_codec$Codec$map_fn($elm$core$Dict$toList, $elm$core$Dict$fromList, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1, $miniBill$elm_codec$Codec$string)), $miniBill$elm_codec$Codec$field_fn("statusCode", function ($) {
            return $.aa;
        }, $miniBill$elm_codec$Codec$int, $miniBill$elm_codec$Codec$field_fn("is404", function ($) {
            return $.fz;
        }, $miniBill$elm_codec$Codec$bool, $miniBill$elm_codec$Codec$field_fn("staticHttpCache", function ($) {
            return $.aZ;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1, $miniBill$elm_codec$Codec$string), $miniBill$elm_codec$Codec$field_fn("title", function ($) {
            return $.be;
        }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$field_fn("head", function ($) {
            return $.aI;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$list_a0, $miniBill$elm_codec$Codec$list_a1, $author$project$Pages$Internal$Platform$ToJsPayload$headCodec_fn(canonicalSiteUrl, currentPagePath)), $miniBill$elm_codec$Codec$field_fn("errors", function ($) {
            return $.Y;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$list_a0, $miniBill$elm_codec$Codec$list_a1, $miniBill$elm_codec$Codec$string), $miniBill$elm_codec$Codec$field_fn("contentJson", function ($) {
            return $.fu;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1, $miniBill$elm_codec$Codec$string), $miniBill$elm_codec$Codec$field_fn("html", function ($) {
            return $.fy;
        }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$field_fn("route", function ($) {
            return $.hE;
        }, $miniBill$elm_codec$Codec$string, $miniBill$elm_codec$Codec$object($author$project$Pages$Internal$Platform$ToJsPayload$ToJsSuccessPayloadNew))))))))))));
    }, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew = F2($author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew_fn);
    var $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn = function (canonicalSiteUrl, currentPagePath) {
        return $miniBill$elm_codec$Codec$buildCustom(A4($miniBill$elm_codec$Codec$variant1, "Port", $author$project$Pages$Internal$Platform$ToJsPayload$Port, $miniBill$elm_codec$Codec$string, A4($miniBill$elm_codec$Codec$variant1, "ApiResponse", $author$project$Pages$Internal$Platform$ToJsPayload$SendApiResponse, $miniBill$elm_codec$Codec$buildObject($miniBill$elm_codec$Codec$field_fn("statusCode", function ($) {
            return $.aa;
        }, $miniBill$elm_codec$Codec$int, $miniBill$elm_codec$Codec$field_fn("staticHttpCache", function ($) {
            return $.aZ;
        }, $miniBill$elm_codec$Codec$composite_fn($miniBill$elm_codec$Codec$dict_a0, $miniBill$elm_codec$Codec$dict_a1, $miniBill$elm_codec$Codec$string), $miniBill$elm_codec$Codec$field_fn("body", function ($) {
            return $.er;
        }, $miniBill$elm_codec$Codec$value, $miniBill$elm_codec$Codec$object(F3(function (body, staticHttpCache, statusCode) {
            return { er: body, aZ: staticHttpCache, aa: statusCode };
        })))))), A4($miniBill$elm_codec$Codec$variant1, "DoHttp", $author$project$Pages$Internal$Platform$ToJsPayload$DoHttp, $author$project$Pages$StaticHttp$Request$codec, A4($miniBill$elm_codec$Codec$variant1, "PageProgress", $author$project$Pages$Internal$Platform$ToJsPayload$PageProgress, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew_fn(canonicalSiteUrl, currentPagePath), A3($miniBill$elm_codec$Codec$variant0, "ApiResponse", $author$project$Pages$Internal$Platform$ToJsPayload$ApiResponse, A4($miniBill$elm_codec$Codec$variant1, "Errors", $author$project$Pages$Internal$Platform$ToJsPayload$Errors, $author$project$Pages$Internal$Platform$ToJsPayload$errorCodec, $miniBill$elm_codec$Codec$custom(F7(function (errorsTag, vApiResponse, success, vDoHttp, vSendApiResponse, vPort, value) {
            switch (value.$) {
                case 5:
                    return vApiResponse;
                case 4:
                    var errorList = value.a;
                    return errorsTag(errorList);
                case 0:
                    var payload = value.a;
                    return success(payload);
                case 2:
                    var requestUrl = value.a;
                    return vDoHttp(requestUrl);
                case 1:
                    var record = value.a;
                    return vSendApiResponse(record);
                default:
                    var string = value.a;
                    return vPort(string);
            }
        })))))))));
    }, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2 = F2($author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn);
    var $author$project$TerminalText$yellow = function (inner) {
        return $author$project$TerminalText$Style_fn(_Utils_update($author$project$TerminalText$blankStyle, {
            R: $elm$core$Maybe$Just($vito$elm_ansi$Ansi$Yellow)
        }), inner);
    };
    var $author$project$Pages$Internal$Platform$Cli$flatten_fn = function (site, renderRequest, config, list) {
        return $elm$core$Platform$Cmd$batch($author$project$Pages$Internal$Platform$Cli$flattenHelp_fn(_List_Nil, site, renderRequest, config, list));
    }, $author$project$Pages$Internal$Platform$Cli$flatten = F4($author$project$Pages$Internal$Platform$Cli$flatten_fn);
    var $author$project$Pages$Internal$Platform$Cli$flattenHelp_fn = function (soFar, site, renderRequest, config, list) {
        flattenHelp: while (true) {
            if (list.b) {
                var first = list.a;
                var rest = list.b;
                var $temp$soFar = _List_Cons($author$project$Pages$Internal$Platform$Cli$perform_fn(site, renderRequest, config, first), soFar), $temp$site = site, $temp$renderRequest = renderRequest, $temp$config = config, $temp$list = rest;
                soFar = $temp$soFar;
                site = $temp$site;
                renderRequest = $temp$renderRequest;
                config = $temp$config;
                list = $temp$list;
                continue flattenHelp;
            }
            else {
                return soFar;
            }
        }
    }, $author$project$Pages$Internal$Platform$Cli$flattenHelp = F5($author$project$Pages$Internal$Platform$Cli$flattenHelp_fn);
    var $author$project$Pages$Internal$Platform$Cli$perform_fn = function (site, renderRequest, config, effect) {
        var canonicalSiteUrl = site.f9;
        switch (effect.$) {
            case 0:
                return $elm$core$Platform$Cmd$none;
            case 2:
                var list = effect.a;
                return $author$project$Pages$Internal$Platform$Cli$flatten_fn(site, renderRequest, config, list);
            case 1:
                var unmasked = effect.a;
                if (unmasked.C === "$$elm-pages$$headers") {
                    var _v1 = $elm$core$Result$fromMaybe_fn($author$project$Pages$Http$BadUrl("$$elm-pages$$headers is only available on server-side request (not on build)."), $elm$core$Maybe$map_fn(function (json) {
                        return $author$project$RequestsAndPending$Response_fn($elm$core$Maybe$Nothing, $author$project$RequestsAndPending$JsonBody(json));
                    }, $author$project$RenderRequest$maybeRequestPayload(renderRequest)));
                    if (!_v1.$) {
                        var okResponse = _v1.a;
                        return $elm$core$Task$perform_fn($author$project$Pages$Internal$Platform$Cli$GotDataBatch, $elm$core$Task$succeed(_List_fromArray([
                            { dM: unmasked, dN: okResponse }
                        ])));
                    }
                    else {
                        var error = _v1.a;
                        return $elm$core$Task$perform_fn($author$project$Pages$Internal$Platform$Cli$GotBuildError, $elm$core$Task$succeed({
                            cZ: true,
                            bH: _List_fromArray([
                                $author$project$TerminalText$text("I got an error making an HTTP request to this URL: "),
                                $author$project$TerminalText$yellow(unmasked.C),
                                $author$project$TerminalText$text(_Json_encode_fn(2, $author$project$Pages$Internal$StaticHttpBody$encode(unmasked.er))),
                                $author$project$TerminalText$text("\n\n"),
                                function () {
                                    switch (error.$) {
                                        case 3:
                                            var metadata = error.a;
                                            var body = error.b;
                                            return $author$project$TerminalText$text($elm$core$String$join_fn("\n", _List_fromArray([
                                                "Bad status: " + $elm$core$String$fromInt(metadata.aa),
                                                "Status message: " + metadata.bc,
                                                "Body: " + body
                                            ])));
                                        case 0:
                                            return $author$project$TerminalText$text("Invalid url: " + unmasked.C);
                                        case 1:
                                            return $author$project$TerminalText$text("Timeout");
                                        default:
                                            return $author$project$TerminalText$text("Network error");
                                    }
                                }()
                            ]),
                            cd: "",
                            be: "Static HTTP Error"
                        }));
                    }
                }
                else {
                    return _Platform_map_fn($elm$core$Basics$never, config.hT(A2($miniBill$elm_codec$Codec$encoder, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn(canonicalSiteUrl, ""), $author$project$Pages$Internal$Platform$ToJsPayload$DoHttp(unmasked))));
                }
            case 3:
                var info = effect.a;
                var currentPagePath = function () {
                    if (!info.$) {
                        var toJsSuccessPayloadNew = info.a;
                        return toJsSuccessPayloadNew.hE;
                    }
                    else {
                        return "";
                    }
                }();
                return _Platform_map_fn($elm$core$Basics$never, config.hT(A2($miniBill$elm_codec$Codec$encoder, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn(canonicalSiteUrl, currentPagePath), info)));
            case 4:
                var rawBytes = effect.a;
                var info = effect.b;
                var currentPagePath = function () {
                    if (!info.$) {
                        var toJsSuccessPayloadNew = info.a;
                        return toJsSuccessPayloadNew.hE;
                    }
                    else {
                        return "";
                    }
                }();
                return _Platform_map_fn($elm$core$Basics$never, config.hI({
                    gH: rawBytes,
                    ho: A2($miniBill$elm_codec$Codec$encoder, $author$project$Pages$Internal$Platform$ToJsPayload$successCodecNew2_fn(canonicalSiteUrl, currentPagePath), info)
                }));
            default:
                return $elm$core$Platform$Cmd$none;
        }
    }, $author$project$Pages$Internal$Platform$Cli$perform = F4($author$project$Pages$Internal$Platform$Cli$perform_fn);
    var $elm$core$Dict$update_fn = function (targetKey, alter, dictionary) {
        var _v0 = alter($elm$core$Dict$get_fn(targetKey, dictionary));
        if (!_v0.$) {
            var value = _v0.a;
            return $elm$core$Dict$insert_fn(targetKey, value, dictionary);
        }
        else {
            return $elm$core$Dict$remove_fn(targetKey, dictionary);
        }
    }, $elm$core$Dict$update = F3($elm$core$Dict$update_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$insertAll_fn = function (newEntries, dict) {
        insertAll: while (true) {
            if (!newEntries.b) {
                return dict;
            }
            else {
                var info = newEntries.a;
                var rest = newEntries.b;
                var $temp$newEntries = rest, $temp$dict = $elm$core$Dict$update_fn($author$project$Pages$StaticHttp$Request$hash(info.dM), function (_v1) {
                    return $elm$core$Maybe$Just($elm$core$Maybe$Just(info.dN));
                }, dict);
                newEntries = $temp$newEntries;
                dict = $temp$dict;
                continue insertAll;
            }
        }
    }, $author$project$Pages$Internal$Platform$StaticResponses$insertAll = F2($author$project$Pages$Internal$Platform$StaticResponses$insertAll_fn);
    var $author$project$Pages$Internal$Platform$StaticResponses$batchUpdate_fn = function (newEntries, model) {
        return _Utils_update(model, {
            Q: $author$project$Pages$Internal$Platform$StaticResponses$insertAll_fn(newEntries, model.Q)
        });
    }, $author$project$Pages$Internal$Platform$StaticResponses$batchUpdate = F2($author$project$Pages$Internal$Platform$StaticResponses$batchUpdate_fn);
    var $author$project$Pages$Internal$Platform$Cli$update_fn = function (site, config, msg, model) {
        switch (msg.$) {
            case 0:
                var batch = msg.a;
                var updatedModel = $author$project$Pages$Internal$Platform$StaticResponses$batchUpdate_fn(batch, model);
                return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, updatedModel, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(updatedModel, $elm$core$Maybe$Nothing));
            case 2:
                var updatedModel = model;
                return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, updatedModel, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(updatedModel, $elm$core$Maybe$Nothing));
            default:
                var buildError = msg.a;
                var updatedModel = _Utils_update(model, {
                    Y: _List_Cons(buildError, model.Y)
                });
                return $author$project$Pages$Internal$Platform$Cli$nextStepToEffect_fn(site, config, updatedModel, $author$project$Pages$Internal$Platform$StaticResponses$nextStep_fn(updatedModel, $elm$core$Maybe$Nothing));
        }
    }, $author$project$Pages$Internal$Platform$Cli$update = F4($author$project$Pages$Internal$Platform$Cli$update_fn);
    var $elm$core$Platform$worker = _Platform_worker;
    var $author$project$Pages$Internal$Platform$Cli$cliApplication = function (config) {
        var getSiteConfig = function (fullConfig) {
            getSiteConfig: while (true) {
                var _v0 = fullConfig.hL;
                if (!_v0.$) {
                    var mySite = _v0.a;
                    return mySite;
                }
                else {
                    var $temp$fullConfig = fullConfig;
                    fullConfig = $temp$fullConfig;
                    continue getSiteConfig;
                }
            }
        };
        var site = getSiteConfig(config);
        return $elm$core$Platform$worker({
            de: function (flags) {
                var renderRequest = $elm$core$Result$withDefault_fn($author$project$RenderRequest$default, _Json_run_fn($author$project$RenderRequest$decoder(config), flags));
                return $elm$core$Tuple$mapSecond_fn(A3($author$project$Pages$Internal$Platform$Cli$perform, site, renderRequest, config), $author$project$Pages$Internal$Platform$Cli$init_fn(site, renderRequest, config, flags));
            },
            dZ: function (_v1) {
                return $elm$core$Platform$Sub$batch(_List_fromArray([
                    _Platform_map_fn(function (jsonValue) {
                        var decoder = _Json_andThen_fn(function (tag) {
                            if (tag === "BuildError") {
                                return _Json_map1_fn($author$project$Pages$Internal$Platform$Cli$GotBuildError, _Json_decodeField_fn("data", _Json_map2_fn(F2(function (message, title) {
                                    return { cZ: true, bH: message, cd: "", be: title };
                                }), _Json_map1_fn($author$project$TerminalText$fromAnsiString, _Json_decodeField_fn("message", $elm$json$Json$Decode$string)), _Json_decodeField_fn("title", $elm$json$Json$Decode$string))));
                            }
                            else {
                                return $elm$json$Json$Decode$fail("Unhandled msg");
                            }
                        }, _Json_decodeField_fn("tag", $elm$json$Json$Decode$string));
                        return $author$project$Pages$Internal$Platform$Cli$mergeResult($elm$core$Result$mapError_fn(function (error) {
                            return $author$project$Pages$Internal$Platform$Cli$GotBuildError($author$project$BuildError$internal("From location 1: " + $elm$json$Json$Decode$errorToString(error)));
                        }, _Json_run_fn(decoder, jsonValue)));
                    }, config.g$),
                    _Platform_map_fn(function (newBatch) {
                        return $author$project$Pages$Internal$Platform$Cli$mergeResult($elm$core$Result$mapError_fn(function (error) {
                            return $author$project$Pages$Internal$Platform$Cli$GotBuildError($author$project$BuildError$internal("From location 2: " + $elm$json$Json$Decode$errorToString(error)));
                        }, $elm$core$Result$map_fn($author$project$Pages$Internal$Platform$Cli$GotDataBatch, _Json_run_fn($author$project$Pages$Internal$Platform$Cli$batchDecoder, newBatch))));
                    }, config.g1)
                ]));
            },
            aO: F2(function (msg, model) {
                return $elm$core$Tuple$mapSecond_fn(A3($author$project$Pages$Internal$Platform$Cli$perform, site, model.aU, config), $author$project$Pages$Internal$Platform$Cli$update_fn(site, config, msg, model));
            })
        });
    };
    var $author$project$Main$DataErrorPage____ = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Main$MsgGlobal = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Main$OnPageChange = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Route$Account = { $: 1 };
    var $author$project$Route$Events = { $: 2 };
    var $author$project$Route$Events__Slug_ = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Route$Index = { $: 3 };
    var $author$project$DataSource$combine_a0 = $author$project$DataSource$map2($elm$core$List$cons), $author$project$DataSource$combine_a1 = $author$project$DataSource$succeed(_List_Nil), $author$project$DataSource$combine = A2($elm$core$List$foldr, $author$project$DataSource$combine_a0, $author$project$DataSource$combine_a1);
    var $author$project$Effect$None = { $: 0 };
    var $author$project$Effect$none = $author$project$Effect$None;
    var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
    var $author$project$RouteBuilder$buildNoState_fn = function (_v0, builderState) {
        var view = _v0.N;
        var record = builderState;
        return {
            m: record.m,
            fV: record.fV,
            aI: record.aI,
            de: F3(function (_v2, _v3, _v4) {
                return _Utils_Tuple2({}, $author$project$Effect$none);
            }),
            fA: record.fA,
            fK: record.fK,
            dZ: F5(function (_v5, _v6, _v7, _v8, _v9) {
                return $elm$core$Platform$Sub$none;
            }),
            aO: F5(function (_v10, _v11, _v12, _v13, _v14) {
                return _Utils_Tuple3({}, $author$project$Effect$none, $elm$core$Maybe$Nothing);
            }),
            N: F3(function (maybePageUrl, sharedModel, _v15) {
                return A2(view, maybePageUrl, sharedModel);
            })
        };
    }, $author$project$RouteBuilder$buildNoState = F2($author$project$RouteBuilder$buildNoState_fn);
    var $author$project$Route$Account$Data = function (message) {
        return { bH: message };
    };
    var $author$project$DataSource$andMap_a0 = $elm$core$Basics$apR, $author$project$DataSource$andMap = $author$project$DataSource$map2($author$project$DataSource$andMap_a0);
    var $author$project$Route$Account$data = $author$project$DataSource$map2_fn($author$project$DataSource$andMap_a0, $author$project$DataSource$succeed("Hello!"), $author$project$DataSource$succeed($author$project$Route$Account$Data));
    var $danyx23$elm_mimetype$MimeType$OtherImage = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Head$Twitter$Regular = 0;
    var $author$project$Head$Twitter$Summary = function (a) {
        return { $: 0, a: a };
    };
    var $danyx23$elm_mimetype$MimeType$Image = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Head$filterMaybeValues = function (list) {
        return $elm$core$List$filterMap_fn(function (_v0) {
            var key = _v0.a;
            var maybeValue = _v0.b;
            if (!maybeValue.$) {
                var value = maybeValue.a;
                return $elm$core$Maybe$Just(_Utils_Tuple2(key, value));
            }
            else {
                return $elm$core$Maybe$Nothing;
            }
        }, list);
    };
    var $author$project$Head$nonEmptyList = function (list) {
        return $elm$core$List$isEmpty(list) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(list);
    };
    var $author$project$Head$sizesToString = function (sizes) {
        return $elm$core$String$join_fn(" ", $elm$core$List$map_fn(function (_v0) {
            var x = _v0.a;
            var y = _v0.b;
            return $elm$core$String$fromInt(x) + ("x" + $elm$core$String$fromInt(y));
        }, sizes));
    };
    var $danyx23$elm_mimetype$MimeType$toString = function (mimeType) {
        switch (mimeType.$) {
            case 0:
                var img = mimeType.a;
                switch (img.$) {
                    case 0:
                        return "image/jpeg";
                    case 1:
                        return "image/png";
                    case 2:
                        return "image/gif";
                    default:
                        var type_ = img.a;
                        return "image/" + type_;
                }
            case 1:
                var audio = mimeType.a;
                switch (audio.$) {
                    case 0:
                        return "audio/mp3";
                    case 2:
                        return "audio/wav";
                    case 1:
                        return "audio/ogg";
                    default:
                        var type_ = audio.a;
                        return "audio/" + type_;
                }
            case 2:
                var video = mimeType.a;
                switch (video.$) {
                    case 0:
                        return "video/mp4";
                    case 1:
                        return "video/mpeg";
                    case 2:
                        return "video/quicktime";
                    case 3:
                        return "video/avi";
                    case 4:
                        return "video/webm";
                    default:
                        var type_ = video.a;
                        return "video/" + type_;
                }
            case 3:
                var text = mimeType.a;
                switch (text.$) {
                    case 0:
                        return "text/plain";
                    case 1:
                        return "text/html";
                    case 2:
                        return "text/css";
                    case 3:
                        return "text/xml";
                    case 4:
                        return "application/json";
                    default:
                        var type_ = text.a;
                        return "text/" + type_;
                }
            case 4:
                var app = mimeType.a;
                switch (app.$) {
                    case 0:
                        return "application/msword";
                    case 1:
                        return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                    case 2:
                        return "application/vnd.ms-excel";
                    case 3:
                        return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
                    case 4:
                        return "application/vnd.ms-powerpoint";
                    case 5:
                        return "application/vnd.openxmlformats-officedocument.presentationml.presentation";
                    case 6:
                        return "application/pdf";
                    default:
                        var type_ = app.a;
                        return "application/" + type_;
                }
            default:
                var type_ = mimeType.a;
                return type_;
        }
    };
    var $author$project$Head$FullUrl = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Head$urlAttribute = function (value) {
        return $author$project$Head$FullUrl(value);
    };
    var $author$project$Head$icon_fn = function (sizes, imageMimeType, imageUrl) {
        return $author$project$Head$node_fn("link", $author$project$Head$filterMaybeValues(_List_fromArray([
            _Utils_Tuple2("rel", $elm$core$Maybe$Just($author$project$Head$raw("icon"))),
            _Utils_Tuple2("sizes", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($author$project$Head$sizesToString, $author$project$Head$nonEmptyList(sizes)))),
            _Utils_Tuple2("type", $elm$core$Maybe$Just($author$project$Head$raw($danyx23$elm_mimetype$MimeType$toString($danyx23$elm_mimetype$MimeType$Image(imageMimeType))))),
            _Utils_Tuple2("href", $elm$core$Maybe$Just($author$project$Head$urlAttribute(imageUrl)))
        ])));
    }, $author$project$Head$icon = F3($author$project$Head$icon_fn);
    var $author$project$Pages$Url$External = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Url$external = function (externalUrl) {
        return $author$project$Pages$Url$External(externalUrl);
    };
    var $author$project$Site$logoIcon = $author$project$Pages$Url$external("/logo.svg");
    var $author$project$Head$sitemapLink = function (url) {
        return $author$project$Head$node_fn("link", _List_fromArray([
            _Utils_Tuple2("rel", $author$project$Head$raw("sitemap")),
            _Utils_Tuple2("type", $author$project$Head$raw("application/xml")),
            _Utils_Tuple2("href", $author$project$Head$raw(url))
        ]));
    };
    var $author$project$Head$Seo$Content_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Head$Seo$Content = F2($author$project$Head$Seo$Content_fn);
    var $author$project$Head$Seo$Website = { $: 0 };
    var $author$project$Head$metaName_fn = function (name, content) {
        return $author$project$Head$node_fn("meta", _List_fromArray([
            _Utils_Tuple2("name", $author$project$Head$Raw(name)),
            _Utils_Tuple2("content", content)
        ]));
    }, $author$project$Head$metaName = F2($author$project$Head$metaName_fn);
    var $author$project$Head$metaProperty_fn = function (property, content) {
        return $author$project$Head$node_fn("meta", _List_fromArray([
            _Utils_Tuple2("property", $author$project$Head$raw(property)),
            _Utils_Tuple2("content", content)
        ]));
    }, $author$project$Head$metaProperty = F2($author$project$Head$metaProperty_fn);
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Country$toCodeString = function (_v0) {
        var rawCode = _v0;
        return rawCode;
    };
    var $dillonkearns$elm_bcp47_language_tag$LanguageTag$Language$toCodeString = function (_v0) {
        var rawCode = _v0;
        return rawCode;
    };
    var $author$project$Head$Seo$localeToString = function (_v0) {
        var language = _v0.a;
        var territory = _v0.b;
        return $dillonkearns$elm_bcp47_language_tag$LanguageTag$Language$toCodeString(language) + ("_" + $dillonkearns$elm_bcp47_language_tag$LanguageTag$Country$toCodeString(territory));
    };
    var $author$project$Head$Twitter$cardValue = function (card) {
        switch (card.$) {
            case 0:
                var details = card.a;
                var _v1 = details.hM;
                if (!_v1) {
                    return "summary";
                }
                else {
                    return "summary_large_image";
                }
            case 1:
                return "app";
            default:
                return "player";
        }
    };
    var $author$project$Head$Twitter$rawTags = function (card) {
        return _List_Cons(_Utils_Tuple2("twitter:card", $elm$core$Maybe$Just($author$project$Head$raw($author$project$Head$Twitter$cardValue(card)))), function () {
            switch (card.$) {
                case 0:
                    var details = card.a;
                    return _List_fromArray([
                        _Utils_Tuple2("twitter:title", $elm$core$Maybe$Just($author$project$Head$raw(details.be))),
                        _Utils_Tuple2("twitter:site", $elm$core$Maybe$map_fn($author$project$Head$raw, details.f2)),
                        _Utils_Tuple2("twitter:description", $elm$core$Maybe$map_fn($author$project$Head$raw, details.gR)),
                        _Utils_Tuple2("twitter:image", $elm$core$Maybe$map_fn($author$project$Head$urlAttribute, $elm$core$Maybe$map_fn(function ($) {
                            return $.C;
                        }, details.ak))),
                        _Utils_Tuple2("twitter:image:alt", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn(function ($) {
                            return $.ac;
                        }, details.ak)))
                    ]);
                case 1:
                    var details = card.a;
                    return _List_fromArray([
                        _Utils_Tuple2("twitter:title", $elm$core$Maybe$Just($author$project$Head$raw(details.be))),
                        _Utils_Tuple2("twitter:site", $elm$core$Maybe$Just($author$project$Head$raw(details.f2))),
                        _Utils_Tuple2("twitter:description", $elm$core$Maybe$map_fn($author$project$Head$raw, details.gR)),
                        _Utils_Tuple2("twitter:image", $elm$core$Maybe$map_fn($author$project$Head$urlAttribute, $elm$core$Maybe$map_fn(function ($) {
                            return $.C;
                        }, details.ak))),
                        _Utils_Tuple2("twitter:image:alt", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn(function ($) {
                            return $.ac;
                        }, details.ak))),
                        _Utils_Tuple2("twitter:app:name:iphone", $elm$core$Maybe$map_fn($author$project$Head$raw, details.em)),
                        _Utils_Tuple2("twitter:app:name:ipad", $elm$core$Maybe$map_fn($author$project$Head$raw, details.el)),
                        _Utils_Tuple2("twitter:app:name:googleplay", $elm$core$Maybe$map_fn($author$project$Head$raw, details.ek)),
                        _Utils_Tuple2("twitter:app:id:iphone", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, details.ej))),
                        _Utils_Tuple2("twitter:app:id:ipad", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, details.ei))),
                        _Utils_Tuple2("twitter:app:id:googleplay", $elm$core$Maybe$map_fn($author$project$Head$raw, details.eh)),
                        _Utils_Tuple2("twitter:app:url:iphone", $elm$core$Maybe$map_fn($author$project$Head$raw, details.ep)),
                        _Utils_Tuple2("twitter:app:url:ipad", $elm$core$Maybe$map_fn($author$project$Head$raw, details.eo)),
                        _Utils_Tuple2("twitter:app:url:googleplay", $elm$core$Maybe$map_fn($author$project$Head$raw, details.en)),
                        _Utils_Tuple2("twitter:app:country", $elm$core$Maybe$map_fn($author$project$Head$raw, details.eg))
                    ]);
                default:
                    var details = card.a;
                    return _List_fromArray([
                        _Utils_Tuple2("twitter:title", $elm$core$Maybe$Just($author$project$Head$raw(details.be))),
                        _Utils_Tuple2("twitter:site", $elm$core$Maybe$Just($author$project$Head$raw(details.f2))),
                        _Utils_Tuple2("twitter:description", $elm$core$Maybe$map_fn($author$project$Head$raw, details.gR)),
                        _Utils_Tuple2("twitter:image", $elm$core$Maybe$Just($author$project$Head$urlAttribute(details.ak.C))),
                        _Utils_Tuple2("twitter:image:alt", $elm$core$Maybe$Just($author$project$Head$raw(details.ak.ac)))
                    ]);
            }
        }());
    };
    var $author$project$Head$Seo$tagsForAudio = function (audio) {
        return _List_fromArray([
            _Utils_Tuple2("og:audio", $elm$core$Maybe$Just($author$project$Head$raw(audio.C))),
            _Utils_Tuple2("og:audio:secure_url", $elm$core$Maybe$Just($author$project$Head$raw(audio.C))),
            _Utils_Tuple2("og:audio:type", $elm$core$Maybe$map_fn($author$project$Head$raw, audio.K))
        ]);
    };
    var $author$project$Head$Seo$tagsForImage = function (image) {
        return _List_fromArray([
            _Utils_Tuple2("og:image", $elm$core$Maybe$Just($author$project$Head$urlAttribute(image.C))),
            _Utils_Tuple2("og:image:secure_url", $elm$core$Maybe$Just($author$project$Head$urlAttribute(image.C))),
            _Utils_Tuple2("og:image:alt", $elm$core$Maybe$Just($author$project$Head$raw(image.ac))),
            _Utils_Tuple2("og:image:width", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, $elm$core$Maybe$map_fn(function ($) {
                return $.aC;
            }, image.S)))),
            _Utils_Tuple2("og:image:height", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, $elm$core$Maybe$map_fn(function ($) {
                return $.ai;
            }, image.S))))
        ]);
    };
    var $author$project$Head$Seo$tagsForVideo = function (video) {
        return _List_fromArray([
            _Utils_Tuple2("og:video", $elm$core$Maybe$Just($author$project$Head$raw(video.C))),
            _Utils_Tuple2("og:video:secure_url", $elm$core$Maybe$Just($author$project$Head$raw(video.C))),
            _Utils_Tuple2("og:video:width", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, $elm$core$Maybe$map_fn(function ($) {
                return $.aC;
            }, video.S)))),
            _Utils_Tuple2("og:video:height", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, $elm$core$Maybe$map_fn(function ($) {
                return $.ai;
            }, video.S))))
        ]);
    };
    var $author$project$Head$Seo$tagsForCommon = function (common) {
        return _Utils_ap($author$project$Head$Seo$tagsForImage(common.ak), _Utils_ap($elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($author$project$Head$Seo$tagsForAudio, common.aQ)), _Utils_ap($elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($author$project$Head$Seo$tagsForVideo, common.a0)), _Utils_ap(_List_fromArray([
            _Utils_Tuple2("og:title", $elm$core$Maybe$Just($author$project$Head$raw(common.be))),
            _Utils_Tuple2("og:url", $elm$core$Maybe$Just($elm$core$Maybe$withDefault_fn($author$project$Head$currentPageFullUrl, $elm$core$Maybe$map_fn($author$project$Head$raw, common.X)))),
            _Utils_Tuple2("og:description", $elm$core$Maybe$Just($author$project$Head$raw(common.gR))),
            _Utils_Tuple2("og:site_name", $elm$core$Maybe$Just($author$project$Head$raw(common.ax))),
            _Utils_Tuple2("og:locale", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($author$project$Head$Seo$localeToString, common.ao)))
        ]), _Utils_ap($elm$core$List$map_fn(function (alternateLocale) {
            return _Utils_Tuple2("og:locale:alternate", $elm$core$Maybe$Just($author$project$Head$raw($author$project$Head$Seo$localeToString(alternateLocale))));
        }, common.a4), $author$project$Head$Twitter$rawTags(common.bf))))));
    };
    var $author$project$Head$Seo$tags = function (_v0) {
        var common = _v0.a;
        var details = _v0.b;
        return $elm$core$List$append_fn(_List_fromArray([
            $author$project$Head$canonicalLink(common.X),
            $author$project$Head$metaName_fn("description", $author$project$Head$raw(common.gR))
        ]), $elm$core$List$filterMap_fn(function (_v2) {
            var name = _v2.a;
            var maybeContent = _v2.b;
            return $elm$core$Maybe$map_fn(function (metaContent) {
                return $author$project$Head$metaProperty_fn(name, metaContent);
            }, maybeContent);
        }, _Utils_ap($author$project$Head$Seo$tagsForCommon(common), function () {
            switch (details.$) {
                case 0:
                    return _List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("website")))
                    ]);
                case 1:
                    var articleDetails = details.a;
                    return _Utils_ap(_List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("article"))),
                        _Utils_Tuple2("article:section", $elm$core$Maybe$map_fn($author$project$Head$raw, articleDetails.e8)),
                        _Utils_Tuple2("article:published_time", $elm$core$Maybe$map_fn($author$project$Head$raw, articleDetails.e6)),
                        _Utils_Tuple2("article:modified_time", $elm$core$Maybe$map_fn($author$project$Head$raw, articleDetails.eX)),
                        _Utils_Tuple2("article:expiration_time", $elm$core$Maybe$map_fn($author$project$Head$raw, articleDetails.eE))
                    ]), $elm$core$List$map_fn(function (tag) {
                        return _Utils_Tuple2("article:tag", $elm$core$Maybe$Just($author$project$Head$raw(tag)));
                    }, articleDetails.a_));
                case 2:
                    var bookDetails = details.a;
                    return _Utils_ap(_List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("book"))),
                        _Utils_Tuple2("og:isbn", $elm$core$Maybe$map_fn($author$project$Head$raw, bookDetails.eR)),
                        _Utils_Tuple2("og:release_date", $elm$core$Maybe$map_fn($author$project$Head$raw, bookDetails.e7))
                    ]), $elm$core$List$map_fn(function (tag) {
                        return _Utils_Tuple2("book:tag", $elm$core$Maybe$Just($author$project$Head$raw(tag)));
                    }, bookDetails.a_));
                case 3:
                    var songDetails = details.a;
                    return _List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("music.song"))),
                        _Utils_Tuple2("music:duration", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, songDetails.eA))),
                        _Utils_Tuple2("music:album:disc", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, songDetails.ey))),
                        _Utils_Tuple2("music:album:track", $elm$core$Maybe$map_fn($author$project$Head$raw, $elm$core$Maybe$map_fn($elm$core$String$fromInt, songDetails.fo)))
                    ]);
                default:
                    var profileDetails = details.a;
                    return _List_fromArray([
                        _Utils_Tuple2("og:type", $elm$core$Maybe$Just($author$project$Head$raw("profile"))),
                        _Utils_Tuple2("profile:first_name", $elm$core$Maybe$Just($author$project$Head$raw(profileDetails.eF))),
                        _Utils_Tuple2("profile:last_name", $elm$core$Maybe$Just($author$project$Head$raw(profileDetails.eS))),
                        _Utils_Tuple2("profile:username", $elm$core$Maybe$map_fn($author$project$Head$raw, profileDetails.fq))
                    ]);
            }
        }())));
    };
    var $author$project$Head$Seo$website = function (common) {
        return $author$project$Head$Seo$tags($author$project$Head$Seo$Content_fn(common, $author$project$Head$Seo$Website));
    };
    var $author$project$Site$head = _List_Cons($author$project$Head$sitemapLink("/sitemap.xml"), _List_Cons($author$project$Head$icon_fn(_List_fromArray([
        _Utils_Tuple2(32, 32),
        _Utils_Tuple2(16, 16)
    ]), $danyx23$elm_mimetype$MimeType$OtherImage("svg+xml"), $author$project$Site$logoIcon), $author$project$Head$Seo$website({
        a4: _List_Nil,
        aQ: $elm$core$Maybe$Nothing,
        X: $elm$core$Maybe$Just("https://www.FlamingleSocial.com"),
        gR: "Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people.",
        ak: {
            ac: "Flamingle Logo",
            S: $elm$core$Maybe$Just({ ai: 1024, aC: 1024 }),
            K: $elm$core$Maybe$Nothing,
            C: $author$project$Site$logoIcon
        },
        ao: $elm$core$Maybe$Nothing,
        ax: "Flamingle Social",
        be: "Flamingle Social | Find Events, Make Friends",
        bf: $author$project$Head$Twitter$Summary({
            gR: $elm$core$Maybe$Just("Flamingle is for people who want to keep their pulse on exciting events happening in their town and meet new people."),
            ak: $elm$core$Maybe$Nothing,
            f2: $elm$core$Maybe$Nothing,
            hM: 0,
            be: "Flamingle Social"
        }),
        a0: $elm$core$Maybe$Nothing
    })));
    var $author$project$Route$Account$head = function (_static) {
        return $author$project$Site$head;
    };
    var $author$project$RouteBuilder$WithData = $elm$core$Basics$identity;
    var $author$project$Server$Response$render = function (data) {
        return $author$project$PageServerResponse$RenderPage_fn({ eI: _List_Nil, aa: 200 }, data);
    };
    var $author$project$RouteBuilder$single = function (_v0) {
        var head = _v0.aI;
        var data = _v0.m;
        return {
            m: function (_v1) {
                return $author$project$DataSource$map_fn($author$project$Server$Response$render, data);
            },
            fV: F3(function (_v2, _v3, _v4) {
                return $author$project$DataSource$succeed($elm$core$Maybe$Nothing);
            }),
            aI: head,
            fA: "static",
            bS: false,
            fK: $author$project$DataSource$succeed(_List_fromArray([
                {}
            ]))
        };
    };
    var $elm$html$Html$a = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "a"), $elm$html$Html$a_fn = $elm$html$Html$a.a2;
    var $elm$html$Html$Attributes$action = function (uri) {
        return $elm$html$Html$Attributes$stringProperty_fn("action", _VirtualDom_noJavaScriptUri(uri));
    };
    var $elm$html$Html$Attributes$alt_a0 = "alt", $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$alt_a0);
    var $elm$virtual_dom$VirtualDom$attribute_fn = function (key, value) {
        return _VirtualDom_attribute_fn(_VirtualDom_noOnOrFormAction(key), _VirtualDom_noJavaScriptOrHtmlUri(value));
    }, $elm$virtual_dom$VirtualDom$attribute = F2($elm$virtual_dom$VirtualDom$attribute_fn);
    var $elm$html$Html$Attributes$attribute = $elm$virtual_dom$VirtualDom$attribute;
    var $elm$html$Html$button = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "button"), $elm$html$Html$button_fn = $elm$html$Html$button.a2;
    var $elm$html$Html$Attributes$class_a0 = "className", $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$class_a0);
    var $elm$svg$Svg$Attributes$class_a0 = "class", $elm$svg$Svg$Attributes$class = _VirtualDom_attribute($elm$svg$Svg$Attributes$class_a0);
    var $elm$svg$Svg$Attributes$clipRule_a0 = "clip-rule", $elm$svg$Svg$Attributes$clipRule = _VirtualDom_attribute($elm$svg$Svg$Attributes$clipRule_a0);
    var $elm$svg$Svg$Attributes$d_a0 = "d", $elm$svg$Svg$Attributes$d = _VirtualDom_attribute($elm$svg$Svg$Attributes$d_a0);
    var $elm$svg$Svg$Attributes$fill_a0 = "fill", $elm$svg$Svg$Attributes$fill = _VirtualDom_attribute($elm$svg$Svg$Attributes$fill_a0);
    var $elm$svg$Svg$Attributes$fillRule_a0 = "fill-rule", $elm$svg$Svg$Attributes$fillRule = _VirtualDom_attribute($elm$svg$Svg$Attributes$fillRule_a0);
    var $elm$svg$Svg$trustedNode_a0 = "http://www.w3.org/2000/svg", $elm$svg$Svg$trustedNode = _VirtualDom_nodeNS($elm$svg$Svg$trustedNode_a0);
    var $elm$svg$Svg$path = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "path"), $elm$svg$Svg$path_fn = $elm$svg$Svg$path.a2;
    var $elm$svg$Svg$svg = _VirtualDom_nodeNS_fn($elm$svg$Svg$trustedNode_a0, "svg"), $elm$svg$Svg$svg_fn = $elm$svg$Svg$svg.a2;
    var $elm$svg$Svg$Attributes$viewBox_a0 = "viewBox", $elm$svg$Svg$Attributes$viewBox = _VirtualDom_attribute($elm$svg$Svg$Attributes$viewBox_a0);
    var $author$project$Component$Icon$facebook = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "w-5 h-5"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "currentColor"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 20 20"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fillRule_a0, "evenodd"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$clipRule_a0, "evenodd")
        ]), _List_Nil)
    ]));
    var $elm$html$Html$Attributes$for_a0 = "htmlFor", $elm$html$Html$Attributes$for = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$for_a0);
    var $elm$html$Html$form = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "form"), $elm$html$Html$form_fn = $elm$html$Html$form.a2;
    var $author$project$Component$Icon$gitHub = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "w-5 h-5"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "currentColor"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 20 20"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fillRule_a0, "evenodd"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$clipRule_a0, "evenodd")
        ]), _List_Nil)
    ]));
    var $elm$html$Html$h2 = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "h2"), $elm$html$Html$h2_fn = $elm$html$Html$h2.a2;
    var $elm$html$Html$Attributes$href = function (url) {
        return $elm$html$Html$Attributes$stringProperty_fn("href", _VirtualDom_noJavaScriptUri(url));
    };
    var $elm$html$Html$img = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "img"), $elm$html$Html$img_fn = $elm$html$Html$img.a2;
    var $elm$html$Html$input = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "input"), $elm$html$Html$input_fn = $elm$html$Html$input.a2;
    var $elm$html$Html$label = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "label"), $elm$html$Html$label_fn = $elm$html$Html$label.a2;
    var $elm$html$Html$Attributes$method_a0 = "method", $elm$html$Html$Attributes$method = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$method_a0);
    var $elm$html$Html$Attributes$name_a0 = "name", $elm$html$Html$Attributes$name = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$name_a0);
    var $elm$html$Html$Attributes$boolProperty_fn = function (key, bool) {
        return _VirtualDom_property_fn(key, $elm$json$Json$Encode$bool(bool));
    }, $elm$html$Html$Attributes$boolProperty = F2($elm$html$Html$Attributes$boolProperty_fn);
    var $elm$html$Html$Attributes$required_a0 = "required", $elm$html$Html$Attributes$required = $elm$html$Html$Attributes$boolProperty($elm$html$Html$Attributes$required_a0);
    var $elm$html$Html$Attributes$src = function (url) {
        return $elm$html$Html$Attributes$stringProperty_fn("src", _VirtualDom_noJavaScriptOrHtmlUri(url));
    };
    var $author$project$Component$Icon$twitter = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "w-5 h-5"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "currentColor"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 20 20"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84")
        ]), _List_Nil)
    ]));
    var $elm$html$Html$Attributes$type__a0 = "type", $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$type__a0);
    var $author$project$Route$Account$accountPage = $elm$html$Html$div_fn(_List_fromArray([
        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8")
    ]), _List_fromArray([
        $elm$html$Html$div_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sm:mx-auto sm:w-full sm:max-w-md")
        ]), _List_fromArray([
            $elm$html$Html$img_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mx-auto h-12 w-auto"),
                $elm$html$Html$Attributes$src("https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$alt_a0, "Workflow")
            ]), _List_Nil),
            $elm$html$Html$h2_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-6 text-center text-3xl font-extrabold text-gray-900")
            ]), _List_fromArray([
                $elm$html$Html$text("Sign in to your account")
            ])),
            $elm$html$Html$p_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-2 text-center text-sm text-gray-600")
            ]), _List_fromArray([
                $elm$html$Html$text("Or"),
                $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$href("#"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "font-medium text-indigo-600 hover:text-indigo-500")
                ]), _List_fromArray([
                    $elm$html$Html$text("start your 14-day free trial")
                ]))
            ]))
        ])),
        $elm$html$Html$div_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-8 sm:mx-auto sm:w-full sm:max-w-md")
        ]), _List_fromArray([
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10")
            ]), _List_fromArray([
                $elm$html$Html$form_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "space-y-6"),
                    $elm$html$Html$Attributes$action("#"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$method_a0, "POST")
                ]), _List_fromArray([
                    $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$label_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$for_a0, "email"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block text-sm font-medium text-gray-700")
                        ]), _List_fromArray([
                            $elm$html$Html$text("Email address")
                        ])),
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-1")
                        ]), _List_fromArray([
                            $elm$html$Html$input_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "email"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$name_a0, "email"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "email"),
                                $elm$virtual_dom$VirtualDom$attribute_fn("autocomplete", "email"),
                                $elm$html$Html$Attributes$boolProperty_fn($elm$html$Html$Attributes$required_a0, true),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")
                            ]), _List_Nil)
                        ]))
                    ])),
                    $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$label_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$for_a0, "password"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block text-sm font-medium text-gray-700")
                        ]), _List_fromArray([
                            $elm$html$Html$text("Password")
                        ])),
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-1")
                        ]), _List_fromArray([
                            $elm$html$Html$input_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "password"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$name_a0, "password"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "password"),
                                $elm$virtual_dom$VirtualDom$attribute_fn("autocomplete", "current-password"),
                                $elm$html$Html$Attributes$boolProperty_fn($elm$html$Html$Attributes$required_a0, true),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")
                            ]), _List_Nil)
                        ]))
                    ])),
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex items-center justify-between")
                    ]), _List_fromArray([
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex items-center")
                        ]), _List_fromArray([
                            $elm$html$Html$input_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "remember-me"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$name_a0, "remember-me"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "checkbox"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded")
                            ]), _List_Nil),
                            $elm$html$Html$label_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$for_a0, "remember-me"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "ml-2 block text-sm text-gray-900")
                            ]), _List_fromArray([
                                $elm$html$Html$text("Remember me")
                            ]))
                        ])),
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-sm")
                        ]), _List_fromArray([
                            $elm$html$Html$a_fn(_List_fromArray([
                                $elm$html$Html$Attributes$href("#"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "font-medium text-indigo-600 hover:text-indigo-500")
                            ]), _List_fromArray([
                                $elm$html$Html$text("Forgot your password?")
                            ]))
                        ]))
                    ])),
                    $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$button_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "submit"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
                        ]), _List_fromArray([
                            $elm$html$Html$text("Sign in")
                        ]))
                    ]))
                ])),
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-6")
                ]), _List_fromArray([
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative")
                    ]), _List_fromArray([
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "absolute inset-0 flex items-center")
                        ]), _List_fromArray([
                            $elm$html$Html$div_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "w-full border-t border-gray-300")
                            ]), _List_Nil)
                        ])),
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative flex justify-center text-sm")
                        ]), _List_fromArray([
                            $elm$html$Html$span_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "px-2 bg-white text-gray-500")
                            ]), _List_fromArray([
                                $elm$html$Html$text("Or continue with")
                            ]))
                        ]))
                    ])),
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-6 grid grid-cols-3 gap-3")
                    ]), _List_fromArray([
                        $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$a_fn(_List_fromArray([
                                $elm$html$Html$Attributes$href("#"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50")
                            ]), _List_fromArray([
                                $elm$html$Html$span_fn(_List_fromArray([
                                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                                ]), _List_fromArray([
                                    $elm$html$Html$text("Sign in with Facebook")
                                ])),
                                $author$project$Component$Icon$facebook
                            ]))
                        ])),
                        $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$a_fn(_List_fromArray([
                                $elm$html$Html$Attributes$href("#"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50")
                            ]), _List_fromArray([
                                $elm$html$Html$span_fn(_List_fromArray([
                                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                                ]), _List_fromArray([
                                    $elm$html$Html$text("Sign in with Twitter")
                                ])),
                                $author$project$Component$Icon$twitter
                            ]))
                        ])),
                        $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$a_fn(_List_fromArray([
                                $elm$html$Html$Attributes$href("#"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50")
                            ]), _List_fromArray([
                                $elm$html$Html$span_fn(_List_fromArray([
                                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                                ]), _List_fromArray([
                                    $elm$html$Html$text("Sign in with GitHub")
                                ])),
                                $author$project$Component$Icon$gitHub
                            ]))
                        ]))
                    ]))
                ]))
            ]))
        ]))
    ]));
    var $author$project$Route$Account$view_fn = function (maybeUrl, sharedModel, _static) {
        return { er: $author$project$Route$Account$accountPage, be: "Flamingle | Find Events, Make Friends" };
    }, $author$project$Route$Account$view = F3($author$project$Route$Account$view_fn);
    var $author$project$Route$Account$route = $author$project$RouteBuilder$buildNoState_fn({ N: $author$project$Route$Account$view }, $author$project$RouteBuilder$single({ m: $author$project$Route$Account$data, aI: $author$project$Route$Account$head }));
    var $elm$url$Url$Builder$toQueryPair = function (_v0) {
        var key = _v0.a;
        var value = _v0.b;
        return key + ("=" + value);
    };
    var $elm$url$Url$Builder$toQuery = function (parameters) {
        if (!parameters.b) {
            return "";
        }
        else {
            return "?" + $elm$core$String$join_fn("&", $elm$core$List$map_fn($elm$url$Url$Builder$toQueryPair, parameters));
        }
    };
    var $elm$url$Url$Builder$crossOrigin_fn = function (prePath, pathSegments, parameters) {
        return prePath + ("/" + ($elm$core$String$join_fn("/", pathSegments) + $elm$url$Url$Builder$toQuery(parameters)));
    }, $elm$url$Url$Builder$crossOrigin = F3($elm$url$Url$Builder$crossOrigin_fn);
    var $author$project$Data$SeatGeek$Events_fn = function (events, meta) {
        return { cX: events, dr: meta };
    }, $author$project$Data$SeatGeek$Events = F2($author$project$Data$SeatGeek$Events_fn);
    var $author$project$Data$SeatGeek$Event = function (eventType) {
        return function (id) {
            return function (datetimeUTC) {
                return function (venue) {
                    return function (datetimeTbd) {
                        return function (performers) {
                            return function (isOpen) {
                                return function (links) {
                                    return function (datetimeLocal) {
                                        return function (timeTbd) {
                                            return function (shortTitle) {
                                                return function (visibleUntilUTC) {
                                                    return function (stats) {
                                                        return function (taxonomies) {
                                                            return function (url) {
                                                                return function (score) {
                                                                    return function (announceDate) {
                                                                        return function (createdAt) {
                                                                            return function (dateTbd) {
                                                                                return function (title) {
                                                                                    return function (popularity) {
                                                                                        return function (description) {
                                                                                            return function (status) {
                                                                                                return function (accessMethod) {
                                                                                                    return function (eventPromotion) {
                                                                                                        return function (announcements) {
                                                                                                            return function (conditional) {
                                                                                                                return function (enddatetimeUTC) {
                                                                                                                    return function (themes) {
                                                                                                                        return function (domainInformation) {
                                                                                                                            return function (generalAdmission) {
                                                                                                                                return { ab: accessMethod, cp: announceDate, cq: announcements, cz: conditional, cA: createdAt, cF: dateTbd, cG: datetimeLocal, cH: datetimeTbd, cI: datetimeUTC, gR: description, cQ: domainInformation, cT: enddatetimeUTC, cV: eventPromotion, cW: eventType, c0: generalAdmission, g: id, dj: isOpen, an: links, dz: performers, y: popularity, A: score, dP: shortTitle, az: stats, dV: status, aA: taxonomies, d6: themes, d7: timeTbd, be: title, C: url, ed: venue, ef: visibleUntilUTC };
                                                                                                                            };
                                                                                                                        };
                                                                                                                    };
                                                                                                                };
                                                                                                            };
                                                                                                        };
                                                                                                    };
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var $author$project$Data$SeatGeek$Announcements = {};
    var $author$project$Data$SeatGeek$announcements = $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Announcements);
    var $rtfeldman$elm_iso8601_date_strings$DeadEnds$problemToString = function (p) {
        switch (p.$) {
            case 0:
                var s = p.a;
                return "expecting '" + (s + "'");
            case 1:
                return "expecting int";
            case 2:
                return "expecting hex";
            case 3:
                return "expecting octal";
            case 4:
                return "expecting binary";
            case 5:
                return "expecting float";
            case 6:
                return "expecting number";
            case 7:
                return "expecting variable";
            case 8:
                var s = p.a;
                return "expecting symbol '" + (s + "'");
            case 9:
                var s = p.a;
                return "expecting keyword '" + (s + "'");
            case 10:
                return "expecting end";
            case 11:
                return "unexpected char";
            case 12:
                var s = p.a;
                return "problem " + s;
            default:
                return "bad repeat";
        }
    };
    var $rtfeldman$elm_iso8601_date_strings$DeadEnds$deadEndToString = function (deadend) {
        return $rtfeldman$elm_iso8601_date_strings$DeadEnds$problemToString(deadend.hw) + (" at row " + ($elm$core$String$fromInt(deadend.hG) + (", col " + $elm$core$String$fromInt(deadend.gO))));
    };
    var $elm$core$List$intersperse_fn = function (sep, xs) {
        if (!xs.b) {
            return xs;
        }
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        end.b = _List_Cons(xs.a, _List_Nil);
        end = end.b;
        xs = xs.b;
        for (; xs.b; xs = xs.b) {
            var valNode = _List_Cons(xs.a, _List_Nil);
            var sepNode = _List_Cons(sep, valNode);
            end.b = sepNode;
            end = valNode;
        }
        return tmp.b;
    }, $elm$core$List$intersperse = F2($elm$core$List$intersperse_fn);
    var $rtfeldman$elm_iso8601_date_strings$DeadEnds$deadEndsToString = function (deadEnds) {
        return $elm$core$String$concat($elm$core$List$intersperse_fn("; ", $elm$core$List$map_fn($rtfeldman$elm_iso8601_date_strings$DeadEnds$deadEndToString, deadEnds)));
    };
    var $elm$parser$Parser$Advanced$Bad_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$parser$Parser$Advanced$Bad = F2($elm$parser$Parser$Advanced$Bad_fn);
    var $elm$parser$Parser$Advanced$Good_fn = function (a, b, c) {
        return { $: 0, a: a, b: b, c: c };
    }, $elm$parser$Parser$Advanced$Good = F3($elm$parser$Parser$Advanced$Good_fn);
    var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
    var $elm$parser$Parser$Advanced$andThen_fn = function (callback, _v0) {
        var parseA = _v0;
        return function (s0) {
            var _v1 = parseA(s0);
            if (_v1.$ === 1) {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p1 = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                var _v2 = callback(a);
                var parseB = _v2;
                var _v3 = parseB(s1);
                if (_v3.$ === 1) {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return $elm$parser$Parser$Advanced$Bad_fn(p1 || p2, x);
                }
                else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return $elm$parser$Parser$Advanced$Good_fn(p1 || p2, b, s2);
                }
            }
        };
    }, $elm$parser$Parser$Advanced$andThen = F2($elm$parser$Parser$Advanced$andThen_fn);
    var $elm$parser$Parser$andThen = $elm$parser$Parser$Advanced$andThen;
    var $elm$parser$Parser$ExpectingEnd = { $: 10 };
    var $elm$parser$Parser$Advanced$AddRight_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $elm$parser$Parser$Advanced$AddRight = F2($elm$parser$Parser$Advanced$AddRight_fn);
    var $elm$parser$Parser$Advanced$DeadEnd_fn = function (row, col, problem, contextStack) {
        return { gO: col, ew: contextStack, hw: problem, hG: row };
    }, $elm$parser$Parser$Advanced$DeadEnd = F4($elm$parser$Parser$Advanced$DeadEnd_fn);
    var $elm$parser$Parser$Advanced$Empty = { $: 0 };
    var $elm$parser$Parser$Advanced$fromState_fn = function (s, x) {
        return $elm$parser$Parser$Advanced$AddRight_fn($elm$parser$Parser$Advanced$Empty, $elm$parser$Parser$Advanced$DeadEnd_fn(s.hG, s.gO, x, s.d));
    }, $elm$parser$Parser$Advanced$fromState = F2($elm$parser$Parser$Advanced$fromState_fn);
    var $elm$parser$Parser$Advanced$end = function (x) {
        return function (s) {
            return _Utils_eq($elm$core$String$length(s.dU), s.b) ? $elm$parser$Parser$Advanced$Good_fn(false, 0, s) : $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromState_fn(s, x));
        };
    };
    var $elm$parser$Parser$end = $elm$parser$Parser$Advanced$end($elm$parser$Parser$ExpectingEnd);
    var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
    var $elm$parser$Parser$Advanced$chompWhileHelp_fn = function (isGood, offset, row, col, s0) {
        chompWhileHelp: while (true) {
            var newOffset = _Parser_isSubChar_fn(isGood, offset, s0.dU);
            if (newOffset === -1) {
                return $elm$parser$Parser$Advanced$Good_fn(_Utils_cmp(s0.b, offset) < 0, 0, { gO: col, d: s0.d, b4: s0.b4, b: offset, hG: row, dU: s0.dU });
            }
            else {
                if (newOffset === -2) {
                    var $temp$isGood = isGood, $temp$offset = offset + 1, $temp$row = row + 1, $temp$col = 1, $temp$s0 = s0;
                    isGood = $temp$isGood;
                    offset = $temp$offset;
                    row = $temp$row;
                    col = $temp$col;
                    s0 = $temp$s0;
                    continue chompWhileHelp;
                }
                else {
                    var $temp$isGood = isGood, $temp$offset = newOffset, $temp$row = row, $temp$col = col + 1, $temp$s0 = s0;
                    isGood = $temp$isGood;
                    offset = $temp$offset;
                    row = $temp$row;
                    col = $temp$col;
                    s0 = $temp$s0;
                    continue chompWhileHelp;
                }
            }
        }
    }, $elm$parser$Parser$Advanced$chompWhileHelp = F5($elm$parser$Parser$Advanced$chompWhileHelp_fn);
    var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
        return function (s) {
            return $elm$parser$Parser$Advanced$chompWhileHelp_fn(isGood, s.b, s.hG, s.gO, s);
        };
    };
    var $elm$parser$Parser$chompWhile = $elm$parser$Parser$Advanced$chompWhile;
    var $elm$core$Basics$always_fn = function (a, _v0) {
        return a;
    }, $elm$core$Basics$always = F2($elm$core$Basics$always_fn);
    var $elm$parser$Parser$Advanced$mapChompedString_fn = function (func, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 1) {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_fn(p, A2(func, _String_slice_fn(s0.b, s1.b, s0.dU), a), s1);
            }
        };
    }, $elm$parser$Parser$Advanced$mapChompedString_fn_unwrapped = function (func, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (_v1.$ === 1) {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_fn(p, func(_String_slice_fn(s0.b, s1.b, s0.dU), a), s1);
            }
        };
    }, $elm$parser$Parser$Advanced$mapChompedString = F2($elm$parser$Parser$Advanced$mapChompedString_fn);
    var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
        return $elm$parser$Parser$Advanced$mapChompedString_fn($elm$core$Basics$always, parser);
    };
    var $elm$parser$Parser$getChompedString = $elm$parser$Parser$Advanced$getChompedString;
    var $elm$parser$Parser$Problem = function (a) {
        return { $: 12, a: a };
    };
    var $elm$parser$Parser$Advanced$problem = function (x) {
        return function (s) {
            return $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromState_fn(s, x));
        };
    };
    var $elm$parser$Parser$problem = function (msg) {
        return $elm$parser$Parser$Advanced$problem($elm$parser$Parser$Problem(msg));
    };
    var $elm$core$Basics$round = _Basics_round;
    var $elm$parser$Parser$Advanced$succeed = function (a) {
        return function (s) {
            return $elm$parser$Parser$Advanced$Good_fn(false, a, s);
        };
    };
    var $elm$parser$Parser$succeed = $elm$parser$Parser$Advanced$succeed;
    var $elm$core$String$toFloat = _String_toFloat;
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$fractionsOfASecondInMs = $elm$parser$Parser$Advanced$andThen_fn(function (str) {
        if ($elm$core$String$length(str) <= 9) {
            var _v0 = $elm$core$String$toFloat("0." + str);
            if (!_v0.$) {
                var floatVal = _v0.a;
                return $elm$parser$Parser$succeed($elm$core$Basics$round(floatVal * 1000));
            }
            else {
                return $elm$parser$Parser$problem("Invalid float: \"" + (str + "\""));
            }
        }
        else {
            return $elm$parser$Parser$problem("Expected at most 9 digits, but got " + $elm$core$String$fromInt($elm$core$String$length(str)));
        }
    }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile($elm$core$Char$isDigit)));
    var $elm$time$Time$Posix = $elm$core$Basics$identity;
    var $elm$time$Time$millisToPosix = $elm$core$Basics$identity;
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts_fn = function (monthYearDayMs, hour, minute, second, ms, utcOffsetMinutes) {
        return $elm$time$Time$millisToPosix((((monthYearDayMs + (((hour * 60) * 60) * 1000)) + (((minute - utcOffsetMinutes) * 60) * 1000)) + (second * 1000)) + ms);
    }, $rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts = F6($rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts_fn);
    var $elm$parser$Parser$Advanced$map2_fn = function (func, _v0, _v1) {
        var parseA = _v0;
        var parseB = _v1;
        return function (s0) {
            var _v2 = parseA(s0);
            if (_v2.$ === 1) {
                var p = _v2.a;
                var x = _v2.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p1 = _v2.a;
                var a = _v2.b;
                var s1 = _v2.c;
                var _v3 = parseB(s1);
                if (_v3.$ === 1) {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return $elm$parser$Parser$Advanced$Bad_fn(p1 || p2, x);
                }
                else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return $elm$parser$Parser$Advanced$Good_fn(p1 || p2, A2(func, a, b), s2);
                }
            }
        };
    }, $elm$parser$Parser$Advanced$map2_fn_unwrapped = function (func, _v0, _v1) {
        var parseA = _v0;
        var parseB = _v1;
        return function (s0) {
            var _v2 = parseA(s0);
            if (_v2.$ === 1) {
                var p = _v2.a;
                var x = _v2.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
            else {
                var p1 = _v2.a;
                var a = _v2.b;
                var s1 = _v2.c;
                var _v3 = parseB(s1);
                if (_v3.$ === 1) {
                    var p2 = _v3.a;
                    var x = _v3.b;
                    return $elm$parser$Parser$Advanced$Bad_fn(p1 || p2, x);
                }
                else {
                    var p2 = _v3.a;
                    var b = _v3.b;
                    var s2 = _v3.c;
                    return $elm$parser$Parser$Advanced$Good_fn(p1 || p2, func(a, b), s2);
                }
            }
        };
    }, $elm$parser$Parser$Advanced$map2 = F3($elm$parser$Parser$Advanced$map2_fn);
    var $elm$parser$Parser$Advanced$ignorer_fn = function (keepParser, ignoreParser) {
        return $elm$parser$Parser$Advanced$map2_fn($elm$core$Basics$always, keepParser, ignoreParser);
    }, $elm$parser$Parser$Advanced$ignorer = F2($elm$parser$Parser$Advanced$ignorer_fn);
    var $elm$parser$Parser$ignorer = $elm$parser$Parser$Advanced$ignorer;
    var $elm$parser$Parser$Advanced$keeper_fn = function (parseFunc, parseArg) {
        return $elm$parser$Parser$Advanced$map2_fn($elm$core$Basics$apL, parseFunc, parseArg);
    }, $elm$parser$Parser$Advanced$keeper = F2($elm$parser$Parser$Advanced$keeper_fn);
    var $elm$parser$Parser$keeper = $elm$parser$Parser$Advanced$keeper;
    var $elm$parser$Parser$Advanced$Append_fn = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $elm$parser$Parser$Advanced$Append = F2($elm$parser$Parser$Advanced$Append_fn);
    var $elm$parser$Parser$Advanced$oneOfHelp_fn = function (s0, bag, parsers) {
        oneOfHelp: while (true) {
            if (!parsers.b) {
                return $elm$parser$Parser$Advanced$Bad_fn(false, bag);
            }
            else {
                var parse = parsers.a;
                var remainingParsers = parsers.b;
                var _v1 = parse(s0);
                if (!_v1.$) {
                    var step = _v1;
                    return step;
                }
                else {
                    var step = _v1;
                    var p = step.a;
                    var x = step.b;
                    if (p) {
                        return step;
                    }
                    else {
                        var $temp$s0 = s0, $temp$bag = $elm$parser$Parser$Advanced$Append_fn(bag, x), $temp$parsers = remainingParsers;
                        s0 = $temp$s0;
                        bag = $temp$bag;
                        parsers = $temp$parsers;
                        continue oneOfHelp;
                    }
                }
            }
        }
    }, $elm$parser$Parser$Advanced$oneOfHelp = F3($elm$parser$Parser$Advanced$oneOfHelp_fn);
    var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
        return function (s) {
            return $elm$parser$Parser$Advanced$oneOfHelp_fn(s, $elm$parser$Parser$Advanced$Empty, parsers);
        };
    };
    var $elm$parser$Parser$oneOf = $elm$parser$Parser$Advanced$oneOf;
    var $elm$parser$Parser$Done = function (a) {
        return { $: 1, a: a };
    };
    var $elm$parser$Parser$Loop = function (a) {
        return { $: 0, a: a };
    };
    var $elm$core$String$append = _String_append;
    var $elm$parser$Parser$UnexpectedChar = { $: 11 };
    var $elm$parser$Parser$Advanced$chompIf_fn = function (isGood, expecting) {
        return function (s) {
            var newOffset = _Parser_isSubChar_fn(isGood, s.b, s.dU);
            return newOffset === -1 ? $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromState_fn(s, expecting)) : (newOffset === -2 ? $elm$parser$Parser$Advanced$Good_fn(true, 0, { gO: 1, d: s.d, b4: s.b4, b: s.b + 1, hG: s.hG + 1, dU: s.dU }) : $elm$parser$Parser$Advanced$Good_fn(true, 0, { gO: s.gO + 1, d: s.d, b4: s.b4, b: newOffset, hG: s.hG, dU: s.dU }));
        };
    }, $elm$parser$Parser$Advanced$chompIf = F2($elm$parser$Parser$Advanced$chompIf_fn);
    var $elm$parser$Parser$chompIf = function (isGood) {
        return $elm$parser$Parser$Advanced$chompIf_fn(isGood, $elm$parser$Parser$UnexpectedChar);
    };
    var $elm$parser$Parser$Advanced$loopHelp_fn = function (p, state, callback, s0) {
        loopHelp: while (true) {
            var _v0 = callback(state);
            var parse = _v0;
            var _v1 = parse(s0);
            if (!_v1.$) {
                var p1 = _v1.a;
                var step = _v1.b;
                var s1 = _v1.c;
                if (!step.$) {
                    var newState = step.a;
                    var $temp$p = p || p1, $temp$state = newState, $temp$callback = callback, $temp$s0 = s1;
                    p = $temp$p;
                    state = $temp$state;
                    callback = $temp$callback;
                    s0 = $temp$s0;
                    continue loopHelp;
                }
                else {
                    var result = step.a;
                    return $elm$parser$Parser$Advanced$Good_fn(p || p1, result, s1);
                }
            }
            else {
                var p1 = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p || p1, x);
            }
        }
    }, $elm$parser$Parser$Advanced$loopHelp = F4($elm$parser$Parser$Advanced$loopHelp_fn);
    var $elm$parser$Parser$Advanced$loop_fn = function (state, callback) {
        return function (s) {
            return $elm$parser$Parser$Advanced$loopHelp_fn(false, state, callback, s);
        };
    }, $elm$parser$Parser$Advanced$loop = F2($elm$parser$Parser$Advanced$loop_fn);
    var $elm$parser$Parser$Advanced$map_fn = function (func, _v0) {
        var parse = _v0;
        return function (s0) {
            var _v1 = parse(s0);
            if (!_v1.$) {
                var p = _v1.a;
                var a = _v1.b;
                var s1 = _v1.c;
                return $elm$parser$Parser$Advanced$Good_fn(p, func(a), s1);
            }
            else {
                var p = _v1.a;
                var x = _v1.b;
                return $elm$parser$Parser$Advanced$Bad_fn(p, x);
            }
        };
    }, $elm$parser$Parser$Advanced$map = F2($elm$parser$Parser$Advanced$map_fn);
    var $elm$parser$Parser$map = $elm$parser$Parser$Advanced$map;
    var $elm$parser$Parser$Advanced$Done = function (a) {
        return { $: 1, a: a };
    };
    var $elm$parser$Parser$Advanced$Loop = function (a) {
        return { $: 0, a: a };
    };
    var $elm$parser$Parser$toAdvancedStep = function (step) {
        if (!step.$) {
            var s = step.a;
            return $elm$parser$Parser$Advanced$Loop(s);
        }
        else {
            var a = step.a;
            return $elm$parser$Parser$Advanced$Done(a);
        }
    };
    var $elm$parser$Parser$loop_fn = function (state, callback) {
        return $elm$parser$Parser$Advanced$loop_fn(state, function (s) {
            return $elm$parser$Parser$Advanced$map_fn($elm$parser$Parser$toAdvancedStep, callback(s));
        });
    }, $elm$parser$Parser$loop = F2($elm$parser$Parser$loop_fn);
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt = function (quantity) {
        var helper = function (str) {
            if (_Utils_eq($elm$core$String$length(str), quantity)) {
                var _v0 = $elm$core$String$toInt(str);
                if (!_v0.$) {
                    var intVal = _v0.a;
                    return $elm$parser$Parser$Advanced$map_fn($elm$parser$Parser$Done, $elm$parser$Parser$succeed(intVal));
                }
                else {
                    return $elm$parser$Parser$problem("Invalid integer: \"" + (str + "\""));
                }
            }
            else {
                return $elm$parser$Parser$Advanced$map_fn(function (nextChar) {
                    return $elm$parser$Parser$Loop(_String_append_fn(str, nextChar));
                }, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompIf($elm$core$Char$isDigit)));
            }
        };
        return $elm$parser$Parser$loop_fn("", helper);
    };
    var $elm$parser$Parser$ExpectingSymbol = function (a) {
        return { $: 8, a: a };
    };
    var $elm$parser$Parser$Advanced$Token_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$parser$Parser$Advanced$Token = F2($elm$parser$Parser$Advanced$Token_fn);
    var $elm$core$String$isEmpty = function (string) {
        return string === "";
    };
    var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
    var $elm$parser$Parser$Advanced$token = function (_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        var progress = !$elm$core$String$isEmpty(str);
        return function (s) {
            var _v1 = _Parser_isSubString_fn(str, s.b, s.hG, s.gO, s.dU);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return newOffset === -1 ? $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromState_fn(s, expecting)) : $elm$parser$Parser$Advanced$Good_fn(progress, 0, { gO: newCol, d: s.d, b4: s.b4, b: newOffset, hG: newRow, dU: s.dU });
        };
    };
    var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
    var $elm$parser$Parser$symbol = function (str) {
        return $elm$parser$Parser$Advanced$symbol($elm$parser$Parser$Advanced$Token_fn(str, $elm$parser$Parser$ExpectingSymbol(str)));
    };
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear = 1970;
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay = function (day) {
        return $elm$parser$Parser$problem("Invalid day: " + $elm$core$String$fromInt(day));
    };
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear = function (year) {
        return (!_Basics_modBy_fn(4, year)) && ((!(!_Basics_modBy_fn(100, year))) || (!_Basics_modBy_fn(400, year)));
    };
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore = function (y1) {
        var y = y1 - 1;
        return (((y / 4) | 0) - ((y / 100) | 0)) + ((y / 400) | 0);
    };
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerDay = 86400000;
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerYear = 31536000000;
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$yearMonthDay = function (_v0) {
        var year = _v0.a;
        var month = _v0.b;
        var dayInMonth = _v0.c;
        if (dayInMonth < 0) {
            return $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth);
        }
        else {
            var succeedWith = function (extraMs) {
                var yearMs = $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerYear * (year - $rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear);
                var days = ((month < 3) || (!$rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear(year))) ? (dayInMonth - 1) : dayInMonth;
                var dayMs = $rtfeldman$elm_iso8601_date_strings$Iso8601$msPerDay * (days + ($rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore(year) - $rtfeldman$elm_iso8601_date_strings$Iso8601$leapYearsBefore($rtfeldman$elm_iso8601_date_strings$Iso8601$epochYear)));
                return $elm$parser$Parser$succeed((extraMs + yearMs) + dayMs);
            };
            switch (month) {
                case 1:
                    return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(0);
                case 2:
                    return ((dayInMonth > 29) || ((dayInMonth === 29) && (!$rtfeldman$elm_iso8601_date_strings$Iso8601$isLeapYear(year)))) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(2678400000);
                case 3:
                    return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(5097600000);
                case 4:
                    return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(7776000000);
                case 5:
                    return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(10368000000);
                case 6:
                    return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(13046400000);
                case 7:
                    return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(15638400000);
                case 8:
                    return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(18316800000);
                case 9:
                    return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(20995200000);
                case 10:
                    return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(23587200000);
                case 11:
                    return (dayInMonth > 30) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(26265600000);
                case 12:
                    return (dayInMonth > 31) ? $rtfeldman$elm_iso8601_date_strings$Iso8601$invalidDay(dayInMonth) : succeedWith(28857600000);
                default:
                    return $elm$parser$Parser$problem("Invalid month: \"" + ($elm$core$String$fromInt(month) + "\""));
            }
        }
    };
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$monthYearDayInMs = $elm$parser$Parser$Advanced$andThen_fn($rtfeldman$elm_iso8601_date_strings$Iso8601$yearMonthDay, $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$succeed(F3(function (year, month, day) {
        return _Utils_Tuple3(year, month, day);
    })), $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(4)), $elm$parser$Parser$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol("-")), $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
        $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
    ]))), $elm$parser$Parser$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol("-")), $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
        $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
    ]))));
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$utcOffsetInMinutes = function () {
        var utcOffsetMinutesFromParts = F3(function (multiplier, hours, minutes) {
            return (multiplier * (hours * 60)) + minutes;
        });
        return $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$map_fn(function (_v0) {
                return 0;
            }, $elm$parser$Parser$symbol("Z")),
            $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$succeed(utcOffsetMinutesFromParts), $elm$parser$Parser$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$map_fn(function (_v1) {
                    return 1;
                }, $elm$parser$Parser$symbol("+")),
                $elm$parser$Parser$Advanced$map_fn(function (_v2) {
                    return -1;
                }, $elm$parser$Parser$symbol("-"))
            ]))), $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)), $elm$parser$Parser$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol(":")), $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
                $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
                $elm$parser$Parser$succeed(0)
            ]))),
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed(0), $elm$parser$Parser$end)
        ])));
    }();
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$iso8601 = $elm$parser$Parser$Advanced$andThen_fn(function (datePart) {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts(datePart)), $elm$parser$Parser$symbol("T")), $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)), $elm$parser$Parser$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol(":")), $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
                $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)
            ]))), $elm$parser$Parser$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol(":")), $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2)),
                $rtfeldman$elm_iso8601_date_strings$Iso8601$paddedInt(2),
                $elm$parser$Parser$succeed(0)
            ]))), $elm$parser$Parser$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$symbol(".")), $rtfeldman$elm_iso8601_date_strings$Iso8601$fractionsOfASecondInMs),
                $elm$parser$Parser$succeed(0)
            ]))), $elm$parser$Parser$Advanced$ignorer_fn($rtfeldman$elm_iso8601_date_strings$Iso8601$utcOffsetInMinutes, $elm$parser$Parser$end)),
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($rtfeldman$elm_iso8601_date_strings$Iso8601$fromParts_fn(datePart, 0, 0, 0, 0, 0)), $elm$parser$Parser$end)
        ]));
    }, $rtfeldman$elm_iso8601_date_strings$Iso8601$monthYearDayInMs);
    var $elm$parser$Parser$DeadEnd_fn = function (row, col, problem) {
        return { gO: col, hw: problem, hG: row };
    }, $elm$parser$Parser$DeadEnd = F3($elm$parser$Parser$DeadEnd_fn);
    var $elm$parser$Parser$problemToDeadEnd = function (p) {
        return $elm$parser$Parser$DeadEnd_fn(p.hG, p.gO, p.hw);
    };
    var $elm$parser$Parser$Advanced$bagToList_fn = function (bag, list) {
        bagToList: while (true) {
            switch (bag.$) {
                case 0:
                    return list;
                case 1:
                    var bag1 = bag.a;
                    var x = bag.b;
                    var $temp$bag = bag1, $temp$list = _List_Cons(x, list);
                    bag = $temp$bag;
                    list = $temp$list;
                    continue bagToList;
                default:
                    var bag1 = bag.a;
                    var bag2 = bag.b;
                    var $temp$bag = bag1, $temp$list = $elm$parser$Parser$Advanced$bagToList_fn(bag2, list);
                    bag = $temp$bag;
                    list = $temp$list;
                    continue bagToList;
            }
        }
    }, $elm$parser$Parser$Advanced$bagToList = F2($elm$parser$Parser$Advanced$bagToList_fn);
    var $elm$parser$Parser$Advanced$run_fn = function (_v0, src) {
        var parse = _v0;
        var _v1 = parse({ gO: 1, d: _List_Nil, b4: 1, b: 0, hG: 1, dU: src });
        if (!_v1.$) {
            var value = _v1.b;
            return $elm$core$Result$Ok(value);
        }
        else {
            var bag = _v1.b;
            return $elm$core$Result$Err($elm$parser$Parser$Advanced$bagToList_fn(bag, _List_Nil));
        }
    }, $elm$parser$Parser$Advanced$run = F2($elm$parser$Parser$Advanced$run_fn);
    var $elm$parser$Parser$run_fn = function (parser, source) {
        var _v0 = $elm$parser$Parser$Advanced$run_fn(parser, source);
        if (!_v0.$) {
            var a = _v0.a;
            return $elm$core$Result$Ok(a);
        }
        else {
            var problems = _v0.a;
            return $elm$core$Result$Err($elm$core$List$map_fn($elm$parser$Parser$problemToDeadEnd, problems));
        }
    }, $elm$parser$Parser$run = F2($elm$parser$Parser$run_fn);
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$toTime = function (str) {
        return $elm$parser$Parser$run_fn($rtfeldman$elm_iso8601_date_strings$Iso8601$iso8601, str);
    };
    var $rtfeldman$elm_iso8601_date_strings$Iso8601$decoder = _Json_andThen_fn(function (str) {
        var _v0 = $rtfeldman$elm_iso8601_date_strings$Iso8601$toTime(str);
        if (_v0.$ === 1) {
            var deadEnds = _v0.a;
            return $elm$json$Json$Decode$fail($rtfeldman$elm_iso8601_date_strings$DeadEnds$deadEndsToString(deadEnds));
        }
        else {
            var time = _v0.a;
            return $elm$json$Json$Decode$succeed(time);
        }
    }, $elm$json$Json$Decode$string);
    var $author$project$Data$SeatGeek$EventStats = function (listingCount) {
        return function (averagePrice) {
            return function (lowestPriceGoodDeals) {
                return function (lowestPrice) {
                    return function (highestPrice) {
                        return function (visibleListingCount) {
                            return function (dqBucketCounts) {
                                return function (medianPrice) {
                                    return function (lowestSgBasePrice) {
                                        return function (lowestSgBasePriceGoodDeals) {
                                            return { cs: averagePrice, cR: dqBucketCounts, c6: highestPrice, dl: listingCount, dm: lowestPrice, dn: lowestPriceGoodDeals, $7: lowestSgBasePrice, dp: lowestSgBasePriceGoodDeals, dq: medianPrice, ee: visibleListingCount };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var $elm$json$Json$Decode$null = _Json_decodeNull;
    var $elm$json$Json$Decode$nullable = function (decoder) {
        return $elm$json$Json$Decode$oneOf(_List_fromArray([
            $elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
            _Json_map1_fn($elm$core$Maybe$Just, decoder)
        ]));
    };
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0 = $elm$core$Basics$apR, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = $elm$json$Json$Decode$map2($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0);
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder_fn = function (path, valDecoder, fallback) {
        var nullOr = function (decoder) {
            return $elm$json$Json$Decode$oneOf(_List_fromArray([
                decoder,
                $elm$json$Json$Decode$null(fallback)
            ]));
        };
        var handleResult = function (input) {
            var _v0 = _Json_run_fn($elm$json$Json$Decode$at_fn(path, $elm$json$Json$Decode$value), input);
            if (!_v0.$) {
                var rawValue = _v0.a;
                var _v1 = _Json_run_fn(nullOr(valDecoder), rawValue);
                if (!_v1.$) {
                    var finalResult = _v1.a;
                    return $elm$json$Json$Decode$succeed(finalResult);
                }
                else {
                    return $elm$json$Json$Decode$at_fn(path, nullOr(valDecoder));
                }
            }
            else {
                return $elm$json$Json$Decode$succeed(fallback);
            }
        };
        return _Json_andThen_fn(handleResult, $elm$json$Json$Decode$value);
    }, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder = F3($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder_fn);
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn = function (key, valDecoder, fallback, decoder) {
        return _Json_map2_fn($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optionalDecoder_fn(_List_fromArray([key]), valDecoder, fallback), decoder);
    }, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional = F4($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn);
    var $author$project$Data$SeatGeek$eventStats = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("lowest_sg_base_price_good_deals", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("lowest_sg_base_price", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("median_price", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("dq_bucket_counts", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$list($elm$json$Json$Decode$int)), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("visible_listing_count", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("highest_price", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("lowest_price", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("lowest_price_good_deals", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("average_price", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("listing_count", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$EventStats)))))))))));
    var $elm$json$Json$Decode$float = _Json_decodeFloat;
    var $author$project$Data$SeatGeek$Performer = function (performerType) {
        return function (name) {
            return function (image) {
                return function (id) {
                    return function (images) {
                        return function (divisions) {
                            return function (hasUpcomingEvents) {
                                return function (primary) {
                                    return function (stats) {
                                        return function (taxonomies) {
                                            return function (imageAttribution) {
                                                return function (url) {
                                                    return function (score) {
                                                        return function (slug) {
                                                            return function (homeVenueID) {
                                                                return function (shortName) {
                                                                    return function (numUpcomingEvents) {
                                                                        return function (colors) {
                                                                            return function (imageLicense) {
                                                                                return function (genres) {
                                                                                    return function (popularity) {
                                                                                        return function (location) {
                                                                                            return function (imageRightsMessage) {
                                                                                                return function (homeTeam) {
                                                                                                    return function (awayTeam) {
                                                                                                        return { ct: awayTeam, cy: colors, cO: divisions, c2: genres, ah: hasUpcomingEvents, c7: homeTeam, c8: homeVenueID, g: id, ak: image, db: imageAttribution, dc: imageLicense, dd: imageRightsMessage, al: images, ap: location, he: name, as: numUpcomingEvents, dy: performerType, y: popularity, z: primary, A: score, aw: shortName, k: slug, az: stats, aA: taxonomies, C: url };
                                                                                                    };
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var $author$project$Data$SeatGeek$Colors_fn = function (all, iconic, primary) {
        return { cm: all, da: iconic, z: primary };
    }, $author$project$Data$SeatGeek$Colors = F3($author$project$Data$SeatGeek$Colors_fn);
    var $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn = function (key, valDecoder, decoder) {
        return _Json_map2_fn($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom_a0, _Json_decodeField_fn(key, valDecoder), decoder);
    }, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3($NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn);
    var $author$project$Data$SeatGeek$colors = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("primary", $elm$json$Json$Decode$list($elm$json$Json$Decode$string), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("iconic", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("all", $elm$json$Json$Decode$list($elm$json$Json$Decode$string), $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Colors))));
    var $author$project$Data$SeatGeek$Division_fn = function (taxonomyId, shortName, displayName, displayType, divisionLevel, slug) {
        return { af: displayName, cM: displayType, cN: divisionLevel, aw: shortName, k: slug, d0: taxonomyId };
    }, $author$project$Data$SeatGeek$Division = F6($author$project$Data$SeatGeek$Division_fn);
    var $author$project$Data$SeatGeek$division = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("slug", $elm$json$Json$Decode$maybe($elm$json$Json$Decode$string), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("division_level", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("display_type", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("display_name", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("short_name", $elm$json$Json$Decode$maybe($elm$json$Json$Decode$string), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("taxonomy_id", $elm$json$Json$Decode$int, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Division)))))));
    var $author$project$Data$SeatGeek$Genre_fn = function (id, name, slug, primary, images, image, documentSource) {
        return { ag: documentSource, g: id, ak: image, al: images, he: name, z: primary, k: slug };
    }, $author$project$Data$SeatGeek$Genre = F7($author$project$Data$SeatGeek$Genre_fn);
    var $author$project$Data$SeatGeek$DocumentSource_fn = function (sourceType, generationType) {
        return { c1: generationType, dS: sourceType };
    }, $author$project$Data$SeatGeek$DocumentSource = F2($author$project$Data$SeatGeek$DocumentSource_fn);
    var $author$project$Data$SeatGeek$Full = 0;
    var $author$project$Data$SeatGeek$generationType = _Json_andThen_fn(function (str) {
        if (str === "FULL") {
            return $elm$json$Json$Decode$succeed(0);
        }
        else {
            var somethingElse = str;
            return $elm$json$Json$Decode$fail("Invalid GenerationType: " + somethingElse);
        }
    }, $elm$json$Json$Decode$string);
    var $author$project$Data$SeatGeek$Elastic = 0;
    var $author$project$Data$SeatGeek$sourceType = _Json_andThen_fn(function (str) {
        if (str === "ELASTIC") {
            return $elm$json$Json$Decode$succeed(0);
        }
        else {
            var somethingElse = str;
            return $elm$json$Json$Decode$fail("Invalid SourceType: " + somethingElse);
        }
    }, $elm$json$Json$Decode$string);
    var $author$project$Data$SeatGeek$documentSource = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("generation_type", $author$project$Data$SeatGeek$generationType, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("source_type", $author$project$Data$SeatGeek$sourceType, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$DocumentSource)));
    var $author$project$Data$SeatGeek$GenreImages = function (the1200X525) {
        return function (the1200X627) {
            return function (the136X136) {
                return function (the500_700) {
                    return function (the800X320) {
                        return function (banner) {
                            return function (block) {
                                return function (criteo130_160) {
                                    return function (criteo170_235) {
                                        return function (criteo205_100) {
                                            return function (criteo400_300) {
                                                return function (fb100X72) {
                                                    return function (fb600_315) {
                                                        return function (huge) {
                                                            return function (ipadEventModal) {
                                                                return function (ipadHeader) {
                                                                    return function (ipadMiniExplore) {
                                                                        return function (mongo) {
                                                                            return function (squareMid) {
                                                                                return function (triggitFbAd) {
                                                                                    return { cu: banner, cv: block, cB: criteo130_160, cC: criteo170_235, cD: criteo205_100, cE: criteo400_300, c_: fb100X72, c$: fb600_315, aj: huge, df: ipadEventModal, dg: ipadHeader, dh: ipadMiniExplore, dt: mongo, dT: squareMid, d1: the1200X525, d2: the1200X627, d3: the136X136, d4: the500_700, d5: the800X320, ec: triggitFbAd };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var $author$project$Data$SeatGeek$genreImages = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("triggit_fb_ad", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("square_mid", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("mongo", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("ipad_mini_explore", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("ipad_header", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("ipad_event_modal", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("huge", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("fb_600_315", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("fb_100x72", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("criteo_400_300", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("criteo_205_100", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("criteo_170_235", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("criteo_130_160", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("block", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("banner", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("800x320", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("500_700", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("136x136", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("1200x627", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("1200x525", $elm$json$Json$Decode$string, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$GenreImages)))))))))))))))))))));
    var $author$project$Data$SeatGeek$genre = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("document_source", $author$project$Data$SeatGeek$documentSource, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("image", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("images", $author$project$Data$SeatGeek$genreImages, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("primary", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("slug", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("name", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("id", $elm$json$Json$Decode$int, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Genre))))))));
    var $author$project$Data$SeatGeek$Location_fn = function (lat, lon) {
        return { am: lat, aq: lon };
    }, $author$project$Data$SeatGeek$Location = F2($author$project$Data$SeatGeek$Location_fn);
    var $author$project$Data$SeatGeek$location = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("lon", $elm$json$Json$Decode$float, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("lat", $elm$json$Json$Decode$float, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Location)));
    var $author$project$Data$SeatGeek$PerformerImages = function (huge) {
        return { aj: huge };
    };
    var $author$project$Data$SeatGeek$performerImages = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("huge", $elm$json$Json$Decode$string, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$PerformerImages));
    var $author$project$Data$SeatGeek$PerformerStats = function (eventCount) {
        return { cU: eventCount };
    };
    var $author$project$Data$SeatGeek$performerStats = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("event_count", $elm$json$Json$Decode$int, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$PerformerStats));
    var $author$project$Data$SeatGeek$Taxonomy_fn = function (id, name, parentID, documentSource, rank) {
        return { ag: documentSource, g: id, he: name, dw: parentID, dJ: rank };
    }, $author$project$Data$SeatGeek$Taxonomy = F5($author$project$Data$SeatGeek$Taxonomy_fn);
    var $author$project$Data$SeatGeek$Up = $elm$core$Basics$identity;
    var $elm_community$string_extra$String$Extra$regexFromString_a0 = $elm$regex$Regex$fromString, $elm_community$string_extra$String$Extra$regexFromString_a1 = $elm$core$Maybe$withDefault($elm$regex$Regex$never), $elm_community$string_extra$String$Extra$regexFromString = A2($elm$core$Basics$composeR, $elm_community$string_extra$String$Extra$regexFromString_a0, $elm_community$string_extra$String$Extra$regexFromString_a1);
    var $elm$core$String$cons = _String_cons;
    var $elm_community$string_extra$String$Extra$changeCase_fn = function (mutator, word) {
        return $elm$core$Maybe$withDefault_fn("", $elm$core$Maybe$map_fn(function (_v0) {
            var head = _v0.a;
            var tail = _v0.b;
            return _String_cons_fn(mutator(head), tail);
        }, $elm$core$String$uncons(word)));
    }, $elm_community$string_extra$String$Extra$changeCase = F2($elm_community$string_extra$String$Extra$changeCase_fn);
    var $elm$core$Char$toUpper = _Char_toUpper;
    var $elm_community$string_extra$String$Extra$toSentenceCase = function (word) {
        return $elm_community$string_extra$String$Extra$changeCase_fn($elm$core$Char$toUpper, word);
    };
    var $elm_community$string_extra$String$Extra$humanize = function (string) {
        return $elm_community$string_extra$String$Extra$toSentenceCase($elm$core$String$toLower($elm$core$String$trim(_Regex_replaceAtMost_fn($elm$regex$Regex$replace_a0, $elm$core$Basics$composeR_fn($elm_community$string_extra$String$Extra$regexFromString_a0, $elm_community$string_extra$String$Extra$regexFromString_a1, "_id$|[-_\\s]+"), $elm$core$Basics$always(" "), _Regex_replaceAtMost_fn($elm$regex$Regex$replace_a0, $elm$core$Basics$composeR_fn($elm_community$string_extra$String$Extra$regexFromString_a0, $elm_community$string_extra$String$Extra$regexFromString_a1, "[A-Z]+"), A2($elm$core$Basics$composeR, function ($) {
            return $.eV;
        }, $elm$core$String$append("-")), string)))));
    };
    var $author$project$Data$SeatGeek$upperEnumFromString_a0 = $elm_community$string_extra$String$Extra$humanize, $author$project$Data$SeatGeek$upperEnumFromString_a1 = A2($elm$core$Basics$composeR, $elm$core$String$toUpper, $elm$core$Basics$identity), $author$project$Data$SeatGeek$upperEnumFromString = A2($elm$core$Basics$composeR, $author$project$Data$SeatGeek$upperEnumFromString_a0, $author$project$Data$SeatGeek$upperEnumFromString_a1);
    var $author$project$Data$SeatGeek$upperEnum = _Json_map1_fn($author$project$Data$SeatGeek$upperEnumFromString, $elm$json$Json$Decode$string);
    var $author$project$Data$SeatGeek$taxonomy = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("rank", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("document_source", $elm$json$Json$Decode$nullable($author$project$Data$SeatGeek$documentSource), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("parent_id", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("name", $author$project$Data$SeatGeek$upperEnum, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("id", $elm$json$Json$Decode$int, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Taxonomy))))));
    var $author$project$Data$SeatGeek$performer = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("away_team", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$bool), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("home_team", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$bool), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("image_rights_message", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("location", $elm$json$Json$Decode$nullable($author$project$Data$SeatGeek$location), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("popularity", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("genres", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$list($author$project$Data$SeatGeek$genre)), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("image_license", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$string), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("colors", $elm$json$Json$Decode$nullable($author$project$Data$SeatGeek$colors), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("num_upcoming_events", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("short_name", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("home_venue_id", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$int), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("slug", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("score", $elm$json$Json$Decode$float, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("url", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("image_attribution", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$string), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("taxonomies", $elm$json$Json$Decode$list($author$project$Data$SeatGeek$taxonomy), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("stats", $author$project$Data$SeatGeek$performerStats, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("primary", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$bool), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("has_upcoming_events", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("divisions", $elm$json$Json$Decode$list($author$project$Data$SeatGeek$division), _List_Nil, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("images", $author$project$Data$SeatGeek$performerImages, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("id", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("image", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("name", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("type", $author$project$Data$SeatGeek$upperEnum, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Performer))))))))))))))))))))))))));
    var $author$project$Data$SeatGeek$Normal = 0;
    var $author$project$Data$SeatGeek$status = _Json_andThen_fn(function (str) {
        if (str === "normal") {
            return $elm$json$Json$Decode$succeed(0);
        }
        else {
            var somethingElse = str;
            return $elm$json$Json$Decode$fail("Invalid Status: " + somethingElse);
        }
    }, $elm$json$Json$Decode$string);
    var $author$project$Data$SeatGeek$Venue = function (state) {
        return function (nameV2) {
            return function (postalCode) {
                return function (name) {
                    return function (links) {
                        return function (timezone) {
                            return function (url) {
                                return function (score) {
                                    return function (location) {
                                        return function (address) {
                                            return function (country) {
                                                return function (hasUpcomingEvents) {
                                                    return function (numUpcomingEvents) {
                                                        return function (city) {
                                                            return function (slug) {
                                                                return function (extendedAddress) {
                                                                    return function (id) {
                                                                        return function (popularity) {
                                                                            return function (accessMethod) {
                                                                                return function (metroCode) {
                                                                                    return function (capacity) {
                                                                                        return function (displayLocation) {
                                                                                            return { ab: accessMethod, cl: address, cx: capacity, ad: city, ae: country, cL: displayLocation, cY: extendedAddress, ah: hasUpcomingEvents, g: id, an: links, ap: location, ar: metroCode, he: name, du: nameV2, as: numUpcomingEvents, y: popularity, av: postalCode, A: score, k: slug, ay: state, d8: timezone, C: url };
                                                                                        };
                                                                                    };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    var $author$project$Data$SeatGeek$venue = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("display_location", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("capacity", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("metro_code", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("access_method", $elm$json$Json$Decode$null(0), 0, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("popularity", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("id", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("extended_address", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("slug", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("city", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("num_upcoming_events", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("has_upcoming_events", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("country", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("address", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("location", $author$project$Data$SeatGeek$location, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("score", $elm$json$Json$Decode$float, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("url", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("timezone", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("links", $elm$json$Json$Decode$list($elm$json$Json$Decode$value), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("name", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("postal_code", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("name_v2", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("state", $elm$json$Json$Decode$string, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Venue)))))))))))))))))))))));
    var $author$project$Data$SeatGeek$event = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("general_admission", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$bool), $elm$core$Maybe$Nothing, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("domain_information", $elm$json$Json$Decode$list($elm$json$Json$Decode$value), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("themes", $elm$json$Json$Decode$list($elm$json$Json$Decode$value), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("enddatetime_utc", $elm$json$Json$Decode$null(0), 0, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("conditional", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("announcements", $author$project$Data$SeatGeek$announcements, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("event_promotion", $elm$json$Json$Decode$null(0), 0, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$optional_fn("access_method", $elm$json$Json$Decode$null(0), 0, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("status", $author$project$Data$SeatGeek$status, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("description", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("popularity", $elm$json$Json$Decode$float, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("title", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("date_tbd", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("created_at", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("announce_date", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("score", $elm$json$Json$Decode$float, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("url", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("taxonomies", $elm$json$Json$Decode$list($author$project$Data$SeatGeek$taxonomy), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("stats", $author$project$Data$SeatGeek$eventStats, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("visible_until_utc", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("short_title", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("time_tbd", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("datetime_local", $rtfeldman$elm_iso8601_date_strings$Iso8601$decoder, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("links", $elm$json$Json$Decode$list($elm$json$Json$Decode$value), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("is_open", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("performers", $elm$json$Json$Decode$list($author$project$Data$SeatGeek$performer), $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("datetime_tbd", $elm$json$Json$Decode$bool, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("venue", $author$project$Data$SeatGeek$venue, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("datetime_utc", $rtfeldman$elm_iso8601_date_strings$Iso8601$decoder, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("id", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("type", $author$project$Data$SeatGeek$upperEnum, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Event))))))))))))))))))))))))))))))));
    var $author$project$Data$SeatGeek$Meta_fn = function (total, took, page, perPage, geolocation) {
        return { c3: geolocation, dv: page, dx: perPage, ea: took, eb: total };
    }, $author$project$Data$SeatGeek$Meta = F5($author$project$Data$SeatGeek$Meta_fn);
    var $author$project$Data$SeatGeek$Geolocation_fn = function (lat, lon, city, state, country, postalCode, displayName, metroCode, range) {
        return { ad: city, ae: country, af: displayName, am: lat, aq: lon, ar: metroCode, av: postalCode, dI: range, ay: state };
    }, $author$project$Data$SeatGeek$Geolocation = F9($author$project$Data$SeatGeek$Geolocation_fn);
    var $author$project$Data$SeatGeek$geolocation = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("range", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("metro_code", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("display_name", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("postal_code", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("country", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("state", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("city", $elm$json$Json$Decode$string, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("lon", $elm$json$Json$Decode$float, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("lat", $elm$json$Json$Decode$float, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Geolocation))))))))));
    var $author$project$Data$SeatGeek$meta = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("geolocation", $author$project$Data$SeatGeek$geolocation, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("per_page", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("page", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("took", $elm$json$Json$Decode$int, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("total", $elm$json$Json$Decode$int, $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Meta))))));
    var $author$project$Data$SeatGeek$events = $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("meta", $author$project$Data$SeatGeek$meta, $NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required_fn("events", $elm$json$Json$Decode$list($author$project$Data$SeatGeek$event), $elm$json$Json$Decode$succeed($author$project$Data$SeatGeek$Events)));
    var $author$project$DataSource$Http$emptyBody = $author$project$Pages$Internal$StaticHttpBody$EmptyBody;
    var $author$project$DataSource$Http$ExpectJson = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$DataSource$Http$expectJson = $author$project$DataSource$Http$ExpectJson;
    var $author$project$DataSource$Http$BadStatus__fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $author$project$DataSource$Http$BadStatus_ = F2($author$project$DataSource$Http$BadStatus__fn);
    var $author$project$Pages$StaticHttpRequest$DecoderError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$DataSource$Http$GoodStatus__fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $author$project$DataSource$Http$GoodStatus_ = F2($author$project$DataSource$Http$GoodStatus__fn);
    var $author$project$Pages$StaticHttpRequest$MissingHttpResponse_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Pages$StaticHttpRequest$MissingHttpResponse = F2($author$project$Pages$StaticHttpRequest$MissingHttpResponse_fn);
    var $elm$core$Result$andThen_fn = function (callback, result) {
        if (!result.$) {
            var value = result.a;
            return callback(value);
        }
        else {
            var msg = result.a;
            return $elm$core$Result$Err(msg);
        }
    }, $elm$core$Result$andThen = F2($elm$core$Result$andThen_fn);
    var $elm$bytes$Bytes$Decode$decode_fn = function (_v0, bs) {
        var decoder = _v0;
        return _Bytes_decode_fn(decoder, bs);
    }, $elm$bytes$Bytes$Decode$decode = F2($elm$bytes$Bytes$Decode$decode_fn);
    var $author$project$DataSource$Http$expectToString = function (expect) {
        switch (expect.$) {
            case 0:
                return "ExpectJson";
            case 1:
                return "ExpectString";
            case 2:
                return "ExpectResponse";
            case 4:
                return "ExpectBytes";
            case 5:
                return "ExpectWhatever";
            default:
                return "ExpectBytesResponse";
        }
    };
    var $author$project$RequestsAndPending$get_fn = function (key, requestsAndPending) {
        return $elm$core$Maybe$andThen_fn($elm$core$Basics$identity, $elm$core$Dict$get_fn(key, requestsAndPending));
    }, $author$project$RequestsAndPending$get = F2($author$project$RequestsAndPending$get_fn);
    var $author$project$DataSource$Http$requestToString = function (requestDetails) {
        return requestDetails.C;
    };
    var $author$project$DataSource$Http$toResult = function (result) {
        if (result.$ === 1) {
            var error = result.a;
            return $author$project$Pages$StaticHttpRequest$RequestError(error);
        }
        else {
            var okValue = result.a;
            return $author$project$Pages$StaticHttpRequest$ApiRoute(okValue);
        }
    };
    var $author$project$DataSource$Http$request_fn = function (request__, expect) {
        var request_ = _Utils_update(request__, {
            eI: _List_Cons(_Utils_Tuple2("elm-pages-internal", $author$project$DataSource$Http$expectToString(expect)), request__.eI)
        });
        return $author$project$Pages$StaticHttpRequest$Request_fn(_List_fromArray([request_]), F2(function (maybeMockResolver, rawResponseDict) {
            return $author$project$DataSource$Http$toResult($elm$core$Result$andThen_fn(function (_v2) {
                var maybeResponse = _v2.a;
                var body = _v2.b;
                var _v3 = _Utils_Tuple3(expect, body, maybeResponse);
                _v3$6: while (true) {
                    switch (_v3.b.$) {
                        case 2:
                            if (!_v3.a.$) {
                                var decoder = _v3.a.a;
                                var json = _v3.b.a;
                                return $elm$core$Result$mapError_fn(function (error) {
                                    return $author$project$Pages$StaticHttpRequest$DecoderError($elm$json$Json$Decode$errorToString(error));
                                }, _Json_run_fn(decoder, json));
                            }
                            else {
                                break _v3$6;
                            }
                        case 1:
                            switch (_v3.a.$) {
                                case 1:
                                    var mapStringFn = _v3.a.a;
                                    var string = _v3.b.a;
                                    return $elm$core$Result$Ok(mapStringFn(string));
                                case 2:
                                    if (!_v3.c.$) {
                                        var mapResponse = _v3.a.a;
                                        var asStringBody = _v3.b.a;
                                        var rawResponse = _v3.c.a;
                                        var asMetadata = { eI: rawResponse.eI, aa: rawResponse.aa, bc: rawResponse.bc, C: rawResponse.C };
                                        var rawResponseToResponse = ((200 <= rawResponse.aa) && (rawResponse.aa < 300)) ? $author$project$DataSource$Http$GoodStatus__fn(asMetadata, asStringBody) : $author$project$DataSource$Http$BadStatus__fn(asMetadata, asStringBody);
                                        return $elm$core$Result$Ok(mapResponse(rawResponseToResponse));
                                    }
                                    else {
                                        break _v3$6;
                                    }
                                default:
                                    break _v3$6;
                            }
                        case 0:
                            switch (_v3.a.$) {
                                case 3:
                                    if (!_v3.c.$) {
                                        var mapResponse = _v3.a.a;
                                        var rawBytesBody = _v3.b.a;
                                        var rawResponse = _v3.c.a;
                                        var asMetadata = { eI: rawResponse.eI, aa: rawResponse.aa, bc: rawResponse.bc, C: rawResponse.C };
                                        var rawResponseToResponse = ((200 <= rawResponse.aa) && (rawResponse.aa < 300)) ? $author$project$DataSource$Http$GoodStatus__fn(asMetadata, rawBytesBody) : $author$project$DataSource$Http$BadStatus__fn(asMetadata, rawBytesBody);
                                        return $elm$core$Result$Ok(mapResponse(rawResponseToResponse));
                                    }
                                    else {
                                        break _v3$6;
                                    }
                                case 4:
                                    var bytesDecoder = _v3.a.a;
                                    var rawBytes = _v3.b.a;
                                    return $elm$core$Result$fromMaybe_fn($author$project$Pages$StaticHttpRequest$DecoderError("Bytes decoding failed."), $elm$bytes$Bytes$Decode$decode_fn(bytesDecoder, rawBytes));
                                default:
                                    break _v3$6;
                            }
                        default:
                            if (_v3.a.$ === 5) {
                                var whateverValue = _v3.a.a;
                                var _v4 = _v3.b;
                                return $elm$core$Result$Ok(whateverValue);
                            }
                            else {
                                break _v3$6;
                            }
                    }
                }
                return $elm$core$Result$Err($author$project$Pages$StaticHttpRequest$DecoderError("Internal error - unexpected body, expect, and raw response combination."));
            }, function (maybeResponse) {
                if (!maybeResponse.$) {
                    var rawResponse = maybeResponse.a;
                    return $elm$core$Result$Ok(rawResponse);
                }
                else {
                    return $elm$core$Result$Err($author$project$Pages$StaticHttpRequest$MissingHttpResponse_fn($author$project$DataSource$Http$requestToString(request_), _List_fromArray([request_])));
                }
            }(function () {
                if (!maybeMockResolver.$) {
                    var mockResolver = maybeMockResolver.a;
                    return mockResolver(request_);
                }
                else {
                    return $author$project$RequestsAndPending$get_fn($author$project$Pages$StaticHttp$Request$hash(request_), rawResponseDict);
                }
            }())));
        }));
    }, $author$project$DataSource$Http$request = F2($author$project$DataSource$Http$request_fn);
    var $author$project$DataSource$Http$get_fn = function (url, decoder) {
        return $author$project$DataSource$Http$request_fn(function (okUrl) {
            return { er: $author$project$DataSource$Http$emptyBody, eI: _List_Nil, eW: "GET", C: okUrl };
        }(url), $author$project$DataSource$Http$expectJson(decoder));
    }, $author$project$DataSource$Http$get = F2($author$project$DataSource$Http$get_fn);
    var $elm$url$Url$Builder$QueryParameter_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$url$Url$Builder$QueryParameter = F2($elm$url$Url$Builder$QueryParameter_fn);
    var $elm$url$Url$percentEncode = _Url_percentEncode;
    var $elm$url$Url$Builder$string_fn = function (key, value) {
        return $elm$url$Url$Builder$QueryParameter_fn($elm$url$Url$percentEncode(key), $elm$url$Url$percentEncode(value));
    }, $elm$url$Url$Builder$string = F2($elm$url$Url$Builder$string_fn);
    var $author$project$Internal$Request$Parser = $elm$core$Basics$identity;
    var $author$project$Server$Request$succeed = function (value) {
        return $elm$json$Json$Decode$succeed(_Utils_Tuple2($elm$core$Result$Ok(value), _List_Nil));
    };
    var $author$project$Route$Events$data = function (routeParams) {
        var endpoint = $elm$url$Url$Builder$crossOrigin_fn("https://api.seatgeek.com", _List_fromArray(["2", "events"]), _List_fromArray([
            $elm$url$Url$Builder$string_fn("client_id", "MzUwNDE1NnwxNDgxNjA1ODM2"),
            $elm$url$Url$Builder$string_fn("postal_code", "65203"),
            $elm$url$Url$Builder$string_fn("per_page", "30")
        ]));
        return $author$project$Server$Request$succeed($author$project$DataSource$Http$get_fn(endpoint, _Json_map1_fn($author$project$Server$Response$render, $author$project$Data$SeatGeek$events)));
    };
    var $author$project$Route$Events$head = function (_static) {
        return $author$project$Site$head;
    };
    var $author$project$DataSource$addUrls_fn = function (urlsToAdd, requestInfo) {
        switch (requestInfo.$) {
            case 1:
                var error = requestInfo.a;
                return $author$project$Pages$StaticHttpRequest$RequestError(error);
            case 0:
                var initialUrls = requestInfo.a;
                var _function = requestInfo.b;
                return $author$project$Pages$StaticHttpRequest$Request_fn(_Utils_ap(initialUrls, urlsToAdd), _function);
            default:
                var value = requestInfo.a;
                return $author$project$Pages$StaticHttpRequest$ApiRoute(value);
        }
    }, $author$project$DataSource$addUrls = F2($author$project$DataSource$addUrls_fn);
    var $author$project$DataSource$lookup_fn = function (maybeMockResolver, requestInfo, rawResponses) {
        lookup: while (true) {
            switch (requestInfo.$) {
                case 1:
                    var error = requestInfo.a;
                    return $elm$core$Result$Err(error);
                case 0:
                    var urls = requestInfo.a;
                    var lookupFn = requestInfo.b;
                    var $temp$maybeMockResolver = maybeMockResolver, $temp$requestInfo = $author$project$DataSource$addUrls_fn(urls, A2(lookupFn, maybeMockResolver, rawResponses)), $temp$rawResponses = rawResponses;
                    maybeMockResolver = $temp$maybeMockResolver;
                    requestInfo = $temp$requestInfo;
                    rawResponses = $temp$rawResponses;
                    continue lookup;
                default:
                    var value = requestInfo.a;
                    return $elm$core$Result$Ok(value);
            }
        }
    }, $author$project$DataSource$lookup = F3($author$project$DataSource$lookup_fn);
    var $author$project$DataSource$lookupUrls = function (requestInfo) {
        switch (requestInfo.$) {
            case 1:
                return _List_Nil;
            case 0:
                var urls = requestInfo.a;
                return urls;
            default:
                return _List_Nil;
        }
    };
    var $author$project$DataSource$andThen_fn = function (fn, requestInfo) {
        return $author$project$Pages$StaticHttpRequest$Request_fn($author$project$DataSource$lookupUrls(requestInfo), F2(function (maybeMockResolver, rawResponses) {
            return function (result) {
                if (result.$ === 1) {
                    var error = result.a;
                    return $author$project$Pages$StaticHttpRequest$RequestError(error);
                }
                else {
                    var value = result.a;
                    var _v1 = fn(value);
                    switch (_v1.$) {
                        case 0:
                            var values = _v1.a;
                            var _function = _v1.b;
                            return $author$project$Pages$StaticHttpRequest$Request_fn(values, _function);
                        case 1:
                            var error = _v1.a;
                            return $author$project$Pages$StaticHttpRequest$RequestError(error);
                        default:
                            var finalValue = _v1.a;
                            return $author$project$Pages$StaticHttpRequest$ApiRoute(finalValue);
                    }
                }
            }($author$project$DataSource$lookup_fn(maybeMockResolver, requestInfo, rawResponses));
        }));
    }, $author$project$DataSource$andThen = F2($author$project$DataSource$andThen_fn);
    var $author$project$Server$Request$methodToString = function (method_) {
        switch (method_.$) {
            case 0:
                return "CONNECT";
            case 1:
                return "DELETE";
            case 2:
                return "GET";
            case 3:
                return "HEAD";
            case 4:
                return "OPTIONS";
            case 5:
                return "PATCH";
            case 6:
                return "POST";
            case 7:
                return "PUT";
            case 8:
                return "TRACE";
            default:
                var nonStandardMethod = method_.a;
                return nonStandardMethod;
        }
    };
    var $author$project$Server$Request$errorToString = function (validationError_) {
        switch (validationError_.$) {
            case 0:
                var message = validationError_.a;
                return message;
            case 1:
                var validationErrors = validationError_.a;
                return "Server.Request.oneOf failed in the following " + ($elm$core$String$fromInt($elm$core$List$length(validationErrors)) + (" ways:\n\n" + $elm$core$String$join_fn("\n\n", $elm$core$List$indexedMap_fn_unwrapped(function (index, error) {
                    return "(" + ($elm$core$String$fromInt(index + 1) + (") " + $author$project$Server$Request$errorToString(error)));
                }, validationErrors))));
            case 2:
                var record = validationError_.a;
                return "Did not match formPost because\n" + $elm$core$String$join_fn("\n", $elm$core$List$filterMap_fn($elm$core$Basics$identity, _List_fromArray([
                    $elm$core$Maybe$map_fn(function (method_) {
                        return "- Form post must have method POST, but the method was " + $author$project$Server$Request$methodToString(method_);
                    }, record.eW),
                    $elm$core$Maybe$map_fn(function (contentType) {
                        return "- Forms must have Content-Type application/x-www-form-urlencoded, but the Content-Type was " + contentType;
                    }, record.gP)
                ])));
            default:
                var record = validationError_.a;
                return "Missing query param \"" + (record.ds + ("\". Query string was `" + (record.cn + "`")));
        }
    };
    var $turboMaCk$non_empty_list_alias$List$NonEmpty$toList = function (_v0) {
        var h = _v0.a;
        var t = _v0.b;
        return _List_Cons(h, t);
    };
    var $author$project$Server$Request$errorsToString = function (validationErrors) {
        return $elm$core$String$join_fn("\n", $elm$core$List$map_fn($author$project$Server$Request$errorToString, $turboMaCk$non_empty_list_alias$List$NonEmpty$toList(validationErrors)));
    };
    var $author$project$Pages$StaticHttpRequest$UserCalledStaticHttpFail = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$DataSource$fail = function (errorMessage) {
        return $author$project$Pages$StaticHttpRequest$RequestError($author$project$Pages$StaticHttpRequest$UserCalledStaticHttpFail(errorMessage));
    };
    var $author$project$Server$Request$getDecoder = function (_v0) {
        var decoder = _v0;
        return _Json_map1_fn(function (_v1) {
            var result = _v1.a;
            var validationErrors = _v1.b;
            var _v2 = _Utils_Tuple2(result, validationErrors);
            if (!_v2.a.$) {
                if (!_v2.b.b) {
                    var value = _v2.a.a;
                    return $elm$core$Result$Ok(value);
                }
                else {
                    var _v3 = _v2.b;
                    var firstError = _v3.a;
                    var rest = _v3.b;
                    return $elm$core$Result$Err(_Utils_Tuple2(firstError, rest));
                }
            }
            else {
                var fatalError = _v2.a.a;
                var errors = _v2.b;
                return $elm$core$Result$Err(_Utils_Tuple2(fatalError, errors));
            }
        }, decoder);
    };
    var $author$project$RouteBuilder$serverRender = function (_v0) {
        var head = _v0.aI;
        var data = _v0.m;
        return {
            m: function (routeParams) {
                return $author$project$DataSource$andThen_fn(function (rendered) {
                    if (!rendered.$) {
                        var okRendered = rendered.a;
                        return okRendered;
                    }
                    else {
                        var error = rendered.a;
                        return $author$project$DataSource$fail($author$project$Server$Request$errorsToString(error));
                    }
                }, $author$project$DataSource$Http$get_fn("$$elm-pages$$headers", $author$project$Server$Request$getDecoder(data(routeParams))));
            },
            fV: F3(function (moduleContext, toRecord, routeParams) {
                return $author$project$DataSource$succeed($elm$core$Maybe$Nothing);
            }),
            aI: head,
            fA: "serverless",
            bS: true,
            fK: $author$project$DataSource$succeed(_List_Nil)
        };
    };
    var $ryannhg$date_format$DateFormat$AmPmLowercase = { $: 23 };
    var $ryannhg$date_format$DateFormat$amPmLowercase = $ryannhg$date_format$DateFormat$AmPmLowercase;
    var $elm$html$Html$Attributes$classList = function (classes) {
        return $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, $elm$core$String$join_fn(" ", $elm$core$List$map_fn($elm$core$Tuple$first, $elm$core$List$filter_fn($elm$core$Tuple$second, classes))));
    };
    var $ryannhg$date_format$DateFormat$DayOfMonthSuffix = { $: 6 };
    var $ryannhg$date_format$DateFormat$dayOfMonthSuffix = $ryannhg$date_format$DateFormat$DayOfMonthSuffix;
    var $ryannhg$date_format$DateFormat$Language$Language_fn = function (toMonthName, toMonthAbbreviation, toWeekdayName, toWeekdayAbbreviation, toAmPm, toOrdinalSuffix) {
        return { hS: toAmPm, hU: toMonthAbbreviation, hV: toMonthName, d9: toOrdinalSuffix, hW: toWeekdayAbbreviation, hX: toWeekdayName };
    }, $ryannhg$date_format$DateFormat$Language$Language = F6($ryannhg$date_format$DateFormat$Language$Language_fn);
    var $ryannhg$date_format$DateFormat$Language$toEnglishAmPm = function (hour) {
        return (hour > 11) ? "pm" : "am";
    };
    var $ryannhg$date_format$DateFormat$Language$toEnglishMonthName = function (month) {
        switch (month) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            default:
                return "December";
        }
    };
    var $ryannhg$date_format$DateFormat$Language$toEnglishSuffix = function (num) {
        var _v0 = _Basics_modBy_fn(100, num);
        switch (_v0) {
            case 11:
                return "th";
            case 12:
                return "th";
            case 13:
                return "th";
            default:
                var _v1 = _Basics_modBy_fn(10, num);
                switch (_v1) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th";
                }
        }
    };
    var $ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName = function (weekday) {
        switch (weekday) {
            case 0:
                return "Monday";
            case 1:
                return "Tuesday";
            case 2:
                return "Wednesday";
            case 3:
                return "Thursday";
            case 4:
                return "Friday";
            case 5:
                return "Saturday";
            default:
                return "Sunday";
        }
    };
    var $ryannhg$date_format$DateFormat$Language$english = $ryannhg$date_format$DateFormat$Language$Language_fn($ryannhg$date_format$DateFormat$Language$toEnglishMonthName, A2($elm$core$Basics$composeR, $ryannhg$date_format$DateFormat$Language$toEnglishMonthName, $elm$core$String$left(3)), $ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName, A2($elm$core$Basics$composeR, $ryannhg$date_format$DateFormat$Language$toEnglishWeekdayName, $elm$core$String$left(3)), $ryannhg$date_format$DateFormat$Language$toEnglishAmPm, $ryannhg$date_format$DateFormat$Language$toEnglishSuffix);
    var $elm$time$Time$flooredDiv_fn = function (numerator, denominator) {
        return $elm$core$Basics$floor(numerator / denominator);
    }, $elm$time$Time$flooredDiv = F2($elm$time$Time$flooredDiv_fn);
    var $elm$time$Time$posixToMillis = function (_v0) {
        var millis = _v0;
        return millis;
    };
    var $elm$time$Time$toAdjustedMinutesHelp_fn = function (defaultOffset, posixMinutes, eras) {
        toAdjustedMinutesHelp: while (true) {
            if (!eras.b) {
                return posixMinutes + defaultOffset;
            }
            else {
                var era = eras.a;
                var olderEras = eras.b;
                if (_Utils_cmp(era.hO, posixMinutes) < 0) {
                    return posixMinutes + era.b;
                }
                else {
                    var $temp$defaultOffset = defaultOffset, $temp$posixMinutes = posixMinutes, $temp$eras = olderEras;
                    defaultOffset = $temp$defaultOffset;
                    posixMinutes = $temp$posixMinutes;
                    eras = $temp$eras;
                    continue toAdjustedMinutesHelp;
                }
            }
        }
    }, $elm$time$Time$toAdjustedMinutesHelp = F3($elm$time$Time$toAdjustedMinutesHelp_fn);
    var $elm$time$Time$toAdjustedMinutes_fn = function (_v0, time) {
        var defaultOffset = _v0.a;
        var eras = _v0.b;
        return $elm$time$Time$toAdjustedMinutesHelp_fn(defaultOffset, $elm$time$Time$flooredDiv_fn($elm$time$Time$posixToMillis(time), 60000), eras);
    }, $elm$time$Time$toAdjustedMinutes = F2($elm$time$Time$toAdjustedMinutes_fn);
    var $elm$time$Time$toHour_fn = function (zone, time) {
        return _Basics_modBy_fn(24, $elm$time$Time$flooredDiv_fn($elm$time$Time$toAdjustedMinutes_fn(zone, time), 60));
    }, $elm$time$Time$toHour = F2($elm$time$Time$toHour_fn);
    var $ryannhg$date_format$DateFormat$amPm_fn = function (language, zone, posix) {
        return language.hS($elm$time$Time$toHour_fn(zone, posix));
    }, $ryannhg$date_format$DateFormat$amPm = F3($ryannhg$date_format$DateFormat$amPm_fn);
    var $elm$time$Time$toCivil = function (minutes) {
        var rawDay = $elm$time$Time$flooredDiv_fn(minutes, 60 * 24) + 719468;
        var era = (((rawDay >= 0) ? rawDay : (rawDay - 146096)) / 146097) | 0;
        var dayOfEra = rawDay - (era * 146097);
        var yearOfEra = ((((dayOfEra - ((dayOfEra / 1460) | 0)) + ((dayOfEra / 36524) | 0)) - ((dayOfEra / 146096) | 0)) / 365) | 0;
        var dayOfYear = dayOfEra - (((365 * yearOfEra) + ((yearOfEra / 4) | 0)) - ((yearOfEra / 100) | 0));
        var mp = (((5 * dayOfYear) + 2) / 153) | 0;
        var month = mp + ((mp < 10) ? 3 : (-9));
        var year = yearOfEra + (era * 400);
        return {
            gc: (dayOfYear - ((((153 * mp) + 2) / 5) | 0)) + 1,
            gn: month,
            gB: year + ((month <= 2) ? 1 : 0)
        };
    };
    var $elm$time$Time$toDay_fn = function (zone, time) {
        return $elm$time$Time$toCivil($elm$time$Time$toAdjustedMinutes_fn(zone, time)).gc;
    }, $elm$time$Time$toDay = F2($elm$time$Time$toDay_fn);
    var $ryannhg$date_format$DateFormat$dayOfMonth = $elm$time$Time$toDay;
    var $elm$time$Time$Sun = 6;
    var $elm$time$Time$Fri = 4;
    var $elm$time$Time$Mon = 0;
    var $elm$time$Time$Sat = 5;
    var $elm$time$Time$Thu = 3;
    var $elm$time$Time$Tue = 1;
    var $elm$time$Time$Wed = 2;
    var $ryannhg$date_format$DateFormat$days = _List_fromArray([6, 0, 1, 2, 3, 4, 5]);
    var $elm$core$List$head = function (list) {
        if (list.b) {
            var x = list.a;
            var xs = list.b;
            return $elm$core$Maybe$Just(x);
        }
        else {
            return $elm$core$Maybe$Nothing;
        }
    };
    var $elm$time$Time$toWeekday_fn = function (zone, time) {
        var _v0 = _Basics_modBy_fn(7, $elm$time$Time$flooredDiv_fn($elm$time$Time$toAdjustedMinutes_fn(zone, time), 60 * 24));
        switch (_v0) {
            case 0:
                return 3;
            case 1:
                return 4;
            case 2:
                return 5;
            case 3:
                return 6;
            case 4:
                return 0;
            case 5:
                return 1;
            default:
                return 2;
        }
    }, $elm$time$Time$toWeekday = F2($elm$time$Time$toWeekday_fn);
    var $ryannhg$date_format$DateFormat$dayOfWeek_fn = function (zone, posix) {
        return function (_v1) {
            var i = _v1.a;
            return i;
        }($elm$core$Maybe$withDefault_fn(_Utils_Tuple2(0, 6), $elm$core$List$head($elm$core$List$filter_fn(function (_v0) {
            var day = _v0.b;
            return _Utils_eq(day, $elm$time$Time$toWeekday_fn(zone, posix));
        }, $elm$core$List$indexedMap_fn_unwrapped(function (i, day) {
            return _Utils_Tuple2(i, day);
        }, $ryannhg$date_format$DateFormat$days)))));
    }, $ryannhg$date_format$DateFormat$dayOfWeek = F2($ryannhg$date_format$DateFormat$dayOfWeek_fn);
    var $ryannhg$date_format$DateFormat$isLeapYear = function (year_) {
        return (!(!_Basics_modBy_fn(4, year_))) ? false : ((!(!_Basics_modBy_fn(100, year_))) ? true : ((!(!_Basics_modBy_fn(400, year_))) ? false : true));
    };
    var $ryannhg$date_format$DateFormat$daysInMonth_fn = function (year_, month) {
        switch (month) {
            case 0:
                return 31;
            case 1:
                return $ryannhg$date_format$DateFormat$isLeapYear(year_) ? 29 : 28;
            case 2:
                return 31;
            case 3:
                return 30;
            case 4:
                return 31;
            case 5:
                return 30;
            case 6:
                return 31;
            case 7:
                return 31;
            case 8:
                return 30;
            case 9:
                return 31;
            case 10:
                return 30;
            default:
                return 31;
        }
    }, $ryannhg$date_format$DateFormat$daysInMonth = F2($ryannhg$date_format$DateFormat$daysInMonth_fn);
    var $elm$time$Time$Jan = 0;
    var $elm$time$Time$Apr = 3;
    var $elm$time$Time$Aug = 7;
    var $elm$time$Time$Dec = 11;
    var $elm$time$Time$Feb = 1;
    var $elm$time$Time$Jul = 6;
    var $elm$time$Time$Jun = 5;
    var $elm$time$Time$Mar = 2;
    var $elm$time$Time$May = 4;
    var $elm$time$Time$Nov = 10;
    var $elm$time$Time$Oct = 9;
    var $elm$time$Time$Sep = 8;
    var $ryannhg$date_format$DateFormat$months = _List_fromArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    var $elm$time$Time$toMonth_fn = function (zone, time) {
        var _v0 = $elm$time$Time$toCivil($elm$time$Time$toAdjustedMinutes_fn(zone, time)).gn;
        switch (_v0) {
            case 1:
                return 0;
            case 2:
                return 1;
            case 3:
                return 2;
            case 4:
                return 3;
            case 5:
                return 4;
            case 6:
                return 5;
            case 7:
                return 6;
            case 8:
                return 7;
            case 9:
                return 8;
            case 10:
                return 9;
            case 11:
                return 10;
            default:
                return 11;
        }
    }, $elm$time$Time$toMonth = F2($elm$time$Time$toMonth_fn);
    var $ryannhg$date_format$DateFormat$monthPair_fn = function (zone, posix) {
        return $elm$core$Maybe$withDefault_fn(_Utils_Tuple2(0, 0), $elm$core$List$head($elm$core$List$filter_fn(function (_v0) {
            var i = _v0.a;
            var m = _v0.b;
            return _Utils_eq(m, $elm$time$Time$toMonth_fn(zone, posix));
        }, $elm$core$List$indexedMap_fn_unwrapped(function (a, b) {
            return _Utils_Tuple2(a, b);
        }, $ryannhg$date_format$DateFormat$months))));
    }, $ryannhg$date_format$DateFormat$monthPair = F2($ryannhg$date_format$DateFormat$monthPair_fn);
    var $ryannhg$date_format$DateFormat$monthNumber__fn = function (zone, posix) {
        return 1 + function (_v0) {
            var i = _v0.a;
            var m = _v0.b;
            return i;
        }($ryannhg$date_format$DateFormat$monthPair_fn(zone, posix));
    }, $ryannhg$date_format$DateFormat$monthNumber_ = F2($ryannhg$date_format$DateFormat$monthNumber__fn);
    var $elm$core$List$sum = function (numbers) {
        return $elm$core$List$foldl_fn($elm$core$Basics$add, 0, numbers);
    };
    var $elm$core$List$takeReverse_fn = function (n, list, kept) {
        takeReverse: while (true) {
            if (n <= 0) {
                return kept;
            }
            else {
                if (!list.b) {
                    return kept;
                }
                else {
                    var x = list.a;
                    var xs = list.b;
                    var $temp$n = n - 1, $temp$list = xs, $temp$kept = _List_Cons(x, kept);
                    n = $temp$n;
                    list = $temp$list;
                    kept = $temp$kept;
                    continue takeReverse;
                }
            }
        }
    }, $elm$core$List$takeReverse = F3($elm$core$List$takeReverse_fn);
    var $elm$core$List$takeTailRec_fn = function (n, list) {
        return $elm$core$List$reverse($elm$core$List$takeReverse_fn(n, list, _List_Nil));
    }, $elm$core$List$takeTailRec = F2($elm$core$List$takeTailRec_fn);
    var $elm$core$List$takeFast_fn = function (ctr, n, list) {
        if (n <= 0) {
            return _List_Nil;
        }
        else {
            var _v0 = _Utils_Tuple2(n, list);
            _v0$1: while (true) {
                _v0$5: while (true) {
                    if (!_v0.b.b) {
                        return list;
                    }
                    else {
                        if (_v0.b.b.b) {
                            switch (_v0.a) {
                                case 1:
                                    break _v0$1;
                                case 2:
                                    var _v2 = _v0.b;
                                    var x = _v2.a;
                                    var _v3 = _v2.b;
                                    var y = _v3.a;
                                    return _List_fromArray([x, y]);
                                case 3:
                                    if (_v0.b.b.b.b) {
                                        var _v4 = _v0.b;
                                        var x = _v4.a;
                                        var _v5 = _v4.b;
                                        var y = _v5.a;
                                        var _v6 = _v5.b;
                                        var z = _v6.a;
                                        return _List_fromArray([x, y, z]);
                                    }
                                    else {
                                        break _v0$5;
                                    }
                                default:
                                    if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
                                        var _v7 = _v0.b;
                                        var x = _v7.a;
                                        var _v8 = _v7.b;
                                        var y = _v8.a;
                                        var _v9 = _v8.b;
                                        var z = _v9.a;
                                        var _v10 = _v9.b;
                                        var w = _v10.a;
                                        var tl = _v10.b;
                                        return (ctr > 1000) ? _List_Cons(x, _List_Cons(y, _List_Cons(z, _List_Cons(w, $elm$core$List$takeTailRec_fn(n - 4, tl))))) : _List_Cons(x, _List_Cons(y, _List_Cons(z, _List_Cons(w, $elm$core$List$takeFast_fn(ctr + 1, n - 4, tl)))));
                                    }
                                    else {
                                        break _v0$5;
                                    }
                            }
                        }
                        else {
                            if (_v0.a === 1) {
                                break _v0$1;
                            }
                            else {
                                break _v0$5;
                            }
                        }
                    }
                }
                return list;
            }
            var _v1 = _v0.b;
            var x = _v1.a;
            return _List_fromArray([x]);
        }
    }, $elm$core$List$takeFast = F3($elm$core$List$takeFast_fn);
    var $elm$core$List$take_fn = function (n, xs) {
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (var i = 0; i < n && xs.b; xs = xs.
            b, i++) {
            var next = _List_Cons(xs.a, _List_Nil);
            end.b = next;
            end = next;
        }
        return tmp.b;
    }, $elm$core$List$take = F2($elm$core$List$take_fn);
    var $elm$time$Time$toYear_fn = function (zone, time) {
        return $elm$time$Time$toCivil($elm$time$Time$toAdjustedMinutes_fn(zone, time)).gB;
    }, $elm$time$Time$toYear = F2($elm$time$Time$toYear_fn);
    var $ryannhg$date_format$DateFormat$dayOfYear_fn = function (zone, posix) {
        var monthsBeforeThisOne = $elm$core$List$take_fn($ryannhg$date_format$DateFormat$monthNumber__fn(zone, posix) - 1, $ryannhg$date_format$DateFormat$months);
        var daysBeforeThisMonth = $elm$core$List$sum($elm$core$List$map_fn($ryannhg$date_format$DateFormat$daysInMonth($elm$time$Time$toYear_fn(zone, posix)), monthsBeforeThisOne));
        return daysBeforeThisMonth + $elm$time$Time$toDay_fn(zone, posix);
    }, $ryannhg$date_format$DateFormat$dayOfYear = F2($ryannhg$date_format$DateFormat$dayOfYear_fn);
    var $ryannhg$date_format$DateFormat$quarter_fn = function (zone, posix) {
        return ($ryannhg$date_format$DateFormat$monthNumber__fn(zone, posix) / 4) | 0;
    }, $ryannhg$date_format$DateFormat$quarter = F2($ryannhg$date_format$DateFormat$quarter_fn);
    var $elm$core$String$right_fn = function (n, string) {
        return (n < 1) ? "" : _String_slice_fn(-n, $elm$core$String$length(string), string);
    }, $elm$core$String$right = F2($elm$core$String$right_fn);
    var $ryannhg$date_format$DateFormat$toFixedLength_fn = function (totalChars, num) {
        var numStr = $elm$core$String$fromInt(num);
        var numZerosNeeded = totalChars - $elm$core$String$length(numStr);
        var zeros = $elm$core$String$join_fn("", $elm$core$List$map_fn(function (_v0) {
            return "0";
        }, $elm$core$List$range_fn(1, numZerosNeeded)));
        return _Utils_ap(zeros, numStr);
    }, $ryannhg$date_format$DateFormat$toFixedLength = F2($ryannhg$date_format$DateFormat$toFixedLength_fn);
    var $elm$time$Time$toMillis_fn = function (_v0, time) {
        return _Basics_modBy_fn(1000, $elm$time$Time$posixToMillis(time));
    }, $elm$time$Time$toMillis = F2($elm$time$Time$toMillis_fn);
    var $elm$time$Time$toMinute_fn = function (zone, time) {
        return _Basics_modBy_fn(60, $elm$time$Time$toAdjustedMinutes_fn(zone, time));
    }, $elm$time$Time$toMinute = F2($elm$time$Time$toMinute_fn);
    var $ryannhg$date_format$DateFormat$toNonMilitary = function (num) {
        return (!num) ? 12 : ((num <= 12) ? num : (num - 12));
    };
    var $elm$time$Time$toSecond_fn = function (_v0, time) {
        return _Basics_modBy_fn(60, $elm$time$Time$flooredDiv_fn($elm$time$Time$posixToMillis(time), 1000));
    }, $elm$time$Time$toSecond = F2($elm$time$Time$toSecond_fn);
    var $ryannhg$date_format$DateFormat$millisecondsPerYear = $elm$core$Basics$round((((1000 * 60) * 60) * 24) * 365.25);
    var $ryannhg$date_format$DateFormat$firstDayOfYear_fn = function (zone, time) {
        return $elm$time$Time$millisToPosix($ryannhg$date_format$DateFormat$millisecondsPerYear * $elm$time$Time$toYear_fn(zone, time));
    }, $ryannhg$date_format$DateFormat$firstDayOfYear = F2($ryannhg$date_format$DateFormat$firstDayOfYear_fn);
    var $ryannhg$date_format$DateFormat$weekOfYear_fn = function (zone, posix) {
        var firstDay = $ryannhg$date_format$DateFormat$firstDayOfYear_fn(zone, posix);
        var firstDayOffset = $ryannhg$date_format$DateFormat$dayOfWeek_fn(zone, firstDay);
        var daysSoFar = $ryannhg$date_format$DateFormat$dayOfYear_fn(zone, posix);
        return (((daysSoFar + firstDayOffset) / 7) | 0) + 1;
    }, $ryannhg$date_format$DateFormat$weekOfYear = F2($ryannhg$date_format$DateFormat$weekOfYear_fn);
    var $ryannhg$date_format$DateFormat$year_fn = function (zone, time) {
        return $elm$core$String$fromInt($elm$time$Time$toYear_fn(zone, time));
    }, $ryannhg$date_format$DateFormat$year = F2($ryannhg$date_format$DateFormat$year_fn);
    var $ryannhg$date_format$DateFormat$piece_fn = function (language, zone, posix, token) {
        switch (token.$) {
            case 0:
                return $elm$core$String$fromInt($ryannhg$date_format$DateFormat$monthNumber__fn(zone, posix));
            case 1:
                return function (num) {
                    return _Utils_ap($elm$core$String$fromInt(num), language.d9(num));
                }($ryannhg$date_format$DateFormat$monthNumber__fn(zone, posix));
            case 2:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(2, $ryannhg$date_format$DateFormat$monthNumber__fn(zone, posix));
            case 3:
                return language.hU($elm$time$Time$toMonth_fn(zone, posix));
            case 4:
                return language.hV($elm$time$Time$toMonth_fn(zone, posix));
            case 17:
                return $elm$core$String$fromInt(1 + $ryannhg$date_format$DateFormat$quarter_fn(zone, posix));
            case 18:
                return function (num) {
                    return _Utils_ap($elm$core$String$fromInt(num), language.d9(num));
                }(1 + $ryannhg$date_format$DateFormat$quarter_fn(zone, posix));
            case 5:
                return $elm$core$String$fromInt($elm$time$Time$toDay_fn(zone, posix));
            case 6:
                return function (num) {
                    return _Utils_ap($elm$core$String$fromInt(num), language.d9(num));
                }($elm$time$Time$toDay_fn(zone, posix));
            case 7:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(2, $elm$time$Time$toDay_fn(zone, posix));
            case 8:
                return $elm$core$String$fromInt($ryannhg$date_format$DateFormat$dayOfYear_fn(zone, posix));
            case 9:
                return function (num) {
                    return _Utils_ap($elm$core$String$fromInt(num), language.d9(num));
                }($ryannhg$date_format$DateFormat$dayOfYear_fn(zone, posix));
            case 10:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(3, $ryannhg$date_format$DateFormat$dayOfYear_fn(zone, posix));
            case 11:
                return $elm$core$String$fromInt($ryannhg$date_format$DateFormat$dayOfWeek_fn(zone, posix));
            case 12:
                return function (num) {
                    return _Utils_ap($elm$core$String$fromInt(num), language.d9(num));
                }($ryannhg$date_format$DateFormat$dayOfWeek_fn(zone, posix));
            case 13:
                return language.hW($elm$time$Time$toWeekday_fn(zone, posix));
            case 14:
                return language.hX($elm$time$Time$toWeekday_fn(zone, posix));
            case 19:
                return $elm$core$String$fromInt($ryannhg$date_format$DateFormat$weekOfYear_fn(zone, posix));
            case 20:
                return function (num) {
                    return _Utils_ap($elm$core$String$fromInt(num), language.d9(num));
                }($ryannhg$date_format$DateFormat$weekOfYear_fn(zone, posix));
            case 21:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(2, $ryannhg$date_format$DateFormat$weekOfYear_fn(zone, posix));
            case 15:
                return $elm$core$String$right_fn(2, $ryannhg$date_format$DateFormat$year_fn(zone, posix));
            case 16:
                return $ryannhg$date_format$DateFormat$year_fn(zone, posix);
            case 22:
                return $elm$core$String$toUpper($ryannhg$date_format$DateFormat$amPm_fn(language, zone, posix));
            case 23:
                return $elm$core$String$toLower($ryannhg$date_format$DateFormat$amPm_fn(language, zone, posix));
            case 24:
                return $elm$core$String$fromInt($elm$time$Time$toHour_fn(zone, posix));
            case 25:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(2, $elm$time$Time$toHour_fn(zone, posix));
            case 26:
                return $elm$core$String$fromInt($ryannhg$date_format$DateFormat$toNonMilitary($elm$time$Time$toHour_fn(zone, posix)));
            case 27:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(2, $ryannhg$date_format$DateFormat$toNonMilitary($elm$time$Time$toHour_fn(zone, posix)));
            case 28:
                return $elm$core$String$fromInt(1 + $elm$time$Time$toHour_fn(zone, posix));
            case 29:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(2, 1 + $elm$time$Time$toHour_fn(zone, posix));
            case 30:
                return $elm$core$String$fromInt($elm$time$Time$toMinute_fn(zone, posix));
            case 31:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(2, $elm$time$Time$toMinute_fn(zone, posix));
            case 32:
                return $elm$core$String$fromInt($elm$time$Time$toSecond_fn(zone, posix));
            case 33:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(2, $elm$time$Time$toSecond_fn(zone, posix));
            case 34:
                return $elm$core$String$fromInt($elm$time$Time$toMillis_fn(zone, posix));
            case 35:
                return $ryannhg$date_format$DateFormat$toFixedLength_fn(3, $elm$time$Time$toMillis_fn(zone, posix));
            default:
                var string = token.a;
                return string;
        }
    }, $ryannhg$date_format$DateFormat$piece = F4($ryannhg$date_format$DateFormat$piece_fn);
    var $ryannhg$date_format$DateFormat$formatWithLanguage_fn = function (language, tokens, zone, time) {
        return $elm$core$String$join_fn("", $elm$core$List$map_fn(A3($ryannhg$date_format$DateFormat$piece, language, zone, time), tokens));
    }, $ryannhg$date_format$DateFormat$formatWithLanguage = F4($ryannhg$date_format$DateFormat$formatWithLanguage_fn);
    var $ryannhg$date_format$DateFormat$format_a0 = $ryannhg$date_format$DateFormat$Language$english, $ryannhg$date_format$DateFormat$format = $ryannhg$date_format$DateFormat$formatWithLanguage($ryannhg$date_format$DateFormat$format_a0);
    var $elm$html$Html$h3 = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "h3"), $elm$html$Html$h3_fn = $elm$html$Html$h3.a2;
    var $ryannhg$date_format$DateFormat$HourNumber = { $: 26 };
    var $ryannhg$date_format$DateFormat$hourNumber = $ryannhg$date_format$DateFormat$HourNumber;
    var $ryannhg$date_format$DateFormat$MinuteFixed = { $: 31 };
    var $ryannhg$date_format$DateFormat$minuteFixed = $ryannhg$date_format$DateFormat$MinuteFixed;
    var $ryannhg$date_format$DateFormat$MonthNameFull = { $: 4 };
    var $ryannhg$date_format$DateFormat$monthNameFull = $ryannhg$date_format$DateFormat$MonthNameFull;
    var $elm$html$Html$output = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "output"), $elm$html$Html$output_fn = $elm$html$Html$output.a2;
    var $ryannhg$date_format$DateFormat$Relative$defaultInSomeDays = function (days) {
        return (days < 2) ? "tomorrow" : ("in " + ($elm$core$String$fromInt(days) + " days"));
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultInSomeHours = function (hours) {
        return (hours < 2) ? "in an hour" : ("in " + ($elm$core$String$fromInt(hours) + " hours"));
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultInSomeMinutes = function (minutes) {
        return (minutes < 2) ? "in a minute" : ("in " + ($elm$core$String$fromInt(minutes) + " minutes"));
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultInSomeMonths = function (months) {
        return (months < 2) ? "in a month" : ("in " + ($elm$core$String$fromInt(months) + " months"));
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultInSomeSeconds = function (seconds) {
        return (seconds < 30) ? "in a few seconds" : ("in " + ($elm$core$String$fromInt(seconds) + " seconds"));
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultInSomeYears = function (years) {
        return (years < 2) ? "in a year" : ("in " + ($elm$core$String$fromInt(years) + " years"));
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultRightNow = "right now";
    var $ryannhg$date_format$DateFormat$Relative$defaultSomeDaysAgo = function (days) {
        return (days < 2) ? "yesterday" : ($elm$core$String$fromInt(days) + " days ago");
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultSomeHoursAgo = function (hours) {
        return (hours < 2) ? "an hour ago" : ($elm$core$String$fromInt(hours) + " hours ago");
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultSomeMinutesAgo = function (minutes) {
        return (minutes < 2) ? "a minute ago" : ($elm$core$String$fromInt(minutes) + " minutes ago");
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultSomeMonthsAgo = function (months) {
        return (months < 2) ? "last month" : ($elm$core$String$fromInt(months) + " months ago");
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultSomeSecondsAgo = function (seconds) {
        return (seconds < 30) ? "just now" : ($elm$core$String$fromInt(seconds) + " seconds ago");
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultSomeYearsAgo = function (years) {
        return (years < 2) ? "last year" : ($elm$core$String$fromInt(years) + " years ago");
    };
    var $ryannhg$date_format$DateFormat$Relative$defaultRelativeOptions = { eL: $ryannhg$date_format$DateFormat$Relative$defaultInSomeDays, eM: $ryannhg$date_format$DateFormat$Relative$defaultInSomeHours, eN: $ryannhg$date_format$DateFormat$Relative$defaultInSomeMinutes, eO: $ryannhg$date_format$DateFormat$Relative$defaultInSomeMonths, eP: $ryannhg$date_format$DateFormat$Relative$defaultInSomeSeconds, eQ: $ryannhg$date_format$DateFormat$Relative$defaultInSomeYears, ce: $ryannhg$date_format$DateFormat$Relative$defaultRightNow, e9: $ryannhg$date_format$DateFormat$Relative$defaultSomeDaysAgo, fa: $ryannhg$date_format$DateFormat$Relative$defaultSomeHoursAgo, fb: $ryannhg$date_format$DateFormat$Relative$defaultSomeMinutesAgo, fc: $ryannhg$date_format$DateFormat$Relative$defaultSomeMonthsAgo, fd: $ryannhg$date_format$DateFormat$Relative$defaultSomeSecondsAgo, fe: $ryannhg$date_format$DateFormat$Relative$defaultSomeYearsAgo };
    var $ryannhg$date_format$DateFormat$Relative$RelativeTimeFunctions_fn = function (seconds, minutes, hours, days, months, years) {
        return { fv: days, fx: hours, fC: minutes, fE: months, fJ: seconds, fP: years };
    }, $ryannhg$date_format$DateFormat$Relative$RelativeTimeFunctions = F6($ryannhg$date_format$DateFormat$Relative$RelativeTimeFunctions_fn);
    var $elm$core$Basics$abs = function (n) {
        return (n < 0) ? (-n) : n;
    };
    var $ryannhg$date_format$DateFormat$Relative$relativeTimeWithFunctions_fn = function (zone, millis, functions) {
        var seconds = (millis / 1000) | 0;
        var posix = $elm$time$Time$millisToPosix(millis);
        var minutes = (seconds / 60) | 0;
        var hours = (minutes / 60) | 0;
        var days = (hours / 24) | 0;
        return (minutes < 1) ? functions.fJ($elm$time$Time$toSecond_fn(zone, posix)) : ((hours < 1) ? functions.fC($elm$time$Time$toMinute_fn(zone, posix)) : ((hours < 24) ? functions.fx($elm$time$Time$toHour_fn(zone, posix)) : ((days < 30) ? functions.fv(days) : ((days < 365) ? functions.fE((days / 30) | 0) : functions.fP((days / 365) | 0)))));
    }, $ryannhg$date_format$DateFormat$Relative$relativeTimeWithFunctions = F3($ryannhg$date_format$DateFormat$Relative$relativeTimeWithFunctions_fn);
    var $ryannhg$date_format$DateFormat$Relative$toMilliseconds = $elm$time$Time$posixToMillis;
    var $elm$time$Time$Zone_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $elm$time$Time$Zone = F2($elm$time$Time$Zone_fn);
    var $elm$time$Time$utc = $elm$time$Time$Zone_fn(0, _List_Nil);
    var $ryannhg$date_format$DateFormat$Relative$relativeTimeWithOptions_fn = function (options, start, end) {
        var differenceInMilliseconds = $ryannhg$date_format$DateFormat$Relative$toMilliseconds(end) - $ryannhg$date_format$DateFormat$Relative$toMilliseconds(start);
        return (!differenceInMilliseconds) ? options.ce : $ryannhg$date_format$DateFormat$Relative$relativeTimeWithFunctions_fn($elm$time$Time$utc, $elm$core$Basics$abs(differenceInMilliseconds), (differenceInMilliseconds < 0) ? $ryannhg$date_format$DateFormat$Relative$RelativeTimeFunctions_fn(options.fd, options.fb, options.fa, options.e9, options.fc, options.fe) : $ryannhg$date_format$DateFormat$Relative$RelativeTimeFunctions_fn(options.eP, options.eN, options.eM, options.eL, options.eO, options.eQ));
    }, $ryannhg$date_format$DateFormat$Relative$relativeTimeWithOptions = F3($ryannhg$date_format$DateFormat$Relative$relativeTimeWithOptions_fn);
    var $ryannhg$date_format$DateFormat$Relative$relativeTime_a0 = $ryannhg$date_format$DateFormat$Relative$defaultRelativeOptions, $ryannhg$date_format$DateFormat$Relative$relativeTime = $ryannhg$date_format$DateFormat$Relative$relativeTimeWithOptions($ryannhg$date_format$DateFormat$Relative$relativeTime_a0);
    var $ryannhg$date_format$DateFormat$Text = function (a) {
        return { $: 36, a: a };
    };
    var $ryannhg$date_format$DateFormat$text = $ryannhg$date_format$DateFormat$Text;
    var $author$project$Route$Events$eventCard = function (event) {
        var imageList = $elm$core$List$map_fn(function (performer) {
            return $elm$html$Html$img_fn(_List_fromArray([
                $elm$html$Html$Attributes$src(performer.ak),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$alt_a0, performer.he),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "snap-center flex-none w-full h-full object-center object-cover")
            ]), _List_Nil);
        }, $elm$core$List$filter_fn(A2($elm$core$Basics$composeR, function (_v0) {
            var image = _v0.ak;
            return _String_contains_fn("/generic-", image);
        }, $elm$core$Basics$not), event.dz));
        return $elm$html$Html$a_fn(_List_fromArray([
            $elm$html$Html$Attributes$href($elm$core$String$fromInt(event.g)),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, $elm$core$String$fromInt(event.g)),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "group relative focus:ring-2 transition-all pb-6 sm:pb-0 ring-1 ring-white focus:ring-fuchsia-500 hover:ring-opacity-100 ring-opacity-10 sm:ring-opacity-20 sm:rounded-lg flex flex-col overflow-hidden"),
            $elm$html$Html$Attributes$classList(_List_fromArray([
                _Utils_Tuple2("row-span-3", A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$List$isEmpty)(imageList))
            ]))
        ]), _List_fromArray([
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "bg-opacity-20 opacity-90 group-hover:opacity-100 overflow-x-scroll thin-scrollbar flex snap-x snap-mandatory")
            ]), imageList),
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-1 p-4 space-y-2 flex flex-col")
            ]), _List_fromArray([
                $elm$html$Html$h3_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "font-medium opacity-90")
                ]), _List_fromArray([
                    $elm$html$Html$text(event.dP)
                ])),
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-1 flex flex-col justify-end")
                ]), _List_fromArray([
                    $elm$html$Html$p_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-sm italic opacity-50")
                    ]), _List_fromArray([
                        $elm$html$Html$text(event.ed.he)
                    ])),
                    $elm$html$Html$p_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-sm font-medium opacity-70")
                    ]), _List_fromArray([
                        $elm$html$Html$output_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text($ryannhg$date_format$DateFormat$formatWithLanguage_fn($ryannhg$date_format$DateFormat$format_a0, _List_fromArray([
                                $ryannhg$date_format$DateFormat$monthNameFull,
                                $ryannhg$date_format$DateFormat$text(" "),
                                $ryannhg$date_format$DateFormat$dayOfMonthSuffix,
                                $ryannhg$date_format$DateFormat$text(", "),
                                $ryannhg$date_format$DateFormat$hourNumber,
                                $ryannhg$date_format$DateFormat$text(":"),
                                $ryannhg$date_format$DateFormat$minuteFixed,
                                $ryannhg$date_format$DateFormat$text(" "),
                                $ryannhg$date_format$DateFormat$amPmLowercase
                            ]), $elm$time$Time$utc, event.cG))
                        ])),
                        $elm$html$Html$text(" "),
                        $elm$html$Html$output_fn(_List_Nil, _List_fromArray([
                            $elm$html$Html$text($ryannhg$date_format$DateFormat$Relative$relativeTimeWithOptions_fn($ryannhg$date_format$DateFormat$Relative$relativeTime_a0, event.cG, event.cI))
                        ]))
                    ]))
                ]))
            ]))
        ]));
    };
    var $author$project$Route$Events$view_fn = function (maybeUrl, sharedModel, _static) {
        return {
            er: $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "max-w-2xl mx-auto sm:py-16 sm:px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8")
            ]), _List_fromArray([
                $elm$html$Html$h2_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                ]), _List_fromArray([
                    $elm$html$Html$text("Events")
                ])),
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "grid grid-cols-1 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8")
                ]), $elm$core$List$map_fn($author$project$Route$Events$eventCard, _static.m.cX))
            ])),
            be: "Events in " + (_static.m.dr.c3.af + " | Flamingle")
        };
    }, $author$project$Route$Events$view = F3($author$project$Route$Events$view_fn);
    var $author$project$Route$Events$route = $author$project$RouteBuilder$buildNoState_fn({ N: $author$project$Route$Events$view }, $author$project$RouteBuilder$serverRender({ m: $author$project$Route$Events$data, aI: $author$project$Route$Events$head }));
    var $author$project$Route$Events$Slug_$data = function (_v0) {
        var slug = _v0.k;
        var endpoint = $elm$url$Url$Builder$crossOrigin_fn("https://api.seatgeek.com", _List_fromArray(["2", "events", slug]), _List_fromArray([
            $elm$url$Url$Builder$string_fn("client_id", "MzUwNDE1NnwxNDgxNjA1ODM2")
        ]));
        return $author$project$Server$Request$succeed($author$project$DataSource$Http$get_fn(endpoint, _Json_map1_fn($author$project$Server$Response$render, $author$project$Data$SeatGeek$event)));
    };
    var $author$project$Route$Events$Slug_$head = function (_static) {
        return $author$project$Site$head;
    };
    var $author$project$Component$Icon$breadcrumbSlash = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 20 20"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "currentColor"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "flex-shrink-0 h-5 w-5 opacity-30")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M5.555 17.776l8-16 .894.448-8 16-.894-.448z")
        ]), _List_Nil)
    ]));
    var $elm$html$Html$fieldset = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "fieldset"), $elm$html$Html$fieldset_fn = $elm$html$Html$fieldset.a2;
    var $elm$html$Html$legend = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "legend"), $elm$html$Html$legend_fn = $elm$html$Html$legend.a2;
    var $elm$html$Html$nav = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "nav"), $elm$html$Html$nav_fn = $elm$html$Html$nav.a2;
    var $elm$svg$Svg$Attributes$stroke_a0 = "stroke", $elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute($elm$svg$Svg$Attributes$stroke_a0);
    var $elm$svg$Svg$Attributes$strokeLinecap_a0 = "stroke-linecap", $elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeLinecap_a0);
    var $elm$svg$Svg$Attributes$strokeLinejoin_a0 = "stroke-linejoin", $elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeLinejoin_a0);
    var $elm$svg$Svg$Attributes$strokeWidth_a0 = "stroke-width", $elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute($elm$svg$Svg$Attributes$strokeWidth_a0);
    var $author$project$Component$Icon$outlineShieldCheck = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "flex-shrink-0 mr-2 h-6 w-6 opacity-40 group-hover:opacity-50"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "none"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 24 24"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$stroke_a0, "currentColor"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinecap_a0, "round"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinejoin_a0, "round"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeWidth_a0, "2"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z")
        ]), _List_Nil)
    ]));
    var $elm$html$Html$section = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "section"), $elm$html$Html$section_fn = $elm$html$Html$section.a2;
    var $author$project$Component$Icon$solidCheck = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "flex-shrink-0 w-5 h-5 text-green-500"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 20 20"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "currentColor"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fillRule_a0, "evenodd"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$clipRule_a0, "evenodd")
        ]), _List_Nil)
    ]));
    var $author$project$Component$Icon$solidQuestionMarkCircle = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "flex-shrink-0 ml-2 h-5 w-5 opacity-40 group-hover:opacity-50"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 20 20"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "currentColor"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fillRule_a0, "evenodd"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$clipRule_a0, "evenodd")
        ]), _List_Nil)
    ]));
    var $elm_community$string_extra$String$Extra$underscored = function (string) {
        return $elm$core$String$toLower(_Regex_replaceAtMost_fn($elm$regex$Regex$replace_a0, $elm$core$Basics$composeR_fn($elm_community$string_extra$String$Extra$regexFromString_a0, $elm_community$string_extra$String$Extra$regexFromString_a1, "[_-\\s]+"), $elm$core$Basics$always("_"), _Regex_replaceAtMost_fn($elm$regex$Regex$replace_a0, $elm$core$Basics$composeR_fn($elm_community$string_extra$String$Extra$regexFromString_a0, $elm_community$string_extra$String$Extra$regexFromString_a1, "([a-z\\d])([A-Z]+)"), A2($elm$core$Basics$composeR, function ($) {
            return $.gz;
        }, A2($elm$core$Basics$composeR, $elm$core$List$filterMap($elm$core$Basics$identity), $elm$core$String$join("_"))), $elm$core$String$trim(string))));
    };
    var $author$project$Data$SeatGeek$upperEnumToString = function (_v0) {
        var _enum = _v0;
        return $elm_community$string_extra$String$Extra$underscored($elm$core$String$toLower(_enum));
    };
    var $elm$html$Html$Attributes$value_a0 = "value", $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$value_a0);
    var $author$project$Route$Events$Slug_$eventPage = function (event) {
        return $elm$html$Html$div_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8")
        ]), _List_fromArray([
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "lg:max-w-lg lg:self-end")
            ]), _List_fromArray([
                $elm$html$Html$nav_fn(_List_fromArray([
                    $elm$virtual_dom$VirtualDom$attribute_fn("aria-label", "Breadcrumb"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex gap-2")
                ]), $elm$core$List$intersperse_fn($author$project$Component$Icon$breadcrumbSlash, $elm$core$List$map_fn(function (item) {
                    return $elm$html$Html$a_fn(_List_fromArray([
                        $elm$html$Html$Attributes$href($elm$core$String$fromInt(item.g)),
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "font-medium opacity-50 hover:opacity-90")
                    ]), _List_fromArray([
                        $elm$html$Html$text($author$project$Data$SeatGeek$upperEnumToString(item.he))
                    ]));
                }, event.aA))),
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-4")
                ]), _List_fromArray([
                    $elm$html$Html$h1_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-3xl font-extrabold tracking-tight opacity-90 sm:text-4xl")
                    ]), _List_fromArray([
                        $elm$html$Html$text(event.dP)
                    ]))
                ])),
                $elm$html$Html$section_fn(_List_fromArray([
                    $elm$virtual_dom$VirtualDom$attribute_fn("aria-labelledby", "information-heading"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-4")
                ]), _List_fromArray([
                    $elm$html$Html$h2_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "information-heading"),
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                    ]), _List_fromArray([
                        $elm$html$Html$text("Event information")
                    ])),
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex items-center")
                    ]), _List_fromArray([
                        $elm$html$Html$p_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-lg opacity-90 sm:text-xl")
                        ]), _List_fromArray([
                            $elm$html$Html$text($ryannhg$date_format$DateFormat$formatWithLanguage_fn($ryannhg$date_format$DateFormat$format_a0, _List_fromArray([
                                $ryannhg$date_format$DateFormat$monthNameFull,
                                $ryannhg$date_format$DateFormat$text(" "),
                                $ryannhg$date_format$DateFormat$dayOfMonthSuffix,
                                $ryannhg$date_format$DateFormat$text(", "),
                                $ryannhg$date_format$DateFormat$hourNumber,
                                $ryannhg$date_format$DateFormat$text(":"),
                                $ryannhg$date_format$DateFormat$minuteFixed,
                                $ryannhg$date_format$DateFormat$text(" "),
                                $ryannhg$date_format$DateFormat$amPmLowercase
                            ]), $elm$time$Time$utc, event.cG))
                        ])),
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "ml-4 pl-4 border-l border-gray-300")
                        ]), _List_fromArray([
                            $elm$html$Html$p_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "ml-2 text-sm opacity-50")
                            ]), _List_fromArray([
                                $elm$html$Html$text($ryannhg$date_format$DateFormat$Relative$relativeTimeWithOptions_fn($ryannhg$date_format$DateFormat$Relative$relativeTime_a0, event.cG, event.cI))
                            ]))
                        ]))
                    ])),
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-4 space-y-6")
                    ]), _List_fromArray([
                        $elm$html$Html$p_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-base opacity-50")
                        ]), _List_fromArray([
                            $elm$html$Html$text(event.gR)
                        ]))
                    ])),
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-6 flex items-center")
                    ]), _List_fromArray([
                        $author$project$Component$Icon$solidCheck,
                        $elm$html$Html$p_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "ml-2 text-sm opacity-50")
                        ]), _List_fromArray([
                            $elm$html$Html$text("In stock and ready to ship")
                        ]))
                    ]))
                ]))
            ])),
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center")
            ]), _List_fromArray([
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "aspect-w-1 aspect-h-1 rounded-lg flex overflow-auto snap-x snap-mandatory")
                ]), $elm$core$List$map_fn(function (performer) {
                    return $elm$html$Html$img_fn(_List_fromArray([
                        $elm$html$Html$Attributes$src(performer.ak),
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$alt_a0, performer.he),
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "w-full h-full snap-center flex-none object-center object-cover")
                    ]), _List_Nil);
                }, event.dz))
            ])),
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start")
            ]), _List_fromArray([
                $elm$html$Html$section_fn(_List_fromArray([
                    $elm$virtual_dom$VirtualDom$attribute_fn("aria-labelledby", "options-heading")
                ]), _List_fromArray([
                    $elm$html$Html$h2_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "options-heading"),
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                    ]), _List_fromArray([
                        $elm$html$Html$text("Event options")
                    ])),
                    $elm$html$Html$form_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sm:flex sm:justify-between")
                        ]), _List_fromArray([
                            $elm$html$Html$fieldset_fn(_List_Nil, _List_fromArray([
                                $elm$html$Html$legend_fn(_List_fromArray([
                                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block text-sm font-medium opacity-70")
                                ]), _List_fromArray([
                                    $elm$html$Html$text($elm$core$Maybe$withDefault_fn("Performers", $elm$core$Maybe$map_fn(A2($elm$core$Basics$composeR, function ($) {
                                        return $.he;
                                    }, $author$project$Data$SeatGeek$upperEnumToString), $elm$core$List$head(event.aA))))
                                ])),
                                $elm$html$Html$div_fn(_List_fromArray([
                                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2")
                                ]), $elm$core$List$map_fn(function (performer) {
                                    return $elm$html$Html$label_fn(_List_fromArray([
                                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative flex border border-white border-opacity-30 overflow-hidden rounded-lg cursor-pointer"),
                                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$for_a0, $elm$core$String$fromInt(performer.g))
                                    ]), _List_fromArray([
                                        $elm$html$Html$input_fn(_List_fromArray([
                                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "radio"),
                                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$name_a0, "size-choice"),
                                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$value_a0, $elm$core$String$fromInt(performer.g)),
                                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only"),
                                            $elm$virtual_dom$VirtualDom$attribute_fn("aria-labelledby", "size-choice-0-label"),
                                            $elm$virtual_dom$VirtualDom$attribute_fn("aria-describedby", "size-choice-0-description")
                                        ]), _List_Nil),
                                        $elm$html$Html$img_fn(_List_fromArray([
                                            $elm$html$Html$Attributes$src(performer.ak),
                                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$alt_a0, ""),
                                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "h-full w-16 aspect-square object-cover object-center")
                                        ]), _List_Nil),
                                        $elm$html$Html$div_fn(_List_fromArray([
                                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "p-4")
                                        ]), _List_fromArray([
                                            $elm$html$Html$p_fn(_List_fromArray([
                                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "size-choice-0-label"),
                                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-base font-medium opacity-90")
                                            ]), _List_fromArray([
                                                $elm$html$Html$text(performer.aw)
                                            ])),
                                            $elm$html$Html$p_fn(_List_fromArray([
                                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "size-choice-0-description"),
                                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-1 text-sm opacity-50")
                                            ]), _List_fromArray([
                                                $elm$html$Html$text(performer.he)
                                            ]))
                                        ]))
                                    ]));
                                }, event.dz))
                            ]))
                        ])),
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-4")
                        ]), _List_fromArray([
                            $elm$html$Html$a_fn(_List_fromArray([
                                $elm$html$Html$Attributes$href("#"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "group inline-flex text-sm opacity-50 hover:opacity-70")
                            ]), _List_fromArray([
                                $elm$html$Html$span_fn(_List_Nil, _List_fromArray([
                                    $elm$html$Html$text("What size should I buy?")
                                ])),
                                $author$project$Component$Icon$solidQuestionMarkCircle
                            ]))
                        ])),
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-10")
                        ]), _List_fromArray([
                            $elm$html$Html$a_fn(_List_fromArray([
                                $elm$html$Html$Attributes$href(event.C),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "w-full bg-white border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-neutral-900 hover:bg-opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-fuchsia-500")
                            ]), _List_fromArray([
                                $elm$html$Html$text("Buy Tickets")
                            ]))
                        ])),
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-6 text-center")
                        ]), _List_fromArray([
                            $elm$html$Html$a_fn(_List_fromArray([
                                $elm$html$Html$Attributes$href("#"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "group inline-flex text-base font-medium")
                            ]), _List_fromArray([
                                $author$project$Component$Icon$outlineShieldCheck,
                                $elm$html$Html$span_fn(_List_fromArray([
                                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "opacity-50 hover:opacity-70")
                                ]), _List_fromArray([
                                    $elm$html$Html$text("Lifetime Guarantee")
                                ]))
                            ]))
                        ]))
                    ]))
                ]))
            ]))
        ]));
    };
    var $author$project$Route$Events$Slug_$view_fn = function (maybeUrl, sharedModel, _static) {
        return {
            er: $author$project$Route$Events$Slug_$eventPage(_static.m),
            be: _static.m.dP + " | Flamingle"
        };
    }, $author$project$Route$Events$Slug_$view = F3($author$project$Route$Events$Slug_$view_fn);
    var $author$project$Route$Events$Slug_$route = $author$project$RouteBuilder$buildNoState_fn({ N: $author$project$Route$Events$Slug_$view }, $author$project$RouteBuilder$serverRender({ m: $author$project$Route$Events$Slug_$data, aI: $author$project$Route$Events$Slug_$head }));
    var $author$project$Route$Index$Data = function (message) {
        return { bH: message };
    };
    var $author$project$Route$Index$data = $author$project$DataSource$map2_fn($author$project$DataSource$andMap_a0, $author$project$DataSource$succeed("Hello!"), $author$project$DataSource$succeed($author$project$Route$Index$Data));
    var $author$project$Route$Index$head = function (_static) {
        return $author$project$Site$head;
    };
    var $elm$html$Html$Attributes$pattern_a0 = "pattern", $elm$html$Html$Attributes$pattern = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$pattern_a0);
    var $elm$html$Html$Attributes$placeholder_a0 = "placeholder", $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty($elm$html$Html$Attributes$placeholder_a0);
    var $author$project$Component$Icon$solidSearch = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "h-5 w-5 opacity-40"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 20 20"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "currentColor"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fillRule_a0, "evenodd"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$clipRule_a0, "evenodd")
        ]), _List_Nil)
    ]));
    var $author$project$Route$Index$homePage = $elm$html$Html$div_fn(_List_fromArray([
        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative flex-auto max-w-md flex flex-col justify-center pt-20 mx-auto px-4 sm:py-24 lg:py-32")
    ]), _List_fromArray([
        $elm$html$Html$h1_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "hi"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-4xl font-bold tracking-tight whitespace-pre-wrap text-neutral-100 sm:text-4xl md:text-5xl lg:text-6xl"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-opacity-100 target:text-opacity-0 bg-gradient-to-tl transition from-rose-500 to-fuchsia-500 bg-clip-text")
        ]), _List_fromArray([
            $elm$html$Html$text("Find Events, \nMake Friends")
        ])),
        $elm$html$Html$p_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "max-w-3xl mx-auto mt-6 leading-relaxed text-sm text-neutral-300")
        ]), _List_fromArray([
            $elm$html$Html$text("Flamingle is a website for people who want to keep their pulse on exciting events happening in their town and meet new people who are going to those events.")
        ])),
        $elm$html$Html$form_fn(_List_fromArray([
            $elm$html$Html$Attributes$action("/events/"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "-mx-1 flex justify-center mt-6 text-sm")
        ]), _List_fromArray([
            $elm$html$Html$label_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$for_a0, "search"),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
            ]), _List_fromArray([
                $elm$html$Html$text("Search")
            ])),
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-auto flex relative")
            ]), _List_fromArray([
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none mix-blend-difference z-50 text-white")
                ]), _List_fromArray([$author$project$Component$Icon$solidSearch])),
                $elm$html$Html$input_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "postal-code"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$name_a0, "zip"),
                    $elm$virtual_dom$VirtualDom$attribute_fn("autocomplete", "postal-code"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$pattern_a0, "[0-9]{5}"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "w-48 flex-auto block pl-12 pr-4 py-4 border hover:border-opacity-50 border-opacity-30 border-white rounded-l-md leading-5 bg-neutral-900 placeholder-neutral-500 focus:placeholder-neutral-400 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$placeholder_a0, "Enter Zip"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "search")
                ]), _List_Nil)
            ])),
            $elm$html$Html$button_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block px-6 py-4 border font-bold whitespace-nowrap hover:z-10 focus:z-10 -ml-px hover:border-opacity-50 border-opacity-30 border-white rounded-r-md leading-5 bg-neutral-900 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500"),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "submit")
            ]), _List_fromArray([
                $elm$html$Html$text("Find Events")
            ]))
        ]))
    ]));
    var $author$project$Route$Index$view_fn = function (maybeUrl, sharedModel, _static) {
        return { er: $author$project$Route$Index$homePage, be: "Flamingle | Find Events, Make Friends" };
    }, $author$project$Route$Index$view = F3($author$project$Route$Index$view_fn);
    var $author$project$Route$Index$route = $author$project$RouteBuilder$buildNoState_fn({ N: $author$project$Route$Index$view }, $author$project$RouteBuilder$single({ m: $author$project$Route$Index$data, aI: $author$project$Route$Index$head }));
    var $author$project$Main$getStaticRoutes = $author$project$DataSource$map_fn($elm$core$List$concat, $elm$core$List$foldr_fn($author$project$DataSource$combine_a0, $author$project$DataSource$combine_a1, _List_fromArray([
        $author$project$DataSource$map_fn($elm$core$List$map($author$project$Route$Events__Slug_), $author$project$Route$Events$Slug_$route.fK),
        $author$project$DataSource$map_fn($elm$core$List$map(function (_v0) {
            return $author$project$Route$Account;
        }), $author$project$Route$Account$route.fK),
        $author$project$DataSource$map_fn($elm$core$List$map(function (_v1) {
            return $author$project$Route$Events;
        }), $author$project$Route$Events$route.fK),
        $author$project$DataSource$map_fn($elm$core$List$map(function (_v2) {
            return $author$project$Route$Index;
        }), $author$project$Route$Index$route.fK)
    ])));
    var $author$project$Internal$ApiRoute$ApiRouteBuilder_fn = function (a, b, c, d, e) {
        return { $: 0, a: a, b: b, c: c, d: d, e: e };
    }, $author$project$Internal$ApiRoute$ApiRouteBuilder = F5($author$project$Internal$ApiRoute$ApiRouteBuilder_fn);
    var $author$project$Pattern$HybridSegment = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Pattern$Literal = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pattern$NoPendingSlash = 1;
    var $author$project$Pattern$Pattern_fn = function (a, b) {
        return { $: 0, a: a, b: b };
    }, $author$project$Pattern$Pattern = F2($author$project$Pattern$Pattern_fn);
    var $author$project$Pattern$addLiteral_fn = function (newLiteral, _v0) {
        var segments = _v0.a;
        var state = _v0.b;
        if (!state) {
            return $author$project$Pattern$Pattern_fn(_Utils_ap(segments, _List_fromArray([
                $author$project$Pattern$Literal(newLiteral)
            ])), 1);
        }
        else {
            var _v2 = $elm$core$List$reverse(segments);
            if (_v2.b) {
                if (!_v2.a.$) {
                    var literalSegment = _v2.a.a;
                    var rest = _v2.b;
                    return $author$project$Pattern$Pattern_fn(_Utils_ap($elm$core$List$reverse(rest), _List_fromArray([
                        $author$project$Pattern$Literal(_Utils_ap(literalSegment, newLiteral))
                    ])), 1);
                }
                else {
                    var last = _v2.a;
                    var rest = _v2.b;
                    return $author$project$Pattern$Pattern_fn(_Utils_ap($elm$core$List$reverse(rest), _List_fromArray([
                        $author$project$Pattern$HybridSegment(_Utils_Tuple3(last, $author$project$Pattern$Literal(newLiteral), _List_Nil))
                    ])), 1);
                }
            }
            else {
                return $author$project$Pattern$Pattern_fn(_Utils_ap(segments, _List_fromArray([
                    $author$project$Pattern$Literal(newLiteral)
                ])), state);
            }
        }
    }, $author$project$Pattern$addLiteral = F2($author$project$Pattern$addLiteral_fn);
    var $author$project$ApiRoute$literal_fn = function (segment, _v0) {
        var patterns = _v0.a;
        var pattern = _v0.b;
        var handler = _v0.c;
        var toString = _v0.d;
        var constructor = _v0.e;
        return $author$project$Internal$ApiRoute$ApiRouteBuilder_fn($author$project$Pattern$addLiteral_fn(segment, patterns), _Utils_ap(pattern, segment), handler, function (values) {
            return _Utils_ap(toString(values), segment);
        }, constructor);
    }, $author$project$ApiRoute$literal = F2($author$project$ApiRoute$literal_fn);
    var $author$project$Server$Request$Get = { $: 2 };
    var $author$project$Server$Request$NotFormPost = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Server$Request$Post = { $: 6 };
    var $author$project$Server$Request$unwrap = function (_v0) {
        var decoder_ = _v0;
        return decoder_;
    };
    var $author$project$Server$Request$andThen_fn = function (toRequestB, _v0) {
        var requestA = _v0;
        return _Json_andThen_fn(function (value) {
            if (!value.a.$) {
                var okValue = value.a.a;
                return $author$project$Server$Request$unwrap(toRequestB(okValue));
            }
            else {
                var error = value.a.a;
                var errors = value.b;
                return $elm$json$Json$Decode$succeed(_Utils_Tuple2($elm$core$Result$Err(error), errors));
            }
        }, requestA);
    }, $author$project$Server$Request$andThen = F2($author$project$Server$Request$andThen_fn);
    var $author$project$Server$Request$ValidationError = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Server$Request$optionalField_fn = function (fieldName, decoder_) {
        var finishDecoding = function (json) {
            var _v0 = _Json_run_fn(_Json_decodeField_fn(fieldName, $elm$json$Json$Decode$value), json);
            if (!_v0.$) {
                return _Json_map1_fn($elm$core$Maybe$Just, _Json_decodeField_fn(fieldName, decoder_));
            }
            else {
                return $elm$json$Json$Decode$succeed($elm$core$Maybe$Nothing);
            }
        };
        return _Json_andThen_fn(finishDecoding, $elm$json$Json$Decode$value);
    }, $author$project$Server$Request$optionalField = F2($author$project$Server$Request$optionalField_fn);
    var $author$project$Server$Request$formField_ = function (name) {
        return _Json_map1_fn(function (value) {
            if (!value.$) {
                var justValue = value.a;
                return _Utils_Tuple2($elm$core$Result$Ok(justValue), _List_Nil);
            }
            else {
                return _Utils_Tuple2($elm$core$Result$Err($author$project$Server$Request$ValidationError("Missing form field '" + (name + "'"))), _List_Nil);
            }
        }, $author$project$Server$Request$optionalField_fn(name, $elm$json$Json$Decode$string));
    };
    var $author$project$Server$Request$jsonFromResult = function (result) {
        if (!result.$) {
            var okValue = result.a;
            return $elm$json$Json$Decode$succeed(okValue);
        }
        else {
            var error = result.a;
            return $elm$json$Json$Decode$fail(error);
        }
    };
    var $author$project$Server$Request$map_fn = function (mapFn, _v0) {
        var decoder = _v0;
        return _Json_map1_fn(function (_v1) {
            var result = _v1.a;
            var errors = _v1.b;
            return _Utils_Tuple2($elm$core$Result$map_fn(mapFn, result), errors);
        }, decoder);
    }, $author$project$Server$Request$map = F2($author$project$Server$Request$map_fn);
    var $author$project$Server$Request$map2_fn = function (f, _v0, _v1) {
        var jdA = _v0;
        var jdB = _v1;
        return _Json_map2_fn(F2(function (_v2, _v3) {
            var result1 = _v2.a;
            var errors1 = _v2.b;
            var result2 = _v3.a;
            var errors2 = _v3.b;
            return _Utils_Tuple2($elm$core$Result$map2_fn(f, result1, result2), _Utils_ap(errors1, errors2));
        }), jdA, jdB);
    }, $author$project$Server$Request$map2 = F3($author$project$Server$Request$map2_fn);
    var $author$project$Server$Request$andMap_a0 = $elm$core$Basics$apR, $author$project$Server$Request$andMap = $author$project$Server$Request$map2($author$project$Server$Request$andMap_a0);
    var $author$project$Server$Request$map4_fn = function (combineFn, request1, request2, request3, request4) {
        return $author$project$Server$Request$map2_fn($author$project$Server$Request$andMap_a0, request4, $author$project$Server$Request$map2_fn($author$project$Server$Request$andMap_a0, request3, $author$project$Server$Request$map2_fn($author$project$Server$Request$andMap_a0, request2, $author$project$Server$Request$map2_fn($author$project$Server$Request$andMap_a0, request1, $author$project$Server$Request$succeed(combineFn)))));
    }, $author$project$Server$Request$map4 = F5($author$project$Server$Request$map4_fn);
    var $author$project$Server$Request$noErrors = function (decoder) {
        return _Json_map1_fn(function (value) {
            return _Utils_Tuple2($elm$core$Result$Ok(value), _List_Nil);
        }, decoder);
    };
    var $author$project$Server$Request$parseContentType = function (contentTypeString) {
        return $elm$core$Maybe$withDefault_fn(contentTypeString, $elm$core$Maybe$map_fn($elm$core$String$trim, $elm$core$List$head($elm$core$String$split_fn(";", contentTypeString))));
    };
    var $author$project$Server$Request$matchesContentType = function (expectedContentType) {
        return $author$project$Server$Request$noErrors(_Json_map1_fn(function (maybeContentType) {
            if (maybeContentType.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var contentType = maybeContentType.a;
                return _Utils_eq($author$project$Server$Request$parseContentType(contentType), $author$project$Server$Request$parseContentType(expectedContentType)) ? $elm$core$Maybe$Just(true) : $elm$core$Maybe$Just(false);
            }
        }, _Json_decodeField_fn("headers", $author$project$Server$Request$optionalField_fn($elm$core$String$toLower("content-type"), $elm$json$Json$Decode$string))));
    };
    var $author$project$Server$Request$Connect = { $: 0 };
    var $author$project$Server$Request$Delete = { $: 1 };
    var $author$project$Server$Request$Head = { $: 3 };
    var $author$project$Server$Request$NonStandard = function (a) {
        return { $: 9, a: a };
    };
    var $author$project$Server$Request$Options = { $: 4 };
    var $author$project$Server$Request$Patch = { $: 5 };
    var $author$project$Server$Request$Put = { $: 7 };
    var $author$project$Server$Request$Trace = { $: 8 };
    var $author$project$Server$Request$methodFromString = function (rawMethod) {
        var _v0 = $elm$core$String$toLower(rawMethod);
        switch (_v0) {
            case "connect":
                return $author$project$Server$Request$Connect;
            case "delete":
                return $author$project$Server$Request$Delete;
            case "get":
                return $author$project$Server$Request$Get;
            case "head":
                return $author$project$Server$Request$Head;
            case "options":
                return $author$project$Server$Request$Options;
            case "patch":
                return $author$project$Server$Request$Patch;
            case "post":
                return $author$project$Server$Request$Post;
            case "put":
                return $author$project$Server$Request$Put;
            case "trace":
                return $author$project$Server$Request$Trace;
            default:
                return $author$project$Server$Request$NonStandard(rawMethod);
        }
    };
    var $author$project$Server$Request$matchesMethod = function (_v0) {
        var accepted1 = _v0.a;
        var accepted = _v0.b;
        return $author$project$Server$Request$noErrors(_Json_map1_fn(function (method_) {
            return $elm$core$List$member_fn(method_, _List_Cons(accepted1, accepted));
        }, _Json_map1_fn($author$project$Server$Request$methodFromString, _Json_decodeField_fn("method", $elm$json$Json$Decode$string))));
    };
    var $author$project$Server$Request$optionalFormField_ = function (name) {
        return $author$project$Server$Request$noErrors($author$project$Server$Request$optionalField_fn(name, $elm$json$Json$Decode$string));
    };
    var $elm$url$Url$percentDecode = _Url_percentDecode;
    var $author$project$FormData$decode = function (string) {
        return $elm$core$Maybe$withDefault_fn("", $elm$url$Url$percentDecode($elm$core$String$replace_fn("+", " ", string)));
    };
    var $author$project$FormData$parse = function (rawString) {
        return $elm$core$List$foldl_fn_unwrapped(function (entry, soFar) {
            var _v0 = $elm$core$String$split_fn("=", entry);
            if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
                var key = _v0.a;
                var _v1 = _v0.b;
                var value = _v1.a;
                var newValue = $author$project$FormData$decode(value);
                return $elm$core$Dict$update_fn($author$project$FormData$decode(key), function (maybeExistingList) {
                    return $elm$core$Maybe$Just($elm$core$Maybe$withDefault_fn(_Utils_Tuple2(newValue, _List_Nil), $elm$core$Maybe$map_fn(function (_v2) {
                        var first = _v2.a;
                        var rest = _v2.b;
                        return _Utils_Tuple2(first, _Utils_ap(rest, _List_fromArray([newValue])));
                    }, maybeExistingList)));
                }, soFar);
            }
            else {
                return soFar;
            }
        }, $elm$core$Dict$empty, $elm$core$String$split_fn("&", rawString));
    };
    var $author$project$Server$Request$rawBody = $author$project$Server$Request$noErrors(_Json_decodeField_fn("body", $elm$json$Json$Decode$nullable($elm$json$Json$Decode$string)));
    var $author$project$Server$Request$rawContentType = $author$project$Server$Request$noErrors($author$project$Server$Request$optionalField_fn($elm$core$String$toLower("content-type"), $elm$json$Json$Decode$string));
    var $author$project$Server$Request$expectFormPost = function (toForm) {
        return $author$project$Server$Request$andThen_fn(function (_v0) {
            var _v1 = _v0.a;
            var validContentType = _v1.a;
            var parsedContentType = _v1.b;
            var validMethod = _v0.b;
            var justBody = _v0.c;
            return (!($elm$core$Maybe$withDefault_fn(false, validContentType) && validMethod)) ? $elm$json$Json$Decode$succeed(_Utils_Tuple2($elm$core$Result$Err($author$project$Server$Request$NotFormPost({
                gP: parsedContentType,
                eW: $elm$core$Maybe$Just($author$project$Server$Request$Get)
            })), _List_Nil)) : $author$project$Server$Request$andThen_fn(function (parsedForm) {
                var thing = $elm$json$Json$Encode$object($elm$core$List$map_fn($elm$core$Tuple$mapSecond(function (_v3) {
                    var first = _v3.a;
                    return $elm$json$Json$Encode$string(first);
                }), $elm$core$Dict$toList(parsedForm)));
                var innerDecoder = function (_v2) {
                    var decoder = _v2;
                    return decoder;
                }(toForm({ ge: $author$project$Server$Request$formField_, gr: $author$project$Server$Request$optionalFormField_ }));
                return $author$project$Server$Request$jsonFromResult($elm$core$Result$mapError_fn($elm$json$Json$Decode$errorToString, _Json_run_fn(innerDecoder, thing)));
            }, $author$project$Server$Request$succeed($author$project$FormData$parse(justBody)));
        }, $author$project$Server$Request$map4_fn(F4(function (parsedContentType, a, b, c) {
            return _Utils_Tuple3(_Utils_Tuple2(a, parsedContentType), b, c);
        }), $author$project$Server$Request$map_fn($elm$core$Maybe$map($author$project$Server$Request$parseContentType), $author$project$Server$Request$rawContentType), $author$project$Server$Request$matchesContentType("application/x-www-form-urlencoded"), $author$project$Server$Request$matchesMethod(_Utils_Tuple2($author$project$Server$Request$Post, _List_Nil)), $author$project$Server$Request$map_fn($elm$core$Maybe$withDefault(""), $author$project$Server$Request$rawBody)));
    };
    var $elm$json$Json$Decode$decodeString = _Json_runOnString;
    var $author$project$Server$Request$skipInternal = function (validationError_) {
        return $elm$json$Json$Decode$succeed(_Utils_Tuple2($elm$core$Result$Err(validationError_), _List_Nil));
    };
    var $author$project$Server$Request$expectContentType = function (expectedContentType) {
        return $author$project$Server$Request$andThen_fn(function (maybeContentType) {
            if (maybeContentType.$ === 1) {
                return $author$project$Server$Request$skipInternal($author$project$Server$Request$ValidationError("Expected content-type `" + (expectedContentType + "` but there was no content-type header.")));
            }
            else {
                var contentType = maybeContentType.a;
                return _Utils_eq($author$project$Server$Request$parseContentType(contentType), $author$project$Server$Request$parseContentType(expectedContentType)) ? $author$project$Server$Request$succeed(0) : $author$project$Server$Request$skipInternal($author$project$Server$Request$ValidationError("Expected content-type to be " + (expectedContentType + (" but it was " + contentType))));
            }
        }, $author$project$Server$Request$noErrors(_Json_decodeField_fn("headers", $author$project$Server$Request$optionalField_fn("content-type", $elm$json$Json$Decode$string))));
    };
    var $author$project$Server$Request$fromResult = function (result) {
        if (!result.$) {
            var okValue = result.a;
            return $author$project$Server$Request$succeed(okValue);
        }
        else {
            var error = result.a;
            return $author$project$Server$Request$skipInternal($author$project$Server$Request$ValidationError(error));
        }
    };
    var $author$project$Server$Request$expectJsonBody = function (jsonBodyDecoder) {
        return $author$project$Server$Request$map2_fn(F2(function (_v0, secondValue) {
            return secondValue;
        }), $author$project$Server$Request$expectContentType("application/json"), $author$project$Server$Request$andThen_fn(function (rawBody_) {
            return $author$project$Server$Request$fromResult(function () {
                if (!rawBody_.$) {
                    var body_ = rawBody_.a;
                    return $elm$core$Result$mapError_fn($elm$json$Json$Decode$errorToString, _Json_runOnString_fn(jsonBodyDecoder, body_));
                }
                else {
                    return $elm$core$Result$Err("Tried to parse JSON body but the request had no body.");
                }
            }());
        }, $author$project$Server$Request$rawBody));
    };
    var $author$project$Server$Request$appendError_fn = function (error, decoder) {
        return _Json_map1_fn($elm$core$Tuple$mapSecond(function (errors) {
            return _List_Cons(error, errors);
        }), decoder);
    }, $author$project$Server$Request$appendError = F2($author$project$Server$Request$appendError_fn);
    var $author$project$Server$Request$acceptMethod_fn = function (_v0, _v1) {
        var accepted1 = _v0.a;
        var accepted = _v0.b;
        var decoder = _v1;
        return _Json_andThen_fn(function (method_) {
            return $elm$core$List$member_fn(method_, _List_Cons(accepted1, accepted)) ? decoder : $author$project$Server$Request$appendError_fn($author$project$Server$Request$ValidationError("Expected HTTP method " + ($elm$core$String$join_fn(", ", $elm$core$List$map_fn($author$project$Server$Request$methodToString, _List_Cons(accepted1, accepted))) + (" but was " + $author$project$Server$Request$methodToString(method_)))), decoder);
        }, _Json_map1_fn($author$project$Server$Request$methodFromString, _Json_decodeField_fn("method", $elm$json$Json$Decode$string)));
    }, $author$project$Server$Request$acceptMethod = F2($author$project$Server$Request$acceptMethod_fn);
    var $author$project$Server$Request$File_fn = function (name, mimeType, body) {
        return { er: body, K: mimeType, he: name };
    }, $author$project$Server$Request$File = F3($author$project$Server$Request$File_fn);
    var $author$project$Server$Request$fileField_ = function (name) {
        return _Json_map1_fn(function (value) {
            if (!value.$) {
                var justValue = value.a;
                return _Utils_Tuple2($elm$core$Result$Ok(justValue), _List_Nil);
            }
            else {
                return _Utils_Tuple2($elm$core$Result$Err($author$project$Server$Request$ValidationError("Missing form field " + name)), _List_Nil);
            }
        }, $author$project$Server$Request$optionalField_fn(name, $elm$json$Json$Decode$oneOf(_List_fromArray([
            _Json_map3_fn($author$project$Server$Request$File, _Json_decodeField_fn("filename", $elm$json$Json$Decode$string), _Json_decodeField_fn("mimeType", $elm$json$Json$Decode$string), _Json_decodeField_fn("body", $elm$json$Json$Decode$string))
        ]))));
    };
    var $author$project$Server$Request$expectMultiPartFormPost = function (toForm) {
        return $author$project$Server$Request$map2_fn(F2(function (_v0, value) {
            return value;
        }), $author$project$Server$Request$expectContentType("multipart/form-data"), $author$project$Server$Request$acceptMethod_fn(_Utils_Tuple2($author$project$Server$Request$Post, _List_Nil), _Json_decodeField_fn("multiPartFormData", function (_v1) {
            var decoder = _v1;
            return decoder;
        }(toForm({ ge: $author$project$Server$Request$formField_, g_: $author$project$Server$Request$fileField_, gr: $author$project$Server$Request$optionalFormField_ })))));
    };
    var $author$project$Server$Request$MissingQueryParam = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$QueryParams$QueryParams = $elm$core$Basics$identity;
    var $author$project$QueryParams$fromString = $elm$core$Basics$identity;
    var $elm$url$Url$Http = 0;
    var $elm$url$Url$Url_fn = function (protocol, host, port_, path, query, fragment) {
        return { T: fragment, c9: host, cd: path, dB: port_, dG: protocol, W: query };
    }, $elm$url$Url$Url = F6($elm$url$Url$Url_fn);
    var $elm$core$String$indexes = _String_indexes;
    var $elm$url$Url$chompBeforePath_fn = function (protocol, path, params, frag, str) {
        if ($elm$core$String$isEmpty(str) || _String_contains_fn("@", str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn(":", str);
            if (!_v0.b) {
                return $elm$core$Maybe$Just($elm$url$Url$Url_fn(protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
            }
            else {
                if (!_v0.b.b) {
                    var i = _v0.a;
                    var _v1 = $elm$core$String$toInt($elm$core$String$dropLeft_fn(i + 1, str));
                    if (_v1.$ === 1) {
                        return $elm$core$Maybe$Nothing;
                    }
                    else {
                        var port_ = _v1;
                        return $elm$core$Maybe$Just($elm$url$Url$Url_fn(protocol, $elm$core$String$left_fn(i, str), port_, path, params, frag));
                    }
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        }
    }, $elm$url$Url$chompBeforePath = F5($elm$url$Url$chompBeforePath_fn);
    var $elm$url$Url$chompBeforeQuery_fn = function (protocol, params, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("/", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforePath_fn(protocol, "/", params, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforePath_fn(protocol, $elm$core$String$dropLeft_fn(i, str), params, frag, $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeQuery = F4($elm$url$Url$chompBeforeQuery_fn);
    var $elm$url$Url$chompBeforeFragment_fn = function (protocol, frag, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("?", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeQuery_fn(protocol, $elm$core$Maybe$Nothing, frag, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeQuery_fn(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_fn(i + 1, str)), frag, $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompBeforeFragment = F3($elm$url$Url$chompBeforeFragment_fn);
    var $elm$url$Url$chompAfterProtocol_fn = function (protocol, str) {
        if ($elm$core$String$isEmpty(str)) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var _v0 = _String_indexes_fn("#", str);
            if (!_v0.b) {
                return $elm$url$Url$chompBeforeFragment_fn(protocol, $elm$core$Maybe$Nothing, str);
            }
            else {
                var i = _v0.a;
                return $elm$url$Url$chompBeforeFragment_fn(protocol, $elm$core$Maybe$Just($elm$core$String$dropLeft_fn(i + 1, str)), $elm$core$String$left_fn(i, str));
            }
        }
    }, $elm$url$Url$chompAfterProtocol = F2($elm$url$Url$chompAfterProtocol_fn);
    var $elm$url$Url$fromString = function (str) {
        return _String_startsWith_fn("http://", str) ? $elm$url$Url$chompAfterProtocol_fn(0, $elm$core$String$dropLeft_fn(7, str)) : (_String_startsWith_fn("https://", str) ? $elm$url$Url$chompAfterProtocol_fn(1, $elm$core$String$dropLeft_fn(8, str)) : $elm$core$Maybe$Nothing);
    };
    var $author$project$Server$Request$rawUrl = _Json_map1_fn(function (url_) {
        if (!url_.$) {
            var justValue = url_.a;
            return _Utils_Tuple2($elm$core$Result$Ok(justValue), _List_Nil);
        }
        else {
            return _Utils_Tuple2($elm$core$Result$Err($author$project$Server$Request$ValidationError("Internal error - expected rawUrl field but the adapter script didn't provide one.")), _List_Nil);
        }
    }, $elm$json$Json$Decode$maybe(_Json_decodeField_fn("rawUrl", $elm$json$Json$Decode$string)));
    var $author$project$QueryParams$addToParametersHelp_fn = function (value, maybeList) {
        if (maybeList.$ === 1) {
            return $elm$core$Maybe$Just(_List_fromArray([value]));
        }
        else {
            var list = maybeList.a;
            return $elm$core$Maybe$Just(_List_Cons(value, list));
        }
    }, $author$project$QueryParams$addToParametersHelp = F2($author$project$QueryParams$addToParametersHelp_fn);
    var $author$project$QueryParams$addParam_fn = function (segment, dict) {
        var _v0 = $elm$core$String$split_fn("=", segment);
        if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
            var rawKey = _v0.a;
            var _v1 = _v0.b;
            var rawValue = _v1.a;
            var _v2 = $elm$url$Url$percentDecode(rawKey);
            if (_v2.$ === 1) {
                return dict;
            }
            else {
                var key = _v2.a;
                var _v3 = $elm$url$Url$percentDecode(rawValue);
                if (_v3.$ === 1) {
                    return dict;
                }
                else {
                    var value = _v3.a;
                    return $elm$core$Dict$update_fn(key, $author$project$QueryParams$addToParametersHelp(value), dict);
                }
            }
        }
        else {
            return dict;
        }
    }, $author$project$QueryParams$addParam = F2($author$project$QueryParams$addParam_fn);
    var $author$project$QueryParams$prepareQuery = function (maybeQuery) {
        if (maybeQuery.$ === 1) {
            return $elm$core$Dict$empty;
        }
        else {
            var qry = maybeQuery.a;
            return $elm$core$List$foldr_fn($author$project$QueryParams$addParam, $elm$core$Dict$empty, $elm$core$String$split_fn("&", qry));
        }
    };
    var $author$project$QueryParams$toDict = function (_v0) {
        var queryParams = _v0;
        return $author$project$QueryParams$prepareQuery($elm$core$Maybe$Just(queryParams));
    };
    var $author$project$Server$Request$expectQueryParam = function (name) {
        return $author$project$Server$Request$andThen_fn(function (url_) {
            var _v0 = $elm$core$Maybe$andThen_fn(function ($) {
                return $.W;
            }, $elm$url$Url$fromString(url_));
            if (!_v0.$) {
                var queryString = _v0.a;
                var maybeParamValue = $elm$core$Maybe$andThen_fn($elm$core$List$head, $elm$core$Dict$get_fn(name, $author$project$QueryParams$toDict($author$project$QueryParams$fromString(queryString))));
                if (!maybeParamValue.$) {
                    var okParamValue = maybeParamValue.a;
                    return $author$project$Server$Request$succeed(okParamValue);
                }
                else {
                    return $author$project$Server$Request$skipInternal($author$project$Server$Request$MissingQueryParam({ cn: queryString, ds: name }));
                }
            }
            else {
                return $author$project$Server$Request$skipInternal($author$project$Server$Request$ValidationError("Expected query param \"" + (name + "\", but there were no query params.")));
            }
        }, $author$project$Server$Request$rawUrl);
    };
    var $author$project$Server$Request$OneOf = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Server$Request$oneOfInternal_fn = function (previousErrors, optimizedDecoders) {
        if (!optimizedDecoders.b) {
            return $elm$json$Json$Decode$succeed(_Utils_Tuple2($elm$core$Result$Err($author$project$Server$Request$OneOf(previousErrors)), _List_Nil));
        }
        else {
            if (!optimizedDecoders.b.b) {
                var single = optimizedDecoders.a;
                return _Json_map1_fn(function (result) {
                    return $elm$core$Tuple$mapFirst_fn($elm$core$Result$mapError(function (error) {
                        return $author$project$Server$Request$OneOf(_Utils_ap(previousErrors, _List_fromArray([error])));
                    }), result);
                }, single);
            }
            else {
                var first = optimizedDecoders.a;
                var rest = optimizedDecoders.b;
                return $elm$json$Json$Decode$oneOf(_List_fromArray([
                    _Json_andThen_fn(function (_v1) {
                        var firstResult = _v1.a;
                        var firstErrors = _v1.b;
                        var _v2 = _Utils_Tuple2(firstResult, firstErrors);
                        if (!_v2.a.$) {
                            if (!_v2.b.b) {
                                var okFirstResult = _v2.a.a;
                                return $elm$json$Json$Decode$succeed(_Utils_Tuple2($elm$core$Result$Ok(okFirstResult), _List_Nil));
                            }
                            else {
                                var otherErrors = _v2.b;
                                return $author$project$Server$Request$oneOfInternal_fn(_Utils_ap(previousErrors, otherErrors), rest);
                            }
                        }
                        else {
                            var error = _v2.a.a;
                            if (error.$ === 1) {
                                var errors = error.a;
                                return $author$project$Server$Request$oneOfInternal_fn(_Utils_ap(previousErrors, errors), rest);
                            }
                            else {
                                return $author$project$Server$Request$oneOfInternal_fn(_Utils_ap(previousErrors, _List_fromArray([error])), rest);
                            }
                        }
                    }, first)
                ]));
            }
        }
    }, $author$project$Server$Request$oneOfInternal = F2($author$project$Server$Request$oneOfInternal_fn);
    var $author$project$Server$Request$oneOf = function (serverRequests) {
        return $author$project$Server$Request$oneOfInternal_fn(_List_Nil, $elm$core$List$map_fn(function (_v0) {
            var decoder = _v0;
            return decoder;
        }, serverRequests));
    };
    var $author$project$Server$Response$plainText = function (string) {
        return $author$project$PageServerResponse$ServerResponse({
            er: $elm$core$Maybe$Just(string),
            eI: _List_fromArray([
                _Utils_Tuple2("Content-Type", "text/plain")
            ]),
            di: false,
            aa: 200
        });
    };
    var $author$project$Server$Response$toJson = function (response) {
        switch (response.$) {
            case 0:
                var data = response.b;
                return $elm$core$Basics$never(data);
            case 1:
                var serverResponse = response.a;
                return $author$project$PageServerResponse$toJson(serverResponse);
            default:
                var error = response.a;
                return $elm$core$Basics$never(error);
        }
    };
    var $elm$core$List$concatMap_fn = function (f, lists) {
        if (!lists.b) {
            return _List_Nil;
        }
        var tmp = _List_Cons(undefined, _List_Nil);
        var end = tmp;
        for (; lists.b.
            b; lists = lists.b) {
            var xs = f(lists.a);
            for (; xs.b; xs = xs.b) {
                var next = _List_Cons(xs.a, _List_Nil);
                end.b = next;
                end = next;
            }
        }
        end.b = f(lists.a);
        return tmp.b;
    }, $elm$core$List$concatMap = F2($elm$core$List$concatMap_fn);
    var $elm$regex$Regex$find_a0 = _Regex_infinity, $elm$regex$Regex$find = _Regex_findAtMost($elm$regex$Regex$find_a0);
    var $author$project$Internal$ApiRoute$tryMatch_fn = function (path, _v0) {
        var pattern = _v0.b;
        var handler = _v0.c;
        var matches = $elm$core$List$reverse($elm$core$List$filterMap_fn($elm$core$Basics$identity, $elm$core$List$concatMap_fn(function ($) {
            return $.gz;
        }, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString(pattern)), path))));
        return $elm$core$Maybe$Just(handler(matches));
    }, $author$project$Internal$ApiRoute$tryMatch = F2($author$project$Internal$ApiRoute$tryMatch_fn);
    var $author$project$Server$Response$withStatusCode_fn = function (statusCode, serverResponse) {
        switch (serverResponse.$) {
            case 0:
                var response = serverResponse.a;
                var data = serverResponse.b;
                return $author$project$PageServerResponse$RenderPage_fn(_Utils_update(response, { aa: statusCode }), data);
            case 1:
                var response = serverResponse.a;
                return $author$project$PageServerResponse$ServerResponse(_Utils_update(response, { aa: statusCode }));
            default:
                var error = serverResponse.a;
                return $elm$core$Basics$never(error);
        }
    }, $author$project$Server$Response$withStatusCode = F2($author$project$Server$Response$withStatusCode_fn);
    var $author$project$ApiRoute$serverRender = function (fullHandler) {
        var patterns = fullHandler.a;
        var pattern = fullHandler.b;
        return {
            fs: $author$project$DataSource$succeed(_List_Nil),
            eH: $elm$core$Maybe$Nothing,
            fV: function (path) {
                return $author$project$DataSource$succeed(function () {
                    var _v0 = $author$project$Internal$ApiRoute$tryMatch_fn(path, fullHandler);
                    if (!_v0.$) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }());
            },
            fA: "serverless",
            fX: function (path) {
                return $elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed($elm$core$Maybe$Nothing), $elm$core$Maybe$map_fn($author$project$DataSource$map(A2($elm$core$Basics$composeR, $author$project$Server$Response$toJson, $elm$core$Maybe$Just)), $elm$core$Maybe$map_fn(function (toDataSource) {
                    return $author$project$DataSource$andThen_fn(function (rendered) {
                        if (!rendered.$) {
                            if (!rendered.a.$) {
                                var okRendered = rendered.a.a;
                                return okRendered;
                            }
                            else {
                                var errors = rendered.a.a;
                                return $author$project$DataSource$succeed($author$project$Server$Response$withStatusCode_fn(400, $author$project$Server$Response$plainText($author$project$Server$Request$errorsToString(errors))));
                            }
                        }
                        else {
                            return $author$project$DataSource$succeed($author$project$Server$Response$withStatusCode_fn(400, $author$project$Server$Response$plainText("No matching request handler")));
                        }
                    }, $author$project$DataSource$Http$get_fn("$$elm-pages$$headers", $elm$json$Json$Decode$oneOf(_List_fromArray([
                        _Json_map1_fn($elm$core$Maybe$Just, $author$project$Server$Request$getDecoder(toDataSource))
                    ]))));
                }, $author$project$Internal$ApiRoute$tryMatch_fn(path, fullHandler))));
            },
            f_: patterns,
            f0: $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("^" + (pattern + "$")))
        };
    };
    var $author$project$Pattern$PendingSlash = 0;
    var $author$project$Pattern$addSlash = function (_v0) {
        var segments = _v0.a;
        return $author$project$Pattern$Pattern_fn(segments, 0);
    };
    var $author$project$ApiRoute$slash = function (_v0) {
        var patterns = _v0.a;
        var pattern = _v0.b;
        var handler = _v0.c;
        var toString = _v0.d;
        var constructor = _v0.e;
        return $author$project$Internal$ApiRoute$ApiRouteBuilder_fn($author$project$Pattern$addSlash(patterns), pattern + "/", handler, function (arg) {
            return toString(arg) + "/";
        }, constructor);
    };
    var $author$project$Pattern$empty = $author$project$Pattern$Pattern_fn(_List_Nil, 1);
    var $author$project$ApiRoute$succeed = function (a) {
        return $author$project$Internal$ApiRoute$ApiRouteBuilder_fn($author$project$Pattern$empty, "", function (_v0) {
            return a;
        }, function (_v1) {
            return "";
        }, function (list) {
            return list;
        });
    };
    var $author$project$Api$events = $author$project$ApiRoute$serverRender($author$project$ApiRoute$literal_fn("events", $author$project$ApiRoute$slash($author$project$ApiRoute$literal_fn("api", $author$project$ApiRoute$succeed($author$project$Server$Request$map_fn(function (firstName) {
        return $author$project$DataSource$succeed($author$project$Server$Response$plainText("Hello " + firstName));
    }, $author$project$Server$Request$oneOf(_List_fromArray([
        $author$project$Server$Request$expectFormPost(function (_v0) {
            var optionalField = _v0.gr;
            var field = _v0.ge;
            return field("first");
        }),
        $author$project$Server$Request$expectJsonBody(_Json_decodeField_fn("first", $elm$json$Json$Decode$string)),
        $author$project$Server$Request$expectQueryParam("first"),
        $author$project$Server$Request$expectMultiPartFormPost(function (_v1) {
            var optionalField = _v1.gr;
            var field = _v1.ge;
            return field("first");
        })
    ]))))))));
    var $author$project$Api$multipleContentTypes = $author$project$ApiRoute$serverRender($author$project$ApiRoute$literal_fn("multiple-content-types", $author$project$ApiRoute$slash($author$project$ApiRoute$literal_fn("api", $author$project$ApiRoute$succeed($author$project$Server$Request$oneOf(_List_fromArray([
        $author$project$Server$Request$map_fn(function (decodedValue) {
            return $author$project$DataSource$succeed($author$project$Server$Response$plainText(decodedValue));
        }, $author$project$Server$Request$expectJsonBody($elm$json$Json$Decode$at_fn(_List_fromArray(["path", "to", "string", "value"]), $elm$json$Json$Decode$string)))
    ])))))));
    var $author$project$CookieParser$isSpace = function (c) {
        return c === " ";
    };
    var $author$project$CookieParser$parseKey = $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$Advanced$map_fn($elm$core$String$trim, $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function (c) {
        return (c !== "=") && (c !== ";");
    }))));
    var $elm$parser$Parser$Expecting = function (a) {
        return { $: 0, a: a };
    };
    var $elm$parser$Parser$toToken = function (str) {
        return $elm$parser$Parser$Advanced$Token_fn(str, $elm$parser$Parser$Expecting(str));
    };
    var $elm$parser$Parser$token = function (str) {
        return $elm$parser$Parser$Advanced$token($elm$parser$Parser$toToken(str));
    };
    var $elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
    var $elm$parser$Parser$Advanced$fromInfo_fn = function (row, col, x, context) {
        return $elm$parser$Parser$Advanced$AddRight_fn($elm$parser$Parser$Advanced$Empty, $elm$parser$Parser$Advanced$DeadEnd_fn(row, col, x, context));
    }, $elm$parser$Parser$Advanced$fromInfo = F4($elm$parser$Parser$Advanced$fromInfo_fn);
    var $elm$parser$Parser$Advanced$chompUntil = function (_v0) {
        var str = _v0.a;
        var expecting = _v0.b;
        return function (s) {
            var _v1 = _Parser_findSubString_fn(str, s.b, s.hG, s.gO, s.dU);
            var newOffset = _v1.a;
            var newRow = _v1.b;
            var newCol = _v1.c;
            return newOffset === -1 ? $elm$parser$Parser$Advanced$Bad_fn(false, $elm$parser$Parser$Advanced$fromInfo_fn(newRow, newCol, expecting, s.d)) : $elm$parser$Parser$Advanced$Good_fn(_Utils_cmp(s.b, newOffset) < 0, 0, { gO: newCol, d: s.d, b4: s.b4, b: newOffset, hG: newRow, dU: s.dU });
        };
    };
    var $elm$parser$Parser$chompUntil = function (str) {
        return $elm$parser$Parser$Advanced$chompUntil($elm$parser$Parser$toToken(str));
    };
    var $author$project$CookieParser$valueParser = $elm$parser$Parser$Advanced$map_fn(function (value) {
        return $elm$core$Maybe$withDefault_fn("", $elm$url$Url$percentDecode(value));
    }, $elm$parser$Parser$Advanced$map_fn($elm$core$String$trim, $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$chompWhile($author$project$CookieParser$isSpace)), $elm$parser$Parser$oneOf(_List_fromArray([
        $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed(""), $elm$parser$Parser$token(";")),
        $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Basics$identity), $elm$parser$Parser$token("\"")), $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$getChompedString($elm$parser$Parser$chompUntil("\"")), $elm$parser$Parser$token("\""))),
        $elm$parser$Parser$getChompedString($elm$parser$Parser$chompWhile(function (c) {
            return c !== ";";
        }))
    ])))));
    var $author$project$CookieParser$keyValuePair = function (revChunks) {
        return $elm$parser$Parser$oneOf(_List_fromArray([
            $elm$parser$Parser$Advanced$map_fn(function (_v0) {
                return $elm$parser$Parser$Done($elm$core$List$reverse(revChunks));
            }, $elm$parser$Parser$end),
            $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$parser$Parser$Loop(revChunks)), $elm$parser$Parser$chompIf($author$project$CookieParser$isSpace)), $elm$parser$Parser$chompWhile($author$project$CookieParser$isSpace)),
            $elm$parser$Parser$Advanced$andThen_fn(function (_v1) {
                var key = _v1.a;
                var maybeValue = _v1.b;
                if (!maybeValue.$) {
                    var value = maybeValue.a;
                    return $elm$parser$Parser$succeed($elm$parser$Parser$Loop(_List_Cons(_Utils_Tuple2(key, value), revChunks)));
                }
                else {
                    return $elm$parser$Parser$succeed($elm$parser$Parser$Loop(revChunks));
                }
            }, $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$succeed($elm$core$Tuple$pair), $author$project$CookieParser$parseKey), $elm$parser$Parser$oneOf(_List_fromArray([
                $elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Maybe$Nothing), $elm$parser$Parser$token(";")),
                $elm$parser$Parser$Advanced$keeper_fn($elm$parser$Parser$Advanced$ignorer_fn($elm$parser$Parser$succeed($elm$core$Maybe$Just), $elm$parser$Parser$token("=")), $elm$parser$Parser$Advanced$ignorer_fn($author$project$CookieParser$valueParser, $elm$parser$Parser$oneOf(_List_fromArray([
                    $elm$parser$Parser$token(";"),
                    $elm$parser$Parser$succeed(0)
                ]))))
            ]))))
        ]));
    };
    var $author$project$CookieParser$parser = $elm$parser$Parser$Advanced$map_fn($elm$core$Dict$fromList, $elm$parser$Parser$loop_fn(_List_Nil, $author$project$CookieParser$keyValuePair));
    var $author$project$CookieParser$parse = function (input) {
        return $elm$core$Result$withDefault_fn($elm$core$Dict$empty, $elm$parser$Parser$run_fn($author$project$CookieParser$parser, input));
    };
    var $author$project$Server$Request$allCookies = $author$project$Server$Request$noErrors(_Json_map1_fn($elm$core$Maybe$withDefault($elm$core$Dict$empty), _Json_decodeField_fn("headers", _Json_map1_fn($elm$core$Maybe$map($author$project$CookieParser$parse), $author$project$Server$Request$optionalField_fn("cookie", $elm$json$Json$Decode$string)))));
    var $elm$json$Json$Encode$dict_fn = function (toKey, toValue, dictionary) {
        return _Json_wrap($elm$core$Dict$foldl_fn_unwrapped(function (key, value, obj) {
            return _Json_addField_fn(toKey(key), toValue(value), obj);
        }, _Json_emptyObject(0), dictionary));
    }, $elm$json$Json$Encode$dict = F3($elm$json$Json$Encode$dict_fn);
    var $author$project$Server$Response$json = function (jsonValue) {
        return $author$project$PageServerResponse$ServerResponse({
            er: $elm$core$Maybe$Just(_Json_encode_fn(0, jsonValue)),
            eI: _List_fromArray([
                _Utils_Tuple2("Content-Type", "application/json")
            ]),
            di: false,
            aa: 200
        });
    };
    var $author$project$Server$Request$method = $author$project$Server$Request$noErrors(_Json_map1_fn($author$project$Server$Request$methodFromString, _Json_decodeField_fn("method", $elm$json$Json$Decode$string)));
    var $author$project$Server$Request$queryParams = $author$project$Server$Request$map_fn(function (rawUrl_) {
        return $elm$core$Maybe$withDefault_fn($elm$core$Dict$empty, $elm$core$Maybe$map_fn($author$project$QueryParams$toDict, $elm$core$Maybe$map_fn($author$project$QueryParams$fromString, $elm$core$Maybe$andThen_fn(function ($) {
            return $.W;
        }, $elm$url$Url$fromString(rawUrl_)))));
    }, $author$project$Server$Request$rawUrl);
    var $author$project$Api$requestPrinter = $author$project$ApiRoute$serverRender($author$project$ApiRoute$literal_fn("request-test", $author$project$ApiRoute$slash($author$project$ApiRoute$literal_fn("api", $author$project$ApiRoute$succeed($author$project$Server$Request$map4_fn(F4(function (rawBody, method, cookies, queryParams) {
        return $author$project$DataSource$succeed($author$project$Server$Response$json($elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("rawBody", $elm$core$Maybe$withDefault_fn($elm$json$Json$Encode$null, $elm$core$Maybe$map_fn($elm$json$Json$Encode$string, rawBody))),
            _Utils_Tuple2("method", $elm$json$Json$Encode$string($author$project$Server$Request$methodToString(method))),
            _Utils_Tuple2("cookies", $elm$json$Json$Encode$dict_fn($elm$core$Basics$identity, $elm$json$Json$Encode$string, cookies)),
            _Utils_Tuple2("queryParams", $elm$json$Json$Encode$dict_fn($elm$core$Basics$identity, $elm$json$Json$Encode$list($elm$json$Json$Encode$string), queryParams))
        ]))));
    }), $author$project$Server$Request$rawBody, $author$project$Server$Request$method, $author$project$Server$Request$allCookies, $author$project$Server$Request$queryParams))))));
    var $author$project$Api$routes_fn = function (getStaticRoutes, htmlToString) {
        return _List_fromArray([$author$project$Api$events, $author$project$Api$requestPrinter, $author$project$Api$multipleContentTypes]);
    }, $author$project$Api$routes = F2($author$project$Api$routes_fn);
    var $author$project$ApiRoute$encodeStaticFileBody = function (fileBody) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("body", $elm$json$Json$Encode$string(fileBody)),
            _Utils_Tuple2("kind", $elm$json$Json$Encode$string("static-file"))
        ]));
    };
    var $author$project$Internal$ApiRoute$pathToMatches_fn = function (path, _v0) {
        var pattern = _v0.b;
        return $elm$core$List$reverse($elm$core$List$filterMap_fn($elm$core$Basics$identity, $elm$core$List$concatMap_fn(function ($) {
            return $.gz;
        }, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString(pattern)), path))));
    }, $author$project$Internal$ApiRoute$pathToMatches = F2($author$project$Internal$ApiRoute$pathToMatches_fn);
    var $author$project$ApiRoute$preRender_fn = function (buildUrls, fullHandler) {
        var patterns = fullHandler.a;
        var pattern = fullHandler.b;
        var toString = fullHandler.d;
        var constructor = fullHandler.e;
        var preBuiltMatches = buildUrls(constructor(_List_Nil));
        var buildTimeRoutes__ = $author$project$DataSource$map_fn($elm$core$List$map(toString), buildUrls(constructor(_List_Nil)));
        return {
            fs: buildTimeRoutes__,
            eH: $elm$core$Maybe$Nothing,
            fV: function (path) {
                var matches = $author$project$Internal$ApiRoute$pathToMatches_fn(path, fullHandler);
                return $author$project$DataSource$map_fn($elm$core$List$member(matches), preBuiltMatches);
            },
            fA: "prerender",
            fX: function (path) {
                var matches = $author$project$Internal$ApiRoute$pathToMatches_fn(path, fullHandler);
                var routeFound = $author$project$DataSource$map_fn($elm$core$List$member(matches), preBuiltMatches);
                return $author$project$DataSource$andThen_fn(function (found) {
                    return found ? $elm$core$Maybe$withDefault_fn($author$project$DataSource$succeed($elm$core$Maybe$Nothing), $elm$core$Maybe$map_fn($author$project$DataSource$map(A2($elm$core$Basics$composeR, $author$project$ApiRoute$encodeStaticFileBody, $elm$core$Maybe$Just)), $author$project$Internal$ApiRoute$tryMatch_fn(path, fullHandler))) : $author$project$DataSource$succeed($elm$core$Maybe$Nothing);
                }, routeFound);
            },
            f_: patterns,
            f0: $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString("^" + (pattern + "$")))
        };
    }, $author$project$ApiRoute$preRender = F2($author$project$ApiRoute$preRender_fn);
    var $author$project$ApiRoute$single = function (handler) {
        return $author$project$ApiRoute$preRender_fn(function (constructor) {
            return $author$project$DataSource$succeed(_List_fromArray([constructor]));
        }, handler);
    };
    var $author$project$Pattern$segmentToJson = function (segment) {
        switch (segment.$) {
            case 0:
                var literalString = segment.a;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("kind", $elm$json$Json$Encode$string("literal")),
                    _Utils_Tuple2("value", $elm$json$Json$Encode$string(literalString))
                ]));
            case 1:
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("kind", $elm$json$Json$Encode$string("dynamic"))
                ]));
            default:
                var _v1 = segment.a;
                var first = _v1.a;
                var second = _v1.b;
                var rest = _v1.c;
                return $elm$json$Json$Encode$object(_List_fromArray([
                    _Utils_Tuple2("kind", $elm$json$Json$Encode$string("hybrid")),
                    _Utils_Tuple2("value", $elm$json$Json$Encode$list_fn($author$project$Pattern$segmentToJson, _List_Cons(first, _List_Cons(second, rest))))
                ]));
        }
    };
    var $author$project$Pattern$toJson = function (_v0) {
        var segments = _v0.a;
        return $elm$json$Json$Encode$list_fn($author$project$Pattern$segmentToJson, segments);
    };
    var $author$project$Internal$ApiRoute$toPattern = function (_v0) {
        var pattern = _v0.f_;
        return pattern;
    };
    var $author$project$ApiRoute$toJson = function (apiRoute) {
        var kind = apiRoute.fA;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("pathPattern", $author$project$Pattern$toJson($author$project$Internal$ApiRoute$toPattern(apiRoute))),
            _Utils_Tuple2("kind", $elm$json$Json$Encode$string(kind))
        ]));
    };
    var $author$project$Main$apiPatterns = function () {
        var apiPatternsString = $elm$core$List$map_fn($author$project$ApiRoute$toJson, $author$project$Api$routes_fn($author$project$Main$getStaticRoutes, function (_v0) {
            return "";
        }));
        return $author$project$ApiRoute$single($author$project$ApiRoute$literal_fn("api-patterns.json", $author$project$ApiRoute$succeed(function (json) {
            return $author$project$DataSource$succeed(_Json_encode_fn(0, json));
        }($elm$json$Json$Encode$list_fn($elm$core$Basics$identity, apiPatternsString)))));
    }();
    var $author$project$Main$DataAccount = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Main$DataEvents = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Main$DataEvents__Slug_ = function (a) {
        return { $: 5, a: a };
    };
    var $author$project$Main$DataIndex = function (a) {
        return { $: 4, a: a };
    };
    var $elm$bytes$Bytes$Decode$Decoder = $elm$core$Basics$identity;
    var $elm$bytes$Bytes$Decode$fail = _Bytes_decodeFailure;
    var $elm$bytes$Bytes$Decode$map_fn = function (func, _v0) {
        var decodeA = _v0;
        return F2(function (bites, offset) {
            var _v1 = A2(decodeA, bites, offset);
            var aOffset = _v1.a;
            var a = _v1.b;
            return _Utils_Tuple2(aOffset, func(a));
        });
    }, $elm$bytes$Bytes$Decode$map = F2($elm$bytes$Bytes$Decode$map_fn);
    var $elm$bytes$Bytes$Decode$andThen_fn = function (callback, _v0) {
        var decodeA = _v0;
        return F2(function (bites, offset) {
            var _v1 = A2(decodeA, bites, offset);
            var newOffset = _v1.a;
            var a = _v1.b;
            var _v2 = callback(a);
            var decodeB = _v2;
            return A2(decodeB, bites, newOffset);
        });
    }, $elm$bytes$Bytes$Decode$andThen = F2($elm$bytes$Bytes$Decode$andThen_fn);
    var $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn = function (d, d2) {
        return $elm$bytes$Bytes$Decode$andThen_fn(function (v) {
            return $elm$bytes$Bytes$Decode$map_fn(v, d);
        }, d2);
    }, $lamdera$codecs$Lamdera$Wire3$andMapDecode = F2($lamdera$codecs$Lamdera$Wire3$andMapDecode_fn);
    var $lamdera$codecs$Lamdera$Wire3$endianness = 0;
    var $elm$bytes$Bytes$Decode$float64 = function (endianness) {
        return _Bytes_read_f64(!endianness);
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeFloat64 = $elm$bytes$Bytes$Decode$float64($lamdera$codecs$Lamdera$Wire3$endianness);
    var $lamdera$codecs$Lamdera$Wire3$identityFloatToInt = $elm$core$Basics$floor;
    var $elm$bytes$Bytes$Decode$succeed = function (a) {
        return F2(function (_v0, offset) {
            return _Utils_Tuple2(offset, a);
        });
    };
    var $elm$bytes$Bytes$Decode$unsignedInt8 = _Bytes_read_u8;
    var $lamdera$codecs$Lamdera$Wire3$intDivBy_fn = function (b, a) {
        var v = a / b;
        return (v < 0) ? (-$elm$core$Basics$floor(-v)) : $elm$core$Basics$floor(v);
    }, $lamdera$codecs$Lamdera$Wire3$intDivBy = F2($lamdera$codecs$Lamdera$Wire3$intDivBy_fn);
    var $lamdera$codecs$Lamdera$Wire3$unsignedToSigned = function (i) {
        return (_Basics_modBy_fn(2, i) === 1) ? $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(-2, i + 1) : $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(2, i);
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeInt64 = function () {
        var d = $lamdera$codecs$Lamdera$Wire3$andMapDecode($elm$bytes$Bytes$Decode$unsignedInt8);
        return $elm$bytes$Bytes$Decode$andThen_fn(function (n0) {
            return (n0 <= 215) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, $elm$bytes$Bytes$Decode$succeed(n0)) : ((n0 < 252) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, d($elm$bytes$Bytes$Decode$succeed(function (b0) {
                return (((n0 - 216) * 256) + b0) + 216;
            }))) : ((n0 === 252) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, d(d($elm$bytes$Bytes$Decode$succeed(F2(function (b0, b1) {
                return (b0 * 256) + b1;
            }))))) : ((n0 === 253) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, d(d(d($elm$bytes$Bytes$Decode$succeed(F3(function (b0, b1, b2) {
                return (((b0 * 256) + b1) * 256) + b2;
            })))))) : ((n0 === 254) ? $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$unsignedToSigned, d(d(d(d($elm$bytes$Bytes$Decode$succeed(F4(function (b0, b1, b2, b3) {
                return (((((b0 * 256) + b1) * 256) + b2) * 256) + b3;
            }))))))) : $elm$bytes$Bytes$Decode$map_fn($lamdera$codecs$Lamdera$Wire3$identityFloatToInt, $lamdera$codecs$Lamdera$Wire3$decodeFloat64)))));
        }, $elm$bytes$Bytes$Decode$unsignedInt8);
    }();
    var $elm$bytes$Bytes$Decode$string = function (n) {
        return _Bytes_read_string(n);
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeString = $elm$bytes$Bytes$Decode$andThen_fn($elm$bytes$Bytes$Decode$string, $lamdera$codecs$Lamdera$Wire3$decodeInt64);
    var $lamdera$codecs$Lamdera$Wire3$succeedDecode = $elm$bytes$Bytes$Decode$succeed;
    var $author$project$Route$Account$w3_decode_Data = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (message0) {
        return { bH: message0 };
    }));
    var $elm$bytes$Bytes$Decode$Done = function (a) {
        return { $: 1, a: a };
    };
    var $elm$bytes$Bytes$Decode$Loop = function (a) {
        return { $: 0, a: a };
    };
    var $elm$bytes$Bytes$Decode$loopHelp_fn = function (state, callback, bites, offset) {
        loopHelp: while (true) {
            var _v0 = callback(state);
            var decoder = _v0;
            var _v1 = A2(decoder, bites, offset);
            var newOffset = _v1.a;
            var step = _v1.b;
            if (!step.$) {
                var newState = step.a;
                var $temp$state = newState, $temp$callback = callback, $temp$bites = bites, $temp$offset = newOffset;
                state = $temp$state;
                callback = $temp$callback;
                bites = $temp$bites;
                offset = $temp$offset;
                continue loopHelp;
            }
            else {
                var result = step.a;
                return _Utils_Tuple2(newOffset, result);
            }
        }
    }, $elm$bytes$Bytes$Decode$loopHelp = F4($elm$bytes$Bytes$Decode$loopHelp_fn);
    var $elm$bytes$Bytes$Decode$loop_fn = function (state, callback) {
        return A2($elm$bytes$Bytes$Decode$loopHelp, state, callback);
    }, $elm$bytes$Bytes$Decode$loop = F2($elm$bytes$Bytes$Decode$loop_fn);
    var $lamdera$codecs$Lamdera$Wire3$decodeList = function (decoder) {
        var listStep = function (_v0) {
            var n = _v0.a;
            var xs = _v0.b;
            return (n <= 0) ? $elm$bytes$Bytes$Decode$succeed($elm$bytes$Bytes$Decode$Done(xs)) : $elm$bytes$Bytes$Decode$map_fn(function (x) {
                return $elm$bytes$Bytes$Decode$Loop(_Utils_Tuple2(n - 1, _List_Cons(x, xs)));
            }, decoder);
        };
        return $elm$bytes$Bytes$Decode$andThen_fn(function (len) {
            return $elm$bytes$Bytes$Decode$map_fn($elm$core$List$reverse, $elm$bytes$Bytes$Decode$loop_fn(_Utils_Tuple2(len, _List_Nil), listStep));
        }, $lamdera$codecs$Lamdera$Wire3$decodeInt64);
    };
    var $lamdera$codecs$Lamdera$Wire3$andThenDecode = $elm$bytes$Bytes$Decode$andThen;
    var $lamdera$codecs$Lamdera$Wire3$decodeBool = $elm$bytes$Bytes$Decode$andThen_fn(function (s) {
        switch (s) {
            case 0:
                return $elm$bytes$Bytes$Decode$succeed(false);
            case 1:
                return $elm$bytes$Bytes$Decode$succeed(true);
            default:
                return $elm$bytes$Bytes$Decode$fail;
        }
    }, $elm$bytes$Bytes$Decode$unsignedInt8);
    var $lamdera$codecs$Lamdera$Wire3$decodeFloat = $lamdera$codecs$Lamdera$Wire3$decodeFloat64;
    var $lamdera$codecs$Lamdera$Wire3$decodeInt = $lamdera$codecs$Lamdera$Wire3$decodeInt64;
    var $lamdera$codecs$Lamdera$Wire3$failDecode = $elm$bytes$Bytes$Decode$fail;
    var $lamdera$codecs$Lamdera$Wire3$decodeMaybe = function (decVal) {
        return $elm$bytes$Bytes$Decode$andThen_fn(function (c) {
            switch (c) {
                case 0:
                    return $lamdera$codecs$Lamdera$Wire3$succeedDecode($elm$core$Maybe$Nothing);
                case 1:
                    return $elm$bytes$Bytes$Decode$map_fn($elm$core$Maybe$Just, decVal);
                default:
                    return $lamdera$codecs$Lamdera$Wire3$failDecode;
            }
        }, $elm$bytes$Bytes$Decode$unsignedInt8);
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeUnit = $elm$bytes$Bytes$Decode$succeed(0), $lamdera$codecs$Lamdera$Wire3$decodeUnit_fn = $lamdera$codecs$Lamdera$Wire3$decodeUnit.f;
    var $author$project$Data$SeatGeek$w3_decode_Announcements = $lamdera$codecs$Lamdera$Wire3$succeedDecode({});
    var $author$project$Data$SeatGeek$w3_decode_EventStats = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$decodeInt)), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (averagePrice0) {
        return function (dqBucketCounts0) {
            return function (highestPrice0) {
                return function (listingCount0) {
                    return function (lowestPrice0) {
                        return function (lowestPriceGoodDeals0) {
                            return function (lowestSgBasePrice0) {
                                return function (lowestSgBasePriceGoodDeals0) {
                                    return function (medianPrice0) {
                                        return function (visibleListingCount0) {
                                            return { cs: averagePrice0, cR: dqBucketCounts0, c6: highestPrice0, dl: listingCount0, dm: lowestPrice0, dn: lowestPriceGoodDeals0, $7: lowestSgBasePrice0, dp: lowestSgBasePriceGoodDeals0, dq: medianPrice0, ee: visibleListingCount0 };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    })))))))))));
    var $author$project$Data$SeatGeek$w3_decode_Colors = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$decodeString), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$decodeString), $lamdera$codecs$Lamdera$Wire3$succeedDecode(F3(function (all0, iconic0, primary0) {
        return { cm: all0, da: iconic0, z: primary0 };
    })))));
    var $author$project$Data$SeatGeek$w3_decode_Division = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeString), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeString), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F6(function (displayName0, displayType0, divisionLevel0, shortName0, slug0, taxonomyId0) {
        return { af: displayName0, cM: displayType0, cN: divisionLevel0, aw: shortName0, k: slug0, d0: taxonomyId0 };
    }))))))));
    var $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8 = $elm$bytes$Bytes$Decode$unsignedInt8;
    var $author$project$Data$SeatGeek$w3_decode_GenerationType = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        if (!w3v) {
            return $lamdera$codecs$Lamdera$Wire3$succeedDecode(0);
        }
        else {
            return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Data$SeatGeek$w3_decode_SourceType = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        if (!w3v) {
            return $lamdera$codecs$Lamdera$Wire3$succeedDecode(0);
        }
        else {
            return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Data$SeatGeek$w3_decode_DocumentSource = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_SourceType, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_GenerationType, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F2(function (generationType0, sourceType0) {
        return { c1: generationType0, dS: sourceType0 };
    }))));
    var $author$project$Data$SeatGeek$w3_decode_GenreImages = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (banner0) {
        return function (block0) {
            return function (criteo130_1600) {
                return function (criteo170_2350) {
                    return function (criteo205_1000) {
                        return function (criteo400_3000) {
                            return function (fb100X720) {
                                return function (fb600_3150) {
                                    return function (huge0) {
                                        return function (ipadEventModal0) {
                                            return function (ipadHeader0) {
                                                return function (ipadMiniExplore0) {
                                                    return function (mongo0) {
                                                        return function (squareMid0) {
                                                            return function (the1200X5250) {
                                                                return function (the1200X6270) {
                                                                    return function (the136X1360) {
                                                                        return function (the500_7000) {
                                                                            return function (the800X3200) {
                                                                                return function (triggitFbAd0) {
                                                                                    return { cu: banner0, cv: block0, cB: criteo130_1600, cC: criteo170_2350, cD: criteo205_1000, cE: criteo400_3000, c_: fb100X720, c$: fb600_3150, aj: huge0, df: ipadEventModal0, dg: ipadHeader0, dh: ipadMiniExplore0, dt: mongo0, dT: squareMid0, d1: the1200X5250, d2: the1200X6270, d3: the136X1360, d4: the500_7000, d5: the800X3200, ec: triggitFbAd0 };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    })))))))))))))))))))));
    var $author$project$Data$SeatGeek$w3_decode_Genre = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeBool, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_GenreImages, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_DocumentSource, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F7(function (documentSource0, id0, image0, images0, name0, primary0, slug0) {
        return { ag: documentSource0, g: id0, ak: image0, al: images0, he: name0, z: primary0, k: slug0 };
    })))))))));
    var $author$project$Data$SeatGeek$w3_decode_Location = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeFloat, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeFloat, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F2(function (lat0, lon0) {
        return { am: lat0, aq: lon0 };
    }))));
    var $author$project$Data$SeatGeek$w3_decode_PerformerImages = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (huge0) {
        return { aj: huge0 };
    }));
    var $author$project$Data$SeatGeek$w3_decode_PerformerStats = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (eventCount0) {
        return { cU: eventCount0 };
    }));
    var $author$project$Data$SeatGeek$w3_decode_UpperEnum = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        if (!w3v) {
            return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($elm$core$Basics$identity));
        }
        else {
            return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Data$SeatGeek$w3_decode_Taxonomy = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_UpperEnum, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($author$project$Data$SeatGeek$w3_decode_DocumentSource), $lamdera$codecs$Lamdera$Wire3$succeedDecode(F5(function (documentSource0, id0, name0, parentID0, rank0) {
        return { ag: documentSource0, g: id0, he: name0, dw: parentID0, dJ: rank0 };
    })))))));
    var $author$project$Data$SeatGeek$w3_decode_Performer = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Data$SeatGeek$w3_decode_Taxonomy), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_PerformerStats, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeFloat, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeBool), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_UpperEnum, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($author$project$Data$SeatGeek$w3_decode_Location), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_PerformerImages, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeString), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeString), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeBool), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeBool, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Data$SeatGeek$w3_decode_Genre)), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Data$SeatGeek$w3_decode_Division), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($author$project$Data$SeatGeek$w3_decode_Colors), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeBool), $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (awayTeam0) {
        return function (colors0) {
            return function (divisions0) {
                return function (genres0) {
                    return function (hasUpcomingEvents0) {
                        return function (homeTeam0) {
                            return function (homeVenueID0) {
                                return function (id0) {
                                    return function (image0) {
                                        return function (imageAttribution0) {
                                            return function (imageLicense0) {
                                                return function (imageRightsMessage0) {
                                                    return function (images0) {
                                                        return function (location0) {
                                                            return function (name0) {
                                                                return function (numUpcomingEvents0) {
                                                                    return function (performerType0) {
                                                                        return function (popularity0) {
                                                                            return function (primary0) {
                                                                                return function (score0) {
                                                                                    return function (shortName0) {
                                                                                        return function (slug0) {
                                                                                            return function (stats0) {
                                                                                                return function (taxonomies0) {
                                                                                                    return function (url0) {
                                                                                                        return { ct: awayTeam0, cy: colors0, cO: divisions0, c2: genres0, ah: hasUpcomingEvents0, c7: homeTeam0, c8: homeVenueID0, g: id0, ak: image0, db: imageAttribution0, dc: imageLicense0, dd: imageRightsMessage0, al: images0, ap: location0, he: name0, as: numUpcomingEvents0, dy: performerType0, y: popularity0, z: primary0, A: score0, aw: shortName0, k: slug0, az: stats0, aA: taxonomies0, C: url0 };
                                                                                                    };
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    }))))))))))))))))))))))))));
    var $author$project$Data$SeatGeek$w3_decode_Status = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        if (!w3v) {
            return $lamdera$codecs$Lamdera$Wire3$succeedDecode(0);
        }
        else {
            return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Data$SeatGeek$w3_decode_Venue = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeFloat, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_Location, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$failDecode), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeBool, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeUnit, $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (accessMethod0) {
        return function (address0) {
            return function (capacity0) {
                return function (city0) {
                    return function (country0) {
                        return function (displayLocation0) {
                            return function (extendedAddress0) {
                                return function (hasUpcomingEvents0) {
                                    return function (id0) {
                                        return function (links0) {
                                            return function (location0) {
                                                return function (metroCode0) {
                                                    return function (name0) {
                                                        return function (nameV20) {
                                                            return function (numUpcomingEvents0) {
                                                                return function (popularity0) {
                                                                    return function (postalCode0) {
                                                                        return function (score0) {
                                                                            return function (slug0) {
                                                                                return function (state0) {
                                                                                    return function (timezone0) {
                                                                                        return function (url0) {
                                                                                            return { ab: accessMethod0, cl: address0, cx: capacity0, ad: city0, ae: country0, cL: displayLocation0, cY: extendedAddress0, ah: hasUpcomingEvents0, g: id0, an: links0, ap: location0, ar: metroCode0, he: name0, du: nameV20, as: numUpcomingEvents0, y: popularity0, av: postalCode0, A: score0, k: slug0, ay: state0, d8: timezone0, C: url0 };
                                                                                        };
                                                                                    };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    })))))))))))))))))))))));
    var $author$project$Data$SeatGeek$w3_decode_Event = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_Venue, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeBool, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$failDecode), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Data$SeatGeek$w3_decode_Taxonomy), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_Status, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_EventStats, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeFloat, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeFloat, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Data$SeatGeek$w3_decode_Performer), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$failDecode), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeBool, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($lamdera$codecs$Lamdera$Wire3$decodeBool), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_UpperEnum, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeUnit, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeUnit, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$failDecode), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($elm$bytes$Bytes$Decode$andThen_fn(function (t) {
        return $lamdera$codecs$Lamdera$Wire3$succeedDecode($elm$time$Time$millisToPosix(t));
    }, $lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeBool, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($elm$bytes$Bytes$Decode$andThen_fn(function (t) {
        return $lamdera$codecs$Lamdera$Wire3$succeedDecode($elm$time$Time$millisToPosix(t));
    }, $lamdera$codecs$Lamdera$Wire3$decodeInt), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeBool, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeBool, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_Announcements, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeUnit, $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (accessMethod0) {
        return function (announceDate0) {
            return function (announcements0) {
                return function (conditional0) {
                    return function (createdAt0) {
                        return function (dateTbd0) {
                            return function (datetimeLocal0) {
                                return function (datetimeTbd0) {
                                    return function (datetimeUTC0) {
                                        return function (description0) {
                                            return function (domainInformation0) {
                                                return function (enddatetimeUTC0) {
                                                    return function (eventPromotion0) {
                                                        return function (eventType0) {
                                                            return function (generalAdmission0) {
                                                                return function (id0) {
                                                                    return function (isOpen0) {
                                                                        return function (links0) {
                                                                            return function (performers0) {
                                                                                return function (popularity0) {
                                                                                    return function (score0) {
                                                                                        return function (shortTitle0) {
                                                                                            return function (stats0) {
                                                                                                return function (status0) {
                                                                                                    return function (taxonomies0) {
                                                                                                        return function (themes0) {
                                                                                                            return function (timeTbd0) {
                                                                                                                return function (title0) {
                                                                                                                    return function (url0) {
                                                                                                                        return function (venue0) {
                                                                                                                            return function (visibleUntilUTC0) {
                                                                                                                                return { ab: accessMethod0, cp: announceDate0, cq: announcements0, cz: conditional0, cA: createdAt0, cF: dateTbd0, cG: datetimeLocal0, cH: datetimeTbd0, cI: datetimeUTC0, gR: description0, cQ: domainInformation0, cT: enddatetimeUTC0, cV: eventPromotion0, cW: eventType0, c0: generalAdmission0, g: id0, dj: isOpen0, an: links0, dz: performers0, y: popularity0, A: score0, dP: shortTitle0, az: stats0, dV: status0, aA: taxonomies0, d6: themes0, d7: timeTbd0, be: title0, C: url0, ed: venue0, ef: visibleUntilUTC0 };
                                                                                                                            };
                                                                                                                        };
                                                                                                                    };
                                                                                                                };
                                                                                                            };
                                                                                                        };
                                                                                                    };
                                                                                                };
                                                                                            };
                                                                                        };
                                                                                    };
                                                                                };
                                                                            };
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    }))))))))))))))))))))))))))))))));
    var $author$project$Data$SeatGeek$w3_decode_Geolocation = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeFloat, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeFloat, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F9(function (city0, country0, displayName0, lat0, lon0, metroCode0, postalCode0, range0, state0) {
        return { ad: city0, ae: country0, af: displayName0, am: lat0, aq: lon0, ar: metroCode0, av: postalCode0, dI: range0, ay: state0 };
    })))))))))));
    var $author$project$Data$SeatGeek$w3_decode_Meta = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeInt, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_Geolocation, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F5(function (geolocation0, page0, perPage0, took0, total0) {
        return { c3: geolocation0, dv: page0, dx: perPage0, ea: took0, eb: total0 };
    })))))));
    var $author$project$Data$SeatGeek$w3_decode_Events = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Data$SeatGeek$w3_decode_Meta, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Data$SeatGeek$w3_decode_Event), $lamdera$codecs$Lamdera$Wire3$succeedDecode(F2(function (events0, meta0) {
        return { cX: events0, dr: meta0 };
    }))));
    var $author$project$Route$Events$w3_decode_Data = $author$project$Data$SeatGeek$w3_decode_Events;
    var $author$project$Route$Events$Slug_$w3_decode_Data = $author$project$Data$SeatGeek$w3_decode_Event;
    var $author$project$Route$Index$w3_decode_Data = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode(function (message0) {
        return { bH: message0 };
    }));
    var $author$project$Main$byteDecodePageData = function (route) {
        if (route.$ === 1) {
            return $elm$bytes$Bytes$Decode$fail;
        }
        else {
            switch (route.a.$) {
                case 1:
                    var _v1 = route.a;
                    return $elm$bytes$Bytes$Decode$map_fn($author$project$Main$DataAccount, $author$project$Route$Account$w3_decode_Data);
                case 2:
                    var _v2 = route.a;
                    return $elm$bytes$Bytes$Decode$map_fn($author$project$Main$DataEvents, $author$project$Route$Events$w3_decode_Data);
                case 3:
                    var _v3 = route.a;
                    return $elm$bytes$Bytes$Decode$map_fn($author$project$Main$DataIndex, $author$project$Route$Index$w3_decode_Data);
                default:
                    return $elm$bytes$Bytes$Decode$map_fn($author$project$Main$DataEvents__Slug_, $author$project$Route$Events$Slug_$w3_decode_Data);
            }
        }
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength = function (s) {
        return $elm$bytes$Bytes$Encode$sequence(s);
    };
    var $elm$bytes$Bytes$Encode$F64_fn = function (a, b) {
        return { $: 7, a: a, b: b };
    }, $elm$bytes$Bytes$Encode$F64 = F2($elm$bytes$Bytes$Encode$F64_fn);
    var $elm$bytes$Bytes$Encode$float64 = $elm$bytes$Bytes$Encode$F64;
    var $lamdera$codecs$Lamdera$Wire3$encodeFloat64 = function (f) {
        return $elm$bytes$Bytes$Encode$F64_fn($lamdera$codecs$Lamdera$Wire3$endianness, f);
    };
    var $lamdera$codecs$Lamdera$Wire3$signedToUnsigned = function (i) {
        return (i < 0) ? (((-2) * i) - 1) : (2 * i);
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeInt64 = function (i) {
        var n = $lamdera$codecs$Lamdera$Wire3$signedToUnsigned(i);
        var n0 = _Basics_modBy_fn(256, n);
        var n1 = _Basics_modBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, n));
        var n2 = _Basics_modBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, n)));
        var n3 = _Basics_modBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, n))));
        var ei = function (e) {
            return $elm$bytes$Bytes$Encode$sequence($elm$core$List$map_fn($elm$bytes$Bytes$Encode$unsignedInt8, e));
        };
        return (n <= 215) ? ei(_List_fromArray([n])) : ((n <= 9431) ? ei(_List_fromArray([
            216 + $lamdera$codecs$Lamdera$Wire3$intDivBy_fn(256, n - 216),
            _Basics_modBy_fn(256, n - 216)
        ])) : ((_Utils_cmp(n, 256 * 256) < 0) ? ei(_List_fromArray([252, n1, n0])) : ((_Utils_cmp(n, (256 * 256) * 256) < 0) ? ei(_List_fromArray([253, n2, n1, n0])) : ((_Utils_cmp(n, ((256 * 256) * 256) * 256) < 0) ? ei(_List_fromArray([254, n3, n2, n1, n0])) : $elm$bytes$Bytes$Encode$sequence(_List_fromArray([
            $elm$bytes$Bytes$Encode$unsignedInt8(255),
            $lamdera$codecs$Lamdera$Wire3$encodeFloat64(i)
        ]))))));
    };
    var $elm$bytes$Bytes$Encode$getStringWidth = _Bytes_getStringWidth;
    var $elm$bytes$Bytes$Encode$Utf8_fn = function (a, b) {
        return { $: 9, a: a, b: b };
    }, $elm$bytes$Bytes$Encode$Utf8 = F2($elm$bytes$Bytes$Encode$Utf8_fn);
    var $elm$bytes$Bytes$Encode$string = function (str) {
        return $elm$bytes$Bytes$Encode$Utf8_fn(_Bytes_getStringWidth(str), str);
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeString = function (s) {
        return $elm$bytes$Bytes$Encode$sequence(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeInt64($elm$bytes$Bytes$Encode$getStringWidth(s)),
            $elm$bytes$Bytes$Encode$string(s)
        ]));
    };
    var $author$project$Route$Account$w3_encode_Data = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.bH)
        ]));
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeList_fn = function (enc, s) {
        return $elm$bytes$Bytes$Encode$sequence(_List_Cons($lamdera$codecs$Lamdera$Wire3$encodeInt64($elm$core$List$length(s)), $elm$core$List$map_fn(enc, s)));
    }, $lamdera$codecs$Lamdera$Wire3$encodeList = F2($lamdera$codecs$Lamdera$Wire3$encodeList_fn);
    var $lamdera$codecs$Lamdera$Wire3$encodeBool = function (b) {
        return $elm$bytes$Bytes$Encode$unsignedInt8(function () {
            if (!b) {
                return 0;
            }
            else {
                return 1;
            }
        }());
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeFloat = $lamdera$codecs$Lamdera$Wire3$encodeFloat64;
    var $lamdera$codecs$Lamdera$Wire3$encodeInt = $lamdera$codecs$Lamdera$Wire3$encodeInt64;
    var $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn = function (encVal, s) {
        if (s.$ === 1) {
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $elm$bytes$Bytes$Encode$unsignedInt8(0)
            ]));
        }
        else {
            var v = s.a;
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $elm$bytes$Bytes$Encode$unsignedInt8(1),
                encVal(v)
            ]));
        }
    }, $lamdera$codecs$Lamdera$Wire3$encodeMaybe = F2($lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn);
    var $lamdera$codecs$Lamdera$Wire3$encodeUnit = function (_v0) {
        return $elm$bytes$Bytes$Encode$sequence(_List_Nil);
    };
    var $lamdera$codecs$Lamdera$Wire3$failEncode = function (a) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_Nil);
    };
    var $author$project$Data$SeatGeek$w3_encode_Announcements = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_Nil);
    };
    var $author$project$Data$SeatGeek$w3_encode_EventStats = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.cs),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeList($lamdera$codecs$Lamdera$Wire3$encodeInt), w3_rec_var0.cR),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.c6),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.dl),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.dm),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.dn),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.$7),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.dp),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.dq),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.ee)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Colors = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($lamdera$codecs$Lamdera$Wire3$encodeString, w3_rec_var0.cm),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.da),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($lamdera$codecs$Lamdera$Wire3$encodeString, w3_rec_var0.z)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Division = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.af),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cM),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.cN),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeString, w3_rec_var0.aw),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeString, w3_rec_var0.k),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.d0)
        ]));
    };
    var $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8 = $elm$bytes$Bytes$Encode$unsignedInt8;
    var $author$project$Data$SeatGeek$w3_encode_GenerationType = function (w3v) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_SourceType = function (w3v) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_DocumentSource = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $author$project$Data$SeatGeek$w3_encode_GenerationType(w3_rec_var0.c1),
            $author$project$Data$SeatGeek$w3_encode_SourceType(w3_rec_var0.dS)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_GenreImages = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cu),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cv),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cB),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cC),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cD),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cE),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.c_),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.c$),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.aj),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.df),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.dg),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.dh),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.dt),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.dT),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.d1),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.d2),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.d3),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.d4),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.d5),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ec)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Genre = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $author$project$Data$SeatGeek$w3_encode_DocumentSource(w3_rec_var0.ag),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.g),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ak),
            $author$project$Data$SeatGeek$w3_encode_GenreImages(w3_rec_var0.al),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.he),
            $lamdera$codecs$Lamdera$Wire3$encodeBool(w3_rec_var0.z),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.k)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Location = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeFloat(w3_rec_var0.am),
            $lamdera$codecs$Lamdera$Wire3$encodeFloat(w3_rec_var0.aq)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_PerformerImages = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.aj)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_PerformerStats = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.cU)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_UpperEnum = function (w3v) {
        var v0 = w3v;
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
            $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Taxonomy = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($author$project$Data$SeatGeek$w3_encode_DocumentSource, w3_rec_var0.ag),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.g),
            $author$project$Data$SeatGeek$w3_encode_UpperEnum(w3_rec_var0.he),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.dw),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.dJ)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Performer = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeBool, w3_rec_var0.ct),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($author$project$Data$SeatGeek$w3_encode_Colors, w3_rec_var0.cy),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Data$SeatGeek$w3_encode_Division, w3_rec_var0.cO),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeList($author$project$Data$SeatGeek$w3_encode_Genre), w3_rec_var0.c2),
            $lamdera$codecs$Lamdera$Wire3$encodeBool(w3_rec_var0.ah),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeBool, w3_rec_var0.c7),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeInt, w3_rec_var0.c8),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.g),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ak),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeString, w3_rec_var0.db),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeString, w3_rec_var0.dc),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.dd),
            $author$project$Data$SeatGeek$w3_encode_PerformerImages(w3_rec_var0.al),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($author$project$Data$SeatGeek$w3_encode_Location, w3_rec_var0.ap),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.he),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.as),
            $author$project$Data$SeatGeek$w3_encode_UpperEnum(w3_rec_var0.dy),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.y),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeBool, w3_rec_var0.z),
            $lamdera$codecs$Lamdera$Wire3$encodeFloat(w3_rec_var0.A),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.aw),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.k),
            $author$project$Data$SeatGeek$w3_encode_PerformerStats(w3_rec_var0.az),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Data$SeatGeek$w3_encode_Taxonomy, w3_rec_var0.aA),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.C)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Status = function (w3v) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Venue = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeUnit(w3_rec_var0.ab),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cl),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.cx),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ad),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ae),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cL),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cY),
            $lamdera$codecs$Lamdera$Wire3$encodeBool(w3_rec_var0.ah),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.g),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($lamdera$codecs$Lamdera$Wire3$failEncode, w3_rec_var0.an),
            $author$project$Data$SeatGeek$w3_encode_Location(w3_rec_var0.ap),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.ar),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.he),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.du),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.as),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.y),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.av),
            $lamdera$codecs$Lamdera$Wire3$encodeFloat(w3_rec_var0.A),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.k),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ay),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.d8),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.C)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Event = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeUnit(w3_rec_var0.ab),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cp),
            $author$project$Data$SeatGeek$w3_encode_Announcements(w3_rec_var0.cq),
            $lamdera$codecs$Lamdera$Wire3$encodeBool(w3_rec_var0.cz),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.cA),
            $lamdera$codecs$Lamdera$Wire3$encodeBool(w3_rec_var0.cF),
            function (t) {
                return $lamdera$codecs$Lamdera$Wire3$encodeInt($elm$time$Time$posixToMillis(t));
            }(w3_rec_var0.cG),
            $lamdera$codecs$Lamdera$Wire3$encodeBool(w3_rec_var0.cH),
            function (t) {
                return $lamdera$codecs$Lamdera$Wire3$encodeInt($elm$time$Time$posixToMillis(t));
            }(w3_rec_var0.cI),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.gR),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($lamdera$codecs$Lamdera$Wire3$failEncode, w3_rec_var0.cQ),
            $lamdera$codecs$Lamdera$Wire3$encodeUnit(w3_rec_var0.cT),
            $lamdera$codecs$Lamdera$Wire3$encodeUnit(w3_rec_var0.cV),
            $author$project$Data$SeatGeek$w3_encode_UpperEnum(w3_rec_var0.cW),
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($lamdera$codecs$Lamdera$Wire3$encodeBool, w3_rec_var0.c0),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.g),
            $lamdera$codecs$Lamdera$Wire3$encodeBool(w3_rec_var0.dj),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($lamdera$codecs$Lamdera$Wire3$failEncode, w3_rec_var0.an),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Data$SeatGeek$w3_encode_Performer, w3_rec_var0.dz),
            $lamdera$codecs$Lamdera$Wire3$encodeFloat(w3_rec_var0.y),
            $lamdera$codecs$Lamdera$Wire3$encodeFloat(w3_rec_var0.A),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.dP),
            $author$project$Data$SeatGeek$w3_encode_EventStats(w3_rec_var0.az),
            $author$project$Data$SeatGeek$w3_encode_Status(w3_rec_var0.dV),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Data$SeatGeek$w3_encode_Taxonomy, w3_rec_var0.aA),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($lamdera$codecs$Lamdera$Wire3$failEncode, w3_rec_var0.d6),
            $lamdera$codecs$Lamdera$Wire3$encodeBool(w3_rec_var0.d7),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.be),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.C),
            $author$project$Data$SeatGeek$w3_encode_Venue(w3_rec_var0.ed),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ef)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Geolocation = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ad),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ae),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.af),
            $lamdera$codecs$Lamdera$Wire3$encodeFloat(w3_rec_var0.am),
            $lamdera$codecs$Lamdera$Wire3$encodeFloat(w3_rec_var0.aq),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ar),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.av),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.dI),
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.ay)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Meta = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $author$project$Data$SeatGeek$w3_encode_Geolocation(w3_rec_var0.c3),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.dv),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.dx),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.ea),
            $lamdera$codecs$Lamdera$Wire3$encodeInt(w3_rec_var0.eb)
        ]));
    };
    var $author$project$Data$SeatGeek$w3_encode_Events = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Data$SeatGeek$w3_encode_Event, w3_rec_var0.cX),
            $author$project$Data$SeatGeek$w3_encode_Meta(w3_rec_var0.dr)
        ]));
    };
    var $author$project$Route$Events$w3_encode_Data = $author$project$Data$SeatGeek$w3_encode_Events;
    var $author$project$Route$Events$Slug_$w3_encode_Data = $author$project$Data$SeatGeek$w3_encode_Event;
    var $author$project$Route$Index$w3_encode_Data = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeString(w3_rec_var0.bH)
        ]));
    };
    var $author$project$ErrorPage$w3_encode_ErrorPage = function (w3v) {
        if (w3v.$ === 1) {
            var v0 = w3v.a;
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
                $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
            ]));
        }
        else {
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1)
            ]));
        }
    };
    var $author$project$Main$byteEncodePageData = function (pageData) {
        switch (pageData.$) {
            case 1:
                var thisPageData = pageData.a;
                return $author$project$ErrorPage$w3_encode_ErrorPage(thisPageData);
            case 0:
                return $elm$bytes$Bytes$Encode$unsignedInt8(0);
            case 2:
                var thisPageData = pageData.a;
                return $author$project$Route$Account$w3_encode_Data(thisPageData);
            case 3:
                var thisPageData = pageData.a;
                return $author$project$Route$Events$w3_encode_Data(thisPageData);
            case 4:
                var thisPageData = pageData.a;
                return $author$project$Route$Index$w3_encode_Data(thisPageData);
            default:
                var thisPageData = pageData.a;
                return $author$project$Route$Events$Slug_$w3_encode_Data(thisPageData);
        }
    };
    var $author$project$Site$config = {
        f9: "https://flaminglesocial.com/",
        aI: $author$project$DataSource$succeed($author$project$Site$head)
    };
    var $author$project$Main$Data404NotFoundPage____ = { $: 0 };
    var $author$project$Server$Response$map_fn = function (mapFn, pageServerResponse) {
        switch (pageServerResponse.$) {
            case 0:
                var response = pageServerResponse.a;
                var data = pageServerResponse.b;
                return $author$project$PageServerResponse$RenderPage_fn(response, mapFn(data));
            case 1:
                var serverResponse = pageServerResponse.a;
                return $author$project$PageServerResponse$ServerResponse(serverResponse);
            default:
                var error = pageServerResponse.a;
                var response = pageServerResponse.b;
                return $author$project$PageServerResponse$ErrorPage_fn(error, response);
        }
    }, $author$project$Server$Response$map = F2($author$project$Server$Response$map_fn);
    var $author$project$Server$Response$mapError_fn = function (mapFn, pageServerResponse) {
        switch (pageServerResponse.$) {
            case 0:
                var response = pageServerResponse.a;
                var data = pageServerResponse.b;
                return $author$project$PageServerResponse$RenderPage_fn(response, data);
            case 1:
                var serverResponse = pageServerResponse.a;
                return $author$project$PageServerResponse$ServerResponse(serverResponse);
            default:
                var error = pageServerResponse.a;
                var response = pageServerResponse.b;
                return $author$project$PageServerResponse$ErrorPage_fn(mapFn(error), response);
        }
    }, $author$project$Server$Response$mapError = F2($author$project$Server$Response$mapError_fn);
    var $author$project$Main$dataForRoute = function (route) {
        if (route.$ === 1) {
            return $author$project$DataSource$succeed($author$project$Server$Response$mapError_fn($elm$core$Basics$never, $author$project$Server$Response$withStatusCode_fn(404, $author$project$Server$Response$render($author$project$Main$Data404NotFoundPage____))));
        }
        else {
            switch (route.a.$) {
                case 1:
                    var _v1 = route.a;
                    return $author$project$DataSource$map_fn($author$project$Server$Response$map($author$project$Main$DataAccount), $author$project$Route$Account$route.m({}));
                case 2:
                    var _v2 = route.a;
                    return $author$project$DataSource$map_fn($author$project$Server$Response$map($author$project$Main$DataEvents), $author$project$Route$Events$route.m({}));
                case 3:
                    var _v3 = route.a;
                    return $author$project$DataSource$map_fn($author$project$Server$Response$map($author$project$Main$DataIndex), $author$project$Route$Index$route.m({}));
                default:
                    var routeParams = route.a.a;
                    return $author$project$DataSource$map_fn($author$project$Server$Response$map($author$project$Main$DataEvents__Slug_), $author$project$Route$Events$Slug_$route.m(routeParams));
            }
        }
    };
    var $author$project$Shared$w3_decode_Data = $lamdera$codecs$Lamdera$Wire3$decodeUnit;
    var $author$project$ErrorPage$InternalError = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$ErrorPage$NotFound = { $: 0 };
    var $author$project$ErrorPage$w3_decode_ErrorPage = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$ErrorPage$InternalError));
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$ErrorPage$NotFound);
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Main$w3_decode_PageData = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$Data404NotFoundPage____);
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Route$Account$w3_decode_Data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$DataAccount));
            case 2:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$ErrorPage$w3_decode_ErrorPage, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$DataErrorPage____));
            case 3:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Route$Events$w3_decode_Data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$DataEvents));
            case 4:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Route$Events$Slug_$w3_decode_Data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$DataEvents__Slug_));
            case 5:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Route$Index$w3_decode_Data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Main$DataIndex));
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Pages$Internal$NotFoundReason$NotPrerendered_fn = function (a, b) {
        return { $: 1, a: a, b: b };
    }, $author$project$Pages$Internal$NotFoundReason$NotPrerendered = F2($author$project$Pages$Internal$NotFoundReason$NotPrerendered_fn);
    var $author$project$Pages$Internal$NotFoundReason$NotPrerenderedOrHandledByFallback_fn = function (a, b) {
        return { $: 2, a: a, b: b };
    }, $author$project$Pages$Internal$NotFoundReason$NotPrerenderedOrHandledByFallback = F2($author$project$Pages$Internal$NotFoundReason$NotPrerenderedOrHandledByFallback_fn);
    var $author$project$Pages$Internal$NotFoundReason$UnhandledServerRoute = function (a) {
        return { $: 3, a: a };
    };
    var $lamdera$codecs$Lamdera$Wire3$decodePair_fn = function (c_a, c_b) {
        return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(c_b, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(c_a, $elm$bytes$Bytes$Decode$succeed(F2(function (a, b) {
            return _Utils_Tuple2(a, b);
        }))));
    }, $lamdera$codecs$Lamdera$Wire3$decodePair = F2($lamdera$codecs$Lamdera$Wire3$decodePair_fn);
    var $author$project$Pages$Internal$NotFoundReason$w3_decode_Record = $lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$decodePair_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$decodeString));
    var $author$project$Pages$Internal$RoutePattern$Optional = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Internal$RoutePattern$OptionalSplat = { $: 2 };
    var $author$project$Pages$Internal$RoutePattern$RequiredSplat = { $: 1 };
    var $author$project$Pages$Internal$RoutePattern$w3_decode_Ending = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$Optional));
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$OptionalSplat);
            case 2:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$RequiredSplat);
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Pages$Internal$RoutePattern$DynamicSegment = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Pages$Internal$RoutePattern$StaticSegment = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Pages$Internal$RoutePattern$w3_decode_Segment = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$DynamicSegment));
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$RoutePattern$StaticSegment));
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Pages$Internal$RoutePattern$w3_decode_RoutePattern = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Pages$Internal$RoutePattern$w3_decode_Segment), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeMaybe($author$project$Pages$Internal$RoutePattern$w3_decode_Ending), $lamdera$codecs$Lamdera$Wire3$succeedDecode(F2(function (ending0, segments0) {
        return { bv: ending0, bR: segments0 };
    }))));
    var $author$project$Pages$Internal$NotFoundReason$w3_decode_ModuleContext = $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$RoutePattern$w3_decode_RoutePattern, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($lamdera$codecs$Lamdera$Wire3$decodeString), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_Record, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F3(function (matchedRouteParams0, moduleName0, routePattern0) {
        return { b9: matchedRouteParams0, fD: moduleName0, fH: routePattern0 };
    })))));
    var $author$project$Pages$Internal$NotFoundReason$w3_decode_NotFoundReason = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        switch (w3v) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$NotFoundReason$NoMatchingRoute);
            case 1:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Pages$Internal$NotFoundReason$w3_decode_Record), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_ModuleContext, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$NotFoundReason$NotPrerendered)));
            case 2:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeList($author$project$Pages$Internal$NotFoundReason$w3_decode_Record), $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_ModuleContext, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$NotFoundReason$NotPrerenderedOrHandledByFallback)));
            case 3:
                return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_ModuleContext, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$NotFoundReason$UnhandledServerRoute));
            default:
                return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Path$w3_decode_Path = $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
        if (!w3v) {
            return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($elm$core$Basics$identity));
        }
        else {
            return $lamdera$codecs$Lamdera$Wire3$failDecode;
        }
    }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    var $author$project$Pages$Internal$ResponseSketch$w3_decode_ResponseSketch_fn = function (w3_x_c_data, w3_x_c_shared) {
        return $elm$bytes$Bytes$Decode$andThen_fn(function (w3v) {
            switch (w3v) {
                case 0:
                    return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(w3_x_c_shared, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(w3_x_c_data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$ResponseSketch$HotUpdate)));
                case 1:
                    return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Pages$Internal$NotFoundReason$w3_decode_NotFoundReason, $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($author$project$Path$w3_decode_Path, $lamdera$codecs$Lamdera$Wire3$succeedDecode(F2(function (path0, reason0) {
                        return { cd: path0, dK: reason0 };
                    })))), $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$ResponseSketch$NotFound));
                case 2:
                    return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn($lamdera$codecs$Lamdera$Wire3$decodeString, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$ResponseSketch$Redirect));
                case 3:
                    return $lamdera$codecs$Lamdera$Wire3$andMapDecode_fn(w3_x_c_data, $lamdera$codecs$Lamdera$Wire3$succeedDecode($author$project$Pages$Internal$ResponseSketch$RenderPage));
                default:
                    return $lamdera$codecs$Lamdera$Wire3$failDecode;
            }
        }, $lamdera$codecs$Lamdera$Wire3$decodeUnsignedInt8);
    }, $author$project$Pages$Internal$ResponseSketch$w3_decode_ResponseSketch = F2($author$project$Pages$Internal$ResponseSketch$w3_decode_ResponseSketch_fn);
    var $author$project$Main$decodeResponse = $author$project$Pages$Internal$ResponseSketch$w3_decode_ResponseSketch_fn($author$project$Main$w3_decode_PageData, $author$project$Shared$w3_decode_Data);
    var $author$project$Shared$w3_encode_Data = $lamdera$codecs$Lamdera$Wire3$encodeUnit;
    var $author$project$Main$w3_encode_PageData = function (w3v) {
        switch (w3v.$) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0)
                ]));
            case 2:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1),
                    $author$project$Route$Account$w3_encode_Data(v0)
                ]));
            case 1:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(2),
                    $author$project$ErrorPage$w3_encode_ErrorPage(v0)
                ]));
            case 3:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(3),
                    $author$project$Route$Events$w3_encode_Data(v0)
                ]));
            case 5:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(4),
                    $author$project$Route$Events$Slug_$w3_encode_Data(v0)
                ]));
            default:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(5),
                    $author$project$Route$Index$w3_encode_Data(v0)
                ]));
        }
    };
    var $lamdera$codecs$Lamdera$Wire3$encodePair_fn = function (c_a, c_b, _v0) {
        var a = _v0.a;
        var b = _v0.b;
        return $elm$bytes$Bytes$Encode$sequence(_List_fromArray([
            c_a(a),
            c_b(b)
        ]));
    }, $lamdera$codecs$Lamdera$Wire3$encodePair = F3($lamdera$codecs$Lamdera$Wire3$encodePair_fn);
    var $author$project$Pages$Internal$NotFoundReason$w3_encode_Record_a0 = A2($lamdera$codecs$Lamdera$Wire3$encodePair, $lamdera$codecs$Lamdera$Wire3$encodeString, $lamdera$codecs$Lamdera$Wire3$encodeString), $author$project$Pages$Internal$NotFoundReason$w3_encode_Record = $lamdera$codecs$Lamdera$Wire3$encodeList($author$project$Pages$Internal$NotFoundReason$w3_encode_Record_a0);
    var $author$project$Pages$Internal$RoutePattern$w3_encode_Ending = function (w3v) {
        switch (w3v.$) {
            case 0:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
                    $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
                ]));
            case 2:
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1)
                ]));
            default:
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(2)
                ]));
        }
    };
    var $author$project$Pages$Internal$RoutePattern$w3_encode_Segment = function (w3v) {
        if (w3v.$ === 1) {
            var v0 = w3v.a;
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
                $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
            ]));
        }
        else {
            var v0 = w3v.a;
            return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1),
                $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
            ]));
        }
    };
    var $author$project$Pages$Internal$RoutePattern$w3_encode_RoutePattern = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeMaybe_fn($author$project$Pages$Internal$RoutePattern$w3_encode_Ending, w3_rec_var0.bv),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Pages$Internal$RoutePattern$w3_encode_Segment, w3_rec_var0.bR)
        ]));
    };
    var $author$project$Pages$Internal$NotFoundReason$w3_encode_ModuleContext = function (w3_rec_var0) {
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Pages$Internal$NotFoundReason$w3_encode_Record_a0, w3_rec_var0.b9),
            $lamdera$codecs$Lamdera$Wire3$encodeList_fn($lamdera$codecs$Lamdera$Wire3$encodeString, w3_rec_var0.fD),
            $author$project$Pages$Internal$RoutePattern$w3_encode_RoutePattern(w3_rec_var0.fH)
        ]));
    };
    var $author$project$Pages$Internal$NotFoundReason$w3_encode_NotFoundReason = function (w3v) {
        switch (w3v.$) {
            case 0:
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0)
                ]));
            case 1:
                var v0 = w3v.a;
                var v1 = w3v.b;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1),
                    $author$project$Pages$Internal$NotFoundReason$w3_encode_ModuleContext(v0),
                    $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Pages$Internal$NotFoundReason$w3_encode_Record, v1)
                ]));
            case 2:
                var v0 = w3v.a;
                var v1 = w3v.b;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(2),
                    $author$project$Pages$Internal$NotFoundReason$w3_encode_ModuleContext(v0),
                    $lamdera$codecs$Lamdera$Wire3$encodeList_fn($author$project$Pages$Internal$NotFoundReason$w3_encode_Record, v1)
                ]));
            default:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(3),
                    $author$project$Pages$Internal$NotFoundReason$w3_encode_ModuleContext(v0)
                ]));
        }
    };
    var $author$project$Path$w3_encode_Path = function (w3v) {
        var v0 = w3v;
        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
            $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
            $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
        ]));
    };
    var $author$project$Pages$Internal$ResponseSketch$w3_encode_ResponseSketch_fn = function (w3_x_c_data, w3_x_c_shared, w3v) {
        switch (w3v.$) {
            case 1:
                var v0 = w3v.a;
                var v1 = w3v.b;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(0),
                    w3_x_c_data(v0),
                    w3_x_c_shared(v1)
                ]));
            case 3:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(1),
                    function (w3_rec_var0) {
                        return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                            $author$project$Path$w3_encode_Path(w3_rec_var0.cd),
                            $author$project$Pages$Internal$NotFoundReason$w3_encode_NotFoundReason(w3_rec_var0.dK)
                        ]));
                    }(v0)
                ]));
            case 2:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(2),
                    $lamdera$codecs$Lamdera$Wire3$encodeString(v0)
                ]));
            default:
                var v0 = w3v.a;
                return $lamdera$codecs$Lamdera$Wire3$encodeSequenceWithoutLength(_List_fromArray([
                    $lamdera$codecs$Lamdera$Wire3$encodeUnsignedInt8(3),
                    w3_x_c_data(v0)
                ]));
        }
    }, $author$project$Pages$Internal$ResponseSketch$w3_encode_ResponseSketch = F3($author$project$Pages$Internal$ResponseSketch$w3_encode_ResponseSketch_fn);
    var $author$project$Main$encodeResponse_a0 = $author$project$Main$w3_encode_PageData, $author$project$Main$encodeResponse_a1 = $author$project$Shared$w3_encode_Data, $author$project$Main$encodeResponse = A2($author$project$Pages$Internal$ResponseSketch$w3_encode_ResponseSketch, $author$project$Main$encodeResponse_a0, $author$project$Main$encodeResponse_a1);
    var $elm$http$Http$BadBody = function (a) {
        return { $: 4, a: a };
    };
    var $elm$http$Http$BadStatus = function (a) {
        return { $: 3, a: a };
    };
    var $elm$http$Http$BadUrl = function (a) {
        return { $: 0, a: a };
    };
    var $elm$http$Http$NetworkError = { $: 2 };
    var $elm$http$Http$Timeout = { $: 1 };
    var $elm$http$Http$BadStatus__fn = function (a, b) {
        return { $: 3, a: a, b: b };
    }, $elm$http$Http$BadStatus_ = F2($elm$http$Http$BadStatus__fn);
    var $elm$http$Http$BadUrl_ = function (a) {
        return { $: 0, a: a };
    };
    var $elm$http$Http$GoodStatus__fn = function (a, b) {
        return { $: 4, a: a, b: b };
    }, $elm$http$Http$GoodStatus_ = F2($elm$http$Http$GoodStatus__fn);
    var $elm$http$Http$NetworkError_ = { $: 2 };
    var $elm$http$Http$Receiving = function (a) {
        return { $: 1, a: a };
    };
    var $elm$http$Http$Sending = function (a) {
        return { $: 0, a: a };
    };
    var $elm$http$Http$Timeout_ = { $: 1 };
    var $elm$core$Maybe$isJust = function (maybe) {
        if (!maybe.$) {
            return true;
        }
        else {
            return false;
        }
    };
    var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
    var $elm$http$Http$bytesResolver_a0 = "arraybuffer", $elm$http$Http$bytesResolver_a1 = _Http_toDataView, $elm$http$Http$bytesResolver = A2(_Http_expect, $elm$http$Http$bytesResolver_a0, $elm$http$Http$bytesResolver_a1);
    var $author$project$Pages$Internal$String$chopForwardSlashes_a0 = $author$project$Pages$Internal$String$chopStart("/"), $author$project$Pages$Internal$String$chopForwardSlashes_a1 = $author$project$Pages$Internal$String$chopEnd("/"), $author$project$Pages$Internal$String$chopForwardSlashes = A2($elm$core$Basics$composeR, $author$project$Pages$Internal$String$chopForwardSlashes_a0, $author$project$Pages$Internal$String$chopForwardSlashes_a1);
    var $author$project$Main$decodeBytes_fn = function (bytesDecoder, items) {
        return $elm$core$Result$fromMaybe_fn("Decoding error", $elm$bytes$Bytes$Decode$decode_fn(bytesDecoder, items));
    }, $author$project$Main$decodeBytes = F2($author$project$Main$decodeBytes_fn);
    var $elm$http$Http$emptyBody = _Http_emptyBody;
    var $elm$http$Http$stringBody = _Http_pair;
    var $elm$core$Task$fail = _Scheduler_fail;
    var $elm$http$Http$resultToTask = function (result) {
        if (!result.$) {
            var a = result.a;
            return $elm$core$Task$succeed(a);
        }
        else {
            var x = result.a;
            return $elm$core$Task$fail(x);
        }
    };
    var $elm$http$Http$task = function (r) {
        return _Http_toTask_fn(0, $elm$http$Http$resultToTask, { gD: false, er: r.er, eD: r.hC, eI: r.eI, eW: r.eW, hR: r.hR, gA: $elm$core$Maybe$Nothing, C: r.C });
    };
    var $author$project$Main$fetchPageData_fn = function (url, details) {
        return _Scheduler_andThen_fn(function (_v2) {
            var response = _v2.b;
            if (response.$ === 2) {
                var location = response.a;
                return $author$project$Main$fetchPageData_fn(_Utils_update(url, { cd: location }), $elm$core$Maybe$Nothing);
            }
            else {
                return $elm$core$Task$succeed(_Utils_Tuple2(url, response));
            }
        }, $elm$http$Http$task({
            er: $elm$core$Maybe$withDefault_fn($elm$http$Http$emptyBody, $elm$core$Maybe$map_fn(function (justDetails) {
                return _Http_pair_fn(justDetails.gP, justDetails.er);
            }, details)),
            eI: _List_Nil,
            eW: $elm$core$Maybe$withDefault_fn("GET", $elm$core$Maybe$map_fn(function (_v0) {
                return "POST";
            }, details)),
            hC: _Http_expect_fn($elm$http$Http$bytesResolver_a0, $elm$http$Http$bytesResolver_a1, function (response) {
                switch (response.$) {
                    case 0:
                        var url_ = response.a;
                        return $elm$core$Result$Err($elm$http$Http$BadUrl(url_));
                    case 1:
                        return $elm$core$Result$Err($elm$http$Http$Timeout);
                    case 2:
                        return $elm$core$Result$Err($elm$http$Http$NetworkError);
                    case 3:
                        var metadata = response.a;
                        return $elm$core$Result$Err($elm$http$Http$BadStatus(metadata.aa));
                    default:
                        var body = response.b;
                        return $elm$core$Result$map_fn(function (okResponse) {
                            return _Utils_Tuple2(url, okResponse);
                        }, $elm$core$Result$mapError_fn($elm$http$Http$BadBody, $author$project$Main$decodeBytes_fn($author$project$Main$decodeResponse, body)));
                }
            }),
            hR: $elm$core$Maybe$Nothing,
            C: _String_append_fn("/", $elm$core$String$join_fn("/", function (l) {
                return _Utils_ap(l, _List_fromArray(["content.dat"]));
            }($elm$core$List$filter_fn($elm$core$Basics$neq(""), $elm$core$String$split_fn("/", $elm$core$Basics$composeR_fn($author$project$Pages$Internal$String$chopForwardSlashes_a0, $author$project$Pages$Internal$String$chopForwardSlashes_a1, url.cd))))))
        }));
    }, $author$project$Main$fetchPageData = F2($author$project$Main$fetchPageData_fn);
    var $author$project$Effect$Cmd = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Effect$fromCmd = $author$project$Effect$Cmd;
    var $author$project$Main$fromJsPort = _Platform_incomingPort("fromJsPort", $elm$json$Json$Decode$value);
    var $author$project$ApiRoute$getGlobalHeadTagsDataSource = function (_v0) {
        var handler = _v0;
        return handler.eH;
    };
    var $author$project$Main$globalHeadTags = $author$project$DataSource$map_fn($elm$core$List$concat, $elm$core$List$foldr_fn($author$project$DataSource$combine_a0, $author$project$DataSource$combine_a1, _List_Cons($author$project$Site$config.aI, $elm$core$List$filterMap_fn($author$project$ApiRoute$getGlobalHeadTagsDataSource, $author$project$Api$routes_fn($author$project$Main$getStaticRoutes, $author$project$HtmlPrinter$htmlToString)))));
    var $author$project$Main$gotBatchSub = _Platform_incomingPort("gotBatchSub", $elm$json$Json$Decode$value);
    var $author$project$Main$stringToString = function (string) {
        return "\"" + (string + "\"");
    };
    var $author$project$Main$handleRoute = function (maybeRoute) {
        if (maybeRoute.$ === 1) {
            return $author$project$DataSource$succeed($elm$core$Maybe$Nothing);
        }
        else {
            switch (maybeRoute.a.$) {
                case 1:
                    var _v1 = maybeRoute.a;
                    return A3($author$project$Route$Account$route.fV, {
                        fD: _List_fromArray(["Account"]),
                        fH: {
                            bv: $elm$core$Maybe$Nothing,
                            bR: _List_fromArray([
                                $author$project$Pages$Internal$RoutePattern$StaticSegment("account")
                            ])
                        }
                    }, function (param) {
                        return _List_Nil;
                    }, {});
                case 2:
                    var _v2 = maybeRoute.a;
                    return A3($author$project$Route$Events$route.fV, {
                        fD: _List_fromArray(["Events"]),
                        fH: {
                            bv: $elm$core$Maybe$Nothing,
                            bR: _List_fromArray([
                                $author$project$Pages$Internal$RoutePattern$StaticSegment("events")
                            ])
                        }
                    }, function (param) {
                        return _List_Nil;
                    }, {});
                case 3:
                    var _v3 = maybeRoute.a;
                    return A3($author$project$Route$Index$route.fV, {
                        fD: _List_fromArray(["Index"]),
                        fH: { bv: $elm$core$Maybe$Nothing, bR: _List_Nil }
                    }, function (param) {
                        return _List_Nil;
                    }, {});
                default:
                    var routeParams = maybeRoute.a.a;
                    return A3($author$project$Route$Events$Slug_$route.fV, {
                        fD: _List_fromArray(["Events", "Slug_"]),
                        fH: {
                            bv: $elm$core$Maybe$Nothing,
                            bR: _List_fromArray([
                                $author$project$Pages$Internal$RoutePattern$StaticSegment("events"),
                                $author$project$Pages$Internal$RoutePattern$DynamicSegment("slug")
                            ])
                        }
                    }, function (param) {
                        return _List_fromArray([
                            _Utils_Tuple2("slug", $author$project$Main$stringToString(param.k))
                        ]);
                    }, routeParams);
            }
        }
    };
    var $lamdera$codecs$Lamdera$Wire3$decodeBytes_ = _LamderaCodecs_decodeBytes;
    var $author$project$Main$hotReloadData = _Platform_incomingPort("hotReloadData", $lamdera$codecs$Lamdera$Wire3$decodeBytes_);
    var $author$project$Main$ModelAccount = function (a) {
        return { $: 0, a: a };
    };
    var $author$project$Main$ModelErrorPage____ = function (a) {
        return { $: 4, a: a };
    };
    var $author$project$Main$ModelEvents = function (a) {
        return { $: 1, a: a };
    };
    var $author$project$Main$ModelEvents__Slug_ = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Main$ModelIndex = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Main$MsgAccount = function (a) {
        return { $: 3, a: a };
    };
    var $author$project$Main$MsgErrorPage____ = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Main$MsgEvents = function (a) {
        return { $: 4, a: a };
    };
    var $author$project$Main$MsgEvents__Slug_ = function (a) {
        return { $: 6, a: a };
    };
    var $author$project$Main$MsgIndex = function (a) {
        return { $: 5, a: a };
    };
    var $author$project$Effect$Batch = function (a) {
        return { $: 2, a: a };
    };
    var $author$project$Effect$batch = $author$project$Effect$Batch;
    var $author$project$ErrorPage$init = function (errPage) {
        return _Utils_Tuple2({ br: 0 }, $author$project$Effect$none);
    };
    var $author$project$Effect$map_fn = function (fn, effect) {
        switch (effect.$) {
            case 0:
                return $author$project$Effect$None;
            case 1:
                var cmd = effect.a;
                return $author$project$Effect$Cmd(_Platform_map_fn(fn, cmd));
            default:
                var list = effect.a;
                return $author$project$Effect$Batch($elm$core$List$map_fn($author$project$Effect$map(fn), list));
        }
    }, $author$project$Effect$map = F2($author$project$Effect$map_fn);
    var $elm$core$Maybe$map2_fn = function (func, ma, mb) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                return $elm$core$Maybe$Just(A2(func, a, b));
            }
        }
    }, $elm$core$Maybe$map2_fn_unwrapped = function (func, ma, mb) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                return $elm$core$Maybe$Just(func(a, b));
            }
        }
    }, $elm$core$Maybe$map2 = F3($elm$core$Maybe$map2_fn);
    var $elm$core$Tuple$mapBoth_fn = function (funcA, funcB, _v0) {
        var x = _v0.a;
        var y = _v0.b;
        return _Utils_Tuple2(funcA(x), funcB(y));
    }, $elm$core$Tuple$mapBoth = F3($elm$core$Tuple$mapBoth_fn);
    var $author$project$ErrorPage$notFound = $author$project$ErrorPage$NotFound;
    var $author$project$Shared$data = $author$project$DataSource$succeed(0);
    var $author$project$Shared$init_fn = function (flags, maybePagePath) {
        return _Utils_Tuple2({ bT: false }, $author$project$Effect$none);
    }, $author$project$Shared$init = F2($author$project$Shared$init_fn);
    var $author$project$Shared$subscriptions_fn = function (_v0, _v1) {
        return $elm$core$Platform$Sub$none;
    }, $author$project$Shared$subscriptions = F2($author$project$Shared$subscriptions_fn);
    var $author$project$Shared$update_fn = function (msg, model) {
        if (!msg.$) {
            var globalMsg = msg.a;
            return _Utils_Tuple2(model, $author$project$Effect$none);
        }
        else {
            return _Utils_Tuple2(_Utils_update(model, { bT: !model.bT }), $author$project$Effect$none);
        }
    }, $author$project$Shared$update = F2($author$project$Shared$update_fn);
    var $elm$html$Html$details = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "details"), $elm$html$Html$details_fn = $elm$html$Html$details.a2;
    var $author$project$Component$Icon$outlineBell = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "h-6 w-6"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "none"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 24 24"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$stroke_a0, "currentColor"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinecap_a0, "round"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinejoin_a0, "round"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeWidth_a0, "2"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9")
        ]), _List_Nil)
    ]));
    var $elm$html$Html$summary = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "summary"), $elm$html$Html$summary_fn = $elm$html$Html$summary.a2;
    var $elm$html$Html$Attributes$tabindex = function (n) {
        return _VirtualDom_attribute_fn("tabIndex", $elm$core$String$fromInt(n));
    };
    var $author$project$View$accountSection = $elm$html$Html$div_fn(_List_fromArray([
        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative z-10 hidden lg:ml-4 lg:flex lg:items-center")
    ]), true ? _List_fromArray([
        $elm$html$Html$a_fn(_List_fromArray([
            $elm$html$Html$Attributes$href("#"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-shrink-0 relative self-center inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white opacity-60 border border-white border-opacity-50 transition from-rose-500 to-fuchsia-500"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "hover:opacity-100 hover:text-opacity-100 hover:border-fuchsia-500 hover:bg-gradient-to-tl"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "focus:opacity-100 focus:text-opacity-100 focus:border-fuchsia-500 focus:bg-gradient-to-l focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500")
        ]), _List_fromArray([
            $elm$html$Html$text("Account")
        ]))
    ]) : _List_fromArray([
        $elm$html$Html$button_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "button"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-shrink-0 bg-neutral-900 p-1 opacity-40 rounded-full hover:opacity-50 focus:ring-2 focus:ring-offset-2 ring-offset-neutral-900 ring-fuchsia-500")
        ]), _List_fromArray([
            $elm$html$Html$span_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
            ]), _List_fromArray([
                $elm$html$Html$text("View notifications")
            ])),
            $author$project$Component$Icon$outlineBell
        ])),
        $elm$html$Html$details_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "ml-4 relative flex-shrink-0 cursor-pointer")
        ]), _List_fromArray([
            $elm$html$Html$summary_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "bg-neutral-900 rounded-full flex text-sm focus:ring-2 focus:ring-offset-2 ring-offset-neutral-900 ring-fuchsia-500"),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "user-menu-button"),
                $elm$virtual_dom$VirtualDom$attribute_fn("aria-expanded", "false"),
                $elm$virtual_dom$VirtualDom$attribute_fn("aria-haspopup", "true")
            ]), _List_fromArray([
                $elm$html$Html$span_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                ]), _List_fromArray([
                    $elm$html$Html$text("Open user menu")
                ])),
                $elm$html$Html$img_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "h-8 w-8 rounded-full"),
                    $elm$html$Html$Attributes$src("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$alt_a0, "")
                ]), _List_Nil)
            ])),
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-neutral-900 ring-1 ring-white ring-opacity-5"),
                $elm$virtual_dom$VirtualDom$attribute_fn("role", "menu"),
                $elm$virtual_dom$VirtualDom$attribute_fn("aria-orientation", "vertical"),
                $elm$virtual_dom$VirtualDom$attribute_fn("aria-labelledby", "user-menu-button"),
                $elm$html$Html$Attributes$tabindex(-1)
            ]), _List_fromArray([
                $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$href("#"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block px-4 py-2 text-sm opacity-70"),
                    $elm$virtual_dom$VirtualDom$attribute_fn("role", "menuitem"),
                    $elm$html$Html$Attributes$tabindex(-1),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "user-menu-item-0")
                ]), _List_fromArray([
                    $elm$html$Html$text("Your Profile")
                ])),
                $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$href("#"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block px-4 py-2 text-sm opacity-70"),
                    $elm$virtual_dom$VirtualDom$attribute_fn("role", "menuitem"),
                    $elm$html$Html$Attributes$tabindex(-1),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "user-menu-item-1")
                ]), _List_fromArray([
                    $elm$html$Html$text("Settings")
                ])),
                $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$href("#"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block px-4 py-2 text-sm opacity-70"),
                    $elm$virtual_dom$VirtualDom$attribute_fn("role", "menuitem"),
                    $elm$html$Html$Attributes$tabindex(-1),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "user-menu-item-2")
                ]), _List_fromArray([
                    $elm$html$Html$text("Sign out")
                ]))
            ]))
        ]))
    ]));
    var $author$project$View$logoSection = $elm$html$Html$a_fn(_List_fromArray([
        $elm$html$Html$Attributes$href("/"),
        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-shrink-0 flex items-center gap-2 w-16 sm:w-auto justify-center text-neutral-300 hover:text-white focus:text-transparent")
    ]), _List_fromArray([
        $elm$html$Html$img_fn(_List_fromArray([
            $elm$html$Html$Attributes$src("/logo.svg"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$alt_a0, ""),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "w-8")
        ]), _List_Nil),
        $elm$html$Html$span_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "hidden md:inline hover:text-transparent focus:text-transparent text-base font-bold bg-clip-text bg-gradient-to-tl transition from-rose-500 to-fuchsia-500")
        ]), _List_fromArray([
            $elm$html$Html$text("FlamingleSocial.com")
        ]))
    ]));
    var $author$project$Component$Icon$outlineMenu = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "block h-6 w-6"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "none"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 24 24"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$stroke_a0, "currentColor"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinecap_a0, "round"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinejoin_a0, "round"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeWidth_a0, "2"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M4 6h16M4 12h16M4 18h16")
        ]), _List_Nil)
    ]));
    var $author$project$Component$Icon$outlineX = $elm$svg$Svg$svg_fn(_List_fromArray([
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$class_a0, "h-6 w-6"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$fill_a0, "none"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$viewBox_a0, "0 0 24 24"),
        _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$stroke_a0, "currentColor"),
        $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
    ]), _List_fromArray([
        $elm$svg$Svg$path_fn(_List_fromArray([
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinecap_a0, "round"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeLinejoin_a0, "round"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$strokeWidth_a0, "2"),
            _VirtualDom_attribute_fn($elm$svg$Svg$Attributes$d_a0, "M6 18L18 6M6 6l12 12")
        ]), _List_Nil)
    ]));
    var $author$project$View$mobileMenu = function (routes) {
        return $elm$html$Html$details_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "lg:hidden contents group")
        ]), _List_fromArray([
            $elm$html$Html$summary_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-none w-16 justify-center flex items-center")
            ]), _List_fromArray([
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "group-open:flex group-open:bg-opacity-90  group-open:pointer-events-auto"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "pointer-events-none bg-opacity-0 absolute top-0 right-0 h-screen w-full backdrop-blur-md bg-black transition")
                ]), _List_Nil),
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative inline-flex items-center justify-center p-2 rounded-md opacity-40 hover:opacity-50 hover:bg-opacity-10 group-open:ring-2 group-open:ring-inset group-open:ring-fuchsia-500")
                ]), _List_fromArray([
                    $elm$html$Html$span_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                    ]), _List_fromArray([
                        $elm$html$Html$text("Toggle main menu")
                    ])),
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "group-open:hidden flex")
                    ]), _List_fromArray([$author$project$Component$Icon$outlineMenu])),
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "group-open:flex hidden relative")
                    ]), _List_fromArray([$author$project$Component$Icon$outlineX]))
                ]))
            ])),
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "absolute z-10 top-full right-0 bg-neutral-900 rounded-lg mx-4")
            ]), _List_fromArray([
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative pt-2 pb-3 space-y-1")
                ]), $elm$core$List$map_fn(function (path) {
                    return $elm$html$Html$a_fn(_List_fromArray([
                        $elm$html$Html$Attributes$href("/" + (path + ("#" + path))),
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "border-transparent opacity-60 capitalize hover:bg-neutral-50 hover:border-neutral-300 hover:opacity-80 block pl-3 pr-4 py-2 border-l-4 text-base font-medium")
                    ]), _List_fromArray([
                        $elm$html$Html$text(path)
                    ]));
                }, routes)),
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "pt-4 pb-3 border-t border-neutral-800")
                ]), true ? _List_fromArray([
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex justify-center mx-4")
                    ]), _List_fromArray([
                        $elm$html$Html$a_fn(_List_fromArray([
                            $elm$html$Html$Attributes$href("#"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-shrink-0 relative self-center inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white opacity-60 border border-white border-opacity-50 transition from-rose-500 to-fuchsia-500"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "hover:opacity-100 hover:text-opacity-100 hover:border-fuchsia-500 hover:bg-gradient-to-tl"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "focus:opacity-100 focus:text-opacity-100 focus:border-fuchsia-500 focus:bg-gradient-to-l focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-fuchsia-500")
                        ]), _List_fromArray([
                            $elm$html$Html$text("Account")
                        ]))
                    ]))
                ]) : _List_fromArray([
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex items-center px-4")
                    ]), _List_fromArray([
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-shrink-0")
                        ]), _List_fromArray([
                            $elm$html$Html$img_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "h-10 w-10 rounded-full"),
                                $elm$html$Html$Attributes$src("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"),
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$alt_a0, "")
                            ]), _List_Nil)
                        ])),
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "ml-3")
                        ]), _List_fromArray([
                            $elm$html$Html$div_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-base font-medium opacity-80")
                            ]), _List_fromArray([
                                $elm$html$Html$text("Tom Cook")
                            ])),
                            $elm$html$Html$div_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-sm font-medium opacity-50")
                            ]), _List_fromArray([
                                $elm$html$Html$text("tom@example.com")
                            ]))
                        ])),
                        $elm$html$Html$button_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "button"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "ml-auto flex-shrink-0 bg-neutral-900 p-1 opacity-40 rounded-full hover:opacity-50 focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500")
                        ]), _List_fromArray([
                            $elm$html$Html$span_fn(_List_fromArray([
                                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                            ]), _List_fromArray([
                                $elm$html$Html$text("View notifications")
                            ])),
                            $author$project$Component$Icon$outlineBell
                        ]))
                    ])),
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-3 space-y-1")
                    ]), _List_fromArray([
                        $elm$html$Html$a_fn(_List_fromArray([
                            $elm$html$Html$Attributes$href("#"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block px-4 py-2 text-base font-medium opacity-50 hover:opacity-80 hover:bg-opacity-10")
                        ]), _List_fromArray([
                            $elm$html$Html$text("Your Profile")
                        ])),
                        $elm$html$Html$a_fn(_List_fromArray([
                            $elm$html$Html$Attributes$href("#"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block px-4 py-2 text-base font-medium opacity-50 hover:opacity-80 hover:bg-opacity-10")
                        ]), _List_fromArray([
                            $elm$html$Html$text("Settings")
                        ])),
                        $elm$html$Html$a_fn(_List_fromArray([
                            $elm$html$Html$Attributes$href("#"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block px-4 py-2 text-base font-medium opacity-50 hover:opacity-80 hover:bg-opacity-10")
                        ]), _List_fromArray([
                            $elm$html$Html$text("Sign out")
                        ]))
                    ]))
                ]))
            ]))
        ]));
    };
    var $author$project$View$routesSection_a0 = $elm$core$List$map(function (r) {
        return $elm$html$Html$a_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, r),
            $elm$html$Html$Attributes$href("/" + (r + ("/#" + r))),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "target:border-fuchsia-500 border-transparent capitalize target:opacity-90 focus:border-current focus:text-fuchsia-500 focus:opacity-90 opacity-50 hover:border-neutral-300 hover:opacity-70 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium")
        ]), _List_fromArray([
            $elm$html$Html$text(r)
        ]));
    }), $author$project$View$routesSection_a1 = $elm$html$Html$div(_List_fromArray([
        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative z-10 hidden lg:ml-6 lg:flex lg:space-x-8")
    ])), $author$project$View$routesSection = A2($elm$core$Basics$composeR, $author$project$View$routesSection_a0, $author$project$View$routesSection_a1);
    var $author$project$View$searchBar = $elm$html$Html$form_fn(_List_fromArray([
        $elm$html$Html$Attributes$action("/events/"),
        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative z-10 flex-1 flex items-center justify-center sm:px-2 lg:ml-6 lg:justify-end")
    ]), _List_fromArray([
        $elm$html$Html$div_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "max-w-lg w-full lg:max-w-xs")
        ]), _List_fromArray([
            $elm$html$Html$label_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$for_a0, "search"),
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
            ]), _List_fromArray([
                $elm$html$Html$text("Search")
            ])),
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative")
            ]), _List_fromArray([
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none")
                ]), _List_fromArray([$author$project$Component$Icon$solidSearch])),
                $elm$html$Html$input_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$id_a0, "search"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$name_a0, "search"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "block w-full pl-10 pr-3 py-2 border border-opacity-30 border-white rounded-md leading-5 bg-neutral-900 bg-opacity-10"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "focus:bg-opacity-100 placeholder-neutral-500 focus:placeholder-neutral-400 focus:ring-1 focus:ring-fuchsia-500 focus:border-fuchsia-500 sm:text-sm"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$placeholder_a0, "Search"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$type__a0, "search")
                ]), _List_Nil)
            ]))
        ]))
    ]));
    var $author$project$View$navbar = function () {
        var routes = _List_fromArray(["events", "chats", "activities", "calendar"]);
        return $elm$html$Html$nav_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sticky top-0 w-full flex flex-col z-10 max-h-full")
        ]), _List_fromArray([
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "border-b border-white border-opacity-20 bg-black bg-opacity-70 backdrop-blur-lg flex-none")
            ]), _List_fromArray([
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "max-w-7xl mx-auto sm:px-4 lg:px-8")
                ]), _List_fromArray([
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex justify-between h-16")
                    ]), _List_fromArray([
                        $elm$html$Html$div_fn(_List_fromArray([
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "relative z-10 flex sm:px-2 lg:px-0")
                        ]), _List_fromArray([
                            $author$project$View$logoSection,
                            $elm$core$Basics$composeR_fn($author$project$View$routesSection_a0, $author$project$View$routesSection_a1, routes)
                        ])),
                        $author$project$View$searchBar,
                        $author$project$View$mobileMenu(routes),
                        $author$project$View$accountSection
                    ]))
                ]))
            ]))
        ]));
    }();
    var $author$project$View$pageLayout = function (pageContent) {
        return $elm$html$Html$div_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "bg-white min-h-screen w-full flex flex-col"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "bg-black border-r border-white border-opacity-20"),
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "min-h-screen w-full flex flex-col text-white")
        ]), _List_fromArray([
            $author$project$View$navbar,
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "bg-neutral-900 bg-opacity-50 flex-auto")
            ]), _List_fromArray([pageContent]))
        ]));
    };
    var $author$project$Shared$view_fn = function (sharedData, page, model, toMsg, pageView) {
        return {
            er: $author$project$View$pageLayout(pageView.er),
            be: pageView.be
        };
    }, $author$project$Shared$view = F5($author$project$Shared$view_fn);
    var $author$project$Shared$template = { m: $author$project$Shared$data, de: $author$project$Shared$init, gq: $elm$core$Maybe$Nothing, dZ: $author$project$Shared$subscriptions, aO: $author$project$Shared$update, N: $author$project$Shared$view };
    var $author$project$Main$init_fn = function (currentGlobalModel, userFlags, sharedData, pageData, navigationKey, maybePagePath) {
        var _v0 = $elm$core$Maybe$withDefault_fn(A2($author$project$Shared$template.de, userFlags, maybePagePath), $elm$core$Maybe$map_fn(function (m) {
            return _Utils_Tuple2(m, $author$project$Effect$none);
        }, currentGlobalModel));
        var sharedModel = _v0.a;
        var globalCmd = _v0.b;
        var _v1 = function () {
            var _v2 = _Utils_Tuple2($elm$core$Maybe$map2_fn($elm$core$Tuple$pair, $elm$core$Maybe$andThen_fn(function ($) {
                return $.P;
            }, maybePagePath), $elm$core$Maybe$map_fn(function ($) {
                return $.cd;
            }, maybePagePath)), pageData);
            _v2$4: while (true) {
                if (!_v2.a.$) {
                    switch (_v2.a.a.a.$) {
                        case 1:
                            if (_v2.b.$ === 2) {
                                var _v3 = _v2.a.a;
                                var _v4 = _v3.a;
                                var justPath = _v3.b;
                                var thisPageData = _v2.b.a;
                                return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelAccount, $author$project$Effect$map($author$project$Main$MsgAccount), A3($author$project$Route$Account$route.de, $elm$core$Maybe$andThen_fn(function ($) {
                                    return $.Z;
                                }, maybePagePath), sharedModel, {
                                    m: thisPageData,
                                    cd: justPath.cd,
                                    L: {},
                                    E: sharedData
                                }));
                            }
                            else {
                                break _v2$4;
                            }
                        case 2:
                            if (_v2.b.$ === 3) {
                                var _v5 = _v2.a.a;
                                var _v6 = _v5.a;
                                var justPath = _v5.b;
                                var thisPageData = _v2.b.a;
                                return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelEvents, $author$project$Effect$map($author$project$Main$MsgEvents), A3($author$project$Route$Events$route.de, $elm$core$Maybe$andThen_fn(function ($) {
                                    return $.Z;
                                }, maybePagePath), sharedModel, {
                                    m: thisPageData,
                                    cd: justPath.cd,
                                    L: {},
                                    E: sharedData
                                }));
                            }
                            else {
                                break _v2$4;
                            }
                        case 3:
                            if (_v2.b.$ === 4) {
                                var _v7 = _v2.a.a;
                                var _v8 = _v7.a;
                                var justPath = _v7.b;
                                var thisPageData = _v2.b.a;
                                return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelIndex, $author$project$Effect$map($author$project$Main$MsgIndex), A3($author$project$Route$Index$route.de, $elm$core$Maybe$andThen_fn(function ($) {
                                    return $.Z;
                                }, maybePagePath), sharedModel, {
                                    m: thisPageData,
                                    cd: justPath.cd,
                                    L: {},
                                    E: sharedData
                                }));
                            }
                            else {
                                break _v2$4;
                            }
                        default:
                            if (_v2.b.$ === 5) {
                                var _v9 = _v2.a.a;
                                var routeParams = _v9.a.a;
                                var justPath = _v9.b;
                                var thisPageData = _v2.b.a;
                                return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelEvents__Slug_, $author$project$Effect$map($author$project$Main$MsgEvents__Slug_), A3($author$project$Route$Events$Slug_$route.de, $elm$core$Maybe$andThen_fn(function ($) {
                                    return $.Z;
                                }, maybePagePath), sharedModel, { m: thisPageData, cd: justPath.cd, L: routeParams, E: sharedData }));
                            }
                            else {
                                break _v2$4;
                            }
                    }
                }
                else {
                    break _v2$4;
                }
            }
            return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelErrorPage____, $author$project$Effect$map($author$project$Main$MsgErrorPage____), $author$project$ErrorPage$init(function () {
                if (pageData.$ === 1) {
                    var errorPage = pageData.a;
                    return errorPage;
                }
                else {
                    return $author$project$ErrorPage$notFound;
                }
            }()));
        }();
        var templateModel = _v1.a;
        var templateCmd = _v1.b;
        return _Utils_Tuple2({ w: maybePagePath, c: sharedModel, dv: templateModel }, $author$project$Effect$batch(_List_fromArray([
            templateCmd,
            $author$project$Effect$map_fn($author$project$Main$MsgGlobal, globalCmd)
        ])));
    }, $author$project$Main$init = F6($author$project$Main$init_fn);
    var $author$project$ErrorPage$internalError = $author$project$ErrorPage$InternalError;
    var $author$project$ApiRoute$getBuildTimeRoutes = function (_v0) {
        var handler = _v0;
        return handler.fs;
    };
    var $author$project$Main$routePatterns = $author$project$ApiRoute$single($author$project$ApiRoute$literal_fn("route-patterns.json", $author$project$ApiRoute$succeed(function (json) {
        return $author$project$DataSource$succeed(_Json_encode_fn(0, json));
    }($elm$json$Json$Encode$list_fn(function (_v0) {
        var pathPattern = _v0.e4;
        var kind = _v0.fA;
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("kind", $elm$json$Json$Encode$string(kind)),
            _Utils_Tuple2("pathPattern", $elm$json$Json$Encode$string(pathPattern))
        ]));
    }, _List_fromArray([
        { fA: $author$project$Route$Events$Slug_$route.fA, e4: "/events/:slug" },
        { fA: $author$project$Route$Account$route.fA, e4: "/account" },
        { fA: $author$project$Route$Events$route.fA, e4: "/events" },
        { fA: $author$project$Route$Index$route.fA, e4: "/" }
    ]))))));
    var $author$project$Route$baseUrl = "/";
    var $author$project$Route$baseUrlAsPath = $elm$core$List$filter_fn(A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty), $elm$core$String$split_fn("/", $author$project$Route$baseUrl));
    var $author$project$Route$routeToPath = function (route) {
        switch (route.$) {
            case 0:
                var params = route.a;
                return $elm$core$List$concat(_List_fromArray([
                    _List_fromArray(["events"]),
                    _List_fromArray([params.k])
                ]));
            case 1:
                return $elm$core$List$concat(_List_fromArray([
                    _List_fromArray(["account"])
                ]));
            case 2:
                return $elm$core$List$concat(_List_fromArray([
                    _List_fromArray(["events"])
                ]));
            default:
                return $elm$core$List$concat(_List_Nil);
        }
    };
    var $author$project$Route$toPath = function (route) {
        return $author$project$Path$fromString($elm$core$String$join_fn("/", _Utils_ap($author$project$Route$baseUrlAsPath, $author$project$Route$routeToPath(route))));
    };
    var $author$project$Main$pathsToGenerateHandler = $author$project$ApiRoute$single($author$project$ApiRoute$literal_fn("all-paths.json", $author$project$ApiRoute$succeed($author$project$DataSource$map2_fn(F2(function (pageRoutes, apiRoutes) {
        return _Json_encode_fn(0, $elm$json$Json$Encode$list_fn($elm$json$Json$Encode$string, _Utils_ap(pageRoutes, $elm$core$List$map_fn(function (api) {
            return "/" + api;
        }, apiRoutes))));
    }), $author$project$DataSource$map_fn($elm$core$List$map(function (route) {
        return $author$project$Path$toAbsolute($author$project$Route$toPath(route));
    }), $author$project$Main$getStaticRoutes), $author$project$DataSource$map_fn($elm$core$List$concat, $elm$core$List$foldr_fn($author$project$DataSource$combine_a0, $author$project$DataSource$combine_a1, $elm$core$List$map_fn($author$project$ApiRoute$getBuildTimeRoutes, _List_Cons($author$project$Main$routePatterns, _List_Cons($author$project$Main$apiPatterns, $author$project$Api$routes_fn($author$project$Main$getStaticRoutes, function (_v0) {
        return "";
    }))))))))));
    var $author$project$Effect$perform_fn = function (fromPageMsg, key, effect) {
        switch (effect.$) {
            case 0:
                return $elm$core$Platform$Cmd$none;
            case 1:
                var cmd = effect.a;
                return _Platform_map_fn(fromPageMsg, cmd);
            default:
                var list = effect.a;
                return $elm$core$Platform$Cmd$batch($elm$core$List$map_fn(A2($author$project$Effect$perform, fromPageMsg, key), list));
        }
    }, $author$project$Effect$perform = F3($author$project$Effect$perform_fn);
    var $author$project$Main$routePatterns3 = _List_fromArray([
        {
            bv: $elm$core$Maybe$Nothing,
            bR: _List_fromArray([
                $author$project$Pages$Internal$RoutePattern$StaticSegment("events"),
                $author$project$Pages$Internal$RoutePattern$DynamicSegment("slug")
            ])
        },
        {
            bv: $elm$core$Maybe$Nothing,
            bR: _List_fromArray([
                $author$project$Pages$Internal$RoutePattern$StaticSegment("account")
            ])
        },
        {
            bv: $elm$core$Maybe$Nothing,
            bR: _List_fromArray([
                $author$project$Pages$Internal$RoutePattern$StaticSegment("events")
            ])
        },
        { bv: $elm$core$Maybe$Nothing, bR: _List_Nil }
    ]);
    var $lamdera$codecs$Lamdera$Wire3$encodeBytes_ = _LamderaCodecs_encodeBytes;
    var $author$project$Main$sendPageData = _Platform_outgoingPort("sendPageData", function ($) {
        return $elm$json$Json$Encode$object(_List_fromArray([
            _Utils_Tuple2("binaryPageData", $lamdera$codecs$Lamdera$Wire3$encodeBytes_($.gH)),
            _Utils_Tuple2("oldThing", $elm$core$Basics$identity($.ho))
        ]));
    });
    var $author$project$ErrorPage$statusCode = function (error) {
        if (!error.$) {
            return 404;
        }
        else {
            return 500;
        }
    };
    var $author$project$Main$templateSubscriptions_fn = function (route, path, model) {
        var _v0 = _Utils_Tuple2(model.dv, route);
        _v0$4: while (true) {
            if (!_v0.b.$) {
                switch (_v0.b.a.$) {
                    case 1:
                        if (!_v0.a.$) {
                            var templateModel = _v0.a.a;
                            var _v1 = _v0.b.a;
                            return _Platform_map_fn($author$project$Main$MsgAccount, A5($author$project$Route$Account$route.dZ, $elm$core$Maybe$Nothing, {}, path, templateModel, model.c));
                        }
                        else {
                            break _v0$4;
                        }
                    case 2:
                        if (_v0.a.$ === 1) {
                            var templateModel = _v0.a.a;
                            var _v2 = _v0.b.a;
                            return _Platform_map_fn($author$project$Main$MsgEvents, A5($author$project$Route$Events$route.dZ, $elm$core$Maybe$Nothing, {}, path, templateModel, model.c));
                        }
                        else {
                            break _v0$4;
                        }
                    case 3:
                        if (_v0.a.$ === 2) {
                            var templateModel = _v0.a.a;
                            var _v3 = _v0.b.a;
                            return _Platform_map_fn($author$project$Main$MsgIndex, A5($author$project$Route$Index$route.dZ, $elm$core$Maybe$Nothing, {}, path, templateModel, model.c));
                        }
                        else {
                            break _v0$4;
                        }
                    default:
                        if (_v0.a.$ === 3) {
                            var templateModel = _v0.a.a;
                            var routeParams = _v0.b.a.a;
                            return _Platform_map_fn($author$project$Main$MsgEvents__Slug_, A5($author$project$Route$Events$Slug_$route.dZ, $elm$core$Maybe$Nothing, routeParams, path, templateModel, model.c));
                        }
                        else {
                            break _v0$4;
                        }
                }
            }
            else {
                break _v0$4;
            }
        }
        return $elm$core$Platform$Sub$none;
    }, $author$project$Main$templateSubscriptions = F3($author$project$Main$templateSubscriptions_fn);
    var $author$project$Main$toJsPort = _Platform_outgoingPort("toJsPort", $elm$core$Basics$identity);
    var $elm$core$Maybe$map3_fn = function (func, ma, mb, mc) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                if (mc.$ === 1) {
                    return $elm$core$Maybe$Nothing;
                }
                else {
                    var c = mc.a;
                    return $elm$core$Maybe$Just(A3(func, a, b, c));
                }
            }
        }
    }, $elm$core$Maybe$map3_fn_unwrapped = function (func, ma, mb, mc) {
        if (ma.$ === 1) {
            return $elm$core$Maybe$Nothing;
        }
        else {
            var a = ma.a;
            if (mb.$ === 1) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var b = mb.a;
                if (mc.$ === 1) {
                    return $elm$core$Maybe$Nothing;
                }
                else {
                    var c = mc.a;
                    return $elm$core$Maybe$Just(func(a, b, c));
                }
            }
        }
    }, $elm$core$Maybe$map3 = F4($elm$core$Maybe$map3_fn);
    var $author$project$Main$mapBoth_fn = function (fnA, fnB, _v0) {
        var a = _v0.a;
        var b = _v0.b;
        var c = _v0.c;
        return _Utils_Tuple3(fnA(a), fnB(b), c);
    }, $author$project$Main$mapBoth = F3($author$project$Main$mapBoth_fn);
    var $author$project$ErrorPage$update_fn = function (errPage, msg, model) {
        return _Utils_Tuple2(_Utils_update(model, { br: model.br + 1 }), $author$project$Effect$none);
    }, $author$project$ErrorPage$update = F3($author$project$ErrorPage$update_fn);
    var $author$project$Main$update_fn = function (sharedData, pageData, navigationKey, msg, model) {
        switch (msg.$) {
            case 2:
                var msg_ = msg.a;
                var _v1 = function () {
                    var _v2 = _Utils_Tuple2(model.dv, pageData);
                    if ((_v2.a.$ === 4) && (_v2.b.$ === 1)) {
                        var pageModel = _v2.a.a;
                        var thisPageData = _v2.b.a;
                        return $elm$core$Tuple$mapBoth_fn($author$project$Main$ModelErrorPage____, $author$project$Effect$map($author$project$Main$MsgErrorPage____), $author$project$ErrorPage$update_fn(thisPageData, msg_, pageModel));
                    }
                    else {
                        return _Utils_Tuple2(model.dv, $author$project$Effect$none);
                    }
                }();
                var updatedPageModel = _v1.a;
                var pageCmd = _v1.b;
                return _Utils_Tuple2(_Utils_update(model, { dv: updatedPageModel }), pageCmd);
            case 0:
                var msg_ = msg.a;
                var _v3 = A2($author$project$Shared$template.aO, msg_, model.c);
                var sharedModel = _v3.a;
                var globalCmd = _v3.b;
                return _Utils_Tuple2(_Utils_update(model, { c: sharedModel }), $author$project$Effect$map_fn($author$project$Main$MsgGlobal, globalCmd));
            case 1:
                var record = msg.a;
                return function (_v4) {
                    var updatedModel = _v4.a;
                    var cmd = _v4.b;
                    var _v5 = $author$project$Shared$template.gq;
                    if (_v5.$ === 1) {
                        return _Utils_Tuple2(updatedModel, cmd);
                    }
                    else {
                        var thingy = _v5.a;
                        var _v6 = A2($author$project$Shared$template.aO, thingy({ T: record.T, cd: record.cd, W: record.W }), model.c);
                        var updatedGlobalModel = _v6.a;
                        var globalCmd = _v6.b;
                        return _Utils_Tuple2(_Utils_update(updatedModel, { c: updatedGlobalModel }), $author$project$Effect$batch(_List_fromArray([
                            cmd,
                            $author$project$Effect$map_fn($author$project$Main$MsgGlobal, globalCmd)
                        ])));
                    }
                }($author$project$Main$init_fn($elm$core$Maybe$Just(model.c), $author$project$Pages$Flags$PreRenderFlags, sharedData, pageData, navigationKey, $elm$core$Maybe$Just({
                    P: record.P,
                    Z: $elm$core$Maybe$Just({
                        T: record.T,
                        c9: record.c9,
                        cd: record.cd,
                        dB: record.dB,
                        dG: record.dG,
                        W: $elm$core$Maybe$map_fn($author$project$QueryParams$fromString, record.W)
                    }),
                    cd: { T: record.T, cd: record.cd, W: record.W }
                })));
            case 3:
                var msg_ = msg.a;
                var _v7 = function () {
                    var _v9 = _Utils_Tuple3(model.dv, pageData, $elm$core$Maybe$map3_fn_unwrapped(function (a, b, c) {
                        return _Utils_Tuple3(a, b, c);
                    }, $elm$core$Maybe$andThen_fn(function ($) {
                        return $.P;
                    }, model.w), $elm$core$Maybe$andThen_fn(function ($) {
                        return $.Z;
                    }, model.w), $elm$core$Maybe$map_fn(function ($) {
                        return $.cd;
                    }, model.w)));
                    if ((((!_v9.a.$) && (_v9.b.$ === 2)) && (!_v9.c.$)) && (_v9.c.a.a.$ === 1)) {
                        var pageModel = _v9.a.a;
                        var thisPageData = _v9.b.a;
                        var _v10 = _v9.c.a;
                        var _v11 = _v10.a;
                        var pageUrl = _v10.b;
                        var justPage = _v10.c;
                        return function (_v12) {
                            var a = _v12.a;
                            var b = _v12.b;
                            var c = _v12.c;
                            if (!c.$) {
                                var sharedMsg = c.a;
                                return _Utils_Tuple3(a, b, A2($author$project$Shared$template.aO, sharedMsg, model.c));
                            }
                            else {
                                return _Utils_Tuple3(a, b, _Utils_Tuple2(model.c, $author$project$Effect$none));
                            }
                        }($author$project$Main$mapBoth_fn($author$project$Main$ModelAccount, $author$project$Effect$map($author$project$Main$MsgAccount), A5($author$project$Route$Account$route.aO, pageUrl, {
                            m: thisPageData,
                            cd: justPage.cd,
                            L: {},
                            E: sharedData
                        }, msg_, pageModel, model.c)));
                    }
                    else {
                        return _Utils_Tuple3(model.dv, $author$project$Effect$none, _Utils_Tuple2(model.c, $author$project$Effect$none));
                    }
                }();
                var updatedPageModel = _v7.a;
                var pageCmd = _v7.b;
                var _v8 = _v7.c;
                var newGlobalModel = _v8.a;
                var newGlobalCmd = _v8.b;
                return _Utils_Tuple2(_Utils_update(model, { c: newGlobalModel, dv: updatedPageModel }), $author$project$Effect$batch(_List_fromArray([
                    pageCmd,
                    $author$project$Effect$map_fn($author$project$Main$MsgGlobal, newGlobalCmd)
                ])));
            case 4:
                var msg_ = msg.a;
                var _v14 = function () {
                    var _v16 = _Utils_Tuple3(model.dv, pageData, $elm$core$Maybe$map3_fn_unwrapped(function (a, b, c) {
                        return _Utils_Tuple3(a, b, c);
                    }, $elm$core$Maybe$andThen_fn(function ($) {
                        return $.P;
                    }, model.w), $elm$core$Maybe$andThen_fn(function ($) {
                        return $.Z;
                    }, model.w), $elm$core$Maybe$map_fn(function ($) {
                        return $.cd;
                    }, model.w)));
                    if ((((_v16.a.$ === 1) && (_v16.b.$ === 3)) && (!_v16.c.$)) && (_v16.c.a.a.$ === 2)) {
                        var pageModel = _v16.a.a;
                        var thisPageData = _v16.b.a;
                        var _v17 = _v16.c.a;
                        var _v18 = _v17.a;
                        var pageUrl = _v17.b;
                        var justPage = _v17.c;
                        return function (_v19) {
                            var a = _v19.a;
                            var b = _v19.b;
                            var c = _v19.c;
                            if (!c.$) {
                                var sharedMsg = c.a;
                                return _Utils_Tuple3(a, b, A2($author$project$Shared$template.aO, sharedMsg, model.c));
                            }
                            else {
                                return _Utils_Tuple3(a, b, _Utils_Tuple2(model.c, $author$project$Effect$none));
                            }
                        }($author$project$Main$mapBoth_fn($author$project$Main$ModelEvents, $author$project$Effect$map($author$project$Main$MsgEvents), A5($author$project$Route$Events$route.aO, pageUrl, {
                            m: thisPageData,
                            cd: justPage.cd,
                            L: {},
                            E: sharedData
                        }, msg_, pageModel, model.c)));
                    }
                    else {
                        return _Utils_Tuple3(model.dv, $author$project$Effect$none, _Utils_Tuple2(model.c, $author$project$Effect$none));
                    }
                }();
                var updatedPageModel = _v14.a;
                var pageCmd = _v14.b;
                var _v15 = _v14.c;
                var newGlobalModel = _v15.a;
                var newGlobalCmd = _v15.b;
                return _Utils_Tuple2(_Utils_update(model, { c: newGlobalModel, dv: updatedPageModel }), $author$project$Effect$batch(_List_fromArray([
                    pageCmd,
                    $author$project$Effect$map_fn($author$project$Main$MsgGlobal, newGlobalCmd)
                ])));
            case 5:
                var msg_ = msg.a;
                var _v21 = function () {
                    var _v23 = _Utils_Tuple3(model.dv, pageData, $elm$core$Maybe$map3_fn_unwrapped(function (a, b, c) {
                        return _Utils_Tuple3(a, b, c);
                    }, $elm$core$Maybe$andThen_fn(function ($) {
                        return $.P;
                    }, model.w), $elm$core$Maybe$andThen_fn(function ($) {
                        return $.Z;
                    }, model.w), $elm$core$Maybe$map_fn(function ($) {
                        return $.cd;
                    }, model.w)));
                    if ((((_v23.a.$ === 2) && (_v23.b.$ === 4)) && (!_v23.c.$)) && (_v23.c.a.a.$ === 3)) {
                        var pageModel = _v23.a.a;
                        var thisPageData = _v23.b.a;
                        var _v24 = _v23.c.a;
                        var _v25 = _v24.a;
                        var pageUrl = _v24.b;
                        var justPage = _v24.c;
                        return function (_v26) {
                            var a = _v26.a;
                            var b = _v26.b;
                            var c = _v26.c;
                            if (!c.$) {
                                var sharedMsg = c.a;
                                return _Utils_Tuple3(a, b, A2($author$project$Shared$template.aO, sharedMsg, model.c));
                            }
                            else {
                                return _Utils_Tuple3(a, b, _Utils_Tuple2(model.c, $author$project$Effect$none));
                            }
                        }($author$project$Main$mapBoth_fn($author$project$Main$ModelIndex, $author$project$Effect$map($author$project$Main$MsgIndex), A5($author$project$Route$Index$route.aO, pageUrl, {
                            m: thisPageData,
                            cd: justPage.cd,
                            L: {},
                            E: sharedData
                        }, msg_, pageModel, model.c)));
                    }
                    else {
                        return _Utils_Tuple3(model.dv, $author$project$Effect$none, _Utils_Tuple2(model.c, $author$project$Effect$none));
                    }
                }();
                var updatedPageModel = _v21.a;
                var pageCmd = _v21.b;
                var _v22 = _v21.c;
                var newGlobalModel = _v22.a;
                var newGlobalCmd = _v22.b;
                return _Utils_Tuple2(_Utils_update(model, { c: newGlobalModel, dv: updatedPageModel }), $author$project$Effect$batch(_List_fromArray([
                    pageCmd,
                    $author$project$Effect$map_fn($author$project$Main$MsgGlobal, newGlobalCmd)
                ])));
            default:
                var msg_ = msg.a;
                var _v28 = function () {
                    var _v30 = _Utils_Tuple3(model.dv, pageData, $elm$core$Maybe$map3_fn_unwrapped(function (a, b, c) {
                        return _Utils_Tuple3(a, b, c);
                    }, $elm$core$Maybe$andThen_fn(function ($) {
                        return $.P;
                    }, model.w), $elm$core$Maybe$andThen_fn(function ($) {
                        return $.Z;
                    }, model.w), $elm$core$Maybe$map_fn(function ($) {
                        return $.cd;
                    }, model.w)));
                    if ((((_v30.a.$ === 3) && (_v30.b.$ === 5)) && (!_v30.c.$)) && (!_v30.c.a.a.$)) {
                        var pageModel = _v30.a.a;
                        var thisPageData = _v30.b.a;
                        var _v31 = _v30.c.a;
                        var routeParams = _v31.a.a;
                        var pageUrl = _v31.b;
                        var justPage = _v31.c;
                        return function (_v32) {
                            var a = _v32.a;
                            var b = _v32.b;
                            var c = _v32.c;
                            if (!c.$) {
                                var sharedMsg = c.a;
                                return _Utils_Tuple3(a, b, A2($author$project$Shared$template.aO, sharedMsg, model.c));
                            }
                            else {
                                return _Utils_Tuple3(a, b, _Utils_Tuple2(model.c, $author$project$Effect$none));
                            }
                        }($author$project$Main$mapBoth_fn($author$project$Main$ModelEvents__Slug_, $author$project$Effect$map($author$project$Main$MsgEvents__Slug_), A5($author$project$Route$Events$Slug_$route.aO, pageUrl, { m: thisPageData, cd: justPage.cd, L: routeParams, E: sharedData }, msg_, pageModel, model.c)));
                    }
                    else {
                        return _Utils_Tuple3(model.dv, $author$project$Effect$none, _Utils_Tuple2(model.c, $author$project$Effect$none));
                    }
                }();
                var updatedPageModel = _v28.a;
                var pageCmd = _v28.b;
                var _v29 = _v28.c;
                var newGlobalModel = _v29.a;
                var newGlobalCmd = _v29.b;
                return _Utils_Tuple2(_Utils_update(model, { c: newGlobalModel, dv: updatedPageModel }), $author$project$Effect$batch(_List_fromArray([
                    pageCmd,
                    $author$project$Effect$map_fn($author$project$Main$MsgGlobal, newGlobalCmd)
                ])));
        }
    }, $author$project$Main$update = F5($author$project$Main$update_fn);
    var $elm_community$list_extra$List$Extra$findMap_fn = function (f, list) {
        findMap: while (true) {
            if (!list.b) {
                return $elm$core$Maybe$Nothing;
            }
            else {
                var a = list.a;
                var tail = list.b;
                var _v1 = f(a);
                if (!_v1.$) {
                    var b = _v1.a;
                    return $elm$core$Maybe$Just(b);
                }
                else {
                    var $temp$f = f, $temp$list = tail;
                    f = $temp$f;
                    list = $temp$list;
                    continue findMap;
                }
            }
        }
    }, $elm_community$list_extra$List$Extra$findMap = F2($elm_community$list_extra$List$Extra$findMap_fn);
    var $author$project$Pages$Internal$Router$ensureLeadingSlash = function (path) {
        return _String_startsWith_fn("/", path) ? path : ("/" + path);
    };
    var $author$project$Pages$Internal$Router$stripTrailingSlash = function (path) {
        return (_String_endsWith_fn("/", path) && ($elm$core$String$length(path) > 1)) ? $elm$core$String$dropRight_fn(1, path) : path;
    };
    var $author$project$Pages$Internal$Router$normalizePath = function (path) {
        return $author$project$Pages$Internal$Router$stripTrailingSlash($author$project$Pages$Internal$Router$ensureLeadingSlash(path));
    };
    var $author$project$Pages$Internal$Router$toRegex = function (pattern) {
        return $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString(pattern));
    };
    var $author$project$Pages$Internal$Router$submatches_fn = function (pattern, path) {
        return $elm$core$List$concatMap_fn(function ($) {
            return $.gz;
        }, _Regex_findAtMost_fn($elm$regex$Regex$find_a0, $elm$core$Maybe$withDefault_fn($elm$regex$Regex$never, $elm$regex$Regex$fromString(pattern)), path));
    }, $author$project$Pages$Internal$Router$submatches = F2($author$project$Pages$Internal$Router$submatches_fn);
    var $author$project$Pages$Internal$Router$tryMatch_fn = function (_v0, path) {
        var toRoute = _v0.fM;
        var pattern = _v0.f_;
        return toRoute($author$project$Pages$Internal$Router$submatches_fn(pattern, $author$project$Pages$Internal$Router$normalizePath(path)));
    }, $author$project$Pages$Internal$Router$tryMatch = F2($author$project$Pages$Internal$Router$tryMatch_fn);
    var $author$project$Pages$Internal$Router$firstMatch_fn = function (matchers, path) {
        return $elm_community$list_extra$List$Extra$findMap_fn(function (matcher) {
            return _Regex_contains_fn($author$project$Pages$Internal$Router$toRegex(matcher.f_), $author$project$Pages$Internal$Router$normalizePath(path)) ? $author$project$Pages$Internal$Router$tryMatch_fn(matcher, path) : $elm$core$Maybe$Nothing;
        }, matchers);
    }, $author$project$Pages$Internal$Router$firstMatch = F2($author$project$Pages$Internal$Router$firstMatch_fn);
    var $author$project$Route$matchers = _List_fromArray([
        {
            f_: "^\\/events\\/(?:([^/]+))$",
            fM: function (matches) {
                if ((matches.b && (!matches.a.$)) && (!matches.b.b)) {
                    var slug = matches.a.a;
                    return $elm$core$Maybe$Just($author$project$Route$Events__Slug_({ k: slug }));
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        },
        {
            f_: "^\\/account$",
            fM: function (matches) {
                if (!matches.b) {
                    return $elm$core$Maybe$Just($author$project$Route$Account);
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        },
        {
            f_: "^\\/events$",
            fM: function (matches) {
                if (!matches.b) {
                    return $elm$core$Maybe$Just($author$project$Route$Events);
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        },
        {
            f_: "^\\/$",
            fM: function (matches) {
                if (!matches.b) {
                    return $elm$core$Maybe$Just($author$project$Route$Index);
                }
                else {
                    return $elm$core$Maybe$Nothing;
                }
            }
        }
    ]);
    var $author$project$Route$withoutBaseUrl = function (path) {
        return _String_startsWith_fn($author$project$Route$baseUrl, path) ? $elm$core$String$dropLeft_fn($elm$core$String$length($author$project$Route$baseUrl), path) : path;
    };
    var $author$project$Route$urlToRoute = function (url) {
        return $author$project$Pages$Internal$Router$firstMatch_fn($author$project$Route$matchers, $author$project$Route$withoutBaseUrl(url.cd));
    };
    var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
    var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
    var $author$project$View$map_fn = function (fn, doc) {
        return {
            er: _VirtualDom_map_fn(fn, doc.er),
            be: doc.be
        };
    }, $author$project$View$map = F2($author$project$View$map_fn);
    var $elm$html$Html$footer = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "footer"), $elm$html$Html$footer_fn = $elm$html$Html$footer.a2;
    var $elm$html$Html$main_ = _VirtualDom_nodeNS_fn(_VirtualDom_node_a0, "main"), $elm$html$Html$main__fn = $elm$html$Html$main_.a2;
    var $author$project$ErrorPage$errorPage = $elm$html$Html$div_fn(_List_fromArray([
        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "min-h-full pt-16 pb-12 flex-auto flex flex-col")
    ]), _List_fromArray([
        $elm$html$Html$main__fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8")
        ]), _List_fromArray([
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-shrink-0 flex justify-center")
            ]), _List_fromArray([
                $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$href("/"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "inline-flex")
                ]), _List_fromArray([
                    $elm$html$Html$span_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "sr-only")
                    ]), _List_fromArray([
                        $elm$html$Html$text("Flamingle")
                    ])),
                    $elm$html$Html$text("\uD83E\uDDA9")
                ]))
            ])),
            $elm$html$Html$div_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "py-16")
            ]), _List_fromArray([
                $elm$html$Html$div_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-center")
                ]), _List_fromArray([
                    $elm$html$Html$p_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-sm font-semibold text-fuchsia-600 uppercase tracking-wide")
                    ]), _List_fromArray([
                        $elm$html$Html$text("404 error")
                    ])),
                    $elm$html$Html$h1_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-2 text-4xl font-extrabold text-neutral-100 tracking-tight sm:text-5xl")
                    ]), _List_fromArray([
                        $elm$html$Html$text("Page not found.")
                    ])),
                    $elm$html$Html$p_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-2 text-base text-neutral-500")
                    ]), _List_fromArray([
                        $elm$html$Html$text("Sorry, we couldn\u2019t find the page you\u2019re looking for.")
                    ])),
                    $elm$html$Html$div_fn(_List_fromArray([
                        $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "mt-6")
                    ]), _List_fromArray([
                        $elm$html$Html$a_fn(_List_fromArray([
                            $elm$html$Html$Attributes$href("/"),
                            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-base font-medium text-fuchsia-600 hover:text-fuchsia-500")
                        ]), _List_fromArray([
                            $elm$html$Html$text("Go back home"),
                            $elm$html$Html$span_fn(_List_fromArray([
                                $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
                            ]), _List_fromArray([
                                $elm$html$Html$text("\u2192")
                            ]))
                        ]))
                    ]))
                ]))
            ]))
        ])),
        $elm$html$Html$footer_fn(_List_fromArray([
            $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8")
        ]), _List_fromArray([
            $elm$html$Html$nav_fn(_List_fromArray([
                $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "flex justify-center space-x-4")
            ]), _List_fromArray([
                $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$href("mailto:flaminglesocial.com@gmail.com"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-sm font-medium text-neutral-500 hover:text-neutral-400")
                ]), _List_fromArray([
                    $elm$html$Html$text("Email Support")
                ])),
                $elm$html$Html$span_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "inline-block border-l border-neutral-700"),
                    $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
                ]), _List_Nil),
                $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$href("https://www.isitdownrightnow.com/flaminglesocial.com.html"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-sm font-medium text-neutral-500 hover:text-neutral-400")
                ]), _List_fromArray([
                    $elm$html$Html$text("Status")
                ])),
                $elm$html$Html$span_fn(_List_fromArray([
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "inline-block border-l border-neutral-700"),
                    $elm$virtual_dom$VirtualDom$attribute_fn("aria-hidden", "true")
                ]), _List_Nil),
                $elm$html$Html$a_fn(_List_fromArray([
                    $elm$html$Html$Attributes$href("https://twitter.com/FlamingleSocial"),
                    $elm$html$Html$Attributes$stringProperty_fn($elm$html$Html$Attributes$class_a0, "text-sm font-medium text-neutral-500 hover:text-neutral-400")
                ]), _List_fromArray([
                    $elm$html$Html$text("Twitter")
                ]))
            ]))
        ]))
    ]));
    var $author$project$ErrorPage$view_fn = function (error, model) {
        return { er: $author$project$ErrorPage$errorPage, be: "This is a NotFound Error" };
    }, $author$project$ErrorPage$view = F2($author$project$ErrorPage$view_fn);
    var $author$project$Main$view_fn = function (page, maybePageUrl, globalData, pageData) {
        var _v0 = _Utils_Tuple2(page.hE, pageData);
        _v0$5: while (true) {
            switch (_v0.b.$) {
                case 1:
                    var data = _v0.b.a;
                    return {
                        aI: _List_Nil,
                        N: function (model) {
                            var _v1 = model.dv;
                            if (_v1.$ === 4) {
                                var subModel = _v1.a;
                                return A5($author$project$Shared$template.N, globalData, page, model.c, $author$project$Main$MsgGlobal, $author$project$View$map_fn($author$project$Main$MsgErrorPage____, $author$project$ErrorPage$view_fn(data, subModel)));
                            }
                            else {
                                return {
                                    er: $elm$html$Html$text("Model mismatch"),
                                    be: "Model mismatch"
                                };
                            }
                        }
                    };
                case 2:
                    if ((!_v0.a.$) && (_v0.a.a.$ === 1)) {
                        var _v2 = _v0.a.a;
                        var data = _v0.b.a;
                        return {
                            aI: $author$project$Route$Account$route.aI({
                                m: data,
                                cd: page.cd,
                                L: {},
                                E: globalData
                            }),
                            N: function (model) {
                                var _v3 = model.dv;
                                if (!_v3.$) {
                                    var subModel = _v3.a;
                                    return A5($author$project$Shared$template.N, globalData, page, model.c, $author$project$Main$MsgGlobal, $author$project$View$map_fn($author$project$Main$MsgAccount, A4($author$project$Route$Account$route.N, maybePageUrl, model.c, subModel, {
                                        m: data,
                                        cd: page.cd,
                                        L: {},
                                        E: globalData
                                    })));
                                }
                                else {
                                    return {
                                        er: $elm$html$Html$text("Model mismatch"),
                                        be: "Model mismatch"
                                    };
                                }
                            }
                        };
                    }
                    else {
                        break _v0$5;
                    }
                case 3:
                    if ((!_v0.a.$) && (_v0.a.a.$ === 2)) {
                        var _v4 = _v0.a.a;
                        var data = _v0.b.a;
                        return {
                            aI: $author$project$Route$Events$route.aI({
                                m: data,
                                cd: page.cd,
                                L: {},
                                E: globalData
                            }),
                            N: function (model) {
                                var _v5 = model.dv;
                                if (_v5.$ === 1) {
                                    var subModel = _v5.a;
                                    return A5($author$project$Shared$template.N, globalData, page, model.c, $author$project$Main$MsgGlobal, $author$project$View$map_fn($author$project$Main$MsgEvents, A4($author$project$Route$Events$route.N, maybePageUrl, model.c, subModel, {
                                        m: data,
                                        cd: page.cd,
                                        L: {},
                                        E: globalData
                                    })));
                                }
                                else {
                                    return {
                                        er: $elm$html$Html$text("Model mismatch"),
                                        be: "Model mismatch"
                                    };
                                }
                            }
                        };
                    }
                    else {
                        break _v0$5;
                    }
                case 4:
                    if ((!_v0.a.$) && (_v0.a.a.$ === 3)) {
                        var _v6 = _v0.a.a;
                        var data = _v0.b.a;
                        return {
                            aI: $author$project$Route$Index$route.aI({
                                m: data,
                                cd: page.cd,
                                L: {},
                                E: globalData
                            }),
                            N: function (model) {
                                var _v7 = model.dv;
                                if (_v7.$ === 2) {
                                    var subModel = _v7.a;
                                    return A5($author$project$Shared$template.N, globalData, page, model.c, $author$project$Main$MsgGlobal, $author$project$View$map_fn($author$project$Main$MsgIndex, A4($author$project$Route$Index$route.N, maybePageUrl, model.c, subModel, {
                                        m: data,
                                        cd: page.cd,
                                        L: {},
                                        E: globalData
                                    })));
                                }
                                else {
                                    return {
                                        er: $elm$html$Html$text("Model mismatch"),
                                        be: "Model mismatch"
                                    };
                                }
                            }
                        };
                    }
                    else {
                        break _v0$5;
                    }
                case 5:
                    if ((!_v0.a.$) && (!_v0.a.a.$)) {
                        var s = _v0.a.a.a;
                        var data = _v0.b.a;
                        return {
                            aI: $author$project$Route$Events$Slug_$route.aI({ m: data, cd: page.cd, L: s, E: globalData }),
                            N: function (model) {
                                var _v8 = model.dv;
                                if (_v8.$ === 3) {
                                    var subModel = _v8.a;
                                    return A5($author$project$Shared$template.N, globalData, page, model.c, $author$project$Main$MsgGlobal, $author$project$View$map_fn($author$project$Main$MsgEvents__Slug_, A4($author$project$Route$Events$Slug_$route.N, maybePageUrl, model.c, subModel, { m: data, cd: page.cd, L: s, E: globalData })));
                                }
                                else {
                                    return {
                                        er: $elm$html$Html$text("Model mismatch"),
                                        be: "Model mismatch"
                                    };
                                }
                            }
                        };
                    }
                    else {
                        break _v0$5;
                    }
                default:
                    break _v0$5;
            }
        }
        return {
            aI: _List_Nil,
            N: function (_v9) {
                return {
                    er: $elm$html$Html$div_fn(_List_Nil, _List_fromArray([
                        $elm$html$Html$text("This page could not be found.")
                    ])),
                    be: "Page not found"
                };
            }
        };
    }, $author$project$Main$view = F4($author$project$Main$view_fn);
    var $author$project$Main$config = {
        gE: function (htmlToString) {
            return _List_Cons($author$project$Main$pathsToGenerateHandler, _List_Cons($author$project$Main$routePatterns, _List_Cons($author$project$Main$apiPatterns, $author$project$Api$routes_fn($author$project$Main$getStaticRoutes, htmlToString))));
        },
        gG: _List_Nil,
        gJ: $author$project$Main$byteDecodePageData,
        gK: $author$project$Main$byteEncodePageData,
        gN: $author$project$Effect$fromCmd,
        m: $author$project$Main$dataForRoute,
        gQ: $author$project$Main$decodeResponse,
        gS: $author$project$Main$encodeResponse,
        gU: $author$project$Main$DataErrorPage____,
        gV: $author$project$ErrorPage$statusCode,
        gZ: $author$project$Main$fetchPageData,
        g$: $author$project$Main$fromJsPort($elm$core$Basics$identity),
        g0: $author$project$DataSource$map_fn($elm$core$List$map($elm$core$Maybe$Just), $author$project$Main$getStaticRoutes),
        eH: $elm$core$Maybe$Just($author$project$Main$globalHeadTags),
        g1: $author$project$Main$gotBatchSub($elm$core$Basics$identity),
        fV: $author$project$Main$handleRoute,
        g5: $author$project$Main$hotReloadData($elm$core$Basics$identity),
        de: $author$project$Main$init($elm$core$Maybe$Nothing),
        g8: $author$project$ErrorPage$internalError,
        hm: $author$project$ErrorPage$notFound,
        hn: $elm$core$Maybe$Nothing,
        gq: $author$project$Main$OnPageChange,
        hu: $author$project$Main$routePatterns3,
        hv: $author$project$Effect$perform,
        hF: function (route) {
            return $elm$core$Maybe$withDefault_fn(_List_Nil, $elm$core$Maybe$map_fn($author$project$Route$routeToPath, route));
        },
        hI: $author$project$Main$sendPageData,
        E: $author$project$Shared$template.m,
        hL: $elm$core$Maybe$Just($author$project$Site$config),
        dZ: F3(function (route, path, model) {
            return $elm$core$Platform$Sub$batch(_List_fromArray([
                _Platform_map_fn($author$project$Main$MsgGlobal, A2($author$project$Shared$template.dZ, path, model.c)),
                $author$project$Main$templateSubscriptions_fn(route, path, model)
            ]));
        }),
        hT: $author$project$Main$toJsPort,
        aO: $author$project$Main$update,
        hZ: $author$project$Route$urlToRoute,
        N: $author$project$Main$view
    };
    var $author$project$Main$main = $author$project$Pages$Internal$Platform$Cli$cliApplication($author$project$Main$config);
    _Platform_export({ "Main": { "init": $author$project$Main$main($elm$json$Json$Decode$value)(0) } });
    var isBackend = false && typeof isLamdera !== "undefined";
    function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder) {
        var result = _Json_run_fn(flagDecoder, _Json_wrap(args ? args["flags"] : undefined));
        $elm$core$Result$isOk(result) || _Debug_crash(2);
        var managers = {};
        var initPair = init(result.a);
        var model = (args && args["model"]) || initPair.a;
        var stepper = stepperBuilder(sendToApp, model);
        var ports = _Platform_setupEffects(managers, sendToApp);
        var pos = 0;
        var dead = false;
        var upgradeMode = false;
        function mtime() {
            if (!isBackend) {
                return 0;
            }
            const hrTime = process.hrtime();
            return Math.floor(hrTime[0] * 1000000 + hrTime[1] / 1000);
        }
        function sendToApp(msg, viewMetadata) {
            if (dead) {
                return;
            }
            if (upgradeMode) {
                _Platform_enqueueEffects(managers, $elm$core$Platform$Cmd$none, $elm$core$Platform$Sub$none);
                return;
            }
            var start = mtime();
            var serializeDuration, logDuration = null;
            start = mtime();
            var pair = A2(update, msg, model);
            const updateDuration = mtime() - start;
            start = mtime();
            if (isBackend && loggingEnabled) {
                pos = pos + 1;
                const s = $author$project$LBR$serialize(msg);
                serializeDuration = mtime() - start;
                start = mtime();
                insertEvent(pos, global.config.version, s.a, updateDuration, serializeDuration, $elm$core$Maybe$withDefault_fn(null, s.b));
                logDuration = mtime() - start;
            }
            stepper(model = pair.a, viewMetadata);
            _Platform_enqueueEffects(managers, pair.b, subscriptions(model));
            const stepEnqueueDuration = mtime() - start;
            if (isBackend) {
            }
        }
        if ((args && args["model"]) === undefined) {
            _Platform_enqueueEffects(managers, initPair.b, subscriptions(model));
        }
        var fns = {};
        const die = function () {
            console.log("App dying");
            managers = null;
            model = null;
            stepper = null;
            ports = null;
        };
        return ports ? { ports: ports, gm: function () { return model; }, eum: function () { upgradeMode = true; }, die: die, fns: fns } : {};
    }
}(this));
