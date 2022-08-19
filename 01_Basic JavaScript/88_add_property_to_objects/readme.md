# Add New Properties to a JavaScript Object
You can add new properties to existing JavaScript objects the same way you would modify them.

Here's how we would add a bark property to ourDog:
```javascript
ourDog.bark = "bow-wow";
```
or
```javascript
ourDog["bark"] = "bow-wow";
```
Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

Example:
```javascript
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```
