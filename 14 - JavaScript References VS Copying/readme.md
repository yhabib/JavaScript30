# Objects and Arrays - JavaScript References VS Copying
Comparation about how JS treats referenced and copied variables.
## Notes
In JS there are two flavor of types:

### **Primitive Types**
The following types are considered primitive in JavaScript:
* String
* Number
* Boolean
* Null
* Undefined

These types are always manipulated by **value**. This means that if we define a variable as of theses types, and then we pass it to a function or create a new variable from it, this *copy* variable will will have a copy of the value of the orignal variable. Any change to one of these will have no repercusion for the other one. 
For example:

```javascript
    let age = 100,
        age2 = age;
    console.log(age === age2, age, age2);     // true, 100, 100
    age = 200;
    console.log(age === age2, age, age2);     // false, 200, 100
```

### **Object Type**
Leaving aside that in JS almost everything is an object, we can define that what it isn't a **primitive type** it's an **Object type**. Like for example:
* Object
* Array
* Function
* Set

These *objects* are passed/treated by reference. This means that now what it's passed to a *copy variable* is the address of this variable instead of its value. So modifying the copy will modify the original variable.
Lets see how this works with arrays:
```javascript
    const arr = [1, 2, 3],
        arrC = arr;
    
    console.log(arr === arrC, arr, arrC);   //true, [1,2,3], [1,2,3]
    arrC[2] = 101;
    console.log(arr, arrC);                 // [1, 2, 101], [1, 2, 101]

```

The same for objects:
```javascript
    const person = {
            name: 'Bruce Wayne',
            city: 'Gotham City'
          },
          hero = person;
    
    console.log(person === hero);           // true
    
    hero.name = 'Batman';
    console.log(person, hero)               // {name: 'Batman', city: 'Gotham City'}, {name: 'Batman', city: 'Gotham City'}
```

The reason of this is that hero receives the address where person is targeting so both variable share the same object. So how can we overcome this?? How could we create a copy of *object* variables?
```javascript
    // arrays
    const arr = [1, 2, 3],
          arrC1 = arr.splice(),
          arrC2 = [].concat(arr),
          arrC3 = [...arr],                 // ES6
          arrC4 = Array.from(arr);
    
    // objects
    const obj = { val:1 , type:'Number' },
          objC1 = Object.assign({}, obj);
    // It also allows to change some values
    const objC2 = Object.assign({}, obj, {val: 2});
```

Now these copies recieve a the copied value of the original object. So changing them will not affect the original. But it is important to mark that it is a *shallow* copy, so  **this is only 1 level deep**.
```javascript
    const arr = [[1], 2, 3],
          arrC1 = arr.splice();
    
    console.log(arr, arrC1);                // false
    arrC1[1] = 20;
    console.log(arr, arrC1);                // [[1], 2, 3], [[1], 20, 3]

    arrC1[0] = 0;
    console.log(arr, arrC1);                // [[0], 2, 3], [[0], 20, 3]

    // same for objects
    const obj = { val:1 , metadata:{ type: 'Number' } },
          objC1 = Object.assign({}, obj);
    
    console.log(obj, objC1);                // false
    objC1.val = 2;
    console.log(obj, objC1);                // { val:1 , metadata:{ type: 'Number' } }, { val:2 , metadata:{ type: 'Number' } }

    objC1.metadata.new = 'new';
    console.log(obj, objC1);                // { val:1 , metadata:{ type: 'Number', new: 'new' } }, { val:2 , metadata:{ type: 'Number', new: 'new' } }
```

To solve that we could draw on the *lodash* cloneDeep method, that works with objects and arrays.
As a **cheap** solution for objects we could also do the next(*	
JSON serialization and parsing is painfully slo, so native methods will be faster*):
```javascript
    const obj = { val:1 , metadata:{ type: 'Number' } },
          objC1 = JSON.parse(JSON.stringify(obj)); 
```
