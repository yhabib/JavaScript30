# Array Cardio Day 2

The continuation of the array workout takes us to use some new build-in methods:

* [some]()
* [every]()
* [find]()
* [findIndex]()

## Notes

There is a nice trick implemented in this exercise. Following a *functional-programming*
style and making use fo the ES6 *spread* operator we delete an element from an array 
without leaving empty places:

```javascript
const index = comments.findIndex(comment => comment.id === 823423);
const newComments = [         
	...comments.slice(0, index),
	...comments.slice(index + 1, comments.length)
];
```