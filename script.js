var click = 0

function click1() {
  click += 1
}

setInterval(() => {
  document.querySelector(".count").innerHTML= click
}, 100)
