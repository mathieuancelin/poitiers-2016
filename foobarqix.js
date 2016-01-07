'use strict';

const ul = document.createElement('ul');

const chars = ['', '', '', 'Foo', '', 'Bar', '', 'Qix', '', ''];
for (let i = 1; i < 101; i++) {
  let result = '';
  if (i % 3 === 0) result += 'Foo';
  if (i % 5 === 0) result += 'Bar';
  if (i % 7 === 0) result += 'Qix';
  result += [].map.call(`${i}`, c => chars[c]).join('');
  const printableResult = result.length === 0 ? i : result;
  const value = `${i} \u21D2 ${printableResult}`;
  console.log(value);
  
  const li = document.createElement('li');
  const text = document.createTextNode(value);
  li.appendChild(text);
  ul.appendChild(li);
}
document.getElementById('app').appendChild(ul);
