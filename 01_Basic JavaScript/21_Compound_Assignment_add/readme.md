# Compound Assignment With Augmented Addition
In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:
```javascript
myVar = myVar + 5;
```
to add ```5``` to ```myVar```. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the ```+=``` operator.
```javascript
let myVar = 1;
myVar += 5;
console.log(myVar);
```
```6``` would be displayed in the console.

# Problem Statement
Convert the assignments for ```a```, ```b```, and ```c``` to use the ```+=``` operator.
