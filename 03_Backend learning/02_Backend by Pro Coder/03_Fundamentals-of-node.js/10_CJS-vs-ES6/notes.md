<!-- ******** Common js module *********** -->
1: it loads the files synchronous that is in main thread , but execution always done in main thread in both cases.

2: File extension optional(we can use any file extension, if we give full path)

3: It is optional to  set the type:"commonjs" in package.json (By default it set to common.js,because it is the default module system of Node.js)

4: In cjs this keyword points to module.exports by default

5: In cjs you can't use the await in top of module(file) and outside the async function
6: in cjs you return the only one value form the module.exports
7: Strict mode is not enable by default
<!-- ******** ES6 js module *********** -->
1: it loads the files Asynchronous (the work of loading of file done is seprate thred) , but execution done is always in main thread.

2: File extension mandatory(only support .js and .mjs )
3: we have to set the type:"moduel" in package.json

4: In mjs this keyword is undefined

5: In mjs you can use the  await in top of module and outside of the async function also

6: we can export multiple values

7: Strict mode is enable by default
