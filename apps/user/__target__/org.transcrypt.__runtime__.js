// Transcrypt'ed from Python, 2025-07-11 20:22:30
import {py_copy as _copy} from './copy.js';
var __name__ = 'org.transcrypt.__runtime__';
export var __envir__ = {};
__envir__.interpreter_name = 'python';
__envir__.transpiler_name = 'transcrypt';
__envir__.executor_name = __envir__.transpiler_name;
__envir__.transpiler_version = '3.9.4';

export function __nest__ (headObject, tailNames, value) {
    var current = headObject;
    if (tailNames != '') {
        var tailChain = tailNames.split ('.');
        var firstNewIndex = tailChain.length;
        for (var index = 0; index < tailChain.length; index++) {
            if (!current.hasOwnProperty (tailChain [index])) {
                firstNewIndex = index;
                break;
            }
            current = current [tailChain [index]];
        }
        for (var index = firstNewIndex; index < tailChain.length; index++) {
            current [tailChain [index]] = {};
            current = current [tailChain [index]];
        }
    }
    for (let attrib of Object.getOwnPropertyNames (value)) {
        Object.defineProperty (current, attrib, {
            get () {return value [attrib];},
            enumerable: true,
            configurable: true
        });
    }
};
export function __init__ (module) {
    if (!module.__inited__) {
        module.__all__.__init__ (module.__all__);
        module.__inited__ = true;
    }
    return module.__all__;
};
export function __get__ (aThis, func, quotedFuncName) {
    if (aThis) {
        if (aThis.hasOwnProperty ('__class__') || typeof aThis == 'string' || aThis instanceof String) {
            if (quotedFuncName) {
                Object.defineProperty (aThis, quotedFuncName, {
                    value: function () {
                        var args = [] .slice.apply (arguments);
                        return func.apply (null, [aThis] .concat (args));
                    },
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [aThis.__proxy__ ? aThis.__proxy__ : aThis] .concat (args));
            };
        }
        else {
            return func;
        }
    }
    else {
        return func;
    }
};
export function __getcm__ (aThis, func, quotedFuncName) {
    if (aThis.hasOwnProperty ('__class__')) {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [aThis.__class__] .concat (args));
        };
    }
    else {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [aThis] .concat (args));
        };
    }
};
export function __getsm__ (aThis, func, quotedFuncName) {
    return func;
};
export var py_metatype = {
    __name__: 'type',
    __bases__: [],
    __new__: function (meta, name, bases, attribs) {
        var cls = function () {
            var args = [] .slice.apply (arguments);
            return cls.__new__ (args);
        };
        for (var index = bases.length - 1; index >= 0; index--) {
            var base = bases [index];
            for (var attrib in base) {
                var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                if (descrip == null) {
                    continue;
                }
                Object.defineProperty (cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols (base)) {
                let descrip = Object.getOwnPropertyDescriptor (base, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
        }
        cls.__metaclass__ = meta;
        cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
        cls.__bases__ = bases;
        for (var attrib in attribs) {
            var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
            Object.defineProperty (cls, attrib, descrip);
        }
        for (let symbol of Object.getOwnPropertySymbols (attribs)) {
            let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
            Object.defineProperty (cls, symbol, descrip);
        }
        return cls;
    }
};
py_metatype.__metaclass__ = py_metatype;
export var object = {
    __init__: function (self) {},
    __metaclass__: py_metatype,
    __name__: 'object',
    __bases__: [],
    __new__: function (args) {
        var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
        if ('__getattr__' in this || '__setattr__' in this) {
            instance.__proxy__ = new Proxy (instance, {
                get: function (target, name) {
                    let result = target [name];
                    if (result == undefined) {
                        return target.__getattr__ (name);
                    }
                    else {
                        return result;
                    }
                },
                set: function (target, name, value) {
                    try {
                        target.__setattr__ (name, value);
                    }
                    catch (exception) {
                        target [name] = value;
                    }
                    return true;
                }
            })
			instance = instance.__proxy__
        }
        this.__init__.apply (null, [instance] .concat (args));
        return instance;
    }
};
export function __class__ (name, bases, attribs, meta) {
    if (meta === undefined) {
        meta = bases [0] .__metaclass__;
    }
    return meta.__new__ (meta, name, bases, attribs);
};
export function __pragma__ () {};
export function __call__ (/* <callee>, <this>, <params>* */) {
    var args = [] .slice.apply (arguments);
    if (typeof args [0] == 'object' && '__call__' in args [0]) {
        return args [0] .__call__ .apply (args [1], args.slice (2));
    }
    else {
        return args [0] .apply (args [1], args.slice (2));
    }
};
__envir__.executor_name = __envir__.transpiler_name;
var __main__ = {__file__: ''};
var __except__ = null;
export function __kwargtrans__ (anObject) {
    anObject.__kwargtrans__ = null;
    anObject.constructor = Object;
    return anObject;
}
export function __super__ (aClass, methodName) {
    for (let base of aClass.__bases__) {
        if (methodName in base) {
           return base [methodName];
        }
    }
    throw new Exception ('Superclass method not found');
}
export function property (getter, setter) {
    if (!setter) {
        setter = function () {};
    }
    return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
}
export function __setproperty__ (anObject, name, descriptor) {
    if (!anObject.hasOwnProperty (name)) {
        Object.defineProperty (anObject, name, descriptor);
    }
}
export function assert (condition, message) {
    if (!condition) {
        throw AssertionError (message, new Error ());
    }
}
export function __mergekwargtrans__ (object0, object1) {
    var result = {};
    for (var attrib in object0) {
        result [attrib] = object0 [attrib];
    }
    for (var attrib in object1) {
        result [attrib] = object1 [attrib];
    }
    return result;
};
export function __mergefields__ (targetClass, sourceClass) {
    let fieldNames = ['__reprfields__', '__comparefields__', '__initfields__']
    if (sourceClass [fieldNames [0]]) {
        if (targetClass [fieldNames [0]]) {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set ([...targetClass [fieldName], ...sourceClass [fieldName]]);
            }
        }
        else {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set (sourceClass [fieldName]);
            }
        }
    }
}
export function __withblock__ (manager, statements) {
    if (hasattr (manager, '__enter__')) {
        try {
            manager.__enter__ ();
            statements ();
            manager.__exit__ ();
        }
        catch (exception) {
            if (! (manager.__exit__ (exception.name, exception, exception.stack))) {
                throw exception;
            }
        }
    }
    else {
        statements ();
        manager.close ();
    }
};
export function dir (obj) {
    var aList = [];
    for (var aKey in obj) {
        aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
    }
    aList.sort ();
    return aList;
};
export function setattr (obj, name, value) {
    obj [name] = value;
};
export function getattr (obj, name) {
    return name in obj ? obj [name] : obj ['py_' + name];
};
export function hasattr (obj, name) {
    try {
        return name in obj || 'py_' + name in obj;
    }
    catch (exception) {
        return false;
    }
};
export function delattr (obj, name) {
    if (name in obj) {
        delete obj [name];
    }
    else {
        delete obj ['py_' + name];
    }
};
export function __in__ (element, container) {
    if (container === undefined || container === null) {
        return false;
    }
    if (container.__contains__ instanceof Function) {
        return container.__contains__ (element);
    }
    else {
        return (
            container.indexOf ?
            container.indexOf (element) > -1 :
            container.hasOwnProperty (element)
        );
    }
};
export function __specialattrib__ (attrib) {
    return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
};
export function len (anObject) {
    if (anObject === undefined || anObject === null) {
        return 0;
    }
    if (anObject.__len__ instanceof Function) {
        return anObject.__len__ ();
    }
    if (anObject.length !== undefined) {
        return anObject.length;
    }
    var length = 0;
    for (var attr in anObject) {
        if (!__specialattrib__ (attr)) {
            length++;
        }
    }
    return length;
};
export function __i__ (any) {
    return py_typeof (any) == dict ? any.py_keys () : any;
}
export function __k__ (keyed, key) {
    var result = keyed [key];
    if (typeof result == 'undefined') {
        if (keyed instanceof Array)
            if (key == +key && key >= 0 && keyed.length > key)
                return result;
            else
                throw IndexError (key, new Error());
        else
            throw KeyError (key, new Error());
    }
    return result;
}
export function __t__ (target) {
    return (
        target === undefined || target === null ? false :
        ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
        target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
        target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
        target instanceof Function ? target :
        len (target) !== 0 ? target :
        false
    );
}
export function float (any) {
    if (any == 'inf') {
        return Infinity;
    }
    else if (any == '-inf') {
        return -Infinity;
    }
    else if (any == 'nan') {
        return NaN;
    }
    else if (isNaN (parseFloat (any))) {
        if (any === false) {
            return 0;
        }
        else if (any === true) {
            return 1;
        }
        else {
            throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
        }
    }
    else {
        return +any;
    }
};
float.__name__ = 'float';
float.__bases__ = [object];
export function int (any) {
    return float (any) | 0
};
int.__name__ = 'int';
int.__bases__ = [object];
export function bool (any) {
    return !!__t__ (any);
};
bool.__name__ = 'bool';
bool.__bases__ = [int];
export function py_typeof (anObject) {
    var aType = typeof anObject;
    if (aType == 'object') {
        try {
            return '__class__' in anObject ? anObject.__class__ : object;
        }
        catch (exception) {
            return aType;
        }
    }
    else {
        return (
            aType == 'boolean' ? bool :
            aType == 'string' ? str :
            aType == 'number' ? (anObject % 1 == 0 ? int : float) :
            null
        );
    }
};
export function issubclass (aClass, classinfo) {
    if (classinfo instanceof Array) {
        for (let aClass2 of classinfo) {
            if (issubclass (aClass, aClass2)) {
                return true;
            }
        }
        return false;
    }
    try {
        var aClass2 = aClass;
        if (aClass2 == classinfo) {
            return true;
        }
        else {
            var bases = [].slice.call (aClass2.__bases__);
            while (bases.length) {
                aClass2 = bases.shift ();
                if (aClass2 == classinfo) {
                    return true;
                }
                if (aClass2.__bases__.length) {
                    bases = [].slice.call (aClass2.__bases__).concat (bases);
                }
            }
            return false;
        }
    }
    catch (exception) {
        return aClass == classinfo || classinfo == object;
    }
};
export function isinstance (anObject, classinfo) {
    try {
        return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
    }
    catch (exception) {
        return issubclass (py_typeof (anObject), classinfo);
    }
};
export function callable (anObject) {
    return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
};
export function repr (anObject) {
    try {
        return anObject.__repr__ ();
    }
    catch (exception) {
        try {
            return anObject.__str__ ();
        }
        catch (exception) {
            try {
                if (anObject == null) {
                    return 'None';
                }
                else if (anObject.constructor == Object) {
                    var result = '{';
                    var comma = false;
                    for (var attrib in anObject) {
                        if (!__specialattrib__ (attrib)) {
                            if (attrib.isnumeric ()) {
                                var attribRepr = attrib;
                            }
                            else {
                                var attribRepr = '\'' + attrib + '\'';
                            }
                            if (comma) {
                                result += ', ';
                            }
                            else {
                                comma = true;
                            }
                            result += attribRepr + ': ' + repr (anObject [attrib]);
                        }
                    }
                    result += '}';
                    return result;
                }
                else {
                    return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                }
            }
            catch (exception) {
                return '<object of type: ' + typeof anObject + '>';
            }
        }
    }
};
export function chr (charCode) {
    return String.fromCharCode (charCode);
};
export function ord (aChar) {
    return aChar.charCodeAt (0);
};
function min_max (f_compare, ...args) {
    let dflt = undefined;
    function key(x) {return x}
    if (args.length > 0) {
        if (args[args.length-1] && args[args.length-1].hasOwnProperty ("__kwargtrans__")) {
            const kwargs = args[args.length - 1];
            args = args.slice(0, -1);
            if (kwargs.hasOwnProperty('py_default')) dflt = kwargs['py_default'];
            if (kwargs.hasOwnProperty('key')) key = kwargs['key'];
            if (Object.prototype.toString.call(key) !== '[object Function]') throw TypeError("object is not callable", new Error());
        }
    }
    if (args.length === 0) throw TypeError("expected at least 1 argument, got 0", new Error ());
    if (args.length > 1 && dflt !== undefined) throw TypeError("Cannot specify a default with multiple positional arguments", new Error ());
    if (args.length === 1){
        if (Object.prototype.toString.call(args[0]) !== '[object Array]') throw TypeError("object is not iterable", new Error());
        args = args[0];
    }
    if (args.length === 0){
        if (dflt === undefined) throw ValueError ("arg is an empty sequence", new Error ());
        return dflt
    }
    return args.reduce((max_val, cur_val) => f_compare(key(cur_val), key(max_val)) ? cur_val : max_val);
}
export function max (...args) {
    return min_max(function (a, b){return a > b}, ...args)
}
export function min (...args) {
    return min_max(function (a, b){return a < b}, ...args)
}
export function bin (nbr) {
    const sign = nbr<0 ? '-' : '';
    const bin_val = Math.abs(parseInt(nbr)).toString(2);
    return sign.concat('0b', bin_val);
};
export function oct (nbr) {
    const sign = nbr<0 ? '-' : '';
    const oct_val = Math.abs(parseInt(nbr)).toString(8);
    return sign.concat('0o', oct_val);
};
export function hex (nbr) {
    const sign = nbr<0 ? '-' : '';
    const hex_val = Math.abs(parseInt(nbr)).toString(16);
    return sign.concat('0x', hex_val);
};
export var abs = Math.abs;
export function round (number, ndigits) {
    if (ndigits) {
        var scale = Math.pow (10, ndigits);
        number *= scale;
    }
    var rounded = Math.round (number);
    if (rounded - number == 0.5 && rounded % 2) {
        rounded -= 1;
    }
    if (ndigits) {
        rounded /= scale;
    }
    return rounded;
};
export function __jsUsePyNext__ () {
    try {
        var result = this.__next__ ();
        return {value: result, done: false};
    }
    catch (exception) {
        return {value: undefined, done: true};
    }
}
export function __pyUseJsNext__ () {
    var result = this.next ();
    if (result.done) {
        throw StopIteration (new Error ());
    }
    else {
        return result.value;
    }
}
export function py_iter (iterable) {
    if (typeof iterable == 'string' || '__iter__' in iterable) {
        var result = iterable.__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('selector' in iterable) {
        var result = list (iterable) .__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('next' in iterable) {
        var result = iterable
        if (! ('__next__' in result)) {
            result.__next__ = __pyUseJsNext__;
        }
    }
    else if (Symbol.iterator in iterable) {
        var result = iterable [Symbol.iterator] ();
        result.__next__ = __pyUseJsNext__;
    }
    else {
        throw IterableError (new Error ());
    }
    result [Symbol.iterator] = function () {return result;};
    return result;
}
export function py_next (iterator, value) {
    try {
        var result = iterator.__next__ ();
    }
    catch (exception) {
        var result = iterator.next ();
        if (result.done) {
            if(!(value === undefined)) return value
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    if (result === undefined) {
        if(!(value === undefined)) return value
        throw StopIteration (new Error ());
    }
    else {
        return result;
    }
}
export function __PyIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
    this.__len__ = function () {return iterable.length};
}
__PyIterator__.prototype.__next__ = function() {
    if (this.index < this.iterable.length) {
        return this.iterable [this.index++];
    }
    else {
        throw StopIteration (new Error ());
    }
};
export function __JsIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__JsIterator__.prototype.next = function () {
    if (this.index < this.iterable.py_keys.length) {
        return {value: this.index++, done: false};
    }
    else {
        return {value: undefined, done: true};
    }
};
export function py_reversed (iterable) {
    iterable = iterable.slice ();
    iterable.reverse ();
    return iterable;
};
export function zip () {
    var args = [] .slice.call (arguments);
    for (var i = 0; i < args.length; i++) {
        if (typeof args [i] == 'string') {
            args [i] = args [i] .split ('');
        }
        else if (!Array.isArray (args [i])) {
            args [i] = Array.from (args [i]);
        }
    }
    var shortest = args.length == 0 ? [] : args.reduce (
        function (array0, array1) {
            return array0.length < array1.length ? array0 : array1;
        }
    );
    return shortest.map (
        function (current, index) {
            return args.map (
                function (current) {
                    return current [index];
                }
            );
        }
    );
};
export function range (start, stop, step) {
    if (stop == undefined) {
        stop = start;
        start = 0;
    }
    if (step == undefined) {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};
export function any (iterable) {
    for (let item of iterable) {
        if (bool (item)) {
            return true;
        }
    }
    return false;
}
export function all (iterable) {
    for (let item of iterable) {
        if (! bool (item)) {
            return false;
        }
    }
    return true;
}
export function sum (iterable) {
    let result = 0;
    for (let item of iterable) {
        result += item;
    }
    return result;
}
function* __enumerate__ (iterable, start=0) {
    if (start.hasOwnProperty("__kwargtrans__")) {
        start = start['start'];
    }
    let n = start
    for (const item of iterable) {
        yield [n, item]
        n += 1
    }
}
export var py_enumerate = __enumerate__;
export function list (iterable) {
    let instance = iterable ? Array.from (iterable) : [];
    return instance;
}
Array.prototype.__class__ = list;
list.__name__ = 'list';
list.__bases__ = [object];
Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
Array.prototype.__getslice__ = function (start, stop, step) {
    if (step === null) {
        step = 1;
    }
    if (start === null) {
        start = (step < 0 ? -1 : 0);
    }
    if (start < 0) {
        start = Math.max(this.length + start, 0);
    } else if (start > this.length || (start === this.length && step < 0)) {
        start = this.length > 0 ? this.length - 1 : 0;
    }
    if (stop === null) {
        stop = (step < 0 && this.length > 0 ? -1 : this.length);
    } else if (stop < 0) {
        stop = Math.max(this.length + stop, (step < 0 && this.length > 0 ? -1 : 0));
    } else if (stop > this.length) {
        stop = this.length;
    }
    if (step === 1) {
        return Array.prototype.slice.call(this, start, stop);
    }
    let result = list ([]);
    if (step > 0) {
        for (let index = start; index < stop; index += step) {
            result.push (this [index]);
        }
    } else if (step < 0) {
        for (let index = start; index > stop; index += step) {
            result.push (this [index]);
        }
    } else {
        throw ValueError ("slice step cannot be zero", new Error ());
    }
    return result;
};
Array.prototype.__setslice__ = function (start, stop, step, source) {
    if (step === null) {
        step = 1;
    }
    if (start === null) {
        start = (step < 0 ? -1 : 0);
    }
    if (start < 0) {
        start = Math.max(this.length + start, 0);
    } else if (start > this.length || (start === this.length && step < 0)) {
        start = this.length > 0 ? this.length - 1 : 0;
    }
    if (stop === null) {
        stop = (step < 0 && this.length > 0 ? -1 : this.length);
    } else if (stop < 0) {
        stop = Math.max(this.length + stop, (step < 0 && this.length > 0 ? -1 : 0));
    } else if (stop > this.length) {
        stop = this.length;
    }
    if (step === 1) {
        Array.prototype.splice.apply (this, [start, stop - start] .concat (Array.from(source)));
    }
    else {
        const seq_len = Math.ceil((stop - start) / step)
        if((source.length > 0 || seq_len > 0) && (seq_len !== source.length)){
            throw ValueError ("attempt to assign sequence of size " + source.length + " to extended slice of size " + seq_len, new Error ());
        }
        let sourceIndex = 0;
        if (step > 0) {
            for (let targetIndex = start; targetIndex < stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        } else if (step < 0) {
            for (let targetIndex = start; targetIndex > stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        } else {
            throw ValueError ("slice step cannot be zero", new Error ());
        }
    }
};
Array.prototype.__repr__ = function () {
    if (this.__class__ == set && !this.length) {
        return 'set()';
    }
    let result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
    for (let index = 0; index < this.length; index++) {
        if (index) {
            result += ', ';
        }
        result += repr (this [index]);
    }
    if (this.__class__ == tuple && this.length == 1) {
        result += ',';
    }
    result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
    return result;
};
Array.prototype.__str__ = Array.prototype.__repr__;
Array.prototype.append = function (element) {
    this.push (element);
};
Array.prototype.py_clear = function () {
    this.length = 0;
};
Array.prototype.py_copy = function () {
    return this.slice();
};
Array.prototype.extend = function (aList) {
    this.push.apply (this, aList);
};
Array.prototype.insert = function (index, element) {
    this.splice (index, 0, element);
};
Array.prototype.remove = function (element) {
    let index = this.indexOf (element);
    if (index === -1) {
        throw ValueError("list.remove(x): x not in list", new Error ());
    }
    this.splice (index, 1);
};
Array.prototype.index = function (element) {
    return this.indexOf (element);
};
Array.prototype.py_pop = function (index) {
    if(this.length === 0){
        throw IndexError("pop from empty list", new Error())
    }
    if (index === undefined) {
        return this.pop ();
    }
    else {
        const idx = index < 0 ? this.length + index : index
        if(this[idx] === undefined){
            throw IndexError("pop index out of range", new Error())
        }
        return this.splice (idx, 1) [0];
    }
};
Array.prototype.py_sort = function () {
    __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
};
Array.prototype.__add__ = function (aList) {
    return list (this.concat (aList));
};
Array.prototype.__mul__ = function (scalar) {
    let result = this;
    for (let i = 1; i < scalar; i++) {
        result = result.concat (this);
    }
    return result;
};
Array.prototype.__rmul__ = Array.prototype.__mul__;
export function tuple (iterable) {
    let instance = iterable ? [] .slice.apply (iterable) : [];
    instance.__class__ = tuple;
    return instance;
}
tuple.__name__ = 'tuple';
tuple.__bases__ = [object];
export function set (iterable) {
    let instance = [];
    if (iterable) {
        for (let index = 0; index < iterable.length; index++) {
            instance.add (iterable [index]);
        }
    }
    instance.__class__ = set;
    return instance;
}
set.__name__ = 'set';
set.__bases__ = [object];
Array.prototype.__bindexOf__ = function (element) {
    element += '';
    let mindex = 0;
    let maxdex = this.length - 1;
    while (mindex <= maxdex) {
        let index = (mindex + maxdex) / 2 | 0;
        let middle = this [index] + '';
        if (middle < element) {
            mindex = index + 1;
        }
        else if (middle > element) {
            maxdex = index - 1;
        }
        else {
            return index;
        }
    }
    return -1;
};
Array.prototype.add = function (element) {
    if (this.indexOf (element) == -1) {
        this.push (element);
    }
};
Array.prototype.discard = function (element) {
    var index = this.indexOf (element);
    if (index != -1) {
        this.splice (index, 1);
    }
};
Array.prototype.isdisjoint = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issuperset = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) == -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issubset = function (other) {
    return set (other.slice ()) .issuperset (this);
};
Array.prototype.union = function (other) {
    let result = set (this.slice () .sort ());
    for (let i = 0; i < other.length; i++) {
        if (result.__bindexOf__ (other [i]) == -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.intersection = function (other) {
    this.sort ();
    let result = set ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.difference = function (other) {
    let sother = set (other.slice () .sort ());
    let result = set ();
    for (let i = 0; i < this.length; i++) {
        if (sother.__bindexOf__ (this [i]) == -1) {
            result.push (this [i]);
        }
    }
    return result;
};
Array.prototype.symmetric_difference = function (other) {
    return this.union (other) .difference (this.intersection (other));
};
Array.prototype.py_update = function () {
    let updated = [] .concat.apply (this.slice (), arguments) .sort ();
    this.py_clear ();
    for (let i = 0; i < updated.length; i++) {
        if (updated [i] != updated [i - 1]) {
            this.push (updated [i]);
        }
    }
};
Array.prototype.__eq__ = function (other) {
    if (this.length != other.length) {
        return false;
    }
    if (this.__class__ == set) {
        this.sort ();
        other.sort ();
    }
    for (let i = 0; i < this.length; i++) {
        if (this [i] != other [i]) {
            return false;
        }
    }
    return true;
};
Array.prototype.__ne__ = function (other) {
    return !this.__eq__ (other);
};
Array.prototype.__le__ = function (other) {
    if (this.__class__ == set) {
        return this.issubset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] > other [i]) {
                return false;
            }
            else if (this [i] < other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__ge__ = function (other) {
    if (this.__class__ == set) {
        return this.issuperset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] < other [i]) {
                return false;
            }
            else if (this [i] > other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__lt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issubset (other) && !this.issuperset (other) :
        !this.__ge__ (other)
    );
};
Array.prototype.__gt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issuperset (other) && !this.issubset (other) :
        !this.__le__ (other)
    );
};
export function bytearray (bytable, encoding) {
    if (bytable == undefined) {
        return new Uint8Array (0);
    }
    else {
        let aType = py_typeof (bytable);
        if (aType == int) {
            return new Uint8Array (bytable);
        }
        else if (aType == str) {
            let aBytes = new Uint8Array (len (bytable));
            for (let i = 0; i < len (bytable); i++) {
                aBytes [i] = bytable.charCodeAt (i);
            }
            return aBytes;
        }
        else if (aType == list || aType == tuple) {
            return new Uint8Array (bytable);
        }
        else {
            throw py_TypeError;
        }
    }
}
export var bytes = bytearray;
Uint8Array.prototype.__add__ = function (aBytes) {
    let result = new Uint8Array (this.length + aBytes.length);
    result.set (this);
    result.set (aBytes, this.length);
    return result;
};
Uint8Array.prototype.__mul__ = function (scalar) {
    let result = new Uint8Array (scalar * this.length);
    for (let i = 0; i < scalar; i++) {
        result.set (this, i * this.length);
    }
    return result;
};
Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
export function str (stringable) {
    if (typeof stringable === 'number')
        return stringable.toString();
    else {
        try {
            return stringable.__str__ ();
        }
        catch (exception) {
            try {
                return repr (stringable);
            }
            catch (exception) {
                return String (stringable);
            }
        }
    }
};
String.prototype.__class__ = str;
str.__name__ = 'str';
str.__bases__ = [object];
String.prototype.__iter__ = function () {new __PyIterator__ (this);};
String.prototype.__repr__ = function () {
    return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
};
String.prototype.__str__ = function () {
    return this;
};
String.prototype.capitalize = function () {
    return this.charAt (0).toUpperCase () + this.slice (1);
};
String.prototype.endswith = function (suffix, start=0, end) {
    if (end === undefined) {end = this.length}
    const str = this.slice(start, end)
    if (suffix instanceof Array) {
        for (var i=0;i<suffix.length;i++) {
            if (str.slice (-suffix[i].length) === suffix[i])
                return true;
        }
    } else
        return suffix === '' || str.slice (-suffix.length) === suffix;
    return false;
};
String.prototype.find = function (sub, start) {
    return this.indexOf (sub, start);
};
String.prototype.__getslice__ = function (start, stop, step) {
    if (step === null) {
        step = 1;
    }
    if (start === null) {
        start = (step < 0 ? -1 : 0);
    }
    if (start < 0) {
        start = Math.max(this.length + start, 0);
    } else if (start > this.length) {
        start = this.length > 0 ? this.length + (step < 0 ? -1 : 0) : 0;
    }
    if (stop === null) {
        stop = (step < 0 && this.length > 0 ? -1 : this.length);
    } else if (stop < 0) {
        stop = Math.max(this.length + stop, (step < 0 && this.length > 0 ? -1 : 0));
    } else if (stop > this.length) {
        stop = this.length;
    }
    if (step === 1) {
        return this.substring (start, (start > stop ? start : stop));
    }
    let result = '';
    if (step > 0) {
        for (var index = start; index < stop; index += step) {
            result = result.concat (this.charAt(index));
        }
    } else if (step < 0) {
        for (var index = start; index > stop; index += step) {
            result = result.concat (this.charAt(index));
        }
    }
    else {
        throw ValueError ("slice step cannot be zero", new Error ());
    }
    return result;
};
__setproperty__ (String.prototype, 'format', {
    get: function () {return __get__ (this, function (self) {
        var args = tuple ([] .slice.apply (arguments).slice (1));
        var autoIndex = 0;
        return self.replace (/\{(\w*)\}/g, function (match, key) {
            if (key == '') {
                key = autoIndex++;
            }
            if (key == +key) {
                return args [key] === undefined ? match : str (args [key]);
            }
            else {
                for (var index = 0; index < args.length; index++) {
                    if (typeof args [index] == 'object' && args [index][key] !== undefined) {
                        return str (args [index][key]);
                    }
                }
                return match;
            }
        });
    });},
    enumerable: true
});
String.prototype.isalnum = function () {
    return /^[0-9a-zA-Z]{1,}$/.test(this)
}
String.prototype.isalpha = function () {
    return /^[a-zA-Z]{1,}$/.test(this)
}
String.prototype.isdecimal = function () {
    return /^[0-9]{1,}$/.test(this)
}
String.prototype.isdigit = function () {
    return this.isdecimal()
}
String.prototype.islower = function () {
    return /^[a-z]{1,}$/.test(this)
}
String.prototype.isupper = function () {
    return /^[A-Z]{1,}$/.test(this)
}
String.prototype.isspace = function () {
    return /^[\s]{1,}$/.test(this)
}
String.prototype.isnumeric = function () {
    return !isNaN (parseFloat (this)) && isFinite (this);
};
String.prototype.join = function (strings) {
    strings = Array.from (strings);
    return strings.join (this);
};
String.prototype.lower = function () {
    return this.toLowerCase ();
};
String.prototype.py_replace = function (old, aNew, maxreplace) {
    if (maxreplace === undefined || maxreplace < 0) {
        return this.split(old).join(aNew);
    } else if (maxreplace === 0) {
        return this;
    } else {
        const pre = this.split(old, maxreplace).join(aNew);
        const rest = this.slice(this.split(old, maxreplace).join(old).length + 1)
        return pre.concat(rest.length>0 ? aNew : '', rest);
    }
};
String.prototype.lstrip = function () {
    return this.replace (/^\s*/g, '');
};
String.prototype.rfind = function (sub, start) {
    return this.lastIndexOf (sub, start);
};
String.prototype.rsplit = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            var maxrsplit = result.length - maxsplit;
            return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
        }
        else {
            return result;
        }
    }
};
String.prototype.rstrip = function () {
    return this.replace (/\s*$/g, '');
};
String.prototype.py_split = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
        }
        else {
            return result;
        }
    }
};
String.prototype.splitlines = function (keepends) {
    if (this.length === 0) {
        return [];
    }
    if (keepends === undefined || keepends === null || keepends === false) {
        return this.trimEnd().split(/\r?\n|\r|\n/g);
    }
    else {
        return this.split(/(?<=\n)(?=\n)|(?<=[\r\n])(?=[^\r\n])/g);
    }
};
String.prototype.startswith = function (prefix, start=0, end) {
    if (end === undefined) {end = this.length}
    const str = this.slice(start, end)
    if (prefix instanceof Array) {
        for (let i=0;i<prefix.length;i++) {
            if (str.indexOf (prefix [i]) === 0)
                return true;
        }
    } else {
        return str.indexOf(prefix) === 0;
    }
    return false;
}
String.prototype.strip = function () {
    return this.trim ();
};
String.prototype.upper = function () {
    return this.toUpperCase ();
};
String.prototype.__mul__ = function (scalar) {
    var result = '';
    for (var i = 0; i < scalar; i++) {
        result = result + this;
    }
    return result;
};
String.prototype.__rmul__ = String.prototype.__mul__;
function __contains__ (element) {
    return this.hasOwnProperty (element);
}
function __keys__ () {
    var keys = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            keys.push (attrib);
        }
    }
    return keys;
}
function __items__ () {
    var items = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            items.push ([attrib, this [attrib]]);
        }
    }
    return items;
}
function __del__ (key) {
    delete this [key];
}
function __clear__ () {
    for (var attrib in this) {
        delete this [attrib];
    }
}
function __getdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result === undefined) {
        result = this ['py_' + aKey]
    }
    return result === undefined ? (aDefault === undefined ? null : aDefault) : result;
}
function __setdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result !== undefined) {
        return result;
    }
    var val = aDefault === undefined ? null : aDefault;
    this [aKey] = val;
    return val;
}
function __pop__ (aKey, aDefault) {
    var result = this [aKey];
    if (result !== undefined) {
        delete this [aKey];
        return result;
    } else {
        if ( aDefault === undefined ) {
            throw KeyError (aKey, new Error());
        }
    }
    return aDefault;
}
function __popitem__ () {
    const aKeys = Object.keys (this);
    if (aKeys.length === 0) {
        throw KeyError ("popitem(): dictionary is empty", new Error ());
    }
    const aKey = aKeys[aKeys.length - 1]
    const result = tuple ([aKey, this [aKey]]);
    delete this [aKey];
    return result;
}
function __update__ (aDict) {
    for (var aKey in aDict) {
        this [aKey] = aDict [aKey];
    }
}
function __copy__ () {
    let dNew = {};
    for (let attrib in this) {
        dNew[attrib] = this[attrib];
    }
    return dict(dNew);
}
function __fromkeys__ (iterable, defVal) {
    if(iterable === undefined){
        throw TypeError("fromkeys expected at least 1 argument, got 0")
    }
    if ( !(['[object Array]', '[object String]'].includes(Object.prototype.toString.call(iterable))) ) {
        throw TypeError("object is not iterable", new Error());
    }
    if(defVal === undefined) defVal = null;
    let dNew = {};
    for (let idx= 0; idx < iterable.length; idx++) {
        dNew[iterable[idx]] = defVal;
    }
    return dict(dNew);
}
function __values__ () {
    var values = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            values.push (this [attrib]);
        }
    }
    return values;
}
function __dgetitem__ (aKey) {
    return this [aKey];
}
function __dsetitem__ (aKey, aValue) {
    this [aKey] = aValue;
}
export function dict (objectOrPairs) {
    let instance = {};
    if (!objectOrPairs || objectOrPairs instanceof Array) {
        if (objectOrPairs) {
            for (let index = 0; index < objectOrPairs.length; index++) {
                const pair = objectOrPairs [index];
                if ( !(pair instanceof Array) || pair.length !== 2) {
                    throw ValueError(
                        "dict update sequence element #" + index +
                        " has length " + pair.length +
                        "; 2 is required", new Error());
                }
                const key = pair [0];
                let val = pair [1];
                if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                     if (!isinstance (objectOrPairs, dict)) {
                         val = dict (val);
                     }
                }
                instance [key] = val;
            }
        }
    }
    else {
        if (isinstance (objectOrPairs, dict)) {
            const aKeys = objectOrPairs.py_keys ();
            for (let index = 0; index < aKeys.length; index++ ) {
                const key = aKeys [index];
                instance [key] = objectOrPairs [key];
            }
        } else if (objectOrPairs instanceof Object) {
            instance = objectOrPairs;
        } else {
            throw ValueError ("Invalid type of object for dict creation", new Error ());
        }
    }
    __setproperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
    __setproperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
    __setproperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
    __setproperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, 'py_items', {value: __items__, enumerable: false});
    __setproperty__ (instance, 'py_del', {value: __del__, enumerable: false});
    __setproperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
    __setproperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
    __setproperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
    __setproperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
    __setproperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
    __setproperty__ (instance, 'py_update', {value: __update__, enumerable: false});
    __setproperty__ (instance, 'py_copy', {value: __copy__, enumerable: false});
    __setproperty__ (instance, 'py_values', {value: __values__, enumerable: false});
    __setproperty__ (instance, 'py_fromkeys', {value: __fromkeys__, enumerable: false});
    __setproperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
    __setproperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
    return instance;
}
dict.__name__ = 'dict';
dict.__bases__ = [object];
dict.py_fromkeys = __fromkeys__
function __setdoc__ (docString) {
    this.__doc__ = docString;
    return this;
}
__setproperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
export function __jsmod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
export function __mod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
export function __pow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
export var pow = __pow__;
export function __neg__ (a) {
    if (typeof a == 'object' && '__neg__' in a) {
        return a.__neg__ ();
    }
    else {
        return -a;
    }
};
export function __matmul__ (a, b) {
    return a.__matmul__ (b);
};
export function __mul__ (a, b) {
    if (typeof a == 'object' && '__mul__' in a) {
        return a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return b.__rmul__ (a);
    }
    else {
        return a * b;
    }
};
export function __truediv__ (a, b) {
    if (typeof a == 'object' && '__truediv__' in a) {
        return a.__truediv__ (b);
    }
    else if (typeof b == 'object' && '__rtruediv__' in b) {
        return b.__rtruediv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return a / b;
    }
};
export function __floordiv__ (a, b) {
    if (typeof a == 'object' && '__floordiv__' in a) {
        return a.__floordiv__ (b);
    }
    else if (typeof b == 'object' && '__rfloordiv__' in b) {
        return b.__rfloordiv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return Math.floor (a / b);
    }
};
export function __add__ (a, b) {
    if (typeof a == 'object' && '__add__' in a) {
        return a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return b.__radd__ (a);
    }
    else {
        return a + b;
    }
};
export function __sub__ (a, b) {
    if (typeof a == 'object' && '__sub__' in a) {
        return a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return b.__rsub__ (a);
    }
    else {
        return a - b;
    }
};
export function __lshift__ (a, b) {
    if (typeof a == 'object' && '__lshift__' in a) {
        return a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return b.__rlshift__ (a);
    }
    else {
        return a << b;
    }
};
export function __rshift__ (a, b) {
    if (typeof a == 'object' && '__rshift__' in a) {
        return a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return b.__rrshift__ (a);
    }
    else {
        return a >> b;
    }
};
export function __or__ (a, b) {
    if (typeof a == 'object' && '__or__' in a) {
        return a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return b.__ror__ (a);
    }
    else {
        return a | b;
    }
};
export function __xor__ (a, b) {
    if (typeof a == 'object' && '__xor__' in a) {
        return a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return b.__rxor__ (a);
    }
    else {
        return a ^ b;
    }
};
export function __and__ (a, b) {
    if (typeof a == 'object' && '__and__' in a) {
        return a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return b.__rand__ (a);
    }
    else {
        return a & b;
    }
};
export function __eq__ (a, b) {
    if (typeof a == 'object' && '__eq__' in a) {
        return a.__eq__ (b);
    }
    else {
        return a == b;
    }
};
export function __ne__ (a, b) {
    if (typeof a == 'object' && '__ne__' in a) {
        return a.__ne__ (b);
    }
    else {
        return a != b
    }
};
export function __lt__ (a, b) {
    if (typeof a == 'object' && '__lt__' in a) {
        return a.__lt__ (b);
    }
    else {
        return a < b;
    }
};
export function __le__ (a, b) {
    if (typeof a == 'object' && '__le__' in a) {
        return a.__le__ (b);
    }
    else {
        return a <= b;
    }
};
export function __gt__ (a, b) {
    if (typeof a == 'object' && '__gt__' in a) {
        return a.__gt__ (b);
    }
    else {
        return a > b;
    }
};
export function __ge__ (a, b) {
    if (typeof a == 'object' && '__ge__' in a) {
        return a.__ge__ (b);
    }
    else {
        return a >= b;
    }
};
export function __imatmul__ (a, b) {
    if ('__imatmul__' in a) {
        return a.__imatmul__ (b);
    }
    else {
        return a.__matmul__ (b);
    }
};
export function __ipow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__ipow__ (b);
    }
    else if (typeof a == 'object' && '__ipow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
export function __ijsmod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__ismod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
export function __imod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__imod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
export function __imul__ (a, b) {
    if (typeof a == 'object' && '__imul__' in a) {
        return a.__imul__ (b);
    }
    else if (typeof a == 'object' && '__mul__' in a) {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return a = b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return a = b.__rmul__ (a);
    }
    else {
        return a *= b;
    }
};
export function __idiv__ (a, b) {
    if (typeof a == 'object' && '__idiv__' in a) {
        return a.__idiv__ (b);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a = a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return a = b.__rdiv__ (a);
    }
    else {
        return a /= b;
    }
};
export function __iadd__ (a, b) {
    if (typeof a == 'object' && '__iadd__' in a) {
        return a.__iadd__ (b);
    }
    else if (typeof a == 'object' && '__add__' in a) {
        return a = a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return a = b.__radd__ (a);
    }
    else {
        return a += b;
    }
};
export function __isub__ (a, b) {
    if (typeof a == 'object' && '__isub__' in a) {
        return a.__isub__ (b);
    }
    else if (typeof a == 'object' && '__sub__' in a) {
        return a = a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return a = b.__rsub__ (a);
    }
    else {
        return a -= b;
    }
};
export function __ilshift__ (a, b) {
    if (typeof a == 'object' && '__ilshift__' in a) {
        return a.__ilshift__ (b);
    }
    else if (typeof a == 'object' && '__lshift__' in a) {
        return a = a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return a = b.__rlshift__ (a);
    }
    else {
        return a <<= b;
    }
};
export function __irshift__ (a, b) {
    if (typeof a == 'object' && '__irshift__' in a) {
        return a.__irshift__ (b);
    }
    else if (typeof a == 'object' && '__rshift__' in a) {
        return a = a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return a = b.__rrshift__ (a);
    }
    else {
        return a >>= b;
    }
};
export function __ior__ (a, b) {
    if (typeof a == 'object' && '__ior__' in a) {
        return a.__ior__ (b);
    }
    else if (typeof a == 'object' && '__or__' in a) {
        return a = a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return a = b.__ror__ (a);
    }
    else {
        return a |= b;
    }
};
export function __ixor__ (a, b) {
    if (typeof a == 'object' && '__ixor__' in a) {
        return a.__ixor__ (b);
    }
    else if (typeof a == 'object' && '__xor__' in a) {
        return a = a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return a = b.__rxor__ (a);
    }
    else {
        return a ^= b;
    }
};
export function __iand__ (a, b) {
    if (typeof a == 'object' && '__iand__' in a) {
        return a.__iand__ (b);
    }
    else if (typeof a == 'object' && '__and__' in a) {
        return a = a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return a = b.__rand__ (a);
    }
    else {
        return a &= b;
    }
};
export function __getitem__ (container, key) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ (key);
    }
    else if ( ['[object Array]', '[object String]'].includes(Object.prototype.toString.call(container)) ) {
        const result = container[key < 0 ? container.length + key : key];
        if (result === undefined) {
            throw IndexError ("index out of range", new Error());
        }
        return result;
    }
    else {
        return container [key];
    }
};
export function __setitem__ (container, key, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ (key, value);
    }
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
        container [container.length + key] = value;
    }
    else {
        container [key] = value;
    }
};
export function __getslice__ (container, lower, upper, step) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ ([lower, upper, step]);
    }
    else {
        return container.__getslice__ (lower, upper, step);
    }
};
export function __setslice__ (container, lower, upper, step, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ ([lower, upper, step], value);
    }
    else {
        container.__setslice__ (lower, upper, step, value);
    }
};
export var BaseException =  __class__ ('BaseException', [object], {
	__module__: __name__,
});
export var Exception =  __class__ ('Exception', [BaseException], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.__args__ = args;
		if (kwargs.error != null) {
			self.stack = kwargs.error.stack;
		}
		else if (Error) {
			self.stack = new Error ().stack;
		}
		else {
			self.stack = 'No stack trace available';
		}
	});},
	get __repr__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
		}
		else if (len (self.__args__)) {
			return '{}({})'.format (self.__class__.__name__, repr (self.__args__ [0]));
		}
		else {
			return '{}()'.format (self.__class__.__name__);
		}
	});},
	get __str__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return str (tuple (self.__args__));
		}
		else if (len (self.__args__)) {
			return str (self.__args__ [0]);
		}
		else {
			return '';
		}
	});}
});
export var IterableError =  __class__ ('IterableError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
	});}
});
export var StopIteration =  __class__ ('StopIteration', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
	});}
});
export var ValueError =  __class__ ('ValueError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var KeyError =  __class__ ('KeyError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var AssertionError =  __class__ ('AssertionError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		if (message) {
			Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
		}
		else {
			Exception.__init__ (self, __kwargtrans__ ({error: error}));
		}
	});}
});
export var NotImplementedError =  __class__ ('NotImplementedError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var IndexError =  __class__ ('IndexError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var AttributeError =  __class__ ('AttributeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var py_TypeError =  __class__ ('py_TypeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
export var Warning =  __class__ ('Warning', [Exception], {
	__module__: __name__,
});
export var UserWarning =  __class__ ('UserWarning', [Warning], {
	__module__: __name__,
});
export var DeprecationWarning =  __class__ ('DeprecationWarning', [Warning], {
	__module__: __name__,
});
export var RuntimeWarning =  __class__ ('RuntimeWarning', [Warning], {
	__module__: __name__,
});
export var _sort = function (iterable, key, reverse) {
	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
		var key = null;
	};
	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
		var reverse = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (key) {
		iterable.sort ((function __lambda__ (a, b) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return (key (a) < key (b) ? -(1) : 1);
		}));
	}
	else {
		iterable.sort ((function __lambda__ (a, b) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return (a < b ? -(1) : 1);
		}));
	}
	if (reverse) {
		iterable.reverse ();
	}
};
export var sorted = function (iterable) {
	var key = null;
	var reverse = false;
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (py_typeof (iterable) == dict) {
		var result = _copy (iterable.py_keys ());
	}
	else {
		var result = _copy (iterable);
	}
	_sort (result, key, reverse);
	return result;
};
export var __sort__ = function (iterable) {
	var key = null;
	var reverse = false;
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	_sort (iterable, key, reverse);
};
export var map = function (func) {
	var iterables = tuple ([].slice.apply (arguments).slice (1));
	return (function () {
		var __accu0__ = [];
		for (var py_items of zip (...iterables)) {
			__accu0__.append (func (...py_items));
		}
		return __accu0__;
	}) ();
};
export var filter = function (func, iterable) {
	if (func == null) {
		var func = bool;
	}
	return (function () {
		var __accu0__ = [];
		for (var item of iterable) {
			if (func (item)) {
				__accu0__.append (item);
			}
		}
		return __accu0__;
	}) ();
};
export var divmod = function (n, d) {
	return tuple ([Math.floor (n / d), __mod__ (n, d)]);
};
export var __Terminal__ =  __class__ ('__Terminal__', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.buffer = '';
		try {
			self.element = document.getElementById ('__terminal__');
		}
		catch (__except0__) {
			self.element = null;
		}
		if (self.element) {
			self.element.style.overflowX = 'auto';
			self.element.style.boxSizing = 'border-box';
			self.element.style.padding = '5px';
			self.element.innerHTML = '_';
		}
	});},
	get print () {return __get__ (this, function (self) {
		var sep = ' ';
		var end = '\n';
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
			var __accu0__ = [];
			for (var arg of args) {
				__accu0__.append (str (arg));
			}
			return __accu0__;
		}) ()), end).__getslice__ (-(4096), null, 1);
		if (self.element) {
			self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
			self.element.scrollTop = self.element.scrollHeight;
		}
		else {
			console.log (sep.join ((function () {
				var __accu0__ = [];
				for (var arg of args) {
					__accu0__.append (str (arg));
				}
				return __accu0__;
			}) ()));
		}
	});},
	get input () {return __get__ (this, function (self, question) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'question': var question = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
		var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(8), null, 1)));
		self.print (answer);
		return answer;
	});}
});
export var __terminal__ = __Terminal__ ();
export var print = __terminal__.print;
export var input = __terminal__.input;

//# sourceMappingURL=org.transcrypt.__runtime__.map