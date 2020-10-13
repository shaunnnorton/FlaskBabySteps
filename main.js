const body = document.querySelector("body")
let book = new XMLHttpRequest()
book.open("GET", "http://127.0.0.1:5000/api/v1/resources/books/all")
book.setRequestHeader("Access-Control-Allow-Origin", true)
let vook = book.responseText


book.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
        var json = JSON.parse(this.responseText)
        body.innerHTML = `<p>${json}</p>`
        console.log(json)
    }}
book.send()