ES6 Fundamentals Using Babel and Others

#### Module 1

For Babel 6 babel-cli is required
```
npm install -g babel-cli
npm install --save-dev babel-preset-es2015
```

Initially using index.html and script.js..

Transpile script.js to es5.js
```
babel script.js --presets es2015 --out-file es5.js
```

If files aren't available in this main view..they will be in __oldfiles__ with filename_modX
