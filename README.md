<p align="center"><a href="https://nodei.co/npm/text-to-binary-converter/"><img src="https://nodei.co/npm/text-to-binary-converter.png"></a></p>
<p align="center"><img src="https://img.shields.io/npm/v/text-to-binary-converter"> <img src="https://img.shields.io/github/repo-size/Awish-Senpai/text-to-binary-converter"> <img src="https://img.shields.io/npm/l/text-to-binary-converter"></a></p>

# text-to-binary-converter
A node module for converting any text to binary code!

# Install
```
npm i text-to-binary-converter
```

# Run
#### In JS:
```js
var binary = require('text-to-binary-converter');
console.log(binary.convert("This text just got converted to Binary."));
```

#### In Discord.js:
```js
const binary = require('text-to-binary-converter');
let text = args.slice(0).join(' ');
return <message>.channel.send(binary.convert(text));
```

## License

([The MIT License](LICENSE))

Copyright 2021 Awish-Senpai
