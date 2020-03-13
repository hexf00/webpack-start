import "./style.css"

// 这一句不能少，否则下面报错
document.write(`<body></body>`)

var a = document.createElement('button')
a.innerHTML = "点我"
a.onclick = function () {
    import("./page")
}
document.body.appendChild(a)

console.log(a)

console.log(1212212)

