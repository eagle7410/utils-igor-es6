/**
 * Created by igor on 30.05.16.
 * @module type
 * @description Working with types
 */

/**
 * Check s is string
 * @param {Mixed}s
 * @returns {boolean}
 */
const isString = (s) => Object.prototype.toString.call(s) === '[object String]';

/**
 * Check v is not null or undefined
 * @param {Mixed}v
 * @returns {boolean}
 */
const isSet = (v) => typeof v !== 'undefined' && v !== null;

/**
 * Empty function
 */
const noop = () => {};

/**
 * if f is function return true else false
 * @param {Function}f
 * @returns {boolean}
 */
const isFn = (f) => typeof f === 'function';

/**
 * Check parameter is object
 * @param {Mixed}o
 */
const isObj = (o) => Object.prototype.toString.call(o) === '[object Object]';

/**
 * if fn is not function change to empty function
 * @param {Function}fn
 * @returns {*}
 */
const beFn = (fn) => !isFn(fn) ? noop : fn;

/**
 * Check this value is number
 * @param {Number}n
 */
const isNm = (n) => typeof n === 'number';

export default {isNm, beFn, isObj, isFn, noop, isSet, isString};
