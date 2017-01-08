# Key Sequence
## Konami Code
The Konami Code( コナミコマンド) is a cheat code that appears in many Konami video games,[1] although the code also appears in some non-Konami games.
The following sequence of buttons on the game controller to enable a kindo of cheat:
[↑↑↓↓←→←→ba](http://konamicodesites.com/)

## Core
* Key Sequence Detection
* Trimming and array to contain the last x elemnts:
```javascript
let keys = [],
    code = "abcd";
keys.splice(-keys.length - 1, code.length - keys.length);
```