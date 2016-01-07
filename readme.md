# Java Web

## Slides

* [Introduction au web](./slides/intro-web.pdf)
* [Java EE 7](./slides/JavaEE7.pdf)
* [Play 1](./slides/play1.pdf)

## FooBarQix

Vous trouverez [ici](http://mathieuancelin.github.io/poitiers-2016/foobarqix.html) le challenge FooBarQix

Voici une solution possible au problème en ES5

```javascript
for (var i = 1; i <= 100; i++) {
  var result = '';
  var str = i + '';
  if (i % 3 === 0) result += 'Foo';
  if (i % 5 === 0) result += 'Bar';
  if (i % 7 === 0) result += 'Qix';
  for (var j = 0; j < str.length; j++) {  
    if (str[j] === '3') result += 'Foo';
    if (str[j] === '5') result += 'Bar';
    if (str[j] === '7') result += 'Qix';
  }
  var printableResult = result.length === 0 ? i : result;
  console.log(i + ' \u21D2 ' + printableResult);
}
```

ou encore en jouant avec ES6

```javascript
const chars = ['', '', '', 'Foo', '', 'Bar', '', 'Qix', '', ''];
Array(100).fill().map((_, i) => i + 1).forEach(i => {
  let result = '';
  if (i % 3 === 0) result += 'Foo';
  if (i % 5 === 0) result += 'Bar';
  if (i % 7 === 0) result += 'Qix';
  result += [].map.call(`${i}`, c => chars[c]).join('');
  const printableResult = result.length === 0 ? i : result;
  console.log(`${i} \u21D2 ${printableResult}`);
});
```

## TP

Voici un [exemple](./todo-template.html) de l'application à créer 

* [Enoncé pour Todo List en Java EE](./tp/todo-javaee7.html)
* [Enoncé pour la Todo List avec Play Framework](./tp/todo-play1.html)
