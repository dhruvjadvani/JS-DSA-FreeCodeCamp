# Appending Variables to Strings
Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (```+=```) operator.

## Example:
```javascript
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```
```ourStr``` would have the value ```freeCodeCamp is awesome!```.

# Problem Statement
Set ```someAdjective``` to a string of at least 3 characters and append it to ```myStr``` using the ```+=``` operator.
