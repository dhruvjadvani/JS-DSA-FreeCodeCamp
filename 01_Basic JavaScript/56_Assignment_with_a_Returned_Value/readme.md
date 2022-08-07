everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function sum which adds two numbers together, then:
```javascript
ourSum = sum(5, 12);
```
will call the sum function, which returns a value of 17 and assigns it to the ourSum variable.