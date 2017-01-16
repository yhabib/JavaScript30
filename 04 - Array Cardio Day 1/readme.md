# Array Cardio Day 1

In this first cardio day we make use of some of the Array build-in methods:

* [map]()
* [sort]()
* [reduce]()

## Notes

When working with **sort**, two directions:
* Ascendent: 1 indicates that goes down in the array:

	```javascript
	arr.sort((a, b) => a > b ? 1 : -1);
	```
* Descendent: -1 indicates that goes up in the array:

	```javascript
	arr.sort((a, b) => a > b ? -1 : 1);
	```

When working with **reduce**, the key to be able to proccess  different data types 
is the *initialize* value:

```javasript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ],
	sol = data.reduce((obj, item) => {
		if(!obj[item]) 
			obj[item] = 0;
		obj[item]++;
		return obj;
	}, {});
```