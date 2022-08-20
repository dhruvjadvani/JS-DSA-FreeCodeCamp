# Delete Properties from a JavaScript Object
We can also delete properties from objects like this:

```javascript
delete ourDog.bark;
```

Example:
```javascript
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```
After the last line shown above, ourDog looks like:
```javascript
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```
