var arr = JSON.parse(localStorage.getItem("purchase")) || []
async function fetchfunction() {
    var x = await fetch("https://masai-vouchers-api.herokuapp.com/api/vouchers")
    var y = await x.json()
    var data = y[0]
    console.log(data.vouchers)
    var s = data.vouchers
    appendfunc(s)

}
fetchfunction()

function appendfunc(y) {


    var main = document.querySelector("#voucher_list")
    main.innerHTML = null
    y.forEach(function(elem) {
        var div1 = document.createElement("div")
        div1.setAttribute("class", "voucher")
        var img = document.createElement("img")
        img.src = elem.image
        var name = document.createElement("h1")
        name.innerText = elem.name
        var price = document.createElement("h1")
        price.innerText = elem.price
        var btn = document.createElement("button")
        btn.innerText = "buy_voucher"
        btn.setAttribute("class", "buy_voucher")
        btn.addEventListener("click", function() {
            purchase(elem)
        })
        div1.append(img, name, price, btn)
        main.append(div1)

    });


}
var obj = JSON.parse(localStorage.getItem("user")) || {}
var upper = document.querySelector("#upper")
var balance = document.createElement("h1")
balance.innerText = Number(obj.wallet)
upper.append(balance)



function purchase(elem) {

    var upper = document.querySelector("#upper")
    upper.innerHTML = null
    if (Number(elem.price) <= Number(obj.wallet)) {
        alert("Hurray! purchase successful")

        var balance = document.createElement("h1")
        balance.innerText = Number(obj.wallet) - Number(elem.price)
        balance.setAttribute("id", "wallet_balance")
        upper.append(balance)
        arr.push(elem)
        localStorage.setItem("purchase", JSON.stringify(elem))
    } else {
        alert("Sorry! insufficient balance")

    }


}