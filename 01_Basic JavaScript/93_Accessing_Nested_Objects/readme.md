# Accessing Nested Objects
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:
```javascript
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```
```ourStorage.cabinet["top drawer"].folder2``` would be the string ```secrets```, and ```ourStorage.desk.drawer``` would be the string ```stapler```.
