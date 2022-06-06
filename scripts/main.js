var obj = JSON.parse(localStorage.getItem("user")) || {}
var form = document.querySelector("#forms").addEventListener("submit", function(event) {
    event.preventDefault();
    obj = {
            name: forms.name.value,
            email: forms.email.value,
            address: forms.address.value,

            wallet: Number(forms.amount.value)
        }
        // arr.push(obj)
    localStorage.setItem("user", JSON.stringify(obj))
    window.location.reload();

})