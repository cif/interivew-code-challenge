# Customization Code Challenge
Often we have to manipulate information of various shapes within our applications. These exercies define a constant `data` in global scope which is to be repurposed in a specified way.

The first of these exercies is straight forward, the second is a bit harder.

* For each problem, write code that returns the desired new information.
* You must **include tests** for any functions you write.
* Watch your tests and code with `npm run watch`
* You may install and use any external libraries you wish.

### 1. Inverted Array Mode

Complete the function defined in `exercise-one/index.js`. The corresponding tests are in `exercise-one/index.test.js`

* The function should always return the `data` (an array) in reverse order.
* When mode passed is as `'prod'` the function should append the string `.js` to each element in the array.
* When the mode passed is `'dev'` the function should append the string `.test.js` to each element in the array.

*If you need to you can run the code from the root of this project with `npm run one`*


### 2. Inventory Short Id

Complete the function defined in `exercise-two/index.js`. The corresponding tests are in `exercise-two/index.test.js`

* The function should find nested objects with an `id:` property matching the first argument, then generate a value to store as `shortId:` in the same object.
* You may use any algorithm of your choice to generate a short id but it must be unique.
* The function must work for all ids present in `data`.

For example if `data` were to be:

```js
  {
    id: 'apples'
  }
```

Calling your function with `generateShortIds('apples')` would return:

```js
  {
    id: 'apples',
    shortId: 'APL'
  }
```

*If you need to you can run the code from the root of this project with `npm run two`*


## Bonus Points!

Refactor `generateShortIds` so that when no `id` argument is passed, it will add the shortId to every nested object with an id.

Also, there are no wrong answers!