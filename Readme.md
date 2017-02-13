# utils-igor-es6
Java script utils write in ecma6.
---
### Installation


```bash
npm install utils-igor-es6
```
---
### Example


index.js
``` js
import obj from '../Obj';
import arr from '../Arr';
import type from '../Type';
import date from '../Date';
import str from '../Str';

var testArr = [2,3,4,4,4,4,5];
var testObj = {};

console.log({
	objEmpty   : obj.isEmpty(testObj),
	isFunction : type.isFn(testObj),
	arr        : arr.unique(testArr)
});
```
**Result:**
``` json
{"objEmpty":true,"isFunction":false,"arr":[2,3,4,5]}
```
---
### Version
1.0.0   
[Api description](https://github.com/eagle7410/utils-igor-es6/master/Api.md)   
---
### People

Author and developer is [Igor Stcherbina](https://github.com/eagle7410)
---
### License
----
MIT

**Free Software**
