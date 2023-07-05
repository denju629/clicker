# How to make clicker game!
## Codes
### index.html
```html
<head>
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="script.js"></script>
</head>
<body>
I like use clicker game!
<div></div>
<span class="count">0</span>
<div></div>
<button class="button" onclick="click1()">Click me</button>
</body>
```
### style.css
```css
.button {
  background-color: green;
}
```
### script.js
```js
var click = 0

function click1() {
  click += 1
}

setInterval(() => {
  document.querySelector(".count").innerHTML= click
}, 100)
```
## Publish GitHub Pages
